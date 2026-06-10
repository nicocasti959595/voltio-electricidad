"use client";

import { useEffect, useState } from "react";
import { site, waLink, telLink, WA_QUOTE_MSG } from "@/lib/site";
import { SnowLogo, IconPhone, IconWhatsApp } from "./Icons";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque", label: "Por qué elegirnos" },
  { href: "#zonas", label: "Zonas" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Barra superior */}
      <div className="bg-heat-deep text-white text-[13px] sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-center sm:justify-between gap-3">
          <p className="font-semibold tracking-wide flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            URGENCIAS 24 HS · ELECTRICISTAS MATRICULADOS
          </p>
          <a
            href={telLink}
            className="hidden sm:flex items-center gap-1.5 font-bold hover:underline underline-offset-2"
          >
            <IconPhone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Navegación */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-night/90 backdrop-blur-md border-b border-line shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-ice-bright to-ice-deep text-ink shadow-lg shadow-ice/20 group-hover:scale-105 transition">
              <SnowLogo className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-extrabold text-[17px] text-white">
                {site.name}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-ice">
                Electricidad
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm text-mist">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink(WA_QUOTE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-ice px-4 py-2.5 text-sm font-bold text-ink hover:bg-ice-bright transition shadow-lg shadow-ice/25"
            >
              <IconWhatsApp className="h-4 w-4" />
              Pedir presupuesto
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-line text-white"
            >
              <span className="sr-only">Menú</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Menú mobile */}
        {open && (
          <div className="lg:hidden border-t border-line bg-night/95 backdrop-blur-md">
            <ul className="px-4 py-3 space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg text-mist hover:text-white hover:bg-white/5"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={waLink(WA_QUOTE_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-ice px-4 py-3 font-bold text-ink"
                >
                  <IconWhatsApp className="h-5 w-5" /> Pedir presupuesto por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
