import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Btn, Enlace } from "@/components/ui";
import { POSTS, postPorSlug } from "@/lib/contenido";

import { Icono } from "@/components/ui/Icono";
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = postPorSlug(slug);
  if (!p) return {};
  return {
    title: p.titulo,
    description: p.bajada,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.titulo, description: p.bajada },
  };
}

export default async function PostPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = postPorSlug(slug);
  if (!p) notFound();

  const siguientes = POSTS.filter((o) => o.slug !== p.slug).slice(0, 2);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.titulo,
    description: p.bajada,
    inLanguage: "es-MX",
    author: { "@type": "Organization", name: "Da Vinci IA" },
    publisher: { "@type": "Organization", name: "Da Vinci IA" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { href: "/blog", titulo: "Blog" }, { titulo: "Artículo" }]}
        titulo={p.titulo}
        lead={p.bajada}
        chips={[p.tema, `${p.lectura} de lectura`, "sin humo"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-ancho split-top">
            <article className="prosa">
              {p.cuerpo.map(([h, t]) => (
                <div key={h} data-reveal>
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              ))}
              <hr className="linea-h" style={{ margin: "2.6rem 0" }} />
              <div data-reveal>
                <h3>¿Quieres esto en tu empresa?</h3>
                <p>Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.</p>
                <div style={{ marginTop: "1.2rem" }}>
                  <Btn href="/contacto">Agenda tu diagnóstico gratuito</Btn>
                </div>
              </div>
            </article>

            <aside data-reveal="der" style={{ position: "sticky", top: 110, display: "grid", gap: "1rem" }}>
              <div className="card">
                <span className="label">Sigue leyendo</span>
                {siguientes.map((o) => (
                  <Link href={`/blog/${o.slug}`} key={o.slug} style={{ display: "block", padding: ".7rem 0", borderBottom: "1px solid var(--linea)" }}>
                    <strong style={{ display: "block", fontSize: ".97rem", fontWeight: 600 }}>{o.titulo}</strong>
                    <span className="mono muted">{o.tema} · {o.lectura}</span>
                  </Link>
                ))}
                <div style={{ marginTop: "1rem" }}>
                  <Enlace href="/blog">Ver todo el cuaderno</Enlace>
                </div>
              </div>

              <div className="card card-oscura">
                <span className="label"><Icono n="llave" /> LISA</span>
                <h4>¿Y si tu empresa ya pudiera responderte?</h4>
                <p>Conoce al agente maestro que ve ventas, planta y caja — y te lo cuenta en una conversación.</p>
                <div style={{ marginTop: "1rem" }}>
                  <Enlace href="/lisa">Conocer a LISA</Enlace>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
