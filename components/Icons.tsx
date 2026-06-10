import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* Logo: rayo / voltaje (relleno) */
export function SnowLogo(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />
    </svg>
  );
}

/* Alias del logo (rayo) */
export function IconSnow(props: P) {
  return <SnowLogo {...props} />;
}

/* ===== Servicios ===== */
export function IconWiring(props: P) {
  // Cable / cableado
  return (
    <svg {...base} {...props}>
      <path d="M3 7c3 0 3 5 6 5s3-5 6-5" />
      <path d="M9 17c3 0 3-2.5 6-2.5s3 2.5 6 2.5" />
      <circle cx="3" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="21" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPanel(props: P) {
  // Tablero eléctrico con térmicas
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7v4M12 6v4M16 8v4" />
      <path d="M7 16h10" />
    </svg>
  );
}

export function IconBolt(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />
    </svg>
  );
}

export function IconDiagnose(props: P) {
  // Lupa con rayo (detección de fallas)
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
      <path d="M11 7l-2.3 3.5H11l-.6 3 2.6-3.6H11z" />
    </svg>
  );
}

export function IconBulb(props: P) {
  // Iluminación
  return (
    <svg {...base} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.8 10.6c.5.4.8 1 .8 1.6V16h6v-.8c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z" />
    </svg>
  );
}

export function IconGround(props: P) {
  // Puesta a tierra
  return (
    <svg {...base} {...props}>
      <path d="M12 3v9" />
      <path d="M6 12h12" />
      <path d="M8 16h8" />
      <path d="M10 20h4" />
    </svg>
  );
}

export function IconOutlet(props: P) {
  // Tomacorriente
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M10 9v2.5M14 9v2.5" />
      <path d="M9.5 15h5" />
    </svg>
  );
}

export function IconCertificate(props: P) {
  // Certificado / normalización
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="13" rx="2" />
      <path d="M7.5 7h9M7.5 10h6" />
      <circle cx="12" cy="18" r="2.6" />
      <path d="M10.4 19.8L9.5 23l2.5-1.4 2.5 1.4-.9-3.2" />
    </svg>
  );
}

/* ===== Por qué elegirnos ===== */
export function IconClock(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconWallet(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6" width="17" height="13" rx="2.5" />
      <path d="M3.5 10h17" />
      <circle cx="16.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBadge(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.2 1.6 2.7-.2.9 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6L4 15.6l.9-2.6L4 10.4l2.2-1.6.9-2.6 2.7.2z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function IconTools(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 5.5a3 3 0 0 0 3.9 3.9l1.6 1.6a1 1 0 0 1 0 1.4l-1.4 1.4" />
      <path d="M6.5 11.5L4 14a2 2 0 1 0 2.8 2.8l4.4-4.4" />
      <path d="M14.5 5.5L9 11l1.5 1.5" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

export function IconShield(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 2.5v5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5v-5L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconMap(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

/* ===== UI ===== */
export function IconPlug(props: P) {
  // Enchufe / energía
  return (
    <svg {...base} {...props}>
      <path d="M9 2v5M15 2v5" />
      <path d="M6 7h12v2.5a6 6 0 0 1-12 0z" />
      <path d="M12 15.5V22" />
    </svg>
  );
}

/* Compat: usado como ícono de acento (enchufe) */
export function IconThermo(props: P) {
  return <IconPlug {...props} />;
}

export function IconPhone(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}

export function IconWhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function IconArrow(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconStar(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.9 6.2 20.95l1.1-6.5-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export const iconMap = {
  wiring: IconWiring,
  panel: IconPanel,
  bolt: IconBolt,
  diagnose: IconDiagnose,
  bulb: IconBulb,
  ground: IconGround,
  outlet: IconOutlet,
  certificate: IconCertificate,
  tools: IconTools,
  wallet: IconWallet,
  badge: IconBadge,
  shield: IconShield,
  map: IconMap,
  clock: IconClock,
} as const;
