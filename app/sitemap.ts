import { MetadataRoute } from "next";
import { allPosts, getAllCategories, slugifyCategory } from "@/lib/posts";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const static_ = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
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
