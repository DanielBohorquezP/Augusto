const BASE_URL = "https://www.augustoruiz.org";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Augusto Ruiz — Consultoría en Innovación Tecnológica",
  url: BASE_URL,
  description:
    "Consultoría especializada en gestión de innovación tecnológica, evaluación financiera bajo incertidumbre e implementación de IA generativa para organizaciones en Colombia y Latinoamérica.",
  serviceType: "Consultoría en Innovación Tecnológica",
  areaServed: ["Colombia", "México", "Chile", "Perú", "Ecuador"],
  knowsAbout: [
    "consultoría en innovación empresarial",
    "consultoría en innovación tecnológica",
    "consultoría en innovación digital",
    "consultoría en innovación estratégica",
    "consultoría en innovación para pymes",
    "evaluación financiera de innovación",
    "PRIME-10 Assessment",
    "innovación en Colombia",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Consultoría en Innovación",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Evaluación Financiera de Innovación",
          description:
            "Modelos probabilísticos para evaluar proyectos de innovación tecnológica superando las limitaciones del VPN y la TIR.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IA Generativa Aplicada",
          description:
            "Estrategia de adopción e implementación de IA generativa en procesos organizacionales con ROI medible.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estrategias de Financiación de Innovación",
          description:
            "Identificación y estructuración de fuentes de financiación para innovación en Colombia y Latinoamérica.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PRIME-10 Assessment",
          description:
            "Diagnóstico de madurez e innovación en 10 dimensiones para organizaciones latinoamericanas.",
        },
      },
    ],
  },
  provider: {
    "@type": "Person",
    name: "Augusto Ruiz",
    url: BASE_URL,
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Augusto Ruiz",
  url: BASE_URL,
  image: `${BASE_URL}/profile-photo.jpg`,
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
    name: "Universidad de los Andes",
    url: "https://uniandes.edu.co",
  },
  sameAs: [
    "https://www.linkedin.com/in/ruizaugusto/",
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
    image: `${BASE_URL}/blog/${slug}/opengraph-image`,
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
