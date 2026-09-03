import { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";
import { staticRoutes } from "@/lib/routes";

const baseUrl = "https://www.augustoruiz.org";

// Las fechas y prioridades por ruta viven en lib/routes.ts: el mismo dato
// alimenta el <lastmod> del sitemap y el label "Ultima actualizacion" visible
// en cada pagina, para que no puedan contradecirse. La explicacion de por que
// se mantienen a mano esta en ese archivo.
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
