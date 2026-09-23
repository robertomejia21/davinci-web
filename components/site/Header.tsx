"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Btn, Enlace, Flecha } from "@/components/ui";
import { DEMOS_NAV, MODULOS_NAV, INDUSTRIAS_NAV, MAS_NAV, type Enlace as EnlaceT } from "@/lib/nav";

import { Icono } from "@/components/ui/Icono";
const GRUPOS: { label: string; items: EnlaceT[]; pie: [string, string, string] }[] = [
  { label: "Demos", items: DEMOS_NAV, pie: ["4 áreas · plataformas en vivo", "/demos", "Entrar a la sala"] },
  { label: "Módulos", items: MODULOS_NAV, pie: ["6 módulos · se integran o van solos", "/modulos", "Ver todos"] },
  { label: "Industrias", items: INDUSTRIAS_NAV, pie: ["9 industrias mapeadas", "/industrias", "Ver todas"] },
  { label: "Más", items: MAS_NAV, pie: ["El taller", "/contacto", "Hablemos"] },
];

export default function Header() {
  const ruta = usePathname();
  const [scroll, setScroll] = useState(false);
  const [oculto, setOculto] = useState(false);
  const [menu, setMenu] = useState(false);
  const [abierto, setAbierto] = useState<string | null>(null);
  const ultimo = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScroll(y > 20);
      setOculto(y > 420 && y > ultimo.current && !menu);
      ultimo.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [menu]);

  useEffect(() => {
    document.body.dataset.menu = String(menu);
    return () => { document.body.dataset.menu = "false"; };
  }, [menu]);

  useEffect(() => { setMenu(false); }, [ruta]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const activo = (href: string) => ruta === href || (href !== "/" && ruta.startsWith(href));

  return (
    <>
      <a className="sr-only" href="#main">Saltar al contenido</a>

      <header className="header" data-scroll={scroll} data-oculto={oculto}>
        <div className="header-in">
          <div className="header-caja">
            <Link className="logo" href="/" aria-label="DA VINCI IA">
              <Image src="/logo-davinci.png" alt="" width={32} height={28} priority />
              <span className="logo-txt">DA VINCI<span> IA</span></span>
            </Link>

            <nav aria-label="Principal">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/central" data-activo={activo("/central")}>Da Vinci Central</Link>
                </li>
                {GRUPOS.map((g) => (
                  <li className="nav-item" key={g.label}>
                    <Link className="nav-link" href={g.items[0].href}>
                      {g.label}
                      <svg width="9" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                    <div className="mega">
                      <div className="mega-grid">
                        {g.items.map((it) => (
                          <Link className="mega-link" href={it.href} key={it.href}>
                            <strong>{it.titulo}{it.icono && <> <Icono n={it.icono} /></>}</strong>
                            <span>{it.desc}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega-pie">
                        <span className="mono muted">{g.pie[0]}</span>
                        <Enlace href={g.pie[1]}>{g.pie[2]}</Enlace>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-cta">
              <Btn href="/contacto" sm>Agenda tu diagnóstico</Btn>
              <button
                className="burger"
                aria-label={menu ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menu}
                aria-controls="drawer"
                onClick={() => setMenu((v) => !v)}
              >
                <i /><i /><i />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer">
        <nav aria-label="Menú móvil">
          <div className="drawer-grupo">
            <Link className="drawer-tit" href="/central">Da Vinci Central</Link>
          </div>
          {GRUPOS.map((g) => (
            <div className="drawer-grupo" key={g.label} data-abierto={abierto === g.label}>
              <button className="drawer-tit" type="button" onClick={() => setAbierto(abierto === g.label ? null : g.label)}>
                {g.label}<i>+</i>
              </button>
              <div className="drawer-sub">
                <div>
                  {g.items.map((it) => (
                    <Link href={it.href} key={it.href}>{it.titulo}{it.icono && <> <Icono n={it.icono} /></>}</Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="drawer-grupo">
            <Link className="drawer-tit" href="/diagnostico">Diagnóstico gratuito</Link>
          </div>
          <Link className="btn" href="/contacto">
            Agenda tu diagnóstico
            <span className="chip" aria-hidden="true"><Flecha size={13} /></span>
          </Link>
        </nav>
      </div>
    </>
  );
}
