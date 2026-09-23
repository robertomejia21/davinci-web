/* ============================================================
   Formulario de contacto → correo vía Resend
   Llega a CONTACTO_PARA desde CONTACTO_DE (un remitente del dominio
   verificado en Resend). «Responder» contesta directo al visitante.
   ============================================================ */
import { demasiados, ipDe } from "@/lib/limite";

export const runtime = "nodejs";

const API_KEY = process.env.RESEND_API_KEY;
const DE = process.env.CONTACTO_DE;
const PARA = process.env.CONTACTO_PARA;

const CAMPOS = ["nombre", "empresa", "email", "mensaje"] as const;
type Datos = Record<(typeof CAMPOS)[number], string>;

const LIMITES: Record<keyof Datos, number> = { nombre: 120, empresa: 160, email: 200, mensaje: 5000 };

const escapar = (t: string) =>
  t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function correo(d: Datos, pagina: string) {
  const filas = [
    ["Nombre", d.nombre],
    ["Empresa", d.empresa],
    ["Correo", d.email],
    ["Página", pagina],
  ]
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#6B6663">${k}</td><td style="padding:6px 0"><b>${escapar(v)}</b></td></tr>`)
    .join("");
  const html = `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;color:#22201F;max-width:560px">
<h2 style="margin:0 0 4px">Nuevo contacto desde da-vinci.ai</h2>
<p style="margin:0 0 18px;color:#6B6663">Pidió su diagnóstico gratuito. Responde a este correo para escribirle directo.</p>
<table style="border-collapse:collapse;font-size:15px">${filas}</table>
<p style="margin:20px 0 6px;color:#6B6663">¿Qué le gustaría automatizar o ver mejor?</p>
<div style="white-space:pre-wrap;background:#FAF8F5;border-left:3px solid #F58634;padding:12px 16px;font-size:15px">${escapar(d.mensaje)}</div>
</div>`;
  const texto = `Nuevo contacto desde da-vinci.ai\n\nNombre: ${d.nombre}\nEmpresa: ${d.empresa}\nCorreo: ${d.email}\nPágina: ${pagina}\n\n${d.mensaje}\n`;
  return { html, texto };
}

const responder = (ok: boolean, txt: string, status = 200) => Response.json({ ok, txt }, { status });

export async function POST(request: Request) {
  if (!API_KEY || !DE || !PARA) {
    console.error("contacto: faltan RESEND_API_KEY, CONTACTO_DE o CONTACTO_PARA (ver .env.example)");
    return responder(false, "No pudimos enviar tu mensaje ahora. Escríbenos por WhatsApp.", 503);
  }

  let crudo: Record<string, unknown>;
  try { crudo = await request.json(); } catch { return responder(false, "Solicitud inválida.", 400); }

  // «web» es un campo oculto: si viene lleno, lo llenó un bot
  if (crudo.web) return responder(true, "Recibido — te contactamos pronto.");

  const d = Object.fromEntries(
    CAMPOS.map((c) => [c, String(crudo[c] ?? "").trim().slice(0, LIMITES[c])]),
  ) as Datos;
  const valido =
    d.nombre.length > 1 && d.empresa.length > 1 && d.mensaje.length > 1 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email);
  if (!valido) return responder(false, "Revisa los campos marcados: falta información para poder escribirte.", 400);

  if (demasiados(`contacto-ip:${ipDe(request)}`, 4) || demasiados(`contacto-mail:${d.email.toLowerCase()}`, 2)) {
    return responder(false, "Ya recibimos tu mensaje. Si urge, escríbenos por WhatsApp.", 429);
  }

  const pagina = String(crudo.pagina ?? "").slice(0, 200) || "—";
  const { html, texto } = correo(d, pagina);

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: DE,
        to: PARA.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: d.email,
        subject: `Diagnóstico: ${d.nombre} · ${d.empresa}`,
        html,
        text: texto,
      }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!r.ok) throw new Error(`Resend: HTTP ${r.status} ${await r.text().catch(() => "")}`);
    return responder(true, "Recibido — te contactamos pronto.");
  } catch (err) {
    console.error("contacto:", err);
    return responder(false, "No pudimos enviar tu mensaje ahora. Escríbenos por WhatsApp.", 502);
  }
}
