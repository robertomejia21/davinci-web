import Link from "next/link";
import { PageHero, SecHead, CtaFinal, Panel, Puntos, DolorCura, Escalones, Btn } from "@/components/ui";
import type { Fila } from "@/lib/contenido";

export const metadata = {
  title: "Planta y transformación",
  description: "IA para plantas de producción: visión artificial de líneas, monitoreo en tiempo real, calidad, mantenimiento predictivo y OEE.",
  alternates: { canonical: "/planta" },
};

const LLEVAMOS: Fila[] = [
  ["Visión artificial de líneas.", "Cámaras + IA que ven tu línea: cuentan piezas, detectan defectos, verifican empaque y etiquetado — sin detener nada y sin ojos cansados."],
  ["Monitoreo en tiempo real.", "Cada línea, turno y máquina reportando sola: producción, ritmo, paros y causas. El tablero vive en Da Vinci Central."],
  ["Control de calidad con IA.", "Inspección visual automática y registro de cada lote: qué salió, con qué parámetros, quién lo liberó. Trazabilidad completa sin papeles."],
  ["OEE sin capturas.", "Disponibilidad, rendimiento y calidad calculados solos. La junta de producción empieza con números, no con opiniones."],
  ["Mantenimiento predictivo.", "Horas de uso, vibración y temperatura anticipan la falla: el mantenimiento se programa antes del paro, no después."],
  ["Captura de piso sin papel.", "Reportes de operadores por voz o tablet que se registran solos — adiós a la hoja que alguien captura al día siguiente."],
  ["Planeación de producción.", "Programa de producción sugerido según pedidos reales, inventarios y capacidad — recalculado cuando algo cambia."],
  ["Seguridad industrial con visión.", "Detección de EPP faltante y zonas de riesgo invadidas, con alertas al supervisor en el momento."],
];

const PRACTICA = [
  "Una envasadora detecta botellas mal tapadas EN la línea — no en el reclamo del cliente.",
  "Un taller metalmecánico sabe el avance real de cada orden sin caminar la planta.",
  "Una planta de alimentos arma su HACCP y trazabilidad de lote en minutos, no en días.",
];

export default function Planta() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Planta y transformación" }]}
        titulo={<>La planta que <em>se ve a sí misma</em></>}
        lead="Leonardo estudiaba las máquinas por dentro. Nosotros ponemos ojos, memoria y voz a tu línea de producción."
        chips={["vision_artificial", "oee", "calidad", "mantenimiento_predictivo", "trazabilidad"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid g3">
            <Panel
              head="Línea 2 · visión en vivo"
              filas={[
                [":camara: CAM-02: tapa floja detectada", "pieza 8,412"],
                ["Desviada a retrabajo", "✓ automática"],
                ["El cliente la hubiera encontrado en", "nunca"],
              ]}
              top={["Defectos que salieron de planta hoy", "0"]}
            />
            <Panel
              head="OEE · turno A · sin capturas"
              filas={[
                ["Disponibilidad · rendimiento · calidad", "en vivo"],
                ["La junta empieza con", "números, no opiniones"],
              ]}
              top={["OEE del turno", "84.2%"]}
            />
            <Panel
              head="Mantenimiento · antes del paro"
              filas={[
                ["Etiquetadora L2: vibración +18%", "patrón de mordaza"],
                ["Falla probable en", "6-9 días"],
                ["OT-441 programada", "✓ domingo sin producción"],
              ]}
              top={["Costo de paro evitado", "$84,000"]}
            />
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Dolor → cura" titulo="Tres dolores de piso, tres curas." />
          <DolorCura
            items={[
              ["La calidad se descubre cuando ya es reclamo.", "Visión artificial", "Cámaras + IA inspeccionan cada pieza EN la línea: el defecto se detiene adentro, no en el cliente."],
              ["Nadie sabe el OEE real hasta el viernes.", "Monitoreo en vivo", "Cada línea reporta sola: producción, ritmo, paros con causa. El tablero vive en Da Vinci Central."],
              ["El mantenimiento llega después de la falla.", "Predictivo", "Horas, vibración y temperatura anticipan la avería: el taller se programa antes del paro, no después."],
            ]}
          />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split split-ancho split-top">
            <div>
              <SecHead label="En tu piso de producción" titulo="Lo que llevamos a tu planta." />
              <Puntos items={LLEVAMOS} numerado />
            </div>
            <div style={{ display: "grid", gap: "1.2rem", alignContent: "start", position: "sticky", top: 110 }}>
              <div className="card" data-reveal="der">
                <span className="label">Cómo se ve en la práctica</span>
                <ul style={{ display: "grid", gap: ".8rem" }}>
                  {PRACTICA.map((t) => (
                    <li key={t} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: ".7rem" }}>
                      <span className="naranja" aria-hidden="true">✳</span>
                      <span style={{ color: "var(--tinta-2)", fontSize: ".93rem" }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card card-oscura" data-reveal="der">
                <span className="label">La app insignia</span>
                <h4>Planta Da Vinci — SCADA con cerebro</h4>
                <p>Líneas en vivo, OEE, visión artificial, calidad y mantenimiento. Ábrela y simula un paro.</p>
                <div style={{ marginTop: "1rem" }}>
                  <Btn href="/planta-da-vinci" variante="linea" sm>Abrir la plataforma</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Sin big bang" titulo="Empezamos por una línea." />
              <p className="lead">
                No hace falta digitalizar toda la planta de golpe: el{" "}
                <Link className="u-link" href="/metodo">Método Da Vinci</Link> aplica igual aquí — mapeamos una
                línea, montamos el primer módulo (visión, monitoreo o calidad) y crecemos línea por línea con
                resultados medibles.
              </p>
            </div>
            <Escalones
              items={[
                ["1 línea", "para empezar y medir"],
                ["84.2%", "OEE visible sin capturas"],
                ["$84k", "de paro evitado en un solo evento"],
              ]}
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
