import Link from "next/link";
import { Btn } from "@/components/ui";
import { Espiral } from "@/components/ui/arte";
import { MODULOS, INDUSTRIAS } from "@/lib/contenido";

export const metadata = { title: "Página no encontrada" };

export default function NoEncontrado() {
  return (
    <>
      <section className="hero">
        <div className="hero-panel oscuro" style={{ minHeight: "min(72vh, 620px)" }}>
          <div className="hero-grid">
            <div>
              <span className="label">Error 404 · página no encontrada</span>
              <h1>
                Esta página se quedó
                <em>en el códice.</em>
              </h1>
              <p className="hero-sub">
                Leonardo dejó muchos bocetos sin construir. Este es uno de ellos. Te llevamos de vuelta al taller.
              </p>
              <div className="hero-btns">
                <Btn href="/">Volver al inicio</Btn>
                <Btn href="/demos" variante="linea" chip={false}>Ver las demos</Btn>
              </div>
            </div>
            <div style={{ color: "var(--naranja)", opacity: 0.45 }}>
              <Espiral />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <span className="label">Quizá buscabas</span>
              <div className="grid g2">
                {[
                  ["/central", "Da Vinci Central"],
                  ["/metodo", "El Método Da Vinci"],
                  ["/lisa", "LISA, tu agente"],
                  ["/inversion", "La inversión"],
                ].map(([href, t]) => (
                  <Link className="card" href={href} key={href} style={{ padding: "1rem 1.2rem" }}>
                    <h4 style={{ fontSize: "1.02rem", margin: 0 }}>{t}</h4>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Directo al grano</span>
              <div className="card">
                <h3>¿Buscabas un módulo o tu industria?</h3>
                <div className="chips" style={{ marginTop: "1rem" }}>
                  {MODULOS.slice(0, 3).map((m) => (
                    <Link className="chip-tag" href={`/modulos/${m.slug}`} key={m.slug}>{m.titulo}</Link>
                  ))}
                  {INDUSTRIAS.slice(0, 3).map((i) => (
                    <Link className="chip-tag" href={`/industrias/${i.slug}`} key={i.slug}>{i.titulo}</Link>
                  ))}
                </div>
                <div style={{ marginTop: "1.4rem" }}>
                  <Link className="enlace" href="/contacto">O agenda tu diagnóstico →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
