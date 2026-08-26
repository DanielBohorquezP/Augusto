import { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";

const baseUrl = "https://www.augustoruiz.org";

// `lastModified` se mantiene A MANO, en formato YYYY-MM-DD.
//
// Antes se leía el `mtime` del archivo fuente, con la buena intención de no
// publicar frescura falsa. Pero en Vercel el `git clone` del build reescribe el
// mtime de TODOS los archivos con la hora del checkout, así que el sitemap
// acababa declarando las 12 rutas modificadas en el mismo segundo, en cada
// despliegue. Google solo hace caso a <lastmod> mientras lo encuentre fiable:
// si un sitio le dice que todo cambió y al recrastrear ve páginas idénticas,
// deja de usar la señal para priorizar. En un dominio nuevo, con presupuesto
// de rastreo ajustado, eso se paga caro.
//
// Al publicar un cambio de contenido real en una página, actualiza su fecha
// aquí. Un cambio solo de estilo o de refactor NO cuenta: si la fecha no
// corresponde a un cambio que el lector notaría, es mejor dejarla quieta.
// Las fechas iniciales salen del último commit que tocó cada archivo.
const staticRoutes = [
  { path: "", lastModified: "2026-08-18", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/sobre", lastModified: "2026-08-12", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios", lastModified: "2026-08-18", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios/beneficios-tributarios-innovacion", lastModified: "2026-08-26", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios/evaluacion-financiera-innovacion", lastModified: "2026-08-18", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/servicios/capacitacion-ia-generativa", lastModified: "2026-08-18", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/prime-10", lastModified: "2026-08-15", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/docencia", lastModified: "2026-08-15", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", lastModified: "2026-08-18", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/medios", lastModified: "2026-08-12", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contacto", lastModified: "2026-08-12", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/politica-privacidad", lastModified: "2026-08-05", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const static_ = staticRoutes
    .filter(({ path: route }) => !(route === "/blog" && allPosts.length === 0))
    .map(({ path: route, lastModified, priority, changeFrequency }) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(`${lastModified}T00:00:00.000Z`),
      changeFrequency,
      priority,
    }));

  const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...static_, ...blogPosts];
}
