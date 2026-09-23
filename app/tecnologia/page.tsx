import { PageHero, SecHead, CtaFinal, Puntos, Metricas } from "@/components/ui";
import { BocetoUI } from "@/components/ui/arte";
import type { Fila } from "@/lib/contenido";

export const metadata = {
  title: "Tecnología",
  description: "La tecnología detrás de Da Vinci IA: agentes autónomos, modelos de lenguaje, RAG, visión, voz e integraciones — explicada sin humo.",
  alternates: { canonical: "/tecnologia" },
};

const PIEZAS: Fila[] = [
  ["Agentes autónomos.", "Programas que perciben (leen un mensaje, un documento, un dato), deciden con contexto y actúan (responden, registran, avisan). Son los aprendices incansables del taller."],
  ["Modelos de lenguaje (LLMs).", "Usamos los mejores modelos disponibles de cada generación — y los cambiamos cuando aparece uno mejor. Tu sistema no se casa con un proveedor."],
  ["RAG — tu conocimiento, no el de internet.", "Los agentes responden consultando TUS datos: precios, inventario, políticas, historial. Por eso no inventan."],
  ["Visión y voz.", "Leen facturas escaneadas, fotos de anaqueles y notas de remisión; hablan por teléfono con voz natural."],
  ["Integraciones API.", "Nos conectamos a tu ERP, CRM, WhatsApp Business, bancos y hasta a tus Excel — sin pedirte que tires nada."],
  ["Infraestructura en la nube.", "Respaldos automáticos, cifrado en tránsito y en reposo, y accesos por rol. Ver más en <a class=\"u-link\" href=\"/seguridad\">seguridad</a>."],
];

export default function Tecnologia() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Tecnología" }]}
        titulo={<>El taller <em>por dentro</em></>}
        lead="La tecnología cambia cada mes; el método permanece. Esto es lo que usamos hoy — explicado sin humo."
        chips={["agentes", "llm", "rag", "visión", "voz", "api"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-ancho split-top">
            <div>
              <SecHead label="Las piezas del taller" titulo="Seis piezas, una obra." />
              <Puntos items={PIEZAS} numerado />
            </div>
            <div style={{ display: "grid", gap: "1.2rem", position: "sticky", top: 110 }}>
              <div className="card" data-reveal="der" style={{ color: "var(--naranja)", padding: "1.6rem" }}>
                <BocetoUI />
              </div>
              <div className="card card-oscura" data-reveal="der">
                <span className="label">Nuestra regla de oro</span>
                <h4>La herramienta se elige al final, no al principio.</h4>
                <p>
                  Primero el mapeo de tu proceso (el códice), luego la pieza de tecnología que lo resuelve (el
                  código). Cuando alguien te venda la herramienta antes de entender tu proceso — sospecha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Sin casarte con nadie" titulo="Tu sistema no depende de una moda." centrado />
          <Metricas
            naranja
            items={[
              ["0", "proveedores que te amarran"],
              ["24/7", "agentes trabajando sin turno nocturno"],
              ["100%", "respuestas basadas en TUS datos"],
            ]}
          />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
