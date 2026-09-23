import { PageHero, CtaFinal } from "@/components/ui";
import { Faq } from "@/components/ui/interactivos";
import { FAQ_COMPLETO } from "@/lib/contenido";

export const metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas claras sobre proyectos de IA a la medida: tiempos, costos, datos, integración y soporte.",
  alternates: { canonical: "/faq" },
};

const ld = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_COMPLETO.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "") },
  })),
};

export default function FaqPagina() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Preguntas frecuentes" }]}
        titulo={<>Preguntas <em>frecuentes</em></>}
        lead="Las dudas que escuchamos todas las semanas — respondidas sin rodeos."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Faq items={FAQ_COMPLETO} buscador columnas />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
