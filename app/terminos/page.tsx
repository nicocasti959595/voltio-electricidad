import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio de ${site.brandFull}.`,
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <LegalLayout title="Términos y condiciones" updated="Junio 2026">
      <p>
        Al utilizar este sitio web y/o contratar los servicios de{" "}
        {site.brandFull}, aceptás los siguientes términos y condiciones.
      </p>

      <h2>Servicios</h2>
      <p>
        {site.brandFull} ofrece servicios de instalación, reparación,
        normalización y urgencias eléctricas para hogares, oficinas y comercios en{" "}
        {site.region}. Antes de iniciar cualquier trabajo se informa el
        presupuesto, que el cliente debe aceptar.
      </p>

      <h2>Presupuestos y precios</h2>
      <p>
        El presupuesto se brinda sin cargo y de forma previa al trabajo. Los
        precios pueden variar según el tipo de instalación, la complejidad de la
        reparación y los materiales necesarios. El precio final se confirma antes
        de comenzar.
      </p>

      <h2>Garantía</h2>
      <p>
        Las instalaciones, reparaciones y materiales cuentan con garantía. La
        cobertura y el plazo se informan al momento de realizar el servicio y se
        entregan por escrito. Quedan excluidos los daños provocados por mal uso,
        falta de mantenimiento o intervención de terceros sobre la instalación.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        La información de este sitio es de carácter general y orientativo. Los
        tiempos de respuesta son estimados y pueden variar según la distancia, la
        zona y la demanda. Este es un sitio de demostración: la marca, los datos
        de contacto y las reseñas son ilustrativos.
      </p>

      <h2>Contacto</h2>
      <p>
        Por consultas sobre estos términos, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
