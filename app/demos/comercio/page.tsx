import Link from "next/link";
import { PageHero, SecHead, CtaFinal } from "@/components/ui";
import { Plataforma, EnCorto, Nota } from "@/components/site/bloques";
import { Torre, ErpTabs } from "@/components/demos/apps";

import { Icono } from "@/components/ui/Icono";
export const metadata = {
  title: "Área Comercio y servicios — Demos",
  description: "Comercio y servicios con inteligencia operativa: súper, comercializadoras, restaurantes y logística. Torre de control y ERP de muestra.",
  alternates: { canonical: "/demos/comercio" },
};

const ATLAS: [string, string][] = [
  ["user", "Livia, pedido urgente de Farmacias Lira: 40 cajas, entrega mañana antes de las 9:00."],
  ["bot", "Lo veo. 32 cajas en almacén central y 8 en sucursal norte. Consolido esta noche."],
  ["user", "La ruta 3 sale a las 6:00 y tiene espacio. La reservo."],
  ["bot", "Hecho. Etiquetas listas y el chofer ya tiene la orden en su app."],
  ["user", "Aviso al cliente por WhatsApp con hora estimada… Enviado. <b>Pedido resuelto en 40 segundos.</b>"],
];

export default function DemoComercio() {
  return (
    <>
      <PageHero
        miga={[{ href: "/demos", titulo: "Sala de demos" }, { titulo: "Comercio y servicios" }]}
        titulo={<>Comercio y <em>servicios</em>.</>}
        lead="Vender, surtir, entregar y cobrar — todos los días, sin puntos ciegos."
        chips={["super", "comercializadora", "restaurante", "logistica"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SecHead label="Este mundo, en corto" titulo="Cuatro mostradores, un solo centro." />
          <EnCorto
            items={[
              ["Supermercados.", "Anaqueles llenos, mermas mínimas, cajas conciliadas."],
              ["Comercializadoras.", "Cotizar rápido, cuidar margen, cobrar a tiempo."],
              ["Restaurantes.", "Reservas, comandas y compras según demanda prevista."],
              ["Logística.", "Cada unidad, ruta y entrega — visible y avisando sola."],
            ]}
          />
        </div>
      </section>

      <section className="sec sec-2" id="torre">
        <div className="wrap">
          <span className="label"><Icono n="camion" /> Estación A1 · logística y transporte</span>
          <SecHead
            titulo="Torre de control"
            lead="Cinco unidades en ruta, cuatro agentes vigilando. Pregunta por un pedido, provoca un retraso y mira a los agentes resolverlo en cascada — solos."
          />
          <Torre />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="label"><Icono n="trato" /> Estación 03 · agente ↔ agente</span>
          <SecHead
            titulo="Dos agentes resuelven un pedido urgente"
            lead="Atlas (logística) y Livia (almacén) se coordinan solos. Tiempo humano invertido: cero."
          />
          <div className="chat" data-reveal style={{ minHeight: 0 }}>
            <div className="chat-top">
              <span className="av">A</span>
              <div>
                <b>Atlas · logística</b>
                <small>↔ Livia · almacén</small>
              </div>
            </div>
            <div className="chat-cuerpo" style={{ maxHeight: "none" }}>
              {ATLAS.map(([de, txt], i) => (
                <div className={`burbuja ${de}`} key={i} dangerouslySetInnerHTML={{ __html: txt }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-2" id="erp">
        <div className="wrap">
          <span className="label"><Icono n="fabrica" /> Estación 06 · tu industria</span>
          <SecHead
            titulo="Así se ve TU sistema"
            lead="Paneles de muestra del ERP/CRM que construimos por industria. En tu diagnóstico, esto mismo se dibuja con tus procesos."
          />
          <ErpTabs />
          <Nota>
            ¿Tu industria no está aquí? Mira <Link className="u-link" href="/industrias">todas las industrias</Link> o la
            sección de <Link className="u-link" href="/planta">planta y transformación</Link> — y en el diagnóstico lo
            aterrizamos a tu operación exacta.
          </Nota>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SecHead label="Las plataformas de esta área" titulo="Tres puertas más." />
          <div className="grid g3">
            <Plataforma ico="camion" nombre="Torre de Control" href="#torre" abierta texto="Logística en vivo: unidades en mapa, cascada de agentes ante retrasos, evidencia → factura." />
            <Plataforma ico="carrito" nombre="Súper Da Vinci" href="/contacto" texto="4 tiendas en vivo, visión de anaquel que detecta huecos y caducidades, pedido a CEDIS por pronóstico." />
            <Plataforma ico="cocina" nombre="Cocina Da Vinci" href="/contacto" texto="El riel de comandas en hora pico, reservas confirmadas por LISA, insumos que se piden solos." />
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="¿Tu operación merece verse así?"
        texto="En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos."
      />
    </>
  );
}
