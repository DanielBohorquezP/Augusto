import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { slugifyCategory } from "@/lib/posts";

export const categoryColors: Record<string, string> = {
  "Consultoría": "bg-primary/10 text-primary",
  "Evaluación Financiera": "bg-primary/10 text-primary",
  "IA Generativa": "bg-accent/10 text-accent",
  "Financiación": "bg-green-50 text-green-700",
  "Beneficios Tributarios": "bg-green-50 text-green-700",
  "Metodología": "bg-purple-50 text-purple-700",
  "Casos de estudio": "bg-amber-50 text-amber-700",
};

// Miniatura de la tarjeta: la marca (logo del favicon) sobre el fondo primario —
// la imagen OG del post NO se reutiliza aquí, ya que lleva el título grabado como
// píxeles para compartir en redes y repetirlo duplicaba el título en la tarjeta.
export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="relative flex h-40 w-full items-center justify-center bg-primary"
        aria-label={post.title}
      >
        <Image
          src="/icon.png"
          alt=""
          width={64}
          height={64}
          className="w-16 h-16 opacity-25"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={`/blog?categoria=${slugifyCategory(post.category)}`}
            className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full hover:opacity-80 transition-opacity ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}
          >
            {post.category}
          </Link>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h2 className="font-heading font-semibold text-foreground text-base leading-snug mb-2 flex-1">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto gap-3">
          <time className="text-xs text-muted-foreground shrink-0" dateTime={post.date}>
            {new Date(post.date + "T12:00:00Z").toLocaleDateString("es-CO", { timeZone: "UTC", year: "numeric", month: "short", day: "numeric" })}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="btn-secondary text-xs px-4 py-2 flex items-center gap-1"
          >
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
