import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo trata sus datos personales ${site.brandFull}.`,
  robots: { index: false, follow: true },
};

export default function Privacidad() {
  return (
    <LegalLayout title="Política de privacidad" updated="Junio 2026">
      <p>
        En {site.brandFull} respetamos tu privacidad. Esta política explica qué
        datos recopilamos cuando nos contactás y cómo los utilizamos, en línea con
        la Ley 25.326 de Protección de los Datos Personales de la República
        Argentina.
      </p>

      <h2>Qué datos recopilamos</h2>
      <p>
        Recopilamos únicamente los datos que vos nos brindás voluntariamente al
        completar el formulario de contacto o al escribirnos por WhatsApp o
        teléfono: nombre, número de teléfono, zona y el detalle del trabajo
        eléctrico que necesitás.
      </p>

      <h2>Para qué los usamos</h2>
      <p>
        Usamos tus datos exclusivamente para responder tu consulta, coordinar la
        visita del electricista, elaborar el presupuesto y darte seguimiento. No
        los usamos con fines publicitarios sin tu consentimiento.
      </p>

      <h2>Con quién los compartimos</h2>
      <p>
        No vendemos ni cedemos tus datos a terceros. El formulario de contacto
        abre una conversación de WhatsApp; al enviarlo, el mensaje se transmite a
        través de WhatsApp, sujeto a sus propias políticas de privacidad.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Podés solicitar el acceso, la rectificación o la eliminación de tus datos
        en cualquier momento escribiéndonos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. La Agencia de Acceso a
        la Información Pública es el órgano de control de la Ley 25.326.
      </p>

      <h2>Contacto</h2>
      <p>
        Ante cualquier duda sobre esta política, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
