import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import SchemaScript from "@/components/SchemaScript";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { allPosts, getPostBySlug, type ContentBlock } from "@/lib/posts";

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Artículo | Augusto Ruiz",
      description: "Artículo sobre gestión de innovación tecnológica por Augusto Ruiz, PhD(c) Universidad de los Andes.",
    };
  }
  const description = post.metaDescription ?? post.excerpt;
  return {
    title: post.title,
    description,
    alternates: { canonical: `https://www.augustoruiz.org/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `https://www.augustoruiz.org/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Augusto Ruiz"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

function renderBlocks(blocks: ContentBlock[]) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="text-foreground text-base leading-relaxed">
            {block.text}
          </p>
        );
      case "heading2":
        return (
          <h2 key={i} className="font-heading font-bold text-2xl text-foreground mt-10 mb-4">
            {block.text}
          </h2>
        );
      case "heading3":
        return (
          <h3 key={i} className="font-heading font-semibold text-lg text-foreground mt-7 mb-3">
            {block.text}
          </h3>
        );
      case "highlight":
        return (
          <div key={i} className="bg-muted border-l-4 border-primary p-5 rounded-r-lg my-6">
            <p className="font-heading font-semibold text-foreground text-sm mb-1">{block.label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
          </div>
        );
      case "list":
        return (
          <div key={i} className="my-5">
            {block.heading && (
              <p className="font-heading font-semibold text-foreground text-sm mb-3">{block.heading}</p>
            )}
            <ul className="space-y-2.5 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                  <svg
                    className="w-4 h-4 text-accent shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      case "cta":
        return (
          <div key={i} className="my-10 bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-white mb-3">{block.heading}</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-lg mx-auto">{block.text}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={block.primaryLink} className="btn-primary">
                {block.primaryText}
              </Link>
              {block.secondaryLink && block.secondaryText && (
                <Link href={block.secondaryLink} className="btn-outline-white">
                  {block.secondaryText}
                </Link>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  });
}

const relatedPostSlugs = [
  "ia-generativa-decisiones-organizacionales",
  "financiacion-innovacion-latam",
  "opciones-reales-innovacion",
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const hasContent = !!post?.content;

  const relatedPosts = allPosts
    .filter((p) => relatedPostSlugs.includes(p.slug) && p.slug !== params.slug)
    .slice(0, 3);

  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Blog", url: "https://www.augustoruiz.org/blog" },
      { name: post?.title ?? "Artículo", url: `https://www.augustoruiz.org/blog/${params.slug}` },
    ]),
    ...(post
      ? [
          articleSchema({
            title: post.title,
            description: post.metaDescription ?? post.excerpt,
            slug: post.slug,
            datePublished: post.date,
            dateModified: post.date,
          }),
        ]
      : []),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Article hero */}
      <section className="bg-primary pt-32 pb-12">
        <div className="container-site max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegación" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/90 truncate max-w-[200px]">
                {post?.category ?? "Artículo"}
              </li>
            </ol>
          </nav>

          <div className="mb-4 flex items-center gap-2">
            <span className="bg-accent text-white text-xs font-heading font-semibold px-2 py-0.5 rounded-full">
              {post?.category ?? "Innovación"}
            </span>
            <span className="text-white/60 text-xs">{post?.readTime ?? "8 min"} lectura</span>
          </div>

          <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            {post?.title ?? "Por qué los modelos deterministas fallan en la evaluación de innovación"}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-heading font-bold text-white text-sm">AR</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">Augusto Ruiz</p>
                <p className="text-white/60 text-xs">PhD(c) · Universidad de los Andes</p>
              </div>
            </div>
            {post?.date && (
              <div className="text-white/60 text-xs">
                <time dateTime={post.date}>
                  {new Date(post.date + "T12:00:00Z").toLocaleDateString("es-CO", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main content */}
            <article className="lg:col-span-3">
              {/* Table of contents */}
              {post?.tocItems && post.tocItems.length > 0 && (
                <nav aria-label="Tabla de contenidos" className="card p-5 mb-8">
                  <p className="font-heading font-semibold text-sm text-foreground mb-3">
                    En este artículo
                  </p>
                  <ol className="space-y-2">
                    {post.tocItems.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-accent font-heading font-semibold shrink-0">{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Content */}
              <div className="space-y-5">
                {hasContent ? (
                  renderBlocks(post!.content!)
                ) : (
                  /* Placeholder content for posts without real content yet */
                  <div className="space-y-6 text-foreground text-base leading-relaxed prose prose-slate max-w-none">
                    <p>
                      Cuando una organización decide invertir en un proyecto de innovación tecnológica,
                      típicamente recurre a las mismas herramientas que usa para evaluar cualquier otro
                      proyecto de inversión: el valor presente neto (VPN), la tasa interna de retorno (TIR)
                      o el período de recuperación de la inversión.
                    </p>
                    <p>
                      El problema es que estas herramientas fueron diseñadas para un mundo predecible.
                      Y la innovación, por definición, ocurre en mundos impredecibles.
                    </p>
                    <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                      El problema con el VPN en proyectos de innovación
                    </h2>
                    <p>
                      El VPN descuenta flujos de caja futuros a una tasa que refleja el costo del capital.
                      Para que este cálculo tenga sentido, necesitas estimar esos flujos futuros con
                      razonable precisión. En un proyecto de expansión de una línea de producción existente,
                      eso es factible. En un proyecto de innovación tecnológica, es casi imposible.
                    </p>
                    <div className="bg-muted border-l-4 border-primary p-5 rounded-r-lg not-prose">
                      <p className="font-heading font-semibold text-foreground text-sm mb-1">
                        Dato de investigación
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Estudios muestran que más del 70% de los proyectos de innovación tecnológica
                        se desvían de sus proyecciones iniciales en más de un 50%, tanto en costos
                        como en tiempos y beneficios esperados.
                      </p>
                    </div>
                    <p className="text-muted-foreground italic text-sm">
                      [Contenido completo próximamente — este artículo está en desarrollo.]
                    </p>
                  </div>
                )}
              </div>

              {/* Share buttons */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-heading font-semibold text-sm text-foreground mb-3">
                  Compartir este artículo
                </p>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter/X", "WhatsApp"].map((platform) => (
                    <button
                      key={platform}
                      className="px-4 py-2 border border-border rounded-lg text-sm font-heading font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="card p-5 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary">AR</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Augusto Ruiz</p>
                    <p className="text-xs text-muted-foreground">PhD(c) Uniandes · Docente EAFIT</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Consultor en innovación tecnológica en Colombia. Investigador y formador
                  especializado en evaluación financiera bajo incertidumbre e IA generativa.
                </p>
                <Link href="/servicios" className="btn-primary text-xs w-full justify-center py-2.5">
                  Ver servicios
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-14 bg-muted">
        <div className="container-site">
          <h2 className="section-heading text-xl mb-6">Artículos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((rp) => (
              <div key={rp.slug} className="card p-5">
                <span className="text-xs font-heading font-semibold text-accent">{rp.category}</span>
                <h3 className="font-heading font-semibold text-sm text-foreground mt-2 mb-3 leading-snug">
                  <Link href={`/blog/${rp.slug}`} className="hover:text-primary transition-colors">
                    {rp.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${rp.slug}`}
                  className="text-xs font-semibold text-accent hover:text-accent-hover flex items-center gap-1 transition-colors"
                >
                  Leer
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-white">
        <div className="container-site max-w-xl text-center">
          <h2 className="section-heading text-xl mb-2">¿Te gustó este artículo?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Recibe nuevos artículos sobre innovación directamente en tu email.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
