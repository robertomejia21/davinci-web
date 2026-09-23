import Link from "next/link";
import { PageHero, CtaFinal, Enlace } from "@/components/ui";
import { POSTS } from "@/lib/contenido";

export const metadata = {
  title: "El cuaderno",
  description: "Ideas claras sobre IA aplicada a empresas: agentes, automatización, costos y método. Sin humo.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [destacado, ...resto] = POSTS;
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Blog" }]}
        titulo={<>El <em>cuaderno</em></>}
        lead="Ideas claras sobre IA aplicada a empresas reales. Sin humo, sin tecnicismos innecesarios."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Link className="card" href={`/blog/${destacado.slug}`} data-reveal style={{ padding: "clamp(1.6rem,3.4vw,2.8rem)", marginBottom: "1.2rem", display: "block" }}>
            <span className="vivo"><i className="punto" />Lo más leído · {destacado.tema}</span>
            <h2 style={{ marginTop: ".8rem", fontSize: "clamp(1.7rem,3.6vw,2.9rem)" }}>{destacado.titulo}</h2>
            <p style={{ fontSize: "1.03rem", maxWidth: "48rem" }}>{destacado.bajada}</p>
            <Enlace href={`/blog/${destacado.slug}`}>Leer artículo · {destacado.lectura}</Enlace>
          </Link>

          <div className="grid g3">
            {resto.map((p) => (
              <Link className="card" href={`/blog/${p.slug}`} key={p.slug} data-reveal>
                <span className="card-num">{p.tema} · {p.lectura}</span>
                <h3 style={{ fontSize: "1.26rem" }}>{p.titulo}</h3>
                <p>{p.bajada}</p>
                <span className="enlace">Leer artículo →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
