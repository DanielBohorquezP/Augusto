import Link from "next/link";
import PostBody from "@/components/PostBody";
import { categoryColors } from "@/components/BlogPostCard";
import type { Post } from "@/lib/posts";

// Un artículo completo dentro del feed de /blog y /blog/categoria/*.
// El título enlaza a la URL propia del post (la que indexa Google).
export default function FeedArticle({ post }: { post: Post }) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}>
          {post.category}
        </span>
        <time className="text-xs text-muted-foreground" dateTime={post.date}>
          {new Date(post.date + "T12:00:00Z").toLocaleDateString("es-CO", {
            timeZone: "UTC",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="text-xs text-muted-foreground">· {post.readTime} lectura</span>
      </div>

      <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground leading-tight mb-6">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
          {post.title}
        </Link>
      </h2>

      {post.content ? (
        <PostBody blocks={post.content} withAnchors={false} />
      ) : (
        <p className="text-foreground text-base leading-relaxed">{post.excerpt}</p>
      )}

      <div className="mt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          Ver artículo en su página →
        </Link>
      </div>
    </article>
  );
}
