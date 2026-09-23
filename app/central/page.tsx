import { PageHero, SecHead, CtaFinal, Puntos, CardLink } from "@/components/ui";
import { ChatCentral } from "@/components/demos/chats";

export const metadata = {
  title: "Da Vinci Central",
  description: "Da Vinci Central: el centro de inteligencia operativa de tu empresa. Pregunta lo que sea y ve cada movimiento en tiempo real.",
  alternates: { canonical: "/central" },
};

export default function Central() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Da Vinci Central" }]}
        titulo={<>El centro de <em>inteligencia operativa</em> de tu empresa</>}
        lead="Pregunta lo que sea. Ve cada movimiento de tu negocio. Como los códices donde Leonardo concentraba todo su conocimiento — pero este responde."
        chips={["panel en vivo", "lenguaje natural", "accesos por rol"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="app oscuro" data-reveal="zoom">
            <div className="app-bar">
              <span>Da Vinci Central · LISA</span>
              <span className="vivo"><i className="punto" />datos de ejemplo</span>
            </div>
            <div className="app-kpis">
              <div className="app-kpi"><small>Ventas hoy</small><b className="naranja" data-num="187420" data-pre="$">$187,420</b></div>
              <div className="app-kpi"><small>Pedidos activos</small><b data-num="24">24</b></div>
              <div className="app-kpi"><small>Por cobrar</small><b data-num="96150" data-pre="$">$96,150</b></div>
              <div className="app-kpi"><small>Margen del mes</small><b data-num="24.8" data-dec="1" data-post="%">24.8%</b></div>
            </div>
            <div className="app-body">
              <ChatCentral desnudo />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Un solo lugar" titulo="Un solo lugar para todo tu negocio" />
              <p className="lead">
                Ventas, cobranza, inventario, operación: cada módulo que construimos alimenta a Central.
                El resultado es un panel vivo donde los números siempre coinciden — y un chat donde le
                preguntas a tu empresa en tu idioma.
              </p>
            </div>
            <Puntos
              items={[
                ["Pregunta en lenguaje natural.", "«¿Cuánto vendimos esta semana?», «¿quién no ha pagado?», «¿qué se está agotando?» — respuesta al momento, con cifras y gráficas."],
                ["Todo en tiempo real.", "Cada venta, pago y movimiento se refleja al instante, desde tu teléfono o tu computadora."],
                ["Alertas de lo importante.", "Inventario bajo, cliente que no paga, proceso detenido: te avisa antes de que sea problema."],
                ["Memoria de tu empresa.", "Historial, documentos y decisiones quedan consultables — el conocimiento deja de vivir solo en cabezas."],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid g2">
            <CardLink href="/modulos" titulo="Crece contigo" texto="Central no se compra «completo»: se construye módulo por módulo. Empiezas con lo que más retorno te da." cta="Ver los 6 módulos" />
            <CardLink href="/demos" titulo="Míralo en acción" texto="Entra a la sala de demos y escucha a los agentes trabajando: voz real, WhatsApp y coordinación entre agentes." cta="Ir a la sala de demos" />
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="¿Quieres ver tu empresa completa en una pantalla?"
        texto="Agenda un diagnóstico gratuito y te mostramos cómo se vería Da Vinci Central con tus procesos reales."
      />
    </>
  );
}
