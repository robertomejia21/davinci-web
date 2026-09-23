import Link from "next/link";
import Image from "next/image";
import { SITIO } from "@/lib/contenido";
import { FOOTER_COLS } from "@/lib/nav";
import { Flecha } from "@/components/ui";
import { RelojTaller, Compartir } from "./Efectos";

import { Icono } from "@/components/ui/Icono";
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
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1.2 1.3-1.1 3 .3 5 .8 1.1 2.6 3.7 6 5.1 2.3.9 2.8.8 3.4.7.8-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1113.3 3.2 8.1 8.1 0 01-6.1 2.7z" />
        </svg>
      </a>
    </>
  );
}
