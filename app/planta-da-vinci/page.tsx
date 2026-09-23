import Link from "next/link";
import { Miga, SecHead, CtaFinal, Btn, Marca } from "@/components/ui";
import { PlantaTablero, PlantaChat } from "@/components/demos/apps";

import { Icono, conIconos } from "@/components/ui/Icono";
export const metadata = {
  title: "Planta Da Vinci — SCADA con cerebro",
  description: "Planta Da Vinci: líneas en vivo, OEE, visión artificial, calidad y mantenimiento predictivo con agentes de IA. Demo interactiva.",
  alternates: { canonical: "/planta-da-vinci" },
};

function Tabla({ cabeza, filas }: { cabeza: string[]; filas: string[][] }) {
  return (
    <div className="tabla-tech">
      <table className="tech">
        <thead>
          <tr>{cabeza.map((c) => <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {filas.map((f, i) => (
            <tr key={i}>
              {f.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: c }} />)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CAMARAS: [string, string, boolean][] = [
  ["CAM-01 · conteo L1", "pieza ✓", true],
  ["CAM-02 · defectos L2", "tapa floja ✗", false],
  ["CAM-03 · EPP zona A", "casco ✓ chaleco ✓", true],
  ["CAM-04 · andén", "tarima 14/40", true],
];

export default function PlantaDaVinci() {
  return (
    <>
      <section className="phero phero-oscuro oscuro" style={{ paddingBottom: "2rem" }}>
        <div className="wrap">
          <Miga items={[{ href: "/demos", titulo: "Sala de demos" }, { href: "/demos/industrial", titulo: "Industrial" }, { titulo: "Planta Da Vinci" }]} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "end", justifyContent: "space-between" }}>
            <div>
              <span className="label"><Icono n="engrane" /> SCADA con cerebro</span>
              <h1 style={{ fontSize: "clamp(2.2rem,4.8vw,3.8rem)", marginBottom: ".5rem" }}><Marca>Planta Da Vinci</Marca></h1>
              <p className="lead">
                Líneas en vivo, OEE, visión artificial, calidad y mantenimiento predictivo — con agentes que
                diagnostican y actúan. Demo con datos simulados.
              </p>
            </div>
            <Btn href="/contacto">Quiero esto en mi planta</Btn>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap"><PlantaTablero /></div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Líneas" titulo="Detalle por línea" />
          <div className="app oscuro" data-reveal>
            <div className="app-bar">
              <span>Clic en el tablero para simular eventos</span>
              <span>turno A</span>
            </div>
            <div className="app-body">
              <Tabla
                cabeza={["Línea", "Producto", "Meta turno", "Avance", "Velocidad", "Microparos"]}
                filas={[
                  ["L1 ENVASADO", "Agua 1L PET", "18,000", "<b>14,120 · 78%</b>", "412 pph", "3 · 4 min"],
                  ["L2 ETIQUETADO", "Refresco 600ml", "16,500", "<b>15,010 · 91%</b>", "388 pph", "1 · 2 min"],
                  ["L3 EMPAQUE", "Caja 12 pzas", "9,000", "<b>5,760 · 64%</b>", "301 pph", "6 · 11 min"],
                ]}
              />
              <div className="panel" style={{ marginTop: "1.2rem", borderColor: "rgba(245,134,52,.4)" }}>
                <div className="panel-head">
                  <span>Análisis de LISA</span>
                  <span className="vivo"><i className="punto" />ahora</span>
                </div>
                <p style={{ fontSize: ".92rem", color: "rgba(255,253,248,.85)", margin: 0 }}>
                  L3 pierde ritmo por microparos del formador de cajas (6 hoy). <b className="naranja">Patrón:</b>{" "}
                  cartón del proveedor B con 2.1% más humedad. <b className="naranja">Sugerencia:</b> lote del
                  proveedor A para el turno B + reclamo automático al proveedor B.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SecHead label="Visión" titulo="Cámaras de línea" lead="YOLO + OpenCV en la versión real." />
          <div className="grid g4" style={{ marginBottom: "1.4rem" }}>
            {CAMARAS.map(([t, d, ok]) => (
              <div className="panel" key={t} data-reveal style={{ padding: "1rem" }}>
                <div className="panel-head" style={{ paddingBottom: ".6rem", marginBottom: ".6rem" }}>
                  <span>{t}</span>
                  <span className="vivo"><i className={`punto${ok ? " verde" : ""}`} /></span>
                </div>
                <div style={{ aspectRatio: "16/10", borderRadius: 8, background: "linear-gradient(135deg,#232326,#16161a)", border: "1px solid var(--linea-osc)", display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }}>
                  <span className="mono" style={{ color: ok ? "var(--verde)" : "var(--naranja)", fontSize: ".68rem" }}>{d}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="app oscuro" data-reveal>
            <div className="app-bar"><span>Detecciones del turno</span><span>3 eventos</span></div>
            <div className="app-body">
              <Tabla
                cabeza={["Hora", "Cámara", "Evento", "Acción del agente"]}
                filas={[
                  ["13:42", "CAM-02", "<b>tapa floja</b>", "pieza desviada a retrabajo"],
                  ["12:18", "CAM-03", "chaleco ausente 9 seg", "alerta al supervisor de zona"],
                  ["11:03", "CAM-01", "conteo validado vs PLC", "diferencia 0.2% · ok"],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Calidad y mantenimiento" titulo="Trazabilidad completa y fallas anticipadas." />
          <div className="grid" style={{ gap: "1.4rem" }}>
            <div className="app oscuro" data-reveal>
              <div className="app-bar"><span>Lotes del día · trazabilidad</span><span>HACCP al día</span></div>
              <div className="app-body">
                <Tabla
                  cabeza={["Lote", "Producto", "Muestreo", "Resultado", "Liberó"]}
                  filas={[
                    ["A-2408-113", "Agua 1L", "32/32 ✓", "<b>LIBERADO</b>", "M. Salas 12:40"],
                    ["A-2408-114", "Refresco 600", "28/32", "EN ANÁLISIS", "—"],
                    ["A-2408-112", "Caja 12", "30/30 ✓", "<b>LIBERADO</b>", "M. Salas 09:15"],
                  ]}
                />
                <div className="feed" style={{ marginTop: "1rem", maxHeight: "none" }}>
                  <div className="feed-item">
                    <span className="ag">ESCRIBA</span>
                    <span>certificado de calidad del lote A-2408-113 generado y enviado al cliente por correo. Expediente HACCP actualizado.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="app oscuro" data-reveal>
              <div className="app-bar"><span>Salud de equipos · predictivo</span><span>3 equipos</span></div>
              <div className="app-body">
                <Tabla
                  cabeza={["Equipo", "Horas", "Vibración", "Pronóstico LISA", "OT"]}
                  filas={[
                    ["Llenadora L1", "1,240", "normal", "sin riesgo 30 días", "—"],
                    ["Etiquetadora L2", "2,980", "<b>+18% patrón mordaza</b>", "falla probable en 6-9 días", "OT-441 programada DOM"],
                    ["Formadora L3", "3,410", "normal", "cuchilla al 71% de vida", "OT-438 pendiente"],
                  ]}
                />
                <div className="feed" style={{ marginTop: "1rem", maxHeight: "none" }}>
                  <div className="feed-item">
                    <span className="ag">MECÁNICO</span>
                    <span>refacción de mordaza pedida al proveedor (llega jueves). El paro se hará en domingo sin producción: costo de paro evitado ≈ <b>$84,000</b>.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Pregúntale a la planta" titulo="LISA responde con los datos del turno." />
              <p className="lead">
                No es un chatbot pegado al tablero: es el mismo cerebro que ve las líneas, la calidad y el
                mantenimiento — y que ya actuó antes de que preguntaras.
              </p>
            </div>
            <PlantaChat />
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Reportes" titulo="Reportes que se arman solos." />
          <div className="grid g3">
            {[
              ["Cierre de turno", "OEE, paros con causa, piezas y rechazo. Listo 5 min después del turno.", ":celular: Enviarme por WhatsApp"],
              ["Semanal dirección", "Tendencias, costo de paros, calidad y compras sugeridas.", ":celular: Enviarme por WhatsApp"],
              ["Reclamo a proveedor", "Evidencia de visión + lotes afectados, redactado y listo para enviar.", ":documento: Ver ejemplo"],
            ].map(([t, d, cta], i) => (
              <article className="card" key={t} data-reveal>
                <span className="card-num">0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
                <Link className="enlace" href="/contacto">{conIconos(cta)} →</Link>
              </article>
            ))}
          </div>
          <p className="muted" style={{ marginTop: "1.6rem", fontSize: ".9rem" }}>
            Demo con datos simulados · La versión real se construye sobre visión YOLO/OpenCV, señales de piso
            (Modbus/OPC-UA) y agentes Da Vinci ·{" "}
            <Link className="u-link" href="/contacto">quiero esto en mi planta →</Link>
          </p>
        </div>
      </section>

      <CtaFinal
        titulo="¿Y si tu planta se viera a sí misma?"
        texto="En el diagnóstico gratuito mapeamos una línea y te mostramos este tablero con tus productos, tus paros y tus lotes."
      />
    </>
  );
}
