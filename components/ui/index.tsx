import Link from "next/link";
import type { ReactNode } from "react";
import type { Fila, Panel as PanelT } from "@/lib/contenido";

import { Icono, conIconos, type NombreIcono } from "@/components/ui/Icono";
/* ---------- iconos ---------- */
export function Flecha({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- nombre de la marca (fuente wargika) ---------- */
export function Marca({ children = "Da Vinci" }: { children?: ReactNode }) {
  return <span className="marca">{children}</span>;
}

/* ---------- botón ---------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  variante?: "naranja" | "negro" | "blanco" | "linea";
  sm?: boolean;
  chip?: boolean;
  className?: string;
};

export function Btn({ href, children, variante = "naranja", sm, chip = true, className = "" }: BtnProps) {
  const v = variante === "naranja" ? "" : `btn-${variante}`;
  const externo = href.startsWith("http") || href.startsWith("#");
  const clases = ["btn", v, sm ? "btn-sm" : "", chip ? "" : "btn-solo", className].filter(Boolean).join(" ");
  const contenido = (
    <>
      {children}
      {chip && (
        <span className="chip" aria-hidden="true">
          <Flecha size={sm ? 11 : 13} />
        </span>
      )}
    </>
  );
  if (externo) return <a className={clases} href={href}>{contenido}</a>;
  return <Link className={clases} href={href}>{contenido}</Link>;
}

export function Enlace({ href, children }: { href: string; children: ReactNode }) {
  const externo = href.startsWith("http") || href.startsWith("#");
  const inner = <>{children} <Flecha size={12} /></>;
  return externo ? <a className="enlace" href={href}>{inner}</a> : <Link className="enlace" href={href}>{inner}</Link>;
}

/* ---------- estructura ---------- */
export function SecHead({
  label, titulo, lead, centrado, link,
}: {
  label?: string;
  titulo: ReactNode;
  lead?: ReactNode;
  centrado?: boolean;
  link?: { href: string; texto: string };
}) {
  return (
    <div className={`sec-head${centrado ? " centro" : ""}`} data-reveal>
      {label && <span className={`label${centrado ? " centro" : ""}`}>{label}</span>}
      <h2>{titulo}</h2>
      {lead && <p className="lead" style={centrado ? { marginInline: "auto" } : undefined}>{lead}</p>}
      {link && (
        <div style={{ marginTop: "1rem" }}>
          <Enlace href={link.href}>{link.texto}</Enlace>
        </div>
      )}
    </div>
  );
}

export function Chips({ items, naranja }: { items: string[]; naranja?: boolean }) {
  return (
    <div className="chips">
      {items.map((t) => (
        <span className={`chip-tag${naranja ? " chip-naranja" : ""}`} key={t}>{t}</span>
      ))}
    </div>
  );
}

export function Miga({ items }: { items: { href?: string; titulo: string }[] }) {
  return (
    <nav className="miga" aria-label="Ruta">
      {items.map((it, i) => (
        <span key={it.titulo} style={{ display: "contents" }}>
          {i > 0 && <i aria-hidden="true">/</i>}
          {it.href ? <Link href={it.href}>{it.titulo}</Link> : <b>{it.titulo}</b>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  miga, titulo, lead, chips, oscuro, extra,
}: {
  miga?: { href?: string; titulo: string }[];
  titulo: ReactNode;
  lead?: ReactNode;
  chips?: string[];
  oscuro?: boolean;
  extra?: ReactNode;
}) {
  return (
    <section className={`phero${oscuro ? " phero-oscuro oscuro" : ""}`}>
      <div className="rejilla" aria-hidden="true" />
      <div className="wrap">
        {miga && <Miga items={miga} />}
        <h1 data-reveal>{titulo}</h1>
        {lead && <p className="lead" data-reveal>{lead}</p>}
        {chips && (
          <div data-reveal>
            <Chips items={chips} />
          </div>
        )}
        {extra}
      </div>
    </section>
  );
}

/* ---------- panel en vivo ---------- */
export function Panel({ head, filas, top }: PanelT) {
  return (
    <div className="panel" data-reveal="zoom">
      <div className="panel-head">
        <span>{head}</span>
        <span className="vivo"><i className="punto" />en vivo</span>
      </div>
      {filas.map(([r, v]) => (
        <div className="panel-fila" key={r}>
          <span className="r">{conIconos(r)}</span>
          <span className="v">{conIconos(v)}</span>
        </div>
      ))}
      {top && (
        <div className="panel-fila top">
          <span className="r">{conIconos(top[0])}</span>
          <span className="v">{conIconos(top[1])}</span>
        </div>
      )}
    </div>
  );
}

/* ---------- dolor → cura ---------- */
export function DolorCura({ items }: { items: [string, string, string][] }) {
  return (
    <div className="dc">
      {items.map(([dolor, lbl, cura]) => (
        <article className="dc-item" key={dolor} data-reveal>
          <div className="dc-a">
            <span className="lbl">El dolor</span>
            <h4>{dolor}</h4>
          </div>
          <div className="dc-b">
            <span className="lbl">La cura · {lbl}</span>
            <p>{cura}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- métricas ---------- */
export function Metricas({ items, naranja }: { items: Fila[]; naranja?: boolean }) {
  return (
    <div className={`metricas${items.length === 3 ? " m3" : ""}`} data-reveal>
      {items.map(([n, d]) => (
        <div className={`metrica${naranja ? " naranja" : ""}`} key={d}>
          <b>{n}</b>
          <span>{d}</span>
        </div>
      ))}
    </div>
  );
}

/* `fondos`: una ilustración por bloque que va detrás, semitransparente.
   Se pasa ya renderizada (p. ej. <IconoMano />) para que los dibujos pesados
   no entren a este módulo, que también usan componentes del navegador. */
export function Escalones({
  items, iconos, fondos,
}: { items: Fila[]; iconos?: NombreIcono[]; fondos?: ReactNode[] }) {
  return (
    <div className="escalones" data-reveal>
      {items.map(([n, d], i) => (
        <div className={`escalon${fondos?.[i] ? " con-fondo" : ""}`} key={d}>
          {fondos?.[i] && <span className="escalon-fondo" aria-hidden="true">{fondos[i]}</span>}
          {iconos?.[i] && <span className="escalon-ico"><Icono n={iconos[i]} tam={22} /></span>}
          <b>{n}</b>
          <span>{d}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- puntos / lista ---------- */
export function Puntos({
  items, numerado, iconos,
}: { items: Fila[]; numerado?: boolean; iconos?: NombreIcono[] }) {
  return (
    <div className="pasos">
      {items.map(([t, d], i) => (
        <article className="paso" key={t} data-reveal>
          <span className="paso-n">
            {iconos?.[i] ? <Icono n={iconos[i]} tam={22} /> : numerado ? String(i + 1).padStart(2, "0") : "✳"}
          </span>
          <div>
            <h4>{t}</h4>
            <p dangerouslySetInnerHTML={{ __html: d }} />
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- tarjeta enlace ---------- */
export function CardLink({
  href, num, titulo, texto, cta = "Ver más",
}: { href: string; num?: string; titulo: string; texto: string; cta?: string }) {
  return (
    <Link className="card" href={href} data-reveal>
      {num && <span className="card-num">{num}</span>}
      <h3 className="color-black">{titulo}</h3>
      <p>{texto}</p>
      <span className="enlace">{cta} <Flecha size={12} /></span>
    </Link>
  );
}

/* ---------- CTA final ---------- */
export function CtaFinal({
  titulo = "¿Lo quieres en tu empresa?",
  texto = "El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.",
  boton = "Agenda tu diagnóstico gratuito",
  href = "/contacto",
}: { titulo?: string; texto?: string; boton?: string; href?: string } = {}) {
  return (
    <section className="sec">
      <div className="cta-bloque oscuro" data-reveal="zoom">
        <div className="cta-grid">
          <div>
            <span className="label" style={{ color: "rgba(255,255,255,.8)" }}>Diagnóstico gratuito</span>
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
          <div>
            <Btn href={href} variante="blanco">{boton}</Btn>
          </div>
        </div>
        <div className="wordmark abajo" aria-hidden="true">DA VINCI</div>
      </div>
    </section>
  );
}

/* ---------- programa fundador ---------- */
export function Fundador() {
  return (
    <div className="card" data-reveal style={{ borderStyle: "dashed", borderColor: "rgba(245,134,52,.5)", background: "var(--naranja-tinte)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span className="vivo"><i className="punto" />Programa fundador</span>
          <h3 style={{ marginTop: ".6rem", marginBottom: ".3rem" }}>3 proyectos fundadores con condiciones especiales</h3>
          <p style={{ maxWidth: "42rem", margin: 0 }}>
            A cambio de documentar tu caso de éxito. Los primeros resultados de Da Vinci IA se construyen con quien se anima primero.
          </p>
        </div>
        <Btn href="/contacto" variante="negro">Quiero mi lugar</Btn>
      </div>
    </div>
  );
}

/* ---------- carrusel de logos ----------
   Se repite la lista COPIAS veces y la animación desplaza exactamente
   una copia (100% / COPIAS): así nunca queda hueco, sea cual sea el ancho. */
export function Logos({ items }: { items: { archivo: string; nombre: string }[] }) {
  const COPIAS = 5;
  return (
    <div className="logos" aria-label="Empresas que confían en Da Vinci IA">
      <div className="logos-pista" style={{ ["--copias" as string]: COPIAS }}>
        {Array.from({ length: COPIAS }).map((_, c) => (
          <div className="logos-set" key={c} aria-hidden={c > 0}>
            {items.map((l) => (
              <img
                key={l.archivo}
                className="logo-cliente"
                src={`/clientes/${l.archivo}.webp`}
                alt={c === 0 ? l.nombre : ""}
                loading="eager"
                fetchPriority="low"
                decoding="async"
                height={56}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- marquee ---------- */
export function Marquee({ items, oscuro }: { items: string[]; oscuro?: boolean }) {
  const COPIAS = 4;
  return (
    <div className="marquee" aria-hidden="true" style={oscuro ? { background: "var(--negro)" } : undefined}>
      <div className="marquee-in" style={{ ["--copias" as string]: COPIAS }}>
        {Array.from({ length: COPIAS }).map((_, k) => (
          <div className="marquee-set" key={k}>
            {items.map((t, i) => (
              <span key={t + i} style={{ display: "contents" }}>
                <span>{t}</span>
                <i>✳</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- tira de integraciones ---------- */
export function Tira({ items }: { items: Fila[] }) {
  return (
    <div className="tira">
      <div className="wrap" style={{ paddingInline: 0 }}>
        <div className="tira-grid">
          {items.map(([t, d]) => (
            <div className="tira-item" key={t}>
              <b>{t}</b>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
