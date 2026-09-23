import Link from "next/link";

// Segmentos por necesidad, no por sector: cada uno sale de lo que el sitio ya
// afirma de los servicios (llms.txt, /servicios) y enlaza a su pagina, para no
// inventar sectores o clientes que Augusto no haya confirmado.
const segments = [
  {
    title: "Empresas que invierten en I+D+i, energía o medio ambiente",
    description:
      "Para convertir esa inversión en un beneficio tributario efectivo ante Minciencias, la UPME o la ANLA, empezando por una evaluación de elegibilidad.",
    href: "/servicios/beneficios-tributarios-innovacion",
    cta: "Beneficios tributarios",
  },
  {
    title: "Empresas que deben decidir una inversión tecnológica",
    description:
      "Adoptar, licenciar o desarrollar una tecnología sin serie histórica: la decisión se evalúa con distribuciones de probabilidad, no con un VPN puntual.",
    href: "/servicios/evaluacion-financiera-innovacion",
    cta: "Transferencia tecnológica",
  },
  {
    title: "Startups en etapa temprana y de crecimiento",
    description:
      "Evaluación financiera probabilística del modelo de negocio y estructuración de propuestas para convocatorias de Minciencias e iNNpulsa.",
    href: "/prime-10",
    cta: "PRIME-10 Assessment",
  },
  {
    title: "Equipos directivos y técnicos que adoptan IA generativa",
    description:
      "Formación diseñada por área y por reto de negocio, con las herramientas que la empresa ya tiene y un artefacto funcional al final de cada sesión.",
    href: "/servicios/capacitacion-ia-generativa",
    cta: "Capacitación en IA",
  },
];

export default function ParaQuienSection() {
  return (
    <section className="py-20 bg-white" id="para-quien">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Para quién
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl">
            ¿Para quién trabajo?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Organizaciones en Colombia y Latinoamérica que tienen que tomar una decisión de
            innovación con alta incertidumbre, o convertir una inversión en un beneficio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {segments.map((s) => (
            <div key={s.title} className="card p-6 lg:p-8 flex flex-col">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {s.description}
              </p>
              <Link
                href={s.href}
                className="mt-4 text-sm font-heading font-semibold text-primary hover:text-accent transition-colors"
              >
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
