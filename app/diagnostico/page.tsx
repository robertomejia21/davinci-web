import { PageHero, SecHead, CtaFinal, Puntos, Metricas } from "@/components/ui";
import { FormContacto } from "@/components/ui/interactivos";

export const metadata = {
  title: "Diagnóstico gratuito",
  description: "Diagnóstico gratuito de Da Vinci IA: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.",
  alternates: { canonical: "/diagnostico" },
};

export default function Diagnostico() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Diagnóstico" }]}
        titulo={<>Tu diagnóstico <em>gratuito</em></>}
        lead="45 minutos. Tu operación sobre la mesa. Un mapa claro de dónde la IA te genera retorno — sin compromiso y sin tecnicismos."
        chips={["45 minutos", "sin compromiso", "el mapa es tuyo"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Qué incluye" titulo="Tres entregables concretos." />
              <Puntos
                numerado
                items={[
                  ["Mapeo express.", "Revisamos contigo uno o dos procesos clave de tu operación."],
                  ["Detección de retorno.", "Te decimos dónde la IA ahorra tiempo o genera ingresos — y dónde no vale la pena."],
                  ["Propuesta concreta.", "Si hay proyecto, recibes alcance, tiempos y precio del primer módulo. Si no lo hay, también te lo decimos."],
                ]}
              />
              <div className="card" data-reveal style={{ marginTop: "2rem" }}>
                <span className="label">Sin letra chica</span>
                <p style={{ margin: 0 }}>
                  El diagnóstico es gratuito de verdad: no hay compromiso de compra y el mapa que salga de la
                  sesión es tuyo. Nos conviene: cuando el diagnóstico es honesto, los proyectos que sí arrancan
                  llegan a buen puerto.
                </p>
              </div>
            </div>

            <div className="card" data-reveal="der">
              <span className="label">Agenda tu diagnóstico</span>
              <h3>Llena el formulario y coordinamos fecha.</h3>
              <div style={{ marginTop: "1.4rem" }}>
                <FormContacto id="diag" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Qué pasa después" titulo="Del mapa a la obra." centrado />
          <Metricas
            naranja
            items={[
              ["Semana 0", "el mapeo con tu gente"],
              ["Semanas 1-2", "prototipo con tus datos reales"],
              ["Semana 3+", "en producción, con tu equipo entrenado"],
            ]}
          />
        </div>
      </section>

      <CtaFinal
        titulo="¿Listo para ver tu mapa?"
        texto="Agenda la sesión y trae tus dudas. Salimos con un plan o con un «todavía no» honesto."
      />
    </>
  );
}
