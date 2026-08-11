import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import BlogPostCard from "@/components/BlogPostCard";
import { allPosts, getAllCategories, slugifyCategory } from "@/lib/posts";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export function generateMetadata(): Metadata {
  return {
    title: "Blog — Investigación Aplicada en Gestión de Innovación",
    description:
      "Artículos sobre consultoría en innovación empresarial, evaluación financiera bajo incertidumbre, IA generativa y estrategias de financiación para organizaciones latinoamericanas.",
    alternates: { canonical: "https://www.augustoruiz.org/blog" },
    openGraph: {
      title: "Blog — Investigación Aplicada en Gestión de Innovación | Augusto Ruiz",
      description:
        "Artículos sobre consultoría en innovación empresarial, evaluación financiera bajo incertidumbre, IA generativa y estrategias de financiación.",
      url: "https://www.augustoruiz.org/blog",
      type: "website",
    },
    // Sin posts publicados aún: se pide no indexar para evitar que Google indexe
    // una página de listado vacía bajo una URL de alto intent. Se retira solo
    // cuando allPosts.length > 0 (primer post publicado).
    ...(allPosts.length === 0 && { robots: { index: false, follow: true } }),
  };
}

export default function BlogPage() {
  const categories = getAllCategories();

  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Inicio", url: "https://www.augustoruiz.org" },
          { name: "Blog", url: "https://www.augustoruiz.org/blog" },
        ])}
      />
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
          {categories.length > 0 && (
            <nav className="flex flex-wrap gap-2 mb-12 justify-center" aria-label="Filtrar por categoría">
              <span className="px-4 py-1.5 rounded-full text-sm font-heading font-medium border bg-primary text-white border-primary">
                Todos
              </span>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog/categoria/${slugifyCategory(cat)}`}
                  className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-colors border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          )}

          {/* Grid de previews de artículos */}
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            /* Estado vacío */
            <div className="max-w-xl mx-auto text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">
                Artículos próximamente
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Estoy preparando contenido sobre gestión de innovación, evaluación financiera
                bajo incertidumbre e IA generativa aplicada. Suscríbete abajo para recibir
                los primeros artículos.
              </p>
            </div>
          )}
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
