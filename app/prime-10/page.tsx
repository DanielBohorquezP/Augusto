import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "PRIME-10 Assessment | Framework de Evaluación de Innovación Tecnológica",
  description:
    "PRIME-10 es un framework basado en evidencia para evaluar la madurez y el potencial de proyectos de innovación tecnológica en organizaciones latinoamericanas. Desarrollado por Augusto Ruiz, PhD(c) Universidad de los Andes.",
  alternates: { canonical: "https://www.augustoruiz.org/prime-10" },
};

const dimensions = [
  { num: "01", name: "Madurez tecnológica", desc: "Nivel de desarrollo y validación de la tecnología base del proyecto." },
  { num: "02", name: "Potencial de mercado", desc: "Tamaño, accesibilidad y dinamismo del mercado objetivo." },
  { num: "03", name: "Capacidades organizacionales", desc: "Recursos humanos, financieros y tecnológicos disponibles." },
  { num: "04", name: "Modelo de financiación", desc: "Viabilidad y diversificación de las fuentes de financiación." },
  { num: "05", name: "Gestión de la incertidumbre", desc: "Protocolos y herramientas para identificar y mitigar riesgos." },
  { num: "06", name: "Ecosistema de innovación", desc: "Alianzas, redes y colaboraciones estratégicas." },
  { num: "07", name: "Marco regulatorio", desc: "Cumplimiento y anticipación de barreras regulatorias." },
  { num: "08", name: "Impacto y sostenibilidad", desc: "Potencial de impacto económico, social y ambiental." },
  { num: "09", name: "Escalabilidad", desc: "Capacidad de la iniciativa para crecer y replicarse." },
  { num: "10", name: "Apropiación del conocimiento", desc: "Mecanismos de protección intelectual y transferencia tecnológica." },
];

const faqs = [
  {
    q: "¿Cuánto tiempo toma una evaluación PRIME-10?",
    a: "Una evaluación completa típicamente toma entre 2 y 3 semanas, incluyendo la recopilación de información, el análisis y la presentación de resultados.",
  },
  {
    q: "¿Qué entregables recibo al final del proceso?",
    a: "Recibes un informe ejecutivo con el puntaje en las 10 dimensiones, análisis de brechas, comparativo sectorial y una hoja de ruta priorizada de mejoras.",
  },
  {
    q: "¿El PRIME-10 aplica a proyectos en etapa temprana?",
    a: "Sí, de hecho es especialmente valioso en etapas tempranas, cuando las decisiones tienen mayor impacto. El framework identifica las brechas críticas antes de comprometer recursos.",
  },
];

export default function Prime10Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Framework propietario
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              PRIME-10 Assessment
            </h1>
            <p className="mt-2 text-accent font-heading font-medium text-lg">
              Probabilistic Risk and Innovation Management Evaluation
            </p>
            <p className="mt-5 text-white/80 text-base leading-relaxed">
              Una metodología basada en evidencia para evaluar la madurez y el potencial de proyectos
              de innovación tecnológica. Desarrollada a partir de investigación doctoral y validada
              en organizaciones latinoamericanas.
            </p>
            <Link href="/contacto" className="btn-primary mt-8">
              Solicitar evaluación PRIME-10
            </Link>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading text-2xl sm:text-3xl mb-4">¿Qué es el PRIME-10?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PRIME-10 es un framework de evaluación que mide 10 dimensiones críticas de los proyectos
                de innovación tecnológica, combinando rigor cuantitativo con perspectiva estratégica.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A diferencia de los métodos de evaluación financiera tradicionales, PRIME-10 incorpora
                explícitamente la incertidumbre tecnológica y el riesgo de mercado como variables
                centrales del análisis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El resultado es un diagnóstico integral que no solo dice &ldquo;el proyecto vale X&rdquo;,
                sino que identifica exactamente qué factores limitarán su éxito y qué intervenciones
                generarán mayor impacto.
              </p>
            </div>
            <div className="card p-6 space-y-3">
              {[
                { label: "Basado en evidencia empírica", icon: "research" },
                { label: "10 dimensiones de evaluación", icon: "grid" },
                { label: "Adaptado al contexto LATAM", icon: "globe" },
                { label: "Informe ejecutivo accionable", icon: "doc" },
                { label: "Benchmarking sectorial incluido", icon: "chart" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 Dimensions */}
      <section className="py-16 bg-muted">
        <div className="container-site">
          <h2 className="section-heading text-2xl sm:text-3xl text-center mb-10">Las 10 dimensiones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dimensions.map((dim) => (
              <div key={dim.num} className="card p-5">
                <span className="font-heading font-bold text-2xl text-accent/30">{dim.num}</span>
                <h3 className="font-heading font-semibold text-sm text-foreground mt-1 mb-2">{dim.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl text-center">
          <h2 className="section-heading text-2xl sm:text-3xl mb-4">¿Para quién es el PRIME-10?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            El framework es aplicable a cualquier organización que gestione proyectos de innovación
            tecnológica, independientemente de su tamaño o industria.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { type: "Startups", desc: "Valida la solidez de tu propuesta antes de buscar inversión" },
              { type: "Corporaciones", desc: "Evalúa y prioriza tu portafolio de proyectos de innovación" },
              { type: "Entidades públicas", desc: "Selecciona con rigor los proyectos que merecen apoyo" },
            ].map((audience) => (
              <div key={audience.type} className="card p-6 text-left">
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{audience.type}</h3>
                <p className="text-sm text-muted-foreground">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Preguntas frecuentes</h2>
          <dl className="space-y-5">
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
