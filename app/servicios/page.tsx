import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import Prime10Phases from "@/components/sections/Prime10Phases";
import SchemaScript from "@/components/SchemaScript";
import FAQAccordion from "@/components/FAQAccordion";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consultoría en Innovación Tecnológica",
  description:
    "Consultoría en innovación empresarial para organizaciones en Colombia y LATAM. Evaluación financiera probabilística, IA generativa y estrategias de financiación.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios" },
  openGraph: {
    title: "Consultoría en Innovación Tecnológica en Colombia | Augusto Ruiz",
    description: "Consultoría en innovación empresarial para organizaciones en Colombia. Evaluación financiera probabilística, IA generativa y estrategias de financiación.",
    url: "https://www.augustoruiz.org/servicios",
    type: "website",
  },
  keywords: [
    "consultoría en innovación empresarial Colombia",
    "consultoría en innovación tecnológica",
    "consultoría en innovación digital",
    "consultoría en innovación estratégica",
    "consultoría en innovación para pymes",
    "consultoría en innovación organizacional",
    "consultoría innovación Medellín",
    "consultoría innovación Bogotá",
  ],
};

const services = [
  {
    id: "evaluacion-financiera",
    icon: "📊",
    svgPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "PRIME-10 Decision Assessment",
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
    title: "Beneficios tributarios I+D+i y ambientales",
    description:
      "Colombia ofrece dos regímenes de beneficios tributarios para empresas que inviertan en innovación o sostenibilidad. Acompaño la estructuración y postulación de proyectos en ambos regímenes: ante Minciencias para inversiones en I+D+i, y ante la ANLA y la UPME para inversiones en control ambiental, protección del medio ambiente y fuentes no convencionales de energía.",
    benefits: [
      "Evaluación de elegibilidad del proyecto antes de cualquier compromiso formal",
      "Estructuración técnica y formulación del proyecto",
      "Gestión ante la entidad competente: Minciencias, ANLA o UPME según el régimen",
      "Preparación de la documentación requerida",
      "Seguimiento al proceso de aprobación",
      "93% tasa de aprobación en proyectos gestionados",
    ],
    forWho: "Empresas que inviertan en proyectos de I+D+i, en control y mejoramiento ambiental, o en energías renovables y eficiencia energética.",
  },
];

const process = [
  { step: "01", title: "Diagnóstico inicial", desc: "Sesión de entendimiento del contexto, necesidades y objetivos de la organización." },
  { step: "02", title: "Análisis y modelado", desc: "Aplicación de frameworks y herramientas específicas al desafío identificado." },
  { step: "03", title: "Entrega de resultados", desc: "Informe ejecutivo con hallazgos, recomendaciones y hoja de ruta." },
  { step: "04", title: "Implementación", desc: "Acompañamiento opcional en la ejecución de las recomendaciones." },
];

const faqs = [
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
    a: "El primer paso es establecer si el proyecto califica y bajo qué régimen, antes de cualquier compromiso formal. Si es elegible, se estructura técnicamente el proyecto, se prepara la documentación requerida y se gestiona la postulación ante la entidad competente: Minciencias para proyectos de I+D+i, o la ANLA y la UPME para inversiones ambientales y energéticas. La tasa de aprobación en proyectos gestionados es del 93%.",
  },
  {
    q: "¿Con qué tipo de organizaciones ha trabajado?",
    a: "Con empresas del sector real, universidades y organismos multilaterales en Colombia y América Latina. Entre los clientes y aliados se cuentan organizaciones como Ecopetrol, Connect Bogotá, SwissContact, el Instituto Humboldt y el BID-PRODEM, entre otros. Los proyectos cubren sectores como energía, alimentos, bioeconomía, manufactura y servicios.",
  },
];

export default function ServiciosPage() {
  const schemas = [
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
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site text-center">
          <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
            Consultoría especializada · I+D+i
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            Consultoría especializada en gestión de la innovación tecnológica
          </h1>
          <p className="mt-5 text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Soy investigador doctoral en gestión de la innovación y consultor con más
            de 15 años en proyectos con organizaciones del sector real, universidades y
            organismos multilaterales. Esa combinación define cómo trabajo: con el
            rigor de la academia y la orientación a resultados de la práctica.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-site space-y-16">
          {services.map((service, idx) => (
            <div key={service.id}>
            <div
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.svgPath} />
                  </svg>
                </div>
                <h2 className="section-heading text-2xl sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <strong className="text-foreground">Para quién:</strong> {service.forWho}
                </p>
                <a
                  href={whatsappUrl(`Hola Augusto, quiero información sobre el servicio de ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6"
                >
                  Contáctame por WhatsApp
                </a>
              </div>
              <div className={`card p-6 ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wide">
                  Incluye
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {idx === 0 && (
              <div className="mt-12">
                <h3 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                  ¿Cómo funciona?
                </h3>
                <Prime10Phases />
              </div>
            )}
            {idx === 1 && (
              <div className="relative mt-8 w-full aspect-[21/9] rounded-xl overflow-hidden">
                <Image
                  src="/images/docencia-taller.jpg"
                  alt="Sesión de formación corporativa en IA generativa"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
            {idx === 2 && (
              <div className="relative mt-8 w-full aspect-[21/9] rounded-xl overflow-hidden">
                <Image
                  src="/images/servicios-beneficios-tributarios.jpg"
                  alt="Documentación de beneficios tributarios"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted">
        <div className="container-site">
          <h2 className="section-heading text-2xl sm:text-3xl text-center mb-12">Cómo trabajo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-base text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Preguntas frecuentes</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
