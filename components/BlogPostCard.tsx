import Link from "next/link";
import type { Post } from "@/lib/posts";

export const categoryColors: Record<string, string> = {
  "Consultoría": "bg-primary/10 text-primary",
  "Evaluación Financiera": "bg-primary/10 text-primary",
  "IA Generativa": "bg-accent/10 text-accent",
  "Financiación": "bg-green-50 text-green-700",
  "Metodología": "bg-purple-50 text-purple-700",
  "Casos de estudio": "bg-amber-50 text-amber-700",
};

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <div className="h-40 bg-primary/10 flex items-center justify-center">
        <svg className="w-10 h-10 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}>
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h2 className="font-heading font-semibold text-foreground text-base leading-snug mb-2 flex-1">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <time className="text-xs text-muted-foreground" dateTime={post.date}>
            {new Date(post.date + "T12:00:00Z").toLocaleDateString("es-CO", { timeZone: "UTC", year: "numeric", month: "short", day: "numeric" })}
          </time>
          <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-accent hover:text-accent-hover flex items-center gap-1 transition-colors">
            Leer más
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
