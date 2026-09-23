import { PageHero, SecHead, CtaFinal, Panel, Puntos } from "@/components/ui";
import type { Fila } from "@/lib/contenido";

export const metadata = {
  title: "Seguridad y datos",
  description: "Cómo protege Da Vinci IA los datos de tu empresa: confidencialidad, accesos, cifrado y propiedad de la información.",
  alternates: { canonical: "/seguridad" },
};

const REGLAS: Fila[] = [
  ["Confidencialidad firmada.", "Antes de ver un solo dato tuyo, firmamos un acuerdo de confidencialidad. El mapeo de tu empresa es información privilegiada y así se trata."],
  ["Tus datos no entrenan modelos de terceros.", "Usamos los modelos en modalidad empresarial: tu información no se usa para entrenar la IA de nadie."],
  ["Accesos por rol.", "Cada persona de tu equipo ve lo que le corresponde. El vendedor no ve la nómina; dirección lo ve todo."],
  ["Cifrado siempre.", "Datos cifrados en tránsito y en reposo, con respaldos automáticos."],
  ["Propiedad clara.", "El software que construimos para ti y los datos que genera son de tu empresa. Si algún día nos vamos, todo se queda contigo."],
];

export default function Seguridad() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Seguridad" }]}
        titulo={<>Tus datos son tuyos. <em>Punto.</em></>}
        lead="La confianza no se pide: se construye con reglas claras desde el primer día del mapeo."
        chips={["nda", "cifrado", "accesos_por_rol", "propiedad_del_cliente"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Las reglas del taller" titulo="Cinco reglas, sin excepciones." />
              <Puntos items={REGLAS} numerado />
            </div>
            <div data-reveal="der" style={{ position: "sticky", top: 110 }}>
              <Panel
                head="Control de accesos · ejemplo"
                filas={[
                  ["Vendedor", "sus clientes y sus metas"],
                  ["Contador", "pólizas, banco, fiscal"],
                  ["Jefe de planta", "líneas, calidad, OT"],
                  ["Dirección", "todo"],
                ]}
                top={["Llaves", "las tienes tú :llave:"]}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
