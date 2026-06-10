"use client";

import { waLink, WA_QUOTE_MSG } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink(WA_QUOTE_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir presupuesto por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3.5 font-bold text-[#06310f] shadow-2xl shadow-black/40 hover:scale-105 transition"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] animate-ping opacity-60" />
        <IconWhatsApp className="relative h-7 w-7" />
      </span>
      <span className="hidden sm:block text-sm">Presupuesto gratis</span>
    </a>
  );
}
