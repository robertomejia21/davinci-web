import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, SecHead, CtaFinal, Panel, DolorCura, Escalones, Btn } from "@/components/ui";
import { Mostrador } from "@/components/demos/apps";
import { INDUSTRIAS, industriaPorSlug } from "@/lib/contenido";

export function generateStaticParams() {
  return INDUSTRIAS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = industriaPorSlug(slug);
  if (!x) return {};
  return {
    title: `IA para ${x.titulo.toLowerCase()}`,
    description: `Inteligencia operativa para ${x.titulo.toLowerCase()}: ${x.tagline}`,
    alternates: { canonical: `/industrias/${x.slug}` },
  };
}

export default async function IndustriaPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const x = industriaPorSlug(slug);
  if (!x) notFound();

  const otras = INDUSTRIAS.filter((o) => o.slug !== x.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `IA para ${x.titulo}`,
    description: x.tagline,
    provider: { "@type": "Organization", name: "Da Vinci IA" },
    areaServed: "MX",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { href: "/industrias", titulo: "Industrias" }, { titulo: x.titulo }]}
        titulo={x.titulo}
        lead={x.tagline}
        chips={["inteligencia_operativa", "modulos_a_medida", "avance_semanal"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SecHead label="Así se ve por dentro" titulo="Tu operación, contada por los datos." />
          <div className="grid g3">
            {x.paneles.map((p) => <Panel key={p.head} {...p} />)}
          </div>
        </div>
      </section>

      {x.mostrador && (
        <section className="sec sec-2">
          <div className="wrap">
            <SecHead
              label="El mostrador vivo"
              titulo="Simula un pedido completo."
              lead="Así se ve tu operación cuando LISA la escucha. Presiona el botón — o toca cada estación."
            />
            <Mostrador />
          </div>
        </section>
      )}

      <section className={`sec${x.mostrador ? "" : " sec-2"}`}>
        <div className="wrap">
          <SecHead label="Dolor → cura" titulo="Lo que duele y cómo se cura." />
          <DolorCura items={x.dc} />
        </div>
      </section>

      <section className={`sec${x.mostrador ? " sec-2" : ""}`}>
        <div className="wrap">
          <SecHead label="Lo que reporta la industria" titulo="Números de referencia." centrado />
          <Escalones items={x.metricas} />

          {x.extra && (
            <div className="card" data-reveal style={{ marginTop: "2rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ marginBottom: ".3rem" }}>{x.extra.titulo}</h3>
                  <p style={{ margin: 0, maxWidth: "42rem" }}>{x.extra.texto}</p>
                </div>
                <Btn href={x.extra.href} variante="negro">Abrir</Btn>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="A tu medida" titulo="Hecho a tu medida, no a la del sector." />
              <p className="lead">
                Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria.
                Por eso todo empieza con el <Link className="u-link" href="/metodo">Método Da Vinci</Link>:
                mapeamos TU operación y construimos sobre lo que encontramos.
              </p>
            </div>
            <div className="grid" data-reveal="der">
              {otras.map((o) => (
                <Link className="card" href={`/industrias/${o.slug}`} key={o.slug} style={{ padding: "1.1rem 1.3rem" }}>
                  <h4 style={{ fontSize: "1.02rem", marginBottom: ".15rem" }}>{o.titulo}</h4>
                  <p style={{ fontSize: ".86rem", margin: 0 }}>{o.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
