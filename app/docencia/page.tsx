import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, courseListSchema, docenciaAffiliationsSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Docencia y Formación Ejecutiva",
  description:
    "Augusto Ruiz es profesor invitado en posgrados en Colombia y ofrece formación ejecutiva corporativa en evaluación financiera de innovación, I+D+i e IA generativa.",
  alternates: { canonical: "https://www.augustoruiz.org/docencia" },
  openGraph: {
    title: "Docencia y Formación Ejecutiva | Augusto Ruiz",
    description:
      "Augusto Ruiz es profesor invitado en programas de posgrado y pregrado en Colombia y ofrece formación ejecutiva corporativa en evaluación financiera de innovación, I+D+i e IA generativa.",
    url: "https://www.augustoruiz.org/docencia",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Docencia y Formación Ejecutiva | Augusto Ruiz",
    description:
      "Augusto Ruiz es profesor invitado en programas de posgrado y pregrado en Colombia y ofrece formación ejecutiva corporativa en evaluación financiera de innovación, I+D+i e IA generativa.",
  },
};

// Nota: no se agregan años/periodos por curso porque no hay una fecha
// confirmada por Augusto para cada uno — mejor omitirlo que inventar una.
const programs = [
  { institution: "Universidad de los Andes", course: "Finanzas para la Innovación", url: "https://uniandes.edu.co", description: "Curso de posgrado sobre evaluación financiera de proyectos de innovación bajo incertidumbre, dictado por Augusto Ruiz como profesor invitado en la Universidad de los Andes." },
  { institution: "Universidad de los Andes", course: "Estrategia de Gestión de Innovación", url: "https://uniandes.edu.co", description: "Curso de posgrado sobre diseño y gestión de la estrategia de innovación organizacional, dictado por Augusto Ruiz como profesor invitado en la Universidad de los Andes." },
  { institution: "Universidad del Bosque", course: "Maestría en Gestión de Proyectos · Herramientas digitales e IA", url: "https://www.unbosque.edu.co", description: "Módulo de herramientas digitales e inteligencia artificial aplicadas a la gestión de proyectos, dentro de la Maestría en Gestión de Proyectos de la Universidad del Bosque." },
  { institution: "Universidad Industrial de Santander (UIS)", course: "MBA · Gestión de la Innovación", url: "https://www.uis.edu.co", description: "Módulo de gestión de la innovación dentro del MBA de la Universidad Industrial de Santander, dictado por Augusto Ruiz como profesor invitado." },
  { institution: "EAFIT", course: "Maestría en Finanzas", url: "https://www.eafit.edu.co", description: "Módulo de finanzas de la innovación dentro de la Maestría en Finanzas de EAFIT, dictado por Augusto Ruiz como profesor invitado." },
  { institution: "Universidad de América", course: "Finanzas para Ingenieros", url: "https://www.uamerica.edu.co", description: "Curso de finanzas orientado a perfiles de ingeniería, dictado por Augusto Ruiz como profesor invitado en la Universidad de América." },
];

const corporateOrgs = ["EAFIT", "Ocensa", "Ecopetrol (vía Uniandes)", "Connect Bogotá Región"];

const formats = [
  {
    title: "Taller ejecutivo",
    duration: "4–8 horas",
    desc: "Sesión intensiva para equipos directivos. Para organizaciones que quieren introducir pensamiento probabilístico en sus decisiones de innovación o adoptar IA generativa con resultados concretos.",
  },
  {
    title: "Charla magistral",
    duration: "60–90 min",
    desc: "Conferencia sobre gestión de la innovación, evaluación financiera de proyectos o IA generativa aplicada. Disponible para programas académicos, congresos y eventos corporativos.",
  },
];

export default function DocenciaPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Inicio", url: "https://www.augustoruiz.org" },
            { name: "Docencia", url: "https://www.augustoruiz.org/docencia" },
          ]),
          docenciaAffiliationsSchema(
            Array.from(new Map(programs.map((p) => [p.institution, { name: p.institution, url: p.url }])).values())
          ),
          ...courseListSchema(programs),
        ]}
      />
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
                Docencia y formación ejecutiva
              </span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Docencia y formación ejecutiva
              </h1>
              <p className="mt-2 text-white/40 text-xs">Última actualización: agosto de 2026</p>
              <p className="mt-5 text-white/80 text-base leading-relaxed">
                Profesor invitado en programas de posgrado y pregrado en Colombia. Formación
                ejecutiva corporativa en evaluación financiera de innovación, estrategia de I+D+i
                e inteligencia artificial generativa.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/docencia-hero.jpg"
                alt="Formación ejecutiva y docencia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programas académicos */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Programas académicos</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Profesor invitado en las siguientes instituciones:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programs.map((p) => (
              <div key={`${p.institution}-${p.course}`} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-foreground">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-semibold hover:text-primary hover:underline"
                  >
                    {p.institution}
                  </a>{" "}
                  — {p.course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formación ejecutiva corporativa */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Formación ejecutiva corporativa</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Diseño e imparto programas a medida en tres áreas: evaluación financiera de proyectos
            de innovación y decisiones bajo incertidumbre, estrategia de I+D+i y gestión de
            portafolios de innovación, e IA generativa aplicada a procesos corporativos por área
            y reto de negocio.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-heading font-semibold text-foreground uppercase tracking-wide">
              Organizaciones:
            </span>
            {corporateOrgs.map((org) => (
              <span key={org} className="text-xs bg-white border border-border rounded-full px-3 py-1 text-foreground">
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Talks and workshops */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Charlas y talleres</h2>
          <div className="relative mb-8 w-full aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/docencia-taller.jpg"
              alt="Sesión de trabajo en un taller ejecutivo"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formats.map((format) => (
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

      {/* Philosophy */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Filosofía de enseñanza</h2>
          <blockquote className="border-l-4 border-accent pl-6 mb-8">
            <p className="text-xl font-heading italic text-foreground leading-relaxed">
              &ldquo;Enseño lo que investigo y practico lo que enseño.&rdquo;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            Cada sesión integra hallazgos de investigación activa con casos reales de
            organizaciones asesoradas. Los participantes no solo aprenden modelos: aprenden a
            cuestionar cuándo y por qué esos modelos funcionan o fallan en contextos de
            innovación real.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
