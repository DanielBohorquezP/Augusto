import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Medios y Prensa — Entrevistas y Ponencias",
  description:
    "Apariciones de Augusto Ruiz en medios, podcasts, congresos y entrevistas sobre gestión de innovación tecnológica, evaluación financiera e inteligencia artificial.",
  alternates: { canonical: "https://www.augustoruiz.org/medios" },
};

const mediaItems = [
  {
    type: "Artículo",
    outlet: "RetroCiencia",
    title: "¿Por qué las empresas subevalúan sus proyectos de innovación?",
    date: "2024-09-15",
    url: "#",
  },
  {
    type: "Podcast",
    outlet: "Innovación en LATAM",
    title: "Modelos probabilísticos para la evaluación de proyectos tecnológicos",
    date: "2024-07-22",
    url: "#",
  },
  {
    type: "Ponencia",
    outlet: "Congreso de Innovación Empresarial",
    title: "IA Generativa en la toma de decisiones organizacionales",
    date: "2024-05-10",
    url: "#",
  },
];

export default function MediosPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Inicio", url: "https://www.augustoruiz.org" },
          { name: "Medios", url: "https://www.augustoruiz.org/medios" },
        ])}
      />
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Medios y prensa
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Augusto Ruiz en los medios
            </h1>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Entrevistas, artículos, podcasts y ponencias sobre gestión de innovación,
              evaluación financiera e inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <div className="space-y-6">
            {mediaItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex flex-col sm:flex-row gap-4 hover:border-primary transition-colors block"
              >
                <div className="shrink-0">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">{item.outlet} · {new Date(item.date + "T12:00:00Z").toLocaleDateString("es-CO", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" })}</p>
                  <h2 className="font-heading font-semibold text-foreground text-base hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                </div>
                <svg className="w-5 h-5 text-muted-foreground shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl text-center">
          <h2 className="section-heading text-2xl mb-4">Contacto para medios</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            ¿Tienes un podcast, evento o publicación sobre innovación, tecnología o finanzas?
            Estaré encantado de participar.
          </p>
          <a href="/contacto" className="btn-primary">
            Enviar solicitud de entrevista
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
