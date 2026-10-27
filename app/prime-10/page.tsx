import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Prime10Phases from "@/components/sections/Prime10Phases";
import SchemaScript from "@/components/SchemaScript";
import FAQAccordion from "@/components/FAQAccordion";
import { faqSchema, breadcrumbSchema, serviceSchema, prime10MethodologySchema, globalSchemaNodes } from "@/lib/schema";
import { whatsappUrl } from "@/lib/site";
import { WA_PATH } from "@/lib/whatsapp-icon";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "PRIME-10™ — Evaluación Financiera de Innovación",
  description:
    "PRIME-10™: metodología propia de evaluación financiera probabilística de proyectos de innovación bajo alta incertidumbre. Por Augusto Ruiz, PhD(c) Uniandes.",
  alternates: { canonical: "https://www.augustoruiz.org/prime-10" },
  openGraph: {
    title: "PRIME-10™ — Evaluación Financiera de Innovación | Augusto Ruiz",
    description:
      "PRIME-10™ es una metodología propia de evaluación financiera probabilística de proyectos de innovación e inversión tecnológica bajo alta incertidumbre.",
    url: "https://www.augustoruiz.org/prime-10",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME-10™ — Evaluación Financiera de Innovación | Augusto Ruiz",
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

const heroFacts = [
  { v: "DNDA 2025", l: "Metodología registrada" },
  { v: "Uniandes", l: "Investigación doctoral" },
  { v: "3–5 días", l: "Evaluación completa" },
  { v: "BALAS 2026", l: "Premio al mejor paper aplicado" },
];

const paraQuien = [
  "Direcciones de innovación y tecnología que deben sustentar decisiones de inversión ante una junta o comité",
  "CFOs y equipos financieros que evalúan proyectos de I+D+i con herramientas diseñadas para contextos predecibles",
  "Equipos de gestión de proyectos tecnológicos que necesitan un criterio claro de go/no-go antes de comprometer recursos",
  "Organizaciones que han aprobado o rechazado proyectos de innovación basándose en un VPN puntual y quieren una segunda opinión metodológicamente fundamentada",
];

const eyebrow = "font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent";
const h2Class =
  "font-heading font-semibold text-[30px] sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-.025em] text-primary";
const wrap = "max-w-[1152px] mx-auto px-5 sm:px-8 lg:px-0";
const body = "text-base leading-[1.75] text-muted-foreground [text-wrap:pretty]";

export default function Prime10Page() {
  const schemas = [
    ...globalSchemaNodes,
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
      <section className="relative overflow-hidden bg-primary pt-28 lg:pt-36">
        <div
          className="absolute inset-0 opacity-[.08] [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-2/5 h-0.5 bg-accent" aria-hidden="true" />
        <div className={`relative ${wrap}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-[72px] items-center pb-14 lg:pb-[88px]">
            <div className="flex flex-col gap-6 items-start">
              <span className="bg-accent text-white font-heading font-semibold text-xs tracking-[.06em] uppercase px-3 py-1.5 rounded-full">
                Metodología registrada · DNDA 2025
              </span>
              <h1 className="font-heading font-bold text-[clamp(52px,7vw,88px)] leading-none tracking-[-.04em] text-white whitespace-nowrap">
                PRIME-10™
              </h1>
              <LastUpdated path="/prime-10" />
              <p className="font-heading font-medium text-xl lg:text-[22px] leading-[1.35] text-[#FCA5A5] text-balance">
                Evaluación financiera probabilística de proyectos de innovación
              </p>
              <p className="text-base lg:text-[17px] leading-[1.7] text-white/80 max-w-[540px] [text-wrap:pretty]">
                Una metodología propia para evaluar decisiones de inversión en innovación y
                tecnología bajo alta incertidumbre. Desarrollada a partir de investigación
                doctoral y validada en organizaciones latinoamericanas.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={whatsappUrl("Hola Augusto, quiero solicitar una evaluación PRIME-10 para mi organización.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-[15px] px-7 py-4 rounded-[10px] transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={WA_PATH} />
                  </svg>
                  Solicitar evaluación
                </a>
                <a
                  href="#fases"
                  className="inline-flex items-center gap-2 border-2 border-white/90 text-white hover:bg-white hover:text-primary font-heading font-semibold text-[15px] px-[26px] py-3.5 rounded-[10px] transition-colors"
                >
                  Ver las cinco fases
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/images/guia-prime-10.webp"
                alt="Portada de la guía PRIME-10: 15 habilidades para llevar Claude, Gemini o Copilot al nivel de una junta directiva"
                width={1024}
                height={1536}
                sizes="(min-width: 1024px) 340px, 60vw"
                priority
                className="w-[60%] max-w-[340px] h-auto drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]"
              />
              <a
                href="/descargas/guia-15-habilidades-prime-10.pdf"
                download
                className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F5F7FB] text-primary font-heading font-semibold text-[15px] px-7 py-4 rounded-[10px] transition-colors"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                Descargar la guía gratis (PDF)
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/15">
            {heroFacts.map((f) => (
              <div key={f.l} className="pt-7 pb-8 pr-6 flex flex-col gap-1">
                <dd className="font-heading font-semibold text-[17px] text-white m-0">{f.v}</dd>
                <dt className="text-[13px] text-white/65">{f.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-20 items-center`}>
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/images/prime10-pizarra.webp"
              alt="Augusto Ruiz explicando el canvas de 10 cuadrantes de PRIME-10 en una pizarra"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className={eyebrow}>La metodología</span>
            <h2 className={h2Class}>¿Qué es PRIME-10™?</h2>
            <p className={body}>
              PRIME-10™ es una metodología de evaluación financiera de proyectos de innovación e
              inversión tecnológica bajo alta incertidumbre. Fue desarrollada por el ingeniero
              Ober Augusto Ruiz Catanho en el marco de su investigación doctoral en la Universidad
              de los Andes, Colombia y está registrada en la Dirección Nacional de Derecho de Autor
              de Colombia (2025).
            </p>
            <p className={body}>
              El nombre sintetiza las cinco fases del proceso — Problem framing, Readiness
              validation, Investment modeling, Market experimentation y Ex post learning — y el
              número 10 refiere al décimo cuadrante que la metodología agrega al Canvas de
              Osterwalder: la evaluación financiera probabilística del modelo de negocio.
            </p>
            <blockquote className="mt-2 px-6 py-6 sm:px-8 sm:py-7 bg-[#F5F7FB] rounded-2xl font-heading font-medium text-[19px] leading-[1.5] text-primary [text-wrap:pretty]">
              No es un sistema de scoring ni un modelo de madurez. Reemplaza el VPN puntual por una
              distribución de probabilidad del valor del proyecto.
            </blockquote>
            <p className={body}>
              Es un proceso estructurado de cinco fases que identifica las variables de mayor
              incertidumbre y define qué debe validarse experimentalmente antes de comprometer la
              inversión.
            </p>
          </div>
        </div>
      </section>

      {/* El problema que resuelve */}
      <section className="py-20 lg:py-[120px] bg-muted">
        <div className={wrap}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-12 lg:mb-14">
            <div className="flex flex-col gap-4">
              <span className={eyebrow}>Por qué existe</span>
              <h2 className={h2Class}>El problema que resuelve</h2>
            </div>
            <p className={body}>
              Los métodos financieros tradicionales — VPN, TIR, flujo de caja descontado —
              producen un único número que asume un futuro predecible. En proyectos de innovación,
              esa suposición genera dos tipos de errores de selección documentados en la
              investigación doctoral:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                n: "I",
                color: "text-accent",
                titulo: "Error tipo I · Aprobar lo que destruye valor",
                texto:
                  "Aprobar un proyecto que parece viable según el modelo pero que destruye valor — porque las variables críticas se asumieron fijas con valores optimistas.",
              },
              {
                n: "II",
                color: "text-primary",
                titulo: "Error tipo II · Rechazar lo que crea valor",
                texto:
                  "Rechazar un proyecto que sí crea valor — porque el modelo no captura la flexibilidad real de la decisión ni la posibilidad de validar antes de comprometer toda la inversión.",
              },
            ].map((e) => (
              <div
                key={e.n}
                className="bg-white rounded-[20px] p-7 sm:p-10 grid grid-cols-[56px_minmax(0,1fr)] sm:grid-cols-[72px_minmax(0,1fr)] gap-5 sm:gap-6"
              >
                <span className={`font-heading font-bold text-5xl sm:text-[64px] leading-[.9] ${e.color}`}>{e.n}</span>
                <div className="flex flex-col gap-2.5">
                  <span className={`font-heading font-semibold text-[13px] tracking-[.08em] uppercase ${e.color}`}>
                    {e.titulo}
                  </span>
                  <p className="text-base leading-[1.7] text-foreground [text-wrap:pretty]">{e.texto}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-primary rounded-[20px] px-7 py-8 sm:px-12 sm:py-10 grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-3 md:gap-10 items-center">
            <span className="font-heading font-semibold text-sm tracking-[.08em] uppercase text-[#FCA5A5]">
              El hallazgo
            </span>
            <p className="text-[17px] leading-[1.7] text-white [text-wrap:pretty]">
              La incorporación de pilotos y MVPs reduce significativamente la tasa de estos errores
              respecto a la evaluación determinista tradicional. PRIME-10™ operacionaliza ese
              hallazgo: convierte la incertidumbre en un insumo del modelo, no en un factor de
              corrección subjetivo.
            </p>
          </div>
        </div>
      </section>

      {/* Cinco fases */}
      <section id="fases" className="py-20 lg:py-[120px] bg-white scroll-mt-20">
        <div className={wrap}>
          <Prime10Phases />
        </div>
      </section>

      {/* Para quién */}
      <section className="py-20 lg:py-[120px] bg-muted">
        <div className={wrap}>
          <div className="flex flex-col gap-4 max-w-[760px] mb-12">
            <span className={eyebrow}>Para quién</span>
            <h2 className={h2Class}>¿Para quién es PRIME-10™?</h2>
            <p className={body}>
              Para organizaciones que enfrentan decisiones de inversión en proyectos de innovación
              o tecnología donde la incertidumbre es alta y el método tradicional produce un número
              que no refleja la realidad del proyecto.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {paraQuien.map((text, i) => (
              <li key={text} className="bg-white rounded-[20px] p-7 sm:p-8 grid grid-cols-[40px_minmax(0,1fr)] gap-4 items-start">
                <span className="font-heading font-semibold text-sm text-accent pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-[1.65] text-foreground [text-wrap:pretty]">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 border border-dashed border-[#94A3B8] rounded-[20px] px-7 py-7 sm:px-8 grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-2 md:gap-8 items-center">
            <span className="font-heading font-semibold text-sm text-primary">Cuándo no aplica</span>
            <p className="text-[15px] leading-[1.65] text-muted-foreground">
              PRIME-10™ no es adecuado para proyectos con nivel de madurez tecnológica muy bajo
              (TRL ≤ 3), donde la incertidumbre es tan profunda que no puede modelarse con
              distribuciones de probabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Investigación */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className={wrap}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-12">
            <div className="flex flex-col gap-4">
              <span className={eyebrow}>Respaldo académico</span>
              <h2 className={h2Class}>Investigación que sustenta PRIME-10™</h2>
            </div>
            <p className={body}>
              Resultado aplicado de una investigación doctoral en curso en la Universidad de los
              Andes, bajo la dirección del profesor Xavier Durán, centrada en los errores de
              selección que generan los modelos financieros tradicionales en proyectos de
              innovación.
            </p>
          </div>
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/prime10-ponencia-balas.webp"
              alt="Augusto Ruiz presentando la investigación sobre PRIME-10 en la conferencia BALAS 2026"
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:-mt-[72px] md:mx-10">
            <div className="bg-white rounded-[20px] p-8 shadow-[0_24px_48px_-24px_rgba(14,28,61,.35)] flex flex-col gap-2.5">
              <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-2">
                <a
                  href="https://www.balas.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-bold text-xl text-primary whitespace-nowrap hover:underline"
                >
                  BALAS 2026
                </a>
                <span className="text-xs font-semibold text-white bg-accent px-2.5 py-1 rounded-full">
                  Premio al mejor paper aplicado
                </span>
              </div>
              <span className="text-[13px] font-semibold text-muted-foreground">
                Business Association of Latin American Studies
              </span>
              <p className="text-[15px] leading-[1.6] text-foreground">
                &ldquo;Deterministic financial appraisal and selection errors in corporate
                innovation portfolios&rdquo;. Premio Lourdes S. Casanova.
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-8 shadow-[0_24px_48px_-24px_rgba(14,28,61,.35)] flex flex-col gap-2.5">
              <a
                href="https://www.rdmanagement.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-xl text-primary hover:underline"
              >
                R&amp;D Management Conference 2026
              </a>
              <span className="text-[13px] font-semibold text-muted-foreground">Manchester</span>
              <p className="text-[15px] leading-[1.6] text-foreground">
                &ldquo;How financial models shape innovation investment decisions: empirical
                evidence from firm innovation projects portfolio in an emerging market&rdquo;.
              </p>
            </div>
          </div>
          <p className="mt-8 text-[15px] text-muted-foreground text-center">
            Para profundizar en los fundamentos, consulta las{" "}
            <Link href="/recursos" className="font-semibold text-primary border-b border-accent">
              lecturas, cursos y videos que recomiendo
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-[120px] bg-muted">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 lg:gap-20 items-start`}>
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>FAQ</span>
            <h2 className={h2Class}>Preguntas frecuentes</h2>
          </div>
          <FAQAccordion faqs={faqs} variant="lines" initialOpen={0} />
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" aria-hidden="true" />
        <div className={`relative ${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center`}>
          <div className="flex flex-col gap-4">
            <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-.025em] text-white text-balance">
              ¿Quiere evaluar su proyecto con PRIME-10™?
            </h2>
            <p className="text-base leading-[1.75] text-white/80 [text-wrap:pretty]">
              Si está ante una decisión de inversión en innovación o tecnología y el modelo
              tradicional no le da claridad suficiente, podemos revisar si PRIME-10™ aplica a su
              caso. El primer paso es una conversación para entender la decisión, el proyecto y la
              información disponible, sin compromiso formal.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <a
              href={whatsappUrl("Hola Augusto, quiero agendar una conversación sobre PRIME-10 para evaluar mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-base px-8 py-[18px] rounded-[10px] transition-colors"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
              Agendar una conversación
            </a>
            <Link
              href="/contacto"
              className="font-heading font-semibold text-[15px] text-white hover:text-[#FCA5A5] py-2 transition-colors"
            >
              O escribir por el formulario →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
