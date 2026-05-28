import { ImageResponse } from "next/og";
import { ABOUT } from "@/lib/about";

export const alt = `${ABOUT.name} · Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "#0b0a08",
          color: "#f7f3ed",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#e3733a",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "10px",
              background: "#e3733a",
            }}
          />
          Portfolio · nnaren.pro
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontSize: "118px",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 0.92,
            }}
          >
            {ABOUT.name}
          </div>
          <div
            style={{
              fontSize: "46px",
              lineHeight: 1.18,
              maxWidth: "1000px",
              color: "#f7f3ed",
              letterSpacing: "-0.01em",
            }}
          >
            {ABOUT.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "26px",
            color: "#a8a29c",
            lineHeight: 1.4,
            maxWidth: "1040px",
          }}
        >
          <div style={{ color: "#f7f3ed", fontWeight: 500 }}>
            AI-native Product Operations Lead.
          </div>
          <div>
            Modular frameworks · AI products shipped solo · 12+ yrs across
            Meta, EarnIn, and Deloitte.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
