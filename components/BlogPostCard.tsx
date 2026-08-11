import Link from "next/link";
import type { Post } from "@/lib/posts";

export const categoryColors: Record<string, string> = {
  "Consultoría": "bg-primary/10 text-primary",
  "Evaluación Financiera": "bg-primary/10 text-primary",
  "IA Generativa": "bg-accent/10 text-accent",
  "Financiación": "bg-green-50 text-green-700",
  "Beneficios Tributarios": "bg-green-50 text-green-700",
  "Metodología": "bg-purple-50 text-purple-700",
  "Casos de estudio": "bg-amber-50 text-amber-700",
};

// Icono decorativo por categoría — la miniatura de la tarjeta NO reutiliza la
// imagen OG del post: esa imagen ya lleva el título grabado como píxeles para
// compartir en redes, y repetirlo como thumbnail duplicaba el título (una vez
// ilegible dentro de la imagen, otra vez como texto real debajo) y se veía mal
// en mobile/tablet. Aquí solo va una marca visual limpia, sin texto.
function CategoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
      />
    </svg>
  );
}

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="relative flex h-40 w-full items-center justify-center bg-primary"
      >
        <CategoryIcon className="w-12 h-12 text-white/25" />
      </Link>
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
