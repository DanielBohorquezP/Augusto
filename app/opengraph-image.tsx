import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Imagen OG por defecto del sitio (1200×630) — se genera en build.
// Replica el hero: foto de Augusto recortada sobre el azul de marca con el
// patrón de puntos. Las páginas de blog tienen la suya propia en
// app/blog/[slug]/opengraph-image.tsx.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori no resuelve rutas relativas ni hace fetch de /public: la foto se
// embebe como data URI leyendo el archivo en tiempo de build.
function photoDataUri(): string {
  const file = fs.readFileSync(
    path.join(process.cwd(), "public", "profile-photo-cutout.png")
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0E1C3D",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Patrón de puntos — mismo que el hero del sitio */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            // Satori exige unidad en cada parada del gradiente: "transparent 0"
            // (sin px) rompe su parser de CSS con "Missing )".
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Barra de acento superior */}
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

        {/* Texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "660px",
            padding: "0 0 0 72px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#CE2222",
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 600,
                padding: "10px 26px",
                borderRadius: "999px",
              }}
            >
              Consultoría en Innovación Tecnológica
            </div>
          </div>

          <div
            style={{
              color: "#FFFFFF",
              fontSize: "76px",
              fontWeight: 700,
              marginTop: "28px",
              lineHeight: 1.1,
            }}
          >
            Augusto Ruiz
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "28px",
              marginTop: "18px",
            }}
          >
            PhD(c) Universidad de los Andes
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "24px",
              marginTop: "40px",
            }}
          >
            augustoruiz.org
          </div>
        </div>

        {/* Foto */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "540px",
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoDataUri()}
            alt=""
            width={478}
            height={560}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size
  );
}
