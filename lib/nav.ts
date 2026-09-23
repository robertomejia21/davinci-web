import { MODULOS, INDUSTRIAS } from "./contenido";

import type { NombreIcono } from "@/components/ui/Icono";
export type Enlace = { href: string; titulo: string; desc?: string; icono?: NombreIcono };

export const DEMOS_NAV: Enlace[] = [
  { href: "/demos", titulo: "Sala de demos", desc: "Voz real, agentes y WhatsApp en vivo." },
  { href: "/demos/industrial", titulo: "Área industrial", desc: "Maquila, líneas, calidad y proveedores." },
  { href: "/demos/comercio", titulo: "Comercio y servicios", desc: "Súper, logística, restaurante, comercializadora." },
  { href: "/demos/financiera", titulo: "Financiera y fiscal", desc: "Números que se cuidan solos." },
  { href: "/demos/emprendimiento", titulo: "Emprendimiento", desc: "Tu primer sistema, a precio de arranque." },
  { href: "/planta-da-vinci", titulo: "Planta Da Vinci", desc: "La app insignia: SCADA con cerebro." },
];

export const MODULOS_NAV: Enlace[] = MODULOS.map((m) => ({
  href: `/modulos/${m.slug}`,
  titulo: m.titulo,
  desc: m.tagline,
}));

export const INDUSTRIAS_NAV: Enlace[] = INDUSTRIAS.map((i) => ({
  href: `/industrias/${i.slug}`,
  titulo: i.titulo,
  desc: i.tagline,
}));

export const MAS_NAV: Enlace[] = [
  { href: "/lisa", titulo: "LISA", icono: "llave", desc: "Tu agente empresarial maestro." },
  { href: "/metodo", titulo: "El Método Da Vinci", desc: "Boceto → prueba → ajuste → obra." },
  { href: "/tecnologia", titulo: "Tecnología", desc: "El taller por dentro, sin humo." },
  { href: "/inversion", titulo: "La inversión", desc: "Cuánto cuesta y cómo se decide." },
  { href: "/nosotros", titulo: "Nosotros", desc: "Por qué elegimos su nombre." },
  { href: "/blog", titulo: "El cuaderno", desc: "Ideas claras sobre IA aplicada." },
  { href: "/casos", titulo: "Casos y resultados", desc: "Que hablen los números." },
  { href: "/seguridad", titulo: "Seguridad y datos", desc: "Tus datos son tuyos. Punto." },
];

export const FOOTER_COLS: { titulo: string; links: Enlace[] }[] = [
  {
    titulo: "Explora",
    links: [
      { href: "/lisa", titulo: "LISA", icono: "llave" },
      { href: "/central", titulo: "Da Vinci Central" },
      { href: "/demos", titulo: "Sala de demos" },
      { href: "/metodo", titulo: "Método" },
      { href: "/tecnologia", titulo: "Tecnología" },
      { href: "/inversion", titulo: "Inversión" },
      { href: "/nosotros", titulo: "Nosotros" },
      { href: "/blog", titulo: "Blog" },
    ],
  },
  {
    titulo: "Soluciones",
    links: [
      { href: "/modulos", titulo: "Los 6 módulos" },
      { href: "/industrias", titulo: "9 industrias" },
      { href: "/planta", titulo: "Planta y transformación" },
      { href: "/finanzas", titulo: "Contabilidad · Finanzas · Fiscal" },
      { href: "/planta-da-vinci", titulo: "Planta Da Vinci (app)" },
      { href: "/diagnostico", titulo: "Diagnóstico gratuito" },
    ],
  },
  {
    titulo: "Confianza",
    links: [
      { href: "/seguridad", titulo: "Seguridad y datos" },
      { href: "/faq", titulo: "Preguntas frecuentes" },
      { href: "/casos", titulo: "Casos" },
      { href: "/privacidad", titulo: "Aviso de privacidad" },
      { href: "/contacto", titulo: "Contacto" },
    ],
  },
];

/* rutas para el sitemap */
export const RUTAS_FIJAS = [
  "/", "/central", "/demos", "/demos/industrial", "/demos/comercio", "/demos/financiera",
  "/demos/emprendimiento", "/planta-da-vinci", "/modulos", "/industrias", "/blog", "/metodo",
  "/nosotros", "/lisa", "/tecnologia", "/inversion", "/planta", "/finanzas", "/diagnostico",
  "/seguridad", "/faq", "/casos", "/privacidad", "/contacto",
];
