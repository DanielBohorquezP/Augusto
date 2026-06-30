import { MetadataRoute } from "next";

const baseUrl = "https://www.augustoruiz.org";

const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/sobre", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/prime-10", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/docencia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/medios", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contacto", priority: 0.8, changeFrequency: "yearly" as const },
];

const blogSlugs = [
  "modelos-probabilisticos-innovacion",
  "ia-generativa-decisiones-organizacionales",
  "financiacion-innovacion-latam",
  "incertidumbre-tecnologica-riesgo",
  "prime-10-caso-startup",
  "opciones-reales-innovacion",
  "consultoria-innovacion-empresarial-colombia",
  "como-elegir-consultora-innovacion-colombia",
  "consultoria-innovacion-pymes-colombia",
  "tipos-consultoria-innovacion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const static_ = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const blogPosts = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...static_, ...blogPosts];
}
