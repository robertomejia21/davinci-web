import { html, pagina, flecha, MODULOS_NAV, INDUSTRIAS_NAV } from "../lib/layout.mjs";
import { espiral } from "../lib/arte.mjs";

function noEncontrado() {
  const contenido = html`
<section class="hero">
  <div class="hero-panel dark" style="min-height:min(72vh,620px)">
    <canvas class="hero-canvas" id="hero-canvas" aria-hidden="true"></canvas>
    <div class="hero-grid">
      <div>
        <span class="kicker">Error 404 · página no encontrada</span>
        <h1 class="hero-tit">Esta página se quedó <em>en el códice</em>.</h1>
        <p class="hero-sub">Leonardo dejó muchos bocetos sin construir. Este es uno de ellos. Te llevamos de vuelta al taller.</p>
        <div class="hero-btns">
          <a class="btn btn-arrow" href="index.html">Volver al inicio${flecha()}</a>
          <a class="btn btn-ghost" href="demos.html">Ver las demos</a>
        </div>
      </div>
      <div style="color:var(--naranja);opacity:.5" data-reveal="zoom">${espiral()}</div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        <span class="kicker">Quizá buscabas</span>
        <div class="grid g2">
          ${[["central.html", "Da Vinci Central"], ["metodo.html", "El Método Da Vinci"], ["lisa.html", "LISA, tu agente"], ["precios.html", "La inversión"]]
            .map(([h, t]) => html`<a class="card" href="${h}" style="padding:1rem 1.2rem"><h4 style="font-size:1.05rem;margin:0">${t}</h4></a>`)}
        </div>
      </div>
      <div>
        <span class="kicker">Directo al grano</span>
        <div class="card">
          <h3>¿Buscabas un módulo o tu industria?</h3>
          <div class="tags" style="margin-top:1rem">
            ${MODULOS_NAV.slice(0, 3).map(([h, t]) => html`<a class="tag" href="${h}">${t}</a>`)}
            ${INDUSTRIAS_NAV.slice(0, 3).map(([h, t]) => html`<a class="tag" href="${h}">${t}</a>`)}
          </div>
          <a class="link-arrow" href="contacto.html" style="margin-top:1.2rem">O agenda tu diagnóstico →</a>
        </div>
      </div>
    </div>
  </div>
</section>`;

  return {
    ruta: "404.html",
    html: pagina({
      titulo: "Página no encontrada",
      descripcion: "La página que buscas no existe. Vuelve al taller de Da Vinci IA.",
      ruta: "404.html",
      contenido,
    }),
  };
}

export function paginas() {
  return [noEncontrado()];
}
