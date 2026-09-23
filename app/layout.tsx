import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Efectos, BarraSticky, ModalSalida } from "@/components/site/Efectos";
import { SITIO } from "@/lib/contenido";
import { FiltrosBoceto } from "@/components/ui/Icono";
import "./globals.css";

/* --- tipografía ---
   Display: grotesca técnica (títulos y botones)
   Cuerpo:  neutra de alta legibilidad
   Mono:    etiquetas tipo AGENTES_AUTONOMOS
   Serif:   cursiva renacentista para los acentos de marca      */
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

/* la fuente de la marca: solo para el nombre «Da Vinci» y los wordmarks */
const marca = localFont({
  src: "./fonts/wargika-vmvya.otf",
  variable: "--font-marca",
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO.url),
  title: {
    default: `${SITIO.nombre} — ${SITIO.slogan}`,
    template: `%s — ${SITIO.nombre}`,
  },
  description: SITIO.descripcion,
  applicationName: SITIO.nombre,
  icons: { icon: "/logo-davinci.png", apple: "/logo-davinci.png" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: SITIO.nombre,
    images: ["/logo-davinci.png"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f6f4f0",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizacion = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITIO.nombre,
  url: SITIO.url,
  slogan: SITIO.slogan,
  description: SITIO.descripcion,
  logo: `${SITIO.url}/logo-davinci.png`,
  address: { "@type": "PostalAddress", addressLocality: "Mexicali", addressRegion: "Baja California", addressCountry: "MX" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable} ${marca.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacion) }}
        />
        <FiltrosBoceto />
        <Efectos />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <BarraSticky />
        <ModalSalida />
      </body>
    </html>
  );
}
