"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

function fmt(n: number, target: number) {
  const isDecimal = !Number.isInteger(target);
  if (isDecimal) return n.toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const r = Math.round(n);
  return r >= 1000 ? r.toLocaleString("es-AR") : String(r);
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="text-center">
      <p className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-ice">
        {fmt(n, value)}
        <span className="text-2xl sm:text-3xl">{suffix}</span>
      </p>
      <p className="mt-1.5 text-sm text-mist">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-14">
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-3xl px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Stat key={s.label} {...s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
