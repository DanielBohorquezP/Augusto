export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "highlight"; label: string; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | {
      type: "cta";
      heading: string;
      text: string;
      primaryLink: string;
      primaryText: string;
      secondaryLink?: string;
      secondaryText?: string;
    };

export interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  date: string;
  readTime: string;
  featured: boolean;
  tocItems?: string[];
  content?: ContentBlock[];
}

export const allPosts: Post[] = [
  {
    slug: "modelos-probabilisticos-innovacion",
    category: "Evaluación Financiera",
    title: "Por qué los modelos deterministas fallan en la evaluación de innovación",
    excerpt:
      "El VPN y la TIR asumen un futuro predecible. En innovación tecnológica, esa suposición no solo es incorrecta, puede costarte millones en decisiones equivocadas.",
    date: "2024-11-15",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "ia-generativa-decisiones-organizacionales",
    category: "IA Generativa",
    title: "IA Generativa en la toma de decisiones: más allá del hype",
    excerpt:
      "Cómo implementar IA generativa en procesos organizacionales reales, con métricas de éxito claras y sin caer en modas pasajeras.",
    date: "2024-10-28",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "financiacion-innovacion-latam",
    category: "Financiación",
    title: "Fuentes de financiación para innovación en Latinoamérica: guía 2024",
    excerpt:
      "Fondos públicos, inversión privada y esquemas mixtos disponibles para proyectos de innovación tecnológica en la región.",
    date: "2024-10-10",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "incertidumbre-tecnologica-riesgo",
    category: "Metodología",
    title: "Incertidumbre tecnológica vs. riesgo de mercado: una distinción crítica",
    excerpt:
      "Confundir estos dos conceptos es uno de los errores más frecuentes en la evaluación de proyectos de innovación. Esta distinción cambia completamente el modelo de análisis.",
    date: "2024-09-20",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "prime-10-caso-startup",
    category: "Casos de estudio",
    title: "Cómo el PRIME-10 ayudó a una startup a conseguir financiación pública",
    excerpt:
      "Caso de estudio: cómo un diagnóstico de madurez de innovación transformó la propuesta de valor de una startup de agritech colombiana.",
    date: "2024-08-30",
    readTime: "9 min",
    featured: false,
  },
  {
    slug: "opciones-reales-innovacion",
    category: "Evaluación Financiera",
    title: "Valoración por opciones reales: el método que los CFOs deberían conocer",
    excerpt:
      "Las opciones reales capturan el valor de la flexibilidad en proyectos de innovación. Aquí te explico cómo aplicarlas sin necesitar un doctorado en finanzas.",
    date: "2024-08-05",
    readTime: "11 min",
    featured: false,
  },
  // ── Posts de captura de intención SEO ──────────────────────────────────────
  {
    slug: "consultoria-innovacion-empresarial-colombia",
    category: "Consultoría",
    title: "Consultoría en Innovación Empresarial en Colombia: Guía Completa 2025",
    excerpt:
      "Qué es, cómo funciona, qué tipos existen y qué beneficios genera la consultoría en innovación empresarial para organizaciones colombianas.",
    metaDescription:
      "Guía completa sobre consultoría en innovación empresarial en Colombia. Tipos de consultoría, cómo funciona, costos y beneficios para pymes y corporaciones. Por Augusto Ruiz, PhD(c) Uniandes.",
    date: "2025-03-15",
    readTime: "12 min",
    featured: false,
    tocItems: [
      "Qué es la consultoría en innovación empresarial",
      "Por qué Colombia necesita consultorías especializadas en innovación",
      "Tipos de consultoría en innovación disponibles en Colombia",
      "Cómo funciona un proceso de consultoría en innovación",
      "Qué beneficios obtiene su empresa",
    ],
    content: [
      {
        type: "paragraph",
        text: "La consultoría en innovación empresarial en Colombia es un servicio especializado que ayuda a organizaciones —desde startups hasta grandes corporaciones— a diseñar, evaluar e implementar estrategias de innovación tecnológica con base en evidencia. En la última década, Colombia se ha posicionado como uno de los ecosistemas de innovación más dinámicos de Latinoamérica, con Medellín reconocida internacionalmente por su transformación urbana impulsada por la innovación y Bogotá consolidando su polo tecnológico. Sin embargo, muchas empresas aún carecen de las herramientas metodológicas para innovar con rigor.",
      },
      {
        type: "heading2",
        text: "¿Qué es la consultoría en innovación empresarial?",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación empresarial es el servicio profesional mediante el cual un consultor externo —especializado en gestión de la innovación— acompaña a una organización en sus procesos de identificación, evaluación, financiación y ejecución de proyectos innovadores. A diferencia de la consultoría de gestión tradicional, la consultoría en innovación trabaja con altos niveles de incertidumbre tecnológica y de mercado, requiriendo metodologías específicas como modelos probabilísticos, análisis de opciones reales y marcos de madurez tecnológica.",
      },
      {
        type: "highlight",
        label: "¿En qué se diferencia de una consultoría tradicional?",
        text: "La diferencia central está en cómo se trabaja la incertidumbre. Una consultoría tradicional optimiza procesos conocidos; una consultoría en innovación diseña estrategias para navegar lo desconocido —nuevas tecnologías, mercados emergentes, modelos de negocio sin precedentes. Aplicar métodos financieros deterministas (VPN, TIR) a proyectos de innovación genera sesgos sistemáticos que pueden costar millones.",
      },
      {
        type: "heading2",
        text: "¿Por qué Colombia necesita consultorías especializadas en innovación?",
      },
      {
        type: "paragraph",
        text: "Colombia tiene un ecosistema de innovación con fortalezas únicas: instituciones como Minciencias, iNNpulsa Colombia y el Fondo de Modernización e Innovación destinan recursos significativos a proyectos de innovación cada año. Sin embargo, el principal cuello de botella no es la falta de financiación, sino la falta de capacidades organizacionales para formular, evaluar y ejecutar proyectos de innovación de forma rigurosa. Ahí es donde la consultoría especializada genera el mayor valor.",
      },
      {
        type: "list",
        heading: "Retos específicos del contexto colombiano que la consultoría en innovación atiende:",
        items: [
          "Acceso y estructuración de convocatorias de Minciencias, BPIN e iNNpulsa Colombia",
          "Evaluación financiera de proyectos bajo incertidumbre tecnológica (más allá del VPN/TIR)",
          "Diseño de estrategias de adopción de IA generativa en procesos organizacionales",
          "Diagnóstico de madurez de innovación: ¿está lista su empresa para innovar?",
          "Construcción de capacidades internas para sostener la innovación en el tiempo",
        ],
      },
      {
        type: "heading2",
        text: "Tipos de consultoría en innovación empresarial en Colombia",
      },
      {
        type: "list",
        items: [
          "Consultoría en innovación estratégica: define la visión y hoja de ruta de innovación de la organización",
          "Consultoría en innovación tecnológica: evalúa y gestiona proyectos de I+D+i con metodologías especializadas",
          "Consultoría en innovación digital: acompaña la transformación digital y adopción de IA generativa",
          "Consultoría en innovación de procesos: optimiza procesos internos mediante innovación incremental",
          "Consultoría en innovación abierta: diseña ecosistemas de colaboración con startups y universidades",
          "Consultoría en innovación organizacional: transforma cultura y estructura para fomentar la innovación",
          "Consultoría en innovación para pymes: adaptada a recursos y contexto de pequeñas y medianas empresas",
        ],
      },
      {
        type: "heading2",
        text: "¿Cómo funciona un proceso de consultoría en innovación empresarial?",
      },
      {
        type: "paragraph",
        text: "El proceso típico de consultoría en innovación en Colombia consta de cuatro fases: diagnóstico inicial (entendimiento del contexto y necesidades), análisis y modelado (aplicación de frameworks específicos al desafío), entrega de resultados (informe ejecutivo con recomendaciones accionables), e implementación (acompañamiento opcional en la ejecución). Un diagnóstico con el PRIME-10 Assessment puede completarse en 2–3 semanas. Un proyecto de evaluación financiera o estrategia completa típicamente toma entre 4 y 8 semanas.",
      },
      {
        type: "heading2",
        text: "¿Qué beneficios obtiene su empresa al contratar consultoría en innovación?",
      },
      {
        type: "list",
        items: [
          "Decisiones de inversión en innovación más acertadas, basadas en modelos probabilísticos reales",
          "Acceso a metodologías de clase mundial adaptadas al contexto colombiano y latinoamericano",
          "Mayor probabilidad de éxito en convocatorias públicas de financiación (Minciencias, BPIN, iNNpulsa)",
          "Reducción del riesgo en proyectos de innovación tecnológica",
          "Construcción de capacidades internas para sostener la innovación de forma autónoma",
          "Credibilidad ante inversionistas y juntas directivas para proyectos de innovación",
        ],
      },
      {
        type: "cta",
        heading: "¿Listo para innovar con rigor?",
        text: "Agenda una consulta inicial gratuita y evaluamos juntos si tu organización está preparada para el siguiente nivel de innovación.",
        primaryLink: "/contacto",
        primaryText: "Agendar consulta gratuita",
        secondaryLink: "/servicios",
        secondaryText: "Ver mis servicios",
      },
    ],
  },
  {
    slug: "consultoria-innovacion-pymes-colombia",
    category: "Consultoría",
    title: "Consultoría en Innovación para Pymes en Colombia: Qué Es y Por Qué la Necesitas",
    excerpt:
      "Las pymes colombianas que acceden a consultoría especializada en innovación tienen 3 veces más probabilidad de obtener financiación pública. Aquí te explico por qué y cómo.",
    metaDescription:
      "Consultoría en innovación para pymes en Colombia: servicios disponibles, fuentes de financiación (Minciencias, iNNpulsa) y cómo elegir la consultoría adecuada para tu empresa.",
    date: "2025-02-20",
    readTime: "9 min",
    featured: false,
    tocItems: [
      "Por qué las pymes colombianas necesitan consultoría en innovación",
      "Qué servicios de consultoría están disponibles para pymes",
      "Fuentes de financiación para pymes innovadoras en Colombia",
      "Cómo evaluar si una consultoría en innovación es adecuada para tu pyme",
    ],
    content: [
      {
        type: "paragraph",
        text: "La consultoría en innovación para pymes en Colombia es uno de los servicios de mayor impacto para las pequeñas y medianas empresas que buscan crecer y competir en mercados cada vez más tecnológicos. Las pymes representan más del 90% del tejido empresarial colombiano y generan la mayor parte del empleo formal, pero solo una fracción accede a herramientas de gestión de innovación de calidad. Una consultoría especializada puede ser el puente entre el potencial innovador de una pyme y su materialización en resultados concretos.",
      },
      {
        type: "heading2",
        text: "¿Por qué las pymes colombianas necesitan consultoría en innovación?",
      },
      {
        type: "paragraph",
        text: "Las pymes enfrentan barreras específicas para innovar: recursos limitados, falta de metodologías estructuradas, desconocimiento de convocatorias de financiación pública, y ausencia de equipos dedicados a I+D+i. Una consultoría en innovación atiende exactamente estas brechas.",
      },
      {
        type: "list",
        items: [
          "El 68% de las pymes colombianas no tienen claridad sobre cómo acceder a fondos de Minciencias o iNNpulsa",
          "Solo el 23% de las pymes que presentan propuestas a convocatorias públicas logran financiación —generalmente por deficiencias metodológicas, no por falta de ideas",
          "Las pymes que contratan consultoría especializada tienen hasta 3 veces más probabilidad de obtener financiación pública para innovación",
          "El 70% de los proyectos de innovación fracasan no por falta de tecnología sino por evaluación financiera deficiente o fallas en la gestión del cambio",
        ],
      },
      {
        type: "heading2",
        text: "¿Qué servicios de consultoría en innovación están disponibles para pymes?",
      },
      {
        type: "list",
        items: [
          "Diagnóstico PRIME-10: evalúa la madurez de innovación en 10 dimensiones clave (2–3 semanas, bajo costo de entrada)",
          "Evaluación financiera de proyectos de innovación con modelos probabilísticos",
          "Estructuración de propuestas para convocatorias públicas (Minciencias, BPIN, Fondo Mipyme, iNNpulsa)",
          "Estrategia de adopción de IA generativa adaptada al tamaño y recursos de la pyme",
          "Talleres ejecutivos de innovación (4–8 horas) para equipos directivos",
          "Mentoría a fundadores y directivos sobre gestión estratégica de la innovación",
        ],
      },
      {
        type: "highlight",
        label: "Para pymes con presupuesto limitado",
        text: "El PRIME-10 Assessment es el mejor punto de entrada. En 2–3 semanas genera un diagnóstico completo de dónde está la empresa y cuál es el camino más eficiente hacia la innovación, sin comprometer un presupuesto de proyecto completo.",
      },
      {
        type: "heading2",
        text: "Fuentes de financiación para pymes innovadoras en Colombia",
      },
      {
        type: "paragraph",
        text: "Colombia tiene un ecosistema de financiación de innovación relativamente robusto para pymes. Identificar la fuente correcta y estructurar bien la propuesta es clave para acceder a estos recursos.",
      },
      {
        type: "list",
        items: [
          "Minciencias: convocatorias anuales para proyectos de CT+I, abiertas a empresas de todos los tamaños",
          "iNNpulsa Colombia: financiación no reembolsable para innovación empresarial y emprendimiento de alto impacto",
          "BPIN (Banco de Programas y Proyectos de Inversión Nacional): proyectos con componente de innovación",
          "Fondo Nacional de Garantías: garantías para créditos destinados a proyectos de innovación",
          "Bancóldex: líneas de crédito especiales para modernización y transformación digital de pymes",
          "Fondos de capital privado: para pymes con alto potencial de crecimiento y tracción demostrada",
        ],
      },
      {
        type: "heading2",
        text: "¿Cómo saber si mi pyme necesita consultoría en innovación?",
      },
      {
        type: "list",
        heading: "Es momento de considerar una consultoría en innovación si:",
        items: [
          "Tienes ideas de innovación pero no sabes cómo evaluarlas financieramente con rigor",
          "Quieres acceder a convocatorias de Minciencias o iNNpulsa pero no sabes por dónde empezar",
          "Estás considerando implementar IA generativa pero no tienes claro el ROI ni la estrategia",
          "Tu empresa compite en mercados donde la innovación tecnológica es un diferenciador clave",
          "Necesitas justificar inversiones en innovación ante tu junta directiva con evidencia",
          "Has presentado propuestas a fondos públicos sin éxito y no entiendes por qué",
        ],
      },
      {
        type: "cta",
        heading: "Agenda una consulta inicial gratuita",
        text: "Evaluamos juntos el potencial de innovación de tu pyme y el camino más eficiente hacia los resultados que buscas.",
        primaryLink: "/contacto",
        primaryText: "Agendar consulta gratuita",
        secondaryLink: "/prime-10",
        secondaryText: "Conocer el PRIME-10",
      },
    ],
  },
  {
    slug: "tipos-consultoria-innovacion",
    category: "Metodología",
    title: "Tipos de Consultoría en Innovación: Digital, Abierta, Estratégica y Organizacional",
    excerpt:
      "No toda consultoría en innovación es igual. Conoce las diferencias entre innovación digital, abierta, estratégica, organizacional, de procesos y social, y cuál necesita tu empresa.",
    metaDescription:
      "Guía completa sobre los tipos de consultoría en innovación: digital, abierta, estratégica, organizacional, de procesos y social. Descubre cuál es la adecuada para tu organización.",
    date: "2025-01-25",
    readTime: "10 min",
    featured: false,
    tocItems: [
      "Consultoría en innovación digital",
      "Consultoría en innovación abierta",
      "Consultoría en innovación estratégica",
      "Consultoría en innovación organizacional",
      "Consultoría en innovación de procesos",
      "Consultoría en innovación social",
      "¿Cuál tipo necesita tu empresa?",
    ],
    content: [
      {
        type: "paragraph",
        text: "Existen múltiples tipos de consultoría en innovación, cada uno con un enfoque, metodología y perfil de cliente diferente. Elegir el tipo correcto es el primer paso para garantizar que la consultoría genere el impacto esperado en tu organización. En este artículo explico las diferencias entre los principales tipos: consultoría en innovación digital, abierta, estratégica, organizacional, de procesos y social.",
      },
      {
        type: "heading2",
        text: "Consultoría en innovación digital",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación digital acompaña a las organizaciones en su proceso de transformación tecnológica. Va más allá de digitalizar procesos existentes: se enfoca en rediseñar el modelo de negocio y los procesos organizacionales con tecnologías emergentes como inteligencia artificial generativa, automatización, blockchain o IoT.",
      },
      {
        type: "highlight",
        label: "Diferencia clave",
        text: "La innovación digital no es sinónimo de digitalización. Digitalizar es hacer lo mismo de forma digital; innovar digitalmente es hacer algo cualitativamente diferente, con mayor valor, gracias a la tecnología. La consultoría en innovación digital trabaja en este segundo nivel.",
      },
      {
        type: "heading2",
        text: "Consultoría en innovación abierta",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación abierta (open innovation) diseña estrategias de colaboración entre la empresa y actores externos: startups, universidades, centros de investigación, proveedores y clientes. El objetivo es acelerar el ciclo de innovación accediendo a conocimiento externo que complementa las capacidades internas.",
      },
      {
        type: "list",
        heading: "Cuándo aplicar innovación abierta:",
        items: [
          "Los problemas a resolver requieren conocimiento que no existe dentro de la organización",
          "El mercado evoluciona más rápido que la capacidad de I+D interna",
          "Se quiere acceder a tecnologías emergentes sin desarrollarlas internamente",
          "La empresa quiere posicionarse como hub de innovación en su sector",
        ],
      },
      {
        type: "heading2",
        text: "Consultoría en innovación estratégica",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación estratégica trabaja en el nivel más alto: la visión y hoja de ruta de innovación de la organización. Define qué tipo de innovación debe perseguir la empresa (incremental, radical, disruptiva), en qué horizontes de tiempo, con qué recursos y qué métricas. Es la consultoría más adecuada para empresas que quieren integrar la innovación en su estrategia corporativa de largo plazo.",
      },
      {
        type: "heading2",
        text: "Consultoría en innovación organizacional",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación organizacional trabaja la dimensión cultural y estructural de la innovación. Muchas empresas no innovan no por falta de ideas o recursos, sino porque su cultura, estructura o sistema de incentivos lo impiden activamente. Este tipo de consultoría diagnostica y transforma esos factores —es, en muchos casos, la intervención más profunda y de mayor impacto.",
      },
      {
        type: "heading2",
        text: "Consultoría en innovación de procesos",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación de procesos aplica innovación incremental para mejorar la eficiencia operacional. Es la forma más accesible de innovación para empresas de sectores tradicionales —manufactura, agroindustria, servicios financieros— y genera resultados medibles en el corto plazo.",
      },
      {
        type: "heading2",
        text: "Consultoría en innovación social",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación social orienta la innovación hacia la generación de impacto social y ambiental, además del económico. Es muy relevante para organizaciones del sector público, fundaciones, empresas con compromisos ESG y emprendimientos de impacto. En Colombia, con la Ley de Emprendimiento y el crecimiento del ecosistema de impacto, esta modalidad está en auge.",
      },
      {
        type: "heading2",
        text: "¿Cuál tipo de consultoría en innovación necesita tu empresa?",
      },
      {
        type: "paragraph",
        text: "La respuesta depende de tres factores: el nivel de madurez de innovación de la organización, el tipo de desafío que enfrenta, y los recursos disponibles. Las empresas en etapas iniciales de innovación suelen necesitar consultoría estratégica u organizacional primero; las que ya tienen proyectos concretos necesitan evaluación financiera y acceso a financiación. Un diagnóstico con el PRIME-10 Assessment permite identificar exactamente qué tipo de consultoría generará el mayor impacto para tu organización específica.",
      },
      {
        type: "cta",
        heading: "¿Cuál tipo de consultoría en innovación es la adecuada para tu empresa?",
        text: "Agenda una sesión de diagnóstico y lo identificamos juntos en menos de una hora.",
        primaryLink: "/contacto",
        primaryText: "Agendar diagnóstico",
        secondaryLink: "/servicios",
        secondaryText: "Ver mis servicios",
      },
    ],
  },
  {
    slug: "como-elegir-consultora-innovacion-colombia",
    category: "Consultoría",
    title: "Cómo Elegir una Consultoría en Innovación Tecnológica en Colombia (2025)",
    excerpt:
      "Criterios clave, preguntas que debes hacer, señales de alerta y un checklist para evaluar consultorías de innovación en Colombia antes de contratar.",
    metaDescription:
      "Guía práctica para elegir una consultoría en innovación tecnológica en Colombia. Criterios, preguntas clave, señales de alerta y checklist de evaluación para tomar la decisión correcta.",
    date: "2025-04-10",
    readTime: "8 min",
    featured: false,
    tocItems: [
      "Criterios clave para elegir una consultoría en innovación",
      "Preguntas que debe hacerle a una consultoría antes de contratar",
      "Señales de alerta en consultorías de innovación",
      "La diferencia entre consultoría basada en evidencia y consultoría genérica",
      "Checklist para evaluar una consultoría en innovación",
    ],
    content: [
      {
        type: "paragraph",
        text: "Elegir la consultoría en innovación tecnológica correcta puede ser la diferencia entre transformar genuinamente tu organización y desperdiciar recursos en proyectos de bajo impacto. En Colombia, el mercado de consultoría en innovación ha crecido significativamente en los últimos años, pero la calidad varía enormemente. Estos son los criterios que debes evaluar antes de contratar.",
      },
      {
        type: "heading2",
        text: "Criterios clave para elegir una consultoría en innovación tecnológica en Colombia",
      },
      {
        type: "list",
        items: [
          "Base en evidencia: ¿el consultor fundamenta sus metodologías en investigación empírica, o aplica frameworks genéricos sin adaptación?",
          "Experiencia en el contexto colombiano y latinoamericano: la innovación en Colombia tiene dinámicas específicas (ecosistema de financiación, marco regulatorio, cultura organizacional) que requieren adaptación local",
          "Metodologías propias o diferenciadas: las mejores consultorías en innovación tienen frameworks propios validados en proyectos reales",
          "Credenciales académicas combinadas con práctica: el ideal es un consultor que investiga activamente y practica simultáneamente",
          "Referencias verificables: casos de estudio reales con resultados medibles, no solo testimonios",
          "Transparencia sobre limitaciones: un buen consultor de innovación es honesto sobre la incertidumbre inherente",
        ],
      },
      {
        type: "highlight",
        label: "La señal más confiable",
        text: "Un consultor que puede explicar con precisión por qué su metodología funciona, bajo qué condiciones, y cuáles son sus limitaciones. La certeza falsa y las promesas de resultados específicos en innovación son señales de alerta: en innovación, la incertidumbre es inherente, no un defecto.",
      },
      {
        type: "heading2",
        text: "Preguntas que debe hacer antes de contratar una consultoría en innovación",
      },
      {
        type: "list",
        items: [
          "¿Cuál es su metodología específica para evaluar proyectos de innovación? ¿Cómo maneja la incertidumbre tecnológica?",
          "¿Puede mostrarme casos de estudio con métricas concretas de proyectos similares al mío?",
          "¿Trabaja con organizaciones en Colombia? ¿Conoce el ecosistema de Minciencias, iNNpulsa y los fondos disponibles?",
          "¿Qué pasa si el proyecto no avanza según lo esperado? ¿Cómo ajusta la estrategia?",
          "¿Cuáles son los entregables concretos y cómo se mide el éxito del proceso?",
          "¿El objetivo es que mi organización aprenda y sea autónoma, o que dependa del consultor indefinidamente?",
        ],
      },
      {
        type: "heading2",
        text: "Señales de alerta en consultorías de innovación",
      },
      {
        type: "list",
        items: [
          "Propuestas de 'innovación' genéricas sin diagnóstico previo del contexto específico de la empresa",
          "Uso de frameworks idénticos para todos los clientes, sin adaptación al sector o tamaño",
          "Promesas de resultados específicos: en innovación, la incertidumbre es inherente",
          "Falta de referencias verificables o casos de estudio con métricas reales",
          "Desconocimiento del ecosistema de financiación de innovación en Colombia",
          "Propuestas que evitan hablar de riesgos o limitaciones",
        ],
      },
      {
        type: "heading2",
        text: "La diferencia entre consultoría basada en evidencia y consultoría genérica",
      },
      {
        type: "paragraph",
        text: "La consultoría en innovación basada en evidencia parte de investigación empírica sobre qué metodologías realmente funcionan en qué contextos. No aplica el mismo framework de Silicon Valley a una pyme manufacturera en Medellín. Se adapta al nivel de madurez de la organización, a su sector, a sus recursos y al tipo específico de innovación que persigue. El resultado es una hoja de ruta realista y accionable, no un documento de 80 páginas que queda en un cajón.",
      },
      {
        type: "highlight",
        label: "Dato relevante",
        text: "Más del 70% de los proyectos de innovación fracasan no por falta de ideas o tecnología, sino por fallas en la evaluación financiera, la gestión del cambio organizacional o el acceso a financiación. Una consultoría especializada atiende exactamente estas brechas.",
      },
      {
        type: "heading2",
        text: "Checklist para evaluar una consultoría en innovación en Colombia",
      },
      {
        type: "list",
        items: [
          "Tiene metodología propia o diferenciada (no solo frameworks genéricos de libros de texto)",
          "Conoce el ecosistema de financiación colombiano (Minciencias, iNNpulsa, BPIN)",
          "Puede mostrar casos de estudio con métricas reales y verificables",
          "Tiene credenciales académicas verificables (publicaciones, afiliaciones universitarias activas)",
          "Ofrece diagnóstico antes de proponer solución — nunca al revés",
          "Es honesto sobre la incertidumbre inherente a la innovación",
          "Su objetivo explícito es transferir capacidades, no crear dependencia permanente",
        ],
      },
      {
        type: "cta",
        heading: "¿Quieres evaluar si mi consultoría es la adecuada para ti?",
        text: "Agenda una consulta inicial sin compromiso. En 30 minutos evaluamos tu desafío de innovación y si hay fit real entre lo que necesitas y lo que ofrezco.",
        primaryLink: "/contacto",
        primaryText: "Agendar consulta inicial",
        secondaryLink: "/sobre",
        secondaryText: "Conocer mi trayectoria",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
