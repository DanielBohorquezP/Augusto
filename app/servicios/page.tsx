import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

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
    title: "Evaluación Financiera de Innovación",
    description:
      "Los métodos financieros tradicionales (VPN, TIR, flujo de caja descontado) asumen un futuro predecible. En innovación tecnológica, esa suposición genera sesgos que pueden costar millones en decisiones equivocadas.",
    benefits: [
      "Modelos probabilísticos que incorporan la incertidumbre real",
      "Simulaciones Monte Carlo aplicadas a proyectos de innovación",
      "Valoración de opciones reales en decisiones de inversión",
      "Benchmarking con estándares internacionales",
      "Informe ejecutivo con recomendaciones accionables",
    ],
    forWho: "Direcciones de innovación, CFOs y equipos de gestión de proyectos tecnológicos",
  },
  {
    id: "ia-generativa",
    svgPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "IA Generativa Aplicada",
    description:
      "La IA generativa es una de las transformaciones más importantes para las organizaciones, pero la mayoría de las implementaciones fallan por falta de estrategia. Te ayudo a implementarla con rigor y resultados medibles.",
    benefits: [
      "Diagnóstico de casos de uso con mayor potencial en tu organización",
      "Diseño de estrategia de adopción y gestión del cambio",
      "Implementación de flujos de trabajo aumentados con IA",
      "Marcos de evaluación del ROI de iniciativas de IA",
      "Capacitación de equipos directivos y técnicos",
    ],
    forWho: "CEOs, directores de transformación digital y equipos de innovación",
  },
  {
    id: "financiacion",
    svgPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Estrategias de Financiación de Innovación",
    description:
      "Identificar y estructurar las fuentes de financiación adecuadas para proyectos de innovación es crítico pero complejo. Te ayudo a navegar el ecosistema de financiación latinoamericano con una estrategia clara.",
    benefits: [
      "Mapeo de fondos y convocatorias disponibles en LATAM",
      "Estructuración de propuestas para fondos públicos (Colciencias, BPIN, etc.)",
      "Preparación de pitch para inversionistas privados",
      "Diseño de esquemas de financiación mixta",
      "Acompañamiento en procesos de due diligence",
    ],
    forWho: "Startups, pymes innovadoras y grandes empresas con unidades de I+D",
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
    q: "¿Cuánto dura un proceso de consultoría?",
    a: "Depende del alcance. Un diagnóstico inicial con el PRIME-10 puede completarse en 2–3 semanas. Un proyecto de evaluación financiera o estrategia de IA típicamente toma entre 4 y 8 semanas.",
  },
  {
    q: "¿Trabaja con organizaciones fuera de Colombia?",
    a: "Sí. Trabajo con organizaciones en toda Latinoamérica, principalmente de manera remota. He asesorado a empresas en Colombia, México, Chile, Perú y Ecuador.",
  },
  {
    q: "¿Cómo se diferencia su enfoque del de otras consultoras?",
    a: "Mi enfoque combina investigación doctoral activa con práctica organizacional. No aplico frameworks genéricos: cada proyecto parte de evidencia empírica y se adapta al contexto específico de la organización.",
  },
  {
    q: "¿Ofrece sesiones individuales o solo proyectos completos?",
    a: "Ofrezco ambas modalidades. Puedo facilitar talleres de un día, mentorías a directivos o proyectos de consultoría de mayor duración.",
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
            Consultoría especializada · Colombia
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            Consultoría en Innovación Tecnológica para Empresas
          </h1>
          <p className="mt-5 text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Servicios de consultoría en innovación empresarial, innovación digital,
            innovación estratégica e innovación organizacional para empresas en Colombia
            — desde startups hasta corporaciones. Cada proyecto parte de evidencia
            empírica y metodologías adaptadas al contexto real de la organización.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-site space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
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
                <Link href="/contacto" className="btn-primary mt-6">
                  Solicitar este servicio
                </Link>
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
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <dt className="font-heading font-semibold text-foreground text-base mb-2">{faq.q}</dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
