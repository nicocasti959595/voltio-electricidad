import { site, waLink, telLink, WA_QUOTE_MSG } from "@/lib/site";
import {
  IconWhatsApp,
  IconPhone,
  IconCheck,
  IconStar,
  IconArrow,
  IconSnow,
  IconThermo,
  IconBadge,
} from "./Icons";

const trust = [
  "Electricistas matriculados",
  "Presupuesto sin cargo",
  "Trabajo con garantía",
];

const breakers = ["F1", "F2", "F3", "F4"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Fondos */}
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute -top-40 -right-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-ice/15 blur-[120px]" />
      <div className="absolute -bottom-48 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-heat/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-ice/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna texto */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-ice/30 bg-ice/10 px-4 py-1.5 text-xs font-semibold text-ice">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ice animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ice" />
            </span>
            Atendiendo hoy · {site.region}
          </div>

          <h1 className="mt-6 font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl text-white">
            Tu casa con la{" "}
            <span className="text-gradient-ice">energía segura</span>,
            sin sustos
          </h1>

          <p className="mt-5 text-lg text-mist max-w-xl">
            {site.claim} Instalamos, reparamos y normalizamos tu instalación
            eléctrica en toda {site.region}. Urgencias 24 hs y atención{" "}
            {site.responseTime}.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/90">
                <IconCheck className="h-5 w-5 text-ice" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink(WA_QUOTE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-ice px-7 py-4 text-base font-bold text-ink shadow-xl shadow-ice/25 hover:bg-ice-bright transition"
            >
              <IconWhatsApp className="h-5 w-5" />
              Pedir presupuesto
              <IconArrow className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-line bg-white/5 px-7 py-4 text-base font-bold text-white hover:bg-white/10 hover:border-ice/40 transition"
            >
              <IconPhone className="h-5 w-5 text-ice" />
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 text-sm text-mist">
            <div className="flex -space-x-2">
              {["RA", "GP", "CM", "DF"].map((i) => (
                <span
                  key={i}
                  className="grid place-items-center h-8 w-8 rounded-full border-2 border-night bg-steel-2 text-[10px] font-bold text-ice"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex text-ice">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="font-semibold text-white">4,9</span>
              <span>· +310 reseñas reales</span>
            </div>
          </div>
        </div>

        {/* Columna visual — tablero eléctrico */}
        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md">
            <div className="glass rounded-3xl p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br from-ice-bright to-ice-deep text-ink animate-float">
                  <IconSnow className="h-8 w-8" />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-blink" />
                  TABLERO OK
                </span>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-6xl font-extrabold text-white leading-none">220</span>
                <span className="mb-1.5 text-2xl font-display font-bold text-ice">V</span>
                <span className="mb-2 ml-auto text-xs text-mist">tensión estable</span>
              </div>

              <div className="mt-3 h-2 rounded-full bg-night/70 overflow-hidden">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-ice-deep via-ice to-ice-bright" />
              </div>

              {/* Fila de térmicas / disyuntor */}
              <div className="mt-5 grid grid-cols-4 gap-2">
                {breakers.map((f) => (
                  <div
                    key={f}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-night/60 p-2"
                  >
                    <span className="relative h-8 w-4 rounded-full bg-ice/15 ring-1 ring-ice/30">
                      <span className="absolute left-1/2 top-0.5 h-3 w-3 -translate-x-1/2 rounded-full bg-ice shadow-[0_0_10px_rgba(255,214,10,0.6)]" />
                    </span>
                    <span className="text-[10px] font-bold text-mist">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-line bg-night/60 p-4">
                  <p className="text-2xl font-display font-extrabold text-ice">Hoy</p>
                  <p className="text-xs text-mist">coordinamos la visita</p>
                </div>
                <div className="rounded-2xl border border-line bg-night/60 p-4">
                  <p className="text-2xl font-display font-extrabold text-ice">En norma</p>
                  <p className="text-xs text-mist">reglamento AEA</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-ice/20 bg-ice/5 p-3 text-sm text-white/90">
                <IconBadge className="h-5 w-5 text-ice shrink-0" />
                Instalación y reparación con garantía por escrito
              </div>
            </div>

            {/* Badge flotante (urgencias) */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-ink shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
              <IconThermo className="h-6 w-6 text-heat" />
              <div className="leading-tight">
                <p className="text-xs text-slate-500">Urgencias</p>
                <p className="text-sm font-extrabold">24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
