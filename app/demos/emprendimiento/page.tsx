import { PageHero, SecHead, CtaFinal, Panel } from "@/components/ui";
import { Plataforma, EnCorto } from "@/components/site/bloques";
import { DemoTelefono } from "@/components/ui/interactivos";

import { Icono } from "@/components/ui/Icono";
export const metadata = {
  title: "Área Emprendimiento — Demos",
  description: "Tu primer sistema con IA: el agente de WhatsApp que vende, la caja que cuadra y el negocio en tu bolsillo.",
  alternates: { canonical: "/demos/emprendimiento" },
};

const VALENTINA = [
  "Buenas tardes, le llamo de parte de Comercial El Compás. Soy Valentina, su asistente digital.",
  "Le confirmo que su pedido #452 sale mañana a primera hora y llega antes del mediodía.",
  "Le recuerdo con cariño que tiene una factura por vencer este viernes, por $12,400.",
  "¿Gusta que le envíe la liga de pago por WhatsApp?",
  "Perfecto, se la mando en este momento. ¡Que tenga excelente día!",
];

const ONDA = [8, 14, 20, 11, 17, 9, 15, 19, 12, 7, 16, 10, 18, 13, 8, 15];

export default function DemoEmprendimiento() {
  return (
    <>
      <PageHero
        miga={[{ href: "/demos", titulo: "Sala de demos" }, { titulo: "Emprendimiento" }]}
        titulo={<><em>Emprendimiento</em>.</>}
        lead="Tu primer sistema: el WhatsApp que vende, la caja clara y el negocio en tu bolsillo."
        chips={["primer_sistema", "whatsapp", "ventas", "caja"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SecHead label="Este mundo, en corto" titulo="Empezar bien, crecer sin romperse." />
          <EnCorto
            items={[
              ["Empezar bien.", "Sin ERP monstruoso: un agente que atiende tu WhatsApp, una caja que cuadra y un panel que cabe en tu teléfono."],
              ["Crecer sin romperse.", "Cuando el negocio crezca, los módulos crecen contigo — mismo sistema, más músculo."],
              ["Precio de arranque.", "Proyectos fundadores con condiciones especiales por documentar el caso."],
            ]}
          />
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <span className="label"><Icono n="chat" /> Estación 02 · WhatsApp</span>
          <SecHead
            titulo="Marco te cotiza por nota de voz"
            lead="Ágil, cercano y con tus precios reales. Así suena tu negocio atendiendo a las 11 de la noche."
          />
          <div className="split split-top">
            <div className="wa" data-reveal="izq">
              <div className="wa-top">
                <span className="av">M</span>
                <div>
                  <b>Ferretería El Compás</b>
                  <small>Marco · Agente Da Vinci · en línea</small>
                </div>
              </div>
              <div className="wa-cuerpo">
                <div className="wa-msg">Hola, ¿tienen bomba de 1½&quot;? ¿precio?<span className="hora">10:41 pm</span></div>
                <div className="wa-msg out">
                  <div className="wa-audio">
                    <span className="play"><Icono n="play" tam={12} /></span>
                    <span className="onda" aria-hidden="true">
                      {ONDA.map((h, i) => <i key={i} style={{ height: h }} />)}
                    </span>
                    <span className="mono" style={{ fontSize: ".6rem" }}>0:20</span>
                  </div>
                  <span className="hora">10:42 pm ✓✓</span>
                </div>
                <div className="wa-msg out">Te dejo el resumen por escrito 👇<span className="hora">10:42 pm ✓✓</span></div>
                <div className="wa-msg out">
                  Bomba 1½&quot;: <b>$2,300</b> · con manguera reforzada: <b>$2,600</b>
                  <span className="hora">10:42 pm ✓✓</span>
                </div>
                <div className="wa-msg">El paquete. ¿Lo recojo mañana?<span className="hora">10:44 pm</span></div>
                <div className="wa-msg out">
                  ¡Hecho! Queda <b>apartado a tu nombre</b>. Te espero desde las 9:00 ✅
                  <span className="hora">10:44 pm ✓✓</span>
                </div>
              </div>
            </div>

            <div data-reveal="der">
              <span className="label"><Icono n="llamada" /> Estación 01 · voz</span>
              <h3>Valentina llama a tu cliente</h3>
              <p className="muted">
                Confirma la entrega, recuerda la factura y ofrece la liga de pago — con calidez de persona y
                memoria de máquina.
              </p>
              <div className="panel" style={{ marginTop: "1.2rem" }}>
                <div className="panel-head">
                  <span>Valentina · entregas y cobranza</span>
                  <span className="vivo"><i className="punto" />00:42</span>
                </div>
                <div className="feed" style={{ maxHeight: "none" }}>
                  {VALENTINA.map((t) => (
                    <div className="feed-item" key={t}><span>{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split split-top">
            <div>
              <span className="label"><Icono n="celular" /> Estación 05 · en tu teléfono</span>
              <SecHead
                titulo="Recíbelo en TU WhatsApp"
                lead="Escribe tu número y un agente Da Vinci te escribe de verdad. La demo más corta del mundo: tu teléfono vibrando."
              />
              <DemoTelefono />
            </div>
            <div style={{ display: "grid", gap: "1rem", alignContent: "start" }}>
              <Panel
                head="Mi Negocio · hoy"
                filas={[["Ventas del día", "$8,240"], ["Fiado con recordatorio", "3 clientes"], ["Pedido de mañana", "✓ sugerido"]]}
                top={["Tu changarro", "en tu bolsillo"]}
              />
              <Plataforma
                ico="cohete"
                nombre="Mi Negocio Da Vinci"
                href="/contacto"
                texto="Ventas en vivo, fiado con recordatorios de LISA y el pedido de mañana listo — en una app que cabe en tu teléfono."
              />
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="¿Arrancamos tu primer sistema?"
        texto="En el diagnóstico gratuito mapeamos tu operación y te mostramos por dónde empezar — a precio de arranque."
      />
    </>
  );
}
