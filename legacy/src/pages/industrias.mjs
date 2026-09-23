import {
  html, pagina, pageHero, secHead, ctaFinal, panelVivo, dolorCura, stats,
  cardLink, jsonld, flecha,
} from "../lib/layout.mjs";

/* ---------- datos de las 9 industrias ---------- */
export const INDUSTRIAS = [
  {
    ruta: "industria-comercio.html",
    titulo: "Comercio y distribución",
    tagline: "Del pedido a la entrega, sin puntos ciegos.",
    paneles: [
      { head: "Anaquel · sin LISA → con LISA", filas: [["Faltantes hoy", "7 SKUs"], ["Caducidades", "$18,400"]], destacado: ["Con pronóstico IA", "−30% inventario muerto"] },
      { head: "WhatsApp · 22:41 pm", filas: [["«¿Tienen 40 cajas? Urgen»", "✓ leído"], ["Agente: «Sí — 32 CEDIS + 8 norte»", "✓ 4s"], ["Pedido #7712 confirmado", "✓ apartado"]], destacado: ["Chats sin responder", "0"] },
      { head: "Cobranza · automática", filas: [["Comercial Robledo pagó", "✓ hoy"], ["Grupo Anzures", "recordatorio enviado"], ["Farmacias Lira", "liga de pago abierta"]], destacado: ["Cartera vencida", "−41% este mes"] },
    ],
    dc: [
      ["El inventario se agota — o se pudre.", "Predicción de inventario", "LISA pronostica por producto y sucursal: qué pedir, cuánto y cuándo. Nadie vio venir el producto estrella sin stock el viernes y $18,400 caducando en bodega — ahora sí."],
      ["Los pedidos se pierden entre cientos de chats.", "Agente de pedidos", "Responde en segundos con tu inventario real: cotiza, aparta y confirma — a cualquier hora. El cliente que escribió a las 10 de la noche ya no compra con tu competencia."],
      ["La cobranza depende de la memoria del dueño.", "Cobranza automática", "Recordatorios elegantes, ligas de pago y estados de cuenta que salen solos. Tú solo ves quién ya pagó."],
    ],
    stats: [["−30%", "inventario muerto con pronóstico IA"], ["−50%", "error de pronóstico (McKinsey)"], ["−65%", "ventas perdidas por faltantes"]],
    mostrador: true,
  },
  {
    ruta: "industria-restaurantes.html",
    titulo: "Restaurantes y alimentos",
    tagline: "Más mesas atendidas, menos mermas.",
    paneles: [
      { head: "Servicio · viernes 8:47 pm · hora pico", filas: [["📱 «Mesa para 6 hoy?» (WhatsApp)", "✓ reservada 9:15"], ["📞 Llamada: pedido para llevar", "✓ voz IA · $482"], ["🔔 Recordatorio a reserva de 9:30", "confirmó ✓"]], destacado: ["Mensajes sin responder", "0"] },
      { head: "Compras · pronóstico de mañana", filas: [["Comensales previstos", "214 · 89% confianza"], ["Pollo 14 kg", "→ pedido ✓"], ["Queso", "alcanza 22 platillos"]], destacado: ["Merma de la semana", "−38% vs mes pasado"] },
      { head: "Márgenes · por platillo", filas: [["⭐ Arrachera", "61.2% margen"], ["⚠ Pasta del día", "18.4% — LISA sugiere +$14"]], destacado: ["Menú decidido con", "números, no corazonadas"] },
    ],
    dc: [
      ["Llamadas y WhatsApp sin contestar en hora pico = clientes perdidos.", "Agente de reservas y pedidos", "Toma reservas y pedidos por WhatsApp y teléfono, incluso en hora pico."],
      ["Compras a ojo: mermas cuando sobra, ventas perdidas cuando falta.", "Predicción de demanda", "Cuánto comprar y cuánto personal programar según el día previsto."],
      ["Cero visibilidad de qué platillo deja margen y cuál solo da trabajo.", "Central de márgenes", "Pregunta «¿qué platillo me deja más?» y decide el menú con números."],
    ],
    stats: [["−40%", "no-shows con recordatorios IA"], ["−50%", "merma el primer año (Winnow >40%)"], ["92%", "precisión de pronóstico IA (vs 65% humana)"]],
  },
  {
    ruta: "industria-salud.html",
    titulo: "Clínicas y salud",
    tagline: "Agenda llena, pacientes atendidos, expediente al día.",
    paneles: [
      { head: "Agenda · martes · se llena sola", filas: [["📱 «¿Tienen cita mañana?»", "✓ 10:30 agendada"], ["🔔 Recordatorio a las 12 citas de hoy", "11 confirmadas"], ["⚠ Paciente 4:00 canceló", "hueco reocupado en 9 min"]], destacado: ["Ocupación del día", "96%"] },
      { head: "Recepción · sin saturar", filas: [["«¿Aceptan mi seguro?»", "✓ respondido · 6s"], ["«¿Cuánto cuesta la limpieza?»", "✓ respondido · 4s"], ["«¿Dónde estacionarme?»", "✓ mapa enviado"]], destacado: ["Llamadas al mostrador", "solo las que importan"] },
      { head: "Expediente · siempre listo", filas: [["Estudio de laboratorio recibido", "✓ archivado"], ["Nota de evolución dictada por voz", "✓ transcrita"], ["«LISA: historial de Sra. Márquez»", "✓ resumen en 3s"]], destacado: ["Papeles perdidos este mes", "0"] },
    ],
    dc: [
      ["Citas perdidas porque nadie confirmó ni reagendó.", "Agente de citas", "Confirma, reagenda y resuelve dudas frecuentes por WhatsApp, 24/7."],
      ["Recepción saturada contestando las mismas 10 preguntas.", "Documentos clínicos inteligentes", "Estudios y notas que se organizan y se encuentran al instante."],
      ["Expedientes e historiales dispersos entre papel y sistemas.", "Central de la clínica", "Ocupación, ingresos y pacientes frecuentes en una sola pantalla."],
    ],
    stats: [["−40%", "citas perdidas con recordatorios por WhatsApp"], ["−60%", "llamadas manuales de seguimiento"], ["15-30%", "del ingreso se pierde hoy por no-shows"]],
  },
  {
    ruta: "industria-manufactura.html",
    titulo: "Manufactura",
    tagline: "La planta visible, la merma medida.",
    paneles: [
      { head: "Piso · turno A · sin papel", filas: [["Operador reporta por voz: «lote 113 listo»", "✓ registrado"], ["Producción del turno", "12,542 pzas · en vivo"], ["Captura al día siguiente", "eliminada"]], destacado: ["OEE visible", "84.2% ahora — no el viernes"] },
      { head: "Paros · con causa y cura", filas: [["⚠ L2: torque fuera de rango", "detectado 14:02"], ["VIGÍA: patrón de mordaza conocido", "✓ diagnóstico 14:03"], ["MECÁNICO: OT-441 programada domingo", "✓ sin parar producción"]], destacado: ["Costo de paro evitado", "$84,000"] },
      { head: "Compras · según el plan real", filas: [["Acero calibre 14", "pedido según pronóstico ✓"], ["Inventario inmóvil", "−28% este trimestre"]], destacado: ["Compras a ciegas", "0"] },
    ],
    dc: [
      ["Producción reportada en papel que se captura (tarde y con errores).", "Captura automática de producción", "Reportes de piso que suben solos, sin papel ni recaptura."],
      ["Paros y mermas que nadie explica hasta el corte del mes.", "Central de planta", "Pregunta «¿cómo va la orden 4512?» y ten la respuesta sin caminar a la planta."],
      ["Compras de materia prima reaccionando en lugar de anticipando.", "Predicción de materiales", "Compra según el plan de producción y el pronóstico real de pedidos."],
    ],
    stats: [["−30-50%", "paros no planeados con mantenimiento predictivo (McKinsey)"], ["−10-40%", "costo de mantenimiento al anticipar fallas"], ["$84k", "un solo paro evitado paga el módulo"]],
    extra: ["app-planta.html", "Abre Planta Da Vinci", "Líneas en vivo, OEE, visión artificial, calidad y mantenimiento — un SCADA con cerebro."],
  },
  {
    ruta: "industria-servicios.html",
    titulo: "Servicios profesionales",
    tagline: "Menos administración, más horas facturables.",
    paneles: [
      { head: "Lunes 8:00 am · todo listo", filas: [["Minutas de la semana pasada", "✓ resumidas"], ["Borrador de propuesta (cliente nuevo)", "✓ esperando revisión"], ["Reporte de avance por cliente", "✓ enviado solo"]], destacado: ["Horas admin de tu equipo hoy", "−70%"] },
      { head: "Conocimiento · de la firma, no del correo", filas: [["«¿Qué acordamos con Grupo Mira en marzo?»", "✓ respuesta en 4s"], ["Contrato similar de referencia", "✓ encontrado"], ["Se fue un colaborador", "su conocimiento se quedó"]], destacado: ["Búsqueda en lenguaje natural", "4 segundos"] },
      { head: "Cobranza · elegante", filas: [["Iguala de marzo · recordatorio", "✓ enviado con tacto"], ["Cliente abrió la liga de pago", "✓ pagó hoy"], ["Conversaciones incómodas del socio", "0"]], destacado: ["Horas facturables recuperadas", "+9 h/semana por persona"] },
    ],
    dc: [
      ["Horas del equipo perdidas en reportes, propuestas y seguimiento.", "Copilots por rol", "Borradores de propuestas, resúmenes de reuniones y seguimientos listos en minutos."],
      ["Conocimiento clave que vive en el correo de cada quien.", "Base de conocimiento viva", "Todo lo que la firma sabe, consultable en lenguaje natural."],
      ["Cobranza incómoda que siempre se posterga.", "Cobranza sin fricción", "Recordatorios elegantes y automáticos; tu equipo solo cobra los casos difíciles."],
    ],
    stats: [["+9 h", "facturables recuperadas por persona a la semana"], ["−70%", "tiempo en reportes, minutas y propuestas"], ["4 seg", "para encontrar lo que la firma sabe"]],
  },
  {
    ruta: "industria-construccion.html",
    titulo: "Construcción e inmobiliaria",
    tagline: "Obras a tiempo, números a la vista.",
    paneles: [
      { head: "Obra Torre Norte · en vivo", filas: [["📸 Residente envía avance por WhatsApp", "✓ consolidado"], ["Avance físico vs programa", "67% · 2 días adelante"], ["Avance financiero", "71% — alerta de desfase"]], destacado: ["La junta de obra empieza con", "números, no memoria"] },
      { head: "Destajos y facturas · sin captura", filas: [["Factura de Aceros Vinci", "✓ leída y asignada a partida"], ["Estimación #14 del contratista", "✓ validada vs avance real"], ["Presupuesto vs real", "al día, no al cierre"]], destacado: ["Facturas ligadas a su partida", "100%"] },
      { head: "Ventas · el desarrollo se vende solo", filas: [["📱 «¿Precio del depa 302?» 11:48 pm", "✓ cotizado + brochure"], ["Visita agendada sábado 12:00", "✓ confirmada"], ["Seguimiento a 34 interesados", "automático"]], destacado: ["Leads que se enfriaron", "0"] },
    ],
    dc: [
      ["Avances de obra reportados por WhatsApp que nadie consolida.", "Central de obra", "Avance físico vs. financiero por proyecto, en tiempo real."],
      ["Facturas de proveedores y destajos capturados a mano.", "Documentos de obra inteligentes", "Facturas, estimaciones y destajos que se capturan y clasifican solos."],
      ["Presupuesto vs. real conocido demasiado tarde.", "Agente comercial", "Atiende interesados en tus desarrollos, agenda visitas y da seguimiento."],
    ],
    stats: [["0 días", "de retraso en conocer el avance real de obra"], ["100%", "de facturas y destajos ligados a su partida"], ["24/7", "el desarrollo atendiendo interesados"]],
  },
  {
    ruta: "industria-logistica.html",
    titulo: "Logística y transporte",
    tagline: "Cada unidad, cada ruta, cada peso — visible.",
    paneles: [
      { head: "Rastreo · Faro responde", filas: [["📱 «¿Dónde va mi pedido #7712?»", "✓ leído"], ["FARO: «a 42 km · llega 11:20»", "✓ respondido en 5s"], ["Llamadas al despachador hoy", "−80%"]], destacado: ["Humanos involucrados", "0"] },
      { head: "Rutas · con datos, no costumbre", filas: [["Ruta 6 reoptimizada por cierre vial", "−42 min ✓"], ["Km muertos del mes", "bajando semana a semana"]], destacado: ["Km de más que se ruedan hoy", "10-25%"] },
      { head: "Viaje cerrado · sin papeleo", filas: [["📸 Chofer envía remisión firmada", "✓ OCR + archivo"], ["ESCRIBA: factura del flete generada", "✓ 4 segundos"], ["COBRADOR: enviada · vence 15 días", "✓ agendada"]], destacado: ["Días para facturar el viaje", "de 6 → 0"] },
    ],
    dc: [
      ["«¿Dónde va mi pedido?» contestado a mano cien veces al día.", "Agente de rastreo", "Tus clientes preguntan por su pedido y el agente responde solo, con datos reales."],
      ["Rutas y cargas decididas por costumbre, no por datos.", "Optimización con datos", "Rutas, cargas y costos por viaje analizados para decidir mejor."],
      ["Mantenimientos que se vuelven descomposturas.", "Alertas de flota", "Mantenimientos programados antes de que la unidad se detenga."],
    ],
    stats: [["10-25%", "de km de más se ruedan hoy por rutas a costumbre"], ["2-4 h/día", "de una persona contestando «¿dónde va mi pedido?»"], ["6→0", "días para facturar el flete con evidencia automática"]],
    extra: ["demo-comercio.html", "Ver la torre de control", "Cinco unidades en ruta y cuatro agentes resolviendo un retraso en cascada — solos."],
  },
  {
    ruta: "industria-supermercados.html",
    titulo: "Supermercados y autoservicio",
    tagline: "Cada anaquel, cada caja, cada merma — bajo control.",
    paneles: [
      { head: "Anaquel · visión · pasillo 4", filas: [["📷 Hueco detectado: bebidas 600ml", "✓ surtido asignado"], ["⚠ 7 caducidades próximas", "→ oferta 2x1 sugerida"], ["Precio mal etiquetado detectado", "✓ corregido"]], destacado: ["Merma del mes", "−31%"] },
      { head: "Pedido a CEDIS · por pronóstico", filas: [["214 SKUs pedidos según demanda real", "✓ automático"], ["Quiebres de stock esta semana", "−65%"]], destacado: ["Pedido armado por", "el pronóstico, no el ojo"] },
      { head: "Cierre · 4 tiendas · 10:04 pm", filas: [["Corte de caja T1-T4", "✓ conciliado solo"], ["Diferencias detectadas", "T3: −$482 → alerta"], ["«LISA: ¿qué tienda va abajo?»", "Oriente −12% · causa lista"]], destacado: ["Hora de salida del gerente", "10:15 pm, no 1 am"] },
    ],
    dc: [
      ["Mermas y caducidades detectadas cuando ya son pérdida.", "Predicción por tienda y por SKU", "Cuánto pedir de cada producto, en cada sucursal, según demanda real y temporada."],
      ["Anaqueles vacíos mientras la bodega está llena (o al revés).", "Visión de anaquel", "Fotos o cámaras que detectan huecos, precios mal puestos y caducidades próximas."],
      ["Cortes de caja y conciliaciones que consumen horas cada noche.", "Central multi-sucursal", "Ventas, mermas y caja de todas las tiendas en una sola pantalla — pregunta «¿qué sucursal va abajo hoy?»."],
    ],
    stats: [["−65%", "ventas perdidas por faltantes con pronóstico IA"], ["−20-30%", "inventario inmóvil (promedio retail con IA)"], ["−50%", "error de pronóstico de demanda (McKinsey)"]],
  },
  {
    ruta: "industria-comercializadora.html",
    titulo: "Comercializadoras",
    tagline: "Compra bien, vende mejor, cobra a tiempo.",
    paneles: [
      { head: "Cotización · 90 segundos", filas: [["📧 Solicitud recibida 9:12 am", "✓ leída por LISA"], ["Cotización #3311 con lista real", "✓ enviada 9:13"], ["Seguimiento programado", "día 2 y 5"]], destacado: ["La competencia responde en", "2 días"] },
      { head: "Margen · visible al cotizar", filas: [["⚠ Válvulas: margen 9.8%", "alerta al gerente"], ["Margen promedio del mes", "24.8% · en vivo"]], destacado: ["Margen conocido", "al cotizar, no al cierre"] },
      { head: "Cartera · sin sorpresas", filas: [["Grupo Anzures: patrón de atraso", "detectado a tiempo"], ["Recordatorio + liga de pago", "✓ enviados"], ["12 prospectos tocados hoy", "✓ automático"]], destacado: ["Cartera vencida", "−41% este trimestre"] },
    ],
    dc: [
      ["Cotizaciones que tardan horas y se pierden entre correos.", "CRM con agente comercial", "Cada prospecto atendido, cotizado y perseguido — automáticamente y con tu lista de precios real."],
      ["Márgenes que nadie ve hasta que el contador cierra el mes.", "Márgenes en vivo", "Cada operación muestra su margen al momento de cotizar, no al cierre del mes."],
      ["Vendedores con cartera vencida que nadie persigue a tiempo.", "Cobranza inteligente", "Recordatorios automáticos y alerta temprana de clientes que van a caer en mora."],
    ],
    stats: [["90 seg", "para cotizar — mientras la competencia tarda días"], ["24.8%", "margen visible en cada operación, no al cierre"], ["−41%", "cartera vencida con cobranza inteligente"]],
  },
];

/* ---------- simulador del mostrador (solo comercio) ---------- */
const mostradorVivo = () => html`
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({
      kicker: "El mostrador vivo",
      titulo: "Simula un pedido completo.",
      lead: "Así se ve tu operación cuando LISA la escucha. Presiona el botón — o toca cada estación.",
    })}
    <div id="mostrador" class="grid g4" data-reveal>
      ${[
        ["01 · WhatsApp", "«¿Tienen 40 cajas? Urgen»"],
        ["02 · Inventario", "LISA revisa stock real"],
        ["03 · Ruta", "Entrega asignada"],
        ["04 · Cobro", "Factura + liga de pago"],
      ].map(([t, d]) => html`
      <button class="card" type="button" data-est style="text-align:left;width:100%">
        <span class="card-num">${t}</span>
        <h4 style="font-size:1.05rem">${d}</h4>
        <p class="res mono" style="color:var(--naranja);min-height:1.2em"></p>
      </button>`)}
    </div>
    <div style="margin-top:1.4rem">
      <button class="btn btn-arrow" id="mostrador-btn" type="button">▶ Simular pedido completo</button>
    </div>
  </div>
</section>
<style>
  #mostrador .card { opacity:.55; transition: opacity .4s var(--ease), transform .4s var(--ease), border-color .4s var(--ease); }
  #mostrador .card.activo { opacity:1; border-color: rgba(245,134,52,.55); transform: translateY(-4px); }
</style>`;

/* ---------- índice de industrias ---------- */
function indice() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Industrias"]],
    titulo: "Tu industria, en <em>nuestro mapa</em>",
    lead: "Cada sector tiene sus propios dolores. Estos son los que ya sabemos resolver — y tu empresa siempre se mapea individualmente.",
    etiquetas: ["9 industrias", "patrones probados", "mapeo individual"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="grid g3">
      ${INDUSTRIAS.map((x, i) => cardLink(x.ruta, `0${i + 1}`, x.titulo, x.tagline, "Ver soluciones"))}
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({
          kicker: "Además",
          titulo: "Dos áreas que cruzan a todas.",
          lead: "No importa el giro: si transformas producto o llevas números, aquí hay retorno esperando.",
        })}
        <div class="grid g2">
          ${cardLink("planta.html", null, "Planta y transformación", "La planta que se ve a sí misma: visión artificial, OEE y mantenimiento predictivo.", "Ver el detalle")}
          ${cardLink("finanzas.html", null, "Contabilidad, finanzas y fiscal", "Números que se cuidan solos: conciliación, flujo proyectado y vigilancia fiscal.", "Ver el detalle")}
        </div>
      </div>
      <div class="card" data-reveal="right">
        <span class="kicker">¿Tu industria no está?</span>
        <h3>Tu empresa no es el promedio de su sector.</h3>
        <p>Por eso todo empieza con el Método Da Vinci: mapeamos TU operación y construimos sobre lo que encontramos, no sobre una plantilla.</p>
        <a class="btn btn-ghost btn-sm" href="metodo.html" style="margin-top:1rem">Conoce el método</a>
      </div>
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "industrias.html",
    html: pagina({
      titulo: "Industrias",
      descripcion: "Inteligencia operativa por industria: comercio, restaurantes, salud, manufactura, servicios, construcción y logística.",
      ruta: "industrias.html",
      contenido,
    }),
  };
}

/* ---------- página de industria ---------- */
function industriaPagina(x) {
  const otras = INDUSTRIAS.filter((o) => o.ruta !== x.ruta).slice(0, 3);
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], ["industrias.html", "Industrias"], [null, x.titulo]],
    titulo: x.titulo,
    lead: x.tagline,
    etiquetas: ["inteligencia_operativa", "modulos_a_medida", "avance_semanal"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    ${secHead({ kicker: "Así se ve por dentro", titulo: "Tu operación, contada por los datos." })}
    <div class="grid g3">
      ${x.paneles.map((p) => panelVivo(p))}
    </div>
  </div>
</section>

${x.mostrador ? mostradorVivo() : ""}

<section class="sec ${x.mostrador ? "" : "sec-hondo"}">
  <div class="wrap">
    ${secHead({ kicker: "Dolor → cura", titulo: "Lo que duele y cómo se cura." })}
    ${dolorCura(x.dc)}
  </div>
</section>

<section class="sec ${x.mostrador ? "sec-hondo" : ""}">
  <div class="wrap">
    ${secHead({ kicker: "Lo que reporta la industria", titulo: "Números de referencia.", centrado: true })}
    ${stats(x.stats)}
    ${x.extra ? html`
    <div class="fundador" data-reveal style="margin-top:2rem;border-style:solid;border-color:var(--linea)">
      <div>
        <b>${x.extra[1]}</b>
        <p>${x.extra[2]}</p>
      </div>
      <a class="btn btn-oscuro btn-arrow" href="${x.extra[0]}">Abrir${flecha()}</a>
    </div>` : ""}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "A tu medida", titulo: "Hecho a tu medida, no a la del sector." })}
        <p class="lead">Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el <a class="u-link" href="metodo.html">Método Da Vinci</a>: mapeamos TU operación y construimos sobre lo que encontramos.</p>
      </div>
      <div class="grid" data-reveal="right">
        ${otras.map((o) => html`
        <a class="card" href="${o.ruta}" style="padding:1.1rem 1.3rem">
          <h4 style="font-size:1.05rem;margin-bottom:.2rem">${o.titulo}</h4>
          <p style="font-size:.86rem">${o.tagline}</p>
        </a>`)}
      </div>
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: x.ruta,
    html: pagina({
      titulo: `IA para ${x.titulo.toLowerCase()}`,
      descripcion: `Inteligencia operativa para ${x.titulo.toLowerCase()}: ${x.tagline}`,
      ruta: x.ruta,
      jsonld: jsonld({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: `IA para ${x.titulo}`,
        description: x.tagline,
        provider: { "@type": "Organization", name: "Da Vinci IA" },
        areaServed: "MX",
      }),
      contenido,
    }),
  };
}

export function paginas() {
  return [indice(), ...INDUSTRIAS.map(industriaPagina)];
}
