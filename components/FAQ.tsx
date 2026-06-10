"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { waLink, WA_DEFAULT_MSG } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ice">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
            Todo lo que querés saber
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition ${
                  isOpen ? "border-ice/40 bg-steel/50" : "border-line bg-steel/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-display font-semibold text-white">{f.q}</span>
                  <span
                    className={`grid place-items-center h-7 w-7 shrink-0 rounded-full border border-line text-ice transition ${
                      isOpen ? "rotate-45 bg-ice/10" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-mist">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-mist">
          ¿Tenés otra duda?{" "}
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ice underline underline-offset-4 hover:text-ice-bright"
          >
            Escribinos por WhatsApp
          </a>{" "}
          y te respondemos al instante.
        </p>
      </div>
    </section>
  );
}
