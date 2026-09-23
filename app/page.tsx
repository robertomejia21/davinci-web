import Link from "next/link";
import {
  Btn, SecHead, CtaFinal, Fundador, Tira, CardLink, Metricas,
  Puntos, Escalones, Enlace, Marca,
} from "@/components/ui";
import Clientes from "@/components/site/Clientes";
import { clientesConInfo } from "@/lib/clientes";
import { Faq, Riel, FormContacto } from "@/components/ui/interactivos";
import { HeroCanvas } from "@/components/site/Efectos";
import { ChatCentral, WhatsAppVenta } from "@/components/demos/chats";
import { BocetoUI } from "@/components/ui/arte";
import {
  INTEGRACIONES, PROBLEMA, COMPARATIVA, METODO_PASOS, FAQ_HOME, MODULOS,
} from "@/lib/contenido";

import { Icono, type NombreIcono } from "@/components/ui/Icono";
import { IconoMano } from "@/components/ui/IconoMano";
export const metadata = {
  title: "Da Vinci IA — Inteligencia operativa para tu empresa",
  description:
    "Inteligencia operativa: mapeamos tu empresa y le construimos software a la medida con IA — automatizaciones, agentes inteligentes y Da Vinci Central, el centro donde preguntas y ves todo tu negocio. Avances cada semana, módulo por módulo.",
  alternates: { canonical: "/" },
};

const DEMOS_TEASER: [NombreIcono, string, string, string][] = [
  ["llamada", "Valentina te llama", "Cobranza y entregas con voz de persona y memoria de máquina.", "/demos/emprendimiento"],
  ["trato", "Atlas ↔ Livia", "Dos agentes coordinándose solos: 40 cajas antes de las 9:00.", "/demos/comercio"],
  ["celular", "Tu WhatsApp vibra", "Un agente Da Vinci te escribe de verdad, ahora mismo.", "/demos/emprendimiento"],
  ["fabrica", "Tu ERP de muestra", "Súper, logística, restaurante y comercializadora en vivo.", "/demos/comercio"],
];

export default function Home() {
  const clientes = clientesConInfo();
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-caja">
        <div className="hero-panel oscuro">
          <HeroCanvas />

          <div className="social" aria-label="Redes">
            <a href="#contacto" aria-label="Contacto"><Icono n="correo" /></a>
            <a href="/demos" aria-label="Demos"><Icono n="play" /></a>
            <a href="/lisa" aria-label="LISA"><Icono n="llave" /></a>
          </div>

          <div className="hero-grid">
            <div>
              <span className="label">Saper vedere — «saber ver»</span>
              <h1>
                Inteligencia operativa
                <em>módulo por módulo.</em>
              </h1>
              <p className="hero-sub">
                Mapeamos tus procesos con tu propia gente, los automatizamos con agentes de IA y
                concentramos todo tu negocio en un solo lugar: Da Vinci Central. Cada semana ves un
                avance funcionando.
              </p>
              <div className="hero-btns">
                <Btn href="/contacto">Agenda tu diagnóstico gratuito</Btn>
                <Btn href="/demos" variante="linea" chip={false}>Ver las demos</Btn>
              </div>

              <div className="hero-pie">
                <div>
                  <b data-num="6" data-post=" módulos">6 módulos</b>
                  <span>se integran o van solos</span>
                </div>
                <div>
                  <b data-num="9" data-post=" industrias">9 industrias</b>
                  <span>mapeadas a detalle</span>
                </div>
                <div>
                  <b>Semanas</b>
                  <span>no meses, para el 1er módulo</span>
                </div>
              </div>
            </div>

            <div className="hero-cards">
              <div className="glass kpi flota">
                <div className="panel-head" style={{ paddingBottom: ".55rem", marginBottom: ".2rem" }}>
                  <span>Da Vinci Central</span>
                  <span className="vivo"><i className="punto" />en vivo</span>
                </div>
                <div className="kpi-fila">
                  <span className="k">Ventas de hoy</span>
                  <span className="v up" data-num="187420" data-pre="$">$187,420</span>
                </div>
                <div className="spark" aria-hidden="true">
                  {[38, 52, 44, 67, 58, 81, 72, 94].map((v, i) => (
                    <i key={i} style={{ height: `${v}%`, animationDelay: `${i * 60}ms` }} />
                  ))}
                </div>
                <div className="kpi-fila">
                  <span className="k">▲ 12.4% vs. ayer</span>
                  <span className="k">3 agentes trabajando</span>
                </div>
              </div>

              <div className="glass flota flota-2">
                <h4>«¿Cuánto vendimos hoy?»</h4>
                <p>Pregunta en tu idioma y Central responde con cifras al momento — sin reportes, sin esperar a nadie.</p>
              </div>

              <div className="glass flota" style={{ animationDelay: "-5s" }}>
                <h4>3 agentes trabajando</h4>
                <p>Cotizan, cobran y avisan mientras tú decides. Cada movimiento queda registrado.</p>
              </div>
            </div>
          </div>
        </div>

          {/* el tornillo aéreo: sobresale del panel */}
          <picture className="hero-helice ">
            <source srcSet="/helice.webp" type="image/webp" />
            <img src="/helice.png" alt="Tornillo aéreo de Da Vinci" width={1200} height={927}/>
          </picture>
        </div>
      </section>

      {/* ═══ TIRA DE INTEGRACIONES ═══ */}
      <section className="sec-sm">
        <div className="wrap centro" style={{ paddingBottom: "1.4rem" }}>
          <p className="mono muted">Se conecta con lo que tu empresa ya usa</p>
        </div>
        <Tira items={INTEGRACIONES} />
      </section>

      {/* ═══ LOGOS DE CLIENTES ═══ */}
      <section className="sec-sm" style={{ paddingBottom: 0 }}>
        <Clientes items={clientes} />
      </section>

      {/* ═══ EL PROBLEMA ═══ */}
      <section className="sec">
        <div className="wrap">
          <SecHead label="El problema" titulo="Nadie opera bien lo que no puede ver." />
          <div className="grid g4">
            {PROBLEMA.map(([t, d], i) => (
              <article className="card" key={t} data-reveal>
                <span className="card-num">0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEL CÓDICE AL CÓDIGO ═══ */}
      <section className="sec sec-2">
        <div className="wrap">
          <div className="split">
            <div>
              <SecHead
                label="Del códice al código"
                titulo={<>Leonardo bocetó máquinas que se adelantaron <em>400 años</em>.</>}
                lead="Nosotros construimos la tuya — y la entregamos funcionando en semanas."
              />
              <div className="panel" data-reveal="der">
                <div className="panel-head">
                  <span>Da Vinci Central</span>
                  <span className="vivo"><i className="punto" />en vivo</span>
                </div>
                <div className="panel-fila">
                  <span className="r">Ventas de hoy</span>
                  <span className="v" data-num="187420" data-pre="$">$187,420</span>
                </div>
                <div className="panel-fila">
                  <span className="r">Pedidos activos</span>
                  <span className="v" data-num="24">24</span>
                </div>
                <div className="panel-fila">
                  <span className="r">Por cobrar</span>
                  <span className="v" data-num="96150" data-pre="$">$96,150</span>
                </div>
                <div className="panel-fila top">
                  <span className="r">¿Qué cliente compró más este mes?</span>
                  <span className="v">Comercial Robledo</span>
                </div>
              </div>
            </div>
            <div
              className="card"
              data-reveal="izq"
              style={{ color: "var(--tinta-2)", padding: "clamp(1.4rem,3vw,2.6rem)", background: "var(--blanco)" }}
            >
              <BocetoUI />
              <p className="mono centro muted" style={{ marginTop: "1rem", fontSize: ".6rem" }}>
                Boceto de una interfaz · códice nº 1
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LA HISTORIA ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="split split-ancho split-top">
            <div>
              <SecHead label="La historia" titulo={<Marca>Por qué Da Vinci</Marca>} />
              <p className="lead">
                Antes de pintar un músculo, Leonardo diseccionaba el cuerpo. Llenó más de 7,000 páginas
                de códices con observaciones y mediciones.{" "}
                <b style={{ color: "var(--tinta)" }}>No empezaba por la solución: empezaba por entender.</b>
              </p>
              <p data-reveal style={{ color: "var(--tinta-2)" }}>
                En su taller nada se construía de golpe: cada obra avanzaba por bocetos, pruebas y
                correcciones, con el cliente viendo el progreso.
              </p>
              <p data-reveal style={{ color: "var(--tinta-2)" }}>
                Quinientos años después, trabajamos igual. Primero <b style={{ color: "var(--tinta)" }}>vemos</b> —
                mapeamos tu empresa proceso por proceso, con las personas que los viven a diario. Luego
                construimos <b style={{ color: "var(--tinta)" }}>por módulos</b>, mostrándote un avance cada
                semana. Y todo queda en <b style={{ color: "var(--tinta)" }}>un solo lugar</b>.
              </p>
              <blockquote className="cita" data-reveal>
                «La simplicidad es la máxima sofisticación.»
                <footer>atribuido al taller de Leonardo</footer>
              </blockquote>
              <p data-reveal style={{ color: "var(--tinta-2)" }}>
                Por eso elegimos su nombre. No por el genio — por el método:{" "}
                <b className="naranja">observar, entender, construir, perfeccionar</b>.
              </p>
              <div style={{ marginTop: "1.6rem" }}>
                <Enlace href="/nosotros">Conoce al taller</Enlace>
              </div>
            </div>
            <figure className="aurea" data-reveal="zoom">
              <picture>
                <source srcSet="/aurea.webp" type="image/webp" />
                <img src="/aurea.png" alt="La proporción áurea aplicada a una operación: cada área de la empresa en su espiral" width={900} height={887} loading="lazy" decoding="async" />
              </picture>
            </figure>
          </div>
        </div>
      </section>

      {/* ═══ DA VINCI CENTRAL · BENTO ═══ */}
      <section className="sec sec-2">
        <div className="wrap">
          <SecHead
            label="Da Vinci Central"
            titulo="El centro de inteligencia operativa de tu empresa."
            lead="Como los códices donde Leonardo concentraba todo su conocimiento — pero este responde. Todo tu negocio, en tiempo real, en un solo lugar."
            link={{ href: "/central", texto: "Conócelo a fondo" }}
          />
          <div className="bento">
            <article className="tile b-lg" data-reveal>
              <div style={{ display: "grid", gap: ".5rem" }}>
                <div className="burbuja user" style={{ maxWidth: "100%" }}>¿Cuánto vendimos esta semana?</div>
                <div className="burbuja bot" style={{ maxWidth: "100%" }}>
                  Esta semana llevan <b>$487,320</b> — 12.4% arriba.
                </div>
              </div>
              <div className="tile-pie">
                <h5>Pregunta en tu idioma</h5>
                <p>Sin reportes, sin esperar: la respuesta llega con cifras al momento.</p>
              </div>
            </article>

            <article className="tile" data-reveal>
              <div className="panel-head" style={{ border: 0, padding: 0, margin: 0 }}>
                <span>En vivo</span>
                <span className="vivo"><i className="punto" /></span>
              </div>
              <div style={{ display: "grid", gap: ".5rem" }}>
                <div className="mini"><span>Ventas</span><span className="v" data-num="487320" data-pre="$">$487,320</span></div>
                <div className="mini"><span>Tickets resueltos</span><span className="v" data-num="128">128</span></div>
                <div className="mini"><span>Margen</span><span className="v" data-num="24.8" data-dec="1" data-post="%">24.8%</span></div>
              </div>
              <div className="tile-pie">
                <h5>Todo en tiempo real</h5>
                <p>Cada venta y cada pago se reflejan al instante, desde cualquier dispositivo.</p>
              </div>
            </article>

            <article className="tile" data-reveal>
              <div style={{ display: "grid", gap: ".5rem" }}>
                <div className="mini"><span>Cobrar a Comercial Robledo</span><span className="v">$41,200</span></div>
                <div className="mini"><span>Pedir válvulas al proveedor</span><span className="v">stock 14</span></div>
                <div className="mini"><span>Cotización Grupo Anzures</span><span className="v">vence hoy</span></div>
              </div>
              <div className="tile-pie">
                <h5>Prioriza por ti</h5>
                <p>La IA reordena tus pendientes según lo que más impacta hoy.</p>
              </div>
            </article>

            <article className="tile b-lg" data-reveal>
              <div className="stream">
                <div className="stream-in">
                  {[0, 1].map((k) => (
                    <div key={k} style={{ display: "grid", gap: ".45rem" }}>
                      <i><Icono n="factura" /> Factura A-8841 registrada</i>
                      <i><Icono n="chat" /> Agente cerró venta · $1,890</i>
                      <i><Icono n="paquete" /> Pedido #452 enviado</i>
                      <i><Icono n="alerta" /> Stock bajo: Válvula 3/4</i>
                      <i><Icono n="dinero" /> Pago recibido · Farmacias Lira</i>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tile-pie">
                <h5>Cada movimiento, registrado</h5>
                <p>El pulso de tu empresa corriendo las 24 horas — nada se pierde.</p>
              </div>
            </article>

            <article className="tile b-full" data-reveal style={{ minHeight: 0 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <IconoMano n="alerta" tam={40} className="naranja" />
                  <div>
                    <h5 style={{ margin: 0 }}>Te avisa antes del problema</h5>
                    <p style={{ color: "var(--sobre-oscuro)", fontSize: ".86rem", margin: ".2rem 0 0" }}>
                      Inventario bajo: <b className="naranja">Válvula 3/4 — se agota el martes.</b> Cobranza,
                      procesos detenidos: la alerta llega antes de que duela.
                    </p>
                  </div>
                </div>
                <Btn href="/central" variante="linea" sm chip={false}>Ver Da Vinci Central</Btn>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ DEMOS INTERACTIVAS ═══ */}
      <section className="sec" id="demos">
        <div className="wrap">
          <SecHead
            label="Pruébalo aquí mismo"
            titulo={<>No te lo contamos: <em>juégalo</em>.</>}
            lead="Dos demos en vivo con datos de ejemplo. A la izquierda le preguntas a tu empresa; a la derecha, un agente cierra una venta a las 10 de la noche."
          />
          <div className="split">
            <div data-reveal="izq"><ChatCentral /></div>
            <div data-reveal="der"><WhatsAppVenta /></div>
          </div>
        </div>
      </section>

      {/* ═══ FRANJA NARANJA · SALA DE DEMOS ═══ */}
      <section className="franja">
        <div className="wordmark arriba" aria-hidden="true">DEMOS</div>
        <div className="wrap">
          <SecHead
            label="La sala de demos"
            titulo="Agentes que llaman, cotizan por voz y se coordinan entre sí."
            lead="Todo en vivo, con voz real. Y un WhatsApp que te escribe de verdad."
          />
          <div className="grid g4">
            {DEMOS_TEASER.map(([ico, t, d, href]) => (
              <Link className="card card-oscura" href={href} key={t} data-reveal>
                <IconoMano n={ico} tam={44} className="ico-tarjeta" />
                <h4>{t}</h4>
                <p>{d}</p>
                <span className="enlace">Ver la estación →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }} data-reveal>
            <Btn href="/demos" variante="blanco">Entrar a la sala de demos</Btn>
          </div>
        </div>
      </section>

      {/* ═══ MÓDULOS (riel) ═══ */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            label="Los módulos"
            titulo="Cada invento resolvía un problema concreto. Cada módulo, también."
            lead="Los integramos todos — o empezamos por el único que necesitas."
            link={{ href: "/modulos", texto: "Ver todos a detalle" }}
          />
        </div>
        <div className="wrap riel-wrap">
          <Riel>
            {MODULOS.map((m, i) => (
              <article className="card" key={m.slug}>
                <span className="card-num">0{i + 1} — Módulo</span>
                <h3 style={{ fontSize: "1.3rem" }}>{m.titulo}</h3>
                <p>{m.hace[0][1]}</p>
                <Link className="enlace" href={`/modulos/${m.slug}`}>Ver el módulo →</Link>
              </article>
            ))}
          </Riel>
        </div>
      </section>

      {/* ═══ MÉTRICAS ═══ */}
      <section className="sec sec-2">
        <div className="wrap">
          <SecHead
            label="Lo que cambia"
            titulo="Números que sí se mueven."
            lead="Referencias de industria de lo que produce la inteligencia operativa bien aplicada."
          />
          <Escalones
            items={[
              ["−30-50%", "paros no planeados con mantenimiento predictivo (McKinsey)"],
              ["24/7", "atención en WhatsApp sin contratar un turno nocturno"],
              ["Semanas", "para el primer módulo funcionando — no meses"],
            ]}
          />
        </div>
      </section>

      {/* ═══ COMPARATIVA ═══ */}
      <section className="sec">
        <div className="wrap">
          <SecHead label="La diferencia" titulo="Genérico vs. a tu medida." />
          <div className="tabla-wrap" data-reveal>
            <table className="cmp">
              <thead>
                <tr><th /><th>Software genérico</th><th>Da Vinci IA</th></tr>
              </thead>
              <tbody>
                {COMPARATIVA.map(([a, b, c]) => (
                  <tr key={a}><th>{a}</th><td>{b}</td><td>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ MÉTODO ═══ */}
      <section className="sec sec-2">
        <div className="wrap">
          <SecHead
            label="El Método Da Vinci"
            titulo="Boceto → prueba → ajuste → obra."
            lead="Así trabajaba el taller de Leonardo; así construimos tu software. Nunca caminas a ciegas."
            link={{ href: "/metodo", texto: "Conoce el método completo" }}
          />
          <Puntos items={METODO_PASOS} numerado />
        </div>
      </section>

      {/* ═══ INDUSTRIAS + FUNDADOR ═══ */}
      <section className="sec">
        <div className="wrap">
          <SecHead
            label="Tu industria"
            titulo="Nueve mapas que ya conocemos."
            lead="Cada sector tiene sus propios dolores. Y tu empresa siempre se mapea individualmente."
            link={{ href: "/industrias", texto: "Ver las 9 industrias" }}
          />
          <div className="grid g3">
            <CardLink href="/industrias/comercio" num="01" titulo="Comercio y distribución" texto="Del pedido a la entrega, sin puntos ciegos." cta="Ver soluciones" />
            <CardLink href="/industrias/manufactura" num="02" titulo="Manufactura" texto="La planta visible, la merma medida." cta="Ver soluciones" />
            <CardLink href="/industrias/logistica" num="03" titulo="Logística y transporte" texto="Cada unidad, cada ruta, cada peso — visible." cta="Ver soluciones" />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Fundador />
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Preguntas frecuentes" titulo="Lo que todos preguntan." centrado />
          <Faq items={FAQ_HOME} columnas />
          <div className="centro" style={{ marginTop: "2rem" }} data-reveal>
            <Btn href="/faq" variante="linea" chip={false}>Ver todas las preguntas</Btn>
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO ═══ */}
      <section className="sec" id="contacto">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <SecHead
                label="Contacto"
                titulo={<>Toda obra empieza con una <em>conversación</em>.</>}
                lead="Cuéntanos qué quieres lograr y agendamos tu diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno."
              />
              <Metricas
                items={[
                  ["45 min", "Tu operación sobre la mesa, sin tecnicismos."],
                  ["$0", "El diagnóstico es gratis — y el mapa es tuyo."],
                ]}
              />
            </div>
            <div className="card" data-reveal="der">
              <FormContacto />
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="Tú tienes las llaves."
        texto="Agenda tu diagnóstico gratuito y te mostramos cómo se vería tu empresa completa en una sola pantalla."
      />
    </>
  );
}
