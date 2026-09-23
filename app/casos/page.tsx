import Link from "next/link";
import { PageHero, SecHead, CtaFinal, Panel, Fundador } from "@/components/ui";

export const metadata = {
  title: "Casos y resultados",
  description: "Resultados de Da Vinci IA: proyectos de automatización, agentes de IA y software a la medida con impacto medible.",
  alternates: { canonical: "/casos" },
};

const PLANTILLA: [string, string][] = [
  ["El dolor", "— qué le costaba tiempo y dinero cada semana —"],
  ["El módulo", "— qué construimos y en cuántas semanas —"],
  ["El número", "— el resultado medible, con la cifra enfrente —"],
];

export default function Casos() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Casos" }]}
        titulo={<>Casos y <em>resultados</em></>}
        lead="Preferimos que los números hablen. Esta sección crece con cada proyecto entregado."
        chips={["cifras reales", "con permiso del cliente", "sin promesas"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split split-top">
            <div>
              <p className="lead">
                Estamos documentando nuestros primeros casos con resultados medibles — con permiso de cada cliente
                y con cifras reales, no promesas. Mientras tanto, la mejor forma de evaluar cómo trabajamos es{" "}
                <Link className="u-link" href="/demos">jugar con las demos</Link> y conocer el{" "}
                <Link className="u-link" href="/metodo">Método Da Vinci</Link>.
              </p>
              <p className="muted">
                ¿Quieres ser uno de los primeros casos? Los proyectos fundadores reciben condiciones especiales a
                cambio de documentar el resultado.
              </p>
            </div>
            <Panel
              head="Así se verá cada caso"
              filas={[
                ["El dolor", "qué le costaba tiempo y dinero"],
                ["El módulo", "qué construimos y en cuántas semanas"],
                ["El número", "el resultado medible, con la cifra enfrente"],
              ]}
              top={["Caso fundador", "próximamente"]}
            />
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Plantilla lista" titulo="「 Empresa del sector 」" centrado />
          <div className="grid g3">
            {PLANTILLA.map(([t, d], i) => (
              <article className="card" key={t} data-reveal style={{ borderStyle: "dashed" }}>
                <span className="card-num">0{i + 1}</span>
                <h3 style={{ fontSize: "1.3rem" }}>{t}</h3>
                <p className="serif" style={{ fontSize: "1.1rem" }}>{d}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}><Fundador /></div>
        </div>
      </section>

      <CtaFinal
        titulo="Sé un caso de éxito."
        texto="Agenda tu diagnóstico gratuito y construyamos un resultado que valga la pena contar."
      />
    </>
  );
}
