import { steps } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ice">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
            De la consulta a la instalación lista, en 4 pasos
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-ice/30 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="relative text-center">
              <div className="relative mx-auto grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br from-ice-bright to-ice-deep text-ink font-display text-xl font-extrabold shadow-lg shadow-ice/20">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-mist px-2">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
