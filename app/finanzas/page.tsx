import { PageHero, SecHead, CtaFinal, Panel, Puntos, DolorCura, Btn } from "@/components/ui";
import type { Fila } from "@/lib/contenido";

export const metadata = {
  title: "Contabilidad, finanzas y fiscal",
  description: "IA para el área financiera: contabilidad automatizada, conciliaciones, flujo de caja proyectado, cumplimiento fiscal y facturación.",
  alternates: { canonical: "/finanzas" },
};

const BLOQUES: { titulo: string; items: Fila[] }[] = [
  {
    titulo: "Contabilidad",
    items: [
      ["Registro automático.", "Facturas emitidas y recibidas se contabilizan solas, con póliza sugerida y documentos ligados."],
      ["Conciliación bancaria con IA.", "Los movimientos del banco se cruzan solos contra facturas y pagos; solo revisas las excepciones."],
      ["Cierre mensual acelerado.", "Checklist de cierre vivo: qué falta, de quién, y borradores de asientos recurrentes listos."],
    ],
  },
  {
    titulo: "Finanzas",
    items: [
      ["Flujo de caja proyectado.", "Tu caja a 30, 60 y 90 días con cobranza real y pagos programados — y alertas cuando viene un bache."],
      ["Cobranza y pagos inteligentes.", "Recordatorios automáticos a clientes, programación de pagos a proveedores y priorización cuando la caja aprieta."],
      ["Copilot financiero.", "Pregunta «¿cuánto gastamos en fletes este trimestre vs. el anterior?» y decide con la cifra enfrente."],
    ],
  },
  {
    titulo: "Fiscal",
    items: [
      ["Facturación y complementos al día.", "Emisión, complementos de pago y cancelaciones controladas desde el flujo — sin pendientes olvidados."],
      ["Vigilancia de obligaciones.", "Calendario fiscal vivo con alertas: declaraciones, retenciones y fechas límite nunca más de sorpresa."],
      ["Expediente siempre listo.", "XML, acuses y papeles de trabajo organizados y localizables — una revisión deja de ser una semana de pánico."],
    ],
  },
];

export default function Finanzas() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Contabilidad · Finanzas · Fiscal" }]}
        titulo={<>Números que <em>se cuidan solos</em></>}
        lead="El área que más papeles procesa es la que más gana con IA. Cerrar el mes deja de ser una batalla."
        chips={["conciliacion_ia", "flujo_de_caja", "cfdi", "cierre_rapido"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid g3">
            <Panel
              head="Conciliación · sola"
              filas={[["184 movimientos del banco", "✓ 181 conciliados solos"], ["Excepciones para revisar", "3"]]}
              top={["Tiempo del contador", "20 min, no 2 días"]}
            />
            <Panel
              head="Flujo · 30/60/90 días"
              filas={[[":alerta: Semana 6: se anticipa apretón", "detectado con 42 días"], ["Cobranza priorizada + pago diferido", "✓ plan sugerido"]]}
              top={["Baches de caja por sorpresa", "0"]}
            />
            <Panel
              head="Fiscal · sin sustos"
              filas={[
                ["Complementos de pago pendientes", "0"],
                ["Declaración mensual", "papeles listos · 5 días antes"],
                ["XML + acuses del ejercicio", "localizables en segundos"],
              ]}
              top={["Revisión del SAT", "de pánico → trámite"]}
            />
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Dolor → cura" titulo="El cierre deja de ser una batalla." />
          <DolorCura
            items={[
              ["El cierre del mes es una batalla de dos semanas.", "Conciliación con IA", "Los movimientos se cruzan solos contra facturas y pagos; tu contador revisa 3 excepciones, no 184 renglones."],
              ["La caja se descubre cuando ya aprieta.", "Flujo proyectado", "Tu caja a 30, 60 y 90 días con cobranza real y pagos programados — el bache se ve venir con semanas."],
              ["Las obligaciones fiscales llegan de sorpresa.", "Vigilancia fiscal", "Calendario vivo, complementos al día y expediente siempre listo. La revisión deja de ser pánico."],
            ]}
          />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SecHead label="Tres frentes" titulo="Contabilidad, finanzas y fiscal." />
          <div className="grid g3">
            {BLOQUES.map((b, i) => (
              <article className="card" key={b.titulo} data-reveal>
                <span className="card-num">0{i + 1}</span>
                <h3 style={{ fontSize: "1.32rem", marginBottom: "1rem" }}>{b.titulo}</h3>
                <Puntos items={b.items} />
              </article>
            ))}
          </div>

          <div className="card" data-reveal style={{ marginTop: "2rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ marginBottom: ".3rem" }}>Trabajamos junto a tu contador o despacho</h3>
                <p style={{ margin: 0, maxWidth: "42rem" }}>
                  Les quitamos la talacha, no el criterio. El expediente y las pólizas siguen siendo suyos — solo
                  dejan de armarse a mano.
                </p>
              </div>
              <Btn href="/contacto" variante="negro">Hablemos</Btn>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
