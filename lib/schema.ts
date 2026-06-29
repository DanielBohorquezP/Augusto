const BASE_URL = "https://www.augustoruiz.org";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Augusto Ruiz",
  url: BASE_URL,
  image: `${BASE_URL}/foto-augusto-ruiz.jpg`,
  jobTitle: "Investigador, Consultor y Formador en Gestión de Innovación Tecnológica",
  description:
    "El puente entre el rigor académico y la decisión organizacional. PhD(c) en gestión de innovación tecnológica. Especialista en evaluación financiera bajo incertidumbre e IA generativa aplicada.",
  knowsAbout: [
    "Gestión de Innovación Tecnológica",
    "Evaluación Financiera de Innovación",
    "Modelos Probabilísticos",
    "Inteligencia Artificial Generativa",
    "Financiación de Innovación",
    "PRIME-10 Assessment",
    "Opciones Reales",
    "Simulación Monte Carlo",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de los Andes",
    url: "https://uniandes.edu.co",
  },
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "EAFIT University",
    url: "https://www.eafit.edu.co",
  },
  sameAs: [
    "https://www.linkedin.com/in/augusto-ruiz",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Augusto Ruiz",
  url: BASE_URL,
  description: "Consultor, investigador y formador en gestión de innovación tecnológica.",
  author: { "@type": "Person", name: "Augusto Ruiz" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "Augusto Ruiz",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Augusto Ruiz",
      url: BASE_URL,
    },
    image: `${BASE_URL}/og-blog-${slug}.png`,
    inLanguage: "es",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
