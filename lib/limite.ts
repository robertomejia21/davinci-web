/* ============================================================
   Freno básico contra abuso para las rutas /api (formularios).
   Cuenta envíos por clave (IP, número, correo) en la memoria de la
   instancia: se reinicia con cada arranque en frío de Vercel. No es
   infalible, pero basta para frenar a un bot insistente.
   ============================================================ */
const vistos = new Map<string, number[]>();

/** true si `clave` ya hizo `max` envíos dentro de la ventana. Si no, cuenta este. */
export function demasiados(clave: string, max: number, ventanaMs = 10 * 60 * 1000) {
  const ahora = Date.now();
  const recientes = (vistos.get(clave) ?? []).filter((t) => ahora - t < ventanaMs);
  if (recientes.length >= max) return true;
  recientes.push(ahora);
  vistos.set(clave, recientes);
  return false;
}

export const ipDe = (request: Request) =>
  request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "sin-ip";
