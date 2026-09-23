import { Miga, Chips, SecHead, CtaFinal, Panel, Puntos, Btn } from "@/components/ui";
import { LisaShow } from "@/components/demos/chats";
import type { Fila } from "@/lib/contenido";

export const metadata = {
  title: "LISA — tu agente empresarial",
  description: "LISA: el agente maestro de Da Vinci IA. Ve toda tu empresa, actúa con tus reglas y te responde en una conversación. Tú tienes las llaves.",
  alternates: { canonical: "/lisa" },
};

const POR_QUE: Fila[] = [
  ["La sonrisa que sabe", "La Gioconda sonríe como quien sabe algo que tú no. LISA también lo sabe — ya vio tus ventas, tu caja y tu planta. La diferencia: ella sí te lo dice."],
  ["Los ojos que te siguen", "Desde cualquier ángulo del Louvre, te mira. LISA ve tu empresa desde todos los ángulos a la vez — y nunca parpadea."],
  ["El sfumato", "Leonardo pintó sin bordes duros, capa sobre capa. LISA se construye igual — módulo sobre módulo — y difumina la frontera entre tú y tus sistemas: hablas, y sucede."],
  ["Discreción de museo", "500 años guardando su secreto tras un cristal. LISA guarda los tuyos: tus datos no entrenan modelos ajenos y solo abre las puertas que autorices."],
];

const COMO: Fila[] = [
  ["Ve todo.", "Cada módulo que construimos — ventas, planta, cobranza, documentos — alimenta su conocimiento. Es la memoria viva de tu empresa."],
  ["Habla en pasado de acción.", "No dice «deberías cobrar»: dice «ya envié el recordatorio con la liga de pago». Reporta lo que ya resolvió."],
  ["Responde a cada quien lo suyo.", "El vendedor le pregunta por sus clientes; dirección le pregunta por todo. Accesos por rol, como debe ser."],
  ["Vive donde tú vives.", "WhatsApp, voz o el panel de Da Vinci Central — tú eliges el canal."],
];

export default function Lisa() {
  return (
    <>
      {/* encabezado en dos columnas: el celular de LISA a la altura del título */}
      <section className="phero">
        <div className="rejilla" aria-hidden="true" />
        <div className="wrap">
          <div className="split lisa-hero">
            <div>
              <Miga items={[{ href: "/", titulo: "Inicio" }, { titulo: "LISA" }]} />
              <h1 data-reveal><em>LISA</em>, tu agente empresarial.</h1>
              <p className="lead" data-reveal>
                Leonardo tardó 16 años en su obra maestra. La nuestra se llama igual — y trabaja para ti.
              </p>
              <div data-reveal>
                <Chips items={["agente_maestro", "base_de_conocimiento", "whatsapp+voz", "accesos_por_rol"]} />
              </div>
              <p className="lisa-hero-texto" data-reveal>
                LISA es la inteligencia que ve toda tu empresa — ventas, planta, caja, gente — y te la entrega en
                una conversación. Aprende de tus datos y documentos, actúa con tus reglas, y responde a las
                personas que tú decidas, con lo que cada quien puede ver.
              </p>
              <div className="hero-btns" style={{ marginTop: "1.8rem" }} data-reveal>
                <Btn href="/contacto">Quiero a LISA en mi empresa</Btn>
                <Btn href="/demos" variante="linea" chip={false}>Verla en acción</Btn>
              </div>
            </div>
            <div data-reveal="der"><LisaShow compacto /></div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead
            label="El nombre"
            titulo="Por qué se llama LISA"
            lead="Por Lisa Gherardini — la Mona Lisa. Y no es solo un homenaje: todo lo que hace especial al cuadro, lo hace especial a nuestro agente."
          />
          <div className="grid g4">
            {POR_QUE.map(([t, d], i) => (
              <article className="card" key={t} data-reveal>
                <span className="card-num">0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Cómo trabaja" titulo="Ve todo. Actúa con tus reglas." />
              <Puntos items={COMO} iconos={["ojo", "hecho", "equipo", "chat"]} />
            </div>
            <div data-reveal="der">
              <blockquote className="cita" style={{ marginTop: 0 }}>
                «La Mona Lisa guarda su secreto hace 500 años. LISA te lo cuenta en segundos.»
                <footer>el taller</footer>
              </blockquote>
              <Panel
                head="LISA · lo que ya resolvió hoy"
                filas={[
                  ["Recordatorio de pago a Grupo Anzures", "✓ enviado"],
                  ["OT-441 programada (sin parar producción)", "✓ domingo"],
                  ["Resurtido de anaquel pedido", "✓ llega 4:30 pm"],
                ]}
                top={["Tú tienes", "las llaves :llave:"]}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="Tú tienes las llaves."
        texto="En el diagnóstico gratuito descubrimos qué debería estar viendo LISA en tu empresa — y por dónde empezar."
      />
    </>
  );
}
