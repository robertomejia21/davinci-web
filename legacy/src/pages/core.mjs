import {
  html, pagina, pageHero, secHead, ctaFinal, panelVivo, puntos, cardLink,
  stats, flecha, jsonld, fundador,
} from "../lib/layout.mjs";
import { tornilloAereo, bocetoUI, espiral } from "../lib/arte.mjs";

/* ═══════════════ DA VINCI CENTRAL ═══════════════ */
function central() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Da Vinci Central"]],
    titulo: "El centro de inteligencia operativa de tu empresa",
    lead: "Pregunta lo que sea. Ve cada movimiento de tu negocio. Como los códices donde Leonardo concentraba todo su conocimiento — pero este responde.",
    etiquetas: ["panel en vivo", "lenguaje natural", "accesos por rol"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="app-shell" data-reveal="zoom">
      <div class="app-bar">
        <span>Da Vinci Central · LISA</span>
        <span class="badge"><i class="dot"></i>datos de ejemplo</span>
      </div>
      <div class="app-kpis">
        <div class="app-kpi"><small>Ventas hoy</small><b class="naranja num-anim" data-num="187420" data-pre="$">$187,420</b></div>
        <div class="app-kpi"><small>Pedidos activos</small><b class="num-anim" data-num="24">24</b></div>
        <div class="app-kpi"><small>Por cobrar</small><b class="num-anim" data-num="96150" data-pre="$">$96,150</b></div>
        <div class="app-kpi"><small>Margen del mes</small><b class="num-anim" data-num="24.8" data-dec="1" data-post="%">24.8%</b></div>
      </div>
      <div class="app-body">
        <div class="chat" id="chat-central" style="min-height:0;border:0;background:transparent">
          <div class="chat-cuerpo" style="padding:0">
            <div class="burbuja bot">Hola, soy <b>Da Vinci Central</b>. Pregúntame lo que quieras sobre tu empresa — elige una pregunta para probar:</div>
          </div>
          <div class="chat-sugerencias" style="padding:1rem 0 0">
            <button class="sug" type="button" data-q="ventas">¿Cuánto vendimos esta semana?</button>
            <button class="sug" type="button" data-q="cobranza">¿Quién no ha pagado?</button>
            <button class="sug" type="button" data-q="inventario">¿Cómo va el inventario?</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Un solo lugar", titulo: "Un solo lugar para todo tu negocio" })}
        <p class="lead">Ventas, cobranza, inventario, operación: cada módulo que construimos alimenta a Central. El resultado es un panel vivo donde los números siempre coinciden — y un chat donde le preguntas a tu empresa en tu idioma.</p>
      </div>
      <div>
        ${puntos([
          ["Pregunta en lenguaje natural.", "«¿Cuánto vendimos esta semana?», «¿quién no ha pagado?», «¿qué se está agotando?» — respuesta al momento, con cifras y gráficas."],
          ["Todo en tiempo real.", "Cada venta, pago y movimiento se refleja al instante, desde tu teléfono o tu computadora."],
          ["Alertas de lo importante.", "Inventario bajo, cliente que no paga, proceso detenido: te avisa antes de que sea problema."],
          ["Memoria de tu empresa.", "Historial, documentos y decisiones quedan consultables — el conocimiento deja de vivir solo en cabezas."],
        ])}
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div class="card" data-reveal="left">
        <span class="kicker">Crece contigo</span>
        <h3>No se compra «completo»: se construye.</h3>
        <p>Central se arma módulo por módulo con el <a class="u-link" href="metodo.html">Método Da Vinci</a>. Empiezas con lo que más retorno te da, y cada módulo nuevo enriquece lo que Central puede ver y responder.</p>
        <a class="link-arrow" href="modulos.html" style="margin-top:1rem">Ver los 6 módulos →</a>
      </div>
      <div class="card" data-reveal="right">
        <span class="kicker">Míralo en acción</span>
        <h3>La demo interactiva vive en la portada.</h3>
        <p>Haz clic en las preguntas y ve cómo responde Central con datos de ejemplo — o entra a la sala de demos para escuchar a los agentes trabajando.</p>
        <a class="link-arrow" href="demos.html" style="margin-top:1rem">Ir a la sala de demos →</a>
      </div>
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "¿Quieres ver tu empresa completa en una pantalla?",
    texto: "Agenda un diagnóstico gratuito y te mostramos cómo se vería Da Vinci Central con tus procesos reales.",
  })}`;

  return {
    ruta: "central.html",
    html: pagina({
      titulo: "Da Vinci Central",
      descripcion: "Da Vinci Central: el centro de inteligencia operativa de tu empresa. Pregunta lo que sea y ve cada movimiento en tiempo real.",
      ruta: "central.html",
      contenido,
    }),
  };
}

/* ═══════════════ SALA DE DEMOS ═══════════════ */
function demos() {
  const areas = [
    ["01", "Industrial", "Maquila, transformación, líneas, calidad — la planta que se ve a sí misma.", "demo-industrial.html"],
    ["02", "Comercio y servicios", "Súper, comercializadoras, restaurantes, logística — el mostrador visible.", "demo-comercio.html"],
    ["03", "Financiera y fiscal", "La puerta que todos cruzan: números que se cuidan solos.", "demo-financiera.html"],
    ["04", "Emprendimiento", "Tu primer sistema — simple, poderoso y a precio de arranque.", "demo-emprendimiento.html"],
  ];

  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Sala de demos"]],
    titulo: "La sala de <em>demos</em>.",
    lead: "No te contamos lo que hace la inteligencia operativa: escúchala llamar, léela vender y mírala coordinarse sola.",
    etiquetas: ["voz_real", "agentes_autonomos", "whatsapp", "erp/crm_demo"],
  })}

<!-- LISA en el celular -->
<section class="sec" style="padding-top:0" id="lisa-show">
  <div class="wrap">
    <div class="split">
      <div>
        <span class="estacion-lbl">🔑 LISA · tu agente maestro</span>
        <h2 id="lisa-tit">La planta te responde.</h2>
        <p class="lead" id="lisa-baja">LISA ve tus líneas, tu calidad y tus paros — y te lo cuenta por WhatsApp.</p>
        <div class="tabs" style="margin-top:1.6rem">
          <button class="tab activo" type="button" data-lisa="industrial">Industrial</button>
          <button class="tab" type="button" data-lisa="comercio">Comercio</button>
          <button class="tab" type="button" data-lisa="financiera">Financiera</button>
          <button class="tab" type="button" data-lisa="emprendimiento">Emprendimiento</button>
        </div>
        <p class="muted" style="margin-top:1.4rem;font-size:.93rem">LISA es el agente maestro: las llaves de tu empresa en tu bolsillo.</p>
        <a class="link-arrow" href="lisa.html">Conoce su historia →</a>
      </div>
      <div data-reveal="right">
        <div class="fono">
          <div class="fono-top">
            <span class="av">🔑</span>
            <div><b>LISA</b><small>tu agente maestro · en línea</small></div>
          </div>
          <div class="fono-chat"></div>
          <div class="fono-input"><span>Escribe a LISA…</span><span>🎤</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Vestíbulo -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({
      kicker: "El vestíbulo",
      titulo: "Elige tu mundo",
      lead: "Cuatro puertas. Detrás de cada una: la introducción a tu industria y plataformas completas diseñadas solo para ella.",
    })}
    <div class="grid g4">
      ${areas.map(([n, t, d, href]) => cardLink(href, n, t, d, "Entrar"))}
    </div>
  </div>
</section>

<!-- Estaciones destacadas -->
<section class="sec">
  <div class="wrap">
    ${secHead({ kicker: "Estaciones", titulo: "Lo que vas a escuchar y ver." })}
    <div class="grid g3">
      <article class="card" data-reveal>
        <span class="card-num">Estación 01 · voz</span>
        <h3 style="font-size:1.25rem">Valentina llama a tu cliente</h3>
        <p>Confirma la entrega, recuerda la factura y ofrece la liga de pago — con calidez de persona y memoria de máquina.</p>
        <a class="link-arrow" href="demo-emprendimiento.html">Escuchar la llamada →</a>
      </article>
      <article class="card" data-reveal>
        <span class="card-num">Estación 03 · agente ↔ agente</span>
        <h3 style="font-size:1.25rem">Atlas ↔ Livia resuelven un urgente</h3>
        <p>Logística y almacén se coordinan solos: 40 cajas, entrega mañana antes de las 9:00. Tiempo humano invertido: cero.</p>
        <a class="link-arrow" href="demo-comercio.html">Ver la coordinación →</a>
      </article>
      <article class="card" data-reveal>
        <span class="card-num">Estación 06 · tu industria</span>
        <h3 style="font-size:1.25rem">Así se ve TU sistema</h3>
        <p>Paneles de muestra del ERP/CRM que construimos por industria: súper, logística, restaurante y comercializadora.</p>
        <a class="link-arrow" href="demo-comercio.html">Abrir los paneles →</a>
      </article>
    </div>
    <div style="margin-top:2rem" data-reveal>
      <a class="btn btn-oscuro btn-arrow" href="app-planta.html">Abrir Planta Da Vinci — la app insignia${flecha()}</a>
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "¿Te imaginaste tu empresa aquí?",
    texto: "En el diagnóstico gratuito dibujamos estas mismas pantallas — pero con tus procesos, tus productos y tu gente.",
  })}`;

  return {
    ruta: "demos.html",
    html: pagina({
      titulo: "Sala de demos",
      descripcion: "Escucha a nuestros agentes llamar por teléfono, mandar notas de voz, coordinarse entre sí y responder por WhatsApp. La inteligencia operativa de Da Vinci IA, en vivo.",
      ruta: "demos.html",
      contenido,
    }),
  };
}

/* ═══════════════ MÉTODO ═══════════════ */
function metodo() {
  const fases = [
    {
      lbl: "Semana 0 · el mapeo", tit: "Primero vemos.", sub: "Mapeo con tu gente",
      txt: "Como Leonardo llenaba códices antes de trazar: entendemos tu operación real antes de escribir una línea de código.",
      panel: { head: "Semana 0 · el mapeo", filas: [["Recorrido con tu gente, proceso por proceso", "✓ día 1-3"], ["Mapa de dolores con costo estimado", "✓ priorizado"], ["Propuesta: primer módulo + precio cerrado", "✓ sin letra chica"]] },
    },
    {
      lbl: "Semanas 1-2 · el prototipo", tit: "Luego lo ves funcionar.", sub: "Prototipo + junta semanal",
      txt: "Cada viernes ves el avance con tus datos reales. Pides cambios. El lunes ya están.",
      panel: { head: "Semana 1-2 · el prototipo", filas: [["Módulo corriendo con TUS datos", "✓ no maquetas"], ["Junta semanal: viste, pediste, decidiste", "✓ viernes 9:00"], ["Cambios de la junta", "✓ aplicados antes del lunes"]] },
    },
    {
      lbl: "Semana 3+ · producción", tit: "Y nunca paras de mejorar.", sub: "Producción + siguiente módulo",
      txt: "La entrega no es el final: es el inicio. Módulo sobre módulo — sfumato, capa sobre capa.",
      panel: { head: "Semana 3+ · en producción", filas: [["Módulo funcionando en tu operación real", "✓ equipo entrenado"], ["LISA ya responde con estos datos", "✓ conectada"], ["Siguiente módulo", "tú decides el ritmo"]] },
    },
  ];

  const pasos = [
    ["Mapeamos tu empresa", "Vamos contigo y con tu gente, proceso por proceso. Entendemos cómo trabaja tu empresa de verdad — no en el organigrama. De aquí sale un mapa claro de dónde se pierde tiempo y dinero."],
    ["Priorizamos módulos", "Te decimos dónde la IA genera retorno más rápido y por dónde conviene empezar. Diagnóstico claro, sin tecnicismos, con alcance y precio concretos."],
    ["Diseñamos el primer módulo", "Prototipo con tus datos reales, en días. Lo ves funcionando antes de invertir en el desarrollo completo — sin actos de fe."],
    ["Avance semanal contigo", "Cada semana, una reunión: ves el progreso, pides cambios y decides. Las personas involucradas en el proceso participan desde el día uno."],
    ["Implementamos y capacitamos", "Lo dejamos funcionando en tu operación real y entrenamos a tu equipo. La entrega no es el final: es el inicio de la mejora continua."],
    ["Siguiente módulo", "Repetimos con el siguiente proceso, hasta integrar toda tu empresa en Da Vinci Central. ¿Solo necesitas un módulo? Nos ajustamos a eso."],
  ];

  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Método"]],
    titulo: "El <em>Método</em> Da Vinci",
    lead: "Boceto → prueba → ajuste → obra. Así trabajaba el taller de Leonardo; así construimos tu software. Nunca caminas a ciegas.",
    etiquetas: ["mapeo con tu gente", "avance semanal", "precio cerrado"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="grid g3">
      ${fases.map((f) => panelVivo(f.panel))}
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Las tres fases", titulo: "Ver, construir, perfeccionar." })}
    <div class="grid g3">
      ${fases.map((f) => html`
      <article class="card" data-reveal>
        <span class="card-num">${f.lbl}</span>
        <h3 style="font-size:1.4rem">${f.tit}</h3>
        <p class="mono" style="color:var(--naranja);margin-bottom:.6rem">${f.sub}</p>
        <p>${f.txt}</p>
      </article>`)}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${secHead({ kicker: "Paso a paso", titulo: "Los seis pasos, sin misterio." })}
    <div class="pasos">
      ${pasos.map(([t, d], i) => html`
      <article class="paso" data-reveal>
        <span class="paso-n">0${i + 1}</span>
        <div><h4>${t}</h4><p>${d}</p></div>
      </article>`)}
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Por qué funciona", titulo: "Tres razones, cero actos de fe.", centrado: true })}
    <div class="grid g3">
      ${[
        ["Velocidad real.", "El primer módulo funcionando toma semanas, no meses. Ves valor antes de comprometer el proyecto completo."],
        ["Cero cajas negras.", "Cada semana ves, opinas y decides. El software se ajusta a tu empresa — no al revés."],
        ["Tu gente a bordo.", "Quienes viven el proceso participan desde el mapeo; cuando el módulo llega, ya es suyo."],
      ].map(([t, d], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1}</span>
        <h4>${t}</h4>
        <p>${d}</p>
      </article>`)}
    </div>
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "metodo.html",
    html: pagina({
      titulo: "El Método Da Vinci",
      descripcion: "El Método Da Vinci: mapeo de procesos, módulos priorizados y avances semanales. Software a la medida sin caminar a ciegas.",
      ruta: "metodo.html",
      contenido,
    }),
  };
}

/* ═══════════════ NOSOTROS ═══════════════ */
function nosotros() {
  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Nosotros"]],
    titulo: "Por qué <em>Da Vinci</em>",
    lead: "Saper vedere — «saber ver». El lema de Leonardo es nuestra forma de trabajar.",
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split-2-3 split" style="align-items:start">
      <div class="prosa">
        <p data-reveal>Antes de pintar un músculo, Leonardo diseccionaba el cuerpo. Antes de diseñar una máquina, estudiaba el agua, el viento, el vuelo de los pájaros. Llenó más de 7,000 páginas de códices con observaciones, diagramas y mediciones. No empezaba por la solución: empezaba por entender.</p>
        <p data-reveal>En su taller de Florencia nada se construía de golpe: cada obra avanzaba por bocetos, pruebas y correcciones, con el cliente viendo el progreso. Y nunca separó el arte de la ingeniería — para él eran la misma cosa: resolver problemas reales con precisión y belleza.</p>
        <h3 data-reveal>Quinientos años después, nosotros trabajamos igual.</h3>
        <p data-reveal><b>Primero vemos.</b> Mapeamos tu empresa proceso por proceso, con las personas que los viven todos los días — como Leonardo llenaba sus cuadernos antes de trazar la primera línea.</p>
        <p data-reveal><b>Luego construimos por módulos.</b> Cada semana te mostramos un avance, lo ajustamos contigo y lo implementamos. Sin cajas negras, sin esperar meses para ver resultados.</p>
        <p data-reveal><b>Y todo queda en un solo lugar.</b> Como los códices donde Leonardo concentraba todo su conocimiento, tu empresa tiene un centro donde puedes preguntar lo que sea: <a class="u-link" href="central.html">Da Vinci Central</a>.</p>
        <blockquote class="cita" data-reveal>
          «La simplicidad es la máxima sofisticación.»
          <footer>atribuido al taller de Leonardo</footer>
        </blockquote>
        <p data-reveal>Por eso elegimos su nombre. No por el genio — por el método: observar, entender, construir, perfeccionar. Hasta nuestro logotipo lo cuenta: el isotipo es el <b>tornillo aéreo</b> de Leonardo, un invento que se adelantó 400 años a su época. Ideas adelantadas, hechas realidad.</p>
      </div>
      <div style="display:grid;gap:1.2rem;position:sticky;top:110px">
        <div class="sketch" data-reveal="right" style="color:var(--carbon);padding:1.6rem">
          ${tornilloAereo()}
          <p class="mono center" style="margin-top:.8rem;color:var(--gris-medio);font-size:.6rem">Tornillo aéreo · el isotipo</p>
        </div>
        <div class="sketch" data-reveal="right" style="color:var(--carbon);padding:1.6rem">
          ${espiral()}
          <p class="mono center" style="margin-top:.8rem;color:var(--gris-medio);font-size:.6rem">Estudios de proporción</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "El método en cuatro palabras", titulo: "Observar, entender, construir, perfeccionar.", centrado: true })}
    ${stats([["7,000", "páginas de códices antes de construir"], ["4", "pasos que repetimos en cada módulo"], ["1", "centro donde todo tu negocio coincide"]])}
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "nosotros.html",
    html: pagina({
      titulo: "Nosotros",
      descripcion: "Por qué Da Vinci IA: el método de Leonardo — observar, entender, construir, perfeccionar — aplicado al software con inteligencia artificial.",
      ruta: "nosotros.html",
      contenido,
    }),
  };
}

/* ═══════════════ LISA ═══════════════ */
function lisa() {
  const porQue = [
    ["La sonrisa que sabe", "La Gioconda sonríe como quien sabe algo que tú no. LISA también lo sabe — ya vio tus ventas, tu caja y tu planta. La diferencia: ella sí te lo dice."],
    ["Los ojos que te siguen", "Desde cualquier ángulo del Louvre, te mira. LISA ve tu empresa desde todos los ángulos a la vez — y nunca parpadea."],
    ["El sfumato", "Leonardo pintó sin bordes duros, capa sobre capa. LISA se construye igual — módulo sobre módulo — y difumina la frontera entre tú y tus sistemas: hablas, y sucede."],
    ["Discreción de museo", "500 años guardando su secreto tras un cristal. LISA guarda los tuyos: tus datos no entrenan modelos ajenos y solo abre las puertas que autorices."],
  ];

  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "LISA"]],
    titulo: "<em>LISA</em>, tu agente empresarial.",
    lead: "Leonardo tardó 16 años en su obra maestra. La nuestra se llama igual — y trabaja para ti.",
    etiquetas: ["agente_maestro", "base_de_conocimiento", "whatsapp+voz", "accesos_por_rol"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split">
      <div>
        <p class="lead">LISA es la inteligencia que ve toda tu empresa — ventas, planta, caja, gente — y te la entrega en una conversación. Aprende de tus datos y documentos, actúa con tus reglas, y responde a las personas que tú decidas, con lo que cada quien puede ver.</p>
        <div class="hero-btns" style="margin-top:1.8rem">
          <a class="btn btn-arrow" href="contacto.html">Quiero a LISA en mi empresa${flecha()}</a>
          <a class="btn btn-ghost" href="demos.html">Verla en acción</a>
        </div>
      </div>
      <div data-reveal="right" id="lisa-show">
        <div class="fono">
          <div class="fono-top">
            <span class="av">🔑</span>
            <div><b>LISA</b><small>tu agente maestro · en línea</small></div>
          </div>
          <div class="fono-chat"></div>
          <div class="fono-input"><span>Escribe a LISA…</span><span>🎤</span></div>
        </div>
        <div class="tabs" style="justify-content:center;margin-top:1.2rem">
          <button class="tab activo" type="button" data-lisa="industrial">Planta</button>
          <button class="tab" type="button" data-lisa="comercio">Comercio</button>
          <button class="tab" type="button" data-lisa="financiera">Caja</button>
          <button class="tab" type="button" data-lisa="emprendimiento">Tu negocio</button>
        </div>
        <p class="mono center" style="margin-top:.8rem;color:var(--gris-medio)" id="lisa-tit"></p>
        <p class="center muted" style="font-size:.86rem" id="lisa-baja"></p>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({
      kicker: "El nombre",
      titulo: "Por qué se llama LISA",
      lead: "Por Lisa Gherardini — la Mona Lisa. Y no es solo un homenaje: todo lo que hace especial al cuadro, lo hace especial a nuestro agente.",
    })}
    <div class="grid g4">
      ${porQue.map(([t, d], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1}</span>
        <h4>${t}</h4>
        <p>${d}</p>
      </article>`)}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Cómo trabaja", titulo: "Ve todo. Actúa con tus reglas." })}
        ${puntos([
          ["Ve todo.", "Cada módulo que construimos — ventas, planta, cobranza, documentos — alimenta su conocimiento. Es la memoria viva de tu empresa."],
          ["Habla en pasado de acción.", "No dice «deberías cobrar»: dice «ya envié el recordatorio con la liga de pago». Reporta lo que ya resolvió."],
          ["Responde a cada quien lo suyo.", "El vendedor le pregunta por sus clientes; dirección le pregunta por todo. Accesos por rol, como debe ser."],
          ["Vive donde tú vives.", "WhatsApp, voz o el panel de Da Vinci Central — tú eliges el canal."],
        ])}
      </div>
      <div data-reveal="right">
        <blockquote class="cita" style="margin-top:0">
          «La Mona Lisa guarda su secreto hace 500 años. LISA te lo cuenta en segundos.»
          <footer>el taller</footer>
        </blockquote>
        ${panelVivo({
          head: "LISA · lo que ya resolvió hoy",
          filas: [
            ["Recordatorio de pago a Grupo Anzures", "✓ enviado"],
            ["OT-441 programada (sin parar producción)", "✓ domingo"],
            ["Resurtido de anaquel pedido", "✓ llega 4:30 pm"],
          ],
          destacado: ["Tú tienes", "las llaves 🔑"],
        })}
      </div>
    </div>
  </div>
</section>

${ctaFinal({
    titulo: "Tú tienes las llaves.",
    texto: "En el diagnóstico gratuito descubrimos qué debería estar viendo LISA en tu empresa — y por dónde empezar.",
  })}`;

  return {
    ruta: "lisa.html",
    html: pagina({
      titulo: "LISA — tu agente empresarial",
      descripcion: "LISA: el agente maestro de Da Vinci IA. Ve toda tu empresa, actúa con tus reglas y te responde en una conversación. Tú tienes las llaves.",
      ruta: "lisa.html",
      contenido,
    }),
  };
}

/* ═══════════════ TECNOLOGÍA ═══════════════ */
function tecnologia() {
  const piezas = [
    ["Agentes autónomos.", "Programas que perciben (leen un mensaje, un documento, un dato), deciden con contexto y actúan (responden, registran, avisan). Son los aprendices incansables del taller."],
    ["Modelos de lenguaje (LLMs).", "Usamos los mejores modelos disponibles de cada generación — y los cambiamos cuando aparece uno mejor. Tu sistema no se casa con un proveedor."],
    ["RAG — tu conocimiento, no el de internet.", "Los agentes responden consultando TUS datos: precios, inventario, políticas, historial. Por eso no inventan."],
    ["Visión y voz.", "Leen facturas escaneadas, fotos de anaqueles y notas de remisión; hablan por teléfono con voz natural."],
    ["Integraciones API.", "Nos conectamos a tu ERP, CRM, WhatsApp Business, bancos y hasta a tus Excel — sin pedirte que tires nada."],
    ["Infraestructura en la nube.", "Respaldos automáticos, cifrado en tránsito y en reposo, y accesos por rol. Ver más en <a class=\"u-link\" href=\"seguridad.html\">seguridad</a>."],
  ];

  const contenido = html`
${pageHero({
    migaItems: [["index.html", "Inicio"], [null, "Tecnología"]],
    titulo: "El taller <em>por dentro</em>",
    lead: "La tecnología cambia cada mes; el método permanece. Esto es lo que usamos hoy — explicado sin humo.",
    etiquetas: ["agentes", "llm", "rag", "visión", "voz", "api"],
  })}

<section class="sec" style="padding-top:0">
  <div class="wrap">
    <div class="split-2-3 split" style="align-items:start">
      <div>
        ${secHead({ kicker: "Las piezas del taller", titulo: "Seis piezas, una obra." })}
        ${puntos(piezas, { numerado: true })}
      </div>
      <div style="display:grid;gap:1.2rem;position:sticky;top:110px">
        <div class="sketch" data-reveal="right" style="color:var(--naranja);padding:1.6rem">
          ${bocetoUI()}
        </div>
        <div class="card" data-reveal="right" style="background:var(--tinta-tech);color:var(--blanco-calido);border-color:var(--linea-oscura)">
          <span class="kicker">Nuestra regla de oro</span>
          <h4 style="color:var(--blanco-calido)">La herramienta se elige al final, no al principio.</h4>
          <p style="color:var(--texto-oscuro)">Primero el mapeo de tu proceso (el códice), luego la pieza de tecnología que lo resuelve (el código). Cuando alguien te venda la herramienta antes de entender tu proceso — sospecha.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Sin casarte con nadie", titulo: "Tu sistema no depende de una moda.", centrado: true })}
    ${stats([["0", "proveedores que te amarran"], ["24/7", "agentes trabajando sin turno nocturno"], ["100%", "respuestas basadas en TUS datos"]])}
  </div>
</section>

${ctaFinal()}`;

  return {
    ruta: "tecnologia.html",
    html: pagina({
      titulo: "Tecnología",
      descripcion: "La tecnología detrás de Da Vinci IA: agentes autónomos, modelos de lenguaje, RAG, visión, voz e integraciones — explicada sin humo.",
      ruta: "tecnologia.html",
      contenido,
    }),
  };
}

export function paginas() {
  return [central(), demos(), metodo(), nosotros(), lisa(), tecnologia()];
}
