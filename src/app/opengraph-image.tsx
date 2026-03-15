import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nicolae-Valentin Dinca - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #f8f5f0 0%, #e8e5e0 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "#0c0c0c",
            marginBottom: 12,
          }}
        >
          Nicolae-Valentin Dincă
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#0f2a23",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#b8b2a9",
            marginTop: 24,
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          Custom digital identities for luxury real estate
        </div>
      </div>
    ),
    { ...size }
  );
}
