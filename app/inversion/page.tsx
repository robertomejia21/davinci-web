import { PageHero, SecHead, CtaFinal, Panel, Puntos, Fundador } from "@/components/ui";
import { Calculadora } from "@/components/ui/interactivos";
import { Garantia } from "@/components/site/bloques";
import type { Fila } from "@/lib/contenido";

export const metadata = {
  title: "La inversión",
  description: "Cómo se cotiza un proyecto con Da Vinci IA: diagnóstico gratuito, precio cerrado por módulo y mejora continua opcional.",
  alternates: { canonical: "/inversion" },
};

const MOMENTOS: Fila[] = [
  ["Diagnóstico — gratis", "Mapeamos una parte de tu operación y te decimos dónde hay retorno. Si no lo hay, también. Sin compromiso."],
  ["Primer módulo — precio cerrado", "Recibes una propuesta con alcance, tiempo y precio fijo del módulo priorizado. Sin sorpresas ni horas extra facturadas."],
  ["Mejora continua — opcional", "Si quieres que el sistema siga creciendo y mantenido, hay una mensualidad clara. Si prefieres solo el módulo, es tuyo y funciona."],
];

const INCLUYE: Fila[] = [
  ["Avance semanal contigo.", "Reunión cada semana: ves, ajustas, decides."],
  ["Capacitación de tu equipo.", "El módulo se entrega funcionando y con tu gente sabiendo usarlo."],
  ["Propiedad del cliente.", "El software y los datos son tuyos. Siempre."],
];

export default function Inversion() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Inversión" }]}
        titulo={<>Cuánto cuesta <em>(y cómo se decide)</em></>}
        lead="Sin menús de precios inflados ni cotizaciones a ciegas: el precio sale del mapa de tu empresa."
        chips={["diagnostico_gratis", "precio_cerrado", "sin_sorpresas"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap"><Calculadora /></div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Así funciona la inversión" titulo="Tres momentos, ninguna sorpresa." />
          <div className="grid g3">
            {MOMENTOS.map(([t, d], i) => (
              <article className="card" key={t} data-reveal>
                <span className="card-num">0{i + 1}</span>
                <h3 style={{ fontSize: "1.3rem" }}>{t}</h3>
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
              <SecHead label="Siempre incluido" titulo="Lo que siempre incluye." />
              <Puntos items={INCLUYE} />
            </div>
            <Garantia />
          </div>
          <div style={{ marginTop: "2.4rem" }}><Fundador /></div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="La pregunta incómoda" titulo="¿Por qué no publicamos una lista de precios?" />
              <p className="lead">
                Porque sería mentirte. Un agente de WhatsApp para una tienda y uno para una cadena con 40
                sucursales no cuestan lo mismo — y cobrarte «el paquete» promedio significaría cobrarte de más o
                quedarte corto. El diagnóstico existe justo para darte un número real, tuyo, con alcance claro.
              </p>
            </div>
            <Panel
              head="Lo que sí te damos por escrito"
              filas={[
                ["Alcance del módulo", "detallado"],
                ["Tiempo de entrega", "en semanas"],
                ["Precio", "cerrado"],
                ["Mensualidad de mejora continua", "opcional y clara"],
              ]}
              top={["Letra chica", "0"]}
            />
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
