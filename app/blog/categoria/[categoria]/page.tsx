import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogPostCard from "@/components/BlogPostCard";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { allPosts, getAllCategories, getCategoryBySlug, slugifyCategory } from "@/lib/posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ categoria: slugifyCategory(c) }));
}

export async function generateMetadata({ params }: { params: { categoria: string } }): Promise<Metadata> {
  const category = getCategoryBySlug(params.categoria);
  if (!category) return {};
  return {
    title: `${category} — Artículos del Blog`,
    description: `Artículos sobre ${category.toLowerCase()} en innovación tecnológica por Augusto Ruiz, PhD(c) Universidad de los Andes. Investigación aplicada para organizaciones latinoamericanas.`,
    alternates: { canonical: `https://www.augustoruiz.org/blog/categoria/${params.categoria}` },
  };
}

export default function BlogCategoryPage({ params }: { params: { categoria: string } }) {
  const category = getCategoryBySlug(params.categoria);
  if (!category) notFound();

  const posts = allPosts.filter((p) => p.category === category);
  const categories = getAllCategories();

  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Blog", url: "https://www.augustoruiz.org/blog" },
      { name: category, url: `https://www.augustoruiz.org/blog/categoria/${params.categoria}` },
    ]),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Blog
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              {category}
            </h1>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              {posts.length} {posts.length === 1 ? "artículo" : "artículos"} sobre {category.toLowerCase()} en
              gestión de innovación tecnológica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          {/* Category filter */}
          <nav className="flex flex-wrap gap-2 mb-12 justify-center" aria-label="Filtrar por categoría">
            <Link
              href="/blog"
              className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-colors border border-border text-foreground hover:border-primary hover:text-primary"
            >
              Todos
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/categoria/${slugifyCategory(cat)}`}
                className={`px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-colors border ${
                  cat === category
                    ? "bg-primary text-white border-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Grid de previews de artículos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
