import {
  html, pagina, pageHero, secHead, ctaFinal, panelVivo, puntos, cardLink,
  MODULOS_NAV, jsonld, flecha,
} from "../lib/layout.mjs";

/* ---------- datos de los 6 módulos ---------- */
export const MODULOS = [
  {
    ruta: "modulo-automatizacion.html",
    titulo: "Automatización de procesos",
    tagline: "Lo repetitivo, en piloto automático.",
    meta: "Automatiza facturas, reportes, seguimientos y tareas repetitivas con IA. Tu equipo se dedica a lo que necesita criterio humano.",
    tags: ["workflows", "rpa+ia", "cero_captura"],
    panel: {
      head: "Automatización · hoy 6:00 am",
      filas: [
        ["Reporte de ventas de ayer", "✓ enviado solo · 6:00"],
        ["14 facturas de proveedores", "✓ capturadas sin manos"],
        ["Seguimientos de cobranza", "✓ 9 recordatorios salieron"],
      ],
      destacado: ["Horas humanas invertidas", "0.0"],
    },
    hace: [
      ["Captura sin manos", "Facturas, pedidos y correos se leen y registran solos en tu sistema, sin que nadie los teclee."],
      ["Reportes que se generan solos", "El reporte de ventas del lunes se arma y se envía solo — con los datos ya validados."],
      ["Seguimientos que no se olvidan", "Cobranza, pedidos pendientes y recordatorios se disparan a tiempo, todos los días."],
      ["Flujos entre sistemas", "Cuando pasa algo en un sistema (una venta), pasa lo correcto en los demás (factura, inventario, aviso)."],
    ],
    practica: [
      "Una distribuidora elimina 3 horas diarias de captura de facturas de proveedores.",
      "Un despacho envía estados de cuenta y recordatorios de pago sin intervención humana.",
      "Una comercializadora genera sus reportes de dirección cada lunes a las 7:00 am, solos.",
    ],
  },
  {
    ruta: "modulo-agentes-ia.html",
    titulo: "Agentes de IA — chat y voz",
    tagline: "Tu mejor vendedor no duerme.",
    meta: "Agentes de IA que atienden WhatsApp, web y teléfono 24/7: responden, cotizan, agendan y venden con el tono de tu marca.",
    tags: ["agentes_autonomos", "whatsapp_api", "voz_natural"],
    panel: {
      head: "Agente · 11:03 pm",
      filas: [
        ["«¿Tienen en color blanco?»", "✓ respondido en 4s"],
        ["Cotización con precios reales", "✓ enviada"],
        ["Cita agendada para mañana", "✓ 10:30 am"],
      ],
      destacado: ["Ventas cerradas fuera de horario", "3 esta semana"],
    },
    hace: [
      ["Atención en WhatsApp 24/7", "Responde preguntas, cotiza y aparta productos a cualquier hora — con el tono de tu marca."],
      ["Voz natural por teléfono", "Contesta llamadas, agenda citas y hace encuestas con una voz que suena humana."],
      ["Escala a tu equipo cuando toca", "Detecta cuándo la conversación necesita a una persona y la transfiere con todo el contexto."],
      ["Conectado a tu inventario", "Cotiza con precios y existencias reales, no con respuestas genéricas."],
    ],
    practica: [
      "Una ferretería cierra ventas a las 11 de la noche mientras el dueño duerme.",
      "Una clínica llena su agenda con un agente que confirma y reagenda citas por WhatsApp.",
      "Un restaurante toma pedidos por teléfono con voz de IA en horas pico.",
    ],
  },
  {
    ruta: "modulo-copilots.html",
    titulo: "Copilots por rol",
    tagline: "Un experto de IA al lado de cada puesto.",
    meta: "Asistentes de IA especializados por puesto: ventas, finanzas, operaciones. Cada quien con su copiloto entrenado en su trabajo.",
    tags: ["llm", "rag", "por_rol"],
    panel: {
      head: "Copilot de ventas · lunes 7:55 am",
      filas: [
        ["Resumen de tus 6 citas de hoy", "✓ listo"],
        ["Historial + pendientes por cliente", "✓ en tu WhatsApp"],
        ["Propuesta borrador para Grupo Mira", "✓ esperando tu ok"],
      ],
      destacado: ["Tiempo preparando la semana", "8 min, no 2 horas"],
    },
    hace: [
      ["Copilot de ventas", "Prepara la información del cliente antes de cada visita y sugiere el siguiente paso de cada oportunidad."],
      ["Copilot de finanzas", "Concilia movimientos, detecta gastos fuera de patrón y arma el borrador del cierre mensual."],
      ["Copilot de operaciones", "Vigila pedidos, tiempos y pendientes; avisa qué se está atorando y por qué."],
      ["Entrenado en TU empresa", "Cada copilot conoce tus productos, tus precios, tus políticas — no respuestas de internet."],
    ],
    practica: [
      "Un equipo de ventas dedica sus mañanas a vender, no a armar reportes de visitas.",
      "Una contadora cierra el mes en dos días en lugar de una semana.",
      "Un gerente de operaciones detecta cuellos de botella antes de que detengan la entrega.",
    ],
  },
  {
    ruta: "modulo-documentos.html",
    titulo: "Documentos inteligentes",
    tagline: "Papeles que se leen solos.",
    meta: "Facturas, contratos y correos que se leen, se capturan y se archivan solos con IA. Adiós a la captura manual.",
    tags: ["ocr+ia", "extraccion", "archivo_vivo"],
    panel: {
      head: "Documentos · bandeja de hoy",
      filas: [
        ["23 facturas recibidas por correo", "✓ leídas y registradas"],
        ["Contrato nuevo: cláusulas clave", "✓ resumidas"],
        ["⚠ Fianza vence en 12 días", "alerta enviada"],
      ],
      destacado: ["Captura manual", "eliminada"],
    },
    hace: [
      ["Facturas y recibos", "La IA extrae proveedor, montos, fechas e impuestos y los registra en tu sistema."],
      ["Contratos", "Resume cláusulas clave, fechas de vencimiento y obligaciones — y te avisa antes de que venzan."],
      ["Correos con adjuntos", "Detecta qué llegó, qué es y a dónde va: el pedido al sistema, la factura a cuentas por pagar."],
      ["Archivo que se organiza solo", "Cada documento queda clasificado y localizable con una búsqueda en lenguaje natural."],
    ],
    practica: [
      "Una constructora procesa 400 facturas al mes sin capturar una sola a mano.",
      "Un despacho legal encuentra cualquier cláusula de sus contratos en segundos.",
      "Una importadora ya no pierde pedimentos: todo entra, se clasifica y se archiva solo.",
    ],
  },
  {
    ruta: "modulo-prediccion.html",
    titulo: "Análisis predictivo",
    tagline: "Decide con lo que viene, no con lo que pasó.",
    meta: "Pronóstico de ventas, inventario y flujo de caja con IA. Decisiones con evidencia, no con intuición.",
    tags: ["forecasting", "series_de_tiempo", "alertas"],
    panel: {
      head: "Pronóstico · próximos 30 días",
      filas: [
        ["Ventas previstas", "$1.42M · 89% confianza"],
        ["⚠ SKU 114 se agota en 6 días", "pedido sugerido"],
        ["Flujo de caja semana 6", "apretón detectado a tiempo"],
      ],
      destacado: ["Decisiones a ciegas", "0"],
    },
    hace: [
      ["Pronóstico de ventas", "Cuánto vas a vender el próximo mes, por producto y por zona, con base en tu historial real."],
      ["Inventario óptimo", "Qué pedir, cuánto y cuándo — antes de que se agote o se te pudra en bodega."],
      ["Flujo de caja proyectado", "Cómo se ve tu caja a 30, 60 y 90 días considerando cobranza real y pagos programados."],
      ["Alertas de desviación", "Si algo se sale del pronóstico — para bien o para mal — lo sabes ese día, no en el cierre."],
    ],
    practica: [
      "Una distribuidora reduce 30% su inventario muerto pidiendo justo lo que va a rotar.",
      "Un restaurante ajusta compras y personal según la demanda prevista por día.",
      "Una comercializadora anticipa un bache de caja con 6 semanas de ventaja y lo cubre a tiempo.",
    ],
  },
  {
    ruta: "modulo-integraciones.html",
    titulo: "Integraciones con lo tuyo",
    tagline: "No tires nada: conéctalo.",
    meta: "Conectamos tu ERP, CRM, Excel y WhatsApp para que todos tus sistemas hablen entre sí. No reemplazamos lo que funciona.",
    tags: ["api", "erp/crm", "una_sola_verdad"],
    panel: {
      head: "Integraciones · todo conectado",
      filas: [
        ["Venta en WhatsApp → factura en ERP", "✓ automático"],
        ["Excel de precios → cotizador", "✓ sincronizado"],
        ["Banco → conciliación", "✓ diaria"],
      ],
      destacado: ["Sistemas que tiraste", "0 — todo se aprovechó"],
    },
    hace: [
      ["Tu ERP y tu contabilidad", "Lo que pasa en la operación se refleja en tus sistemas de registro sin doble captura."],
      ["Tus Excel de siempre", "Si un Excel funciona, lo respetamos — y lo conectamos para que se alimente solo."],
      ["WhatsApp y correo", "Los canales donde ya hablas con clientes se vuelven parte del sistema, no islas."],
      ["Una sola verdad", "Todos los sistemas conectados a Da Vinci Central: un solo lugar donde los números coinciden."],
    ],
    practica: [
      "Una empresa une su ERP, su Excel de precios y su WhatsApp de ventas en un flujo único.",
      "Un equipo deja de capturar dos veces lo mismo en dos sistemas distintos.",
      "Dirección ve por fin el mismo número en ventas, contabilidad y operación.",
    ],
  },
];

/* ---------- índice de módulos ---------- */
function indice() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Módulos"]],
    titulo: "Los <em>módulos</em>",
    lead: "Cada invento de Leonardo resolvía un problema concreto. Cada módulo nuestro, también. Los integramos todos — o empezamos por el único que necesitas.",
    etiquetas: ["6 módulos", "se integran o van solos", "precio cerrado"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="grid g3">
      ${MODULOS.map((m, i) => cardLink(m.ruta, `0${i + 1}`, m.titulo, m.tagline, "Ver el módulo"))}
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({
          kicker: "Cómo se combinan",
          titulo: "Uno solo resuelve. Todos juntos, transforman.",
          lead: "Cada módulo funciona por su cuenta, pero todos alimentan a Da Vinci Central: el lugar donde le preguntas a tu empresa y los números coinciden.",
        })}
        ${puntos([
          ["Empiezas por el que más duele", "En el diagnóstico priorizamos por retorno, no por catálogo."],
          ["Creces al ritmo que decidas", "Módulo sobre módulo — sfumato, capa sobre capa."],
          ["Todo alimenta a Central", "Cada módulo nuevo enriquece lo que LISA puede ver y responder."],
        ])}
        <a class="btn btn-arrow" href="metodo.html" style="margin-top:1.6rem">Conoce el Método${flecha()}</a>
      </div>
      ${panelVivo({
        head: "Central · alimentado por 4 módulos",
        filas: [
          ["Automatización", "9 flujos corriendo"],
          ["Agentes de IA", "3 canales atendidos"],
          ["Documentos", "412 docs este mes"],
          ["Predicción", "pronóstico 89% confianza"],
        ],
        destacado: ["Una sola verdad", "en una pantalla"],
      })}
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "modulos.html",
    html: pagina({
      titulo: "Módulos",
      descripcion: "Los seis módulos de Da Vinci IA: automatización, agentes de IA, copilots, documentos inteligentes, análisis predictivo e integraciones.",
      ruta: "modulos.html",
      contenido,
    }),
  };
}

/* ---------- página de módulo ---------- */
function moduloPagina(m, i) {
  const otros = MODULOS.filter((x) => x.ruta !== m.ruta).slice(0, 3);
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], ["modulos.html", "Módulos"], [null, m.titulo]],
    titulo: m.titulo,
    lead: m.tagline,
    etiquetas: m.tags,
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: `Módulo 0${i + 1}`, titulo: "Qué hace por tu empresa" })}
        ${puntos(m.hace)}
      </div>
      <div>
        ${panelVivo(m.panel)}
        <div class="card" data-reveal style="margin-top:1.2rem">
          <span class="kicker">Cómo se ve en la práctica</span>
          <ul class="puntos" style="gap:.8rem">
            ${m.practica.map((p) => html`<li class="punto"><span class="ico">✳</span><span><span style="color:var(--carbon)">${p}</span></span></li>`)}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Implementación", titulo: "Cómo lo implementamos" })}
        <p class="lead">Como todo en Da Vinci IA, este módulo sigue el <a class="u-link" href="metodo.html">Método Da Vinci</a>: mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en <a class="u-link" href="central.html">Da Vinci Central</a>.</p>
      </div>
      <div class="grid" data-reveal="right">
        ${otros.map((o) => html`
        <a class="card" href="${o.ruta}" style="padding:1.1rem 1.3rem">
          <h4 style="font-size:1.1rem;margin-bottom:.2rem">${o.titulo}</h4>
          <p style="font-size:.88rem">${o.tagline}</p>
        </a>`)}
      </div>
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: m.ruta,
    html: pagina({
      titulo: m.titulo,
      descripcion: m.meta,
      ruta: m.ruta,
      jsonld: jsonld({
        "@context": "https://schema.org",
        "@type": "Service",
        name: m.titulo,
        description: m.meta,
        provider: { "@type": "Organization", name: "Da Vinci IA" },
        areaServed: "MX",
      }),
      contenido,
    }),
  };
}

export function paginas() {
  return [indice(), ...MODULOS.map(moduloPagina)];
}
