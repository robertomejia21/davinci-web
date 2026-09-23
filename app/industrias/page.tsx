import { PageHero, SecHead, CtaFinal, CardLink, Btn } from "@/components/ui";
import { INDUSTRIAS } from "@/lib/contenido";

export const metadata = {
  title: "Industrias",
  description: "Inteligencia operativa por industria: comercio, restaurantes, salud, manufactura, servicios, construcción, logística, supermercados y comercializadoras.",
  alternates: { canonical: "/industrias" },
};

export default function IndustriasIndex() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Industrias" }]}
        titulo={<>Tu industria, en <em>nuestro mapa</em></>}
        lead="Cada sector tiene sus propios dolores. Estos son los que ya sabemos resolver — y tu empresa siempre se mapea individualmente."
        chips={["9 industrias", "patrones probados", "mapeo individual"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid g3">
            {INDUSTRIAS.map((x, i) => (
              <CardLink key={x.slug} href={`/industrias/${x.slug}`} num={`0${i + 1}`} titulo={x.titulo} texto={x.tagline} cta="Ver soluciones" />
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead
                label="Además"
                titulo="Dos áreas que cruzan a todas."
                lead="No importa el giro: si transformas producto o llevas números, aquí hay retorno esperando."
              />
              <div className="grid g2">
                <CardLink href="/planta" titulo="Planta y transformación" texto="La planta que se ve a sí misma: visión artificial, OEE y mantenimiento predictivo." cta="Ver el detalle" />
                <CardLink href="/finanzas" titulo="Contabilidad, finanzas y fiscal" texto="Números que se cuidan solos: conciliación, flujo proyectado y vigilancia fiscal." cta="Ver el detalle" />
              </div>
            </div>
            <div className="card card-oscura" data-reveal="der">
              <span className="label">¿Tu industria no está?</span>
              <h3>Tu empresa no es el promedio de su sector.</h3>
              <p>
                Por eso todo empieza con el Método Da Vinci: mapeamos TU operación y construimos sobre lo
                que encontramos, no sobre una plantilla.
              </p>
              <div style={{ marginTop: "1.2rem" }}>
                <Btn href="/metodo" variante="linea" sm chip={false}>Conoce el método</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
