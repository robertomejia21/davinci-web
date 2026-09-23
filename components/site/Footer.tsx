import Link from "next/link";
import Image from "next/image";
import { SITIO } from "@/lib/contenido";
import { FOOTER_COLS } from "@/lib/nav";
import { Flecha } from "@/components/ui";
import { RelojTaller, Compartir } from "./Efectos";

import { Icono, IconoMarca } from "@/components/ui/Icono";
export default function Footer() {
  return (
    <>
      <footer className="footer oscuro">
        <div className="wrap">
          {/* bloque «hablemos» */}
          <div className="footer-hablemos">
            <div className="footer-hablemos-txt">
              <span className="label">Toda obra empieza con una conversación</span>
              <h2>Cuéntanos qué quieres lograr.</h2>
            </div>
            <Link className="hablemos-btn" href="/contacto">
              Hablemos
              <span aria-hidden="true"><Flecha size={14} /></span>
            </Link>
          </div>

          <div className="footer-top">
            <div className="footer-marca">
              <Link className="logo" href="/">
                <Image src="/logo-davinci.png" alt="" width={36} height={32} />
                <span className="logo-txt">Da Vinci<span> IA</span></span>
              </Link>
              <span className="serif">{SITIO.lema}</span>
              <p className="mono" style={{ color: "var(--naranja)", marginTop: ".8rem" }}>
                Inteligencia operativa · MX
              </p>
              <div style={{ marginTop: "1.4rem" }}>
                <Compartir />
              </div>
            </div>

            <div className="footer-cols">
              {FOOTER_COLS.map((col) => (
                <div className="footer-col" key={col.titulo}>
                  <h5>{col.titulo}</h5>
                  {col.links.map((l) => (
                    <Link href={l.href} key={l.href}>{l.titulo}{l.icono && <> <Icono n={l.icono} /></>}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bar">
            <RelojTaller />
            <span>
              {SITIO.firma}
              {" · "}
              <a href="https://www.streamlinehq.com/" target="_blank" rel="noopener" className="u-link">
                íconos Streamline
              </a>{" "}
              (CC BY 4.0)
            </span>
          </div>
        </div>
        <div className="footer-word" aria-hidden="true">DA VINCI IA</div>
      </footer>

      <a
        className="wa-float"
        href={SITIO.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp"
      >
        <IconoMarca n="whatsapp" tam={28} />
      </a>
    </>
  );
}
