import type { MetadataRoute } from "next";
import { SITIO, MODULOS, INDUSTRIAS, POSTS } from "@/lib/contenido";
import { RUTAS_FIJAS } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date();
  const rutas = [
    ...RUTAS_FIJAS,
    ...MODULOS.map((m) => `/modulos/${m.slug}`),
    ...INDUSTRIAS.map((i) => `/industrias/${i.slug}`),
    ...POSTS.map((p) => `/blog/${p.slug}`),
  ];

  return rutas.map((r) => ({
    url: `${SITIO.url}${r}`,
    lastModified: hoy,
    changeFrequency: "monthly" as const,
    priority: r === "/" ? 1 : 0.7,
  }));
}
