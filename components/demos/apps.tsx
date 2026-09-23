"use client";

import { useEffect, useRef, useState } from "react";

import { Icono, conIconos } from "@/components/ui/Icono";
const reduce = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   Torre de control logística — agentes en cascada
   ============================================================ */
const TORRE: [string, string][] = [
  ["sistema", "Torre de control en línea · 3 unidades en ruta"],
  ["cliente", "«¿Dónde va mi pedido #7712?»"],
  ["faro", "leyendo GPS de U-14… posición y tráfico OK"],
  ["faro", "Tu pedido #7712 va en carretera, a 42 km. Llega ~11:20 am. Te aviso al llegar 🚛"],
  ["alerta", ":alerta: U-14 detenida 12 min · tráfico detectado"],
  ["portero", "rampa 3 reagendada con Farmacias Lira: 12:00 → 12:30"],
  ["faro", "Tu entrega #7712 se recorre a ~12:05 por tráfico. Tu rampa quedó reagendada — sin filas al llegar 🙌"],
  ["sistema", "incidente resuelto por 3 agentes en 5 segundos"],
  ["chofer", ":camara: foto de remisión firmada recibida"],
  ["escriba", "OCR: entrega #7714 · 40 cajas · firma de recibido ✓"],
  ["cobrador", "factura enviada al cliente · vence en 15 días"],
  ["sistema", "viaje cerrado: de la firma a la factura en 4 segundos"],
];

export function Torre() {
  const [lineas, setLineas] = useState<[string, string][]>([TORRE[0]]);
  const [ocupado, setOcupado] = useState(false);
  const feed = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feed.current) feed.current.scrollTop = feed.current.scrollHeight;
  }, [lineas]);

  const correr = (desde: number, hasta: number) => {
    if (ocupado) return;
    setOcupado(true);
    let i = desde;
    const paso = () => {
      setLineas((l) => [...l, TORRE[i]]);
      i++;
      if (i <= hasta) setTimeout(paso, reduce() ? 100 : 900);
      else setOcupado(false);
    };
    paso();
  };

  return (
    <div className="split">
      <div className="panel" data-reveal="izq">
        <div className="panel-head">
          <span>Feed de agentes</span>
          <span className="vivo"><i className="punto" />en vivo</span>
        </div>
        <div className="feed" ref={feed}>
          {lineas.map(([ag, txt], i) => (
            <div className="feed-item" key={i}>
              <span className="ag">{ag.toUpperCase()}</span>
              <span>{conIconos(txt)}</span>
            </div>
          ))}
        </div>
      </div>
      <div data-reveal="der" style={{ display: "grid", gap: ".7rem", alignContent: "start" }}>
        <button className="btn btn-linea btn-solo" type="button" onClick={() => correr(1, 3)} disabled={ocupado}>
          <Icono n="ubicacion" /> ¿Dónde va mi pedido #7712?
        </button>
        <button className="btn btn-linea btn-solo" type="button" onClick={() => correr(4, 7)} disabled={ocupado}>
          <Icono n="alerta" /> Simular retraso en U-14
        </button>
        <button className="btn btn-linea btn-solo" type="button" onClick={() => correr(8, 11)} disabled={ocupado}>
          <Icono n="camara" /> Chofer envía evidencia
        </button>
        <div className="card" style={{ marginTop: ".5rem" }}>
          <p style={{ margin: 0 }}>
            <b>Esto que viste en 90 segundos</b>, hoy en tu empresa son 6 llamadas y 2 horas.
          </p>
          <p className="muted" style={{ fontSize: ".85rem", marginTop: ".6rem" }}>
            Agentes en escena: <b>Faro</b> (rastreo) · <b>Portero</b> (citas de rampa) · <b>Escriba</b> (documentos) · <b>Cobrador</b> (fletes).
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Mini ERPs por industria (pestañas)
   ============================================================ */
const ERP: Record<string, { nombre: string; kpis: [string, string][]; feed: string[] }> = {
  super: {
    nombre: "Supermercado",
    kpis: [["Venta del día · 4 tiendas", "$412,880"], ["Ticket promedio", "$286"], ["Merma detectada", "7 caducidades · pasillo 4"]],
    feed: [
      ":anaquel: Anaquel de abarrotes: hueco detectado (visión) → surtido asignado",
      ":factura: Corte de caja T2 conciliado automático",
      ":paquete: Pedido a CEDIS generado: 214 SKUs según pronóstico",
    ],
  },
  logistica: {
    nombre: "Logística",
    kpis: [["Unidades en ruta", "5"], ["Entregas a tiempo", "94%"], ["Alerta de flota", "Unidad 14: mantenimiento en 800 km"]],
    feed: [
      ":satelite: Cliente preguntó por pedido #7712 → agente respondió con ubicación",
      ":mapa: Ruta 6 reoptimizada: −42 min por cierre vial",
      ":gasolina: Rendimiento de combustible fuera de patrón en unidad 09",
    ],
  },
  restaurante: {
    nombre: "Restaurante",
    kpis: [["Comandas activas", "18"], ["Venta hoy", "$64,320"], ["Insumo crítico", "Queso: alcanza para 22 platillos"]],
    feed: [
      ":celular: Reserva para 6 personas tomada por el agente (WhatsApp)",
      ":sarten: Pronóstico de mañana: 214 comensales → compra sugerida lista",
      ":dinero: Margen del platillo estrella: 61.2% esta semana",
    ],
  },
  comercializadora: {
    nombre: "Comercializadora",
    kpis: [["Pipeline activo", "$1,284,500"], ["Margen promedio", "24.8%"], ["Riesgo de mora", "Grupo Anzures: patrón de atraso"]],
    feed: [
      ":documento: Cotización #3311 generada y enviada en 90 segundos",
      ":repetir: Seguimiento automático: 12 prospectos tocados hoy",
      ":billete: Margen bajo detectado en cotización de válvulas → alerta al gerente",
    ],
  },
};

export function ErpTabs() {
  const [k, setK] = useState("super");
  const d = ERP[k];
  return (
    <div>
      <div className="tabs">
        {Object.entries(ERP).map(([clave, v]) => (
          <button className="tab" type="button" key={clave} data-activo={clave === k} onClick={() => setK(clave)}>
            {v.nombre}
          </button>
        ))}
      </div>
      <div className="app oscuro" data-reveal>
        <div className="app-bar">
          <span>{d.nombre} Da Vinci · panel de muestra</span>
          <span className="vivo"><i className="punto" />datos de ejemplo</span>
        </div>
        <div className="app-kpis k3">
          {d.kpis.map(([t, v]) => (
            <div className="app-kpi" key={t}>
              <small>{t}</small>
              <b className="naranja" style={{ fontSize: "1.3rem" }}>{v}</b>
            </div>
          ))}
        </div>
        <div className="app-body">
          <div className="feed">
            {d.feed.map((f) => (
              <div className="feed-item" key={f}><span>{conIconos(f)}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Planta Da Vinci — tablero + simulación + chat de LISA
   ============================================================ */
const INCIDENTE: [string, string][] = [
  ["vigía", "L2 detenida · torque fuera de rango en cabezal 3"],
  ["vigía", "causa probable: desgaste de mordaza (patrón conocido)"],
  ["mecánico", "OT creada · técnico asignado: R. Ortiz"],
  ["vigía", "producción rebalanceada: L1 +9% · cliente sin riesgo"],
  ["escriba", "WhatsApp al jefe de turno enviado · paro documentado"],
];

const LINEAS = [
  { id: "L1", nombre: "L1 · ENVASADO", producto: "Agua 1L PET", run: 78, pph: 412 },
  { id: "L2", nombre: "L2 · ETIQUETADO", producto: "Refresco 600ml", run: 91, pph: 388 },
  { id: "L3", nombre: "L3 · EMPAQUE", producto: "Caja 12 pzas", run: 64, pph: 301 },
];

export function PlantaTablero() {
  const [feed, setFeed] = useState<[string, string][]>([
    ["vigía", "turno A iniciado · 3 líneas corriendo · OEE 84.2%"],
  ]);
  const [alerta, setAlerta] = useState(false);
  const [ocupado, setOcupado] = useState(false);
  const [pph, setPph] = useState<Record<string, number>>(
    Object.fromEntries(LINEAS.map((l) => [l.id, l.pph]))
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [feed]);

  useEffect(() => {
    if (reduce()) return;
    const t = setInterval(() => {
      setPph(Object.fromEntries(LINEAS.map((l) => [l.id, Math.round(l.pph + (Math.random() * 16 - 8))])));
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const simular = () => {
    if (ocupado) return;
    setOcupado(true);
    setAlerta(true);
    let i = 0;
    const paso = () => {
      setFeed((f) => [...f, INCIDENTE[i]]);
      i++;
      if (i < INCIDENTE.length) setTimeout(paso, reduce() ? 110 : 1000);
      else {
        setOcupado(false);
        setTimeout(() => setAlerta(false), 2500);
      }
    };
    paso();
  };

  return (
    <div className="app oscuro" data-reveal="zoom">
      <div className="app-bar">
        <span>Tablero · turno A · 14:38</span>
        <span className="vivo"><i className="punto" />simulación</span>
      </div>
      <div className="app-kpis">
        <div className="app-kpi"><small>OEE global</small><b className="naranja" data-num="84.2" data-dec="1" data-post="%">84.2%</b></div>
        <div className="app-kpi"><small>Piezas del turno</small><b data-num="12408">12,408</b></div>
        <div className="app-kpi"><small>Rechazo</small><b data-num="0.9" data-dec="1" data-post="%">0.9%</b></div>
        <div className="app-kpi"><small>Paros hoy</small><b>2 · 14 min</b></div>
      </div>
      <div className="app-body">
        <div className="split split-top" style={{ gap: "1.2rem" }}>
          <div>
            <h4 className="mono naranja" style={{ marginBottom: ".9rem" }}>Líneas en vivo</h4>
            <div style={{ display: "grid", gap: ".7rem" }}>
              {LINEAS.map((l) => (
                <div className="linea-viva" key={l.id} data-alerta={l.id === "L2" && alerta}>
                  <div className="lv-top">
                    <span>{l.nombre}</span>
                    <span className="lv-estado">RUN {l.run}%</span>
                  </div>
                  <div style={{ display: "grid", gap: ".4rem" }}>
                    <div className="medidor-bar"><i style={{ width: `${l.run}%` }} /></div>
                    <div className="medidor-top">
                      <span>{l.producto}</span>
                      <span>{pph[l.id]} pph</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-linea btn-sm btn-solo" type="button" onClick={simular} disabled={ocupado} style={{ marginTop: "1.1rem" }}>
              <Icono n="alerta" /> Simular paro en L2
            </button>
          </div>
          <div>
            <h4 className="mono naranja" style={{ marginBottom: ".9rem" }}>Feed de agentes</h4>
            <div className="feed" ref={ref} style={{ maxHeight: 300 }}>
              {feed.map(([ag, txt], i) => (
                <div className="feed-item" key={i}>
                  <span className="ag">{ag.toUpperCase()}</span>
                  <span>{conIconos(txt)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PLANTA_CHAT: Record<string, { q: string; a: string }> = {
  turno: {
    q: "¿Cómo va el turno?",
    a: "Turno A al <b>84%</b>: L1 y L2 en meta; L3 al 64% por microparos del formador (cartón húmedo del proveedor B). Ya sugerí cambio de lote y redacté el reclamo. ¿Lo envío?",
  },
  paro: {
    q: "¿Qué pasó en L2?",
    a: "L2 paró 6 min por torque fuera de rango — mordaza desgastada. <b>MECÁNICO</b> ya programó la OT-441 para el domingo (sin producción). Refacción llega el jueves. Costo de paro evitado: <b>$84,000</b>.",
  },
  costo: {
    q: "¿Cuánto me cuestan los paros?",
    a: "Este mes: <b>$31,200</b> en paros (2.1% del tiempo). El 71% viene de UNA causa: mordazas L2. Con la OT del domingo, proyecto bajar a <b>$9,000/mes</b>.",
  },
  lisa: {
    q: "¿Quién eres, LISA?",
    a: "Soy la base de conocimiento de TODA tu empresa: aprendo de tus datos, documentos y decisiones (RAG + modelos que pronostican). Puedo ver ventas, planta y caja; responder a tus socios; aprobar con tus reglas; y avisarte antes de los problemas. <b>Tú tienes las llaves: yo solo abro las puertas que me autorices.</b>",
  },
};

export function PlantaChat() {
  const [msgs, setMsgs] = useState<{ de: string; html: string }[]>([
    { de: "bot", html: "Estoy viendo tus tres líneas. Pregúntame lo que quieras del turno:" },
  ]);
  const [ocupado, setOcupado] = useState(false);
  const cuerpo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cuerpo.current) cuerpo.current.scrollTop = cuerpo.current.scrollHeight;
  }, [msgs, ocupado]);

  const preguntar = (k: string) => {
    if (ocupado) return;
    const d = PLANTA_CHAT[k];
    setOcupado(true);
    setMsgs((m) => [...m, { de: "user", html: d.q }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { de: "bot", html: d.a }]);
      setOcupado(false);
    }, reduce() ? 110 : 900);
  };

  return (
    <div className="chat" data-reveal="der">
      <div className="chat-top">
        <span className="av"><Icono n="llave" /></span>
        <div>
          <b>LISA · planta</b>
          <small>turno A · en línea</small>
        </div>
      </div>
      <div className="chat-cuerpo" ref={cuerpo}>
        {msgs.map((m, i) => (
          <div className={`burbuja ${m.de}`} key={i} dangerouslySetInnerHTML={{ __html: m.html }} />
        ))}
        {ocupado && <div className="burbuja bot escribiendo"><i /><i /><i /></div>}
      </div>
      <div className="sugerencias">
        {Object.entries(PLANTA_CHAT).map(([k, v]) => (
          <button className="sug" type="button" key={k} onClick={() => preguntar(k)} disabled={ocupado}>
            {v.q}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   El mostrador vivo (industria comercio)
   ============================================================ */
const ESTACIONES: [string, string, string][] = [
  ["01 · WhatsApp", "«¿Tienen 40 cajas? Urgen»", "✓ leído · 4s"],
  ["02 · Inventario", "LISA revisa stock real", "32 en CEDIS + 8 suc. norte ✓"],
  ["03 · Ruta", "Entrega asignada", "ruta 3 · mañana 8:40 ✓"],
  ["04 · Cobro", "Factura + liga de pago", "pagado en línea ✓"],
];

export function Mostrador() {
  const [activas, setActivas] = useState<number[]>([]);
  const [corriendo, setCorriendo] = useState(false);

  const simular = () => {
    if (corriendo) return;
    setCorriendo(true);
    setActivas([]);
    let i = 0;
    const paso = () => {
      setActivas((a) => [...a, i]);
      i++;
      if (i < ESTACIONES.length) setTimeout(paso, reduce() ? 120 : 1000);
      else setCorriendo(false);
    };
    paso();
  };

  return (
    <>
      <div className="grid g4">
        {ESTACIONES.map(([t, d, res], i) => (
          <button
            className="card"
            type="button"
            key={t}
            data-reveal
            onClick={() => setActivas((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]))}
            style={{
              textAlign: "left",
              width: "100%",
              opacity: activas.includes(i) ? 1 : 0.55,
              borderColor: activas.includes(i) ? "rgba(245,134,52,.55)" : undefined,
              transform: activas.includes(i) ? "translateY(-4px)" : undefined,
            }}
          >
            <span className="card-num">{t}</span>
            <h4 style={{ fontSize: "1.02rem" }}>{d}</h4>
            <p className="mono naranja" style={{ minHeight: "1.2em", marginTop: ".5rem" }}>
              {activas.includes(i) ? res : ""}
            </p>
          </button>
        ))}
      </div>
      <div style={{ marginTop: "1.4rem" }}>
        <button className="btn btn-solo" type="button" onClick={simular} disabled={corriendo}>
          <Icono n="play" /> Simular pedido completo
        </button>
      </div>
    </>
  );
}
