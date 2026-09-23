import { PageHero, SecHead, CtaFinal, CardLink, Panel, Puntos, Btn } from "@/components/ui";
import { MODULOS } from "@/lib/contenido";

export const metadata = {
  title: "Módulos",
  description: "Los seis módulos de Da Vinci IA: automatización, agentes de IA, copilots, documentos inteligentes, análisis predictivo e integraciones.",
  alternates: { canonical: "/modulos" },
};

export default function ModulosIndex() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Módulos" }]}
        titulo={<>Los <em>módulos</em></>}
        lead="Cada invento de Leonardo resolvía un problema concreto. Cada módulo nuestro, también. Los integramos todos — o empezamos por el único que necesitas."
        chips={["6 módulos", "se integran o van solos", "precio cerrado"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid g3">
            {MODULOS.map((m, i) => (
              <CardLink key={m.slug} href={`/modulos/${m.slug}`} num={`0${i + 1}`} titulo={m.titulo} texto={m.tagline} cta="Ver el módulo" />
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <div className="split">
            <div>
              <SecHead
                label="Cómo se combinan"
                titulo="Uno solo resuelve. Todos juntos, transforman."
                lead="Cada módulo funciona por su cuenta, pero todos alimentan a Da Vinci Central: el lugar donde le preguntas a tu empresa y los números coinciden."
              />
              <Puntos
                items={[
                  ["Empiezas por el que más duele", "En el diagnóstico priorizamos por retorno, no por catálogo."],
                  ["Creces al ritmo que decidas", "Módulo sobre módulo — sfumato, capa sobre capa."],
                  ["Todo alimenta a Central", "Cada módulo nuevo enriquece lo que LISA puede ver y responder."],
                ]}
                numerado
              />
              <div style={{ marginTop: "1.8rem" }}>
                <Btn href="/metodo">Conoce el Método</Btn>
              </div>
            </div>
            <Panel
              head="Central · alimentado por 4 módulos"
              filas={[
                ["Automatización", "9 flujos corriendo"],
                ["Agentes de IA", "3 canales atendidos"],
                ["Documentos", "412 docs este mes"],
                ["Predicción", "pronóstico 89% confianza"],
              ]}
              top={["Una sola verdad", "en una pantalla"]}
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
