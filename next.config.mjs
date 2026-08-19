/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compresión gzip/brotli de las respuestas (ya es el default de Next, se deja explícito).
  compress: true,
  async headers() {
    return [
      {
        // Assets con hash en el nombre (JS/CSS de build) — seguros de cachear "para siempre".
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
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
