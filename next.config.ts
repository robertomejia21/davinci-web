import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Se despliega en Vercel. Las páginas se generan como HTML estático al
  // compilar; solo /api/whatsapp-demo corre en el servidor (usa el token
  // secreto de Green API). Por eso ya no se usa output: "export".
  trailingSlash: true,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
  // la raíz del proyecto (evita que tome el package-lock.json del home)
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
