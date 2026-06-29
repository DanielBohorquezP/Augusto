import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sobre Augusto Ruiz | Investigador y Consultor en Innovación Tecnológica",
  description:
    "Conoce la trayectoria de Augusto Ruiz: PhD(c) Universidad de los Andes, docente EAFIT, consultor especializado en gestión de innovación tecnológica con enfoque basado en evidencia.",
  alternates: { canonical: "https://www.augustoruiz.org/sobre" },
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
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center">
                <div className="text-center text-white/40">
                  <svg className="w-20 h-20 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-xs">Foto profesional</p>
                </div>
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
              en EAFIT y una práctica consultora que me permite validar continuamente mis hallazgos
              en organizaciones reales.
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
