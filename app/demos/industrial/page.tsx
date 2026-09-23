import Link from "next/link";
import { PageHero, SecHead, CtaFinal, Panel, Chips } from "@/components/ui";
import { Plataforma, EnCorto } from "@/components/site/bloques";

export const metadata = {
  title: "Área Industrial — Demos",
  description: "El mundo industrial con inteligencia operativa: maquila, transformación, líneas de producción, calidad y proveedores. Entra a Planta Da Vinci.",
  alternates: { canonical: "/demos/industrial" },
};

export default function DemoIndustrial() {
  return (
    <>
      <PageHero
        miga={[{ href: "/demos", titulo: "Sala de demos" }, { titulo: "Industrial" }]}
        titulo={<>El mundo <em>industrial</em>.</>}
        lead="Donde cada minuto de línea detenida cuesta, y donde nadie debería enterarse de los problemas al final del turno."
        chips={["maquila", "transformacion", "lineas", "calidad", "proveedores"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SecHead label="Este mundo, en corto" titulo="Tres perfiles, un mismo dolor." />
          <EnCorto
            items={[
              ["Maquiladoras.", "Producen contra programa del cliente: la puntualidad y el reporte de avance lo son todo. La IA captura el piso sin papel y reporta sola."],
              ["Transformación.", "Materia prima entra, producto sale — y en medio: mermas, paros y calidad. Visión artificial y OEE en vivo convierten ese «en medio» en números."],
              ["Proveedores industriales.", "Cotizan, fabrican, entregan y cobran. Agentes que cotizan con planos recibidos por correo y persiguen órdenes de compra."],
              ["Los dolores comunes.", "Producción en papel, paros sin causa registrada, calidad detectada tarde, mantenimiento reactivo, compras a ciegas."],
            ]}
          />
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <SecHead label="Las plataformas de esta área" titulo="Entra y juega." />
          <div className="grid g2">
            <Plataforma
              ico="engrane"
              nombre="Planta Da Vinci"
              href="/planta-da-vinci"
              abierta
              texto="La app insignia: líneas en vivo, OEE, visión artificial, calidad y mantenimiento — un SCADA con cerebro. Ábrela y simula un paro."
            />
            <Plataforma
              ico="paquete"
              nombre="Proveedor Da Vinci"
              href="/contacto"
              texto="Llega el plano por correo → LISA lo lee y cotiza en 90 segundos → OC en seguimiento → factura al firmar. Te la mostramos en vivo en el diagnóstico."
            />
          </div>
          <p className="muted" style={{ marginTop: "1.6rem" }}>
            ¿Quieres el detalle técnico? Lee la página de <Link className="u-link" href="/planta">planta y transformación</Link>{" "}
            o agenda tu <Link className="u-link" href="/diagnostico">diagnóstico</Link>.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid g3">
            <Panel
              head="Piso · turno A"
              filas={[["Operador reporta por voz", "✓ registrado"], ["Producción del turno", "12,542 pzas"], ["Captura al día siguiente", "eliminada"]]}
              top={["OEE visible", "84.2% ahora"]}
            />
            <Panel
              head="Visión · CAM-02"
              filas={[["Tapa floja detectada", "pieza 8,412"], ["Desviada a retrabajo", "✓ automática"]]}
              top={["Defectos que salieron hoy", "0"]}
            />
            <Panel
              head="Mantenimiento"
              filas={[["Etiquetadora L2: vibración +18%", "patrón de mordaza"], ["OT-441 programada", "✓ domingo"]]}
              top={["Paro evitado", "$84,000"]}
            />
          </div>
          <div style={{ marginTop: "2rem" }} data-reveal>
            <Chips items={["vision_artificial", "oee", "modbus/opc-ua", "yolo + opencv"]} naranja />
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="¿Tu planta merece verse así?"
        texto="En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos."
      />
    </>
  );
}
