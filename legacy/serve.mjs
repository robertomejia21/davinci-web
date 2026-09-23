/* ============================================================
   Servidor de desarrollo: reconstruye y sirve /dist
   node serve.mjs  →  http://localhost:4321
   ============================================================ */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { watch } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const raiz = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(raiz, "dist");
const PUERTO = process.env.PORT || 4321;

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

let construyendo = false;
function construir() {
  if (construyendo) return;
  construyendo = true;
  const p = spawn(process.execPath, [path.join(raiz, "build.mjs")], { stdio: "inherit" });
  p.on("close", () => { construyendo = false; });
}

construir();

/* recarga al cambiar src/ */
let temporizador = null;
watch(path.join(raiz, "src"), { recursive: true }, () => {
  clearTimeout(temporizador);
  temporizador = setTimeout(construir, 180);
});

createServer(async (req, res) => {
  try {
    let ruta = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (ruta === "/") ruta = "/index.html";
    if (!path.extname(ruta)) ruta += ".html";

    const archivo = path.join(DIST, path.normalize(ruta).replace(/^([/\\])+/, ""));
    if (!archivo.startsWith(DIST)) { res.writeHead(403).end("403"); return; }

    await stat(archivo);
    const cuerpo = await readFile(archivo);
    res.writeHead(200, {
      "Content-Type": TIPOS[path.extname(archivo)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(cuerpo);
  } catch {
    try {
      const err = await readFile(path.join(DIST, "404.html"));
      res.writeHead(404, { "Content-Type": TIPOS[".html"] }).end(err);
    } catch {
      res.writeHead(404, { "Content-Type": TIPOS[".html"] }).end("<h1>404</h1>");
    }
  }
}).listen(PUERTO, () => {
  console.log(`\n  Da Vinci IA · servidor de desarrollo`);
  console.log(`  http://localhost:${PUERTO}\n`);
});
