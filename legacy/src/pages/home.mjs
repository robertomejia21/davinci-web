import {
  html, pagina, secHead, ctaFinal, fundador, faqBloque, flecha, panelVivo,
  puntos, MODULOS_NAV, jsonld, orgLd, SITIO,
} from "../lib/layout.mjs";
import { bocetoUI, espiral } from "../lib/arte.mjs";

const MARQUEE = [
  "Inteligencia operativa", "AGENTES_AUTONOMOS", "Automatización", "LLM · RAG · API",
  "Da Vinci Central", "DATOS_EN_VIVO", "Copilots por rol", "VISION + VOZ", "Análisis predictivo",
];

const PROBLEMA = [
  ["La información vive dispersa.", "Ventas en un Excel, cobranza en WhatsApp, inventario en la cabeza de alguien."],
  ["Los procesos dependen de memoria.", "Facturas, seguimientos y reportes que se hacen a mano — cuando alguien se acuerda."],
  ["Las decisiones se toman a ciegas.", "Para saber cómo va el negocio hay que pedir tres reportes y esperar dos días."],
  ["El software genérico no se adapta.", "Tu empresa termina trabajando para el sistema, en vez de al revés."],
];

const MODULOS_HOME = [
  ["Automatización de procesos", "Facturas, reportes, seguimientos y tareas repetitivas que se ejecutan solas, todos los días, sin olvidos."],
  ["Agentes de IA — chat y voz", "Atienden WhatsApp, web y teléfono las 24 horas: responden, cotizan, agendan y venden con el tono de tu marca."],
  ["Copilots por rol", "Un asistente de IA para cada puesto: el vendedor, el contador y el gerente tienen cada quien el suyo."],
  ["Documentos inteligentes", "Facturas, contratos y correos que se leen, se capturan y se archivan solos. Adiós a la captura manual."],
  ["Análisis predictivo", "Pronóstico de ventas, inventario y flujo de caja: decide con evidencia lo que viene, no con intuición."],
  ["Integraciones con lo tuyo", "No reemplazamos lo que funciona: conectamos tu ERP, CRM, Excel y WhatsApp para que todo hable entre sí."],
];

const COMPARATIVA = [
  ["Se adapta a…", "su plantilla (tú te adaptas)", "tu operación exacta"],
  ["Lo ves funcionando…", "al final (sorpresa)", "cada semana, contigo"],
  ["La IA…", "un chatbot pegado con cinta", "agentes que actúan + LISA que ve todo"],
  ["Tus datos…", "viven en su nube, a su modo", "son tuyos — tú tienes las llaves"],
  ["El precio…", "renta eterna por módulos que no usas", "cerrado, por módulo que sí necesitas"],
];

const METODO = [
  ["Mapeamos tu empresa", "Vamos contigo y con tu gente, proceso por proceso. Entendemos cómo trabaja tu empresa de verdad — no en el organigrama."],
  ["Priorizamos módulos", "Te decimos dónde la IA genera retorno más rápido y por dónde conviene empezar. Diagnóstico claro, sin tecnicismos."],
  ["Diseñamos el primer módulo", "Prototipo con tus datos reales, en días. Lo ves funcionando antes de invertir en el desarrollo completo."],
  ["Avance semanal contigo", "Cada semana, una reunión: ves el progreso, pides cambios y decides. El software se ajusta a ti — no al revés."],
  ["Implementamos y capacitamos", "Lo dejamos funcionando en tu operación y entrenamos a tu equipo con las personas involucradas desde el día uno."],
  ["Siguiente módulo", "Repetimos con el siguiente proceso, hasta integrar toda tu empresa en Da Vinci Central. ¿Solo necesitas uno? Nos ajustamos."],
];

export const FAQ_HOME = [
  ["¿Cuánto tarda un proyecto?", "El primer módulo funcionando suele tomar semanas, no meses — esa es nuestra propuesta de valor. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo."],
  ["¿Cuánto cuesta?", "Depende de los módulos que tu empresa necesite. Por eso el primer paso es el diagnóstico gratuito: mapeamos tu operación y te entregamos una propuesta con alcance y precio concretos, sin compromiso."],
  ["Ya tengo un sistema, ¿lo tengo que tirar?", "No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba."],
  ["¿Necesito un equipo técnico en mi empresa?", "No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso."],
  ["¿Qué pasa con mis datos?", "Tus datos son tuyos y se quedan en tu empresa. Trabajamos con acuerdos de confidencialidad y accesos controlados desde el primer día del mapeo."],
  ["¿Trabajan a distancia?", "Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode."],
];

export const formContacto = (id = "form-contacto") => html`
<form class="form" id="${id}" data-form novalidate>
  <div class="campo">
    <label for="${id}-nombre">Nombre</label>
    <input id="${id}-nombre" name="nombre" type="text" placeholder="¿Cómo te llamas?" required>
  </div>
  <div class="campo">
    <label for="${id}-empresa">Empresa</label>
    <input id="${id}-empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" required>
  </div>
  <div class="campo">
    <label for="${id}-email">Correo</label>
    <input id="${id}-email" name="email" type="email" placeholder="tu@empresa.com" required>
  </div>
  <div class="campo">
    <label for="${id}-msg">¿Qué te gustaría automatizar o ver mejor?</label>
    <textarea id="${id}-msg" name="mensaje" placeholder="Ej.: pierdo mucho tiempo en cobranza y no sé cuánto vendo al día…" required></textarea>
  </div>
  <p class="form-msg err" hidden>Revisa los campos marcados: falta información para poder escribirte.</p>
  <p class="form-msg ok" hidden>Recibido — te contactamos pronto ✓</p>
  <button class="btn btn-arrow" type="submit">Agendar mi diagnóstico${flecha()}</button>
</form>`;

/* ---------- demo de la sala ---------- */
const DEMOS_TEASER = [
  ["📞", "Valentina te llama", "cobranza y entregas con voz", "demo-emprendimiento.html"],
  ["🤝", "Atlas ↔ Livia", "dos agentes coordinándose solos", "demo-comercio.html"],
  ["📲", "Tu WhatsApp vibra", "recibe el mensaje del agente", "demo-emprendimiento.html"],
  ["🏭", "Tu ERP de muestra", "súper, logística, restaurante, comercializadora", "demo-comercio.html"],
];

function home() {
  const contenido = html`
<!-- ══ 1 · HERO ══ -->
<section class="hero">
  <div class="hero-panel dark">
    <canvas class="hero-canvas" id="hero-canvas" aria-hidden="true"></canvas>
    <div class="hero-grid">
      <div>
        <span class="kicker">Saper vedere — «saber ver»</span>
        <h1 class="hero-tit">Inteligencia operativa para tu empresa.<br><em>Módulo por módulo, contigo.</em></h1>
        <p class="hero-sub">Mapeamos tus procesos con tu propia gente, los automatizamos con agentes de IA y concentramos todo tu negocio en un solo lugar: Da Vinci Central. Cada semana ves un avance funcionando.</p>
        <div class="hero-btns">
          <a class="btn btn-arrow" href="contacto.html">Agenda tu diagnóstico gratuito${flecha()}</a>
          <a class="btn btn-ghost" href="demos.html">Ver las demos</a>
        </div>
        <div class="hero-pie">
          <div class="dato"><b class="num-anim" data-num="6" data-post=" módulos">6 módulos</b><span class="mono" style="color:rgba(255,253,248,.45)">se integran o van solos</span></div>
          <div class="dato"><b class="num-anim" data-num="9" data-post=" industrias">9 industrias</b><span class="mono" style="color:rgba(255,253,248,.45)">mapeadas a detalle</span></div>
          <div class="dato"><b>Semanas</b><span class="mono" style="color:rgba(255,253,248,.45)">no meses, para el 1er módulo</span></div>
        </div>
      </div>

      <div class="hero-cards">
        <div class="glass kpi-card flota">
          <div class="panel-head" style="padding-bottom:.6rem;margin-bottom:.2rem">
            <span>Da Vinci Central</span><span class="badge"><i class="dot"></i>en vivo</span>
          </div>
          <div class="kpi-row"><span class="k">Ventas de hoy</span><span class="v up">$187,420</span></div>
          <div class="spark" aria-hidden="true">
            ${[38, 52, 44, 67, 58, 81, 72, 94].map((v, i) => html`<i style="height:${v}%;animation-delay:${i * 60}ms"></i>`)}
          </div>
          <div class="kpi-row"><span class="k">▲ 12.4% vs. ayer</span><span class="k">3 agentes trabajando</span></div>
        </div>

        <div class="glass flota flota-2">
          <h4>«¿Cuánto vendimos hoy?»</h4>
          <p>Pregunta en tu idioma y Central responde con cifras al momento — sin reportes, sin esperar a nadie.</p>
        </div>

        <div class="glass flota" style="animation-delay:-5s">
          <h4>3 agentes trabajando</h4>
          <p>Cotizan, cobran y avisan mientras tú decides. Cada movimiento queda registrado.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ MARQUEE ══ -->
<div class="marquee" aria-hidden="true">
  <div class="marquee-in">
    ${[0, 1].map(() => html`<div class="marquee-set">${MARQUEE.map((t) => html`<span>${t}</span><i>✳</i>`)}</div>`)}
  </div>
</div>

<!-- ══ 2 · EL PROBLEMA ══ -->
<section class="sec">
  <div class="wrap">
    ${secHead({ kicker: "El problema", titulo: "Nadie opera bien lo que no puede ver." })}
    <div class="grid g4">
      ${PROBLEMA.map(([t, d], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1}</span>
        <h4>${t}</h4>
        <p>${d}</p>
      </article>`)}
    </div>
  </div>
</section>

<!-- ══ 3 · DEL CÓDICE AL CÓDIGO ══ -->
<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({
          kicker: "Del códice al código",
          titulo: "Leonardo bocetó máquinas que se adelantaron 400 años.",
          lead: "Nosotros construimos la tuya — y la entregamos funcionando en semanas.",
        })}
        <div class="panel-oscuro" data-reveal="right">
          <div class="panel-head"><span>Da Vinci Central</span><span class="badge"><i class="dot"></i>en vivo</span></div>
          <div class="panel-row"><span class="r">Ventas de hoy</span><span class="v"><b class="num-anim" data-num="187420" data-pre="$">$187,420</b></span></div>
          <div class="panel-row"><span class="r">Pedidos activos</span><span class="v"><b class="num-anim" data-num="24">24</b></span></div>
          <div class="panel-row"><span class="r">Por cobrar</span><span class="v"><b class="num-anim" data-num="96150" data-pre="$">$96,150</b></span></div>
          <div class="panel-row destacado"><span class="r">¿Qué cliente compró más este mes?</span><span class="v">Comercial Robledo</span></div>
        </div>
      </div>
      <div class="sketch" data-reveal="left" style="color:var(--carbon);padding:clamp(1.4rem,3vw,2.6rem)">
        ${bocetoUI()}
        <p class="mono center" style="margin-top:1rem;color:var(--gris-medio);font-size:.62rem">Boceto de una interfaz · códice nº 1</p>
      </div>
    </div>
  </div>
</section>

<!-- ══ 4 · LA HISTORIA ══ -->
<section class="sec">
  <div class="wrap">
    <div class="split-2-3 split">
      <div>
        ${secHead({ kicker: "La historia", titulo: "Por qué Da Vinci" })}
        <p class="lead">Antes de pintar un músculo, Leonardo diseccionaba el cuerpo. Antes de diseñar una máquina, estudiaba el agua, el viento, el vuelo de los pájaros. Llenó más de 7,000 páginas de códices con observaciones y mediciones. <b style="color:var(--tinta)">No empezaba por la solución: empezaba por entender.</b></p>
        <p style="color:var(--gris-medio)" data-reveal>En su taller nada se construía de golpe: cada obra avanzaba por bocetos, pruebas y correcciones, con el cliente viendo el progreso.</p>
        <p style="color:var(--gris-medio)" data-reveal>Quinientos años después, trabajamos igual. Primero <b style="color:var(--tinta)">vemos</b> — mapeamos tu empresa proceso por proceso, con las personas que los viven a diario. Luego construimos <b style="color:var(--tinta)">por módulos</b>, mostrándote un avance cada semana. Y todo queda en <b style="color:var(--tinta)">un solo lugar</b>: un centro donde puedes preguntar lo que sea sobre tu negocio.</p>
        <blockquote class="cita" data-reveal>
          «La simplicidad es la máxima sofisticación.»
          <footer>atribuido al taller de Leonardo</footer>
        </blockquote>
        <p style="color:var(--gris-medio)" data-reveal>Por eso elegimos su nombre. No por el genio — por el método: <b style="color:var(--naranja)">observar, entender, construir, perfeccionar</b>.</p>
      </div>
      <div data-reveal="zoom" style="color:var(--naranja);opacity:.65">
        ${espiral()}
      </div>
    </div>
  </div>
</section>

<!-- ══ 5 · DA VINCI CENTRAL · BENTO ══ -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({
      kicker: "Da Vinci Central",
      titulo: "El centro de inteligencia operativa de tu empresa.",
      lead: "Como los códices donde Leonardo concentraba todo su conocimiento — pero este responde. Todo tu negocio, en tiempo real, en un solo lugar.",
      link: ["central.html", "Conócelo a fondo"],
    })}
    <div class="bento">
      <article class="tile b-lg" data-reveal>
        <div class="tile-viz">
          <div class="burbuja user" style="max-width:100%"><span id="tw-q">¿Cuánto vendimos esta semana?</span></div>
          <div class="burbuja bot" style="max-width:100%"><span id="tw-a">Esta semana llevan $487,320 — 12.4% arriba.</span></div>
        </div>
        <div class="tile-pie"><h5>Pregunta en tu idioma</h5><p>Sin reportes, sin esperar: la respuesta llega con cifras al momento.</p></div>
      </article>

      <article class="tile" data-reveal>
        <div class="panel-head" style="border:0;padding:0;margin:0"><span>En vivo</span><span class="badge"><i class="dot"></i></span></div>
        <div class="tile-viz">
          <div class="mini-row"><span>Ventas</span><span class="v"><b class="num-anim" data-num="487320" data-pre="$">$487,320</b></span></div>
          <div class="mini-row"><span>Tickets resueltos</span><span class="v"><b class="num-anim" data-num="128">128</b></span></div>
          <div class="mini-row"><span>Margen</span><span class="v"><b class="num-anim" data-num="24.8" data-dec="1" data-post="%">24.8%</b></span></div>
        </div>
        <div class="tile-pie"><h5>Todo en tiempo real</h5><p>Cada venta y cada pago se reflejan al instante, desde cualquier dispositivo.</p></div>
      </article>

      <article class="tile" data-reveal>
        <div class="tile-viz">
          <div class="mini-row"><span>Cobrar a Comercial Robledo</span><span class="v">$41,200</span></div>
          <div class="mini-row"><span>Pedir válvulas al proveedor</span><span class="v">stock 14</span></div>
          <div class="mini-row"><span>Cotización de Grupo Anzures</span><span class="v">vence hoy</span></div>
          <div class="mini-row"><span>Reporte semanal</span><span class="v">se genera solo</span></div>
        </div>
        <div class="tile-pie"><h5>Prioriza por ti</h5><p>La IA reordena tus pendientes según lo que más impacta hoy.</p></div>
      </article>

      <article class="tile b-lg" data-reveal>
        <div class="stream">
          <div class="stream-in">
            ${[0, 1].map(() => html`
              <span class="stream-item">🧾 Factura A-8841 registrada</span>
              <span class="stream-item">💬 Agente cerró venta · $1,890</span>
              <span class="stream-item">📦 Pedido #452 enviado</span>
              <span class="stream-item">⚠ Stock bajo: Válvula 3/4</span>
              <span class="stream-item">💰 Pago recibido · Farmacias Lira</span>`)}
          </div>
        </div>
        <div class="tile-pie"><h5>Cada movimiento, registrado</h5><p>El pulso de tu empresa corriendo las 24 horas — nada se pierde.</p></div>
      </article>

      <article class="tile b-full" data-reveal style="min-height:0">
        <div style="display:flex;flex-wrap:wrap;gap:1.4rem;align-items:center;justify-content:space-between">
          <div style="display:flex;gap:1rem;align-items:center">
            <span style="font-size:1.6rem">⚠</span>
            <div>
              <h5 style="margin:0">Te avisa antes del problema</h5>
              <p style="color:var(--texto-oscuro);font-size:.87rem;margin:.2rem 0 0">Inventario bajo: <b class="naranja">Válvula 3/4 — se agota el martes.</b> Cobranza, procesos detenidos: la alerta llega antes de que duela.</p>
            </div>
          </div>
          <a class="btn btn-ghost btn-sm" href="central.html">Ver Da Vinci Central</a>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ══ 6 · DEMOS INTERACTIVAS ══ -->
<section class="sec" id="demos">
  <div class="wrap">
    ${secHead({
      kicker: "Pruébalo aquí mismo",
      titulo: "No te lo contamos: juégalo.",
      lead: "Dos demos en vivo con datos de ejemplo. A la izquierda le preguntas a tu empresa; a la derecha, un agente cierra una venta a las 10 de la noche.",
    })}
    <div class="split">
      <div class="chat" id="chat-central" data-reveal="left">
        <div class="chat-top">
          <span class="av">DV</span>
          <div><b>Da Vinci Central</b><small>LISA · en línea</small></div>
        </div>
        <div class="chat-cuerpo">
          <div class="burbuja bot">Hola, soy <b>Da Vinci Central</b>. Pregúntame lo que quieras sobre tu empresa — elige una pregunta para probar:</div>
        </div>
        <div class="chat-sugerencias">
          <button class="sug" type="button" data-q="ventas">¿Cuánto vendimos esta semana?</button>
          <button class="sug" type="button" data-q="cobranza">¿Qué clientes no han pagado?</button>
          <button class="sug" type="button" data-q="inventario">¿Cómo va el inventario?</button>
        </div>
      </div>

      <div data-reveal="right">
        <div class="wa" id="wa-venta">
          <div class="wa-top">
            <span class="av">FC</span>
            <div><b>Ferretería El Compás</b><small>Agente Da Vinci · en línea</small></div>
          </div>
          <div class="wa-cuerpo"></div>
        </div>
        <button class="btn btn-ghost btn-sm" id="wa-venta-btn" type="button" style="margin-top:1rem">▶ Ver la conversación otra vez</button>
      </div>
    </div>
  </div>
</section>

<!-- ══ 7 · SALA DE DEMOS ══ -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({
      kicker: "La sala de demos",
      titulo: "Agentes que llaman, cotizan por voz y se coordinan entre sí.",
      lead: "Todo en vivo, con voz real. Y un WhatsApp que te escribe de verdad.",
    })}
    <div class="grid g4">
      ${DEMOS_TEASER.map(([ico, t, d, href]) => html`
      <a class="card" href="${href}" data-reveal>
        <span style="font-size:1.7rem;display:block;margin-bottom:.7rem">${ico}</span>
        <h4>${t}</h4>
        <p>${d}</p>
        <span class="link-arrow">Ver la estación →</span>
      </a>`)}
    </div>
    <div style="margin-top:2rem" data-reveal>
      <a class="btn btn-oscuro btn-arrow" href="demos.html">Entrar a la sala de demos${flecha()}</a>
    </div>
  </div>
</section>

<!-- ══ 8 · MÓDULOS (riel) ══ -->
<section class="sec">
  <div class="wrap">
    ${secHead({
      kicker: "Los módulos",
      titulo: "Cada invento resolvía un problema concreto. Cada módulo, también.",
      lead: "Los integramos todos — o empezamos por el único que necesitas.",
      link: ["modulos.html", "Ver todos a detalle"],
    })}
  </div>
  <div class="wrap riel-wrap">
    <div class="riel">
      ${MODULOS_HOME.map(([t, d], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1} — Módulo</span>
        <h3 style="font-size:1.32rem">${t}</h3>
        <p>${d}</p>
        <a class="link-arrow" href="${MODULOS_NAV[i][0]}">Ver el módulo →</a>
      </article>`)}
    </div>
    <div class="riel-ctrl">
      <button class="riel-btn riel-prev" type="button" aria-label="Anterior">←</button>
      <button class="riel-btn riel-next" type="button" aria-label="Siguiente">→</button>
    </div>
  </div>
</section>

<!-- ══ 9 · COMPARATIVA ══ -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "La diferencia", titulo: "Genérico vs. a tu medida." })}
    <div class="tabla-wrap" data-reveal>
      <table class="cmp">
        <thead><tr><th></th><th>Software genérico</th><th>Da Vinci IA</th></tr></thead>
        <tbody>
          ${COMPARATIVA.map(([a, b, c]) => html`<tr><th>${a}</th><td>${b}</td><td>${c}</td></tr>`)}
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ══ 10 · MÉTODO ══ -->
<section class="sec">
  <div class="wrap">
    ${secHead({
      kicker: "El Método Da Vinci",
      titulo: "Boceto → prueba → ajuste → obra.",
      lead: "Así trabajaba el taller de Leonardo; así construimos tu software. Nunca caminas a ciegas.",
      link: ["metodo.html", "Conoce el método completo"],
    })}
    <div class="pasos">
      ${METODO.map(([t, d], i) => html`
      <article class="paso" data-reveal>
        <span class="paso-n">0${i + 1}</span>
        <div><h4>${t}</h4><p>${d}</p></div>
      </article>`)}
    </div>
  </div>
</section>

<!-- ══ 11 · FUNDADOR ══ -->
<section class="sec-sm">
  <div class="wrap">${fundador()}</div>
</section>

<!-- ══ 12 · FAQ ══ -->
<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split-2-3 split" style="align-items:start">
      <div>
        ${secHead({ kicker: "Preguntas frecuentes", titulo: "Lo que todos preguntan." })}
        ${faqBloque(FAQ_HOME)}
      </div>
      <aside class="card" data-reveal="right" style="position:sticky;top:110px">
        <span class="kicker">¿Tu duda no está?</span>
        <h4>Escríbenos y la resolvemos en persona.</h4>
        <p>Sin guion de ventas: si la IA no te conviene todavía, también te lo decimos.</p>
        <a class="btn btn-ghost btn-sm" href="faq.html" style="margin-top:1rem">Ver todas las preguntas</a>
      </aside>
    </div>
  </div>
</section>

<!-- ══ 13 · CONTACTO ══ -->
<section class="sec" id="contacto">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({
          kicker: "Contacto",
          titulo: "Toda obra empieza con una conversación.",
          lead: "Cuéntanos qué quieres lograr y agendamos tu diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.",
        })}
        ${puntos([
          ["45 minutos", "Tu operación sobre la mesa, sin tecnicismos."],
          ["Mapa de retorno", "Dónde la IA ahorra tiempo o genera ingresos — y dónde no."],
          ["Propuesta concreta", "Si hay proyecto: alcance, tiempo y precio cerrado. Si no, también te lo decimos."],
        ])}
      </div>
      <div class="card" data-reveal="right">${formContacto()}</div>
    </div>
  </div>
</section>

${ctaFinal({
  titulo: "Tú tienes las llaves.",
  texto: "Agenda tu diagnóstico gratuito y te mostramos cómo se vería tu empresa completa en una sola pantalla.",
})}`;

  return pagina({
    titulo: "Da Vinci IA — Inteligencia operativa para tu empresa",
    descripcion: "Inteligencia operativa: mapeamos tu empresa y le construimos software a la medida con IA — automatizaciones, agentes inteligentes y Da Vinci Central, el centro donde preguntas y ves todo tu negocio. Avances cada semana, módulo por módulo.",
    ruta: "index.html",
    jsonld: orgLd + jsonld({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITIO.nombre,
      url: SITIO.url,
      inLanguage: "es-MX",
    }),
    contenido,
  });
}

export function paginas() {
  return [{ ruta: "index.html", html: home() }];
}
