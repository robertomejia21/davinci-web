/* ============================================================
   Layout y componentes compartidos
   ============================================================ */

export const SITIO = {
  nombre: "Da Vinci IA",
  dominio: "da-vinci.ai",
  url: "https://da-vinci.ai",
  slogan: "Inteligencia operativa para tu empresa",
  descripcion: "Software a la medida con IA: automatizaciones, agentes y LISA, tu agente empresarial.",
  lema: "Observar, entender, construir, perfeccionar.",
  firma: "© 2026 Da Vinci IA · da-vinci.ai · Tú tienes las llaves.",
  whatsapp: "https://wa.me/?text=" + encodeURIComponent("Hola, quiero agendar un diagnóstico gratuito con Da Vinci IA"),
};

/* --- helpers --- */
export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const html = (strings, ...values) =>
  strings.reduce((out, s, i) => {
    const v = values[i - 1];
    const t = Array.isArray(v) ? v.join("") : v == null || v === false ? "" : v;
    return out + t + s;
  });

/* --- navegación --- */
export const MODULOS_NAV = [
  ["modulo-automatizacion.html", "Automatización de procesos", "Lo repetitivo, en piloto automático."],
  ["modulo-agentes-ia.html", "Agentes de IA — chat y voz", "Tu mejor vendedor no duerme."],
  ["modulo-copilots.html", "Copilots por rol", "Un experto de IA al lado de cada puesto."],
  ["modulo-documentos.html", "Documentos inteligentes", "Papeles que se leen solos."],
  ["modulo-prediccion.html", "Análisis predictivo", "Decide con lo que viene, no con lo que pasó."],
  ["modulo-integraciones.html", "Integraciones con lo tuyo", "No tires nada: conéctalo."],
];

export const INDUSTRIAS_NAV = [
  ["industria-comercio.html", "Comercio y distribución", "Del pedido a la entrega, sin puntos ciegos."],
  ["industria-restaurantes.html", "Restaurantes y alimentos", "Más mesas atendidas, menos mermas."],
  ["industria-salud.html", "Clínicas y salud", "Agenda llena, expediente al día."],
  ["industria-manufactura.html", "Manufactura", "La planta visible, la merma medida."],
  ["industria-servicios.html", "Servicios profesionales", "Menos administración, más horas facturables."],
  ["industria-construccion.html", "Construcción e inmobiliaria", "Obras a tiempo, números a la vista."],
  ["industria-logistica.html", "Logística y transporte", "Cada unidad, cada ruta, cada peso — visible."],
  ["industria-supermercados.html", "Supermercados y autoservicio", "Cada anaquel, cada caja, cada merma."],
  ["industria-comercializadora.html", "Comercializadoras", "Compra bien, vende mejor, cobra a tiempo."],
];

export const DEMOS_NAV = [
  ["demos.html", "Sala de demos", "Voz real, agentes y WhatsApp en vivo."],
  ["demo-industrial.html", "Área industrial", "Maquila, líneas, calidad y proveedores."],
  ["demo-comercio.html", "Comercio y servicios", "Súper, logística, restaurante, comercializadora."],
  ["demo-financiera.html", "Financiera y fiscal", "Números que se cuidan solos."],
  ["demo-emprendimiento.html", "Emprendimiento", "Tu primer sistema, a precio de arranque."],
  ["app-planta.html", "Planta Da Vinci", "La app insignia: SCADA con cerebro."],
];

export const MAS_NAV = [
  ["lisa.html", "LISA 🔑", "Tu agente empresarial maestro."],
  ["metodo.html", "El Método Da Vinci", "Boceto → prueba → ajuste → obra."],
  ["tecnologia.html", "Tecnología", "El taller por dentro, sin humo."],
  ["precios.html", "La inversión", "Cuánto cuesta y cómo se decide."],
  ["nosotros.html", "Nosotros", "Por qué elegimos su nombre."],
  ["blog.html", "El cuaderno", "Ideas claras sobre IA aplicada."],
  ["casos.html", "Casos y resultados", "Que hablen los números."],
  ["seguridad.html", "Seguridad y datos", "Tus datos son tuyos. Punto."],
];

const megaLinks = (items) =>
  items.map(([href, t, d]) => html`
    <a class="mega-link" href="${href}"><strong>${t}</strong><span>${d}</span></a>`).join("");

/* --- header --- */
function header(activo) {
  const item = (href, texto) => html`
    <li class="nav-item"><a class="nav-link" href="${href}" ${activo === href ? 'aria-current="page"' : ""}>${texto}</a></li>`;

  const drop = (label, items, pie) => html`
    <li class="nav-item">
      <a class="nav-link" href="${items[0][0]}">${label}
        <svg class="caret" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      </a>
      <div class="mega">
        <div class="mega-grid">${megaLinks(items)}</div>
        ${pie ? html`<div class="mega-foot"><span class="eyebrow">${pie[0]}</span><a class="link-arrow" href="${pie[1]}">${pie[2]} →</a></div>` : ""}
      </div>
    </li>`;

  return html`
<a class="sr-only" href="#main">Saltar al contenido</a>
<div class="progreso" aria-hidden="true"></div>
<header class="header">
  <div class="header-in">
    <div class="header-caja">
      <a class="logo" href="index.html" aria-label="Da Vinci IA — inicio">
        <img src="assets/img/logo-davinci.png" alt="" width="34" height="30">
        <span class="logo-txt">Da Vinci<b> IA</b></span>
      </a>
      <nav aria-label="Principal">
        <ul class="nav">
          ${item("central.html", "Da Vinci Central")}
          ${drop("Demos", DEMOS_NAV, ["4 áreas · plataformas en vivo", "demos.html", "Entrar a la sala"])}
          ${drop("Módulos", MODULOS_NAV, ["6 módulos · se integran o van solos", "modulos.html", "Ver todos"])}
          ${drop("Industrias", INDUSTRIAS_NAV, ["9 industrias mapeadas", "industrias.html", "Ver todas"])}
          ${drop("Más", MAS_NAV, ["El taller", "contacto.html", "Hablemos"])}
        </ul>
      </nav>
      <div class="header-cta">
        <a class="btn btn-sm btn-arrow" href="contacto.html">Agenda tu diagnóstico
          <svg class="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <button class="burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="drawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</header>

<div class="drawer" id="drawer">
  <nav aria-label="Menú móvil">
    <div class="drawer-grupo"><a class="drawer-tit" href="central.html">Da Vinci Central</a></div>
    ${[["Demos", DEMOS_NAV], ["Módulos", MODULOS_NAV], ["Industrias", INDUSTRIAS_NAV], ["Más", MAS_NAV]]
      .map(([label, items]) => html`
      <div class="drawer-grupo">
        <button class="drawer-tit" type="button">${label}<span class="mas">+</span></button>
        <div class="drawer-sub"><div>${items.map(([h, t]) => html`<a href="${h}">${t}</a>`)}</div></div>
      </div>`)}
    <div class="drawer-grupo"><a class="drawer-tit" href="diagnostico.html">Diagnóstico gratuito</a></div>
    <a class="btn btn-arrow" href="contacto.html">Agenda tu diagnóstico
      <svg class="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </nav>
</div>`;
}

/* --- footer --- */
function footer() {
  const col = (titulo, links) => html`
    <div class="footer-col">
      <h5>${titulo}</h5>
      ${links.map(([h, t]) => html`<a href="${h}">${t}</a>`)}
    </div>`;

  return html`
<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-marca">
        <a class="logo" href="index.html">
          <img src="assets/img/logo-davinci.png" alt="" width="38" height="34">
          <span class="logo-txt">Da Vinci<b> IA</b></span>
        </a>
        <p class="serif" style="font-size:1.15rem;color:var(--blanco-calido)">${SITIO.lema}</p>
        <p class="mono" style="color:var(--naranja);font-size:.66rem">Inteligencia operativa · MX</p>
        <a class="btn btn-arrow" href="contacto.html" style="margin-top:1.2rem">Agenda tu diagnóstico
          <svg class="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <div class="compartir" style="margin-top:1.6rem">
          <a class="tag" id="compartir-wa" href="#" target="_blank" rel="noopener">📲 Mándasela a tu socio</a>
          <button class="tag" id="copiar-link" type="button">🔗 Copiar link</button>
        </div>
      </div>
      <div class="footer-cols">
        ${col("Explora", [
          ["lisa.html", "LISA 🔑"], ["central.html", "Da Vinci Central"], ["demos.html", "Sala de demos"],
          ["metodo.html", "Método"], ["tecnologia.html", "Tecnología"], ["precios.html", "Inversión"],
          ["nosotros.html", "Nosotros"], ["blog.html", "Blog"],
        ])}
        ${col("Soluciones", [
          ["modulos.html", "Los 6 módulos"], ["industrias.html", "9 industrias"],
          ["planta.html", "Planta y transformación"], ["finanzas.html", "Contabilidad · Finanzas · Fiscal"],
          ["app-planta.html", "Planta Da Vinci (app)"], ["diagnostico.html", "Diagnóstico gratuito"],
        ])}
        ${col("Confianza", [
          ["seguridad.html", "Seguridad y datos"], ["faq.html", "Preguntas frecuentes"],
          ["casos.html", "Casos"], ["privacidad.html", "Aviso de privacidad"], ["contacto.html", "Contacto"],
        ])}
      </div>
    </div>
    <div class="footer-bar">
      <span>Taller abierto · CDMX <b id="reloj-cdmx">—:—</b></span>
      <span id="saludo"></span>
      <span>${SITIO.firma}</span>
    </div>
  </div>
  <div class="footer-wordmark" aria-hidden="true">DA VINCI IA</div>
</footer>

<a class="wa-float" href="${SITIO.whatsapp}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1.2 1.3-1.1 3 .3 5 .8 1.1 2.6 3.7 6 5.1 2.3.9 2.8.8 3.4.7.8-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1113.3 3.2 8.1 8.1 0 01-6.1 2.7z"/></svg>
</a>

<div class="barra-sticky" role="complementary">
  <p>🔑 <b>Diagnóstico gratuito:</b> mapeamos tu operación y te decimos dónde hay retorno.</p>
  <a class="btn btn-sm" href="contacto.html">Agendar ahora</a>
  <button class="cerrar" type="button" aria-label="Cerrar aviso">✕</button>
</div>

<div class="modal" id="modal-salida" role="dialog" aria-modal="true" aria-labelledby="modal-tit">
  <div class="modal-caja">
    <button class="modal-cerrar" type="button" data-cerrar-modal aria-label="Cerrar">✕</button>
    <span class="kicker" style="justify-content:center">Antes de irte…</span>
    <h3 id="modal-tit">La Mona Lisa guarda su secreto hace 500 años.</h3>
    <p><b>LISA te cuenta el de tu empresa en un diagnóstico gratis.</b></p>
    <a class="btn" href="contacto.html">Agendar mi diagnóstico</a>
    <button class="no" type="button" data-cerrar-modal>Hoy no, gracias</button>
  </div>
</div>`;
}

/* --- documento --- */
export function pagina({ titulo, descripcion, ruta, clase = "", jsonld = "", contenido }) {
  const t = titulo.includes("Da Vinci IA") ? titulo : `${titulo} — Da Vinci IA`;
  return `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<script>document.documentElement.className+=" js";</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(t)}</title>
<meta name="description" content="${esc(descripcion || SITIO.descripcion)}">
<meta name="theme-color" content="#faf6ef">
<link rel="canonical" href="${SITIO.url}/${ruta}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="Da Vinci IA">
<meta property="og:title" content="${esc(t)}">
<meta property="og:description" content="${esc(descripcion || SITIO.descripcion)}">
<meta property="og:url" content="${SITIO.url}/${ruta}">
<meta property="og:image" content="${SITIO.url}/assets/img/logo-davinci.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/img/logo-davinci.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/logo-davinci.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=IBM+Plex+Mono:wght@400;500;600&family=Marcellus&display=swap">
<link rel="stylesheet" href="assets/css/site.css">
${jsonld}
</head>
<body class="${clase}">
${header(ruta)}
<main id="main">
${contenido}
</main>
${footer()}
<script src="assets/js/site.js" defer></script>
</body>
</html>`;
}

/* ============================================================
   Componentes reutilizables
   ============================================================ */

export const flecha = (size = 13) => html`
  <svg class="arrow" width="${size}" height="${size}" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H4.5M11 3v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const btnCta = (texto = "Agenda tu diagnóstico gratuito", href = "contacto.html", clase = "") => html`
  <a class="btn btn-arrow ${clase}" href="${href}">${texto}${flecha()}</a>`;

export const miga = (items) => html`
  <nav class="miga" aria-label="Ruta">
    ${items.map(([h, t], i) => html`${i ? '<span>/</span>' : ""}${h ? html`<a href="${h}">${t}</a>` : html`<b>${t}</b>`}`)}
  </nav>`;

export const tags = (lista) => html`
  <div class="tags">${lista.map((t) => html`<span class="tag">${t}</span>`)}</div>`;

/* hero de página interior */
export function pageHero({ migaItems, titulo, lead, etiquetas, extra = "", oscuro = false }) {
  return html`
<section class="phero ${oscuro ? "phero-oscuro" : ""}">
  <div class="codice" aria-hidden="true"></div>
  <div class="wrap">
    ${migaItems ? miga(migaItems) : ""}
    <h1 data-reveal>${titulo}</h1>
    ${lead ? html`<p class="lead" data-reveal>${lead}</p>` : ""}
    ${etiquetas ? html`<div data-reveal>${tags(etiquetas)}</div>` : ""}
    ${extra}
  </div>
</section>`;
}

/* panel oscuro "en vivo" */
export function panelVivo({ head, filas, destacado }) {
  return html`
<div class="panel-oscuro" data-reveal="zoom">
  <div class="panel-head"><span>${head}</span><span class="badge"><i class="dot"></i>en vivo</span></div>
  ${filas.map(([r, v]) => html`<div class="panel-row"><span class="r">${r}</span><span class="v">${v}</span></div>`)}
  ${destacado ? html`<div class="panel-row destacado"><span class="r">${destacado[0]}</span><span class="v">${destacado[1]}</span></div>` : ""}
</div>`;
}

/* dolor → cura */
export function dolorCura(items) {
  return html`
<div class="dc">
  ${items.map(([dolor, lbl, cura]) => html`
  <article class="dc-item" data-reveal>
    <div class="dc-dolor"><span class="lbl">El dolor</span><h4>${dolor}</h4></div>
    <div class="dc-cura"><span class="lbl">La cura · ${lbl}</span><p>${cura}</p></div>
  </article>`)}
</div>`;
}

/* lista de puntos con número o icono */
export function puntos(items, { numerado = false } = {}) {
  return html`
<div class="puntos">
  ${items.map(([t, d], i) => html`
  <div class="punto" data-reveal>
    <span class="ico">${numerado ? String(i + 1).padStart(2, "0") : "✳"}</span>
    <span><strong>${t}</strong><span>${d}</span></span>
  </div>`)}
</div>`;
}

/* stats */
export function stats(items) {
  return html`
<div class="stats" data-reveal>
  ${items.map(([n, d]) => html`<div class="stat"><b>${n}</b><span>${d}</span></div>`)}
</div>`;
}

/* bloque CTA final naranja */
export function ctaFinal({
  titulo = "¿Lo quieres en tu empresa?",
  texto = "El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.",
  boton = "Agenda tu diagnóstico gratuito",
  href = "contacto.html",
} = {}) {
  return html`
<section class="sec">
  <div class="cta-bloque" data-reveal="zoom">
    <div class="cta-grid">
      <div>
        <span class="kicker" style="color:rgba(255,255,255,.75)">Diagnóstico gratuito</span>
        <h2>${titulo}</h2>
        <p>${texto}</p>
      </div>
      <div><a class="btn btn-arrow" href="${href}">${boton}${flecha()}</a></div>
    </div>
    <div class="cta-marca" aria-hidden="true">DA VINCI</div>
  </div>
</section>`;
}

/* franja del programa fundador */
export const fundador = () => html`
<div class="fundador" data-reveal>
  <div>
    <span class="badge"><i class="dot"></i>Programa fundador</span>
    <b>3 proyectos fundadores con condiciones especiales</b>
    <p>A cambio de documentar tu caso de éxito. Los primeros resultados de Da Vinci IA se construyen con quien se anima primero.</p>
  </div>
  <a class="btn btn-oscuro btn-arrow" href="contacto.html">Quiero mi lugar${flecha()}</a>
</div>`;

/* encabezado de sección */
export const secHead = ({ kicker, titulo, lead, centrado = false, link }) => html`
<div class="sec-head ${centrado ? "center" : ""}" data-reveal>
  ${kicker ? html`<span class="kicker" ${centrado ? 'style="justify-content:center"' : ""}>${kicker}</span>` : ""}
  <h2>${titulo}</h2>
  ${lead ? html`<p class="lead" ${centrado ? 'style="margin-inline:auto"' : ""}>${lead}</p>` : ""}
  ${link ? html`<a class="link-arrow" href="${link[0]}" style="margin-top:1rem">${link[1]} →</a>` : ""}
</div>`;

/* FAQ */
export function faqBloque(items, { multi = false, buscador = false } = {}) {
  return html`
${buscador ? html`
<div class="buscador" data-reveal>
  <span aria-hidden="true">🔎</span>
  <input id="faq-buscar" type="search" placeholder="Busca tu duda… (ej. datos, costo, tiempo)" aria-label="Buscar en preguntas frecuentes">
</div>` : ""}
<div class="faq" ${multi ? 'data-multi="1"' : ""}>
  ${items.map(([q, a], i) => html`
  <div class="faq-item" data-reveal>
    <button class="faq-q" type="button" aria-expanded="false">${q}<span class="mas" aria-hidden="true">+</span></button>
    <div class="faq-a"><div><p>${a}</p></div></div>
  </div>`)}
</div>
${buscador ? html`<p id="faq-vacio" class="muted" hidden style="margin-top:1.4rem">Sin resultados para tu búsqueda — escríbenos y lo resolvemos en persona.</p>` : ""}`;
}

/* tarjeta-enlace numerada */
export const cardLink = (href, num, titulo, texto, cta = "Ver más") => html`
<a class="card" href="${href}" data-reveal>
  ${num ? html`<span class="card-num">${num}</span>` : ""}
  <h3>${titulo}</h3>
  <p>${texto}</p>
  <span class="link-arrow">${cta} →</span>
</a>`;

/* JSON-LD */
export const jsonld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

export const orgLd = jsonld({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITIO.nombre,
  url: SITIO.url,
  slogan: SITIO.slogan,
  description: SITIO.descripcion,
  logo: SITIO.url + "/assets/img/logo-davinci.png",
  address: { "@type": "PostalAddress", addressLocality: "Ciudad de México", addressCountry: "MX" },
});
