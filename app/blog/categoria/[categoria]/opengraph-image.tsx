import { ImageResponse } from "next/og";
import { getAllCategories, getCategoryBySlug, slugifyCategory } from "@/lib/posts";

// Imagen OG generada automáticamente para cada página de categoría (1200×630).

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ categoria: slugifyCategory(c) }));
}

export default function OgImage({ params }: { params: { categoria: string } }) {
  const category = getCategoryBySlug(params.categoria) ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0E1C3D",
          padding: "64px 72px",
          fontFamily: "sans-serif",
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

        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "#CE2222",
              color: "#FFFFFF",
              fontSize: "26px",
              fontWeight: 600,
              padding: "10px 26px",
              borderRadius: "999px",
            }}
          >
            Blog
          </div>
        </div>

        <div
          style={{
            color: "#FFFFFF",
            fontSize: "62px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "1000px",
          }}
        >
          {category}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255,255,255,0.2)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 700 }}>
              Augusto Ruiz
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "22px" }}>
              PhD(c) Universidad de los Andes · Consultor en Innovación Tecnológica
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "24px" }}>
            augustoruiz.org
          </div>
        </div>
      </div>
    ),
    size
  );
}
