"use client";

import { useEffect, useRef, useState } from "react";

import { Icono } from "@/components/ui/Icono";
const reduce = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   Da Vinci Central — chat con respuestas de ejemplo
   ============================================================ */
type Msg = { de: "bot" | "user"; html: string; barras?: number[] };

const CENTRAL: Record<string, { p: string; r: string; barras?: number[] }> = {
  ventas: {
    p: "¿Cuánto vendimos esta semana?",
    r: "Esta semana llevan <b>$487,320</b> — un <b>12.4% más</b> que la semana pasada. El mejor día fue el jueves:",
    barras: [46, 58, 41, 92, 63, 71],
  },
  cobranza: {
    p: "¿Qué clientes no han pagado?",
    r: "Tienes <b>3 facturas vencidas</b> por un total de <b>$96,150</b>:<br />· Comercial Robledo $41,200 · 18 días<br />· Grupo Anzures $32,750 · 9 días<br />· Farmacias Lira $22,200 · 4 días<br /><br />¿Quieres que el agente les envíe un recordatorio de pago?",
  },
  inventario: {
    p: "¿Cómo va el inventario?",
    r: "Todo en orden, excepto una cosa:<br />⚠ Quedan 14 unidades de «Válvula 3/4» — a tu ritmo de venta se agotan el <b>martes</b>. Tu proveedor tarda 5 días. <b>Te sugiero pedir hoy.</b>",
  },
};

export function ChatCentral({ desnudo }: { desnudo?: boolean }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    { de: "bot", html: "Hola, soy <b>Da Vinci Central</b>. Pregúntame lo que quieras sobre tu empresa — elige una pregunta para probar:" },
  ]);
  const [ocupado, setOcupado] = useState(false);
  const [usadas, setUsadas] = useState<string[]>([]);
  const cuerpo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cuerpo.current) cuerpo.current.scrollTop = cuerpo.current.scrollHeight;
  }, [msgs, ocupado]);

  const preguntar = (clave: string) => {
    const d = CENTRAL[clave];
    if (!d || ocupado) return;
    setOcupado(true);
    setUsadas((u) => [...u, clave]);
    setMsgs((m) => [...m, { de: "user", html: d.p }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { de: "bot", html: d.r, barras: d.barras }]);
      setOcupado(false);
    }, reduce() ? 120 : 950);
  };

  return (
    <div className={desnudo ? "" : "chat"} style={desnudo ? { display: "flex", flexDirection: "column" } : undefined}>
      {!desnudo && (
        <div className="chat-top">
          <span className="av">DV</span>
          <div>
            <b>Da Vinci Central</b>
            <small>LISA · en línea</small>
          </div>
        </div>
      )}
      <div className="chat-cuerpo" ref={cuerpo} style={desnudo ? { padding: 0 } : undefined}>
        {msgs.map((m, i) => (
          <div className={`burbuja ${m.de}`} key={i}>
            <span dangerouslySetInnerHTML={{ __html: m.html }} />
            {m.barras && (
              <div className="barras">
                {m.barras.map((v, j) => (
                  <i key={j} style={{ height: `${v}%`, animationDelay: `${j * 70}ms` }} />
                ))}
              </div>
            )}
          </div>
        ))}
        {ocupado && (
          <div className="burbuja bot escribiendo"><i /><i /><i /></div>
        )}
      </div>
      <div className="sugerencias" style={desnudo ? { padding: "1rem 0 0" } : undefined}>
        {Object.entries(CENTRAL).map(([k, v]) => (
          <button className="sug" type="button" key={k} onClick={() => preguntar(k)} disabled={usadas.includes(k) || ocupado}>
            {v.p}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   WhatsApp — el agente cierra una venta a las 10 pm
   ============================================================ */
const VENTA: [string, string, string][] = [
  ["in", "Hola, ¿tienen bomba de agua de 1 HP? ¿A cómo?", "10:38 pm"],
  ["out", "Hola 👋 Sí tenemos: <b>Bomba periférica 1 HP</b> a <b>$1,890</b> con garantía de 1 año. ¿Es para casa o para riego?", "10:38 pm"],
  ["in", "Para la casa, se me quemó la que tenía", "10:40 pm"],
  ["out", "Perfecto, esa te funciona muy bien para casa. Si gustas te la aparto y mañana mismo la recoges o te la enviamos. ¿Cuál prefieres?", "10:40 pm"],
  ["in", "La paso a recoger como a las 10", "10:42 pm"],
  ["out", "Listo ✅ Queda <b>apartada a tu nombre</b> para mañana 10:00 am. Te mando la ubicación. Cualquier cosa aquí estoy — a la hora que sea.", "10:42 pm"],
];

export function WhatsAppVenta() {
  const [n, setN] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const caja = useRef<HTMLDivElement>(null);
  const cuerpo = useRef<HTMLDivElement>(null);

  /* cada mensaje nuevo empuja la conversación hacia arriba */
  useEffect(() => {
    const el = cuerpo.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduce() ? "auto" : "smooth" });
  }, [n]);

  const correr = () => {
    if (corriendo) return;
    setCorriendo(true);
    setN(0);
    let i = 0;
    const paso = () => {
      i++;
      setN(i);
      if (i < VENTA.length) setTimeout(paso, reduce() ? 120 : 1100);
      else setCorriendo(false);
    };
    setTimeout(paso, 300);
  };

  useEffect(() => {
    const el = caja.current;
    if (!el || !("IntersectionObserver" in window)) { correr(); return; }
    const io = new IntersectionObserver((en) => {
      en.forEach((x) => { if (x.isIntersecting) { correr(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={caja}>
      <div className="wa">
        <div className="wa-top">
          <span className="av">FC</span>
          <div>
            <b>Ferretería El Compás</b>
            <small>Agente Da Vinci · en línea</small>
          </div>
        </div>
        <div className="wa-cuerpo" ref={cuerpo}>
          {VENTA.slice(0, n).map(([dir, txt, hora], i) => (
            <div className={`wa-msg ${dir === "out" ? "out" : ""}`} key={i}>
              <span dangerouslySetInnerHTML={{ __html: txt }} />
              <span className="hora">{hora}{dir === "out" ? " ✓✓" : ""}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-linea btn-sm btn-solo" type="button" onClick={correr} disabled={corriendo} style={{ marginTop: "1rem" }}>
        {corriendo ? "Conversación en curso…" : <><Icono n="play" /> Ver la conversación otra vez</>}
      </button>
    </div>
  );
}

/* ============================================================
   LISA en el celular — show de 4 industrias
   ============================================================ */
const LISA: Record<string, { tab: string; tit: string; baja: string; q: string; a: string }> = {
  industrial: {
    tab: "Industrial",
    tit: "La planta te responde.",
    baja: "LISA ve tus líneas, tu calidad y tus paros — y te lo cuenta por WhatsApp.",
    q: "LISA, ¿cómo va la línea 2?",
    a: "L2 al <b>91%</b> ✓. Detecté desgaste de mordaza: OT programada el domingo. <b>Costo de paro evitado: $84,000</b>. ¿Te mando el detalle?",
  },
  comercio: {
    tab: "Comercio",
    tit: "Cada sucursal, en tu bolsillo.",
    baja: "Ventas, anaqueles, rutas y entregas — LISA vigila todo el mostrador.",
    q: "¿Qué sucursal va abajo hoy?",
    a: "<b>Suc. Oriente −12%</b> vs martes típico. Causa: anaquel de bebidas vacío 2 h — <b>ya pedí el resurtido</b> y llega 4:30 pm.",
  },
  financiera: {
    tab: "Financiera",
    tit: "Tus números, sin sustos.",
    baja: "Caja proyectada, cobranza y CFDI — LISA cuida el dinero mientras duermes.",
    q: "¿Cómo viene la caja este mes?",
    a: "Positiva: <b>$203,910</b> a 30 días. Ojo: Grupo Anzures trae patrón de atraso — <b>ya le envié recordatorio</b> con liga de pago.",
  },
  emprendimiento: {
    tab: "Emprendimiento",
    tit: "Tu negocio, en tu bolsillo.",
    baja: "Ventas, caja y clientes de tu negocio — desde el primer día, sin sistemas monstruosos.",
    q: "¿Cuánto vendimos hoy en la tienda?",
    a: "<b>$8,240</b> 🎉 — tu mejor martes. El agente cerró <b>3 ventas por WhatsApp</b> mientras comías. Mañana te sugiero resurtir refrescos.",
  },
};

const CLAVES = Object.keys(LISA);

export function LisaShow({ compacto }: { compacto?: boolean }) {
  const [clave, setClave] = useState("industrial");
  const [escribiendo, setEscribiendo] = useState(true);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    setEscribiendo(true);
    const t = setTimeout(() => setEscribiendo(false), reduce() ? 100 : 850);
    return () => clearTimeout(t);
  }, [clave]);

  useEffect(() => {
    if (!auto || reduce()) return;
    const t = setInterval(() => {
      setClave((c) => CLAVES[(CLAVES.indexOf(c) + 1) % CLAVES.length]);
    }, 6800);
    return () => clearInterval(t);
  }, [auto]);

  const d = LISA[clave];

  const tabs = (
    <div className="tabs" style={compacto ? { justifyContent: "center", marginTop: "1.2rem" } : { marginTop: "1.6rem" }}>
      {CLAVES.map((k) => (
        <button
          className="tab"
          type="button"
          key={k}
          data-activo={k === clave}
          onClick={() => { setAuto(false); setClave(k); }}
        >
          {LISA[k].tab}
        </button>
      ))}
    </div>
  );

  const telefono = (
    <div className="fono">
      <div className="fono-top">
        <span className="av"><Icono n="llave" /></span>
        <div>
          <b>LISA</b>
          <small>tu agente maestro · en línea</small>
        </div>
      </div>
      <div className="fono-chat">
        <div className="burbuja user" key={`q-${clave}`}>{d.q}</div>
        {escribiendo
          ? <div className="burbuja bot escribiendo"><i /><i /><i /></div>
          : <div className="burbuja bot" key={`a-${clave}`} dangerouslySetInnerHTML={{ __html: d.a }} />}
      </div>
      <div className="fono-input">
        <span>Escribe a LISA…</span>
        <span><Icono n="microfono" /></span>
      </div>
    </div>
  );

  if (compacto) {
    return (
      <div>
        {telefono}
        {tabs}
        <p className="mono centro" style={{ marginTop: ".9rem", color: "var(--tinta-3)" }}>{d.tit}</p>
      </div>
    );
  }

  return (
    <div className="split">
      <div>
        <span className="label"><Icono n="llave" /> LISA · tu agente maestro</span>
        <h2>{d.tit}</h2>
        <p className="lead">{d.baja}</p>
        {tabs}
        <p className="muted" style={{ marginTop: "1.4rem", fontSize: ".93rem" }}>
          LISA es el agente maestro: las llaves de tu empresa en tu bolsillo.
        </p>
      </div>
      <div data-reveal="der">{telefono}</div>
    </div>
  );
}
