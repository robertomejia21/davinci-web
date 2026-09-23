import Link from "next/link";
import { Enlace } from "@/components/ui";
import type { Fila } from "@/lib/contenido";

import { Icono, type NombreIcono } from "@/components/ui/Icono";
import { IconoMano } from "@/components/ui/IconoMano";
/* tarjeta de plataforma: abierta o «bajo llave» */
export function Plataforma({
  ico, nombre, texto, href, abierta,
}: { ico: NombreIcono; nombre: string; texto: string; href: string; abierta?: boolean }) {
  return (
    <article className="card" data-reveal style={{ display: "flex", flexDirection: "column", gap: ".35rem" }}>
      <IconoMano n={ico} tam={44} className="ico-tarjeta" />
      <h3 style={{ fontSize: "1.24rem", marginBottom: ".2rem" }}>{nombre}</h3>
      <p>{texto}</p>
      <div style={{ marginTop: "auto", paddingTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <span className={`chip-tag${abierta ? " chip-naranja" : ""}`}>
          {abierta ? "Disponible" : "Bajo llave · demo guiada"}
        </span>
        <Enlace href={href}>{abierta ? "Abrir la plataforma" : "Pedir acceso"}</Enlace>
      </div>
    </article>
  );
}

/* rejilla «este mundo, en corto» */
export function EnCorto({ items }: { items: Fila[] }) {
  return (
    <div className={`grid ${items.length === 3 ? "g3" : "g4"}`}>
      {items.map(([t, d], i) => (
        <article className="card" key={t} data-reveal>
          <span className="card-num">0{i + 1}</span>
          <h4>{t}</h4>
          <p>{d}</p>
        </article>
      ))}
    </div>
  );
}

/* bloque de garantía */
export function Garantia() {
  return (
    <div className="card card-oscura" data-reveal>
      <span className="label"><Icono n="escudo" /> Garantía del taller</span>
      <h3 style={{ fontSize: "1.35rem" }}>
        Si el diagnóstico no te da claridad sobre dónde está tu retorno, te quedas con el mapa de tu
        operación — gratis — y no te volvemos a buscar.
      </h3>
      <p>Así de seguros estamos de lo que vas a ver.</p>
    </div>
  );
}

/* nota al pie con enlace */
export function Nota({ children }: { children: React.ReactNode }) {
  return <p className="muted" style={{ marginTop: "1.6rem", fontSize: ".92rem" }}>{children}</p>;
}

export { Link };
