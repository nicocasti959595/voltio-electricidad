import { site, waLink, telLink, WA_DEFAULT_MSG } from "@/lib/site";
import { SnowLogo, IconPhone, IconWhatsApp } from "./Icons";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque", label: "Por qué elegirnos" },
  { href: "#zonas", label: "Zonas de cobertura" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const SERV = [
  "Instalaciones eléctricas",
  "Tableros y disyuntores",
  "Urgencias eléctricas 24 hs",
  "Puesta a tierra",
  "Iluminación y tomas",
  "Normalización AEA",
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-ice-bright to-ice-deep text-ink">
                <SnowLogo className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-white">{site.name}</span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ice">
                  Electricidad
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-mist max-w-xs">
              Electricistas matriculados en {site.region}. Instalaciones,
              reparaciones y urgencias eléctricas, seguras y con garantía.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={telLink} className="inline-flex items-center gap-2 text-white font-semibold hover:text-ice transition">
                <IconPhone className="h-4 w-4 text-ice" /> {site.phoneDisplay}
              </a>
              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mist hover:text-white transition"
              >
                <IconWhatsApp className="h-4 w-4 text-[#25D366]" /> WhatsApp directo
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-mist hover:text-white transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white">Servicios</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERV.map((s) => (
                <li key={s} className="text-mist">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white">Atención</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              <li>{site.hours}</li>
              <li>Visitas: {site.responseTime}</li>
              <li>{site.region}</li>
              <li>{site.email}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="/privacidad" className="text-xs text-mist hover:text-white underline underline-offset-2">
                Privacidad
              </a>
              <span className="text-line">·</span>
              <a href="/terminos" className="text-xs text-mist hover:text-white underline underline-offset-2">
                Términos
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist">
          <p>
            © {new Date().getFullYear()} {site.brandFull}. Todos los derechos
            reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://ideawebx.com"
              rel="dofollow"
              className="font-semibold text-ice hover:text-ice-bright underline underline-offset-2"
            >
              IdeaWebX
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-mist/60">
          Sitio de demostración. Marca, datos de contacto y reseñas son ilustrativos.
        </p>
      </div>
    </footer>
  );
}
