import { services } from "@/lib/content";
import { iconMap, IconArrow } from "./Icons";
import { waLink, WA_DEFAULT_MSG } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ice">
            Qué hacemos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
            Soluciones eléctricas de principio a fin
          </h2>
          <p className="mt-4 text-mist">
            Hogar, oficina o comercio. Te asesoramos, instalamos, reparamos y
            normalizamos tu instalación con materiales de calidad, según norma y
            con garantía por escrito.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal
                as="article"
                key={s.title}
                delay={i * 60}
                className="card-glow glass rounded-2xl p-6 flex flex-col"
              >
                <span className="grid place-items-center h-13 w-13 rounded-xl bg-ice/10 text-ice ring-1 ring-ice/20 p-3">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-mist flex-1">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-line bg-steel/40 px-6 py-5 text-center sm:text-left">
          <p className="text-white font-medium">
            ¿No ves lo que necesitás? Consultanos, seguro lo hacemos.
          </p>
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-ice px-5 py-2.5 text-sm font-bold text-ink hover:bg-ice-bright transition"
          >
            Consultar ahora <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
