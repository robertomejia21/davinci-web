import { PageHero, SecHead, CtaFinal } from "@/components/ui";
import { FormContacto } from "@/components/ui/interactivos";
import { Garantia } from "@/components/site/bloques";

export const metadata = {
  title: "Contacto",
  description: "Agenda tu diagnóstico gratuito con Da Vinci IA: mapeamos una parte de tu operación y te decimos dónde la IA te genera retorno.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Contacto" }]}
        titulo={<>Toda obra empieza con una <em>conversación</em>.</>}
        lead="Cuéntanos qué quieres lograr y agendamos tu diagnóstico gratuito."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-top">
            <div className="card" data-reveal="izq">
              <FormContacto id="pagina" />
            </div>
            <div style={{ display: "grid", gap: "1.2rem", alignContent: "start" }}>
              <Garantia />
              <div className="card" data-reveal="der">
                <span className="label">¿Prefieres WhatsApp?</span>
                <h4>El botón verde del sitio te lleva directo.</h4>
                <p>Muy pronto también podrás escribirnos por ahí con un agente contestando — sí, uno de los nuestros.</p>
              </div>
              <div className="card" data-reveal="der">
                <span className="label">Taller abierto</span>
                <h4>Mexicali, BC · México</h4>
                <p>El mapeo puede ser presencial o por videollamada. Las juntas semanales, como te acomode.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead
            label="Qué esperar"
            titulo="45 minutos, cero venta dura."
            lead="Traes tu operación, salimos con un mapa. Si la IA todavía no te conviene, te lo decimos igual."
            centrado
          />
        </div>
      </section>

      <CtaFinal
        titulo="¿Prefieres ver antes de hablar?"
        texto="Entra a la sala de demos: agentes que llaman, cotizan y se coordinan solos — con voz real."
        boton="Entrar a la sala de demos"
        href="/demos"
      />
    </>
  );
}
