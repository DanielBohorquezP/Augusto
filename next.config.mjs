/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Compresión gzip/brotli de las respuestas (ya es el default de Next, se deja explícito).
  compress: true,
  async headers() {
    return [
      // Assets con hash en el nombre (JS/CSS de build) — seguros de cachear "para siempre".
      //
      // SOLO en producción. En desarrollo los chunks NO llevan hash en el nombre
      // (`app/layout.js`, `webpack.js`, `main-app.js`), así que marcarlos `immutable`
      // hace que el navegador los cachee un año y nunca los revalide. Al recompilar,
      // el navegador sigue sirviendo el chunk viejo, el registro de módulos de webpack
      // deja de cuadrar y salta `ChunkLoadError: Loading chunk app/layout failed`.
      // React no llega a hidratar y TODOS los componentes cliente quedan muertos
      // (el menú deja de abrir, los formularios no responden). Borrar `.next` no lo
      // arregla, porque lo que está sucio es la caché HTTP del navegador, no el build.
      ...(isProd
        ? [
            {
              source: "/_next/static/:path*",
              headers: [
                { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
              ],
            },
          ]
        : []),
      {
        // Imágenes y archivos estáticos servidos desde /public.
        source: "/(images|logos)/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cabeceras de seguridad. No son factor de ranking directo, pero son
        // higiene estándar y parte de las señales de confianza del sitio.
        // Solo había HSTS (que pone Vercel); faltaba todo lo demás.
        source: "/:path*",
        headers: [
          // Impide que el navegador adivine el tipo MIME e interprete como script
          // algo que se sirvió como otra cosa.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Evita que el sitio se embeba en un iframe ajeno (clickjacking).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Al salir del sitio se envía solo el origen, nunca la ruta completa.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // El sitio no usa cámara, micrófono ni geolocalización: se deniegan.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
