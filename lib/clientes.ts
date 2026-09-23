/* ============================================================
   Ficha de cada cliente
   Cada ficha es una página completa en su propia carpeta:
     public/clientes/info/<archivo>/index.html  (+ sus img/, etc.)
   Se revisa en tiempo de compilación si existe; el modal la muestra
   en un iframe, así conserva sus estilos, scripts y rutas relativas.
   Si un cliente no tiene ficha, su logo simplemente no abre modal.
   ============================================================ */
import { existsSync } from "node:fs";
import path from "node:path";
import { CLIENTES } from "./contenido";

export type ClienteConInfo = {
  archivo: string;
  nombre: string;
  /** URL pública de la ficha, o null si el cliente no tiene. */
  ficha: string | null;
};

const DIR = path.join(process.cwd(), "public", "clientes", "info");

export function clientesConInfo(): ClienteConInfo[] {
  const lista = CLIENTES.map((c) => {
    const existe = existsSync(path.join(DIR, c.archivo, "index.html"));
    return {
      archivo: c.archivo,
      nombre: c.nombre,
      ficha: existe ? `/clientes/info/${c.archivo}/index.html` : null,
    };
  });

  const sinFicha = lista.filter((c) => !c.ficha).map((c) => `${c.archivo}/index.html`);
  if (sinFicha.length) {
    console.log(
      `  · clientes sin ficha (su logo no abrirá modal): ${sinFicha.join(", ")}\n` +
      `    colócalas en public/clientes/info/`
    );
  }
  return lista;
}
