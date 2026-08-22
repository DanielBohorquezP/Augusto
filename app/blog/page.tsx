import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import BlogPostCard from "@/components/BlogPostCard";
import { allPosts, getAllCategories, getCategoryBySlug, slugifyCategory } from "@/lib/posts";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

// El filtro por categoría vive en /blog?categoria=slug (query param), no en
// rutas propias — evita multiplicar páginas casi-duplicadas solo para filtrar
// el mismo grid de previews. Ver nota 2026-08-15 en CONTEXTO-PROYECTO.md.
export function generateMetadata({
  searchParams,
}: {
  searchParams: { categoria?: string };
}): Metadata {
  const category = searchParams.categoria ? getCategoryBySlug(searchParams.categoria) : undefined;
  const title = category ? `${category} — Blog` : "Blog — Innovación y Gestión Tecnológica";
  const description = category
    ? `Artículos sobre ${category.toLowerCase()} en innovación tecnológica por Augusto Ruiz, PhD(c) Universidad de los Andes. Investigación aplicada para organizaciones latinoamericanas.`
    : "Artículos sobre innovación empresarial, evaluación financiera bajo incertidumbre, IA generativa y financiación de I+D+i en Latinoamérica.";
  const url = category
    ? `https://www.augustoruiz.org/blog?categoria=${searchParams.categoria}`
    : "https://www.augustoruiz.org/blog";

  return {
    title,
    description,
    alternates: { canonical: "https://www.augustoruiz.org/blog" },
    openGraph: {
      title: `${title} | Augusto Ruiz`,
      description,
      url,
      type: "website",
      images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Augusto Ruiz`,
      description,
    },
    // Sin posts publicados aún: se pide no indexar para evitar que Google indexe
    // una página de listado vacía bajo una URL de alto intent. Se retira solo
    // cuando allPosts.length > 0 (primer post publicado).
    ...(allPosts.length === 0 && { robots: { index: false, follow: true } }),
  };
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { categoria?: string };
}) {
  const categories = getAllCategories();
  const activeCategory = searchParams.categoria ? getCategoryBySlug(searchParams.categoria) : undefined;
  const posts = activeCategory ? allPosts.filter((p) => p.category === activeCategory) : allPosts;

  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Inicio", url: "https://www.augustoruiz.org" },
          { name: "Blog", url: "https://www.augustoruiz.org/blog" },
          ...(activeCategory
            ? [{ name: activeCategory, url: `https://www.augustoruiz.org/blog?categoria=${searchParams.categoria}` }]
            : []),
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
              {activeCategory ?? "Blog de innovación y gestión tecnológica"}
            </h1>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              {activeCategory
                ? `${posts.length} ${posts.length === 1 ? "artículo" : "artículos"} sobre ${activeCategory.toLowerCase()} en gestión de innovación tecnológica.`
                : "Investigación aplicada a la decisión organizacional: artículos que conectan la investigación académica de frontera con los desafíos reales de las organizaciones que gestionan innovación tecnológica."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          {/* Category filter */}
          {categories.length > 0 && (
            <nav className="flex flex-wrap gap-2 mb-12 justify-center" aria-label="Filtrar por categoría">
              {activeCategory ? (
                <Link
                  href="/blog"
                  className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-colors border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  Todos
                </Link>
              ) : (
                <span className="px-4 py-1.5 rounded-full text-sm font-heading font-medium border bg-primary text-white border-primary">
                  Todos
                </span>
              )}
              {categories.map((cat) =>
                cat === activeCategory ? (
                  <span
                    key={cat}
                    className="px-4 py-1.5 rounded-full text-sm font-heading font-medium border bg-primary text-white border-primary"
                  >
                    {cat}
                  </span>
                ) : (
                  <Link
                    key={cat}
                    href={`/blog?categoria=${slugifyCategory(cat)}`}
                    className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-colors border border-border text-foreground hover:border-primary hover:text-primary"
                  >
                    {cat}
                  </Link>
                )
              )}
            </nav>
          )}

          {/* Grid de previews de artículos */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
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
