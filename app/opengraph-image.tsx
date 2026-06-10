import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brandFull} — Electricistas matriculados en CABA y GBA`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1100px 520px at 80% -12%, rgba(255,214,10,0.30), transparent 60%), radial-gradient(900px 500px at 0% 120%, rgba(47,107,255,0.22), transparent 60%), linear-gradient(135deg, #0a0e1a 0%, #060810 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #ffe45e, #caa204)",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 64 64" fill="#0a0e1a">
              <path d="M35 8 L18 36 H30 L27 56 L46 26 H33 Z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>{site.name}</span>
            <span style={{ fontSize: 18, color: "#ffe45e", letterSpacing: 4 }}>
              ELECTRICIDAD
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,214,10,0.16)",
              border: "1px solid rgba(255,214,10,0.5)",
              color: "#ffe98a",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#ffd60a", display: "flex" }} />
            ELECTRICISTAS MATRICULADOS · URGENCIAS 24 HS
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            <span>Instalaciones y</span>
            <span style={{ color: "#ffd60a" }}>urgencias</span>
            <span>eléctricas</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9aa8c8", maxWidth: 940 }}>
            Tableros · Puesta a tierra · Iluminación · Normalización AEA · Atención el mismo día
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#ffe45e" }}>
            {site.phoneDisplay}
          </span>
          <span style={{ display: "flex", fontSize: 22, color: "#9aa8c8" }}>
            CABA y GBA · Presupuesto sin cargo
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
