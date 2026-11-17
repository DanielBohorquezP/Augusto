import { allPosts } from "@/lib/posts";

// Feed RSS del blog. Se genera en el build a partir de content/blog/ (mismo
// origen que el sitemap), asi que no hay que tocarlo al publicar un post.
export const dynamic = "force-static";

const baseUrl = "https://www.augustoruiz.org";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const posts = [...allPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const items = posts
    .map((p) => {
      const url = `${baseUrl}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const lastBuild = posts[0] ? new Date(`${posts[0].dateModified ?? posts[0].date}T12:00:00Z`).toUTCString() : new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Augusto Ruiz — Blog de innovación</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Evaluación financiera de proyectos de innovación, beneficios tributarios e IA generativa en Colombia.</description>
    <language>es-CO</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
