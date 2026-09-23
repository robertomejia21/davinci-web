/* ============================================================
   Demo «Recíbelo en TU WhatsApp» (/demos/emprendimiento)
   El visitante deja su número y Green API le manda un mensaje real.
   El token vive solo aquí, en el servidor (variables GREEN_API_* en
   .env local y en Vercel). El texto del mensaje es fijo: nadie puede
   usar esta ruta para mandar lo que quiera.
   ============================================================ */
import { SITIO } from "@/lib/contenido";
import { demasiados, ipDe } from "@/lib/limite";

export const runtime = "nodejs";

const URL_API = process.env.GREEN_API_URL?.replace(/\/+$/, "");
const INSTANCIA = process.env.GREEN_API_ID_INSTANCE;
const TOKEN = process.env.GREEN_API_TOKEN_INSTANCE;

const MENSAJE = [
  "Hola 👋 Soy un agente de *Da Vinci IA*.",
  "",
  "Este mensaje te llegó en segundos, sin que nadie lo escribiera a mano. Así atiendo a los clientes de un negocio: respondo, cotizo, agendo y doy seguimiento, las 24 horas.",
  "",
  `¿Quieres uno así para tu empresa? Agenda tu diagnóstico gratuito: ${SITIO.url}/contacto/`,
].join("\n");

async function green(metodo: string, cuerpo: unknown) {
  const r = await fetch(`${URL_API}/waInstance${INSTANCIA}/${metodo}/${TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
    signal: AbortSignal.timeout(12_000),
  });
  if (!r.ok) throw new Error(`Green API ${metodo}: HTTP ${r.status} ${await r.text().catch(() => "")}`);
  return r.json();
}

/* México: WhatsApp registra los celulares como 52 + 10 dígitos o 521 + 10
   según la antigüedad de la cuenta. Se prueba la forma escrita y la otra. */
function variantes(tel: string) {
  if (/^521\d{10}$/.test(tel)) return [tel, "52" + tel.slice(3)];
  if (/^52\d{10}$/.test(tel)) return [tel, "521" + tel.slice(2)];
  return [tel];
}

const responder = (ok: boolean, txt: string, status = 200) => Response.json({ ok, txt }, { status });

export async function POST(request: Request) {
  if (!URL_API || !INSTANCIA || !TOKEN) {
    console.error("whatsapp-demo: faltan las variables GREEN_API_* (ver .env.example)");
    return responder(false, "La línea demo no está disponible en este momento. Escríbenos desde el botón de WhatsApp.", 503);
  }

  let datos: { tel?: unknown; web?: unknown };
  try { datos = await request.json(); } catch { return responder(false, "Solicitud inválida.", 400); }

  // «web» es un campo oculto: si viene lleno, lo llenó un bot
  if (datos.web) return responder(true, "¡Listo! Revisa tu WhatsApp.");

  const tel = String(datos.tel ?? "").replace(/\D/g, "");
  if (tel.length < 11 || tel.length > 15) {
    return responder(false, "Ese número se ve incompleto — incluye la lada del país (ej. 52…).", 400);
  }

  const ip = ipDe(request);
  if (demasiados(`wa-ip:${ip}`, 3) || demasiados(`wa-tel:${tel}`, 1)) {
    return responder(false, "Ya te mandamos un mensaje hace poco. Revisa tu WhatsApp o inténtalo en unos minutos.", 429);
  }

  try {
    let destino: string | null = null;
    for (const v of variantes(tel)) {
      const r = await green("checkWhatsapp", { phoneNumber: Number(v) });
      if (r?.existsWhatsapp) { destino = v; break; }
    }
    if (!destino) {
      return responder(false, "Ese número no tiene WhatsApp. Revisa la lada y los dígitos.", 404);
    }
    await green("sendMessage", { chatId: `${destino}@c.us`, message: MENSAJE });
    return responder(true, "¡Listo! Revisa tu WhatsApp: un agente Da Vinci te acaba de escribir.");
  } catch (err) {
    console.error("whatsapp-demo:", err);
    return responder(false, "No pudimos enviar el mensaje ahora. Escríbenos desde el botón de WhatsApp.", 502);
  }
}
