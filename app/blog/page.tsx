import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Investigación Aplicada en Gestión de Innovación | Augusto Ruiz",
  description:
    "Artículos sobre gestión de innovación tecnológica, evaluación financiera bajo incertidumbre, IA generativa y estrategias de financiación para organizaciones latinoamericanas.",
  alternates: { canonical: "https://www.augustoruiz.org/blog" },
};

const categories = [
  "Todos",
  "Evaluación Financiera",
  "IA Generativa",
  "Financiación",
  "Metodología",
  "Casos de estudio",
];

const posts = [
  {
    slug: "modelos-probabilisticos-innovacion",
    category: "Evaluación Financiera",
    title: "Por qué los modelos deterministas fallan en la evaluación de innovación",
    excerpt: "El VPN y la TIR asumen un futuro predecible. En innovación tecnológica, esa suposición no solo es incorrecta, puede costarte millones en decisiones equivocadas.",
    date: "2024-11-15",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "ia-generativa-decisiones-organizacionales",
    category: "IA Generativa",
    title: "IA Generativa en la toma de decisiones: más allá del hype",
    excerpt: "Cómo implementar IA generativa en procesos organizacionales reales, con métricas de éxito claras y sin caer en modas pasajeras.",
    date: "2024-10-28",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "financiacion-innovacion-latam",
    category: "Financiación",
    title: "Fuentes de financiación para innovación en Latinoamérica: guía 2024",
    excerpt: "Fondos públicos, inversión privada y esquemas mixtos disponibles para proyectos de innovación tecnológica en la región.",
    date: "2024-10-10",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "incertidumbre-tecnologica-riesgo",
    category: "Metodología",
    title: "Incertidumbre tecnológica vs. riesgo de mercado: una distinción crítica",
    excerpt: "Confundir estos dos conceptos es uno de los errores más frecuentes en la evaluación de proyectos de innovación. Esta distinción cambia completamente el modelo de análisis.",
    date: "2024-09-20",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "prime-10-caso-startup",
    category: "Casos de estudio",
    title: "Cómo el PRIME-10 ayudó a una startup a conseguir financiación pública",
    excerpt: "Caso de estudio: cómo un diagnóstico de madurez de innovación transformó la propuesta de valor de una startup de agritech colombiana.",
    date: "2024-08-30",
    readTime: "9 min",
    featured: false,
  },
  {
    slug: "opciones-reales-innovacion",
    category: "Evaluación Financiera",
    title: "Valoración por opciones reales: el método que los CFOs deberían conocer",
    excerpt: "Las opciones reales capturan el valor de la flexibilidad en proyectos de innovación. Aquí te explico cómo aplicarlas sin necesitar un doctorado en finanzas.",
    date: "2024-08-05",
    readTime: "11 min",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Evaluación Financiera": "bg-primary/10 text-primary",
  "IA Generativa": "bg-accent/10 text-accent",
  "Financiación": "bg-green-50 text-green-700",
  "Metodología": "bg-purple-50 text-purple-700",
  "Casos de estudio": "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Blog
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Investigación aplicada a la decisión organizacional
            </h1>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Artículos que conectan la investigación académica de frontera con los desafíos
              reales de las organizaciones que gestionan innovación tecnológica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10" role="navigation" aria-label="Filtrar por categoría">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-colors border ${
                  cat === "Todos"
                    ? "bg-primary text-white border-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <article className="card overflow-hidden mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 h-48 lg:h-auto bg-primary/10 flex items-center justify-center min-h-[200px]">
                  <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent text-white text-xs font-heading font-semibold px-2 py-0.5 rounded-full">
                      Destacado
                    </span>
                    <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${categoryColors[featured.category] ?? ""}`}>
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-3">
                    <Link href={`/blog/${featured.slug}`} className="hover:text-primary transition-colors">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <time dateTime={featured.date}>
                        {new Date(featured.date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
                      </time>
                      <span>·</span>
                      <span>{featured.readTime} lectura</span>
                    </div>
                    <Link href={`/blog/${featured.slug}`} className="btn-primary text-sm px-4 py-2">
                      Leer artículo
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="card overflow-hidden flex flex-col">
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
                      {new Date(post.date).toLocaleDateString("es-CO", { year: "numeric", month: "short", day: "numeric" })}
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-2xl text-center">
          <h2 className="section-heading text-2xl sm:text-3xl mb-3">
            Recibe mis análisis cada semana
          </h2>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Artículos sobre gestión de innovación, evaluación financiera e IA generativa.
            Sin spam, solo investigación aplicada.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
