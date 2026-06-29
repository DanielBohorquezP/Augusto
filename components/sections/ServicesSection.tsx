import Link from "next/link";

const services = [
  {
    id: "evaluacion-financiera",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Evaluación Financiera de Innovación",
    description:
      "Modelos probabilísticos para evaluar proyectos de innovación tecnológica, superando las limitaciones de los enfoques deterministas tradicionales (VPN, TIR).",
    highlights: ["Modelos bajo incertidumbre", "Análisis probabilístico", "Decisiones de inversión"],
  },
  {
    id: "ia-generativa",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "IA Generativa Aplicada",
    description:
      "Implementación estratégica de inteligencia artificial generativa en procesos organizacionales de toma de decisiones y gestión del conocimiento.",
    highlights: ["Estrategia de adopción", "Casos de uso concretos", "ROI medible"],
  },
  {
    id: "financiacion",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Estrategias de Financiación",
    description:
      "Identificación y estructuración de mecanismos de financiación para iniciativas de innovación: fondos públicos, inversión privada, instrumentos híbridos.",
    highlights: ["Fuentes de financiación", "Estructuración de proyectos", "Acceso a capital"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted" id="servicios">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Consultoría especializada
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl">
            Servicios para organizaciones innovadoras
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Combino investigación de frontera con práctica organizacional para ofrecer
            soluciones concretas y medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-6 lg:p-8 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-foreground">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/servicios" className="btn-primary">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
