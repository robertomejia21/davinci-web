import Link from "next/link";
import { PageHero, SecHead, CtaFinal, Panel } from "@/components/ui";
import { Plataforma, EnCorto, Nota } from "@/components/site/bloques";
import { ChatCentral } from "@/components/demos/chats";

import { Icono } from "@/components/ui/Icono";
export const metadata = {
  title: "Área Financiera y fiscal — Demos",
  description: "Contabilidad, tesorería y fiscal con inteligencia operativa: conciliación automática, flujo proyectado y CFDI sin sustos.",
  alternates: { canonical: "/demos/financiera" },
};

export default function DemoFinanciera() {
  return (
    <>
      <PageHero
        miga={[{ href: "/demos", titulo: "Sala de demos" }, { titulo: "Financiera y fiscal" }]}
        titulo={<>Financiera y <em>fiscal</em>.</>}
        lead="El área que todos cruzan: números que se cuidan solos y cierres sin batalla."
        chips={["contabilidad", "tesoreria", "cfdi"]}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SecHead label="Este mundo, en corto" titulo="Tres frentes, cero sustos." />
          <EnCorto
            items={[
              ["Contabilidad.", "Pólizas y conciliaciones que se arman solas; tú revisas excepciones."],
              ["Tesorería.", "Flujo a 30/60/90 días con alertas antes del bache."],
              ["Fiscal.", "CFDI, complementos y calendario de obligaciones sin sustos."],
            ]}
          />
        </div>
      </section>

      <section className="sec sec-2">
        <div className="wrap">
          <span className="label"><Icono n="cerebro" /> Estación 04 · Da Vinci Central</span>
          <SecHead
            titulo="Pregúntale a la empresa"
            lead="El centro de inteligencia operativa: elige una pregunta y mira la respuesta armarse con datos."
          />
          <div className="split split-top">
            <div data-reveal="izq"><ChatCentral /></div>
            <div style={{ display: "grid", gap: "1rem", alignContent: "start" }}>
              <Panel
                head="Conciliación · sola"
                filas={[["184 movimientos del banco", "✓ 181 conciliados"], ["Excepciones para revisar", "3"]]}
                top={["Tiempo del contador", "20 min, no 2 días"]}
              />
              <Plataforma
                ico="banco"
                nombre="Tesorería Da Vinci"
                href="/contacto"
                texto="El libro mayor con cerebro: conciliación sola, flujo 30·60·90 con alertas y cobranza elegante."
              />
            </div>
          </div>
          <Nota>
            Mientras tanto: la página de{" "}
            <Link className="u-link" href="/finanzas">contabilidad, finanzas y fiscal</Link> detalla todo lo que
            construimos aquí.
          </Nota>
        </div>
      </section>

      <CtaFinal
        titulo="¿Tus números merecen cuidarse solos?"
        texto="En el diagnóstico gratuito mapeamos tu ciclo de cobranza y te mostramos esta plataforma con tus datos."
      />
    </>
  );
}
