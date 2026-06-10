import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandFull} — Electricistas matriculados en CABA y GBA`,
    template: `%s | ${site.brandFull}`,
  },
  description:
    "Electricistas matriculados en CABA y Gran Buenos Aires. Instalaciones eléctricas, tableros y disyuntores, urgencias 24 hs, detección de fallas, puesta a tierra y normalización según reglamento AEA. Presupuesto sin cargo y atención el mismo día.",
  keywords: [
    "electricista",
    "electricista matriculado",
    "electricista a domicilio",
    "instalaciones eléctricas",
    "urgencias eléctricas 24 horas",
    "tablero eléctrico",
    "puesta a tierra",
    "electricista CABA",
    "electricista zona norte",
    "normalización eléctrica AEA",
  ],
  authors: [{ name: site.brandFull }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brandFull,
    title: `${site.brandFull} — Instalaciones y urgencias eléctricas`,
    description:
      "Electricistas matriculados en CABA y GBA. Instalaciones, tableros, puesta a tierra y urgencias 24 hs. Presupuesto sin cargo y atención el mismo día.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandFull} — Electricistas 24 hs`,
    description:
      "Instalaciones, reparaciones y urgencias eléctricas en CABA y Gran Buenos Aires. Presupuesto sin cargo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Electrician",
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
