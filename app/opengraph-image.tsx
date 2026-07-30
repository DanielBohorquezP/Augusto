import { ImageResponse } from "next/og";

// Imagen OG por defecto del sitio (1200×630) — se genera en build.
// Las páginas de blog tienen la suya propia en app/blog/[slug]/opengraph-image.tsx.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0E1C3D",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "10px",
            backgroundColor: "#CE2222",
          }}
        />
        <div
          style={{
            backgroundColor: "#CE2222",
            color: "#FFFFFF",
            fontSize: "24px",
            fontWeight: 600,
            padding: "10px 28px",
            borderRadius: "999px",
            marginBottom: "36px",
          }}
        >
          Consultoría en Innovación Tecnológica
        </div>
        <div style={{ color: "#FFFFFF", fontSize: "84px", fontWeight: 700 }}>
          Augusto Ruiz
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "30px",
            marginTop: "20px",
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          PhD(c) Universidad de los Andes
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "26px",
            marginTop: "48px",
          }}
        >
          augustoruiz.org
        </div>
      </div>
    ),
    size
  );
}
