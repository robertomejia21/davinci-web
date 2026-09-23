"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Icono } from "@/components/ui/Icono";
/* ============================================================
   Efectos globales: reveal, contadores, progreso, brillo,
   barra sticky, popup de salida, reloj y compartir.
   ============================================================ */

function useReduce() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduce;
}

export function Efectos() {
  /* la ruta es la dependencia: al navegar con el menú hay que volver a
     observar los elementos de la página nueva (si no, quedan invisibles) */
  const ruta = usePathname();
  const primera = useRef(true);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* al cambiar de página se empieza arriba (salvo que la liga traiga ancla) */
    if (primera.current) {
      primera.current = false;
    } else if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }

    /* --- reveal --- */
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | null = null;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => (e.dataset.visto = "true"));
    } else {
      io = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            const hermanos = el.parentElement
              ? Array.from(el.parentElement.querySelectorAll<HTMLElement>("[data-reveal]"))
              : [];
            const i = hermanos.indexOf(el);
            if (i > 0 && !el.style.getPropertyValue("--d")) {
              el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`);
            }
            el.dataset.visto = "true";
            io?.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      els.forEach((e) => { if (e.dataset.visto !== "true") io!.observe(e); });
    }

    /* red de seguridad: pase lo que pase, nada se queda invisible */
    const respaldo = setTimeout(() => {
      els.forEach((e) => { e.dataset.visto = "true"; });
    }, 2500);

    /* --- contadores --- */
    const nums = Array.from(document.querySelectorAll<HTMLElement>("[data-num]"));
    const fmt = (n: number, el: HTMLElement) => {
      const dec = parseInt(el.dataset.dec || "0", 10);
      const s = n.toLocaleString("es-MX", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      return `${el.dataset.pre || ""}${s}${el.dataset.post || ""}`;
    };
    const animar = (el: HTMLElement) => {
      if (el.dataset.listo === "true") return;
      el.dataset.listo = "true";
      const fin = parseFloat(el.dataset.num || "0");
      if (reduce) { el.textContent = fmt(fin, el); return; }
      const t0 = performance.now();
      const paso = (t: number) => {
        const p = Math.min((t - t0) / 1500, 1);
        el.textContent = fmt(fin * (1 - Math.pow(1 - p, 3)), el);
        if (p < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };
    let ioN: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      ioN = new IntersectionObserver(
        (en) => en.forEach((x) => {
          if (x.isIntersecting) { animar(x.target as HTMLElement); ioN?.unobserve(x.target); }
        }),
        { threshold: 0.4 }
      );
      nums.forEach((e) => { e.classList.add("num"); ioN!.observe(e); });
    } else {
      nums.forEach(animar);
    }

    /* --- barra de progreso --- */
    const barra = document.querySelector<HTMLElement>(".progreso");
    const onScroll = () => {
      if (barra) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        barra.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
      if (!reduce) {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((e) => {
          const f = parseFloat(e.dataset.parallax || "0.1");
          if (window.scrollY < window.innerHeight * 1.6) {
            e.style.transform = `translate3d(0, ${window.scrollY * f}px, 0)`;
          }
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* --- brillo en tarjetas --- */
    const hover = window.matchMedia("(hover: hover)").matches;
    const mover = (e: MouseEvent) => {
      const c = (e.currentTarget as HTMLElement);
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const cards = hover ? Array.from(document.querySelectorAll<HTMLElement>(".card")) : [];
    cards.forEach((c) => c.addEventListener("mousemove", mover as EventListener));

    /* anclas de la misma página: desplazamiento suave hecho a mano
       (el scroll-behavior global rompía el cambio de ruta de Next) */
    const ancla = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
      let url: URL;
      try { url = new URL(a.href, window.location.href); } catch { return; }
      if (url.origin !== window.location.origin || !url.hash) return;
      if (url.pathname.replace(/\/$/, "") !== window.location.pathname.replace(/\/$/, "")) return;
      const destino = document.querySelector(url.hash);
      if (!destino) return;
      e.preventDefault();
      destino.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      window.history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", ancla);

    return () => {
      clearTimeout(respaldo);
      io?.disconnect();
      ioN?.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", ancla);
      cards.forEach((c) => c.removeEventListener("mousemove", mover as EventListener));
    };
  }, [ruta]);

  return <div className="progreso" aria-hidden="true" />;
}

/* ---------- hero: red de puntos ---------- */
export function HeroCanvas() {
  const reduce = useReduce();
  useEffect(() => {
    if (reduce) return;
    const c = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, raf = 0;
    let puntos: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const medir = () => {
      const r = c.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = r.width * dpr;
      c.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      w = r.width; h = r.height;
      const n = Math.min(Math.round((w * h) / 21000), 64);
      puntos = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const pinta = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < puntos.length; i++) {
        const p = puntos[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,134,52,0.55)";
        ctx.fill();
        for (let j = i + 1; j < puntos.length; j++) {
          const q = puntos[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(245,134,52,${0.13 * (1 - d / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(pinta);
    };

    medir(); pinta();
    const onResize = () => { cancelAnimationFrame(raf); medir(); pinta(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [reduce]);

  return <canvas className="hero-canvas" id="hero-canvas" aria-hidden="true" />;
}

/* ---------- barra sticky ---------- */
export function BarraSticky() {
  const [visible, setVisible] = useState(false);
  const [cerrada, setCerrada] = useState(true);

  useEffect(() => {
    let fuera = false;
    try { fuera = sessionStorage.getItem("dv-barra") === "0"; } catch { }
    if (fuera) return;
    setCerrada(false);
    const t = setTimeout(() => setVisible(true), 4200);
    return () => clearTimeout(t);
  }, []);

  if (cerrada) return null;

  return (
    <div className="barra-sticky oscuro" data-visible={visible} role="complementary">
      <p><Icono n="llave" /> <b>Diagnóstico gratuito:</b> mapeamos tu operación y te decimos dónde hay retorno.</p>
      <a className="btn btn-sm btn-solo" href="/contacto">Agendar ahora</a>
      <button
        className="cerrar"
        type="button"
        aria-label="Cerrar aviso"
        onClick={() => {
          setVisible(false);
          try { sessionStorage.setItem("dv-barra", "0"); } catch { }
          setTimeout(() => setCerrada(true), 600);
        }}
      >✕</button>
    </div>
  );
}

/* ---------- popup de salida ---------- */
export function ModalSalida() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mostrado = false;
    try { mostrado = sessionStorage.getItem("dv-salida") === "1"; } catch { }
    if (mostrado) return;
    const salir = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY < 12) {
        try { sessionStorage.setItem("dv-salida", "1"); } catch { }
        setVisible(true);
        document.removeEventListener("mouseout", salir);
      }
    };
    document.addEventListener("mouseout", salir);
    return () => document.removeEventListener("mouseout", salir);
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setVisible(false); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <div
      className="modal"
      data-visible={visible}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-tit"
      aria-hidden={!visible}
      onClick={(e) => { if (e.target === e.currentTarget) setVisible(false); }}
    >
      <div className="modal-caja">
        <button className="modal-x" type="button" aria-label="Cerrar" onClick={() => setVisible(false)}>✕</button>
        <span className="label centro">Antes de irte…</span>
        <h3 id="modal-tit">La Mona Lisa guarda su secreto hace 500 años.</h3>
        <p><b>LISA te cuenta el de tu empresa en un diagnóstico gratis.</b></p>
        <a className="btn btn-solo" href="/contacto">Agendar mi diagnóstico</a>
        <button className="no" type="button" onClick={() => setVisible(false)}>Hoy no, gracias</button>
      </div>
    </div>
  );
}

/* ---------- reloj + saludo ---------- */
export function RelojTaller() {
  const [hora, setHora] = useState("—:—");
  const [saludo, setSaludo] = useState("");

  useEffect(() => {
    const tick = () =>
      setHora(new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit", timeZone: "America/Tijuana" }));
    tick();
    const t = setInterval(tick, 20000);

    /* hora del taller (Mexicali), no la del visitante */
    const h = Number(new Date().toLocaleString("en-US", { hour: "2-digit", hour12: false, timeZone: "America/Tijuana" })) % 24;
    const txt = h < 12 ? "Buenos días — el taller está abierto"
      : h < 20 ? "Buenas tardes — el taller está abierto"
        : "Buenas noches — los agentes siguen trabajando";
    let visto = false;
    try { visto = localStorage.getItem("dv-visto") === "1"; localStorage.setItem("dv-visto", "1"); } catch { }
    setSaludo((visto ? "Qué bueno verte de nuevo · " : "") + txt);

    return () => clearInterval(t);
  }, []);

  return (
    <>
      <span>Taller abierto · Mexicali BC <b>{hora}</b></span>
      <span>{saludo}</span>
    </>
  );
}

/* ---------- compartir ---------- */
export function Compartir() {
  const [texto, setTexto] = useState("Copiar link");
  const [url, setUrl] = useState("");

  useEffect(() => { setUrl(window.location.href); }, []);

  return (
    <div className="chips">
      <a
        className="chip-tag"
        href={`https://wa.me/?text=${encodeURIComponent("Mira esto para la empresa: " + url)}`}
        target="_blank"
        rel="noopener"
      ><Icono n="celular" /> Mándasela a tu socio</a>
      <button
        className="chip-tag"
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(window.location.href).finally(() => {
            setTexto("✓ Link copiado");
            setTimeout(() => setTexto("Copiar link"), 2200);
          });
        }}
      ><Icono n="enlace" /> {texto}</button>
    </div>
  );
}
