import Link from "next/link";
import { Miga, Enlace } from "@/components/ui";

export const metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Da Vinci IA: qué datos recabamos, para qué los usamos y cuáles son tus derechos.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <section className="phero">
        <div className="wrap wrap-txt" style={{ marginInline: "auto" }}>
          <Miga items={[{ href: "/", titulo: "Inicio" }, { titulo: "Aviso de privacidad" }]} />
          <h1 style={{ fontSize: "clamp(2rem,4.4vw,3.2rem)" }}>Aviso de privacidad</h1>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap wrap-txt" style={{ marginInline: "auto" }}>
          <div className="prosa">
            <p>
              Da Vinci IA (en adelante, «nosotros») es responsable del tratamiento de los datos personales que nos
              proporcionas a través del formulario de contacto de este sitio.
            </p>

            <h3>Datos que recabamos</h3>
            <ul>
              <li>Nombre</li>
              <li>Nombre de tu empresa</li>
              <li>Correo electrónico</li>
              <li>La descripción que nos compartas sobre tu necesidad</li>
            </ul>

            <h3>Para qué los usamos</h3>
            <p>
              Exclusivamente para responder a tu solicitud, agendar el diagnóstico que nos pides y darle
              seguimiento a la conversación. No vendemos ni compartimos tus datos con terceros.
            </p>

            <h3>Conservación y seguridad</h3>
            <p>
              Tus datos se almacenan con accesos controlados y solo el tiempo necesario para atender tu solicitud
              o la relación comercial que derive de ella.
            </p>

            <h3>Tus derechos</h3>
            <p>
              Puedes solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos
              escribiéndonos al correo de contacto publicado en este sitio.
            </p>

            <hr className="linea-h" style={{ margin: "2.4rem 0" }} />
            <p className="mono muted">Última actualización: agosto de 2026.</p>
            <p>
              <Link className="u-link" href="/">← Volver al inicio</Link> ·{" "}
              <Link className="u-link" href="/seguridad">Cómo protegemos los datos de tu empresa</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
