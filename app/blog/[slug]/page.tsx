import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterForm from "@/components/NewsletterForm";
import SchemaScript from "@/components/SchemaScript";
import PostBody, { headingId } from "@/components/PostBody";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { allPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";

// FAQ y entidades por post, usadas para generar FAQPage schema y el campo
// `about` del BlogPosting. Solo se completan para los posts donde el
// contenido ya está estructurado como preguntas y respuestas explícitas.
const postFaqs: Record<string, { q: string; a: string }[]> = {
  "que-es-un-beneficio-tributario-colombia": [
    {
      q: "¿Quién puede acceder a los beneficios tributarios en Colombia?",
      a: "Cualquier empresa contribuyente del impuesto de renta en Colombia, sin restricción de tamaño o sector. El filtro real no es el tamaño de la empresa sino la naturaleza del proyecto o de la inversión: que califique en la tipología del CNBT para el régimen de I+D+i, o que corresponda a FNCE, eficiencia energética o mejoramiento ambiental para el régimen certificado por la UPME y la ANLA. El crédito fiscal del 50% y los TIDIS fueron diseñados pensando en las MiPymes.",
    },
    {
      q: "¿Qué pasa si el proyecto es rechazado?",
      a: "Un proyecto no aprobado puede ajustarse y presentarse de nuevo; el rechazo no inhabilita a la empresa. Lo determinante es diagnosticar la causa: si el proyecto no encaja en la tipología del CNBT, ningún ajuste de forma lo salvará; si el problema fue de formulación o de soporte documental, la corrección es viable.",
    },
    {
      q: "¿Qué ofrecen otros países de América Latina en beneficios tributarios a la I+D+i?",
      a: "Brasil (Lei do Bem, exclusión del 60% al 100% de gastos en I+D), Chile (Ley 20.241, crédito del 35% con tope de 15.000 UTM certificado por CORFO), Argentina (régimen de Economía del Conocimiento, Ley 27.506), Uruguay (Ley 19.739, crédito del 35%, elevable al 45% con centros tecnológicos o universidades), México (estímulo EFIDT, crédito del 30% del gasto incremental) y Perú (Ley 30309, deducción adicional de entre el 160% y el 240% del gasto según tamaño y ejecutor).",
    },
  ],
};

const postAbout: Record<string, { name: string; type?: string; sameAs?: string }[]> = {
  "que-es-un-beneficio-tributario-colombia": [
    { name: "Beneficios tributarios I+D+i en Colombia" },
    {
      name: "Consejo Nacional de Beneficios Tributarios (CNBT)",
      type: "GovernmentOrganization",
      sameAs: "https://minciencias.gov.co/viceministerios/conocimiento/direccion_transferencia/beneficios-tributarios/cuales-son",
    },
    { name: "Minciencias", type: "GovernmentOrganization", sameAs: "https://minciencias.gov.co" },
    { name: "DIAN", type: "GovernmentOrganization", sameAs: "https://www.dian.gov.co" },
  ],
  "beneficios-tributarios-idi-america-latina-comparativo": [
    { name: "Incentivos fiscales a la I+D+i en América Latina" },
    { name: "Colombia", type: "Place" },
    { name: "Brasil", type: "Place" },
    { name: "Chile", type: "Place" },
    { name: "Argentina", type: "Place" },
    { name: "Uruguay", type: "Place" },
    { name: "México", type: "Place" },
    { name: "Perú", type: "Place" },
  ],
};

// Solo se generan las rutas de posts reales; cualquier otro slug devuelve 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
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
      modifiedTime: post.dateModified ?? post.date,
      authors: ["Augusto Ruiz"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const postUrl = `https://www.augustoruiz.org/blog/${post.slug}`;
  const relatedPosts = getRelatedPosts(post.slug);

  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    },
    {
      label: "Twitter/X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${postUrl}`)}`,
    },
  ];

  const faqs = postFaqs[post.slug];
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Blog", url: "https://www.augustoruiz.org/blog" },
      { name: post.title, url: postUrl },
    ]),
    articleSchema({
      title: post.title,
      description: post.metaDescription ?? post.excerpt,
      slug: post.slug,
      datePublished: post.date,
      dateModified: post.dateModified ?? post.date,
      about: postAbout[post.slug],
    }),
    ...(faqs ? [faqSchema(faqs)] : []),
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
                {post.category}
              </li>
            </ol>
          </nav>

          <div className="mb-4 flex items-center gap-2">
            <span className="bg-accent text-white text-xs font-heading font-semibold px-2 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="text-white/60 text-xs">{post.readTime} lectura</span>
          </div>

          <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-heading font-bold text-white text-sm">AR</span>
              </div>
              <div>
                <Link href="/sobre" className="font-heading font-semibold text-white text-sm hover:underline">
                  Augusto Ruiz
                </Link>
                <p className="text-white/60 text-xs">PhD(c) · Universidad de los Andes</p>
              </div>
            </div>
            <div className="text-white/60 text-xs">
              <time dateTime={post.date}>
                {new Date(post.date + "T12:00:00Z").toLocaleDateString("es-CO", {
                  timeZone: "UTC",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.dateModified && (
                <span>
                  {" "}· Actualizado el{" "}
                  <time dateTime={post.dateModified}>
                    {new Date(post.dateModified + "T12:00:00Z").toLocaleDateString("es-CO", {
                      timeZone: "UTC",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
              )}
            </div>
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
              {post.tocItems && post.tocItems.length > 0 && (
                <nav aria-label="Tabla de contenidos" className="card p-5 mb-8">
                  <p className="font-heading font-semibold text-sm text-foreground mb-3">
                    En este artículo
                  </p>
                  <ol className="space-y-2">
                    {post.tocItems.map((item, i) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="text-accent font-heading font-semibold shrink-0">{i + 1}.</span>
                        <a
                          href={`#${headingId(item)}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {/* Content */}
              {post.content ? (
                <PostBody blocks={post.content} />
              ) : (
                <div className="space-y-6 text-foreground text-base leading-relaxed">
                  <p>{post.excerpt}</p>
                  <p className="text-muted-foreground italic text-sm">
                    [Contenido completo próximamente — este artículo está en desarrollo.]
                  </p>
                </div>
              )}

              {/* Share buttons */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-heading font-semibold text-sm text-foreground mb-3">
                  Compartir este artículo
                </p>
                <div className="flex gap-3">
                  {shareLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-border rounded-lg text-sm font-heading font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
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
                    <Link href="/sobre" className="font-heading font-semibold text-sm text-foreground hover:text-primary transition-colors">
                      Augusto Ruiz
                    </Link>
                    <p className="text-xs text-muted-foreground">PhD(c) Uniandes</p>
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
      {relatedPosts.length > 0 && (
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
      )}

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
