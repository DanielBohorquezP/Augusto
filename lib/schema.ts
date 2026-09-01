const BASE_URL = "https://www.augustoruiz.org";

// Logo de marca como entidad reutilizable. Google lee `logo` en entidades de tipo
// Organization (ProfessionalService lo es) para el panel de conocimiento y los
// resultados enriquecidos. El favicon del buscador es un canal aparte: se sirve
// desde app/icon.png y app/favicon.ico, y lo rastrea un bot propio de Google.
export const logoSchema = {
  "@type": "ImageObject",
  "@id": `${BASE_URL}/#logo`,
  url: `${BASE_URL}/icon.png`,
  contentUrl: `${BASE_URL}/icon.png`,
  width: 512,
  height: 512,
  caption: "Augusto Ruiz — Consultoría en Innovación Tecnológica",
};

export const uniandesSchema = {
  "@type": "CollegeOrUniversity",
  "@id": `${BASE_URL}/#org-uniandes`,
  name: "Universidad de los Andes",
  url: "https://uniandes.edu.co",
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professional-service`,
  name: "Augusto Ruiz — Consultoría en Innovación Tecnológica",
  url: BASE_URL,
  description:
    "Consultoría especializada en gestión de innovación tecnológica, evaluación financiera bajo incertidumbre e implementación de IA generativa para organizaciones en Colombia y Latinoamérica.",
  serviceType: "Consultoría en Innovación Tecnológica",
  logo: logoSchema,
  image: { "@id": `${BASE_URL}/#logo` },
  areaServed: ["Colombia", "México", "Chile", "Perú", "Ecuador"],
  knowsAbout: [
    "consultoría de innovación",
    "metodologías de innovación",
    "consultoría en innovación empresarial",
    "consultoría en innovación tecnológica",
    "consultoría en innovación digital",
    "consultoría en innovación estratégica",
    "consultoría en innovación para pymes",
    "evaluación financiera de innovación",
    "PRIME-10 Assessment",
    "innovación en Colombia",
    "consultoría tributaria para empresas",
    "consultoría en beneficios tributarios",
    "asesoría tributaria especializada",
    "beneficios tributarios I+D+i",
    "consultoría financiera para proyectos de innovación",
    "evaluación de proyectos bajo incertidumbre",
    "simulación Monte Carlo",
    "opciones reales",
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
          name: "Asesoría en Transferencia Tecnológica para Empresas",
          description:
            "Consultoría financiera especializada en decisiones de inversión en innovación y tecnología: modelos probabilísticos, simulación Monte Carlo y valoración de opciones reales, superando las limitaciones del VPN y la TIR.",
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
          name: "Consultoría Tributaria para Empresas en Beneficios Tributarios I+D+i, FNCE y Eficiencia Energética",
          description:
            "Consultoría tributaria para empresas especializada en beneficios tributarios: identificación, formulación y gestión de proyectos de I+D+i ante Minciencias y de FNCE, eficiencia energética y control ambiental ante la UPME y la ANLA, en Colombia y Latinoamérica.",
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
    "Consultoría de Innovación",
    "Metodologías de Innovación",
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
  alumniOf: { "@id": `${BASE_URL}/#org-uniandes` },
  worksFor: { "@id": `${BASE_URL}/#org-uniandes` },
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

// Se retiró potentialAction/SearchAction: se verificó que /blog?q= no filtra
// resultados y el sitio no tiene buscador, así que declaraba una acción
// inexistente.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Augusto Ruiz",
  url: BASE_URL,
  description: "Consultor, investigador y formador en gestión de innovación tecnológica.",
  inLanguage: "es",
  author: { "@id": `${BASE_URL}/#person` },
  publisher: { "@id": `${BASE_URL}/#professional-service` },
  image: { "@id": `${BASE_URL}/#logo` },
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
    publisher: { "@id": `${BASE_URL}/#professional-service` },
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

// Un nodo Course por curso dictado. `description` es propiedad requerida por
// Google para elegibilidad de Course; los textos son descripciones factuales
// del curso y la institución, pendientes de revisión editorial de Augusto.
// No se agrega hasCourseInstance/startDate: no hay fechas confirmadas por curso.
export function courseListSchema(
  programs: { institution: string; course: string; url?: string; description?: string }[]
) {
  return programs.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${BASE_URL}/docencia#${p.course
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
    name: p.course,
    ...(p.description ? { description: p.description } : {}),
    url: `${BASE_URL}/docencia`,
    provider:
      p.institution === "Universidad de los Andes"
        ? { "@id": `${BASE_URL}/#org-uniandes` }
        : { "@type": "EducationalOrganization", name: p.institution, ...(p.url ? { url: p.url } : {}) },
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
