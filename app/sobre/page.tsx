import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Consultor en Innovación Tecnológica Colombia",
  description:
    "Augusto Ruiz: consultor en innovación tecnológica en Colombia. PhD(c) Uniandes, docente EAFIT. Más de 50 organizaciones asesoradas en Colombia, México, Chile, Perú y Ecuador.",
  alternates: { canonical: "https://www.augustoruiz.org/sobre" },
  openGraph: {
    title: "Augusto Ruiz — Consultor en Innovación Tecnológica | Colombia",
    description: "PhD(c) Uniandes · Docente EAFIT. Consultor en gestión de innovación tecnológica con base en Colombia. Más de 50 organizaciones asesoradas en LATAM.",
    url: "https://www.augustoruiz.org/sobre",
    type: "profile",
  },
};

const timeline = [
  {
    year: "2022 – Presente",
    title: "Candidato Doctoral",
    org: "Universidad de los Andes",
    desc: "Investigación sobre modelos de evaluación financiera de proyectos de innovación tecnológica. Énfasis en enfoques probabilísticos vs. deterministas.",
  },
  {
    year: "2020 – Presente",
    title: "Docente — Finanzas para la Innovación",
    org: "EAFIT University",
    desc: "Profesor del curso de posgrado en el programa de Maestría en Finanzas. Integra modelos de incertidumbre y evaluación probabilística.",
  },
  {
    year: "2018 – Presente",
    title: "Consultor Independiente",
    org: "Consultoría en innovación",
    desc: "Asesoría a organizaciones latinoamericanas en evaluación financiera de proyectos de innovación, adopción de IA y estrategias de financiación.",
  },
  {
    year: "2015 – 2018",
    title: "Roles anteriores",
    org: "Sector empresarial",
    desc: "Experiencia en gestión de proyectos y finanzas corporativas que fundamentó el enfoque práctico de su consultoría.",
  },
];

export default function SobrePage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Inicio", url: "https://www.augustoruiz.org" },
          { name: "Sobre mí", url: "https://www.augustoruiz.org/sobre" },
        ])}
      />
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
                Sobre mí
              </span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Augusto Ruiz
              </h1>
              <p className="mt-3 text-white/80 text-lg font-medium">
                PhD(c) · Investigador · Consultor · Formador
              </p>
              <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-lg">
                Especializado en gestión de innovación tecnológica con un enfoque basado en evidencia.
                Mi trabajo cierra la brecha entre el rigor de la investigación académica y
                las necesidades concretas de las organizaciones.
              </p>
              <blockquote className="mt-6 border-l-2 border-accent pl-4 text-white/80 italic text-sm">
                &ldquo;Enseño lo que investigo y practico lo que enseño.&rdquo;
              </blockquote>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative overflow-hidden rounded-2xl lg:-translate-x-8">
                <img
                  src="/profile-photo.png"
                  alt="Augusto Ruiz - Foto de perfil profesional"
                  className="w-64 h-80 sm:w-72 sm:h-96 lg:w-[24rem] lg:h-[30rem] object-cover object-top block"
                />
                {/* Floating fade effect */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary via-primary/50 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Mi historia</h2>
          <div className="prose prose-slate max-w-none space-y-4 text-foreground text-base leading-relaxed">
            <p>
              Soy consultor especializado en gestión de innovación tecnológica con base en Colombia,
              trabajando con organizaciones en Medellín, Bogotá y toda Latinoamérica. En más de
              10 años de práctica he asesorado a más de 50 organizaciones en Colombia, México,
              Chile, Perú y Ecuador —desde startups en etapa temprana hasta corporaciones del
              sector financiero y energético.
            </p>
            <p>
              Mi trayectoria nació de una convicción profunda: las organizaciones latinoamericanas
              merecen herramientas de toma de decisiones tan rigurosas como las que utilizan
              las grandes corporaciones globales, adaptadas a nuestra realidad y contexto.
            </p>
            <p>
              Llevo más de una década investigando cómo las organizaciones evalúan —y a menudo
              subevalúan— sus proyectos de innovación tecnológica. El hallazgo central de mi
              investigación doctoral es que los métodos financieros tradicionales (VPN, TIR, flujo
              de caja descontado) generan sesgos sistemáticos cuando se aplican a innovación,
              porque asumen un futuro predecible que simplemente no existe en ese contexto.
            </p>
            <p>
              Esta investigación me llevó a desarrollar el framework PRIME-10 y a especializarme
              en modelos probabilísticos que incorporan la incertidumbre tecnológica y el riesgo
              de mercado como variables centrales, no como factores de corrección.
            </p>
            <p>
              Hoy combino la investigación activa en la Universidad de los Andes con la docencia
              en EAFIT y una práctica consultora de innovación que me permite validar
              continuamente mis hallazgos en organizaciones reales de Colombia y la región.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-10">Trayectoria</h2>
          <ol className="relative border-l-2 border-primary/20 space-y-10 pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white shadow" aria-hidden="true" />
                <span className="text-xs font-heading font-semibold text-accent uppercase tracking-wider">
                  {item.year}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-primary">{item.org}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Afiliaciones y credenciales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "PhD(c)", org: "Universidad de los Andes", detail: "Gestión de Innovación Tecnológica" },
              { title: "Docente", org: "EAFIT University", detail: "Maestría en Finanzas — Finanzas para la Innovación" },
              { title: "Divulgador científico", org: "RetroCiencia", detail: "Comunicación de investigación aplicada" },
            ].map((cred) => (
              <div key={cred.org} className="card p-5">
                <p className="font-heading font-bold text-primary text-sm">{cred.title}</p>
                <p className="font-heading font-semibold text-foreground text-base mt-1">{cred.org}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{cred.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
