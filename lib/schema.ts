const BASE_URL = "https://www.augustoruiz.org";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professional-service`,
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
          "@id": `${BASE_URL}/servicios/evaluacion-financiera-innovacion#service`,
          url: `${BASE_URL}/servicios/evaluacion-financiera-innovacion`,
          name: "Evaluación Financiera de Innovación",
          description:
            "Modelos probabilísticos para evaluar proyectos de innovación tecnológica superando las limitaciones del VPN y la TIR.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${BASE_URL}/servicios/capacitacion-ia-generativa#service`,
          url: `${BASE_URL}/servicios/capacitacion-ia-generativa`,
          name: "IA Generativa Aplicada",
          description:
            "Estrategia de adopción e implementación de IA generativa en procesos organizacionales con ROI medible.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${BASE_URL}/servicios/beneficios-tributarios-innovacion#service`,
          url: `${BASE_URL}/servicios/beneficios-tributarios-innovacion`,
          name: "Consultoría en Beneficios Tributarios I+D+i, FNCE y Eficiencia Energética",
          description:
            "Asesoría y consultoría especializada en beneficios tributarios: identificación y estructuración de proyectos de I+D+i, FNCE y eficiencia energética en Colombia y Latinoamérica.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${BASE_URL}/prime-10#service`,
          url: `${BASE_URL}/prime-10`,
          name: "PRIME-10 Assessment",
          description:
            "Evaluación financiera probabilística de proyectos de innovación en cinco fases, para organizaciones latinoamericanas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${BASE_URL}/docencia#service`,
          url: `${BASE_URL}/docencia`,
          name: "Docencia y Formación Ejecutiva",
          description:
            "Formación ejecutiva corporativa y docencia de posgrado en evaluación financiera de innovación, estrategia de I+D+i e IA generativa aplicada.",
        },
      },
    ],
  },
  provider: { "@id": `${BASE_URL}/#person` },
  sameAs: ["https://www.linkedin.com/in/ruizaugusto/", "https://www.tiktok.com/@retro_ciencia"],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Augusto Ruiz",
  alternateName: "Ober Augusto Ruiz Catanho",
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
    "Beneficios tributarios para I+D+i",
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
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "CQRM — Certified Quantitative Risk Management",
      credentialCategory: "certification",
      identifier: "LA-3437",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "PMP — Project Management Professional",
      credentialCategory: "certification",
      identifier: "1649915",
      recognizedBy: { "@type": "Organization", name: "Project Management Institute" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Gestión y transferencia de tecnología",
      credentialCategory: "formación",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Tecnológico de Monterrey" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "DEEI — Diploma en Estrategia de Ecosistemas de Innovación",
      credentialCategory: "diploma",
      recognizedBy: { "@type": "Organization", name: "BID-PRODEM" },
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/ruizaugusto/",
    "https://www.tiktok.com/@retro_ciencia",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Augusto Ruiz",
  url: BASE_URL,
  description: "Consultor, investigador y formador en gestión de innovación tecnológica.",
  inLanguage: "es",
  author: { "@id": `${BASE_URL}/#person` },
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
  about,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  about?: { name: string; type?: string; sameAs?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    dateModified,
    author: { "@id": `${BASE_URL}/#person` },
    publisher: { "@id": `${BASE_URL}/#person` },
    image: `${BASE_URL}/blog/${slug}/opengraph-image`,
    inLanguage: "es",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${slug}` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
    ...(about && about.length > 0
      ? {
          about: about.map(({ name, type, sameAs }) => ({
            "@type": type ?? "Thing",
            name,
            ...(sameAs ? { sameAs } : {}),
          })),
        }
      : {}),
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

// Ancla en la propia página un nodo Service con el mismo @id que ya la
// referencia desde professionalServiceSchema.hasOfferCatalog, para que el
// servicio no dependa solo del stub inline en el schema sitewide del home.
export function serviceSchema({
  slug,
  name,
  description,
  serviceType,
}: {
  slug: string;
  name: string;
  description: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/${slug}#service`,
    url: `${BASE_URL}/${slug}`,
    name,
    description,
    ...(serviceType ? { serviceType } : {}),
    provider: { "@id": `${BASE_URL}/#person` },
    areaServed: ["Colombia", "México", "Chile", "Perú", "Ecuador"],
  };
}

export const prime10MethodologySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${BASE_URL}/prime-10#methodology`,
  name: "PRIME-10™",
  creator: { "@id": `${BASE_URL}/#person` },
  dateCreated: "2025",
  description:
    "Metodología propia de evaluación financiera probabilística de proyectos de innovación bajo alta incertidumbre, estructurada en cinco fases: Problem framing, Readiness validation, Investment modeling, Market experimentation y Ex post learning. No es un sistema de scoring ni un modelo de madurez.",
};

export function docenciaAffiliationsSchema(institutions: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/docencia#webpage`,
    url: `${BASE_URL}/docencia`,
    about: { "@id": `${BASE_URL}/#person` },
    mentions: institutions.map((i) => ({
      "@type": "EducationalOrganization",
      name: i.name,
      ...(i.url ? { url: i.url } : {}),
    })),
  };
}

// Un nodo Course por curso dictado. No se agrega hasCourseInstance/startDate:
// no hay fechas confirmadas por curso (ver nota en app/docencia/page.tsx).
export function courseListSchema(
  programs: { institution: string; course: string; url?: string }[]
) {
  return programs.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: p.course,
    provider: {
      "@type": "EducationalOrganization",
      name: p.institution,
      ...(p.url ? { url: p.url } : {}),
    },
    instructor: { "@id": `${BASE_URL}/#person` },
  }));
}

export function mediaAppearancesSchema(
  items: { type: string; name: string; url: string; datePublished?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/medios#appearances`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": it.type,
        name: it.name,
        url: it.url,
        ...(it.datePublished ? { datePublished: it.datePublished } : {}),
        author: { "@id": `${BASE_URL}/#person` },
      },
    })),
  };
}
