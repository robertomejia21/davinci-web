import { PageHero, SecHead, CtaFinal, CardLink, Btn, Enlace } from "@/components/ui";
import { LisaShow } from "@/components/demos/chats";

export const metadata = {
  title: "Sala de demos",
  description: "Escucha a nuestros agentes llamar por teléfono, mandar notas de voz, coordinarse entre sí y responder por WhatsApp. La inteligencia operativa de Da Vinci IA, en vivo.",
  alternates: { canonical: "/demos" },
};

const AREAS: [string, string, string, string][] = [
  ["01", "Industrial", "Maquila, transformación, líneas, calidad — la planta que se ve a sí misma.", "/demos/industrial"],
  ["02", "Comercio y servicios", "Súper, comercializadoras, restaurantes, logística — el mostrador visible.", "/demos/comercio"],
  ["03", "Financiera y fiscal", "La puerta que todos cruzan: números que se cuidan solos.", "/demos/financiera"],
  ["04", "Emprendimiento", "Tu primer sistema — simple, poderoso y a precio de arranque.", "/demos/emprendimiento"],
];

export default function Demos() {
  return (
    <>
      <PageHero
        miga={[{ href: "/", titulo: "Inicio" }, { titulo: "Sala de demos" }]}
        titulo={<>La sala de <em>demos</em>.</>}
        lead="No te contamos lo que hace la inteligencia operativa: escúchala llamar, léela vender y mírala coordinarse sola."
        chips={["voz_real", "agentes_autonomos", "whatsapp", "erp/crm_demo"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <LisaShow />
          <div style={{ marginTop: "1.4rem" }}>
            <Enlace href="/lisa">Conoce su historia</Enlace>
          </div>
        </div>
      </section>

      <section className="franja">
        <div className="wordmark abajo" aria-hidden="true">4 MUNDOS</div>
        <div className="wrap">
          <SecHead
            label="El vestíbulo"
            titulo="Elige tu mundo"
            lead="Cuatro puertas. Detrás de cada una: la introducción a tu industria y plataformas completas diseñadas solo para ella."
          />
          <div className="grid g4">
            {AREAS.map(([n, t, d, href]) => (
              <CardLink key={t} href={href} num={n} titulo={t} texto={d} cta="Entrar" />
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SecHead label="Estaciones" titulo="Lo que vas a escuchar y ver." />
          <div className="grid g3">
            <article className="card" data-reveal>
              <span className="card-num">Estación 01 · voz</span>
              <h3 style={{ fontSize: "1.22rem" }}>Valentina llama a tu cliente</h3>
              <p>Confirma la entrega, recuerda la factura y ofrece la liga de pago — con calidez de persona y memoria de máquina.</p>
              <Enlace href="/demos/emprendimiento">Escuchar la llamada</Enlace>
            </article>
            <article className="card" data-reveal>
              <span className="card-num">Estación 03 · agente ↔ agente</span>
              <h3 style={{ fontSize: "1.22rem" }}>Atlas ↔ Livia resuelven un urgente</h3>
              <p>Logística y almacén se coordinan solos: 40 cajas, entrega mañana antes de las 9:00. Tiempo humano invertido: cero.</p>
              <Enlace href="/demos/comercio">Ver la coordinación</Enlace>
            </article>
            <article className="card" data-reveal>
              <span className="card-num">Estación 06 · tu industria</span>
              <h3 style={{ fontSize: "1.22rem" }}>Así se ve TU sistema</h3>
              <p>Paneles de muestra del ERP/CRM que construimos por industria: súper, logística, restaurante y comercializadora.</p>
              <Enlace href="/demos/comercio">Abrir los paneles</Enlace>
            </article>
          </div>
          <div style={{ marginTop: "2rem" }} data-reveal>
            <Btn href="/planta-da-vinci" variante="negro">Abrir Planta Da Vinci — la app insignia</Btn>
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="¿Te imaginaste tu empresa aquí?"
        texto="En el diagnóstico gratuito dibujamos estas mismas pantallas — pero con tus procesos, tus productos y tu gente."
      />
    </>
  );
}
