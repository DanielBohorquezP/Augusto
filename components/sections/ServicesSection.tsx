import Image from "next/image";
import Link from "next/link";
import { renderInlineText } from "@/lib/inline-text";
import { whatsappUrl } from "@/lib/site";

type Service = {
  id: string;
  num: string;
  tagline: string;
  title: string;
  href: string;
  cta: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  statAccent?: boolean;
  secondaryCta: { label: string; href: string };
};

const services: Service[] = [
  {
    id: "evaluacion-financiera",
    num: "01",
    tagline: "Evaluación financiera bajo incertidumbre",
    title: "PRIME-10 Assessment",
    href: "/prime-10",
    cta: "Ver PRIME-10 Assessment",
    description:
      "Evaluación financiera probabilística de proyectos de innovación e inversión tecnológica. Más allá del VPN tradicional, identifico las variables de mayor incertidumbre, cuantifico el riesgo con simulación Monte Carlo y defino qué debe validarse experimentalmente antes de comprometer la inversión.",
    highlights: [
      "Modelos probabilísticos bajo incertidumbre",
      "Simulación y análisis de riesgo",
      "Diseño del experimento crítico para reducir incertidumbre",
    ],
    image: "/images/prime10-canvas.jpg",
    imageAlt: "Canvas de modelo de negocio con el décimo cuadrante de PRIME-10 Assessment",
    statValue: "2–3 sem",
    statLabel: "para resultados accionables",
    secondaryCta: { label: "Preguntar por WhatsApp", href: whatsappUrl("Hola Augusto, vengo de tu sitio web y quiero información sobre este servicio.") },
  },
  {
    id: "ia-generativa",
    num: "02",
    tagline: "Adopción por área y reto de negocio",
    title: "Capacitación en IA generativa",
    href: "/servicios/capacitacion-ia-generativa",
    cta: "Conocer la capacitación",
    description:
      "Programas de adopción de IA generativa para equipos corporativos, diseñados por área y reto de negocio. Cada participante parte de su propio problema real y termina la sesión con un artefacto funcional que puede usar al día siguiente.",
    highlights: [
      "Personalizado por área y rol",
      "Basado en retos de negocio reales",
      "Cada participante construye su propio artefacto",
    ],
    image: "/images/servicios-ia-generativa.jpg",
    imageAlt: "Taller de capacitación en IA generativa para equipos corporativos",
    statValue: "4–8 h",
    statLabel: "por taller, con artefacto al final",
    secondaryCta: { label: "Preguntar por WhatsApp", href: whatsappUrl("Hola Augusto, vengo de tu sitio web y quiero información sobre este servicio.") },
  },
  {
    id: "financiacion",
    num: "03",
    tagline: "Minciencias, ANLA, UPME y ART",
    title: "Beneficios tributarios y OxI",
    href: "/servicios/beneficios-tributarios-innovacion",
    cta: "Ver beneficios tributarios",
    description:
      "Acompañamiento en la estructuración y postulación de proyectos para acceder a [beneficios tributarios por inversiones en I+D+i](/blog/que-es-un-beneficio-tributario-colombia) ante Minciencias, inversiones ambientales ante la ANLA y en el mecanismo de Obras por Impuestos (OxI), incluida su modalidad para la reconstrucción (OxI-R).",
    highlights: [
      "Evaluación de elegibilidad antes de cualquier compromiso",
      "Estructuración y formulación del proyecto",
      "Gestión ante Minciencias, ANLA, UPME y ART",
    ],
    image: "/images/servicios-beneficios-tributarios.jpg",
    imageAlt: "Documentos de un proyecto de beneficios tributarios I+D+i",
    statValue: "93%",
    statLabel: "tasa de aprobación Minciencias",
    statAccent: true,
    secondaryCta: { label: "Ver todos los servicios", href: "/servicios" },
  },
];

const check = (
  <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-[120px] bg-white" id="servicios">
      <div className="max-w-[1152px] mx-auto px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center text-center gap-5 mb-14 lg:mb-24">
          <span className="font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent">
            Consultoría especializada
          </span>
          <h2 className="font-heading font-semibold text-[32px] sm:text-5xl lg:text-[52px] leading-[1.08] tracking-[-.03em] text-primary max-w-[760px] text-balance">
            Servicios para organizaciones innovadoras
          </h2>
          <p className="text-base lg:text-lg leading-[1.7] text-muted-foreground max-w-[620px]">
            Combino investigación de frontera con práctica organizacional para ofrecer
            soluciones concretas y medibles.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {services.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-[13px] font-semibold text-primary hover:border-primary transition-colors"
              >
                <span className="text-accent font-heading">{s.num}</span>
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:gap-28">
          {services.map((s, i) => {
            const imageRight = i % 2 === 1;
            return (
              <div
                key={s.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[88px] items-center"
              >
                <div className={`relative ${imageRight ? "lg:order-2" : ""}`}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={800}
                    height={640}
                    sizes="(min-width: 1024px) 532px, 100vw"
                    className="w-full aspect-[5/4] object-cover rounded-3xl"
                  />
                  <div
                    className={`absolute bottom-6 lg:bottom-8 rounded-2xl px-5 py-4 lg:px-6 lg:py-5 flex flex-col gap-0.5 text-white ${
                      imageRight ? "left-4 lg:-left-7" : "right-4 lg:-right-7"
                    } ${
                      s.statAccent
                        ? "bg-accent shadow-[0_20px_40px_-16px_rgba(206,34,34,.5)]"
                        : "bg-primary shadow-[0_20px_40px_-16px_rgba(14,28,61,.5)]"
                    }`}
                  >
                    <span className="font-heading font-semibold text-2xl lg:text-[30px] leading-none">
                      {s.statValue}
                    </span>
                    <span className={`text-[13px] ${s.statAccent ? "text-white" : "text-white/75"}`}>
                      {s.statLabel}
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col gap-5 ${imageRight ? "lg:order-1" : ""}`}>
                  <span className="font-heading font-semibold text-[13px] text-accent tracking-[.04em]">
                    {s.num} — {s.tagline}
                  </span>
                  <h3 className="font-heading font-semibold text-[28px] sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[-.025em] text-primary">
                    {s.title}
                  </h3>
                  <p className="text-base lg:text-[17px] leading-[1.7] text-muted-foreground [text-wrap:pretty]">
                    {renderInlineText(s.description)}
                  </p>
                  <ul className="flex flex-col gap-3 mt-1">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex gap-3 items-start text-[15px] text-foreground">
                        {check}
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mt-3">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-lg whitespace-nowrap transition-colors"
                    >
                      {s.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href={s.secondaryCta.href}
                      className="font-heading font-semibold text-sm text-primary hover:text-accent transition-colors"
                    >
                      {s.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
