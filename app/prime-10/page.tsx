import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import Prime10Phases from "@/components/sections/Prime10Phases";
import SchemaScript from "@/components/SchemaScript";
import FAQAccordion from "@/components/FAQAccordion";
import { faqSchema, breadcrumbSchema, serviceSchema, prime10MethodologySchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "PRIME-10™ — Metodología de Evaluación Financiera de Innovación",
  description:
    "PRIME-10™: metodología propia de evaluación financiera probabilística de proyectos de innovación bajo alta incertidumbre. Por Augusto Ruiz, PhD(c) Uniandes.",
  alternates: { canonical: "https://www.augustoruiz.org/prime-10" },
  openGraph: {
    title: "PRIME-10™ — Metodología de Evaluación Financiera de Innovación | Augusto Ruiz",
    description:
      "PRIME-10™ es una metodología propia de evaluación financiera probabilística de proyectos de innovación e inversión tecnológica bajo alta incertidumbre.",
    url: "https://www.augustoruiz.org/prime-10",
    type: "website",
    images: ["https://www.augustoruiz.org/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME-10™ — Metodología de Evaluación Financiera de Innovación | Augusto Ruiz",
    description:
      "PRIME-10™ es una metodología propia de evaluación financiera probabilística de proyectos de innovación e inversión tecnológica bajo alta incertidumbre.",
  },
};

const faqs = [
  {
    q: "¿Cuánto tiempo toma una evaluación PRIME-10?",
    a: "Una evaluación completa típicamente toma entre 3 y 5 días, incluyendo la recopilación de información, el análisis y la presentación de resultados.",
  },
  {
    q: "¿Qué entregables recibo al final del proceso?",
    a: "Recibes un informe ejecutivo con el modelo probabilístico del proyecto, las variables de mayor incertidumbre identificadas y el diseño del experimento crítico a validar antes de comprometer la inversión.",
  },
  {
    q: "¿El PRIME-10 aplica a proyectos en etapa temprana?",
    a: "Aplica mejor a proyectos con un nivel mínimo de madurez tecnológica validado. Para proyectos con TRL muy bajo, donde la incertidumbre es demasiado profunda para modelarse con distribuciones de probabilidad, se recomienda primero un proceso de validación tecnológica.",
  },
];

export default function Prime10Page() {
  const schemas = [
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "PRIME-10™", url: "https://www.augustoruiz.org/prime-10" },
    ]),
    prime10MethodologySchema,
    serviceSchema({
      slug: "prime-10",
      name: "PRIME-10 Assessment",
      description:
        "Evaluación financiera probabilística de proyectos de innovación en cinco fases, para organizaciones latinoamericanas.",
      serviceType: "Evaluación de Innovación",
    }),
    faqSchema(faqs),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Metodología registrada · DNDA 2025
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              PRIME-10™
            </h1>
            <p className="mt-2 text-white/40 text-xs">Última actualización: agosto de 2026</p>
            <p className="mt-2 text-accent font-heading font-medium text-lg">
              Evaluación financiera probabilística de proyectos de innovación
            </p>
            <p className="mt-5 text-white/80 text-base leading-relaxed">
              Una metodología propia para evaluar decisiones de inversión en innovación y
              tecnología bajo alta incertidumbre. Desarrollada a partir de investigación
              doctoral y validada en organizaciones latinoamericanas.
            </p>
            <a
              href={whatsappUrl("Hola Augusto, quiero solicitar una evaluación PRIME-10 para mi organización.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Solicitar evaluación por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading text-2xl sm:text-3xl mb-4">¿Qué es PRIME-10™?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PRIME-10™ es una metodología de evaluación financiera de proyectos de innovación e
                inversión tecnológica bajo alta incertidumbre. Fue desarrollada por el ingeniero
                Ober Augusto Ruiz Catanho en el marco de su investigación doctoral en la Universidad
                de los Andes, Colombia y está registrada en la Dirección Nacional de Derecho de Autor
                de Colombia (2025).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El nombre sintetiza las cinco fases del proceso — Problem framing, Readiness
                validation, Investment modeling, Market experimentation y Ex post learning — y el
                número 10 refiere al décimo cuadrante que la metodología agrega al Canvas de
                Osterwalder: la evaluación financiera probabilística del modelo de negocio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                PRIME-10™ no es un sistema de scoring ni un modelo de madurez. Es un proceso
                estructurado de cinco fases que reemplaza el VPN puntual por una distribución de
                probabilidad del valor del proyecto, identifica las variables de mayor incertidumbre
                y define qué debe validarse experimentalmente antes de comprometer la inversión.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/prime10-canvas.jpg"
                alt="Estructura del framework PRIME-10"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The problem it solves */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-4">El problema que resuelve</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Los métodos financieros tradicionales — VPN, TIR, flujo de caja descontado —
            producen un único número que asume un futuro predecible. En proyectos de innovación,
            esa suposición genera dos tipos de errores de selección documentados en la
            investigación doctoral:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="card p-6">
              <span className="text-xs font-heading font-semibold text-accent uppercase tracking-wider">
                Error tipo I
              </span>
              <p className="mt-2 text-sm text-foreground leading-relaxed">
                Aprobar un proyecto que parece viable según el modelo pero que destruye valor —
                porque las variables críticas se asumieron fijas con valores optimistas.
              </p>
            </div>
            <div className="card p-6">
              <span className="text-xs font-heading font-semibold text-accent uppercase tracking-wider">
                Error tipo II
              </span>
              <p className="mt-2 text-sm text-foreground leading-relaxed">
                Rechazar un proyecto que sí crea valor — porque el modelo no captura la
                flexibilidad real de la decisión ni la posibilidad de validar antes de
                comprometer toda la inversión.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            La investigación doctoral analiza una muestra de proyectos de innovación en empresas
            colombianas y encuentra que la incorporación de pilotos y MVPs reduce
            significativamente la tasa de estos errores respecto a la evaluación determinista
            tradicional. PRIME-10™ operacionaliza ese hallazgo: convierte la incertidumbre en un
            insumo del modelo, no en un factor de corrección subjetivo.
          </p>
        </div>
      </section>

      {/* Five phases */}
      <section id="fases" className="py-16 bg-white">
        <div className="container-site">
          <Prime10Phases />
        </div>
      </section>

      {/* For who */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-4">¿Para quién es PRIME-10™?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            PRIME-10™ está diseñado para organizaciones que enfrentan decisiones de inversión en
            proyectos de innovación o tecnología donde la incertidumbre es alta y el método
            tradicional produce un número que no refleja la realidad del proyecto. Es
            especialmente relevante para:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Direcciones de innovación y tecnología que deben sustentar decisiones de inversión ante una junta o comité",
              "CFOs y equipos financieros que evalúan proyectos de I+D+i con herramientas diseñadas para contextos predecibles",
              "Equipos de gestión de proyectos tecnológicos que necesitan un criterio claro de go/no-go antes de comprometer recursos",
              "Organizaciones que han aprobado o rechazado proyectos de innovación basándose en un VPN puntual y quieren una segunda opinión metodológicamente fundamentada",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="card p-6 border-l-4 border-accent">
            <p className="text-sm text-muted-foreground leading-relaxed">
              PRIME-10™ no es adecuado para proyectos con nivel de madurez tecnológica muy bajo
              (TRL ≤ 3), donde la incertidumbre es tan profunda que no puede modelarse con
              distribuciones de probabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-4">
            Investigación que sustenta PRIME-10™
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            PRIME-10™ no es una propuesta teórica. Es el resultado aplicado de una investigación
            doctoral en curso en la Universidad de los Andes, bajo la dirección del profesor
            Xavier Durán, centrada en los errores de selección que generan los modelos
            financieros tradicionales cuando se aplican a proyectos de innovación. Los hallazgos
            han sido presentados en dos conferencias académicas internacionales:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <a
                href="https://www.balas.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-semibold text-accent uppercase tracking-wider hover:underline"
              >
                BALAS 2026
              </a>
              <p className="mt-1 text-sm font-medium text-primary">
                Business Association of Latin American Studies
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ponencia: &ldquo;Deterministic financial appraisal and selection errors in
                corporate innovation portfolios&rdquo;. Premio Lourdes S. Casanova al mejor
                paper aplicado.
              </p>
            </div>
            <div className="card p-6">
              <a
                href="https://www.rdmanagement.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-semibold text-accent uppercase tracking-wider hover:underline"
              >
                R&amp;D Management Conference 2026
              </a>
              <p className="mt-1 text-sm font-medium text-primary">Manchester</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ponencia: &ldquo;How financial models shape innovation investment decisions:
                empirical evidence from firm innovation projects portfolio in an emerging
                market&rdquo;.
              </p>
            </div>
          </div>
          <div className="relative mt-8 w-full aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/prime10-investigacion.jpg"
              alt="Investigación académica presentada en conferencias internacionales"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Preguntas frecuentes</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-site max-w-2xl text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            ¿Quiere evaluar su proyecto con PRIME-10™?
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Si está ante una decisión de inversión en innovación o tecnología y el modelo
            tradicional no le da claridad suficiente, podemos revisar si PRIME-10™ aplica a su
            caso. El primer paso es una conversación para entender la decisión, el proyecto y la
            información disponible — sin compromiso formal.
          </p>
          <a
            href={whatsappUrl("Hola Augusto, quiero agendar una conversación sobre PRIME-10 para evaluar mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Agendar una conversación
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
