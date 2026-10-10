/*
  Recursos recomendados de /recursos. Los datos viven aqui, separados del
  diseno (app/recursos/page.tsx), para poder actualizarlos sin tocar la pagina.

  Campos por recurso: seccion, titulo, autor, descripcion, url, idioma, acceso.
  Opcionales: `logo` ("youtube": logo de la red a la que redirige, cuando no hay vista previa), `image` (nombre de archivo WebP en /public/images/recursos/; si
  falta, la tarjeta se muestra sin imagen), `links` (enlaces extra), `nota`
  (texto corto junto a la etiqueta de acceso) y `interno` (enlace del propio
  sitio, se abre en la misma pestana).

  `acceso`: "gratis" no lleva etiqueta; "pago", "suscripcion" y "por-confirmar"
  si. Revisar que los enlaces sigan activos cada seis meses (ultima revision:
  2026-10-10; sloanreview.mit.edu, stat110.hsites.harvard.edu y
  thecasecentre.org responden 403 a clientes automaticos pero abren en navegador).
*/

export type RecursoSeccion = "lectura-inicial" | "lectura" | "video" | "podcast" | "curso" | "propio";
export type RecursoAcceso = "gratis" | "pago" | "suscripcion" | "por-confirmar";

export type Recurso = {
  seccion: RecursoSeccion;
  titulo: string;
  autor: string;
  descripcion: string;
  url: string;
  idioma: "ES" | "EN";
  acceso: RecursoAcceso;
  nota?: string;
  links?: { label: string; url: string }[];
  image?: string;
  logo?: "youtube";
  interno?: boolean;
};

export const accesoLabel: Record<RecursoAcceso, string | null> = {
  gratis: null,
  pago: "Pago",
  suscripcion: "Puede requerir suscripción",
  "por-confirmar": "Costo por confirmar",
};

export const recursos: Recurso[] = [
  // Cinco lecturas para empezar
  {
    seccion: "lectura-inicial",
    titulo: "Innovation Killers: How Financial Tools Destroy Your Capacity to Do New Things",
    autor: "Clayton Christensen, Stephen Kaufman y Willy Shih. Harvard Business Review, 2008",
    descripcion: "Cómo el mal uso de las herramientas financieras tradicionales frena la inversión en innovación.",
    url: "https://hbr.org/2008/01/innovation-killers-how-financial-tools-destroy-your-capacity-to-do-new-things",
    idioma: "EN",
    acceso: "suscripcion",
  },
  {
    seccion: "lectura-inicial",
    titulo: "The Flaw of Averages",
    autor: "Sam Savage. Harvard Business Review, 2002",
    descripcion: "Por qué los planes que reemplazan una cantidad incierta por su promedio suelen salir mal.",
    url: "https://hbr.org/2002/11/the-flaw-of-averages",
    idioma: "EN",
    acceso: "suscripcion",
  },
  {
    seccion: "lectura-inicial",
    titulo: "To Understand Consumer Behavior, Think Like a Marketplace Scientist",
    autor: "Lalin Anik, Ryan Hauser y Madeline Gibson. Darden School of Business, 2017",
    descripcion:
      "Por qué experimentar en los negocios y cómo diseñar un experimento riguroso, es la nueva competencia que todo equipo de innovación debe desarrollar.",
    url: "https://www.thecasecentre.org/products/view?id=145627",
    idioma: "EN",
    acceso: "pago",
  },
  {
    seccion: "lectura-inicial",
    titulo: "The Most Important Century",
    autor: "Holden Karnofsky. Cold Takes",
    descripcion: "Serie de ensayos que argumenta que la IA podría hacer de este siglo el más importante de la historia.",
    url: "https://www.cold-takes.com/most-important-century/",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "lectura-inicial",
    titulo: "Core Views on AI Safety",
    autor: "Anthropic",
    descripcion: "La posición de Anthropic sobre cuándo, por qué y cómo trabajar en la seguridad de la IA.",
    url: "https://www.anthropic.com/news/core-views-on-ai-safety",
    idioma: "EN",
    acceso: "gratis",
  },

  // Más lecturas
  {
    seccion: "lectura",
    titulo: "Discovery-Driven Planning",
    autor: "Rita McGrath e Ian MacMillan. Harvard Business Review, 1995",
    descripcion: "Una herramienta para planear negocios nuevos a partir de los supuestos que todavía no se han validado.",
    url: "https://hbr.org/1995/07/discovery-driven-planning",
    idioma: "EN",
    acceso: "suscripcion",
  },
  {
    seccion: "lectura",
    titulo: "Building a Culture of Experimentation",
    autor: "Stefan Thomke. Harvard Business Review, 2020",
    descripcion: "Lo que frena la experimentación en las empresas es la cultura y no la tecnología.",
    url: "https://hbr.org/2020/03/building-a-culture-of-experimentation",
    idioma: "EN",
    acceso: "suscripcion",
  },
  {
    seccion: "lectura",
    titulo: "Strategy as a Portfolio of Real Options",
    autor: "Timothy Luehrman. Harvard Business Review, 1998",
    descripcion: "La estrategia vista como una serie de opciones y no como un único flujo de caja proyectado.",
    url: "https://store.hbr.org/product/strategy-as-a-portfolio-of-real-options/98506",
    idioma: "EN",
    acceso: "pago",
    nota: "USD 11,95 en la tienda de HBR",
  },
  {
    seccion: "lectura",
    titulo: "AI as Normal Technology",
    autor: "Arvind Narayanan y Sayash Kapoor. Knight First Amendment Institute, 2025",
    descripcion: "Un contrapeso a las visiones extremas: la IA como tecnología normal, comparable a la electricidad o a internet.",
    url: "https://knightcolumbia.org/content/ai-as-normal-technology",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "lectura",
    titulo: "Benedict Evans: ensayos y presentaciones",
    autor: "Benedict Evans",
    descripcion: "Análisis de lo que importa en tecnología. Su presentación semestral más reciente es AI eats the world.",
    url: "https://www.ben-evans.com/presentations",
    links: [
      { label: "Presentaciones", url: "https://www.ben-evans.com/presentations" },
      { label: "Ensayos", url: "https://www.ben-evans.com/essays" },
      { label: "Boletín", url: "https://www.ben-evans.com/newsletter" },
    ],
    idioma: "EN",
    acceso: "gratis",
  },

  // Videos
  {
    seccion: "video",
    titulo: "The Thinking Game",
    autor: "Google DeepMind",
    descripcion: "Documental sobre Demis Hassabis y el equipo de DeepMind, filmado durante cinco años.",
    url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/the-thinking-game/",
    idioma: "EN",
    acceso: "gratis",
    image: "the-thinking-game.webp",
    nota: "Gratis en YouTube",
  },
  {
    seccion: "video",
    titulo: "Aswath Damodaran",
    autor: "Profesor de NYU Stern",
    descripcion: "Sus clases completas de valoración y finanzas corporativas.",
    url: "https://www.youtube.com/channel/UCLvnJL8htRR1T9cbSccaoVw",
    idioma: "EN",
    acceso: "gratis",
    logo: "youtube",
  },
  {
    seccion: "video",
    titulo: "Neural Networks",
    autor: "3Blue1Brown",
    descripcion: "Explicaciones visuales de redes neuronales, transformers y modelos de lenguaje.",
    url: "https://3blue1brown.com/neural-networks",
    idioma: "EN",
    acceso: "gratis",
    image: "neural-networks.webp",
  },
  {
    seccion: "video",
    titulo: "Deep Dive into LLMs like ChatGPT",
    autor: "Andrej Karpathy",
    descripcion: "Tres horas y media sobre cómo se construyen y funcionan los modelos de lenguaje, para público general.",
    url: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    idioma: "EN",
    acceso: "gratis",
    image: "karpathy-llms.webp",
  },
  {
    seccion: "video",
    titulo: "Stanford eCorner",
    autor: "Stanford Technology Ventures Program",
    descripcion: "Charlas de emprendedores e inversionistas en la serie Entrepreneurial Thought Leaders.",
    url: "https://stvp.stanford.edu/ecorner/",
    links: [
      { label: "Sitio", url: "https://stvp.stanford.edu/ecorner/" },
      { label: "YouTube", url: "https://www.youtube.com/user/ecorner" },
    ],
    idioma: "EN",
    acceso: "gratis",
    logo: "youtube",
  },
  {
    seccion: "video",
    titulo: "Dot CSV",
    autor: "Carlos Santana",
    descripcion: "Divulgación sobre inteligencia artificial para entender cómo funciona esta tecnología.",
    url: "https://www.youtube.com/@DotCSV",
    idioma: "ES",
    acceso: "gratis",
    logo: "youtube",
  },
  {
    seccion: "video",
    titulo: "AI In Context",
    autor: "80,000 Hours",
    descripcion: "Documentales largos sobre hacia dónde va la IA.",
    url: "https://www.youtube.com/@AI_In_Context",
    idioma: "EN",
    acceso: "gratis",
    logo: "youtube",
  },
  {
    seccion: "video",
    titulo: "Robert Miles AI Safety",
    autor: "Robert Miles",
    descripcion: "Videos sobre alineación, control y los problemas abiertos de la seguridad de la IA.",
    url: "https://www.youtube.com/@RobertMilesAI/videos",
    idioma: "EN",
    acceso: "gratis",
    logo: "youtube",
  },

  // Podcasts
  {
    seccion: "podcast",
    titulo: "Dwarkesh Podcast",
    autor: "Dwarkesh Patel",
    descripcion: "Entrevistas largas y bien investigadas con líderes de IA, ciencia y economía.",
    url: "https://www.dwarkesh.com",
    idioma: "EN",
    acceso: "gratis",
    image: "dwarkesh.webp",
  },
  {
    seccion: "podcast",
    titulo: "Cautionary Tales",
    autor: "Tim Harford",
    descripcion: "Historias reales de errores y lo que enseñan sobre cómo decidimos.",
    url: "https://timharford.com/articles/cautionarytales/",
    idioma: "EN",
    acceso: "gratis",
    image: "cautionary-tales.webp",
  },
  {
    seccion: "podcast",
    titulo: "HBR IdeaCast",
    autor: "Harvard Business Review",
    descripcion: "Podcast semanal con los principales pensadores de negocios y gestión.",
    url: "https://hbr.org/2018/01/podcast-ideacast",
    idioma: "EN",
    acceso: "gratis",
    image: "hbr-ideacast.webp",
  },
  {
    seccion: "podcast",
    titulo: "Me, Myself, and AI",
    autor: "MIT Sloan Management Review y BCG",
    descripcion: "Conversaciones con las personas que están logrando resultados con IA en sus empresas.",
    url: "https://sloanreview.mit.edu/audio-series/me-myself-and-ai/",
    idioma: "EN",
    acceso: "gratis",
    image: "me-myself-and-ai.webp",
  },
  {
    seccion: "podcast",
    titulo: "Acquired",
    autor: "Ben Gilbert y David Rosenthal",
    descripcion: "La historia y la estrategia de las grandes compañías, en episodios largos.",
    url: "https://www.acquired.fm",
    idioma: "EN",
    acceso: "gratis",
    image: "acquired.webp",
  },
  {
    seccion: "podcast",
    titulo: "monos estocásticos",
    autor: "Antonio Ortiz y Matías S. Zavia",
    descripcion: "La actualidad de la inteligencia artificial, cada semana.",
    url: "https://cuonda.com/monos-estocasticos",
    idioma: "ES",
    acceso: "gratis",
    image: "monos-estocasticos.webp",
  },
  {
    seccion: "podcast",
    titulo: "The Cognitive Revolution",
    autor: "Nathan Labenz",
    descripcion: "Entrevistas semanales con gente de los laboratorios de IA de frontera.",
    url: "https://www.cognitiverevolution.ai/",
    idioma: "EN",
    acceso: "gratis",
    image: "cognitive-revolution.webp",
  },
  {
    seccion: "podcast",
    titulo: "The 80,000 Hours Podcast",
    autor: "80,000 Hours",
    descripcion: "Conversaciones con investigadores, fundadores y gente de política pública.",
    url: "https://80000hours.org/podcast/",
    idioma: "EN",
    acceso: "gratis",
    image: "80000-hours.webp",
  },

  // Cursos
  {
    seccion: "curso",
    titulo: "Valoración y finanzas corporativas",
    autor: "Aswath Damodaran. NYU Stern",
    descripcion: "Versiones en línea y gratuitas de sus cursos de valoración, finanzas corporativas y filosofías de inversión.",
    url: "https://pages.stern.nyu.edu/~adamodar/",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "curso",
    titulo: "Finance Theory I (15.401)",
    autor: "Andrew Lo. MIT OpenCourseWare",
    descripcion: "Curso de posgrado de MIT Sloan con videos, notas de clase y exámenes resueltos.",
    url: "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "curso",
    titulo: "Engineering Systems Analysis for Design (ESD.71)",
    autor: "Richard de Neufville. MIT OpenCourseWare",
    descripcion: "Opciones reales para diseñar flexibilidad en los proyectos y medir su valor.",
    url: "https://ocw.mit.edu/courses/esd-71-engineering-systems-analysis-for-design-fall-2008",
    idioma: "EN",
    acceso: "gratis",
    nota: "Material de 2008",
  },
  {
    seccion: "curso",
    titulo: "Statistics 110: Probability",
    autor: "Joe Blitzstein. Harvard",
    descripcion: "Introducción completa a la probabilidad, con libro en línea, clases en YouTube y curso en edX.",
    url: "https://stat110.hsites.harvard.edu/",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "curso",
    titulo: "Startup School",
    autor: "Y Combinator",
    descripcion: "Cómo iniciar una empresa, en unas siete semanas y a ritmo propio.",
    url: "https://www.startupschool.org/",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "curso",
    titulo: "AI Fluency: Framework & Foundations",
    autor: "Anthropic Academy",
    descripcion:
      "Cómo colaborar con sistemas de IA de forma efectiva, eficiente, ética y segura. De tres a cuatro horas, con certificado.",
    url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    idioma: "EN",
    acceso: "gratis",
  },
  {
    seccion: "curso",
    titulo: "Elements of AI",
    autor: "Universidad de Helsinki y MinnaLearn",
    descripcion: "Introducción a la IA para no expertos, sin programación ni matemáticas complejas.",
    url: "https://www.elementsofai.com/es/",
    idioma: "ES",
    acceso: "gratis",
  },
  {
    seccion: "curso",
    titulo: "AGI Strategy",
    autor: "BlueDot Impact",
    descripcion: "Veinticinco horas en grupos de ocho personas sobre estrategia frente a la IA avanzada.",
    url: "https://bluedot.org/courses/agi-strategy",
    idioma: "EN",
    acceso: "por-confirmar",
  },
  {
    seccion: "curso",
    titulo: "AI Safety, Ethics and Society",
    autor: "Center for AI Safety",
    descripcion: "Ocho capítulos, de los riesgos catastróficos a la gobernanza. Disponible como libro, audiolibro y curso.",
    url: "https://aisafetybook.com/",
    idioma: "EN",
    acceso: "gratis",
  },

  // De mi autoría
  {
    seccion: "propio",
    titulo: "Blog",
    autor: "Augusto Ruiz",
    descripcion: "Artículos sobre evaluación financiera de proyectos de innovación, beneficios tributarios e IA.",
    url: "/blog",
    idioma: "ES",
    acceso: "gratis",
    interno: true,
  },
  {
    seccion: "propio",
    titulo: "Monte Carlo con IA: lecciones de 11 proyectos de innovación",
    autor: "Augusto Ruiz",
    descripcion: "Lo que aprendimos al evaluar 11 proyectos reales con simulación, experimentación e IA generativa.",
    url: "/blog/monte-carlo-ia-generativa-lecciones-proyectos-innovacion",
    idioma: "ES",
    acceso: "gratis",
    interno: true,
  },
  {
    seccion: "propio",
    titulo: "PRIME-10",
    autor: "Augusto Ruiz",
    descripcion: "La metodología de evaluación financiera probabilística de proyectos de innovación bajo alta incertidumbre.",
    url: "/prime-10",
    idioma: "ES",
    acceso: "gratis",
    interno: true,
  },
];

export const porSeccion = (seccion: RecursoSeccion) => recursos.filter((r) => r.seccion === seccion);
