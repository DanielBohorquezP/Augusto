import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Docencia — Finanzas para la Innovación en EAFIT",
  description:
    "Augusto Ruiz imparte el curso Finanzas para la Innovación en la Maestría en Finanzas de EAFIT University. Un enfoque que integra modelos de incertidumbre, evaluación probabilística y toma de decisiones bajo riesgo tecnológico.",
  alternates: { canonical: "https://www.augustoruiz.org/docencia" },
};

export default function DocenciaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Docencia
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Finanzas para la Innovación
            </h1>
            <p className="mt-3 text-accent font-medium text-lg">EAFIT University · Maestría en Finanzas</p>
            <p className="mt-5 text-white/80 text-base leading-relaxed">
              Un curso que desafía los paradigmas de la evaluación financiera tradicional y equipa
              a profesionales con herramientas para tomar decisiones robustas en contextos de
              alta incertidumbre tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Filosofía de enseñanza</h2>
          <blockquote className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl font-heading italic text-foreground leading-relaxed">
              &ldquo;Enseño lo que investigo y practico lo que enseño.&rdquo;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cada clase integra hallazgos de investigación activa con casos reales de organizaciones
            que he asesorado. Esta conexión entre teoría y práctica es el núcleo de mi enfoque docente.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Los estudiantes no solo aprenden modelos: aprenden a cuestionar cuándo y por qué
            esos modelos funcionan (o fallan) en contextos de innovación real.
          </p>
        </div>
      </section>

      {/* Course content */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Temas del curso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Limitaciones de los métodos deterministas en innovación",
              "Modelos probabilísticos y simulación Monte Carlo",
              "Valoración de opciones reales",
              "Evaluación de proyectos bajo incertidumbre tecnológica",
              "Riesgo de mercado en innovación",
              "Métricas de innovación y KPIs financieros",
              "Financiación de proyectos de I+D+i",
              "Casos de estudio en empresas latinoamericanas",
            ].map((topic) => (
              <div key={topic} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks and workshops */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Charlas y talleres</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Además del curso en EAFIT, ofrezco charlas magistrales, talleres ejecutivos y
            seminarios corporativos sobre los temas de mi especialidad.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Taller ejecutivo", desc: "Sesión intensiva de 4–8 horas para equipos directivos. Ideal para organizaciones que quieren introducir pensamiento probabilístico en sus decisiones.", duration: "4–8 horas" },
              { title: "Charla magistral", desc: "Conferencia de 60–90 minutos sobre innovación, evaluación financiera o IA generativa. Disponible para universidades, congresos y empresas.", duration: "60–90 min" },
            ].map((format) => (
              <div key={format.title} className="card p-6">
                <span className="text-xs font-heading font-semibold text-accent uppercase tracking-wider">{format.duration}</span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-2 mb-3">{format.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{format.desc}</p>
                <Link href="/contacto" className="btn-secondary mt-4 text-sm px-4 py-2">
                  Solicitar información
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
