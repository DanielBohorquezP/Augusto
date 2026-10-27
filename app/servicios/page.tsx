import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import FAQAccordion from "@/components/FAQAccordion";
import { faqSchema, breadcrumbSchema, globalSchemaNodes } from "@/lib/schema";
import { whatsappUrl } from "@/lib/site";
import { WA_PATH } from "@/lib/whatsapp-icon";
import { renderInlineText } from "@/lib/inline-text";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  // Antes decia "Consultoria EN Innovacion Tecnologica": nunca contenia la
  // frase exacta "consultoria DE innovacion" que es la que buscan (pos. ~54,
  // fuera de las primeras 5 paginas). Se corrige la preposicion y se anade
  // "en Colombia" como diferenciador geografico frente al H1 de la home.
  title: "Servicios de Consultoría de Innovación en Colombia",
  description:
    "Consultoría de innovación para organizaciones en Colombia y Latinoamérica: evaluación financiera probabilística, IA generativa aplicada y beneficios tributarios I+D+i.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios" },
  openGraph: {
    title: "Servicios de Consultoría de Innovación en Colombia | Augusto Ruiz",
    description: "Consultoría de innovación para organizaciones en Colombia y Latinoamérica: evaluación financiera probabilística, IA generativa aplicada y beneficios tributarios I+D+i.",
    url: "https://www.augustoruiz.org/servicios",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Consultoría de Innovación en Colombia | Augusto Ruiz",
    description: "Consultoría de innovación para organizaciones en Colombia y Latinoamérica: evaluación financiera probabilística, IA generativa aplicada y beneficios tributarios I+D+i.",
  },
};

const serviceSlugs: Record<string, string> = {
  "evaluacion-financiera": "evaluacion-financiera-innovacion",
  "ia-generativa": "capacitacion-ia-generativa",
  financiacion: "beneficios-tributarios-innovacion",
};

// El boton hacia cada servicio decia "Ver el servicio completo" en los tres
// casos: un anchor generico repetido no le dice ni al lector ni al rastreador
// que hay al otro lado. Cada destino lleva ahora su propia etiqueta descriptiva.
const serviceCtaLabels: Record<string, string> = {
  "evaluacion-financiera": "Ver el servicio de evaluación financiera de proyectos",
  "ia-generativa": "Ver el programa de formación en IA generativa",
  financiacion: "Ver beneficios tributarios y OxI",
};

const services = [
  {
    id: "evaluacion-financiera",
    icon: "📊",
    svgPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Evaluación financiera de proyectos de innovación (PRIME-10)",
    description:
      "Los métodos financieros tradicionales (VPN, TIR, flujo de caja descontado) asumen un futuro predecible. En proyectos de innovación e inversión tecnológica, esa suposición genera errores de selección que pueden costar millones. PRIME-10 evalúa la decisión con el riesgo cuantificado, no supuesto.",
    benefits: [
      "Modelos probabilísticos que incorporan la incertidumbre real",
      "Simulación Monte Carlo aplicada al proyecto",
      "Valoración de opciones reales en decisiones de inversión",
      "Identificación de las variables de mayor incertidumbre",
      "Diseño del experimento crítico para reducir incertidumbre antes de comprometer la inversión",
    ],
    forWho: "Direcciones de innovación, CFOs y equipos de gestión de innovación y proyectos tecnológicos",
  },
  {
    id: "ia-generativa",
    svgPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Formación corporativa en IA generativa",
    description:
      "La formación se diseña por área, y/o nivel jerárquico. Antes de cada sesión, el área identifica retos de negocio concretos que podrían resolverse con IA. La sesión parte de las generalidades de IA, avanza hacia las herramientas que ya usa la empresa — Copilot, ChatGPT, Gemini, Claude — aplicadas al reto específico, y cierra con un artefacto funcional por participante y un demo day. El resultado no es un equipo de desarrollo: son personas con criterio para usar IA en su trabajo diario.",
    benefits: [
      "Diagnóstico previo de retos de negocio por área",
      "Formación contextualizada al lenguaje y dinámica de cada área",
      "Uso de las herramientas de IA que ya tiene la empresa (Copilot, ChatGPT, Gemini, Claude)",
      "Para áreas de I+D+i: incorporación de herramientas especializadas y enfoque basado en método científico",
      "Construcción de un artefacto funcional por participante",
      "Mentoría durante el proceso y demo day de cierre",
    ],
    forWho: "Equipos de cualquier área funcional y niveles directivos que quieran elevar su productividad con IA generativa.",
  },
  {
    id: "financiacion",
    svgPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Beneficios tributarios y OxI: I+D+i, ambientales y Obras por Impuestos",
    description:
      "Consultoría tributaria para empresas, especializada en beneficios tributarios por inversión. Colombia ofrece [dos regímenes de beneficios tributarios](/blog/que-es-un-beneficio-tributario-colombia) para las empresas que invierten en innovación o sostenibilidad, y acompaño la estructuración y postulación de proyectos en ambos: ante Minciencias para inversiones en I+D+i, y ante la ANLA y la UPME para inversiones en control ambiental, protección del medio ambiente y fuentes no convencionales de energía. Complementa el trabajo de su contador o firma tributaria, no lo reemplaza.",
    benefits: [
      "Evaluación de elegibilidad del proyecto antes de cualquier compromiso formal",
      "Estructuración técnica y formulación del proyecto",
      "Gestión ante la entidad competente: Minciencias, ANLA o UPME según el régimen",
      "Preparación de la documentación requerida",
      "Seguimiento al proceso de aprobación",
      "Postulación bajo Obras por Impuestos (OxI), incluida su modalidad para la reconstrucción (OxI-R), con gestión ante la ART",
      "93% tasa de aprobación en proyectos gestionados en mi práctica actual de consultoría",
    ],
    forWho: "Empresas que inviertan en proyectos de I+D+i, en control y mejoramiento ambiental, o en energías renovables y eficiencia energética.",
  },
];

const criterios = [
  {
    q: "¿La metodología tiene nombre, autor y respaldo verificable?",
    a: "«Metodologías propias» es la frase más común del sector y casi nunca viene acompañada de un nombre concreto. Pida el nombre, quién la desarrolló y dónde está documentada. PRIME-10™ está registrada en la Dirección Nacional de Derecho de Autor de Colombia (2025) y proviene de una investigación doctoral en la Universidad de los Andes: son dos hechos que cualquiera puede verificar por fuera de este sitio.",
  },
  {
    q: "¿Quién va a hacer el trabajo, en concreto?",
    a: "En las firmas grandes es habitual que quien presenta la propuesta no sea quien ejecuta. Pregunte el nombre y el perfil de la persona que estará en las sesiones. En mi caso el trabajo lo hago yo: soy investigador doctoral en gestión de la innovación con más de 15 años en proyectos con organizaciones del sector real, universidades y organismos multilaterales.",
  },
  {
    q: "¿El método incorpora la incertidumbre o la esconde detrás de un número?",
    a: "Si la propuesta de evaluación financiera termina en un VPN, una TIR o un puntaje único, está asumiendo un futuro predecible que en innovación no existe. Un método adecuado entrega un rango con su probabilidad, dice cuáles son las variables que más pesan en el resultado y define qué debe validarse experimentalmente antes de comprometer la inversión.",
  },
  {
    q: "¿Hay resultados verificables, no solo logos?",
    a: "Una pared de logos no dice si el trabajo funcionó. Pida cifras y el criterio con que se midieron. En beneficios tributarios, la tasa de aprobación de los proyectos gestionados en mi práctica actual de consultoría es del 93%.",
  },
  {
    q: "¿Qué queda en la organización cuando el consultor se va?",
    a: "El riesgo de toda consultoría es entregar un informe que nadie vuelve a abrir. Defina desde el principio cuál es el entregable y quién lo usa: un modelo financiero que el equipo pueda correr de nuevo con datos actualizados, un proyecto radicado ante la entidad competente o un grupo de personas con criterio para aplicar IA en su trabajo diario son resultados distintos de un documento de recomendaciones.",
  },
];

const process = [
  { step: "01", title: "Diagnóstico inicial", desc: "Sesión de entendimiento del contexto, necesidades y objetivos de la organización." },
  { step: "02", title: "Análisis y modelado", desc: "Aplicación de frameworks y herramientas específicas al desafío identificado." },
  { step: "03", title: "Entrega de resultados", desc: "Informe ejecutivo con hallazgos, recomendaciones y hoja de ruta." },
  { step: "04", title: "Implementación", desc: "Acompañamiento opcional en la ejecución de las recomendaciones." },
];

/*
  Las paginas que rankean por "consultoria de innovacion" tienen mucha mas
  profundidad que esta: Olivia corre ~5.000 palabras con 11 preguntas
  frecuentes. Este bloque cubre esa brecha y ademas alimenta el FAQPage schema,
  que es lo que los motores de IA extraen para responder de forma directa.
*/
const faqs = [
  {
    q: "¿Qué es una consultoría de innovación y qué no es?",
    a: "Una consultoría de innovación acompaña a una organización a decidir en qué innovar y cómo hacerlo con criterio, no a generar ideas. En mi práctica el trabajo se concentra en tres frentes: evaluar financieramente proyectos de innovación bajo incertidumbre, la [asesoría en beneficios tributarios para empresas](/servicios/beneficios-tributarios-innovacion) que invierten en I+D+i, y formar equipos en el uso de IA generativa. No es una agencia creativa, no es un taller de ideación y no reemplaza al área de innovación de la empresa: le da métodos y criterio para sustentar sus decisiones.",
  },
  {
    q: "¿Qué metodologías de innovación existen y cuál necesita mi empresa?",
    a: "Depende de la decisión que tenga enfrente. Si el problema es determinar si un proyecto crea o destruye valor, aplican la simulación Monte Carlo, la valoración de opciones reales y el diseño del experimento crítico — las tres integradas en PRIME-10™, mi metodología propia registrada ante la Dirección Nacional de Derecho de Autor (2025). Si el problema es acceder a beneficios tributarios, aplica la formulación de proyectos según los criterios de Minciencias, la ANLA o la UPME. Si el problema es que el equipo no sabe usar IA en su trabajo, aplica la adopción por reto de negocio. El diagnóstico inicial sirve precisamente para determinar cuál corresponde.",
  },
  {
    q: "¿En qué se diferencia de una consultoría estratégica tradicional?",
    a: "La consultoría estratégica tradicional trabaja con proyecciones puntuales: un VPN, una TIR, un escenario base. Eso funciona cuando el futuro es razonablemente predecible. En proyectos de innovación no lo es, y ese supuesto produce errores de selección documentados en mi investigación doctoral: se aprueban proyectos que destruyen valor y se rechazan proyectos que sí lo crean. Mi trabajo parte de rangos de incertidumbre en vez de valores fijos, y define qué debe validarse experimentalmente antes de comprometer la inversión.",
  },
  {
    q: "¿Trabaja con pymes o solo con grandes empresas?",
    a: "Con ambas. He trabajado con empresas del sector real, universidades y organismos multilaterales — entre ellos Ecopetrol, Connect Bogotá, SwissContact, el Instituto Humboldt y el BID-PRODEM — y también con pymes y startups. Lo que define si el trabajo aplica no es el tamaño de la organización sino el tipo de decisión: si hay una inversión en innovación o tecnología con incertidumbre alta de por medio, el método aplica igual. Lo que cambia es el alcance.",
  },
  {
    q: "¿Cuánto cuesta una consultoría de innovación?",
    a: "El valor depende del alcance, y el alcance se define en el diagnóstico inicial: no cotizo sobre un servicio genérico sino sobre la decisión concreta que la organización tiene enfrente. Una evaluación PRIME-10™ de un proyecto puntual, una formación corporativa por áreas y la estructuración de un proyecto para beneficios tributarios son trabajos de magnitud distinta. La conversación inicial por WhatsApp sirve para entender el caso y definir si tiene sentido avanzar.",
  },
  {
    q: "¿Cuánto tiempo toma un proyecto de consultoría?",
    a: "Una evaluación PRIME-10™ completa toma típicamente entre 3 y 5 días, incluyendo la recopilación de información, el análisis y la presentación de resultados. La formación corporativa en IA generativa y la estructuración de proyectos para beneficios tributarios dependen del número de áreas involucradas y de los tiempos de la entidad competente, y se definen en el diagnóstico inicial.",
  },
  {
    q: "¿Qué es PRIME-10™ y en qué se diferencia de una evaluación financiera tradicional?",
    a: "El VPN y el TIR producen un único número que asume un futuro predecible. PRIME-10™ es una metodología propia de evaluación financiera probabilística que trabaja con rangos de incertidumbre, no con valores fijos. Incorpora simulación Monte Carlo, análisis de opciones reales y diseño del experimento crítico que debe ejecutarse antes de comprometer la inversión. Está registrada en la Dirección Nacional de Derecho de Autor de Colombia (2025).",
  },
  {
    q: "¿Trabaja con organizaciones fuera de Colombia?",
    a: "Sí. El trabajo de investigación doctoral incluyó visitas de campo y entrevistas con organizaciones en Brasil, Uruguay, Argentina y Chile. Para proyectos de I+D+i, el acompañamiento en beneficios tributarios aplica a Colombia y a otros países de la región con regímenes similares. La formación corporativa en IA se puede desarrollar de forma remota con organizaciones en cualquier país.",
  },
  {
    q: "¿La formación en IA generativa requiere conocimientos técnicos previos?",
    a: "No. El programa está diseñado para equipos y líderes de cualquier área funcional, independientemente de su nivel técnico. Cada sesión parte de un reto de negocio concreto del área y usa las herramientas que la organización ya tiene disponibles — Copilot, ChatGPT, Gemini o Claude. El objetivo es que el empleado eleve su productividad con IA, no que desarrolle software.",
  },
  {
    q: "¿Cómo funciona el proceso para acceder a beneficios tributarios por I+D+i?",
    a: "El primer paso es establecer si el proyecto califica y bajo qué régimen, antes de cualquier compromiso formal. Si es elegible, se estructura técnicamente el proyecto, se prepara la documentación requerida y se gestiona la postulación ante la entidad competente: Minciencias para proyectos de I+D+i, o la ANLA y la UPME para inversiones ambientales y energéticas. La tasa de aprobación en proyectos gestionados en mi práctica actual de consultoría es del 93%.",
  },
  {
    q: "¿Con qué tipo de organizaciones ha trabajado?",
    a: "Con empresas del sector real, universidades y organismos multilaterales en Colombia y América Latina. Entre los clientes y aliados se cuentan organizaciones como Ecopetrol, Connect Bogotá, SwissContact, el Instituto Humboldt y el BID-PRODEM, entre otros. Los proyectos cubren sectores como energía, alimentos, bioeconomía, manufactura y servicios.",
  },
];

const shortNames: Record<string, string> = {
  "evaluacion-financiera": "Evaluación financiera (PRIME-10)",
  "ia-generativa": "Formación en IA generativa",
  financiacion: "Beneficios tributarios y OxI",
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  "evaluacion-financiera": {
    src: "/images/prime10-canvas.jpg",
    alt: "Canvas de modelo de negocio con el décimo cuadrante de PRIME-10",
  },
  "ia-generativa": {
    src: "/images/servicios-ia-generativa.jpg",
    alt: "Workshop de aplicaciones de inteligencia artificial generativa",
  },
  financiacion: {
    src: "/images/servicios-beneficios-tributarios.jpg",
    alt: "Documentación de beneficios tributarios",
  },
};

const stats = [
  { v: "+15", l: "Años de experiencia" },
  { v: "50+", l: "Organizaciones asesoradas" },
  { v: "93%", l: "Aprobación Minciencias" },
];

const phases = [
  { letter: "P", title: "Problem framing", desc: "Define la decisión de inversión y construye el canvas de 10 cuadrantes.", color: "#CE2222" },
  { letter: "R", title: "Readiness validation", desc: "Evalúa la madurez tecnológica y comercial e identifica las incertidumbres reales.", color: "#E8A33D" },
  { letter: "I", title: "Investment modeling", desc: "Flujo de caja, costo de capital y simulación Monte Carlo calibrada.", color: "#2DD4BF" },
  { letter: "M", title: "Market experimentation", desc: "Opciones reales y diseño del experimento crítico go/no-go.", color: "#A78BFA" },
  { letter: "E", title: "Ex post learning", desc: "Actualiza el modelo: ¿seguir, escalar, pivotar o abandonar?", color: "#38BDF8" },
];

const eyebrow = "font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent";
const wrap = "max-w-[1152px] mx-auto px-5 sm:px-8 lg:px-0";

export default function ServiciosPage() {
  const schemas = [
    ...globalSchemaNodes,
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
    ]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-28 lg:pt-36 pb-28 lg:pb-[120px]">
        <div
          className="absolute inset-0 opacity-[.08] [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-2/5 h-0.5 bg-accent" aria-hidden="true" />
        <div className={`relative ${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-[72px] items-end`}>
          <div className="flex flex-col gap-6 items-start">
            <span className="bg-accent text-white font-heading font-semibold text-xs tracking-[.06em] uppercase px-3 py-1.5 rounded-full">
              Consultoría especializada · I+D+i
            </span>
            {/* Antes decia "consultoria EN innovacion tecnologica": no contenia la
                frase exacta "consultoria DE innovacion" que es la que se busca.
                El H1 de la home tambien abre con esa misma frase (es el termino de
                cabeza de la marca); "en Colombia" diferencia esta pagina como el
                hub de servicios sin diluir el match exacto. */}
            <h1 className="font-heading font-bold text-[34px] sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-.03em] text-white text-balance">
              Servicios de consultoría de innovación en Colombia
            </h1>
            <p className="font-heading font-medium text-lg lg:text-[19px] leading-[1.45] text-white/90 [text-wrap:pretty]">
              Especializada en gestión de la innovación, evaluación financiera bajo
              incertidumbre y beneficios tributarios por I+D+i
            </p>
            <LastUpdated path="/servicios" />
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-base leading-[1.75] text-white/80 [text-wrap:pretty]">
              Soy investigador doctoral en gestión de la innovación y consultor con más
              de 15 años en proyectos con organizaciones del sector real, universidades y
              organismos multilaterales. Esa combinación define cómo trabajo: con el
              rigor de la academia y la orientación a resultados de la práctica.
            </p>
            <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
              {stats.map((s) => (
                <div key={s.l} className="flex flex-col gap-0.5">
                  <dd className="font-heading font-bold text-2xl lg:text-[28px] text-white m-0">{s.v}</dd>
                  <dt className="text-xs text-white/65">{s.l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Indice de servicios, subido sobre el borde del hero */}
      <section className="relative z-10 bg-white px-5 sm:px-8 lg:px-0">
        <div className="max-w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 -mt-14">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="bg-white rounded-[18px] px-7 py-6 flex items-center gap-4 shadow-[0_20px_40px_-20px_rgba(14,28,61,.35)] text-foreground hover:-translate-y-0.5 transition-transform"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/[.08] text-primary flex items-center justify-center">
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.svgPath} />
                </svg>
              </span>
              <span className="flex flex-col gap-0.5 flex-1">
                <span className="font-heading font-semibold text-xs text-accent">{String(services.indexOf(s) + 1).padStart(2, "0")}</span>
                <span className="font-heading font-semibold text-base leading-tight text-primary">{shortNames[s.id]}</span>
              </span>
              <svg className="w-[18px] h-[18px] text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="pt-10 pb-20 lg:pb-[120px] bg-white">
        <div className={`${wrap} flex flex-col gap-20 lg:gap-[120px]`}>
          {services.map((service, idx) => (
            <article key={service.id} id={service.id} className="flex flex-col gap-10 scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-[72px] items-start">
                <div className="flex flex-col gap-5">
                  <span className="font-heading font-semibold text-[13px] text-accent tracking-[.04em]">
                    {String(idx + 1).padStart(2, "0")} — {shortNames[service.id]}
                  </span>
                  <h2 className="font-heading font-semibold text-[28px] sm:text-4xl leading-[1.15] tracking-[-.02em] text-primary text-balance">
                    {service.title}
                  </h2>
                  <p className="text-base leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                    {renderInlineText(service.description)}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-[110px_minmax(0,1fr)] gap-2 sm:gap-4 py-5 border-y border-[#E2E8F0]">
                    <span className="font-heading font-semibold text-[13px] text-primary">Para quién</span>
                    <span className="text-sm leading-[1.6] text-muted-foreground">{service.forWho}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <a
                      href={whatsappUrl(`Hola Augusto, quiero información sobre el servicio de ${shortNames[service.id]}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={WA_PATH} />
                      </svg>
                      Contáctame por WhatsApp
                    </a>
                    {serviceSlugs[service.id] && (
                      <Link
                        href={`/servicios/${serviceSlugs[service.id]}`}
                        className="inline-flex items-center px-[22px] py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold text-sm rounded-lg transition-colors"
                      >
                        {serviceCtaLabels[service.id] ?? "Ver el servicio completo"}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden bg-[#F5F7FB]">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={serviceImages[service.id].src}
                      alt={serviceImages[service.id].alt}
                      fill
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <h3 className="font-heading font-semibold text-xs tracking-[.14em] uppercase text-primary">Incluye</h3>
                    <ul className="flex flex-col gap-3">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex gap-3 items-start text-sm leading-[1.5] text-foreground">
                          <svg className="w-[18px] h-[18px] text-accent shrink-0 mt-px" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {idx === 0 && (
                <div className="bg-primary rounded-3xl p-6 sm:p-10 flex flex-col gap-6">
                  <div className="flex flex-wrap justify-between items-center gap-x-6 gap-y-2">
                    <h3 className="font-heading font-semibold text-lg text-white">¿Cómo funciona? Las cinco fases</h3>
                    <Link href="/prime-10" className="font-heading font-semibold text-sm text-[#FCA5A5] hover:text-white transition-colors">
                      Conocer PRIME-10™ →
                    </Link>
                  </div>
                  <ol className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
                    {phases.map((p) => (
                      <li key={p.letter} className="bg-white/[.06] rounded-2xl p-5 flex flex-col gap-2.5">
                        <span
                          className="w-10 h-10 rounded-xl text-primary font-heading font-bold text-lg flex items-center justify-center"
                          style={{ background: p.color }}
                          aria-hidden="true"
                        >
                          {p.letter}
                        </span>
                        <span className="font-heading font-semibold text-sm text-white">{p.title}</span>
                        <span className="text-xs leading-[1.55] text-white/70">{p.desc}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className={wrap}>
          <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-14">
            <span className={eyebrow}>Proceso</span>
            <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-.025em] text-primary">
              Cómo trabajo
            </h2>
          </div>
          <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <span className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-border" aria-hidden="true" />
            {process.map((step) => (
              <li key={step.step} className="relative flex flex-col items-center text-center gap-5">
                <span className="w-14 h-14 rounded-full bg-primary text-white font-heading font-semibold text-base flex items-center justify-center shadow-[0_0_0_8px_#EEF2FA]">
                  {step.step}
                </span>
                <div className="bg-white rounded-[18px] px-[18px] py-6 flex flex-col gap-2 w-full flex-1">
                  <h3 className="font-heading font-semibold text-[17px] text-primary [overflow-wrap:anywhere]">{step.title}</h3>
                  <p className="text-sm leading-[1.6] text-muted-foreground">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Criterios de compra: contenido de decision para quien esta evaluando
          proveedores. Cada criterio es util por si mismo y a la vez expone en
          que se diferencia esta practica de las consultoras generalistas. */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-10 lg:gap-20 items-start`}>
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
            <span className={eyebrow}>Antes de contratar</span>
            <h2 className="font-heading font-semibold text-[28px] sm:text-4xl lg:text-[40px] leading-[1.12] tracking-[-.025em] text-primary text-balance">
              Cómo evaluar una consultoría de innovación antes de contratarla
            </h2>
            <p className="text-base leading-[1.7] text-muted-foreground [text-wrap:pretty]">
              Casi todas las firmas prometen lo mismo con palabras parecidas. Estas cinco
              preguntas sirven para distinguir una propuesta con método de una con vocabulario.
            </p>
          </div>
          <ol className="flex flex-col border-t border-[#E2E8F0]">
            {criterios.map((c, i) => (
              <li key={c.q} className="grid grid-cols-[48px_minmax(0,1fr)] sm:grid-cols-[64px_minmax(0,1fr)] gap-4 sm:gap-6 py-8 border-b border-[#E2E8F0]">
                <span className="font-heading font-light text-[32px] sm:text-[40px] leading-none text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-heading font-semibold text-xl leading-[1.3] text-primary text-balance">{c.q}</h3>
                  <p className="text-[15px] leading-[1.7] text-muted-foreground [text-wrap:pretty]">{c.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-[120px] bg-muted">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 lg:gap-20 items-start`}>
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
            <span className={eyebrow}>FAQ</span>
            <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-.025em] text-primary">
              Preguntas frecuentes
            </h2>
            <Link
              href="/contacto"
              className="mt-2 self-start inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-sm px-[22px] py-3.5 rounded-lg transition-colors"
            >
              ¿Otra pregunta? Escríbeme
            </Link>
          </div>
          <FAQAccordion faqs={faqs} variant="plus" initialOpen={0} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
