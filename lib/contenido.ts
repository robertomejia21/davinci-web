/* ============================================================
   Contenido del sitio — fuente única de verdad
   Editar aquí actualiza páginas, menús, índices y sitemap.
   ============================================================ */

export type Fila = [string, string];

export type Panel = {
  head: string;
  filas: Fila[];
  top?: Fila;
};

export type Modulo = {
  slug: string;
  titulo: string;
  tagline: string;
  meta: string;
  chips: string[];
  panel: Panel;
  hace: Fila[];
  practica: string[];
};

export type Industria = {
  slug: string;
  titulo: string;
  tagline: string;
  paneles: Panel[];
  dc: [string, string, string][];
  metricas: Fila[];
  mostrador?: boolean;
  extra?: { href: string; titulo: string; texto: string };
};

export type Post = {
  slug: string;
  titulo: string;
  bajada: string;
  lectura: string;
  tema: string;
  cuerpo: Fila[];
};

/* ---------- marca ---------- */
export const SITIO = {
  nombre: "Da Vinci IA",
  dominio: "da-vinci.ai",
  url: "https://da-vinci.ai",
  slogan: "Inteligencia operativa para tu empresa",
  descripcion:
    "Software a la medida con IA: automatizaciones, agentes y LISA, tu agente empresarial.",
  lema: "Observar, entender, construir, perfeccionar.",
  firma: "© 2026 Da Vinci IA · da-vinci.ai · Tú tienes las llaves.",
  whatsapp:
    "https://wa.me/5216862800674?text=" +
    encodeURIComponent("Hola, quiero agendar un diagnóstico gratuito con Da Vinci IA"),
};

/* ---------- home ---------- */
export const MARQUEE = [
  "Inteligencia operativa",
  "AGENTES_AUTONOMOS",
  "Automatización",
  "LLM · RAG · API",
  "Da Vinci Central",
  "DATOS_EN_VIVO",
  "Copilots por rol",
  "VISION + VOZ",
  "Análisis predictivo",
];

/* logos de clientes (public/clientes/*.webp) */
export const CLIENTES: { archivo: string; nombre: string }[] = [
  { archivo: "borderproduce", nombre: "Border Fresh Solutions" },
  { archivo: "br", nombre: "BR Carrier" },
  { archivo: "ml", nombre: "ML Industrial Maintenance" },
  { archivo: "northtech", nombre: "North Tech" },
  { archivo: "sancarlos", nombre: "San Carlos Tour" },
  { archivo: "titos", nombre: "Mercados Tito's" },
  { archivo: "taxisendero", nombre: "Taxi Sendero" },
  { archivo: "tsunami", nombre: "Tsu-Nami Sushi 2 Go" },
];

/* tira de integraciones: lo que el sistema conecta (no son logos de clientes) */
export const INTEGRACIONES: Fila[] = [
  ["WhatsApp Business", "el canal donde ya te escriben"],
  ["Tu ERP y CRM", "sin doble captura"],
  ["Excel de siempre", "respetado y conectado"],
  ["CFDI · SAT", "facturación y complementos"],
  ["Bancos", "conciliación diaria"],
];

export const PROBLEMA: Fila[] = [
  ["La información vive dispersa.", "Ventas en un Excel, cobranza en WhatsApp, inventario en la cabeza de alguien."],
  ["Los procesos dependen de memoria.", "Facturas, seguimientos y reportes que se hacen a mano — cuando alguien se acuerda."],
  ["Las decisiones se toman a ciegas.", "Para saber cómo va el negocio hay que pedir tres reportes y esperar dos días."],
  ["El software genérico no se adapta.", "Tu empresa termina trabajando para el sistema, en vez de al revés."],
];

export const COMPARATIVA: [string, string, string][] = [
  ["Se adapta a…", "su plantilla (tú te adaptas)", "tu operación exacta"],
  ["Lo ves funcionando…", "al final (sorpresa)", "cada semana, contigo"],
  ["La IA…", "un chatbot pegado con cinta", "agentes que actúan + LISA que ve todo"],
  ["Tus datos…", "viven en su nube, a su modo", "son tuyos — tú tienes las llaves"],
  ["El precio…", "renta eterna por módulos que no usas", "cerrado, por módulo que sí necesitas"],
];

export const METODO_PASOS: Fila[] = [
  ["Mapeamos tu empresa", "Vamos contigo y con tu gente, proceso por proceso. Entendemos cómo trabaja tu empresa de verdad — no en el organigrama."],
  ["Priorizamos módulos", "Te decimos dónde la IA genera retorno más rápido y por dónde conviene empezar. Diagnóstico claro, sin tecnicismos."],
  ["Diseñamos el primer módulo", "Prototipo con tus datos reales, en días. Lo ves funcionando antes de invertir en el desarrollo completo."],
  ["Avance semanal contigo", "Cada semana, una reunión: ves el progreso, pides cambios y decides. El software se ajusta a ti — no al revés."],
  ["Implementamos y capacitamos", "Lo dejamos funcionando en tu operación y entrenamos a tu equipo con las personas involucradas desde el día uno."],
  ["Siguiente módulo", "Repetimos con el siguiente proceso, hasta integrar toda tu empresa en Da Vinci Central. ¿Solo necesitas uno? Nos ajustamos."],
];

export const METODO_PASOS_LARGOS: Fila[] = [
  ["Mapeamos tu empresa", "Vamos contigo y con tu gente, proceso por proceso. Entendemos cómo trabaja tu empresa de verdad — no en el organigrama. De aquí sale un mapa claro de dónde se pierde tiempo y dinero."],
  ["Priorizamos módulos", "Te decimos dónde la IA genera retorno más rápido y por dónde conviene empezar. Diagnóstico claro, sin tecnicismos, con alcance y precio concretos."],
  ["Diseñamos el primer módulo", "Prototipo con tus datos reales, en días. Lo ves funcionando antes de invertir en el desarrollo completo — sin actos de fe."],
  ["Avance semanal contigo", "Cada semana, una reunión: ves el progreso, pides cambios y decides. Las personas involucradas en el proceso participan desde el día uno."],
  ["Implementamos y capacitamos", "Lo dejamos funcionando en tu operación real y entrenamos a tu equipo. La entrega no es el final: es el inicio de la mejora continua."],
  ["Siguiente módulo", "Repetimos con el siguiente proceso, hasta integrar toda tu empresa en Da Vinci Central. ¿Solo necesitas un módulo? Nos ajustamos a eso."],
];

export const FAQ_HOME: Fila[] = [
  ["¿Cuánto tarda un proyecto?", "El primer módulo funcionando suele tomar semanas, no meses — esa es nuestra propuesta de valor. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo."],
  ["¿Cuánto cuesta?", "Depende de los módulos que tu empresa necesite. Por eso el primer paso es el diagnóstico gratuito: mapeamos tu operación y te entregamos una propuesta con alcance y precio concretos, sin compromiso."],
  ["Ya tengo un sistema, ¿lo tengo que tirar?", "No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba."],
  ["¿Necesito un equipo técnico en mi empresa?", "No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso."],
  ["¿Qué pasa con mis datos?", "Tus datos son tuyos y se quedan en tu empresa. Trabajamos con acuerdos de confidencialidad y accesos controlados desde el primer día del mapeo."],
  ["¿Trabajan a distancia?", "Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode."],
];

export const FAQ_COMPLETO: Fila[] = [
  ["¿Cuánto tarda un proyecto?", "El primer módulo funcionando suele tomar semanas, no meses. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo."],
  ["¿Cuánto cuesta?", "Depende de los módulos que tu empresa necesite. El diagnóstico gratuito produce una propuesta con alcance y precio cerrados. Más detalle en la página de inversión."],
  ["Ya tengo un sistema, ¿lo tengo que tirar?", "No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba."],
  ["¿Necesito un equipo técnico en mi empresa?", "No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso."],
  ["¿Qué pasa con mis datos?", "Son tuyos y se quedan contigo. Confidencialidad firmada, cifrado, accesos por rol y cero uso de tus datos para entrenar modelos de terceros. Detalle completo en la página de seguridad."],
  ["¿Trabajan a distancia?", "Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode."],
  ["¿La IA va a reemplazar a mi equipo?", "Nuestra experiencia: reemplaza tareas, no personas. El equipo deja de capturar y perseguir pendientes, y se dedica a vender, decidir y atender mejor. Las personas involucradas participan desde el mapeo — el sistema se construye con ellas, no contra ellas."],
  ["¿Qué pasa si la IA se equivoca?", "Los agentes trabajan con TUS datos (no inventan) y los flujos críticos siempre tienen aprobación humana donde tú lo decidas. Además todo queda registrado: puedes auditar cada acción."],
  ["¿Puedo empezar con algo pequeño?", "Es exactamente como nos gusta empezar: un módulo, un proceso, resultado medible. Después decides si crecer."],
  ["¿Dan soporte después de entregar?", "Sí — la mejora continua es una mensualidad opcional. Y si eliges no tomarla, el módulo entregado es tuyo y sigue funcionando."],
];

/* ---------- módulos ---------- */
export const MODULOS: Modulo[] = [
  {
    slug: "automatizacion",
    titulo: "Automatización de procesos",
    tagline: "Lo repetitivo, en piloto automático.",
    meta: "Automatiza facturas, reportes, seguimientos y tareas repetitivas con IA. Tu equipo se dedica a lo que necesita criterio humano.",
    chips: ["workflows", "rpa+ia", "cero_captura"],
    panel: {
      head: "Automatización · hoy 6:00 am",
      filas: [
        ["Reporte de ventas de ayer", "✓ enviado solo · 6:00"],
        ["14 facturas de proveedores", "✓ capturadas sin manos"],
        ["Seguimientos de cobranza", "✓ 9 recordatorios salieron"],
      ],
      top: ["Horas humanas invertidas", "0.0"],
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
    slug: "agentes-ia",
    titulo: "Agentes de IA — chat y voz",
    tagline: "Tu mejor vendedor no duerme.",
    meta: "Agentes de IA que atienden WhatsApp, web y teléfono 24/7: responden, cotizan, agendan y venden con el tono de tu marca.",
    chips: ["agentes_autonomos", "whatsapp_api", "voz_natural"],
    panel: {
      head: "Agente · 11:03 pm",
      filas: [
        ["«¿Tienen en color blanco?»", "✓ respondido en 4s"],
        ["Cotización con precios reales", "✓ enviada"],
        ["Cita agendada para mañana", "✓ 10:30 am"],
      ],
      top: ["Ventas cerradas fuera de horario", "3 esta semana"],
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
    slug: "copilots",
    titulo: "Copilots por rol",
    tagline: "Un experto de IA al lado de cada puesto.",
    meta: "Asistentes de IA especializados por puesto: ventas, finanzas, operaciones. Cada quien con su copiloto entrenado en su trabajo.",
    chips: ["llm", "rag", "por_rol"],
    panel: {
      head: "Copilot de ventas · lunes 7:55 am",
      filas: [
        ["Resumen de tus 6 citas de hoy", "✓ listo"],
        ["Historial + pendientes por cliente", "✓ en tu WhatsApp"],
        ["Propuesta borrador para Grupo Mira", "✓ esperando tu ok"],
      ],
      top: ["Tiempo preparando la semana", "8 min, no 2 horas"],
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
    slug: "documentos",
    titulo: "Documentos inteligentes",
    tagline: "Papeles que se leen solos.",
    meta: "Facturas, contratos y correos que se leen, se capturan y se archivan solos con IA. Adiós a la captura manual.",
    chips: ["ocr+ia", "extraccion", "archivo_vivo"],
    panel: {
      head: "Documentos · bandeja de hoy",
      filas: [
        ["23 facturas recibidas por correo", "✓ leídas y registradas"],
        ["Contrato nuevo: cláusulas clave", "✓ resumidas"],
        [":alerta: Fianza vence en 12 días", "alerta enviada"],
      ],
      top: ["Captura manual", "eliminada"],
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
    slug: "prediccion",
    titulo: "Análisis predictivo",
    tagline: "Decide con lo que viene, no con lo que pasó.",
    meta: "Pronóstico de ventas, inventario y flujo de caja con IA. Decisiones con evidencia, no con intuición.",
    chips: ["forecasting", "series_de_tiempo", "alertas"],
    panel: {
      head: "Pronóstico · próximos 30 días",
      filas: [
        ["Ventas previstas", "$1.42M · 89% confianza"],
        [":alerta: SKU 114 se agota en 6 días", "pedido sugerido"],
        ["Flujo de caja semana 6", "apretón detectado a tiempo"],
      ],
      top: ["Decisiones a ciegas", "0"],
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
    slug: "integraciones",
    titulo: "Integraciones con lo tuyo",
    tagline: "No tires nada: conéctalo.",
    meta: "Conectamos tu ERP, CRM, Excel y WhatsApp para que todos tus sistemas hablen entre sí. No reemplazamos lo que funciona.",
    chips: ["api", "erp/crm", "una_sola_verdad"],
    panel: {
      head: "Integraciones · todo conectado",
      filas: [
        ["Venta en WhatsApp → factura en ERP", "✓ automático"],
        ["Excel de precios → cotizador", "✓ sincronizado"],
        ["Banco → conciliación", "✓ diaria"],
      ],
      top: ["Sistemas que tiraste", "0 — todo se aprovechó"],
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

/* ---------- industrias ---------- */
export const INDUSTRIAS: Industria[] = [
  {
    slug: "comercio",
    titulo: "Comercio y distribución",
    tagline: "Del pedido a la entrega, sin puntos ciegos.",
    mostrador: true,
    paneles: [
      { head: "Anaquel · sin LISA → con LISA", filas: [["Faltantes hoy", "7 SKUs"], ["Caducidades", "$18,400"]], top: ["Con pronóstico IA", "−30% inventario muerto"] },
      { head: "WhatsApp · 22:41 pm", filas: [["«¿Tienen 40 cajas? Urgen»", "✓ leído"], ["Agente: «Sí — 32 CEDIS + 8 norte»", "✓ 4s"], ["Pedido #7712 confirmado", "✓ apartado"]], top: ["Chats sin responder", "0"] },
      { head: "Cobranza · automática", filas: [["Comercial Robledo pagó", "✓ hoy"], ["Grupo Anzures", "recordatorio enviado"], ["Farmacias Lira", "liga de pago abierta"]], top: ["Cartera vencida", "−41% este mes"] },
    ],
    dc: [
      ["El inventario se agota — o se pudre.", "Predicción de inventario", "LISA pronostica por producto y sucursal: qué pedir, cuánto y cuándo. Nadie vio venir el producto estrella sin stock el viernes y $18,400 caducando en bodega — ahora sí."],
      ["Los pedidos se pierden entre cientos de chats.", "Agente de pedidos", "Responde en segundos con tu inventario real: cotiza, aparta y confirma — a cualquier hora. El cliente que escribió a las 10 de la noche ya no compra con tu competencia."],
      ["La cobranza depende de la memoria del dueño.", "Cobranza automática", "Recordatorios elegantes, ligas de pago y estados de cuenta que salen solos. Tú solo ves quién ya pagó."],
    ],
    metricas: [["−30%", "inventario muerto con pronóstico IA"], ["−50%", "error de pronóstico (McKinsey)"], ["−65%", "ventas perdidas por faltantes"]],
  },
  {
    slug: "restaurantes",
    titulo: "Restaurantes y alimentos",
    tagline: "Más mesas atendidas, menos mermas.",
    paneles: [
      { head: "Servicio · viernes 8:47 pm · hora pico", filas: [[":celular: «Mesa para 6 hoy?» (WhatsApp)", "✓ reservada 9:15"], [":llamada: Llamada: pedido para llevar", "✓ voz IA · $482"], [":campana: Recordatorio a reserva de 9:30", "confirmó ✓"]], top: ["Mensajes sin responder", "0"] },
      { head: "Compras · pronóstico de mañana", filas: [["Comensales previstos", "214 · 89% confianza"], ["Pollo 14 kg", "→ pedido ✓"], ["Queso", "alcanza 22 platillos"]], top: ["Merma de la semana", "−38% vs mes pasado"] },
      { head: "Márgenes · por platillo", filas: [[":estrella: Arrachera", "61.2% margen"], [":alerta: Pasta del día", "18.4% — LISA sugiere +$14"]], top: ["Menú decidido con", "números, no corazonadas"] },
    ],
    dc: [
      ["Llamadas y WhatsApp sin contestar en hora pico = clientes perdidos.", "Agente de reservas y pedidos", "Toma reservas y pedidos por WhatsApp y teléfono, incluso en hora pico."],
      ["Compras a ojo: mermas cuando sobra, ventas perdidas cuando falta.", "Predicción de demanda", "Cuánto comprar y cuánto personal programar según el día previsto."],
      ["Cero visibilidad de qué platillo deja margen y cuál solo da trabajo.", "Central de márgenes", "Pregunta «¿qué platillo me deja más?» y decide el menú con números."],
    ],
    metricas: [["−40%", "no-shows con recordatorios IA"], ["−50%", "merma el primer año (Winnow >40%)"], ["92%", "precisión de pronóstico IA (vs 65% humana)"]],
  },
  {
    slug: "salud",
    titulo: "Clínicas y salud",
    tagline: "Agenda llena, pacientes atendidos, expediente al día.",
    paneles: [
      { head: "Agenda · martes · se llena sola", filas: [[":celular: «¿Tienen cita mañana?»", "✓ 10:30 agendada"], [":campana: Recordatorio a las 12 citas de hoy", "11 confirmadas"], [":alerta: Paciente 4:00 canceló", "hueco reocupado en 9 min"]], top: ["Ocupación del día", "96%"] },
      { head: "Recepción · sin saturar", filas: [["«¿Aceptan mi seguro?»", "✓ respondido · 6s"], ["«¿Cuánto cuesta la limpieza?»", "✓ respondido · 4s"], ["«¿Dónde estacionarme?»", "✓ mapa enviado"]], top: ["Llamadas al mostrador", "solo las que importan"] },
      { head: "Expediente · siempre listo", filas: [["Estudio de laboratorio recibido", "✓ archivado"], ["Nota de evolución dictada por voz", "✓ transcrita"], ["«LISA: historial de Sra. Márquez»", "✓ resumen en 3s"]], top: ["Papeles perdidos este mes", "0"] },
    ],
    dc: [
      ["Citas perdidas porque nadie confirmó ni reagendó.", "Agente de citas", "Confirma, reagenda y resuelve dudas frecuentes por WhatsApp, 24/7."],
      ["Recepción saturada contestando las mismas 10 preguntas.", "Documentos clínicos inteligentes", "Estudios y notas que se organizan y se encuentran al instante."],
      ["Expedientes e historiales dispersos entre papel y sistemas.", "Central de la clínica", "Ocupación, ingresos y pacientes frecuentes en una sola pantalla."],
    ],
    metricas: [["−40%", "citas perdidas con recordatorios por WhatsApp"], ["−60%", "llamadas manuales de seguimiento"], ["15-30%", "del ingreso se pierde hoy por no-shows"]],
  },
  {
    slug: "manufactura",
    titulo: "Manufactura",
    tagline: "La planta visible, la merma medida.",
    extra: { href: "/planta-da-vinci", titulo: "Abre Planta Da Vinci", texto: "Líneas en vivo, OEE, visión artificial, calidad y mantenimiento — un SCADA con cerebro." },
    paneles: [
      { head: "Piso · turno A · sin papel", filas: [["Operador reporta por voz: «lote 113 listo»", "✓ registrado"], ["Producción del turno", "12,542 pzas · en vivo"], ["Captura al día siguiente", "eliminada"]], top: ["OEE visible", "84.2% ahora — no el viernes"] },
      { head: "Paros · con causa y cura", filas: [[":alerta: L2: torque fuera de rango", "detectado 14:02"], ["VIGÍA: patrón de mordaza conocido", "✓ diagnóstico 14:03"], ["MECÁNICO: OT-441 programada domingo", "✓ sin parar producción"]], top: ["Costo de paro evitado", "$84,000"] },
      { head: "Compras · según el plan real", filas: [["Acero calibre 14", "pedido según pronóstico ✓"], ["Inventario inmóvil", "−28% este trimestre"]], top: ["Compras a ciegas", "0"] },
    ],
    dc: [
      ["Producción reportada en papel que se captura (tarde y con errores).", "Captura automática de producción", "Reportes de piso que suben solos, sin papel ni recaptura."],
      ["Paros y mermas que nadie explica hasta el corte del mes.", "Central de planta", "Pregunta «¿cómo va la orden 4512?» y ten la respuesta sin caminar a la planta."],
      ["Compras de materia prima reaccionando en lugar de anticipando.", "Predicción de materiales", "Compra según el plan de producción y el pronóstico real de pedidos."],
    ],
    metricas: [["−30-50%", "paros no planeados con mantenimiento predictivo (McKinsey)"], ["−10-40%", "costo de mantenimiento al anticipar fallas"], ["$84k", "un solo paro evitado paga el módulo"]],
  },
  {
    slug: "servicios",
    titulo: "Servicios profesionales",
    tagline: "Menos administración, más horas facturables.",
    paneles: [
      { head: "Lunes 8:00 am · todo listo", filas: [["Minutas de la semana pasada", "✓ resumidas"], ["Borrador de propuesta (cliente nuevo)", "✓ esperando revisión"], ["Reporte de avance por cliente", "✓ enviado solo"]], top: ["Horas admin de tu equipo hoy", "−70%"] },
      { head: "Conocimiento · de la firma, no del correo", filas: [["«¿Qué acordamos con Grupo Mira en marzo?»", "✓ respuesta en 4s"], ["Contrato similar de referencia", "✓ encontrado"], ["Se fue un colaborador", "su conocimiento se quedó"]], top: ["Búsqueda en lenguaje natural", "4 segundos"] },
      { head: "Cobranza · elegante", filas: [["Iguala de marzo · recordatorio", "✓ enviado con tacto"], ["Cliente abrió la liga de pago", "✓ pagó hoy"], ["Conversaciones incómodas del socio", "0"]], top: ["Horas facturables recuperadas", "+9 h/semana por persona"] },
    ],
    dc: [
      ["Horas del equipo perdidas en reportes, propuestas y seguimiento.", "Copilots por rol", "Borradores de propuestas, resúmenes de reuniones y seguimientos listos en minutos."],
      ["Conocimiento clave que vive en el correo de cada quien.", "Base de conocimiento viva", "Todo lo que la firma sabe, consultable en lenguaje natural."],
      ["Cobranza incómoda que siempre se posterga.", "Cobranza sin fricción", "Recordatorios elegantes y automáticos; tu equipo solo cobra los casos difíciles."],
    ],
    metricas: [["+9 h", "facturables recuperadas por persona a la semana"], ["−70%", "tiempo en reportes, minutas y propuestas"], ["4 seg", "para encontrar lo que la firma sabe"]],
  },
  {
    slug: "construccion",
    titulo: "Construcción e inmobiliaria",
    tagline: "Obras a tiempo, números a la vista.",
    paneles: [
      { head: "Obra Torre Norte · en vivo", filas: [[":camara: Residente envía avance por WhatsApp", "✓ consolidado"], ["Avance físico vs programa", "67% · 2 días adelante"], ["Avance financiero", "71% — alerta de desfase"]], top: ["La junta de obra empieza con", "números, no memoria"] },
      { head: "Destajos y facturas · sin captura", filas: [["Factura de Aceros Vinci", "✓ leída y asignada a partida"], ["Estimación #14 del contratista", "✓ validada vs avance real"], ["Presupuesto vs real", "al día, no al cierre"]], top: ["Facturas ligadas a su partida", "100%"] },
      { head: "Ventas · el desarrollo se vende solo", filas: [[":celular: «¿Precio del depa 302?» 11:48 pm", "✓ cotizado + brochure"], ["Visita agendada sábado 12:00", "✓ confirmada"], ["Seguimiento a 34 interesados", "automático"]], top: ["Leads que se enfriaron", "0"] },
    ],
    dc: [
      ["Avances de obra reportados por WhatsApp que nadie consolida.", "Central de obra", "Avance físico vs. financiero por proyecto, en tiempo real."],
      ["Facturas de proveedores y destajos capturados a mano.", "Documentos de obra inteligentes", "Facturas, estimaciones y destajos que se capturan y clasifican solos."],
      ["Presupuesto vs. real conocido demasiado tarde.", "Agente comercial", "Atiende interesados en tus desarrollos, agenda visitas y da seguimiento."],
    ],
    metricas: [["0 días", "de retraso en conocer el avance real de obra"], ["100%", "de facturas y destajos ligados a su partida"], ["24/7", "el desarrollo atendiendo interesados"]],
  },
  {
    slug: "logistica",
    titulo: "Logística y transporte",
    tagline: "Cada unidad, cada ruta, cada peso — visible.",
    extra: { href: "/demos/comercio", titulo: "Ver la torre de control", texto: "Cinco unidades en ruta y cuatro agentes resolviendo un retraso en cascada — solos." },
    paneles: [
      { head: "Rastreo · Faro responde", filas: [[":celular: «¿Dónde va mi pedido #7712?»", "✓ leído"], ["FARO: «a 42 km · llega 11:20»", "✓ respondido en 5s"], ["Llamadas al despachador hoy", "−80%"]], top: ["Humanos involucrados", "0"] },
      { head: "Rutas · con datos, no costumbre", filas: [["Ruta 6 reoptimizada por cierre vial", "−42 min ✓"], ["Km muertos del mes", "bajando semana a semana"]], top: ["Km de más que se ruedan hoy", "10-25%"] },
      { head: "Viaje cerrado · sin papeleo", filas: [[":camara: Chofer envía remisión firmada", "✓ OCR + archivo"], ["ESCRIBA: factura del flete generada", "✓ 4 segundos"], ["COBRADOR: enviada · vence 15 días", "✓ agendada"]], top: ["Días para facturar el viaje", "de 6 → 0"] },
    ],
    dc: [
      ["«¿Dónde va mi pedido?» contestado a mano cien veces al día.", "Agente de rastreo", "Tus clientes preguntan por su pedido y el agente responde solo, con datos reales."],
      ["Rutas y cargas decididas por costumbre, no por datos.", "Optimización con datos", "Rutas, cargas y costos por viaje analizados para decidir mejor."],
      ["Mantenimientos que se vuelven descomposturas.", "Alertas de flota", "Mantenimientos programados antes de que la unidad se detenga."],
    ],
    metricas: [["10-25%", "de km de más se ruedan hoy por rutas a costumbre"], ["2-4 h/día", "de una persona contestando «¿dónde va mi pedido?»"], ["6→0", "días para facturar el flete con evidencia automática"]],
  },
  {
    slug: "supermercados",
    titulo: "Supermercados y autoservicio",
    tagline: "Cada anaquel, cada caja, cada merma — bajo control.",
    paneles: [
      { head: "Anaquel · visión · pasillo 4", filas: [[":camara: Hueco detectado: bebidas 600ml", "✓ surtido asignado"], [":alerta: 7 caducidades próximas", "→ oferta 2x1 sugerida"], ["Precio mal etiquetado detectado", "✓ corregido"]], top: ["Merma del mes", "−31%"] },
      { head: "Pedido a CEDIS · por pronóstico", filas: [["214 SKUs pedidos según demanda real", "✓ automático"], ["Quiebres de stock esta semana", "−65%"]], top: ["Pedido armado por", "el pronóstico, no el ojo"] },
      { head: "Cierre · 4 tiendas · 10:04 pm", filas: [["Corte de caja T1-T4", "✓ conciliado solo"], ["Diferencias detectadas", "T3: −$482 → alerta"], ["«LISA: ¿qué tienda va abajo?»", "Oriente −12% · causa lista"]], top: ["Hora de salida del gerente", "10:15 pm, no 1 am"] },
    ],
    dc: [
      ["Mermas y caducidades detectadas cuando ya son pérdida.", "Predicción por tienda y por SKU", "Cuánto pedir de cada producto, en cada sucursal, según demanda real y temporada."],
      ["Anaqueles vacíos mientras la bodega está llena (o al revés).", "Visión de anaquel", "Fotos o cámaras que detectan huecos, precios mal puestos y caducidades próximas."],
      ["Cortes de caja y conciliaciones que consumen horas cada noche.", "Central multi-sucursal", "Ventas, mermas y caja de todas las tiendas en una sola pantalla — pregunta «¿qué sucursal va abajo hoy?»."],
    ],
    metricas: [["−65%", "ventas perdidas por faltantes con pronóstico IA"], ["−20-30%", "inventario inmóvil (promedio retail con IA)"], ["−50%", "error de pronóstico de demanda (McKinsey)"]],
  },
  {
    slug: "comercializadoras",
    titulo: "Comercializadoras",
    tagline: "Compra bien, vende mejor, cobra a tiempo.",
    paneles: [
      { head: "Cotización · 90 segundos", filas: [[":correo: Solicitud recibida 9:12 am", "✓ leída por LISA"], ["Cotización #3311 con lista real", "✓ enviada 9:13"], ["Seguimiento programado", "día 2 y 5"]], top: ["La competencia responde en", "2 días"] },
      { head: "Margen · visible al cotizar", filas: [[":alerta: Válvulas: margen 9.8%", "alerta al gerente"], ["Margen promedio del mes", "24.8% · en vivo"]], top: ["Margen conocido", "al cotizar, no al cierre"] },
      { head: "Cartera · sin sorpresas", filas: [["Grupo Anzures: patrón de atraso", "detectado a tiempo"], ["Recordatorio + liga de pago", "✓ enviados"], ["12 prospectos tocados hoy", "✓ automático"]], top: ["Cartera vencida", "−41% este trimestre"] },
    ],
    dc: [
      ["Cotizaciones que tardan horas y se pierden entre correos.", "CRM con agente comercial", "Cada prospecto atendido, cotizado y perseguido — automáticamente y con tu lista de precios real."],
      ["Márgenes que nadie ve hasta que el contador cierra el mes.", "Márgenes en vivo", "Cada operación muestra su margen al momento de cotizar, no al cierre del mes."],
      ["Vendedores con cartera vencida que nadie persigue a tiempo.", "Cobranza inteligente", "Recordatorios automáticos y alerta temprana de clientes que van a caer en mora."],
    ],
    metricas: [["90 seg", "para cotizar — mientras la competencia tarda días"], ["24.8%", "margen visible en cada operación, no al cierre"], ["−41%", "cartera vencida con cobranza inteligente"]],
  },
];

/* ---------- blog ---------- */
export const POSTS: Post[] = [
  {
    slug: "que-es-un-agente-ia",
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
    slug: "del-codice-al-codigo",
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
    slug: "cuanto-cuesta-ia",
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
    slug: "ia-para-pymes",
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
    slug: "agente-whatsapp-ventas",
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
    slug: "como-automatizar-procesos",
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

/* ---------- utilidades ---------- */
export const moduloPorSlug = (slug: string) => MODULOS.find((m) => m.slug === slug);
export const industriaPorSlug = (slug: string) => INDUSTRIAS.find((i) => i.slug === slug);
export const postPorSlug = (slug: string) => POSTS.find((p) => p.slug === slug);
