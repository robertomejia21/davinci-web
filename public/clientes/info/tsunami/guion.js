      (function () {
        "use strict";

        var laminas = Array.prototype.slice.call(document.querySelectorAll(".lamina"));
        var indice = document.getElementById("indice");
        var listaIndice = document.getElementById("listaIndice");
        var visor = document.getElementById("visor");
        var visorImg = document.getElementById("visorImg");
        var teclas = document.getElementById("teclas");
        var avance = document.getElementById("avance");
        var elActual = document.getElementById("actual");
        var btnAtras = document.getElementById("btnAtras");
        var btnAdelante = document.getElementById("btnAdelante");

        var n = 0;
        document.getElementById("total").textContent = laminas.length;

        // ── Índice ────────────────────────────────────────────────────
        laminas.forEach(function (l, i) {
          var b = document.createElement("button");
          b.innerHTML =
            "<i>" +
            String(i + 1).padStart(2, "0") +
            "</i><span>" +
            l.dataset.titulo +
            "<small>" +
            (l.dataset.sub || "") +
            "</small></span>";
          b.addEventListener("click", function () {
            ir(i);
            cerrarIndice();
          });
          listaIndice.appendChild(b);
        });
        var botonesIndice = Array.prototype.slice.call(listaIndice.children);

        // ── Navegación ────────────────────────────────────────────────
        function ir(i) {
          if (i < 0 || i >= laminas.length || i === n) return;
          laminas[n].classList.remove("activa");
          n = i;
          var l = laminas[n];
          l.classList.add("activa");
          l.scrollTop = 0;
          pintar();
          // La lámina visible es la que debe leerse: se enfoca para el lector
          l.setAttribute("tabindex", "-1");
          l.focus({ preventScroll: true });
        }

        function pintar() {
          elActual.textContent = n + 1;
          avance.style.width = ((n + 1) / laminas.length) * 100 + "%";
          btnAtras.disabled = n === 0;
          btnAdelante.disabled = n === laminas.length - 1;
          botonesIndice.forEach(function (b, i) {
            b.classList.toggle("actual", i === n);
          });
          if (location.hash !== "#" + (n + 1)) {
            history.replaceState(null, "", "#" + (n + 1));
          }
        }

        btnAtras.addEventListener("click", function () {
          ir(n - 1);
        });
        btnAdelante.addEventListener("click", function () {
          ir(n + 1);
        });

        // ── Índice: abrir y cerrar ────────────────────────────────────
        function abrirIndice() {
          indice.classList.add("abierto");
        }
        function cerrarIndice() {
          indice.classList.remove("abierto");
        }
        document.getElementById("btnIndice").addEventListener("click", function () {
          indice.classList.contains("abierto") ? cerrarIndice() : abrirIndice();
        });
        indice.addEventListener("click", function (e) {
          if (e.target === indice) cerrarIndice();
        });

        // ── Visor de capturas ─────────────────────────────────────────
        document.addEventListener("click", function (e) {
          var fig = e.target.closest && e.target.closest(".captura");
          if (!fig) return;
          var img = fig.querySelector("img");
          visorImg.src = img.src;
          visorImg.alt = img.alt;
          visor.classList.add("abierto");
        });
        visor.addEventListener("click", function () {
          visor.classList.remove("abierto");
          visorImg.src = "";
        });

        // ── Teclado ───────────────────────────────────────────────────
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape") {
            if (visor.classList.contains("abierto")) {
              visor.classList.remove("abierto");
              visorImg.src = "";
            } else cerrarIndice();
            return;
          }
          if (visor.classList.contains("abierto")) return;

          switch (e.key) {
            case "ArrowRight":
            case "PageDown":
            case " ":
              e.preventDefault();
              ir(n + 1);
              break;
            case "ArrowLeft":
            case "PageUp":
              e.preventDefault();
              ir(n - 1);
              break;
            case "Home":
              e.preventDefault();
              ir(0);
              break;
            case "End":
              e.preventDefault();
              ir(laminas.length - 1);
              break;
            case "i":
            case "I":
              e.preventDefault();
              indice.classList.contains("abierto") ? cerrarIndice() : abrirIndice();
              break;
          }
        });

        // ── Deslizar en pantallas táctiles ────────────────────────────
        var x0 = null;
        document.addEventListener(
          "touchstart",
          function (e) {
            x0 = e.changedTouches[0].clientX;
          },
          { passive: true }
        );
        document.addEventListener(
          "touchend",
          function (e) {
            if (x0 === null) return;
            var d = e.changedTouches[0].clientX - x0;
            if (Math.abs(d) > 70) ir(d < 0 ? n + 1 : n - 1);
            x0 = null;
          },
          { passive: true }
        );

        // Cambiar el # a mano (o pegar un enlace directo) también mueve la lámina
        window.addEventListener("hashchange", function () {
          var i = parseInt((location.hash || "").slice(1), 10) - 1;
          if (i >= 0 && i < laminas.length) ir(i);
        });

        // ── Arranque ──────────────────────────────────────────────────
        var deHash = parseInt((location.hash || "").slice(1), 10);
        if (deHash >= 1 && deHash <= laminas.length) {
          laminas[0].classList.remove("activa");
          n = deHash - 1;
          laminas[n].classList.add("activa");
        }
        pintar();

        // ── Selector de semana ────────────────────────────────────────
        // El <details> ya abre y cierra solo. Esto nada más marca en cuál
        // estamos y lo cierra al tocar fuera, que en una presentación
        // proyectada es lo que se espera.
        var semanas = document.querySelector(".semanas");
        if (semanas) {
          var aqui = location.pathname.split("/").pop() || "index.html";
          Array.prototype.forEach.call(semanas.querySelectorAll("a"), function (a) {
            if (a.getAttribute("href") === aqui) a.setAttribute("aria-current", "page");
          });
          document.addEventListener("click", function (e) {
            if (semanas.open && !semanas.contains(e.target)) semanas.open = false;
          });
        }

        // La ayuda de teclado se asoma al principio y se retira sola
        teclas.classList.add("visible");
        setTimeout(function () {
          teclas.classList.remove("visible");
        }, 5000);
      })();
