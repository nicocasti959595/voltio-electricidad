import { zones } from "@/lib/content";
import { site, waLink, WA_DEFAULT_MSG } from "@/lib/site";
import { IconMap, IconWhatsApp, IconCheck } from "./Icons";

export default function Coverage() {
  return (
    <section id="zonas" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute -left-20 top-10 -z-10 h-80 w-80 rounded-full bg-heat/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ice">
            Dónde trabajamos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
            Cobertura en {site.region}
          </h2>
          <p className="mt-4 text-mist max-w-lg">
            Llegamos con nuestros electricistas a tu domicilio, oficina o comercio
            para instalar, reparar o normalizar la instalación. Estos son algunos
            de los barrios y localidades donde trabajamos a diario:
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {zones.map((z) => (
              <li
                key={z}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-steel/50 px-3 py-1.5 text-sm text-white/85 hover:border-ice/40 hover:text-white transition"
              >
                <IconCheck className="h-3.5 w-3.5 text-ice" />
                {z}
              </li>
            ))}
          </ul>

          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-ice px-5 py-3 text-sm font-bold text-ink hover:bg-ice-bright transition"
          >
            <IconWhatsApp className="h-4 w-4" />
            ¿Llegan a mi zona? Consultar
          </a>
        </div>

        <div className="relative">
          <div className="glass rounded-3xl p-3 shadow-2xl">
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title={`Zona de cobertura de ${site.brandFull}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.62%2C-34.74%2C-58.30%2C-34.52&layer=mapnik&marker=-34.6037%2C-58.4892"
                className="w-full h-[360px] grayscale-[0.2] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-ink shadow-xl">
            <IconMap className="h-6 w-6 text-heat" />
            <div className="leading-tight">
              <p className="text-xs text-slate-500">Visita</p>
              <p className="text-sm font-extrabold">El mismo día</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
