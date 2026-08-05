import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { allPosts, getAllCategories, slugifyCategory } from "@/lib/posts";

const baseUrl = "https://www.augustoruiz.org";

const staticRoutes = [
  { path: "", file: "app/page.tsx", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/sobre", file: "app/sobre/page.tsx", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios", file: "app/servicios/page.tsx", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/prime-10", file: "app/prime-10/page.tsx", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/docencia", file: "app/docencia/page.tsx", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", file: "app/blog/page.tsx", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/medios", file: "app/medios/page.tsx", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contacto", file: "app/contacto/page.tsx", priority: 0.8, changeFrequency: "yearly" as const },
];

// Usa la fecha real de última modificación del archivo fuente en vez de la fecha
// del build, para que <lastmod> refleje cambios reales y no "frescura" falsa.
function fileLastModified(relativePath: string): Date {
  try {
    return fs.statSync(path.join(process.cwd(), relativePath)).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const static_ = staticRoutes.map(({ path: route, file, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: fileLastModified(file),
    changeFrequency,
    priority,
  }));

  const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const categoryPages = getAllCategories().map((category) => ({
    url: `${baseUrl}/blog/categoria/${slugifyCategory(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...static_, ...blogPosts, ...categoryPages];
}
