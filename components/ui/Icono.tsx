/* ============================================================
   Íconos con trazo de boceto (Phosphor + filtro que tiembla la línea).
   Sirven en cualquier componente, también en los interactivos.
   Para íconos grandes dibujados a mano: IconoMano.tsx
   Los datos salen de scripts/iconos.mjs (npm run iconos).
   ============================================================ */
import type { ReactNode } from "react";
import { BOCETO, type NombreIcono, type SvgIcono } from "./iconos-boceto";
import { MARCAS, type NombreMarca } from "./iconos-marcas";

export type { NombreIcono };

/** Filtros del trazo a mano. Se montan una vez en el layout. */
export function FiltrosBoceto() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <filter id="boceto">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="2.6" />
      </filter>
      <filter id="boceto-s">
        <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="1.3" />
      </filter>
    </svg>
  );
}

export function SvgCrudo({
  svg, tam, filtro, className = "",
}: { svg: SvgIcono; tam: number; filtro?: string; className?: string }) {
  return (
    <svg
      className={`ico ${className}`}
      viewBox={svg.v}
      width={tam}
      height={tam}
      filter={filtro ? `url(#${filtro})` : undefined}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: svg.b }}
    />
  );
}

/** Ícono de trazo de boceto. `tam` en px (por defecto se ajusta al texto). */
export function Icono({ n, tam = 16, className }: { n: NombreIcono; tam?: number; className?: string }) {
  return <SvgCrudo svg={BOCETO[n]} tam={tam} filtro={tam >= 30 ? "boceto" : "boceto-s"} className={className} />;
}

/** Logo oficial de una marca (Simple Icons), sin filtro de boceto. */
export function IconoMarca({ n, tam = 24, className }: { n: NombreMarca; tam?: number; className?: string }) {
  return <SvgCrudo svg={MARCAS[n]} tam={tam} className={className} />;
}

const TOKEN = /:([a-z]+):/g;

/** Convierte los «:nombre:» de un texto en íconos (p. ej. ":alerta: Stock bajo"). */
export function conIconos(texto: string): ReactNode {
  if (!texto.includes(":")) return texto;
  const partes: ReactNode[] = [];
  let ultimo = 0;
  for (const m of texto.matchAll(TOKEN)) {
    const n = m[1] as NombreIcono;
    if (!(n in BOCETO)) continue;
    partes.push(texto.slice(ultimo, m.index));
    partes.push(<Icono key={m.index} n={n} className="ico-txt" />);
    ultimo = m.index! + m[0].length;
  }
  if (!partes.length) return texto;
  partes.push(texto.slice(ultimo));
  return partes;
}

/** Quita los «:nombre:» (para textos planos: aria-label, title, metadatos). */
export const sinIconos = (texto: string) => texto.replace(TOKEN, "").replace(/\s{2,}/g, " ").trim();
