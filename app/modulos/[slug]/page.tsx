import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, SecHead, CtaFinal, Panel, Puntos } from "@/components/ui";
import { MODULOS, moduloPorSlug } from "@/lib/contenido";

export function generateStaticParams() {
  return MODULOS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = moduloPorSlug(slug);
  if (!m) return {};
  return {
    title: m.titulo,
    description: m.meta,
    alternates: { canonical: `/modulos/${m.slug}` },
  };
}

export default async function ModuloPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = moduloPorSlug(slug);
  if (!m) notFound();

  const i = MODULOS.findIndex((x) => x.slug === m.slug);
  const otros = MODULOS.filter((x) => x.slug !== m.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: m.titulo,
    description: m.meta,
    provider: { "@type": "Organization", name: "Da Vinci IA" },
    areaServed: "MX",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { href: "/modulos", titulo: "Módulos" }, { titulo: m.titulo }]}
        titulo={m.titulo}
        lead={m.tagline}
        chips={m.chips}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label={`Módulo 0${i + 1}`} titulo="Qué hace por tu empresa" />
              <Puntos items={m.hace} numerado />
            </div>
            <div style={{ display: "grid", gap: "1.2rem", alignContent: "start" }}>
              <Panel {...m.panel} />
              <div className="card" data-reveal>
                <span className="label">Cómo se ve en la práctica</span>
                <ul style={{ display: "grid", gap: ".8rem" }}>
                  {m.practica.map((p) => (
                    <li key={p} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: ".7rem", alignItems: "start" }}>
                      <span className="naranja" aria-hidden="true">✳</span>
                      <span style={{ color: "var(--tinta-2)", fontSize: ".93rem" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead label="Implementación" titulo="Cómo lo implementamos" />
              <p className="lead">
                Como todo en Da Vinci IA, este módulo sigue el <Link className="u-link" href="/metodo">Método Da Vinci</Link>:
                mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance
                funcionando. Puede vivir solo o integrarse con los demás módulos en{" "}
                <Link className="u-link" href="/central">Da Vinci Central</Link>.
              </p>
            </div>
            <div className="grid" data-reveal="der">
              {otros.map((o) => (
                <Link className="card" href={`/modulos/${o.slug}`} key={o.slug} style={{ padding: "1.1rem 1.3rem" }}>
                  <h4 style={{ fontSize: "1.05rem", marginBottom: ".15rem" }}>{o.titulo}</h4>
                  <p style={{ fontSize: ".88rem", margin: 0 }}>{o.tagline}</p>
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
