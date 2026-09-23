import {
  html, pagina, pageHero, secHead, ctaFinal, panelVivo, puntos, dolorCura,
  stats, faqBloque, flecha, jsonld, fundador, miga,
} from "../lib/layout.mjs";
import { formContacto } from "./home.mjs";

/* ═══════════════ LA INVERSIÓN ═══════════════ */
function precios() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Inversión"]],
    titulo: "Cuánto cuesta <em>(y cómo se decide)</em>",
    lead: "Sin menús de precios inflados ni cotizaciones a ciegas: el precio sale del mapa de tu empresa.",
    etiquetas: ["diagnostico_gratis", "precio_cerrado", "sin_sorpresas"],
  })}

<!-- Calculadora -->
<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="card" id="calc" data-reveal style="padding:clamp(1.5rem,3.4vw,2.8rem)">
      <span class="kicker">🧮 Calculadora</span>
      <h2 style="font-size:clamp(1.6rem,3.2vw,2.4rem)">¿Cuánto te cuesta NO automatizar?</h2>
      <p class="muted" style="margin-bottom:2rem">Mueve los controles con los números de tu empresa.</p>
      <div class="calc">
        <div>
          <div class="slider">
            <div class="slider-top">
              <span>Personas haciendo tareas repetitivas<br>(captura, reportes, seguimientos)</span>
              <b data-val="c-personas">3</b>
            </div>
            <input type="range" id="c-personas" min="1" max="20" value="3" aria-label="Personas haciendo tareas repetitivas">
          </div>
          <div class="slider">
            <div class="slider-top"><span>Horas al día que cada una dedica a eso</span><b data-val="c-horas">3 h</b></div>
            <input type="range" id="c-horas" min="1" max="8" value="3" aria-label="Horas al día">
          </div>
          <div class="slider">
            <div class="slider-top"><span>Costo mensual promedio por persona</span><b data-val="c-costo">$15,000</b></div>
            <input type="range" id="c-costo" min="8000" max="60000" step="1000" value="15000" aria-label="Costo mensual por persona">
          </div>
        </div>
        <div class="calc-out">
          <div class="calc-card"><b id="c-mes">$0</b><span>se te va cada mes en talacha automatizable</span></div>
          <div class="calc-card"><b id="c-anio">$0</b><span>al año — sin contar ventas perdidas por no contestar</span></div>
          <div class="calc-card"><b id="c-horas-out">0</b><span>horas humanas recuperables al mes</span></div>
        </div>
      </div>
      <p style="margin-top:1.8rem">Un módulo Da Vinci típico cuesta una fracción de eso — y trabaja las 24 horas. <a class="u-link" href="contacto.html">Compruébalo con tu diagnóstico gratis →</a></p>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Así funciona la inversión", titulo: "Tres momentos, ninguna sorpresa." })}
    <div class="grid g3">
      ${[
        ["Diagnóstico — gratis", "Mapeamos una parte de tu operación y te decimos dónde hay retorno. Si no lo hay, también. Sin compromiso."],
        ["Primer módulo — precio cerrado", "Recibes una propuesta con alcance, tiempo y precio fijo del módulo priorizado. Sin sorpresas ni horas extra facturadas."],
        ["Mejora continua — opcional", "Si quieres que el sistema siga creciendo y mantenido, hay una mensualidad clara. Si prefieres solo el módulo, es tuyo y funciona."],
      ].map(([t, d], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1}</span>
        <h3 style="font-size:1.3rem">${t}</h3>
        <p>${d}</p>
      </article>`)}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Siempre incluido", titulo: "Lo que siempre incluye." })}
        ${puntos([
          ["Avance semanal contigo.", "Reunión cada semana: ves, ajustas, decides."],
          ["Capacitación de tu equipo.", "El módulo se entrega funcionando y con tu gente sabiendo usarlo."],
          ["Propiedad del cliente.", "El software y los datos son tuyos. Siempre."],
        ])}
      </div>
      <div class="card" data-reveal="right" style="background:var(--tinta-tech);color:var(--blanco-calido);border-color:var(--linea-oscura)">
        <span class="kicker">🛡 Garantía del taller</span>
        <h3 style="color:var(--blanco-calido);font-size:1.4rem">Si el diagnóstico no te da claridad, te quedas con el mapa.</h3>
        <p style="color:var(--texto-oscuro)">Gratis — y no te volvemos a buscar. Así de seguros estamos de lo que vas a ver.</p>
      </div>
    </div>
    <div style="margin-top:2.4rem">${fundador()}</div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "La pregunta incómoda", titulo: "¿Por qué no publicamos una lista de precios?" })}
        <p class="lead">Porque sería mentirte. Un agente de WhatsApp para una tienda y uno para una cadena con 40 sucursales no cuestan lo mismo — y cobrarte «el paquete» promedio significaría cobrarte de más o quedarte corto. El diagnóstico existe justo para darte un número real, tuyo, con alcance claro.</p>
      </div>
      <div data-reveal="right">
        ${panelVivo({
          head: "Lo que sí te damos por escrito",
          filas: [
            ["Alcance del módulo", "detallado"],
            ["Tiempo de entrega", "en semanas"],
            ["Precio", "cerrado"],
            ["Mensualidad de mejora continua", "opcional y clara"],
          ],
          destacado: ["Letra chica", "0"],
        })}
      </div>
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "precios.html",
    html: pagina({
      titulo: "La inversión",
      descripcion: "Cómo se cotiza un proyecto con Da Vinci IA: diagnóstico gratuito, precio cerrado por módulo y mejora continua opcional.",
      ruta: "precios.html",
      contenido,
    }),
  };
}

/* ═══════════════ PLANTA Y TRANSFORMACIÓN ═══════════════ */
function planta() {
  const llevamos = [
    ["Visión artificial de líneas.", "Cámaras + IA que ven tu línea: cuentan piezas, detectan defectos, verifican empaque y etiquetado — sin detener nada y sin ojos cansados."],
    ["Monitoreo en tiempo real.", "Cada línea, turno y máquina reportando sola: producción, ritmo, paros y causas. El tablero vive en Da Vinci Central — pregúntale «¿cómo va el turno?»."],
    ["Control de calidad con IA.", "Inspección visual automática y registro de cada lote: qué salió, con qué parámetros, quién lo liberó. Trazabilidad completa sin papeles."],
    ["OEE sin capturas.", "Disponibilidad, rendimiento y calidad calculados solos. La junta de producción empieza con números, no con opiniones."],
    ["Mantenimiento predictivo.", "Horas de uso, vibración y temperatura anticipan la falla: el mantenimiento se programa antes del paro, no después."],
    ["Captura de piso sin papel.", "Reportes de operadores por voz o tablet que se registran solos — adiós a la hoja que alguien captura al día siguiente."],
    ["Planeación de producción.", "Programa de producción sugerido según pedidos reales, inventarios y capacidad — recalculado cuando algo cambia."],
    ["Seguridad industrial con visión.", "Detección de EPP faltante y zonas de riesgo invadidas, con alertas al supervisor en el momento."],
  ];

  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Planta y transformación"]],
    titulo: "La planta que <em>se ve a sí misma</em>",
    lead: "Leonardo estudiaba las máquinas por dentro. Nosotros ponemos ojos, memoria y voz a tu línea de producción.",
    etiquetas: ["vision_artificial", "oee", "calidad", "mantenimiento_predictivo", "trazabilidad"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="grid g3">
      ${panelVivo({
        head: "Línea 2 · visión en vivo",
        filas: [
          ["📷 CAM-02: tapa floja detectada", "pieza 8,412"],
          ["Desviada a retrabajo", "✓ automática"],
          ["El cliente la hubiera encontrado en", "nunca"],
        ],
        destacado: ["Defectos que salieron de planta hoy", "0"],
      })}
      ${panelVivo({
        head: "OEE · turno A · sin capturas",
        filas: [
          ["Disponibilidad · rendimiento · calidad", "en vivo"],
          ["La junta empieza con", "números, no opiniones"],
        ],
        destacado: ["OEE del turno", "84.2%"],
      })}
      ${panelVivo({
        head: "Mantenimiento · antes del paro",
        filas: [
          ["Etiquetadora L2: vibración +18%", "patrón de mordaza"],
          ["Falla probable en", "6-9 días"],
          ["OT-441 programada", "✓ domingo sin producción"],
        ],
        destacado: ["Costo de paro evitado", "$84,000"],
      })}
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Dolor → cura", titulo: "Tres dolores de piso, tres curas." })}
    ${dolorCura([
      ["La calidad se descubre cuando ya es reclamo.", "Visión artificial", "Cámaras + IA inspeccionan cada pieza EN la línea: el defecto se detiene adentro, no en el cliente."],
      ["Nadie sabe el OEE real hasta el viernes.", "Monitoreo en vivo", "Cada línea reporta sola: producción, ritmo, paros con causa. El tablero vive en Da Vinci Central."],
      ["El mantenimiento llega después de la falla.", "Predictivo", "Horas, vibración y temperatura anticipan la avería: el taller se programa antes del paro, no después."],
    ])}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "En tu piso de producción", titulo: "Lo que llevamos a tu planta." })}
        ${puntos(llevamos)}
      </div>
      <div data-reveal="right" style="display:grid;gap:1.2rem;align-content:start;position:sticky;top:110px">
        <div class="card">
          <span class="kicker">Cómo se ve en la práctica</span>
          <ul class="puntos" style="gap:.8rem">
            ${[
              "Una envasadora detecta botellas mal tapadas EN la línea — no en el reclamo del cliente.",
              "Un taller metalmecánico sabe el avance real de cada orden sin caminar la planta.",
              "Una planta de alimentos arma su HACCP y trazabilidad de lote en minutos, no en días.",
            ].map((t) => html`<li class="punto"><span class="ico">✳</span><span><span style="color:var(--carbon)">${t}</span></span></li>`)}
          </ul>
        </div>
        <div class="card" style="background:var(--tinta-tech);color:var(--blanco-calido);border-color:var(--linea-oscura)">
          <span class="kicker">La app insignia</span>
          <h4 style="color:var(--blanco-calido)">Planta Da Vinci — SCADA con cerebro</h4>
          <p style="color:var(--texto-oscuro)">Líneas en vivo, OEE, visión artificial, calidad y mantenimiento. Ábrela y simula un paro.</p>
          <a class="btn btn-sm btn-arrow" href="app-planta.html" style="margin-top:1rem">Abrir la plataforma${flecha()}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Sin big bang", titulo: "Empezamos por una línea." })}
        <p class="lead">No hace falta digitalizar toda la planta de golpe: el <a class="u-link" href="metodo.html">Método Da Vinci</a> aplica igual aquí — mapeamos una línea, montamos el primer módulo (visión, monitoreo o calidad) y crecemos línea por línea con resultados medibles.</p>
      </div>
      ${stats([["1 línea", "para empezar y medir"], ["84.2%", "OEE visible sin capturas"], ["$84k", "de paro evitado en un solo evento"]])}
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "planta.html",
    html: pagina({
      titulo: "Planta y transformación",
      descripcion: "IA para plantas de producción: visión artificial de líneas, monitoreo en tiempo real, calidad, mantenimiento predictivo y OEE.",
      ruta: "planta.html",
      contenido,
    }),
  };
}

/* ═══════════════ FINANZAS ═══════════════ */
function finanzas() {
  const bloques = [
    ["Contabilidad", [
      ["Registro automático.", "Facturas emitidas y recibidas se contabilizan solas, con póliza sugerida y documentos ligados."],
      ["Conciliación bancaria con IA.", "Los movimientos del banco se cruzan solos contra facturas y pagos; solo revisas las excepciones."],
      ["Cierre mensual acelerado.", "Checklist de cierre vivo: qué falta, de quién, y borradores de asientos recurrentes listos."],
    ]],
    ["Finanzas", [
      ["Flujo de caja proyectado.", "Tu caja a 30, 60 y 90 días con cobranza real y pagos programados — y alertas cuando viene un bache."],
      ["Cobranza y pagos inteligentes.", "Recordatorios automáticos a clientes, programación de pagos a proveedores y priorización cuando la caja aprieta."],
      ["Copilot financiero.", "Pregunta «¿cuánto gastamos en fletes este trimestre vs. el anterior?» y decide con la cifra enfrente."],
    ]],
    ["Fiscal", [
      ["Facturación y complementos al día.", "Emisión, complementos de pago y cancelaciones controladas desde el flujo — sin pendientes olvidados."],
      ["Vigilancia de obligaciones.", "Calendario fiscal vivo con alertas: declaraciones, retenciones y fechas límite nunca más de sorpresa."],
      ["Expediente siempre listo.", "XML, acuses y papeles de trabajo organizados y localizables — una revisión deja de ser una semana de pánico."],
    ]],
  ];

  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Contabilidad · Finanzas · Fiscal"]],
    titulo: "Números que <em>se cuidan solos</em>",
    lead: "El área que más papeles procesa es la que más gana con IA. Cerrar el mes deja de ser una batalla.",
    etiquetas: ["conciliacion_ia", "flujo_de_caja", "cfdi", "cierre_rapido"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="grid g3">
      ${panelVivo({
        head: "Conciliación · sola",
        filas: [["184 movimientos del banco", "✓ 181 conciliados solos"], ["Excepciones para revisar", "3"]],
        destacado: ["Tiempo del contador", "20 min, no 2 días"],
      })}
      ${panelVivo({
        head: "Flujo · 30/60/90 días",
        filas: [["⚠ Semana 6: se anticipa apretón", "detectado con 42 días"], ["Cobranza priorizada + pago diferido", "✓ plan sugerido"]],
        destacado: ["Baches de caja por sorpresa", "0"],
      })}
      ${panelVivo({
        head: "Fiscal · sin sustos",
        filas: [["Complementos de pago pendientes", "0"], ["Declaración mensual", "papeles listos · 5 días antes"], ["XML + acuses del ejercicio", "localizables en segundos"]],
        destacado: ["Revisión del SAT", "de pánico → trámite"],
      })}
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Dolor → cura", titulo: "El cierre deja de ser una batalla." })}
    ${dolorCura([
      ["El cierre del mes es una batalla de dos semanas.", "Conciliación con IA", "Los movimientos se cruzan solos contra facturas y pagos; tu contador revisa 3 excepciones, no 184 renglones."],
      ["La caja se descubre cuando ya aprieta.", "Flujo proyectado", "Tu caja a 30, 60 y 90 días con cobranza real y pagos programados — el bache se ve venir con semanas."],
      ["Las obligaciones fiscales llegan de sorpresa.", "Vigilancia fiscal", "Calendario vivo, complementos al día y expediente siempre listo. La revisión deja de ser pánico."],
    ])}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${secHead({ kicker: "Tres frentes", titulo: "Contabilidad, finanzas y fiscal." })}
    <div class="grid g3">
      ${bloques.map(([t, items], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1}</span>
        <h3 style="font-size:1.35rem;margin-bottom:1rem">${t}</h3>
        ${puntos(items)}
      </article>`)}
    </div>
    <div class="fundador" data-reveal style="margin-top:2rem;border-style:solid;border-color:var(--linea)">
      <div>
        <b>Trabajamos junto a tu contador o despacho</b>
        <p>Les quitamos la talacha, no el criterio. El expediente y las pólizas siguen siendo suyos — solo dejan de armarse a mano.</p>
      </div>
      <a class="btn btn-oscuro btn-arrow" href="contacto.html">Hablemos${flecha()}</a>
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "finanzas.html",
    html: pagina({
      titulo: "Contabilidad, finanzas y fiscal",
      descripcion: "IA para el área financiera: contabilidad automatizada, conciliaciones, flujo de caja proyectado, cumplimiento fiscal y facturación.",
      ruta: "finanzas.html",
      contenido,
    }),
  };
}

/* ═══════════════ DIAGNÓSTICO ═══════════════ */
function diagnostico() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Diagnóstico"]],
    titulo: "Tu diagnóstico <em>gratuito</em>",
    lead: "45 minutos. Tu operación sobre la mesa. Un mapa claro de dónde la IA te genera retorno — sin compromiso y sin tecnicismos.",
    etiquetas: ["45 minutos", "sin compromiso", "el mapa es tuyo"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Qué incluye", titulo: "Tres entregables concretos." })}
        ${puntos([
          ["Mapeo express.", "Revisamos contigo uno o dos procesos clave de tu operación."],
          ["Detección de retorno.", "Te decimos dónde la IA ahorra tiempo o genera ingresos — y dónde no vale la pena."],
          ["Propuesta concreta.", "Si hay proyecto, recibes alcance, tiempos y precio del primer módulo. Si no lo hay, también te lo decimos."],
        ], { numerado: true })}
        <div class="card" data-reveal style="margin-top:2rem">
          <span class="kicker">Sin letra chica</span>
          <p style="margin:0">El diagnóstico es gratuito de verdad: no hay compromiso de compra y el mapa que salga de la sesión es tuyo. Nos conviene: cuando el diagnóstico es honesto, los proyectos que sí arrancan llegan a buen puerto.</p>
        </div>
      </div>
      <div class="card" data-reveal="right">
        <span class="kicker">Agenda tu diagnóstico</span>
        <h3>Llena el formulario y coordinamos fecha.</h3>
        ${formContacto("form-diagnostico")}
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Qué pasa después", titulo: "Del mapa a la obra.", centrado: true })}
    ${stats([["Semana 0", "el mapeo con tu gente"], ["Semanas 1-2", "prototipo con tus datos reales"], ["Semana 3+", "en producción, con tu equipo entrenado"]])}
  </div>
</section>

${ctaFinal({ titulo: "¿Listo para ver tu mapa?", texto: "Agenda la sesión y trae tus dudas. Salimos con un plan o con un «todavía no» honesto." })}`;

  return {
    ruta: "diagnostico.html",
    html: pagina({
      titulo: "Diagnóstico gratuito",
      descripcion: "Diagnóstico gratuito de Da Vinci IA: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.",
      ruta: "diagnostico.html",
      contenido,
    }),
  };
}

/* ═══════════════ SEGURIDAD ═══════════════ */
function seguridad() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Seguridad"]],
    titulo: "Tus datos son tuyos. <em>Punto.</em>",
    lead: "La confianza no se pide: se construye con reglas claras desde el primer día del mapeo.",
    etiquetas: ["nda", "cifrado", "accesos_por_rol", "propiedad_del_cliente"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Las reglas del taller", titulo: "Cinco reglas, sin excepciones." })}
        ${puntos([
          ["Confidencialidad firmada.", "Antes de ver un solo dato tuyo, firmamos un acuerdo de confidencialidad. El mapeo de tu empresa es información privilegiada y así se trata."],
          ["Tus datos no entrenan modelos de terceros.", "Usamos los modelos en modalidad empresarial: tu información no se usa para entrenar la IA de nadie."],
          ["Accesos por rol.", "Cada persona de tu equipo ve lo que le corresponde. El vendedor no ve la nómina; dirección lo ve todo."],
          ["Cifrado siempre.", "Datos cifrados en tránsito y en reposo, con respaldos automáticos."],
          ["Propiedad clara.", "El software que construimos para ti y los datos que genera son de tu empresa. Si algún día nos vamos, todo se queda contigo."],
        ], { numerado: true })}
      </div>
      <div data-reveal="right" style="position:sticky;top:110px">
        ${panelVivo({
          head: "Control de accesos · ejemplo",
          filas: [
            ["Vendedor", "sus clientes y sus metas"],
            ["Contador", "pólizas, banco, fiscal"],
            ["Jefe de planta", "líneas, calidad, OT"],
            ["Dirección", "todo"],
          ],
          destacado: ["Llaves", "las tienes tú 🔑"],
        })}
      </div>
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "seguridad.html",
    html: pagina({
      titulo: "Seguridad y datos",
      descripcion: "Cómo protege Da Vinci IA los datos de tu empresa: confidencialidad, accesos, cifrado y propiedad de la información.",
      ruta: "seguridad.html",
      contenido,
    }),
  };
}

/* ═══════════════ FAQ ═══════════════ */
const FAQ_COMPLETO = [
  ["¿Cuánto tarda un proyecto?", "El primer módulo funcionando suele tomar semanas, no meses. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo."],
  ["¿Cuánto cuesta?", 'Depende de los módulos que tu empresa necesite. El diagnóstico gratuito produce una propuesta con alcance y precio cerrados. Más detalle en la página de <a class="u-link" href="precios.html">inversión</a>.'],
  ["Ya tengo un sistema, ¿lo tengo que tirar?", "No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba."],
  ["¿Necesito un equipo técnico en mi empresa?", "No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso."],
  ["¿Qué pasa con mis datos?", 'Son tuyos y se quedan contigo. Confidencialidad firmada, cifrado, accesos por rol y cero uso de tus datos para entrenar modelos de terceros. Detalle completo en <a class="u-link" href="seguridad.html">seguridad</a>.'],
  ["¿Trabajan a distancia?", "Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode."],
  ["¿La IA va a reemplazar a mi equipo?", "Nuestra experiencia: reemplaza tareas, no personas. El equipo deja de capturar y perseguir pendientes, y se dedica a vender, decidir y atender mejor. Las personas involucradas participan desde el mapeo — el sistema se construye con ellas, no contra ellas."],
  ["¿Qué pasa si la IA se equivoca?", "Los agentes trabajan con TUS datos (no inventan) y los flujos críticos siempre tienen aprobación humana donde tú lo decidas. Además todo queda registrado: puedes auditar cada acción."],
  ["¿Puedo empezar con algo pequeño?", "Es exactamente como nos gusta empezar: un módulo, un proceso, resultado medible. Después decides si crecer."],
  ["¿Dan soporte después de entregar?", "Sí — la mejora continua es una mensualidad opcional. Y si eliges no tomarla, el módulo entregado es tuyo y sigue funcionando."],
];

function faq() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Preguntas frecuentes"]],
    titulo: "Preguntas <em>frecuentes</em>",
    lead: "Las dudas que escuchamos todas las semanas — respondidas sin rodeos.",
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap wrap-txt" style="margin-inline:auto">
    ${faqBloque(FAQ_COMPLETO, { multi: true, buscador: true })}
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "faq.html",
    html: pagina({
      titulo: "Preguntas frecuentes",
      descripcion: "Respuestas claras sobre proyectos de IA a la medida: tiempos, costos, datos, integración y soporte.",
      ruta: "faq.html",
      jsonld: jsonld({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_COMPLETO.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "") },
        })),
      }),
      contenido,
    }),
  };
}

/* ═══════════════ CASOS ═══════════════ */
function casos() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Casos"]],
    titulo: "Casos y <em>resultados</em>",
    lead: "Preferimos que los números hablen. Esta sección crece con cada proyecto entregado.",
    etiquetas: ["cifras reales", "con permiso del cliente", "sin promesas"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split">
      <div>
        <p class="lead">Estamos documentando nuestros primeros casos con resultados medibles — con permiso de cada cliente y con cifras reales, no promesas. Mientras tanto, la mejor forma de evaluar cómo trabajamos es <a class="u-link" href="demos.html">jugar con las demos</a> y conocer el <a class="u-link" href="metodo.html">Método Da Vinci</a>.</p>
        <p class="muted">¿Quieres ser uno de los primeros casos? Los proyectos fundadores reciben condiciones especiales a cambio de documentar el resultado.</p>
      </div>
      <div data-reveal="right">
        ${panelVivo({
          head: "Así se verá cada caso",
          filas: [
            ["El dolor", "qué le costaba tiempo y dinero"],
            ["El módulo", "qué construimos y en cuántas semanas"],
            ["El número", "el resultado medible, con la cifra enfrente"],
          ],
          destacado: ["Caso fundador", "próximamente"],
        })}
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Plantilla lista", titulo: "「 Empresa del sector 」", centrado: true })}
    <div class="grid g3">
      ${[
        ["El dolor", "— qué le costaba tiempo y dinero cada semana —"],
        ["El módulo", "— qué construimos y en cuántas semanas —"],
        ["El número", "— el resultado medible, con la cifra enfrente —"],
      ].map(([t, d], i) => html`
      <article class="card" data-reveal style="border-style:dashed">
        <span class="card-num">0${i + 1}</span>
        <h3 style="font-size:1.3rem">${t}</h3>
        <p class="serif" style="font-size:1.05rem">${d}</p>
      </article>`)}
    </div>
    <div style="margin-top:2rem">${fundador()}</div>
  </div>
</section>

${ctaFinal({
    titulo: "Sé un caso de éxito.",
    texto: "Agenda tu diagnóstico gratuito y construyamos un resultado que valga la pena contar.",
  })}`;

  return {
    ruta: "casos.html",
    html: pagina({
      titulo: "Casos y resultados",
      descripcion: "Resultados de Da Vinci IA: proyectos de automatización, agentes de IA y software a la medida con impacto medible.",
      ruta: "casos.html",
      contenido,
    }),
  };
}

/* ═══════════════ PRIVACIDAD ═══════════════ */
function privacidad() {
  const contenido = html`
<section class="phero">
  <div class="wrap wrap-txt" style="margin-inline:auto">
    ${miga([["index.html", "Inicio"], [null, "Aviso de privacidad"]])}
    <h1 style="font-size:clamp(2rem,4.4vw,3.2rem)">Aviso de privacidad</h1>
  </div>
</section>

<section class="sec" style="padding-top:0">
  <div class="wrap wrap-txt" style="margin-inline:auto">
    <div class="prosa">
      <p>Da Vinci IA (en adelante, «nosotros») es responsable del tratamiento de los datos personales que nos proporcionas a través del formulario de contacto de este sitio.</p>
      <h3>Datos que recabamos</h3>
      <ul>
        <li>Nombre</li><li>Nombre de tu empresa</li><li>Correo electrónico</li>
        <li>La descripción que nos compartas sobre tu necesidad</li>
      </ul>
      <h3>Para qué los usamos</h3>
      <p>Exclusivamente para responder a tu solicitud, agendar el diagnóstico que nos pides y darle seguimiento a la conversación. No vendemos ni compartimos tus datos con terceros.</p>
      <h3>Conservación y seguridad</h3>
      <p>Tus datos se almacenan con accesos controlados y solo el tiempo necesario para atender tu solicitud o la relación comercial que derive de ella.</p>
      <h3>Tus derechos</h3>
      <p>Puedes solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos escribiéndonos al correo de contacto publicado en este sitio.</p>
      <div class="linea-deco"></div>
      <p class="mono muted">Última actualización: agosto de 2026.</p>
      <a class="link-arrow" href="index.html">← Volver al inicio</a>
    </div>
  </div>
</section>`;

  return {
    ruta: "privacidad.html",
    html: pagina({
      titulo: "Aviso de privacidad",
      descripcion: "Aviso de privacidad de Da Vinci IA: qué datos recabamos, para qué los usamos y cuáles son tus derechos.",
      ruta: "privacidad.html",
      contenido,
    }),
  };
}

/* ═══════════════ CONTACTO ═══════════════ */
function contacto() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Contacto"]],
    titulo: "Toda obra empieza con una <em>conversación</em>.",
    lead: "Cuéntanos qué quieres lograr y agendamos tu diagnóstico gratuito.",
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split">
      <div class="card" data-reveal="left">${formContacto("form-contacto-pagina")}</div>
      <div style="display:grid;gap:1.2rem;align-content:start">
        <div class="card" data-reveal="right" style="background:var(--tinta-tech);color:var(--blanco-calido);border-color:var(--linea-oscura)">
          <span class="kicker">🛡 Garantía del taller</span>
          <h3 style="color:var(--blanco-calido);font-size:1.35rem">Si el diagnóstico no te da claridad sobre dónde está tu retorno, te quedas con el mapa de tu operación — gratis — y no te volvemos a buscar.</h3>
          <p style="color:var(--texto-oscuro)">Así de seguros estamos de lo que vas a ver.</p>
        </div>
        <div class="card" data-reveal="right">
          <span class="kicker">¿Prefieres WhatsApp?</span>
          <h4>El botón verde del sitio te lleva directo.</h4>
          <p>Muy pronto también podrás escribirnos por ahí con un agente contestando — sí, uno de los nuestros.</p>
        </div>
        <div class="card" data-reveal="right">
          <span class="kicker">Taller abierto</span>
          <h4>CDMX · México</h4>
          <p>El mapeo puede ser presencial o por videollamada. Las juntas semanales, como te acomode.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "¿Prefieres ver antes de hablar?",
    texto: "Entra a la sala de demos: agentes que llaman, cotizan y se coordinan solos — con voz real.",
    boton: "Entrar a la sala de demos",
    href: "demos.html",
  })}`;

  return {
    ruta: "contacto.html",
    html: pagina({
      titulo: "Contacto",
      descripcion: "Agenda tu diagnóstico gratuito con Da Vinci IA: mapeamos una parte de tu operación y te decimos dónde la IA te genera retorno.",
      ruta: "contacto.html",
      contenido,
    }),
  };
}

export function paginas() {
  return [precios(), planta(), finanzas(), diagnostico(), seguridad(), faq(), casos(), privacidad(), contacto()];
}
