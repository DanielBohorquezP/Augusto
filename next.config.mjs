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
    ];
  },
};

export default nextConfig;
