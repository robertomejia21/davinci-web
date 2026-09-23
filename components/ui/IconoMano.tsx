/* ============================================================
   Ícono grande dibujado a mano (Streamline Freehand, CC BY 4.0).
   Si Freehand no tiene el concepto, cae al trazo de boceto.
   Importa los datos pesados: úsalo solo en componentes de servidor.
   ============================================================ */
import { Icono, SvgCrudo, type NombreIcono } from "./Icono";
import { MANO } from "./iconos-mano";

export function IconoMano({ n, tam = 40, className }: { n: NombreIcono; tam?: number; className?: string }) {
  const svg = MANO[n];
  if (!svg) return <Icono n={n} tam={tam} className={className} />;
  return <SvgCrudo svg={svg} tam={tam} className={`ico-mano ${className ?? ""}`} />;
}
