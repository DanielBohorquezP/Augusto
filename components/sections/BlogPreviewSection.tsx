import Link from "next/link";
import BlogPostCard from "@/components/BlogPostCard";
import { allPosts } from "@/lib/posts";

// Muestra los 3 artículos más recientes en la homepage.
// Si el blog está vacío, la sección no se renderiza.
export default function BlogPreviewSection() {
  const posts = allPosts.slice(0, 3);
  if (posts.length === 0) return null;

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
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
