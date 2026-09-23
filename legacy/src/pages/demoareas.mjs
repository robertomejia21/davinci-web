import {
  html, pagina, pageHero, secHead, ctaFinal, panelVivo, puntos, flecha,
} from "../lib/layout.mjs";

/* tarjeta de plataforma: abierta (link real) o bajo llave (solicita acceso) */
const plataforma = ({ ico, nombre, texto, href, estado }) => html`
<article class="card" data-reveal style="display:flex;flex-direction:column;gap:.4rem">
  <span style="font-size:1.7rem">${ico}</span>
  <h3 style="font-size:1.25rem;margin-bottom:.2rem">${nombre}</h3>
  <p>${texto}</p>
  <div style="margin-top:auto;padding-top:1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
    <span class="tag ${estado === "abierta" ? "tag-naranja" : ""}">${estado === "abierta" ? "Disponible" : "Bajo llave · demo guiada"}</span>
    <a class="link-arrow" href="${href}">${estado === "abierta" ? "Abrir la plataforma" : "Pedir acceso"} →</a>
  </div>
</article>`;

const enCorto = (items) => html`
<div class="grid g4">
  ${items.map(([t, d], i) => html`
  <article class="card" data-reveal>
    <span class="card-num">0${i + 1}</span>
    <h4>${t}</h4>
    <p>${d}</p>
  </article>`)}
</div>`;

/* ═══════════════ ÁREA INDUSTRIAL ═══════════════ */
function industrial() {
  const contenido = html`
${pageHero({
    migaItems: [["demos.html", "Sala de demos"], [null, "Industrial"]],
    titulo: "El mundo <em>industrial</em>.",
    lead: "Donde cada minuto de línea detenida cuesta, y donde nadie debería enterarse de los problemas al final del turno.",
    etiquetas: ["maquila", "transformacion", "lineas", "calidad", "proveedores"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    ${secHead({ kicker: "Este mundo, en corto", titulo: "Tres perfiles, un mismo dolor." })}
    ${enCorto([
      ["Maquiladoras.", "Producen contra programa del cliente: la puntualidad y el reporte de avance lo son todo. La IA captura el piso sin papel y reporta sola."],
      ["Transformación.", "Materia prima entra, producto sale — y en medio: mermas, paros y calidad. Visión artificial y OEE en vivo convierten ese «en medio» en números."],
      ["Proveedores industriales.", "Cotizan, fabrican, entregan y cobran. Agentes que cotizan con planos recibidos por correo y persiguen órdenes de compra."],
      ["Los dolores comunes.", "Producción reportada en papel, paros sin causa registrada, calidad detectada tarde, mantenimiento reactivo, compras a ciegas."],
    ])}
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Las plataformas de esta área", titulo: "Entra y juega." })}
    <div class="grid g2">
      ${plataforma({
        ico: "⚙", nombre: "Planta Da Vinci", href: "app-planta.html", estado: "abierta",
        texto: "La app insignia: líneas en vivo, OEE, visión artificial, calidad y mantenimiento — un SCADA con cerebro. Ábrela en pantalla completa y simula un paro.",
      })}
      ${plataforma({
        ico: "📦", nombre: "Proveedor Da Vinci", href: "contacto.html", estado: "llave",
        texto: "Llega el plano por correo → LISA lo lee y cotiza en 90 segundos → OC en seguimiento → factura al firmar. Te la mostramos en vivo en el diagnóstico.",
      })}
    </div>
    <p class="muted" style="margin-top:1.6rem">¿Quieres el detalle técnico? Lee la página de <a class="u-link" href="planta.html">planta y transformación</a> o agenda tu <a class="u-link" href="diagnostico.html">diagnóstico</a>.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid g3">
      ${panelVivo({ head: "Piso · turno A", filas: [["Operador reporta por voz", "✓ registrado"], ["Producción del turno", "12,542 pzas"], ["Captura al día siguiente", "eliminada"]], destacado: ["OEE visible", "84.2% ahora"] })}
      ${panelVivo({ head: "Visión · CAM-02", filas: [["Tapa floja detectada", "pieza 8,412"], ["Desviada a retrabajo", "✓ automática"]], destacado: ["Defectos que salieron hoy", "0"] })}
      ${panelVivo({ head: "Mantenimiento", filas: [["Etiquetadora L2: vibración +18%", "patrón de mordaza"], ["OT-441 programada", "✓ domingo"]], destacado: ["Paro evitado", "$84,000"] })}
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "¿Tu planta merece verse así?",
    texto: "En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos.",
  })}`;

  return {
    ruta: "demo-industrial.html",
    html: pagina({
      titulo: "Área Industrial — Demos",
      descripcion: "El mundo industrial con inteligencia operativa: maquila, transformación, líneas de producción, calidad y proveedores. Entra a Planta Da Vinci.",
      ruta: "demo-industrial.html",
      contenido,
    }),
  };
}

/* ═══════════════ ÁREA COMERCIO Y SERVICIOS ═══════════════ */
function comercio() {
  const ERP = {
    super: {
      nombre: "Supermercado",
      kpis: [["Venta del día · 4 tiendas", "$412,880"], ["Ticket promedio", "$286"], ["Merma detectada", "7 caducidades · pasillo 4"]],
      feed: ["🥫 Anaquel de abarrotes: hueco detectado (visión) → surtido asignado", "🧾 Corte de caja T2 conciliado automático", "📦 Pedido a CEDIS generado: 214 SKUs según pronóstico"],
    },
    logistica: {
      nombre: "Logística",
      kpis: [["Unidades en ruta", "5"], ["Entregas a tiempo", "94%"], ["Alerta de flota", "Unidad 14: mantenimiento en 800 km"]],
      feed: ["🛰 Cliente preguntó por pedido #7712 → agente respondió con ubicación", "🗺 Ruta 6 reoptimizada: −42 min por cierre vial", "⛽ Rendimiento de combustible fuera de patrón en unidad 09"],
    },
    restaurante: {
      nombre: "Restaurante",
      kpis: [["Comandas activas", "18"], ["Venta hoy", "$64,320"], ["Insumo crítico", "Queso: alcanza para 22 platillos"]],
      feed: ["📱 Reserva para 6 personas tomada por el agente (WhatsApp)", "🍳 Pronóstico de mañana: 214 comensales → compra sugerida lista", "💰 Margen del platillo estrella: 61.2% esta semana"],
    },
    comercializadora: {
      nombre: "Comercializadora",
      kpis: [["Pipeline activo", "$1,284,500"], ["Margen promedio", "24.8%"], ["Riesgo de mora", "Grupo Anzures: patrón de atraso"]],
      feed: ["📄 Cotización #3311 generada y enviada en 90 segundos", "🔁 Seguimiento automático: 12 prospectos tocados hoy", "💵 Margen bajo detectado en cotización de válvulas → alerta al gerente"],
    },
  };

  const contenido = html`
${pageHero({
    migaItems: [["demos.html", "Sala de demos"], [null, "Comercio y servicios"]],
    titulo: "Comercio y <em>servicios</em>.",
    lead: "Vender, surtir, entregar y cobrar — todos los días, sin puntos ciegos.",
    etiquetas: ["super", "comercializadora", "restaurante", "logistica"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    ${secHead({ kicker: "Este mundo, en corto", titulo: "Cuatro mostradores, un solo centro." })}
    ${enCorto([
      ["Supermercados.", "Anaqueles llenos, mermas mínimas, cajas conciliadas."],
      ["Comercializadoras.", "Cotizar rápido, cuidar margen, cobrar a tiempo."],
      ["Restaurantes.", "Reservas, comandas y compras según demanda prevista."],
      ["Logística.", "Cada unidad, ruta y entrega — visible y avisando sola."],
    ])}
  </div>
</section>

<!-- Torre de control -->
<section class="sec sec-hondo" id="torre">
  <div class="wrap">
    <span class="estacion-lbl">🚛 Estación A1 · logística y transporte</span>
    ${secHead({
      titulo: "Torre de control",
      lead: "Cinco unidades en ruta, cuatro agentes vigilando. Pregunta por un pedido, provoca un retraso y mira a los agentes resolverlo en cascada — solos.",
    })}
    <div class="split">
      <div class="panel-oscuro" data-reveal="left">
        <div class="panel-head"><span>Feed de agentes</span><span class="badge"><i class="dot"></i>en vivo</span></div>
        <div class="feed"></div>
      </div>
      <div data-reveal="right" style="display:grid;gap:.8rem;align-content:start">
        <button class="btn btn-ghost" type="button" data-torre="1-3">📍 ¿Dónde va mi pedido #7712?</button>
        <button class="btn btn-ghost" type="button" data-torre="4-7">⚠ Simular retraso en U-14</button>
        <button class="btn btn-ghost" type="button" data-torre="8-11">📸 Chofer envía evidencia</button>
        <div class="card" style="margin-top:.6rem">
          <p style="margin:0"><b>Esto que viste en 90 segundos</b>, hoy en tu empresa son 6 llamadas y 2 horas.</p>
          <p class="muted" style="font-size:.86rem;margin-top:.6rem">Agentes en escena: <b>Faro</b> (rastreo) · <b>Portero</b> (citas de rampa) · <b>Escriba</b> (documentos) · <b>Cobrador</b> (fletes).</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Atlas ↔ Livia -->
<section class="sec">
  <div class="wrap">
    <span class="estacion-lbl">🤝 Estación 03 · agente ↔ agente</span>
    ${secHead({
      titulo: "Dos agentes resuelven un pedido urgente",
      lead: "Atlas (logística) y Livia (almacén) se coordinan solos. Tiempo humano invertido: cero.",
    })}
    <div class="chat" data-reveal style="min-height:0">
      <div class="chat-top">
        <span class="av">A</span>
        <div><b>Atlas · logística</b><small>↔ Livia · almacén</small></div>
      </div>
      <div class="chat-cuerpo" style="max-height:none">
        <div class="burbuja user">Livia, pedido urgente de Farmacias Lira: 40 cajas, entrega mañana antes de las 9:00.</div>
        <div class="burbuja bot">Lo veo. 32 cajas en almacén central y 8 en sucursal norte. Consolido esta noche.</div>
        <div class="burbuja user">La ruta 3 sale a las 6:00 y tiene espacio. La reservo.</div>
        <div class="burbuja bot">Hecho. Etiquetas listas y el chofer ya tiene la orden en su app.</div>
        <div class="burbuja user">Aviso al cliente por WhatsApp con hora estimada… Enviado. <b>Pedido resuelto en 40 segundos.</b></div>
      </div>
    </div>
  </div>
</section>

<!-- Mini ERPs -->
<section class="sec sec-hondo" id="erp">
  <div class="wrap">
    <span class="estacion-lbl">🏭 Estación 06 · tu industria</span>
    ${secHead({
      titulo: "Así se ve TU sistema",
      lead: "Paneles de muestra del ERP/CRM que construimos por industria. En tu diagnóstico, esto mismo se dibuja con tus procesos.",
    })}
    <div data-tabs>
      <div class="tabs">
        ${Object.entries(ERP).map(([k, v], i) => html`
        <button class="tab ${i === 0 ? "activo" : ""}" type="button" data-tab="${k}" aria-selected="${i === 0}">${v.nombre}</button>`)}
      </div>
    </div>
    ${Object.entries(ERP).map(([k, v], i) => html`
    <div class="tab-panel ${i === 0 ? "activo" : ""}" data-panel="${k}">
      <div class="app-shell">
        <div class="app-bar"><span>${v.nombre} Da Vinci · panel de muestra</span><span class="badge"><i class="dot"></i>datos de ejemplo</span></div>
        <div class="app-kpis" style="grid-template-columns:repeat(3,1fr)">
          ${v.kpis.map(([t, d]) => html`<div class="app-kpi"><small>${t}</small><b class="naranja" style="font-size:1.35rem">${d}</b></div>`)}
        </div>
        <div class="app-body">
          <div class="feed">
            ${v.feed.map((f) => html`<div class="feed-item"><span>${f}</span></div>`)}
          </div>
        </div>
      </div>
    </div>`)}
    <p class="muted" style="margin-top:1.6rem">¿Tu industria no está aquí? Mira <a class="u-link" href="industrias.html">todas las industrias</a> o la sección de <a class="u-link" href="planta.html">planta y transformación</a> — y en el diagnóstico lo aterrizamos a tu operación exacta.</p>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${secHead({ kicker: "Las plataformas de esta área", titulo: "Tres puertas más." })}
    <div class="grid g3">
      ${plataforma({ ico: "🚛", nombre: "Torre de Control", href: "#torre", estado: "abierta", texto: "Logística en vivo: unidades en mapa, cascada de agentes ante retrasos, evidencia → factura." })}
      ${plataforma({ ico: "🛒", nombre: "Súper Da Vinci", href: "contacto.html", estado: "llave", texto: "4 tiendas en vivo, visión de anaquel que detecta huecos y caducidades, pedido a CEDIS por pronóstico." })}
      ${plataforma({ ico: "🍽", nombre: "Cocina Da Vinci", href: "contacto.html", estado: "llave", texto: "El riel de comandas en hora pico, reservas confirmadas por LISA, insumos que se piden solos." })}
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "¿Tu operación merece verse así?",
    texto: "En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos.",
  })}`;

  return {
    ruta: "demo-comercio.html",
    html: pagina({
      titulo: "Área Comercio y servicios — Demos",
      descripcion: "Comercio y servicios con inteligencia operativa: súper, comercializadoras, restaurantes y logística. Torre de control y ERP de muestra.",
      ruta: "demo-comercio.html",
      contenido,
    }),
  };
}

/* ═══════════════ ÁREA FINANCIERA ═══════════════ */
function financiera() {
  const contenido = html`
${pageHero({
    migaItems: [["demos.html", "Sala de demos"], [null, "Financiera y fiscal"]],
    titulo: "Financiera y <em>fiscal</em>.",
    lead: "El área que todos cruzan: números que se cuidan solos y cierres sin batalla.",
    etiquetas: ["contabilidad", "tesoreria", "cfdi"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    ${secHead({ kicker: "Este mundo, en corto", titulo: "Tres frentes, cero sustos." })}
    <div class="grid g3">
      ${[
        ["Contabilidad.", "Pólizas y conciliaciones que se arman solas; tú revisas excepciones."],
        ["Tesorería.", "Flujo a 30/60/90 días con alertas antes del bache."],
        ["Fiscal.", "CFDI, complementos y calendario de obligaciones sin sustos."],
      ].map(([t, d], i) => html`
      <article class="card" data-reveal><span class="card-num">0${i + 1}</span><h4>${t}</h4><p>${d}</p></article>`)}
    </div>
  </div>
</section>

<!-- Estación 4: Central -->
<section class="sec sec-hondo">
  <div class="wrap">
    <span class="estacion-lbl">🧠 Estación 04 · Da Vinci Central</span>
    ${secHead({
      titulo: "Pregúntale a la empresa",
      lead: "El centro de inteligencia operativa: elige una pregunta y mira la respuesta armarse con datos.",
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
      <div style="display:grid;gap:1rem;align-content:start">
        ${panelVivo({
          head: "Conciliación · sola",
          filas: [["184 movimientos del banco", "✓ 181 conciliados"], ["Excepciones para revisar", "3"]],
          destacado: ["Tiempo del contador", "20 min, no 2 días"],
        })}
        ${plataforma({
          ico: "🏦", nombre: "Tesorería Da Vinci", href: "contacto.html", estado: "llave",
          texto: "El libro mayor con cerebro: conciliación sola, flujo 30·60·90 con alertas y cobranza elegante.",
        })}
      </div>
    </div>
    <p class="muted" style="margin-top:1.6rem">Mientras tanto: la página de <a class="u-link" href="finanzas.html">contabilidad, finanzas y fiscal</a> detalla todo lo que construimos aquí.</p>
  </div>
</section>

${ctaFinal({
    titulo: "¿Tus números merecen cuidarse solos?",
    texto: "En el diagnóstico gratuito mapeamos tu ciclo de cobranza y te mostramos esta plataforma con tus datos.",
  })}`;

  return {
    ruta: "demo-financiera.html",
    html: pagina({
      titulo: "Área Financiera y fiscal — Demos",
      descripcion: "Contabilidad, tesorería y fiscal con inteligencia operativa: conciliación automática, flujo proyectado y CFDI sin sustos.",
      ruta: "demo-financiera.html",
      contenido,
    }),
  };
}

/* ═══════════════ ÁREA EMPRENDIMIENTO ═══════════════ */
function emprendimiento() {
  const contenido = html`
${pageHero({
    migaItems: [["demos.html", "Sala de demos"], [null, "Emprendimiento"]],
    titulo: "<em>Emprendimiento</em>.",
    lead: "Tu primer sistema: el WhatsApp que vende, la caja clara y el negocio en tu bolsillo.",
    etiquetas: ["primer_sistema", "whatsapp", "ventas", "caja"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    ${secHead({ kicker: "Este mundo, en corto", titulo: "Empezar bien, crecer sin romperse." })}
    <div class="grid g3">
      ${[
        ["Empezar bien.", "Sin ERP monstruoso: un agente que atiende tu WhatsApp, una caja que cuadra y un panel que cabe en tu teléfono."],
        ["Crecer sin romperse.", "Cuando el negocio crezca, los módulos crecen contigo — mismo sistema, más músculo."],
        ["Precio de arranque.", "Proyectos fundadores con condiciones especiales por documentar el caso."],
      ].map(([t, d], i) => html`
      <article class="card" data-reveal><span class="card-num">0${i + 1}</span><h4>${t}</h4><p>${d}</p></article>`)}
    </div>
  </div>
</section>

<!-- Estación 02: Marco -->
<section class="sec sec-hondo">
  <div class="wrap">
    <span class="estacion-lbl">💬 Estación 02 · WhatsApp</span>
    ${secHead({
      titulo: "Marco te cotiza por nota de voz",
      lead: "Ágil, cercano y con tus precios reales. Así suena tu negocio atendiendo a las 11 de la noche.",
    })}
    <div class="split">
      <div class="wa" data-reveal="left">
        <div class="wa-top">
          <span class="av">M</span>
          <div><b>Ferretería El Compás</b><small>Marco · Agente Da Vinci · en línea</small></div>
        </div>
        <div class="wa-cuerpo">
          <div class="wa-msg">Hola, ¿tienen bomba de 1½"? ¿precio?<span class="hora">10:41 pm</span></div>
          <div class="wa-msg out">
            <div class="wa-audio">
              <span class="play">▶</span>
              <span class="onda" aria-hidden="true">${[8, 14, 20, 11, 17, 9, 15, 19, 12, 7, 16, 10, 18, 13, 8, 15].map((h) => html`<i style="height:${h}px"></i>`)}</span>
              <span class="mono" style="font-size:.6rem">0:20</span>
            </div>
            <span class="hora">10:42 pm ✓✓</span>
          </div>
          <div class="wa-msg out">Te dejo el resumen por escrito 👇<span class="hora">10:42 pm ✓✓</span></div>
          <div class="wa-msg out">Bomba 1½": <b>$2,300</b> · con manguera reforzada: <b>$2,600</b><span class="hora">10:42 pm ✓✓</span></div>
          <div class="wa-msg">El paquete. ¿Lo recojo mañana?<span class="hora">10:44 pm</span></div>
          <div class="wa-msg out">¡Hecho! Queda <b>apartado a tu nombre</b>. Te espero desde las 9:00 ✅<span class="hora">10:44 pm ✓✓</span></div>
        </div>
      </div>

      <div data-reveal="right">
        <span class="estacion-lbl">📞 Estación 01 · voz</span>
        <h3>Valentina llama a tu cliente</h3>
        <p class="muted">Confirma la entrega, recuerda la factura y ofrece la liga de pago — con calidez de persona y memoria de máquina.</p>
        <div class="panel-oscuro" style="margin-top:1.2rem">
          <div class="panel-head"><span>Valentina · entregas y cobranza</span><span class="badge"><i class="dot"></i>00:42</span></div>
          <div class="feed" style="max-height:none">
            ${[
              "Buenas tardes, le llamo de parte de Comercial El Compás. Soy Valentina, su asistente digital.",
              "Le confirmo que su pedido #452 sale mañana a primera hora y llega antes del mediodía.",
              "Le recuerdo con cariño que tiene una factura por vencer este viernes, por $12,400.",
              "¿Gusta que le envíe la liga de pago por WhatsApp?",
              "Perfecto, se la mando en este momento. ¡Que tenga excelente día!",
            ].map((t) => html`<div class="feed-item"><span>${t}</span></div>`)}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Estación 05: WhatsApp real -->
<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        <span class="estacion-lbl">📲 Estación 05 · en tu teléfono</span>
        ${secHead({
          titulo: "Recíbelo en TU WhatsApp",
          lead: "Escribe tu número y un agente Da Vinci te escribe de verdad. La demo más corta del mundo: tu teléfono vibrando.",
        })}
        <div class="card" data-reveal>
          <form class="form" data-demo-tel novalidate>
            <div class="campo">
              <label for="tel-demo">Tu número con lada (ej. 52 1 33 1234 5678)</label>
              <input id="tel-demo" name="tel" type="tel" placeholder="52 33 1234 5678" required>
            </div>
            <p class="form-msg" hidden></p>
            <button class="btn btn-arrow" type="submit">Enviarme el WhatsApp${flecha()}</button>
          </form>
          <p class="muted" style="font-size:.84rem;margin-top:1rem">Solo usamos tu número para esta demo. Nada de listas ni spam — palabra de taller.</p>
        </div>
      </div>
      <div style="display:grid;gap:1rem;align-content:start">
        ${plataforma({ ico: "💬", nombre: "Marco, tu vendedor 24/7", href: "#", estado: "abierta", texto: "Escucha la nota de voz y la conversación que cierra ventas de madrugada — aquí arriba, en la estación 02." })}
        ${plataforma({ ico: "🚀", nombre: "Mi Negocio Da Vinci", href: "contacto.html", estado: "llave", texto: "Tu changarro en tu bolsillo: ventas en vivo, fiado con recordatorios de LISA y el pedido de mañana listo." })}
      </div>
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "¿Arrancamos tu primer sistema?",
    texto: "En el diagnóstico gratuito mapeamos tu operación y te mostramos por dónde empezar — a precio de arranque.",
  })}`;

  return {
    ruta: "demo-emprendimiento.html",
    html: pagina({
      titulo: "Área Emprendimiento — Demos",
      descripcion: "Tu primer sistema con IA: el agente de WhatsApp que vende, la caja que cuadra y el negocio en tu bolsillo.",
      ruta: "demo-emprendimiento.html",
      contenido,
    }),
  };
}

export function paginas() {
  return [industrial(), comercio(), financiera(), emprendimiento()];
}
