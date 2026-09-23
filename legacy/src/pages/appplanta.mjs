import { html, pagina, secHead, ctaFinal, miga, flecha } from "../lib/layout.mjs";

const tabla = (cabeza, filas) => html`
<div class="tabla-wrap" style="background:transparent;border-color:var(--linea-oscura)">
  <table class="tech">
    <thead><tr>${cabeza.map((c) => html`<th>${c}</th>`)}</tr></thead>
    <tbody>${filas.map((f) => html`<tr>${f.map((c) => html`<td>${c}</td>`)}</tr>`)}</tbody>
  </table>
</div>`;

function appPlanta() {
  const contenido = html`
<section class="phero phero-oscuro" style="padding-bottom:2rem">
  <div class="wrap">
    ${miga([["demos.html", "Sala de demos"], ["demo-industrial.html", "Industrial"], [null, "Planta Da Vinci"]])}
    <div style="display:flex;flex-wrap:wrap;gap:1.4rem;align-items:end;justify-content:space-between">
      <div>
        <span class="kicker">⚙ SCADA con cerebro</span>
        <h1 style="font-size:clamp(2.1rem,4.6vw,3.6rem);margin-bottom:.5rem">Planta Da Vinci</h1>
        <p class="lead">Líneas en vivo, OEE, visión artificial, calidad y mantenimiento predictivo — con agentes que diagnostican y actúan. Demo con datos simulados.</p>
      </div>
      <a class="btn btn-arrow" href="contacto.html">Quiero esto en mi planta${flecha()}</a>
    </div>
  </div>
</section>

<!-- TABLERO -->
<section class="sec" style="padding-top:0" id="app-planta">
  <div class="wrap">
    <div class="app-shell" data-reveal="zoom">
      <div class="app-bar">
        <span>Tablero · turno A · 14:38</span>
        <span class="badge"><i class="dot"></i>simulación</span>
      </div>
      <div class="app-kpis">
        <div class="app-kpi"><small>OEE global</small><b class="naranja num-anim" data-num="84.2" data-dec="1" data-post="%">84.2%</b></div>
        <div class="app-kpi"><small>Piezas del turno</small><b class="num-anim" data-num="12408">12,408</b></div>
        <div class="app-kpi"><small>Rechazo</small><b class="num-anim" data-num="0.9" data-dec="1" data-post="%">0.9%</b></div>
        <div class="app-kpi"><small>Paros hoy</small><b>2 · 14 min</b></div>
      </div>
      <div class="app-body">
        <div class="split" style="gap:1.2rem;align-items:start">
          <div>
            <h4 class="mono" style="color:var(--naranja);margin-bottom:.9rem">Líneas en vivo</h4>
            <div style="display:grid;gap:.7rem">
              <div class="linea-viva">
                <div class="lv-top"><span>L1 · ENVASADO</span><span class="lv-estado">RUN 78%</span></div>
                <div class="medidor"><div class="medidor-bar"><i style="width:78%"></i></div><div class="medidor-top"><span>Agua 1L PET</span><span data-pph="412">412 pph</span></div></div>
              </div>
              <div class="linea-viva" id="linea-l2">
                <div class="lv-top"><span>L2 · ETIQUETADO</span><span class="lv-estado">RUN 91%</span></div>
                <div class="medidor"><div class="medidor-bar"><i style="width:91%"></i></div><div class="medidor-top"><span>Refresco 600ml</span><span data-pph="388">388 pph</span></div></div>
              </div>
              <div class="linea-viva">
                <div class="lv-top"><span>L3 · EMPAQUE</span><span class="lv-estado">RUN 64%</span></div>
                <div class="medidor"><div class="medidor-bar"><i style="width:64%"></i></div><div class="medidor-top"><span>Caja 12 pzas</span><span data-pph="301">301 pph</span></div></div>
              </div>
            </div>
            <button class="btn btn-ghost btn-sm" id="sim-paro" type="button" style="margin-top:1.1rem">⚠ Simular paro en L2</button>
          </div>
          <div>
            <h4 class="mono" style="color:var(--naranja);margin-bottom:.9rem">Feed de agentes</h4>
            <div class="feed" style="max-height:300px">
              <div class="feed-item"><span class="ag">VIGÍA</span><span>turno A iniciado · 3 líneas corriendo · OEE 84.2%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LÍNEAS -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Líneas", titulo: "Detalle por línea" })}
    <div class="app-shell" data-reveal>
      <div class="app-bar"><span>Clic en el tablero para simular eventos</span><span>turno A</span></div>
      <div class="app-body">
        ${tabla(
          ["Línea", "Producto", "Meta turno", "Avance", "Velocidad", "Microparos"],
          [
            ["L1 ENVASADO", "Agua 1L PET", "18,000", "<b>14,120 · 78%</b>", "412 pph", "3 · 4 min"],
            ["L2 ETIQUETADO", "Refresco 600ml", "16,500", "<b>15,010 · 91%</b>", "388 pph", "1 · 2 min"],
            ["L3 EMPAQUE", "Caja 12 pzas", "9,000", "<b>5,760 · 64%</b>", "301 pph", "6 · 11 min"],
          ]
        )}
        <div class="panel-oscuro" style="margin-top:1.2rem;border-color:rgba(245,134,52,.4)">
          <div class="panel-head"><span>Análisis de LISA</span><span class="badge"><i class="dot"></i>ahora</span></div>
          <p style="font-size:.92rem;color:rgba(255,253,248,.85);margin:0">L3 pierde ritmo por microparos del formador de cajas (6 hoy). <b class="naranja">Patrón:</b> cartón del proveedor B con 2.1% más humedad. <b class="naranja">Sugerencia:</b> lote del proveedor A para el turno B + reclamo automático al proveedor B.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VISIÓN -->
<section class="sec">
  <div class="wrap">
    ${secHead({ kicker: "Visión", titulo: "Cámaras de línea", lead: "YOLO + OpenCV en la versión real." })}
    <div class="grid g4" style="margin-bottom:1.4rem">
      ${[
        ["CAM-01 · conteo L1", "pieza ✓", true],
        ["CAM-02 · defectos L2", "tapa floja ✗", false],
        ["CAM-03 · EPP zona A", "casco ✓ chaleco ✓", true],
        ["CAM-04 · andén", "tarima 14/40", true],
      ].map(([t, d, ok]) => html`
      <div class="panel-oscuro" data-reveal style="padding:1rem">
        <div class="panel-head" style="padding-bottom:.6rem;margin-bottom:.6rem"><span>${t}</span><span class="badge"><i class="dot ${ok ? "dot-verde" : ""}"></i></span></div>
        <div style="aspect-ratio:16/10;border-radius:8px;background:linear-gradient(135deg,#232326,#1a1a1d);border:1px solid var(--linea-oscura);display:grid;place-items:center;position:relative;overflow:hidden">
          <div class="codice" style="opacity:.6"></div>
          <span class="mono" style="color:${ok ? "var(--verde-wa)" : "var(--naranja)"};font-size:.7rem;position:relative">${d}</span>
        </div>
      </div>`)}
    </div>
    <div class="app-shell" data-reveal>
      <div class="app-bar"><span>Detecciones del turno</span><span>3 eventos</span></div>
      <div class="app-body">
        ${tabla(
          ["Hora", "Cámara", "Evento", "Acción del agente"],
          [
            ["13:42", "CAM-02", "<b>tapa floja</b>", "pieza desviada a retrabajo"],
            ["12:18", "CAM-03", "chaleco ausente 9 seg", "alerta al supervisor de zona"],
            ["11:03", "CAM-01", "conteo validado vs PLC", "diferencia 0.2% · ok"],
          ]
        )}
      </div>
    </div>
  </div>
</section>

<!-- CALIDAD + MANTENIMIENTO -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Calidad y mantenimiento", titulo: "Trazabilidad completa y fallas anticipadas." })}
    <div class="grid" style="gap:1.4rem">
      <div class="app-shell" data-reveal>
        <div class="app-bar"><span>Lotes del día · trazabilidad</span><span>HACCP al día</span></div>
        <div class="app-body">
          ${tabla(
            ["Lote", "Producto", "Muestreo", "Resultado", "Liberó"],
            [
              ["A-2408-113", "Agua 1L", "32/32 ✓", "<b>LIBERADO</b>", "M. Salas 12:40"],
              ["A-2408-114", "Refresco 600", "28/32", "EN ANÁLISIS", "—"],
              ["A-2408-112", "Caja 12", "30/30 ✓", "<b>LIBERADO</b>", "M. Salas 09:15"],
            ]
          )}
          <div class="feed" style="margin-top:1rem;max-height:none">
            <div class="feed-item"><span class="ag">ESCRIBA</span><span>certificado de calidad del lote A-2408-113 generado y enviado al cliente por correo. Expediente HACCP actualizado.</span></div>
          </div>
        </div>
      </div>

      <div class="app-shell" data-reveal>
        <div class="app-bar"><span>Salud de equipos · predictivo</span><span>3 equipos</span></div>
        <div class="app-body">
          ${tabla(
            ["Equipo", "Horas", "Vibración", "Pronóstico LISA", "OT"],
            [
              ["Llenadora L1", "1,240", "normal", "sin riesgo 30 días", "—"],
              ["Etiquetadora L2", "2,980", "<b>+18% patrón mordaza</b>", "falla probable en 6-9 días", "OT-441 programada DOM"],
              ["Formadora L3", "3,410", "normal", "cuchilla al 71% de vida", "OT-438 pendiente"],
            ]
          )}
          <div class="feed" style="margin-top:1rem;max-height:none">
            <div class="feed-item"><span class="ag">MECÁNICO</span><span>refacción de mordaza pedida al proveedor (llega jueves). El paro se hará en domingo sin producción: costo de paro evitado ≈ <b>$84,000</b>.</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CHAT DE LISA -->
<section class="sec">
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead({ kicker: "Pregúntale a la planta", titulo: "LISA responde con los datos del turno." })}
        <p class="lead">No es un chatbot pegado al tablero: es el mismo cerebro que ve las líneas, la calidad y el mantenimiento — y que ya actuó antes de que preguntaras.</p>
      </div>
      <div class="chat" id="planta-chat" data-reveal="right">
        <div class="chat-top">
          <span class="av">🔑</span>
          <div><b>LISA · planta</b><small>turno A · en línea</small></div>
        </div>
        <div class="chat-cuerpo">
          <div class="burbuja bot">Estoy viendo tus tres líneas. Pregúntame lo que quieras del turno:</div>
        </div>
        <div class="chat-sugerencias">
          <button class="sug" type="button" data-p="turno">¿Cómo va el turno?</button>
          <button class="sug" type="button" data-p="paro">¿Qué pasó en L2?</button>
          <button class="sug" type="button" data-p="costo">¿Cuánto me cuestan los paros?</button>
          <button class="sug" type="button" data-p="lisa">¿Quién eres, LISA?</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- REPORTES -->
<section class="sec sec-hondo">
  <div class="wrap">
    ${secHead({ kicker: "Reportes", titulo: "Reportes que se arman solos." })}
    <div class="grid g3">
      ${[
        ["Cierre de turno", "OEE, paros con causa, piezas y rechazo. Listo 5 min después del turno.", "📲 Enviarme por WhatsApp"],
        ["Semanal dirección", "Tendencias, costo de paros, calidad y compras sugeridas.", "📲 Enviarme por WhatsApp"],
        ["Reclamo a proveedor", "Evidencia de visión + lotes afectados, redactado y listo para enviar.", "📄 Ver ejemplo"],
      ].map(([t, d, cta], i) => html`
      <article class="card" data-reveal>
        <span class="card-num">0${i + 1}</span>
        <h4>${t}</h4>
        <p>${d}</p>
        <a class="link-arrow" href="contacto.html">${cta} →</a>
      </article>`)}
    </div>
    <p class="muted" style="margin-top:1.6rem;font-size:.9rem">Demo con datos simulados · La versión real se construye sobre visión YOLO/OpenCV, señales de piso (Modbus/OPC-UA) y agentes Da Vinci · <a class="u-link" href="contacto.html">quiero esto en mi planta →</a></p>
  </div>
</section>

${ctaFinal({
    titulo: "¿Y si tu planta se viera a sí misma?",
    texto: "En el diagnóstico gratuito mapeamos una línea y te mostramos este tablero con tus productos, tus paros y tus lotes.",
  })}`;

  return {
    ruta: "app-planta.html",
    html: pagina({
      titulo: "Planta Da Vinci — SCADA con cerebro",
      descripcion: "Planta Da Vinci: líneas en vivo, OEE, visión artificial, calidad y mantenimiento predictivo con agentes de IA. Demo interactiva.",
      ruta: "app-planta.html",
      contenido,
    }),
  };
}

export function paginas() {
  return [appPlanta()];
}
