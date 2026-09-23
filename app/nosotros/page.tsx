import Link from "next/link";
import { PageHero, SecHead, CtaFinal, Metricas, Marca } from "@/components/ui";
import { TornilloAereo, Espiral } from "@/components/ui/arte";

export const metadata = {
  title: "Nosotros",
  description: "Por qué Da Vinci IA: el método de Leonardo — observar, entender, construir, perfeccionar — aplicado al software con inteligencia artificial.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Nosotros" }]}
        titulo={<Marca>Por qué Da Vinci</Marca>}
        lead="Saper vedere — «saber ver». El lema de Leonardo es nuestra forma de trabajar."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-ancho split-top">
            <div className="prosa">
              <p data-reveal>
                Antes de pintar un músculo, Leonardo diseccionaba el cuerpo. Antes de diseñar una máquina,
                estudiaba el agua, el viento, el vuelo de los pájaros. Llenó más de 7,000 páginas de códices con
                observaciones, diagramas y mediciones. No empezaba por la solución: empezaba por entender.
              </p>
              <p data-reveal>
                En su taller de Florencia nada se construía de golpe: cada obra avanzaba por bocetos, pruebas y
                correcciones, con el cliente viendo el progreso. Y nunca separó el arte de la ingeniería — para él
                eran la misma cosa: resolver problemas reales con precisión y belleza.
              </p>
              <h3 data-reveal>Quinientos años después, nosotros trabajamos igual.</h3>
              <p data-reveal>
                <b>Primero vemos.</b> Mapeamos tu empresa proceso por proceso, con las personas que los viven todos
                los días — como Leonardo llenaba sus cuadernos antes de trazar la primera línea.
              </p>
              <p data-reveal>
                <b>Luego construimos por módulos.</b> Cada semana te mostramos un avance, lo ajustamos contigo y lo
                implementamos. Sin cajas negras, sin esperar meses para ver resultados.
              </p>
              <p data-reveal>
                <b>Y todo queda en un solo lugar.</b> Como los códices donde Leonardo concentraba todo su
                conocimiento, tu empresa tiene un centro donde puedes preguntar lo que sea:{" "}
                <Link className="u-link" href="/central">Da Vinci Central</Link>.
              </p>
              <blockquote className="cita" data-reveal>
                «La simplicidad es la máxima sofisticación.»
                <footer>atribuido al taller de Leonardo</footer>
              </blockquote>
              <p data-reveal>
                Por eso elegimos su nombre. No por el genio — por el método: observar, entender, construir,
                perfeccionar. Hasta nuestro logotipo lo cuenta: el isotipo es el <b>tornillo aéreo</b> de Leonardo,
                un invento que se adelantó 400 años a su época. Ideas adelantadas, hechas realidad.
              </p>
            </div>

            <div style={{ display: "grid", gap: "1.2rem", position: "sticky", top: 110 }}>
              <div className="card" data-reveal="der" style={{ color: "var(--tinta-2)", padding: "1.6rem" }}>
                <TornilloAereo />
                <p className="mono centro muted" style={{ marginTop: ".8rem", fontSize: ".58rem" }}>
                  Tornillo aéreo · el isotipo
                </p>
              </div>
              <div className="card" data-reveal="der" style={{ color: "var(--naranja)", padding: "1.6rem" }}>
                <Espiral />
                <p className="mono centro muted" style={{ marginTop: ".8rem", fontSize: ".58rem" }}>
                  Estudios de proporción
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="El método en cuatro palabras" titulo="Observar, entender, construir, perfeccionar." centrado />
          <Metricas
            naranja
            items={[
              ["7,000", "páginas de códices antes de construir"],
              ["4", "pasos que repetimos en cada módulo"],
              ["1", "centro donde todo tu negocio coincide"],
            ]}
          />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
