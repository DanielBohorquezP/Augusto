import Link from "next/link";

const samplePosts = [
  {
    slug: "modelos-probabilisticos-innovacion",
    category: "Evaluación Financiera",
    title: "Por qué los modelos deterministas fallan en la evaluación de innovación",
    excerpt:
      "El VPN y la TIR asumen un futuro predecible. En innovación tecnológica, esa suposición no solo es incorrecta, puede costarte millones.",
    date: "2024-11-15",
    readTime: "8 min",
  },
  {
    slug: "ia-generativa-decisiones-organizacionales",
    category: "IA Generativa",
    title: "IA Generativa en la toma de decisiones: más allá del hype",
    excerpt:
      "Cómo implementar IA generativa en procesos organizacionales reales, con métricas de éxito claras y sin caer en modas pasajeras.",
    date: "2024-10-28",
    readTime: "6 min",
  },
  {
    slug: "financiacion-innovacion-latam",
    category: "Financiación",
    title: "Fuentes de financiación para innovación en Latinoamérica: guía 2024",
    excerpt:
      "Fondos públicos, inversión privada y esquemas mixtos disponibles para proyectos de innovación tecnológica en la región.",
    date: "2024-10-10",
    readTime: "10 min",
  },
];

const categoryColors: Record<string, string> = {
  "Evaluación Financiera": "bg-primary/10 text-primary",
  "IA Generativa": "bg-accent/10 text-accent",
  "Financiación": "bg-green-50 text-green-700",
};

export default function BlogPreviewSection() {
  return (
    <section className="py-20 bg-muted" id="blog">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Investigación aplicada
            </span>
            <h2 className="section-heading text-3xl sm:text-4xl">
              Últimos artículos
            </h2>
          </div>
          <Link href="/blog" className="btn-secondary shrink-0">
            Ver todos los artículos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {samplePosts.map((post) => (
            <article key={post.slug} className="card overflow-hidden flex flex-col">
              {/* Image placeholder */}
              <div className="h-44 bg-primary/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime} lectura</span>
                </div>

                <h3 className="font-heading font-semibold text-foreground text-base leading-snug mb-2 flex-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <time className="text-xs text-muted-foreground" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("es-CO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1">
                    Leer más
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
