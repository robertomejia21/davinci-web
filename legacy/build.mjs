/* ============================================================
   Da Vinci IA — generador del sitio estático
   node build.mjs   →   /dist listo para desplegar
   ============================================================ */
import { readdir, mkdir, writeFile, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITIO } from "./src/lib/layout.mjs";

const raiz = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(raiz, "dist");
const PAGES = path.join(raiz, "src", "pages");

const t0 = Date.now();

/* 1 · limpiar (vaciamos el contenido, no la carpeta: evita bloqueos en Windows) */
if (existsSync(DIST)) {
  for (const entrada of await readdir(DIST)) {
    await rm(path.join(DIST, entrada), { recursive: true, force: true });
  }
} else {
  await mkdir(DIST, { recursive: true });
}

/* 2 · assets */
await cp(path.join(raiz, "src", "assets"), path.join(DIST, "assets"), { recursive: true });

/* 3 · páginas */
const archivos = (await readdir(PAGES)).filter((f) => f.endsWith(".mjs")).sort();
const todas = [];

for (const archivo of archivos) {
  const mod = await import(pathToFileURL(path.join(PAGES, archivo)).href);
  if (typeof mod.paginas !== "function") continue;
  for (const p of mod.paginas()) todas.push(p);
}

const vistas = new Set();
for (const { ruta, html } of todas) {
  if (vistas.has(ruta)) throw new Error(`Ruta duplicada: ${ruta}`);
  vistas.add(ruta);
  await writeFile(path.join(DIST, ruta), html, "utf8");
}

/* 4 · sitemap + robots */
const hoy = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...vistas].filter((r) => r !== "404.html").sort().map((r) => `  <url><loc>${SITIO.url}/${r}</loc><lastmod>${hoy}</lastmod><changefreq>monthly</changefreq><priority>${r === "index.html" ? "1.0" : "0.7"}</priority></url>`).join("\n")}
</urlset>`;
await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITIO.url}/sitemap.xml\n`, "utf8");

/* 5 · verificación de enlaces internos */
const rotos = [];
for (const { ruta, html } of todas) {
  for (const m of html.matchAll(/href="([^"#?:]+\.html)(?:[#?][^"]*)?"/g)) {
    if (!vistas.has(m[1])) rotos.push(`${ruta} → ${m[1]}`);
  }
}

const kb = (n) => (n / 1024).toFixed(1) + " KB";
const pesoTotal = todas.reduce((a, p) => a + Buffer.byteLength(p.html), 0);

console.log(`\n  Da Vinci IA · sitio generado`);
console.log(`  ───────────────────────────────────`);
console.log(`  ${todas.length} páginas · ${kb(pesoTotal)} de HTML · ${Date.now() - t0} ms`);
console.log(`  salida: dist/`);
if (rotos.length) {
  console.log(`\n  ⚠ ${rotos.length} enlaces internos rotos:`);
  [...new Set(rotos)].forEach((r) => console.log(`    · ${r}`));
} else {
  console.log(`  ✓ sin enlaces internos rotos`);
}
console.log("");
