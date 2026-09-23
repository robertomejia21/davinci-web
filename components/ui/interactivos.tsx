"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Flecha } from "./index";
import type { Fila } from "@/lib/contenido";

import { Icono } from "@/components/ui/Icono";
/* ============================================================
   FAQ — acordeón con búsqueda opcional y 1 o 2 columnas
   ============================================================ */
export function Faq({
  items, buscador, columnas,
}: { items: Fila[]; buscador?: boolean; columnas?: boolean }) {
  const [abiertos, setAbiertos] = useState<number[]>([]);
  const [q, setQ] = useState("");

  const visibles = items
    .map((it, i) => ({ it, i }))
    .filter(({ it }) => !q || (it[0] + it[1]).toLowerCase().includes(q.trim().toLowerCase()));

  const alternar = (i: number) =>
    setAbiertos((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]));

  return (
    <>
      {buscador && (
        <div className="buscador" data-reveal>
          <span aria-hidden="true"><Icono n="lupa" /></span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Busca tu duda… (ej. datos, costo, tiempo)"
            aria-label="Buscar en preguntas frecuentes"
          />
        </div>
      )}
      <div className={columnas ? "faq-cols" : "faq"}>
        {visibles.map(({ it, i }) => (
          <div className="faq-item" key={it[0]} data-abierto={abiertos.includes(i)} data-reveal>
            <button className="faq-q" type="button" aria-expanded={abiertos.includes(i)} onClick={() => alternar(i)}>
              {it[0]}
              <i aria-hidden="true">+</i>
            </button>
            <div className="faq-a">
              <div>
                <p dangerouslySetInnerHTML={{ __html: it[1] }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {buscador && visibles.length === 0 && (
        <p className="muted" style={{ marginTop: "1.4rem" }}>
          Sin resultados para tu búsqueda — escríbenos y lo resolvemos en persona.
        </p>
      )}
    </>
  );
}

/* ============================================================
   Riel horizontal arrastrable
   ============================================================ */
export function Riel({ children }: { children: ReactNode }) {
  const riel = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState({ inicio: true, fin: false });

  const medir = () => {
    const r = riel.current;
    if (!r) return;
    setEstado({
      inicio: r.scrollLeft < 8,
      fin: r.scrollLeft > r.scrollWidth - r.clientWidth - 8,
    });
  };

  useEffect(() => { medir(); }, []);

  const mover = (dir: number) => {
    const r = riel.current;
    if (!r) return;
    const paso = (r.firstElementChild as HTMLElement)?.offsetWidth ?? 340;
    r.scrollBy({ left: dir * (paso + 20), behavior: "smooth" });
  };

  /* arrastre con mouse */
  useEffect(() => {
    const r = riel.current;
    if (!r) return;
    let abajo = false, x0 = 0, s0 = 0, movido = false;

    const down = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      abajo = true; movido = false; x0 = e.clientX; s0 = r.scrollLeft;
      r.dataset.drag = "true";
    };
    const move = (e: PointerEvent) => {
      if (!abajo) return;
      const d = e.clientX - x0;
      if (Math.abs(d) > 4) movido = true;
      r.scrollLeft = s0 - d;
    };
    const up = () => { abajo = false; r.dataset.drag = "false"; };
    const click = (e: MouseEvent) => { if (movido) { e.preventDefault(); e.stopPropagation(); } };

    r.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    r.addEventListener("click", click, true);
    return () => {
      r.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      r.removeEventListener("click", click, true);
    };
  }, []);

  return (
    <div className="riel-wrap">
      <div className="riel" ref={riel} onScroll={medir}>{children}</div>
      <div className="riel-ctrl">
        <button className="riel-btn" type="button" aria-label="Anterior" onClick={() => mover(-1)} disabled={estado.inicio}>←</button>
        <button className="riel-btn" type="button" aria-label="Siguiente" onClick={() => mover(1)} disabled={estado.fin}>→</button>
      </div>
    </div>
  );
}

/* ============================================================
   Calculadora: ¿cuánto te cuesta NO automatizar?
   ============================================================ */
export function Calculadora() {
  const [personas, setPersonas] = useState(3);
  const [horas, setHoras] = useState(3);
  const [costo, setCosto] = useState(15000);

  const money = (n: number) => "$" + Math.round(n).toLocaleString("es-MX");
  const mes = personas * costo * (horas / 8);
  const pct = (v: number, min: number, max: number) => `${((v - min) / (max - min)) * 100}%`;

  return (
    <div className="card" data-reveal style={{ padding: "clamp(1.5rem,3.4vw,2.8rem)" }}>
      <span className="label"><Icono n="calculadora" /> Calculadora</span>
      <h2 style={{ fontSize: "clamp(1.6rem,3.2vw,2.4rem)" }}>¿Cuánto te cuesta NO automatizar?</h2>
      <p className="muted" style={{ marginBottom: "2rem" }}>Mueve los controles con los números de tu empresa.</p>

      <div className="calc">
        <div>
          <div className="slider">
            <div className="slider-top">
              <span>Personas haciendo tareas repetitivas<br />(captura, reportes, seguimientos)</span>
              <b>{personas}</b>
            </div>
            <input
              type="range" min={1} max={20} value={personas}
              style={{ ["--pct" as string]: pct(personas, 1, 20) }}
              onChange={(e) => setPersonas(+e.target.value)}
              aria-label="Personas haciendo tareas repetitivas"
            />
          </div>
          <div className="slider">
            <div className="slider-top">
              <span>Horas al día que cada una dedica a eso</span>
              <b>{horas} h</b>
            </div>
            <input
              type="range" min={1} max={8} value={horas}
              style={{ ["--pct" as string]: pct(horas, 1, 8) }}
              onChange={(e) => setHoras(+e.target.value)}
              aria-label="Horas al día"
            />
          </div>
          <div className="slider">
            <div className="slider-top">
              <span>Costo mensual promedio por persona</span>
              <b>{money(costo)}</b>
            </div>
            <input
              type="range" min={8000} max={60000} step={1000} value={costo}
              style={{ ["--pct" as string]: pct(costo, 8000, 60000) }}
              onChange={(e) => setCosto(+e.target.value)}
              aria-label="Costo mensual por persona"
            />
          </div>
        </div>

        <div className="calc-out">
          <div className="calc-card"><b>{money(mes)}</b><span>se te va cada mes en talacha automatizable</span></div>
          <div className="calc-card"><b>{money(mes * 12)}</b><span>al año — sin contar ventas perdidas por no contestar</span></div>
          <div className="calc-card"><b>{(personas * horas * 22).toLocaleString("es-MX")}</b><span>horas humanas recuperables al mes</span></div>
        </div>
      </div>

      <p style={{ marginTop: "1.8rem" }}>
        Un módulo Da Vinci típico cuesta una fracción de eso — y trabaja las 24 horas.{" "}
        <a className="u-link" href="/contacto">Compruébalo con tu diagnóstico gratis →</a>
      </p>
    </div>
  );
}

/* ============================================================
   Formulario de contacto
   ============================================================ */
export function FormContacto({ id = "contacto" }: { id?: string }) {
  const [errores, setErrores] = useState<Record<string, boolean>>({});
  const [estado, setEstado] = useState<"" | "err" | "ok">("");
  const [aviso, setAviso] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enviando) return;
    const form = e.currentTarget;
    const f = new FormData(form);
    const campos = ["nombre", "empresa", "email", "mensaje"];
    const malos: Record<string, boolean> = {};
    campos.forEach((c) => {
      const v = String(f.get(c) || "").trim();
      const valido = c === "email" ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) : v.length > 1;
      if (!valido) malos[c] = true;
    });
    setErrores(malos);
    if (Object.keys(malos).length) {
      setEstado("err");
      setAviso("Revisa los campos marcados: falta información para poder escribirte.");
      return;
    }

    setEnviando(true);
    setEstado("");
    try {
      const r = await fetch("/api/contacto/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(f), pagina: location.pathname }),
      });
      const d: { ok?: boolean; txt?: string } = await r.json().catch(() => ({}));
      if (d.ok) {
        setEstado("ok");
        setAviso(d.txt || "Recibido — te contactamos pronto.");
        form.reset();
        setTimeout(() => setEstado(""), 8000);
      } else {
        setEstado("err");
        setAviso(d.txt || "No pudimos enviar tu mensaje ahora. Escríbenos por WhatsApp.");
      }
    } catch {
      setEstado("err");
      setAviso("Sin conexión. Revisa tu internet e inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  const limpiar = (c: string) => setErrores((x) => ({ ...x, [c]: false }));

  return (
    <form className="form" onSubmit={enviar} noValidate>
      {/* trampa para bots: invisible para las personas */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="trampa" />
      <div className="campo" data-error={errores.nombre}>
        <label htmlFor={`${id}-nombre`}>Nombre</label>
        <input id={`${id}-nombre`} name="nombre" type="text" placeholder="¿Cómo te llamas?" onInput={() => limpiar("nombre")} />
      </div>
      <div className="campo" data-error={errores.empresa}>
        <label htmlFor={`${id}-empresa`}>Empresa</label>
        <input id={`${id}-empresa`} name="empresa" type="text" placeholder="Nombre de tu empresa" onInput={() => limpiar("empresa")} />
      </div>
      <div className="campo" data-error={errores.email}>
        <label htmlFor={`${id}-email`}>Correo</label>
        <input id={`${id}-email`} name="email" type="email" placeholder="tu@empresa.com" onInput={() => limpiar("email")} />
      </div>
      <div className="campo" data-error={errores.mensaje}>
        <label htmlFor={`${id}-mensaje`}>¿Qué te gustaría automatizar o ver mejor?</label>
        <textarea
          id={`${id}-mensaje`} name="mensaje"
          placeholder="Ej.: pierdo mucho tiempo en cobranza y no sé cuánto vendo al día…"
          onInput={() => limpiar("mensaje")}
        />
      </div>
      {estado && <p className={`aviso ${estado}`}>{aviso}{estado === "ok" && " ✓"}</p>}
      <button className="btn" type="submit" disabled={enviando}>
        {enviando ? "Enviando…" : "Agendar mi diagnóstico"}
        <span className="chip" aria-hidden="true"><Flecha size={13} /></span>
      </button>
    </form>
  );
}

/* ============================================================
   Demo: recibe el WhatsApp en tu teléfono
   ============================================================ */
export function DemoTelefono() {
  const [msg, setMsg] = useState<{ tipo: "err" | "ok"; txt: string } | null>(null);
  const [enviando, setEnviando] = useState(false);

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enviando) return;
    const f = new FormData(e.currentTarget);
    const tel = String(f.get("tel") || "").replace(/\D/g, "");
    if (tel.length < 11) {
      setMsg({ tipo: "err", txt: "Ese número se ve corto — incluye la lada del país (ej. 52…)." });
      return;
    }
    setEnviando(true);
    setMsg(null);
    try {
      const r = await fetch("/api/whatsapp-demo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tel, web: f.get("web") }),
      });
      const d: { ok?: boolean; txt?: string } = await r.json().catch(() => ({}));
      setMsg({
        tipo: d.ok ? "ok" : "err",
        txt: d.txt || "No pudimos enviar el mensaje ahora. Escríbenos desde el botón de WhatsApp.",
      });
    } catch {
      setMsg({ tipo: "err", txt: "Sin conexión. Revisa tu internet e inténtalo de nuevo." });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="card" data-reveal>
      <form className="form" noValidate onSubmit={enviar}>
        {/* trampa para bots: invisible para las personas */}
        <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="trampa" />
        <div className="campo">
          <label htmlFor="tel-demo">Tu número con lada (ej. 52 1 33 1234 5678)</label>
          <input id="tel-demo" name="tel" type="tel" placeholder="52 33 1234 5678" />
        </div>
        {msg && <p className={`aviso ${msg.tipo}`}>{msg.txt}</p>}
        <button className="btn" type="submit" disabled={enviando}>
          {enviando ? "Enviando…" : "Enviarme el WhatsApp"}
          <span className="chip" aria-hidden="true"><Flecha size={13} /></span>
        </button>
      </form>
      <p className="muted" style={{ fontSize: ".84rem", marginTop: "1rem" }}>
        Solo usamos tu número para esta demo. Nada de listas ni spam — palabra de taller.
      </p>
    </div>
  );
}

/* ============================================================
   Antes / después: se arrastra la barra para comparar dos imágenes.
   Un <input type="range"> invisible cubre todo el marco: da el arrastre
   con mouse y dedo, y el control con teclado, sin código de eventos.
   ============================================================ */
export function AntesDespues({
  antes, despues, altAntes, altDespues, etiquetaAntes = "Antes", etiquetaDespues = "Ahora",
  ancho = 1536, alto = 1024,
}: {
  antes: string; despues: string; altAntes: string; altDespues: string;
  etiquetaAntes?: string; etiquetaDespues?: string; ancho?: number; alto?: number;
}) {
  const [pos, setPos] = useState(50);
  const [tocado, setTocado] = useState(false);

  return (
    <div
      className="ad"
      data-tocado={tocado}
      style={{ ["--pos" as string]: `${pos}%`, aspectRatio: `${ancho} / ${alto}` }}
    >
      <img className="ad-img" src={despues} alt={altDespues} width={ancho} height={alto} loading="lazy" decoding="async" />
      <img className="ad-img ad-antes" src={antes} alt={altAntes} width={ancho} height={alto} loading="lazy" decoding="async" />
      <span className="ad-tag ad-tag-antes" aria-hidden="true">{etiquetaAntes}</span>
      <span className="ad-tag ad-tag-despues" aria-hidden="true">{etiquetaDespues}</span>
      <span className="ad-linea" aria-hidden="true">
        <span className="ad-mango"><Flecha size={11} /><Flecha size={11} /></span>
      </span>
      <input
        className="ad-rango"
        type="range" min={0} max={100} step={0.5} value={pos}
        aria-label={`Comparar: ${etiquetaAntes} y ${etiquetaDespues}`}
        onChange={(e) => { setPos(Number(e.target.value)); setTocado(true); }}
      />
    </div>
  );
}
