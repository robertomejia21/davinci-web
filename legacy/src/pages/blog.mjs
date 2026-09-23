import { html, pagina, pageHero, secHead, ctaFinal, jsonld } from "../lib/layout.mjs";

export const POSTS = [
  {
    ruta: "blog-que-es-un-agente-ia.html",
    titulo: "Qué es un agente de IA (explicado sin humo)",
    bajada: "No es un chatbot con otro nombre. Un agente percibe, decide y actúa — y esa diferencia es la que genera retorno en una empresa.",
    lectura: "4 min",
    tema: "Fundamentos",
    cuerpo: [
      ["Chatbot vs. agente", "Un chatbot responde texto con texto. Un agente hace cosas: consulta tu inventario, registra el pedido, agenda la cita, envía la factura. La conversación es solo su interfaz; su valor está en las acciones."],
      ["Percibir, decidir, actuar", "Un agente percibe (llega un mensaje, un correo, una factura), decide con contexto (¿qué es?, ¿qué corresponde hacer?, ¿tengo la información?) y actúa (responde, registra, avisa, escala a un humano). Ese ciclo corre las 24 horas."],
      ["Por qué ahora sí funcionan", "Los modelos de lenguaje actuales entienden matices («me urge para el viernes», «¿no tienes algo más barato?») que los sistemas de reglas jamás entendieron. Conectados a tus datos, responden con tu realidad — no con generalidades."],
      ["La pregunta correcta", "No es «¿debería tener un agente?» sino «¿qué conversación repetitiva me está costando ventas o tiempo?». Ahí va el primer agente."],
    ],
  },
  {
    ruta: "blog-del-codice-al-codigo.html",
    titulo: "Del códice al código: cómo pensamos el software",
    bajada: "Leonardo llenó 7,000 páginas antes de construir. Nosotros mapeamos antes de programar. La historia de nuestra forma de trabajar.",
    lectura: "4 min",
    tema: "Método",
    cuerpo: [
      ["El taller renacentista", "En el taller de Leonardo nada se construía de golpe: bocetos, pruebas, correcciones, y el cliente viendo el progreso. El software de calidad se hace igual — por eso nuestras entregas son semanales y siempre frente a ti."],
      ["Saper vedere", "«Saber ver» era el lema de Leonardo. En una empresa significa: entender cómo fluye de verdad el trabajo — no cómo dice el manual que fluye. De ese mapa salen las automatizaciones que sí se usan."],
      ["El códice de tu empresa", "Leonardo concentraba todo su conocimiento en códices. Tu empresa merece lo mismo: un lugar donde vive todo lo que sabe — ventas, clientes, procesos, documentos — y al que puedes preguntarle. Así nació Da Vinci Central."],
      ["La simplicidad es la máxima sofisticación", "La IA más avanzada es la que no se nota: el reporte que ya estaba listo, la factura que se registró sola, el cliente que fue atendido a medianoche. Tecnología de punta, experiencia de simplicidad."],
    ],
  },
  {
    ruta: "blog-cuanto-cuesta-ia.html",
    titulo: "Cuánto cuesta la IA en una pyme (respuesta honesta)",
    bajada: "Menos que un empleado administrativo, más que una suscripción de software. Lo que de verdad determina el precio — y las señales de alerta.",
    lectura: "5 min",
    tema: "Inversión",
    cuerpo: [
      ["El rango honesto", "Un módulo bien delimitado (un agente de WhatsApp, una automatización de documentos) se ubica típicamente en el orden de lo que cuesta un empleado administrativo durante unos meses — y trabaja años, las 24 horas. Los proyectos crecen desde ahí según alcance e integraciones."],
      ["Lo que encarece (con razón)", "Integraciones con sistemas viejos, volúmenes altos, flujos críticos que exigen aprobaciones y auditoría. Lo que NO debería encarecer: logos de consultora, juntas eternas, licencias infladas."],
      ["Señales de alerta al cotizar", "Precio sin haber visto tu operación. Promesas de «transformación total». Contratos que te amarran años. Cotizaciones por hora sin tope. Un proveedor serio te da precio cerrado por alcance claro."],
      ["Cómo lo hacemos nosotros", "Diagnóstico gratuito → mapa de retorno → precio cerrado del primer módulo. Si el número no te hace sentido, te quedas con el mapa. Así de simple."],
    ],
  },
  {
    ruta: "blog-ia-para-pymes.html",
    titulo: "IA para pymes: por dónde empezar sin quemarse",
    bajada: "No necesitas un departamento de datos para usar IA. Necesitas un proceso que duela y un mapa claro. Aquí te decimos cómo elegirlo.",
    lectura: "5 min",
    tema: "Guía",
    cuerpo: [
      ["El error más común", "Empezar por la herramienta y no por el problema. La pregunta correcta no es «¿qué IA compro?» sino «¿qué proceso me está costando más tiempo o dinero?». La IA es el cómo, nunca el qué."],
      ["Los tres primeros candidatos", "En casi toda pyme, los primeros procesos con retorno claro son: (1) la atención a clientes por WhatsApp — se pierde venta por no contestar a tiempo; (2) la captura manual de documentos — facturas, pedidos, recibos; (3) los reportes — horas armando lo que un sistema puede generar solo."],
      ["Empieza por un módulo, no por una transformación", "Los proyectos de «transformación digital» de un año mueren de agotamiento. Un módulo que funciona en semanas construye confianza, ahorra dinero desde el primer mes y financia el siguiente paso."],
      ["La señal de que estás listo", "Si esta semana alguien de tu equipo copió datos de un lado a otro a mano, o un cliente esperó horas por una respuesta simple — ya tienes tu primer módulo. Lo demás es método."],
    ],
  },
  {
    ruta: "blog-agente-whatsapp-ventas.html",
    titulo: "El agente de WhatsApp que vende mientras duermes",
    bajada: "La mitad de los mensajes a un negocio llegan fuera de horario. Un agente de IA bien conectado responde, cotiza y aparta — a las 11 de la noche también.",
    lectura: "4 min",
    tema: "Agentes",
    cuerpo: [
      ["El costo invisible del «te contesto mañana»", "Cada mensaje sin respuesta es una venta que se enfría. El cliente que escribe a las 9 de la noche compara con tres competidores antes de dormirse; le compra al que contestó."],
      ["Qué hace un buen agente (y qué no)", "Un buen agente responde con tus precios y existencias reales, aparta productos, agenda citas y escala a un humano cuando la conversación lo pide. Uno malo recita respuestas genéricas — y espanta. La diferencia está en conectarlo a tus sistemas, no en el chatbot."],
      ["El tono importa tanto como la respuesta", "El agente habla con el tono de tu marca: si tu negocio es cercano y directo, el agente también. Nada de «Estimado usuario, su solicitud ha sido procesada»."],
      ["Resultado típico", "Negocios que atienden por WhatsApp con IA reportan respuesta inmediata 24/7, más citas agendadas y ventas cerradas fuera de horario — sin contratar un turno nocturno."],
    ],
  },
  {
    ruta: "blog-como-automatizar-procesos.html",
    titulo: "Cómo automatizar un proceso sin romper tu operación",
    bajada: "La automatización mal hecha rompe más de lo que arregla. La bien hecha es invisible: un día el reporte simplemente ya estaba listo.",
    lectura: "5 min",
    tema: "Automatización",
    cuerpo: [
      ["Primero mapea, luego automatiza", "Automatizar un proceso desordenado solo produce desorden más rápido. Antes de tocar tecnología hay que ver el proceso como es: quién hace qué, cuándo, con qué excepciones. Ese mapa vale oro incluso antes de automatizar."],
      ["Automatiza el 80%, respeta el 20%", "Casi ningún proceso se automatiza al 100% — y está bien. Las excepciones raras las decide una persona; el volumen repetitivo lo hace la máquina. Ese reparto es el que ahorra horas sin generar errores."],
      ["Deja que conviva con lo que ya usas", "La automatización correcta se integra con tu ERP, tu Excel y tu correo actuales. Si te piden tirar todo y empezar de cero, sospecha."],
      ["Mide antes y después", "Horas invertidas, errores por mes, tiempo de respuesta. Sin la foto del antes, nadie te podrá demostrar el después. Nosotros la tomamos en el mapeo inicial."],
    ],
  },
];

function indice() {
  const [destacado, ...resto] = POSTS;
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Blog"]],
    titulo: "El <em>cuaderno</em>",
    lead: "Ideas claras sobre IA aplicada a empresas reales. Sin humo, sin tecnicismos innecesarios.",
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <a class="card" href="${destacado.ruta}" data-reveal style="padding:clamp(1.6rem,3.4vw,2.8rem);margin-bottom:1.4rem">
      <span class="badge"><i class="dot"></i>Lo más leído · ${destacado.tema}</span>
      <h2 style="margin-top:.8rem;font-size:clamp(1.7rem,3.6vw,2.8rem)">${destacado.titulo}</h2>
      <p style="font-size:1.05rem;max-width:48rem">${destacado.bajada}</p>
      <span class="link-arrow">Leer artículo · ${destacado.lectura} →</span>
    </a>
    <div class="grid g3">
      ${resto.map((p) => html`
      <a class="card" href="${p.ruta}" data-reveal>
        <span class="card-num">${p.tema} · ${p.lectura}</span>
        <h3 style="font-size:1.28rem">${p.titulo}</h3>
        <p>${p.bajada}</p>
        <span class="link-arrow">Leer artículo →</span>
      </a>`)}
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "blog.html",
    html: pagina({
      titulo: "Blog",
      descripcion: "Ideas claras sobre IA aplicada a empresas: agentes, automatización, costos y método. Sin humo.",
      ruta: "blog.html",
      contenido,
    }),
  };
}

function postPagina(p, i) {
  const siguientes = POSTS.filter((o) => o.ruta !== p.ruta).slice(0, 2);
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], ["blog.html", "Blog"], [null, "Artículo"]],
    titulo: p.titulo,
    lead: p.bajada,
    etiquetas: [p.tema, p.lectura + " de lectura", "sin humo"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split-2-3 split" style="align-items:start">
      <article class="prosa">
        ${p.cuerpo.map(([h, t]) => html`<div data-reveal><h3>${h}</h3><p>${t}</p></div>`)}
        <div class="linea-deco"></div>
        <div data-reveal>
          <h3>¿Quieres esto en tu empresa?</h3>
          <p>Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.</p>
          <a class="btn btn-arrow" href="contacto.html" style="margin-top:.6rem">Agenda tu diagnóstico gratuito</a>
        </div>
      </article>

      <aside data-reveal="right" style="position:sticky;top:110px;display:grid;gap:1rem">
        <div class="card">
          <span class="kicker">Sigue leyendo</span>
          ${siguientes.map((o) => html`
          <a href="${o.ruta}" style="display:block;padding:.7rem 0;border-bottom:1px solid var(--linea)">
            <strong style="display:block;font-size:.98rem;font-weight:600">${o.titulo}</strong>
            <span class="mono" style="color:var(--gris-medio)">${o.tema} · ${o.lectura}</span>
          </a>`)}
          <a class="link-arrow" href="blog.html" style="margin-top:1rem">Ver todo el cuaderno →</a>
        </div>
        <div class="card" style="background:var(--tinta-tech);color:var(--blanco-calido);border-color:var(--linea-oscura)">
          <span class="kicker">🔑 LISA</span>
          <h4 style="color:var(--blanco-calido)">¿Y si tu empresa ya pudiera responderte?</h4>
          <p style="color:var(--texto-oscuro)">Conoce al agente maestro que ve ventas, planta y caja — y te lo cuenta en una conversación.</p>
          <a class="link-arrow" href="lisa.html">Conocer a LISA →</a>
        </div>
      </aside>
    </div>
  </div>
</section>`;

  return {
    ruta: p.ruta,
    html: pagina({
      titulo: p.titulo,
      descripcion: p.bajada,
      ruta: p.ruta,
      jsonld: jsonld({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.titulo,
        description: p.bajada,
        inLanguage: "es-MX",
        author: { "@type": "Organization", name: "Da Vinci IA" },
        publisher: { "@type": "Organization", name: "Da Vinci IA" },
      }),
      contenido,
    }),
  };
}

export function paginas() {
  return [indice(), ...POSTS.map(postPagina)];
}
