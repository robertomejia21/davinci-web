/* ============================================================
   Genera components/ui/iconos-boceto.ts e iconos-mano.ts con SOLO
   los íconos que usa el sitio, para no cargar sets completos.

   Cada concepto tiene dos versiones:
     f → Streamline Freehand (dibujado a mano, CC BY 4.0). Se usa en
         tamaño grande. null = el set no tiene ese concepto.
     p → Phosphor (MIT). Se usa en tamaño chico, con filtro de boceto,
         y como respaldo cuando Freehand no tiene el concepto.

   Para agregar un ícono: añádelo aquí y corre  npm run iconos
   Nombres: https://icon-sets.iconify.design/streamline-freehand/
            https://icon-sets.iconify.design/ph/
   ============================================================ */
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const FREEHAND = require("@iconify-json/streamline-freehand/icons.json");
const PHOSPHOR = require("@iconify-json/ph/icons.json");
const SIMPLE = require("@iconify-json/simple-icons/icons.json");

/* logos de marca tal cual (Simple Icons, CC0): sin filtro de boceto,
   porque un logo oficial no se «dibuja» */
const MARCAS = {
  whatsapp: "whatsapp",
};

const CONCEPTOS = {
  llamada:     ["help-headphones-customer-support", "phone-call"],
  trato:       ["business-deal-handshake", "handshake"],
  celular:     ["vibrate-smartphone", "device-mobile"],
  whatsapp:    [null, "whatsapp-logo"],
  chat:        ["conversation-chat", "chat-circle-dots"],
  correo:      ["envelope-letter-front", "envelope-simple"],
  llave:       ["lock-key-1", "key"],
  factura:     ["receipt", "receipt"],
  documento:   ["notes-paper", "file-text"],
  paquete:     ["archive-box", "package"],
  alerta:      ["alerts-warning-triangle", "warning"],
  dinero:      ["money-bag-dollar", "money"],
  billete:     ["money-cash-bill", "money-wavy"],
  banco:       ["saving-bank", "bank"],
  calculadora: ["accounting-calculator", "calculator"],
  camion:      [null, "truck"],
  mapa:        ["mobilephone-action-navigation-map", "map-trifold"],
  ubicacion:   [null, "map-pin"],
  satelite:    [null, "broadcast"],
  gasolina:    [null, "gas-pump"],
  carrito:     ["shopping-cart-trolley", "shopping-cart"],
  anaquel:     ["shopping-basket-1", "basket"],
  cocina:      [null, "fork-knife"],
  sarten:      [null, "cooking-pot"],
  fabrica:     [null, "factory"],
  engrane:     ["settings-cog", "gear"],
  camara:      ["camera", "camera"],
  campana:     ["alert-alarm-bell", "bell-ringing"],
  estrella:    [null, "star"],
  cohete:      ["product-launch-go-sign", "rocket-launch"],
  cerebro:     [null, "brain"],
  repetir:     ["synchronize-arrows", "arrows-clockwise"],
  microfono:   ["microphone", "microphone"],
  escudo:      ["media-protection-shield", "shield-check"],
  enlace:      ["link-paperclip", "link"],
  lupa:        ["search-magnifier", "magnifying-glass"],
  play:        [null, "play"],
  ojo:         ["view-eye-1", "eye"],
  hecho:       ["task-clipboard-check", "check-circle"],
  equipo:      ["business-management-team-up", "users-three"],
  ajuste:      [null, "sliders-horizontal"],
  calendario:  ["calendar-date", "calendar-check"],
  precio:      ["tag-sale-price", "tag"],
  no:          [null, "x-circle"],
};

function extraer(set, nombre, concepto) {
  if (!nombre) return null;
  const ic = set.icons[nombre];
  if (!ic) throw new Error(`«${nombre}» no existe en ${set.prefix} (concepto ${concepto})`);
  const w = ic.width ?? set.width ?? 16;
  const h = ic.height ?? set.height ?? 16;
  return { v: `0 0 ${w} ${h}`, b: ic.body };
}

const boceto = {};
const mano = {};
for (const [c, [f, p]] of Object.entries(CONCEPTOS)) {
  boceto[c] = extraer(PHOSPHOR, p, c);
  const m = extraer(FREEHAND, f, c);
  if (m) mano[c] = m;
}

/* dos archivos: el de trazo chico va a cualquier componente (también a los
   interactivos); el de Freehand pesa más y solo lo importan los íconos grandes */
function escribir(archivo, contenido) {
  const destino = new URL(`../components/ui/${archivo}`, import.meta.url);
  let previo = "";
  try { previo = readFileSync(destino, "utf8"); } catch {}
  if (previo !== contenido) writeFileSync(destino, contenido);
}
const CABEZA = "/* GENERADO por scripts/iconos.mjs — no editar a mano (npm run iconos). */\n";

escribir("iconos-boceto.ts", CABEZA + [
  `export type SvgIcono = { v: string; b: string };`,
  `export const BOCETO = ${JSON.stringify(boceto)} satisfies Record<string, SvgIcono>;`,
  `export type NombreIcono = keyof typeof BOCETO;`,
].join("\n") + "\n");

const marcas = Object.fromEntries(Object.entries(MARCAS).map(([c, n]) => [c, extraer(SIMPLE, n, c)]));
escribir("iconos-marcas.ts", CABEZA + [
  `import type { SvgIcono } from "./iconos-boceto";`,
  `export const MARCAS = ${JSON.stringify(marcas)} satisfies Record<string, SvgIcono>;`,
  `export type NombreMarca = keyof typeof MARCAS;`,
].join("\n") + "\n");

escribir("iconos-mano.ts", CABEZA + [
  `import type { NombreIcono, SvgIcono } from "./iconos-boceto";`,
  `export const MANO: Partial<Record<NombreIcono, SvgIcono>> = ${JSON.stringify(mano)};`,
].join("\n") + "\n");

console.log(`  · ${Object.keys(boceto).length} íconos (${Object.keys(mano).length} con versión a mano) → components/ui/iconos-*.ts`);
