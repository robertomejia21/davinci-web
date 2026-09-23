/* ============================================================
   Da Vinci IA — comportamiento del sitio
   Vanilla JS, sin dependencias. ~13 KB sin comprimir.
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var esperar = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  /* ---------- 1. Header ---------- */
  function header() {
    var h = $(".header");
    if (!h) return;
    var ultimo = 0;
    var onScroll = function () {
      var y = window.scrollY;
      h.classList.toggle("scrolled", y > 24);
      if (!document.body.classList.contains("menu-open")) {
        h.classList.toggle("oculto", y > 420 && y > ultimo);
      }
      ultimo = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var burger = $(".burger");
    if (burger) {
      burger.addEventListener("click", function () {
        var abierto = document.body.classList.toggle("menu-open");
        burger.setAttribute("aria-expanded", String(abierto));
        h.classList.remove("oculto");
      });
    }
    $$(".drawer-tit").forEach(function (b) {
      b.addEventListener("click", function () {
        var g = b.closest(".drawer-grupo");
        var abierto = g.classList.contains("abierto");
        $$(".drawer-grupo").forEach(function (o) { o.classList.remove("abierto"); });
        g.classList.toggle("abierto", !abierto);
      });
    });
    $$(".drawer a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        if (burger) burger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.body.classList.remove("menu-open");
        var m = $(".modal.visible");
        if (m) m.classList.remove("visible");
      }
    });
  }

  /* ---------- 2. Barra de progreso ---------- */
  function progreso() {
    var p = $(".progreso");
    if (!p) return;
    var tick = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      p.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    };
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    tick();
  }

  /* ---------- 3. Reveal al hacer scroll ---------- */
  function reveal() {
    var els = $$("[data-reveal]");
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("visto"); });
      return;
    }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var grupo = el.parentElement ? $$("[data-reveal]", el.parentElement).indexOf(el) : 0;
        if (!el.style.getPropertyValue("--d") && grupo > 0) {
          el.style.setProperty("--d", Math.min(grupo, 6) * 85 + "ms");
        }
        el.classList.add("visto");
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- 4. Contadores ---------- */
  function contadores() {
    var els = $$("[data-num]");
    if (!els.length) return;
    var fmt = function (n, el) {
      var dec = parseInt(el.dataset.dec || "0", 10);
      var s = n.toLocaleString("es-MX", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      return (el.dataset.pre || "") + s + (el.dataset.post || "");
    };
    var animar = function (el) {
      var fin = parseFloat(el.dataset.num);
      if (reduce) { el.textContent = fmt(fin, el); return; }
      var dur = 1500, t0 = performance.now();
      var paso = function (t) {
        var p = Math.min((t - t0) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(fin * e, el);
        if (p < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };
    if (!("IntersectionObserver" in window)) { els.forEach(animar); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (x.isIntersecting) { animar(x.target); io.unobserve(x.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (e) { e.classList.add("num-anim"); io.observe(e); });
  }

  /* ---------- 5. Brillo en tarjetas ---------- */
  function brillo() {
    if (window.matchMedia("(hover: none)").matches) return;
    $$(".card").forEach(function (c) {
      c.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty("--mx", (e.clientX - r.left) + "px");
        c.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* ---------- 6. Riel horizontal ---------- */
  function riel() {
    $$(".riel").forEach(function (r) {
      var wrap = r.closest(".riel-wrap");
      var prev = wrap ? $(".riel-prev", wrap) : null;
      var next = wrap ? $(".riel-next", wrap) : null;
      var paso = function () { return r.firstElementChild ? r.firstElementChild.offsetWidth + 20 : 340; };
      var estado = function () {
        if (!prev || !next) return;
        prev.disabled = r.scrollLeft < 8;
        next.disabled = r.scrollLeft > r.scrollWidth - r.clientWidth - 8;
      };
      if (prev) prev.addEventListener("click", function () { r.scrollBy({ left: -paso(), behavior: "smooth" }); });
      if (next) next.addEventListener("click", function () { r.scrollBy({ left: paso(), behavior: "smooth" }); });
      r.addEventListener("scroll", estado, { passive: true });
      estado();

      // arrastre con mouse
      var abajo = false, x0 = 0, s0 = 0, movido = false;
      r.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "touch") return;
        abajo = true; movido = false; x0 = e.clientX; s0 = r.scrollLeft;
        r.classList.add("arrastrando");
      });
      window.addEventListener("pointermove", function (e) {
        if (!abajo) return;
        var d = e.clientX - x0;
        if (Math.abs(d) > 4) movido = true;
        r.scrollLeft = s0 - d;
      });
      window.addEventListener("pointerup", function () {
        if (!abajo) return;
        abajo = false;
        r.classList.remove("arrastrando");
      });
      r.addEventListener("click", function (e) { if (movido) { e.preventDefault(); e.stopPropagation(); } }, true);
    });
  }

  /* ---------- 7. FAQ ---------- */
  function faq() {
    $$(".faq-q").forEach(function (q) {
      q.addEventListener("click", function () {
        var item = q.closest(".faq-item");
        var abierto = item.classList.contains("abierto");
        var cont = item.closest(".faq");
        if (cont && !cont.dataset.multi) {
          $$(".faq-item", cont).forEach(function (i) { i.classList.remove("abierto"); $(".faq-q", i).setAttribute("aria-expanded", "false"); });
        }
        item.classList.toggle("abierto", !abierto);
        q.setAttribute("aria-expanded", String(!abierto));
      });
    });
    var buscar = $("#faq-buscar");
    if (buscar) {
      var vacio = $("#faq-vacio");
      buscar.addEventListener("input", function () {
        var t = buscar.value.trim().toLowerCase();
        var n = 0;
        $$(".faq-item").forEach(function (i) {
          var ok = !t || i.textContent.toLowerCase().indexOf(t) > -1;
          i.hidden = !ok;
          if (ok) n++;
        });
        if (vacio) vacio.hidden = n > 0;
      });
    }
  }

  /* ---------- 8. Tabs ---------- */
  function tabs() {
    $$("[data-tabs]").forEach(function (grupo) {
      var botones = $$(".tab", grupo);
      var paneles = $$(".tab-panel", grupo.parentElement || document);
      botones.forEach(function (b) {
        b.addEventListener("click", function () {
          botones.forEach(function (o) { o.classList.remove("activo"); o.setAttribute("aria-selected", "false"); });
          b.classList.add("activo");
          b.setAttribute("aria-selected", "true");
          paneles.forEach(function (p) { p.classList.toggle("activo", p.dataset.panel === b.dataset.tab); });
        });
      });
    });
  }

  /* ---------- 9. Formulario ---------- */
  function forms() {
    $$("form[data-form]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var err = $(".form-msg.err", f);
        var ok = $(".form-msg.ok", f);
        var malos = 0;
        $$("[required]", f).forEach(function (campo) {
          var v = campo.value.trim();
          var valido = v.length > 1 && (campo.type !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
          campo.closest(".campo").classList.toggle("error", !valido);
          if (!valido) malos++;
        });
        if (err) err.hidden = malos === 0;
        if (ok) ok.hidden = malos > 0;
        if (!malos) {
          f.reset();
          $$("input[type=range]", f).forEach(function (r) { r.dispatchEvent(new Event("input")); });
          setTimeout(function () { if (ok) ok.hidden = true; }, 8000);
        }
      });
      $$("input, textarea", f).forEach(function (c) {
        c.addEventListener("input", function () {
          var w = c.closest(".campo");
          if (w) w.classList.remove("error");
        });
      });
    });
  }

  /* ---------- 10. Demo: Da Vinci Central ---------- */
  var CENTRAL = {
    "ventas": {
      p: "¿Cuánto vendimos esta semana?",
      r: 'Esta semana llevan <b>$487,320</b> — un <b>12.4% más</b> que la semana pasada. El mejor día fue el jueves:',
      barras: [46, 58, 41, 92, 63, 71]
    },
    "cobranza": {
      p: "¿Qué clientes no han pagado?",
      r: 'Tienes <b>3 facturas vencidas</b> por un total de <b>$96,150</b>:<br>· Comercial Robledo $41,200 · 18 días<br>· Grupo Anzures $32,750 · 9 días<br>· Farmacias Lira $22,200 · 4 días<br><br>¿Quieres que el agente les envíe un recordatorio de pago?'
    },
    "inventario": {
      p: "¿Cómo va el inventario?",
      r: 'Todo en orden, excepto una cosa:<br>⚠ Quedan 14 unidades de «Válvula 3/4» — a tu ritmo de venta se agotan el <b>martes</b>. Tu proveedor tarda 5 días. <b>Te sugiero pedir hoy.</b>'
    }
  };

  function chatCentral() {
    var chat = $("#chat-central");
    if (!chat) return;
    var cuerpo = $(".chat-cuerpo", chat);
    var ocupado = false;

    function burbuja(clase, html) {
      var d = document.createElement("div");
      d.className = "burbuja " + clase;
      d.innerHTML = html;
      cuerpo.appendChild(d);
      cuerpo.scrollTop = cuerpo.scrollHeight;
      return d;
    }

    $$(".sug", chat).forEach(function (b) {
      b.addEventListener("click", function () {
        if (ocupado) return;
        var dato = CENTRAL[b.dataset.q];
        if (!dato) return;
        ocupado = true;
        b.disabled = true;
        burbuja("user", dato.p);
        var esc = document.createElement("div");
        esc.className = "burbuja bot escribiendo";
        esc.innerHTML = "<i></i><i></i><i></i>";
        cuerpo.appendChild(esc);
        cuerpo.scrollTop = cuerpo.scrollHeight;
        esperar(reduce ? 120 : 950).then(function () {
          esc.remove();
          var html = dato.r;
          if (dato.barras) {
            html += '<div class="barras">' + dato.barras.map(function (v, i) {
              return '<i style="height:' + v + '%;animation-delay:' + (i * 70) + 'ms"></i>';
            }).join("") + "</div>";
          }
          burbuja("bot", html);
          ocupado = false;
        });
      });
    });
  }

  /* ---------- 11. Demo: WhatsApp vende ---------- */
  var WA_VENTA = [
    ["in", "Hola, ¿tienen bomba de agua de 1 HP? ¿A cómo?", "10:38 pm"],
    ["out", "Hola 👋 Sí tenemos: <b>Bomba periférica 1 HP</b> a <b>$1,890</b> con garantía de 1 año. ¿Es para casa o para riego?", "10:38 pm"],
    ["in", "Para la casa, se me quemó la que tenía", "10:40 pm"],
    ["out", "Perfecto, esa te funciona muy bien para casa. Si gustas te la aparto y mañana mismo la recoges o te la enviamos. ¿Cuál prefieres?", "10:40 pm"],
    ["in", "La paso a recoger como a las 10", "10:42 pm"],
    ["out", "Listo ✅ Queda <b>apartada a tu nombre</b> para mañana 10:00 am. Te mando la ubicación. Cualquier cosa aquí estoy — a la hora que sea.", "10:42 pm"]
  ];

  function demoWhatsApp() {
    var box = $("#wa-venta");
    if (!box) return;
    var cuerpo = $(".wa-cuerpo", box);
    var btn = $("#wa-venta-btn");
    var corriendo = false;

    function pintar(m) {
      var d = document.createElement("div");
      d.className = "wa-msg " + (m[0] === "out" ? "out" : "");
      d.innerHTML = m[1] + '<span class="hora">' + m[2] + (m[0] === "out" ? " ✓✓" : "") + "</span>";
      cuerpo.appendChild(d);
      cuerpo.scrollTop = cuerpo.scrollHeight;
    }

    function correr() {
      if (corriendo) return;
      corriendo = true;
      cuerpo.innerHTML = "";
      if (btn) { btn.disabled = true; btn.textContent = "Conversación en curso…"; }
      var i = 0;
      var paso = function () {
        if (i >= WA_VENTA.length) {
          corriendo = false;
          if (btn) { btn.disabled = false; btn.textContent = "▶ Ver la conversación otra vez"; }
          return;
        }
        pintar(WA_VENTA[i]);
        i++;
        setTimeout(paso, reduce ? 120 : 1100);
      };
      paso();
    }

    if (btn) btn.addEventListener("click", correr);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (x) { if (x.isIntersecting) { correr(); io.disconnect(); } });
      }, { threshold: 0.35 });
      io.observe(box);
    } else { correr(); }
  }

  /* ---------- 12. Typewriter ---------- */
  var TW = [
    ["¿Cuánto vendimos esta semana?", "Esta semana llevan $487,320 — 12.4% arriba."],
    ["¿Quién es mi mejor cliente este mes?", "Comercial Robledo: $118,540 en 9 pedidos."],
    ["¿Cómo va el flujo de caja?", "Positivo: $203,910 disponibles tras pagos programados."]
  ];

  function typewriter() {
    var q = $("#tw-q"), a = $("#tw-a");
    if (!q || !a) return;
    if (reduce) { q.textContent = TW[0][0]; a.textContent = TW[0][1]; return; }
    var i = 0;

    function escribir(el, txt) {
      return new Promise(function (res) {
        el.textContent = "";
        var n = 0;
        var t = setInterval(function () {
          el.textContent = txt.slice(0, ++n);
          if (n >= txt.length) { clearInterval(t); res(); }
        }, 32);
      });
    }

    function ciclo() {
      var par = TW[i % TW.length];
      a.textContent = "";
      escribir(q, par[0])
        .then(function () { return esperar(420); })
        .then(function () { return escribir(a, par[1]); })
        .then(function () { return esperar(3200); })
        .then(function () { i++; ciclo(); });
    }
    ciclo();
  }

  /* ---------- 13. Calculadora ---------- */
  function calculadora() {
    var c = $("#calc");
    if (!c) return;
    var personas = $("#c-personas"), horas = $("#c-horas"), costo = $("#c-costo");
    var oMes = $("#c-mes"), oAnio = $("#c-anio"), oHoras = $("#c-horas-out");
    var money = function (n) { return "$" + Math.round(n).toLocaleString("es-MX"); };

    function pintarSlider(r) {
      var pct = ((r.value - r.min) / (r.max - r.min)) * 100;
      r.style.setProperty("--pct", pct + "%");
      var lbl = $("[data-val='" + r.id + "']");
      if (lbl) lbl.textContent = r.id === "c-costo" ? money(r.value) : r.value + (r.id === "c-horas" ? " h" : "");
    }

    function calcular() {
      var p = +personas.value, h = +horas.value, k = +costo.value;
      var mes = p * k * (h / 8);
      oMes.textContent = money(mes);
      oAnio.textContent = money(mes * 12);
      oHoras.textContent = (p * h * 22).toLocaleString("es-MX");
    }

    [personas, horas, costo].forEach(function (r) {
      r.addEventListener("input", function () { pintarSlider(r); calcular(); });
      pintarSlider(r);
    });
    calcular();
  }

  /* ---------- 14. Torre de control (logística) ---------- */
  var TORRE = [
    ["sistema", "Torre de control en línea · 3 unidades en ruta"],
    ["cliente", "«¿Dónde va mi pedido #7712?»"],
    ["faro", "leyendo GPS de U-14… posición y tráfico OK"],
    ["faro", "Tu pedido #7712 va en carretera, a 42 km. Llega ~11:20 am. Te aviso al llegar 🚛"],
    ["alerta", "⚠ U-14 detenida 12 min · tráfico detectado"],
    ["portero", "rampa 3 reagendada con Farmacias Lira: 12:00 → 12:30"],
    ["faro", "Tu entrega #7712 se recorre a ~12:05 por tráfico. Tu rampa quedó reagendada — sin filas al llegar 🙌"],
    ["sistema", "incidente resuelto por 3 agentes en 5 segundos"],
    ["chofer", "📸 foto de remisión firmada recibida"],
    ["escriba", "OCR: entrega #7714 · 40 cajas · firma de recibido ✓"],
    ["cobrador", "factura enviada al cliente · vence en 15 días"],
    ["sistema", "viaje cerrado: de la firma a la factura en 4 segundos"]
  ];

  function torre() {
    var t = $("#torre");
    if (!t) return;
    var feed = $(".feed", t);
    var btns = $$("[data-torre]", t);
    var corriendo = false;

    function linea(ag, txt) {
      var d = document.createElement("div");
      d.className = "feed-item";
      d.innerHTML = '<span class="ag">' + ag.toUpperCase() + "</span><span>" + txt + "</span>";
      feed.appendChild(d);
      feed.scrollTop = feed.scrollHeight;
    }

    function correr(desde, hasta) {
      if (corriendo) return;
      corriendo = true;
      btns.forEach(function (b) { b.disabled = true; });
      var i = desde;
      var paso = function () {
        if (i > hasta) {
          corriendo = false;
          btns.forEach(function (b) { b.disabled = false; });
          return;
        }
        linea(TORRE[i][0], TORRE[i][1]);
        i++;
        setTimeout(paso, reduce ? 100 : 900);
      };
      paso();
    }

    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var r = b.dataset.torre.split("-");
        if (b.dataset.limpiar) feed.innerHTML = "";
        correr(+r[0], +r[1]);
      });
    });
    linea(TORRE[0][0], TORRE[0][1]);
  }

  /* ---------- 15. LISA: show de industrias ---------- */
  var LISA = {
    industrial: {
      tit: "La planta te responde.",
      baja: "LISA ve tus líneas, tu calidad y tus paros — y te lo cuenta por WhatsApp.",
      q: "LISA, ¿cómo va la línea 2?",
      a: "L2 al <b>91%</b> ✓. Detecté desgaste de mordaza: OT programada el domingo. <b>Costo de paro evitado: $84,000</b>. ¿Te mando el detalle?"
    },
    comercio: {
      tit: "Cada sucursal, en tu bolsillo.",
      baja: "Ventas, anaqueles, rutas y entregas — LISA vigila todo el mostrador.",
      q: "¿Qué sucursal va abajo hoy?",
      a: "<b>Suc. Oriente −12%</b> vs martes típico. Causa: anaquel de bebidas vacío 2 h — <b>ya pedí el resurtido</b> y llega 4:30 pm."
    },
    financiera: {
      tit: "Tus números, sin sustos.",
      baja: "Caja proyectada, cobranza y CFDI — LISA cuida el dinero mientras duermes.",
      q: "¿Cómo viene la caja este mes?",
      a: "Positiva: <b>$203,910</b> a 30 días. Ojo: Grupo Anzures trae patrón de atraso — <b>ya le envié recordatorio</b> con liga de pago."
    },
    emprendimiento: {
      tit: "Tu negocio, en tu bolsillo.",
      baja: "Ventas, caja y clientes de tu negocio — desde el primer día, sin sistemas monstruosos.",
      q: "¿Cuánto vendimos hoy en la tienda?",
      a: "<b>$8,240</b> 🎉 — tu mejor martes. El agente cerró <b>3 ventas por WhatsApp</b> mientras comías. Mañana te sugiero resurtir refrescos."
    }
  };

  function lisaShow() {
    var box = $("#lisa-show");
    if (!box) return;
    var chat = $(".fono-chat", box);
    var tit = $("#lisa-tit"), baja = $("#lisa-baja");
    var btns = $$("[data-lisa]", box);
    var timer = null, actual = null;

    function mostrar(clave) {
      var d = LISA[clave];
      if (!d || actual === clave) return;
      actual = clave;
      btns.forEach(function (b) { b.classList.toggle("activo", b.dataset.lisa === clave); });
      if (tit) tit.textContent = d.tit;
      if (baja) baja.textContent = d.baja;
      chat.innerHTML = "";
      var u = document.createElement("div");
      u.className = "burbuja user";
      u.textContent = d.q;
      chat.appendChild(u);
      var esc = document.createElement("div");
      esc.className = "burbuja bot escribiendo";
      esc.innerHTML = "<i></i><i></i><i></i>";
      chat.appendChild(esc);
      setTimeout(function () {
        esc.remove();
        var b = document.createElement("div");
        b.className = "burbuja bot";
        b.innerHTML = d.a;
        chat.appendChild(b);
      }, reduce ? 100 : 850);
    }

    function auto() {
      var claves = Object.keys(LISA);
      timer = setInterval(function () {
        var i = (claves.indexOf(actual) + 1) % claves.length;
        mostrar(claves[i]);
      }, 6500);
    }

    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        clearInterval(timer);
        mostrar(b.dataset.lisa);
      });
    });
    mostrar("industrial");
    if (!reduce) auto();
  }

  /* ---------- 16. App Planta: simulación ---------- */
  var PLANTA_INCIDENTE = [
    ["vigía", "L2 detenida · torque fuera de rango en cabezal 3"],
    ["vigía", "causa probable: desgaste de mordaza (patrón conocido)"],
    ["mecánico", "OT creada · técnico asignado: R. Ortiz"],
    ["vigía", "producción rebalanceada: L1 +9% · cliente sin riesgo"],
    ["escriba", "WhatsApp al jefe de turno enviado · paro documentado"]
  ];

  var PLANTA_CHAT = {
    turno: {
      q: "¿Cómo va el turno?",
      a: "Turno A al <b>84%</b>: L1 y L2 en meta; L3 al 64% por microparos del formador (cartón húmedo del proveedor B). Ya sugerí cambio de lote y redacté el reclamo. ¿Lo envío?"
    },
    paro: {
      q: "¿Qué pasó en L2?",
      a: "L2 paró 6 min por torque fuera de rango — mordaza desgastada. <b>MECÁNICO</b> ya programó la OT-441 para el domingo (sin producción). Refacción llega el jueves. Costo de paro evitado: <b>$84,000</b>."
    },
    costo: {
      q: "¿Cuánto me cuestan los paros?",
      a: "Este mes: <b>$31,200</b> en paros (2.1% del tiempo). El 71% viene de UNA causa: mordazas L2. Con la OT del domingo, proyecto bajar a <b>$9,000/mes</b>."
    },
    lisa: {
      q: "¿Quién eres, LISA?",
      a: "Soy la base de conocimiento de TODA tu empresa: aprendo de tus datos, documentos y decisiones (RAG + modelos que pronostican). Puedo ver ventas, planta y caja; responder a tus socios; aprobar con tus reglas; y avisarte antes de los problemas. <b>Tú tienes las llaves: yo solo abro las puertas que me autorices.</b>"
    }
  };

  function appPlanta() {
    var app = $("#app-planta");
    if (!app) return;
    var feed = $(".feed", app);
    var btn = $("#sim-paro");
    var l2 = $("#linea-l2");

    function linea(ag, txt) {
      var d = document.createElement("div");
      d.className = "feed-item";
      d.innerHTML = '<span class="ag">' + ag.toUpperCase() + "</span><span>" + txt + "</span>";
      feed.appendChild(d);
      feed.scrollTop = feed.scrollHeight;
    }

    if (btn) {
      btn.addEventListener("click", function () {
        btn.disabled = true;
        if (l2) l2.classList.add("alerta");
        var i = 0;
        var paso = function () {
          if (i >= PLANTA_INCIDENTE.length) {
            btn.disabled = false;
            setTimeout(function () { if (l2) l2.classList.remove("alerta"); }, 2500);
            return;
          }
          linea(PLANTA_INCIDENTE[i][0], PLANTA_INCIDENTE[i][1]);
          i++;
          setTimeout(paso, reduce ? 110 : 1000);
        };
        paso();
      });
    }

    // chat de LISA en la app
    var chat = $("#planta-chat");
    if (chat) {
      var cuerpo = $(".chat-cuerpo", chat);
      $$(".sug", chat).forEach(function (b) {
        b.addEventListener("click", function () {
          var d = PLANTA_CHAT[b.dataset.p];
          if (!d) return;
          var u = document.createElement("div");
          u.className = "burbuja user";
          u.textContent = d.q;
          cuerpo.appendChild(u);
          var esc = document.createElement("div");
          esc.className = "burbuja bot escribiendo";
          esc.innerHTML = "<i></i><i></i><i></i>";
          cuerpo.appendChild(esc);
          cuerpo.scrollTop = cuerpo.scrollHeight;
          setTimeout(function () {
            esc.remove();
            var r = document.createElement("div");
            r.className = "burbuja bot";
            r.innerHTML = d.a;
            cuerpo.appendChild(r);
            cuerpo.scrollTop = cuerpo.scrollHeight;
          }, reduce ? 110 : 900);
        });
      });
    }

    // pulso de las líneas
    if (!reduce) {
      setInterval(function () {
        $$("[data-pph]", app).forEach(function (el) {
          var base = +el.dataset.pph;
          el.textContent = Math.round(base + (Math.random() * 16 - 8)) + " pph";
        });
      }, 2600);
    }
  }

  /* ---------- 17. Demo de WhatsApp real (formulario) ---------- */
  function demoTelefono() {
    $$("form[data-demo-tel]").forEach(function (f) {
      var msg = $(".form-msg", f);
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var tel = $("input", f).value.replace(/\D/g, "");
        msg.hidden = false;
        if (tel.length < 11) {
          msg.className = "form-msg err";
          msg.textContent = "Ese número se ve corto — incluye la lada del país (ej. 52…).";
          return;
        }
        msg.className = "form-msg ok";
        msg.textContent = "La línea demo se está conectando (Green API). Mientras tanto, escríbenos tú: contacto@da-vinci.ai";
      });
    });
  }

  /* ---------- 18. Reloj, saludo y barra sticky ---------- */
  function reloj() {
    var el = $("#reloj-cdmx");
    if (!el) return;
    var tick = function () {
      el.textContent = new Date().toLocaleTimeString("es-MX", {
        hour: "2-digit", minute: "2-digit", timeZone: "America/Mexico_City"
      });
    };
    tick();
    setInterval(tick, 20000);
  }

  function saludo() {
    var el = $("#saludo");
    if (!el) return;
    var h = new Date().getHours();
    var txt = h < 12 ? "Buenos días — el taller está abierto"
      : h < 20 ? "Buenas tardes — el taller está abierto"
        : "Buenas noches — los agentes siguen trabajando";
    var visto = false;
    try { visto = localStorage.getItem("dv-visto") === "1"; localStorage.setItem("dv-visto", "1"); } catch (e) { }
    el.textContent = (visto ? "Qué bueno verte de nuevo · " : "") + txt;
  }

  function stickyBar() {
    var b = $(".barra-sticky");
    if (!b) return;
    var cerrada = false;
    try { cerrada = sessionStorage.getItem("dv-barra") === "0"; } catch (e) { }
    if (cerrada) { b.remove(); return; }
    setTimeout(function () { b.classList.add("visible"); }, 4200);
    var x = $(".cerrar", b);
    if (x) x.addEventListener("click", function () {
      b.classList.remove("visible");
      try { sessionStorage.setItem("dv-barra", "0"); } catch (e) { }
    });
  }

  function exitPopup() {
    var m = $("#modal-salida");
    if (!m) return;
    var mostrado = false;
    try { mostrado = sessionStorage.getItem("dv-salida") === "1"; } catch (e) { }
    var abrir = function () {
      if (mostrado) return;
      mostrado = true;
      try { sessionStorage.setItem("dv-salida", "1"); } catch (e) { }
      m.classList.add("visible");
    };
    document.addEventListener("mouseout", function (e) {
      if (!e.relatedTarget && e.clientY < 12) abrir();
    });
    $$("[data-cerrar-modal]", m).forEach(function (b) {
      b.addEventListener("click", function () { m.classList.remove("visible"); });
    });
    m.addEventListener("click", function (e) { if (e.target === m) m.classList.remove("visible"); });
  }

  /* ---------- 19. Compartir ---------- */
  function compartir() {
    var wa = $("#compartir-wa");
    if (wa) wa.href = "https://wa.me/?text=" + encodeURIComponent("Mira esto para la empresa: " + location.href);
    var copiar = $("#copiar-link");
    if (copiar) {
      copiar.addEventListener("click", function () {
        var t = copiar.textContent;
        var fin = function () {
          copiar.textContent = "✓ Link copiado";
          setTimeout(function () { copiar.textContent = t; }, 2200);
        };
        if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(fin, fin);
        else fin();
      });
    }
  }

  /* ---------- 20. Parallax suave del hero ---------- */
  function parallax() {
    if (reduce) return;
    var els = $$("[data-parallax]");
    if (!els.length) return;
    var tick = function () {
      var y = window.scrollY;
      els.forEach(function (e) {
        var f = parseFloat(e.dataset.parallax) || 0.12;
        if (y < window.innerHeight * 1.6) e.style.transform = "translate3d(0," + (y * f) + "px,0)";
      });
    };
    window.addEventListener("scroll", tick, { passive: true });
  }

  /* ---------- 21. Canvas del hero: códice vivo ---------- */
  function heroCanvas() {
    var c = $("#hero-canvas");
    if (!c || reduce) return;
    var ctx = c.getContext("2d");
    var w, h, puntos = [], raf;

    function medir() {
      var r = c.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.width = r.width * dpr;
      h = c.height = r.height * dpr;
      ctx.scale(dpr, dpr);
      w = r.width; h = r.height;
      var n = Math.min(Math.round((w * h) / 22000), 62);
      puntos = [];
      for (var i = 0; i < n; i++) {
        puntos.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.4 + 0.6
        });
      }
    }

    function pinta() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < puntos.length; i++) {
        var p = puntos[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,134,52,0.55)";
        ctx.fill();
        for (var j = i + 1; j < puntos.length; j++) {
          var q = puntos[j];
          var d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 128) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(245,134,52," + (0.13 * (1 - d / 128)) + ")";
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(pinta);
    }

    medir();
    pinta();
    window.addEventListener("resize", function () { cancelAnimationFrame(raf); medir(); pinta(); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(raf);
      else { cancelAnimationFrame(raf); pinta(); }
    });
  }

  /* ---------- 22. Simulador de mostrador (industria comercio) ---------- */
  function mostrador() {
    var m = $("#mostrador");
    if (!m) return;
    var pasos = $$("[data-est]", m);
    var btn = $("#mostrador-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      btn.disabled = true;
      pasos.forEach(function (p) { p.classList.remove("activo"); var r = $(".res", p); if (r) r.textContent = ""; });
      var textos = ["✓ leído · 4s", "32 en CEDIS + 8 suc. norte ✓", "ruta 3 · mañana 8:40 ✓", "pagado en línea ✓"];
      var i = 0;
      var paso = function () {
        if (i >= pasos.length) { btn.disabled = false; return; }
        pasos[i].classList.add("activo");
        var r = $(".res", pasos[i]);
        if (r) r.textContent = textos[i];
        i++;
        setTimeout(paso, reduce ? 120 : 1000);
      };
      paso();
    });
    pasos.forEach(function (p, i) {
      p.addEventListener("click", function () { p.classList.toggle("activo"); });
    });
  }

  /* ---------- Arranque ---------- */
  function init() {
    header(); progreso(); reveal(); contadores(); brillo(); riel(); faq(); tabs();
    forms(); chatCentral(); demoWhatsApp(); typewriter(); calculadora(); torre();
    lisaShow(); appPlanta(); demoTelefono(); reloj(); saludo(); stickyBar();
    exitPopup(); compartir(); parallax(); heroCanvas(); mostrador();
    document.documentElement.classList.add("js-listo");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
