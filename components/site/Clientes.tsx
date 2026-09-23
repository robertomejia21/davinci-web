"use client";

import { useEffect, useRef, useState } from "react";
import { Btn, Flecha } from "@/components/ui";
import type { ClienteConInfo } from "@/lib/clientes";

const COPIAS = 5;

export default function Clientes({ items }: { items: ClienteConInfo[] }) {
  const [abierto, setAbierto] = useState<ClienteConInfo | null>(null);
  const cerrar = useRef<HTMLButtonElement>(null);
  const antesDelModal = useRef<HTMLElement | null>(null);

  /* cerrar con Escape, bloquear el scroll del fondo y devolver el foco */
  useEffect(() => {
    if (!abierto) return;
    antesDelModal.current = document.activeElement as HTMLElement;
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cerrar.current?.focus();

    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(null);
    };
    window.addEventListener("keydown", tecla);
    return () => {
      window.removeEventListener("keydown", tecla);
      document.body.style.overflow = previo;
      antesDelModal.current?.focus?.();
    };
  }, [abierto]);

  /* con el foco dentro del iframe, Escape no llega a esta ventana: se escucha
     también ahí. Si la ficha tiene abierta su propia capa (p. ej. su lupa, que
     bloquea el scroll de su body), Escape es para ella y el modal no se cierra. */
  const escucharEscape = (marco: HTMLIFrameElement) => {
    const ventana = marco.contentWindow;
    if (!ventana) return;
    try {
      ventana.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        if (ventana.document.body.style.overflow === "hidden") return;
        setAbierto(null);
      }, true);
    } catch { /* otro origen: solo funciona el Escape de fuera */ }
  };

  const logo = (c: ClienteConInfo, copia: number) => {
    const img = (
      <img
        className="logo-cliente"
        src={`/clientes/${c.archivo}.webp`}
        alt={copia === 0 ? c.nombre : ""}
        loading="eager"
        fetchPriority="low"
        decoding="async"
        height={56}
      />
    );
    if (!c.ficha) return <span key={c.archivo}>{img}</span>;
    return (
      <button
        key={c.archivo}
        type="button"
        className="logo-btn"
        onClick={() => setAbierto(c)}
        aria-label={`Ver qué construimos para ${c.nombre}`}
        tabIndex={copia === 0 ? 0 : -1}
      >
        {img}
      </button>
    );
  };

  return (
    <>
      <div className="logos" data-modal={!!abierto} aria-label="Empresas que confían en Da Vinci IA">
        <div className="logos-pista" style={{ ["--copias" as string]: COPIAS }}>
          {Array.from({ length: COPIAS }).map((_, c) => (
            <div className="logos-set" key={c} aria-hidden={c > 0}>
              {items.map((it) => logo(it, c))}
            </div>
          ))}
        </div>
      </div>

      {abierto && (
        <div
          className="modal modal-cliente"
          data-visible="true"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ficha-titulo"
          onClick={(e) => { if (e.target === e.currentTarget) setAbierto(null); }}
        >
          <div className="modal-caja">
            <button
              ref={cerrar}
              className="modal-x"
              type="button"
              aria-label="Cerrar"
              onClick={() => setAbierto(null)}
            >✕</button>

            <header className="ficha-top">
              <img src={`/clientes/${abierto.archivo}.webp`} alt="" height={48} />
              <div>
                <span className="label">Caso de taller</span>
                <h3 id="ficha-titulo">{abierto.nombre}</h3>
              </div>
              <div className="ficha-acciones">
                <a className="ficha-nueva" href={abierto.ficha!} target="_blank" rel="noopener">
                  Abrir en pestaña nueva ↗
                </a>
                <Btn href="/contacto">Quiero algo así</Btn>
              </div>
            </header>

            <iframe
              className="ficha-marco"
              src={abierto.ficha!}
              title={`Caso ${abierto.nombre}`}
              onLoad={(e) => escucharEscape(e.currentTarget)}
            />
          </div>
        </div>
      )}
    </>
  );
}
