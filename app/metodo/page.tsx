import { PageHero, SecHead, CtaFinal, Panel, Puntos, Marca } from "@/components/ui";
import { METODO_PASOS_LARGOS, type Fila } from "@/lib/contenido";

export const metadata = {
  title: "El Método Da Vinci",
  description: "El Método Da Vinci: mapeo de procesos, módulos priorizados y avances semanales. Software a la medida sin caminar a ciegas.",
  alternates: { canonical: "/metodo" },
};

const FASES: { lbl: string; tit: string; sub: string; txt: string; panel: { head: string; filas: Fila[] } }[] = [
  {
    lbl: "Semana 0 · el mapeo",
    tit: "Primero vemos.",
    sub: "Mapeo con tu gente",
    txt: "Como Leonardo llenaba códices antes de trazar: entendemos tu operación real antes de escribir una línea de código.",
    panel: {
      head: "Semana 0 · el mapeo",
      filas: [
        ["Recorrido con tu gente, proceso por proceso", "✓ día 1-3"],
        ["Mapa de dolores con costo estimado", "✓ priorizado"],
        ["Propuesta: primer módulo + precio cerrado", "✓ sin letra chica"],
      ],
    },
  },
  {
    lbl: "Semanas 1-2 · el prototipo",
    tit: "Luego lo ves funcionar.",
    sub: "Prototipo + junta semanal",
    txt: "Cada viernes ves el avance con tus datos reales. Pides cambios. El lunes ya están.",
    panel: {
      head: "Semana 1-2 · el prototipo",
      filas: [
        ["Módulo corriendo con TUS datos", "✓ no maquetas"],
        ["Junta semanal: viste, pediste, decidiste", "✓ viernes 9:00"],
        ["Cambios de la junta", "✓ aplicados antes del lunes"],
      ],
    },
  },
  {
    lbl: "Semana 3+ · producción",
    tit: "Y nunca paras de mejorar.",
    sub: "Producción + siguiente módulo",
    txt: "La entrega no es el final: es el inicio. Módulo sobre módulo — sfumato, capa sobre capa.",
    panel: {
      head: "Semana 3+ · en producción",
      filas: [
        ["Módulo funcionando en tu operación real", "✓ equipo entrenado"],
        ["LISA ya responde con estos datos", "✓ conectada"],
        ["Siguiente módulo", "tú decides el ritmo"],
      ],
    },
  },
];

const POR_QUE: Fila[] = [
  ["Velocidad real.", "El primer módulo funcionando toma semanas, no meses. Ves valor antes de comprometer el proyecto completo."],
  ["Cero cajas negras.", "Cada semana ves, opinas y decides. El software se ajusta a tu empresa — no al revés."],
  ["Tu gente a bordo.", "Quienes viven el proceso participan desde el mapeo; cuando el módulo llega, ya es suyo."],
];

export default function Metodo() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Método" }]}
        titulo={<Marca>El Método Da Vinci</Marca>}
        lead="Boceto → prueba → ajuste → obra. Así trabajaba el taller de Leonardo; así construimos tu software. Nunca caminas a ciegas."
        chips={["mapeo con tu gente", "avance semanal", "precio cerrado"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid g3">
            {FASES.map((f) => <Panel key={f.lbl} {...f.panel} />)}
          </div>
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Las tres fases" titulo="Ver, construir, perfeccionar." />
          <div className="grid g3">
            {FASES.map((f) => (
              <article className="card" key={f.tit} data-reveal>
                <span className="card-num">{f.lbl}</span>
                <h3 style={{ fontSize: "1.38rem" }}>{f.tit}</h3>
                <p className="mono naranja" style={{ marginBottom: ".6rem" }}>{f.sub}</p>
                <p>{f.txt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SecHead label="Paso a paso" titulo="Los seis pasos, sin misterio." />
          <Puntos items={METODO_PASOS_LARGOS} numerado />
        </div>
      </section>

      <section className="franja">
        <div className="wordmark abajo" aria-hidden="true">MÉTODO</div>
        <div className="wrap">
          <SecHead label="Por qué funciona" titulo="Tres razones, cero actos de fe." centrado />
          <div className="grid g3">
            {POR_QUE.map(([t, d], i) => (
              <article className="card card-oscura" key={t} data-reveal>
                <span className="card-num">0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
