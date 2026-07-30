import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Consultor en Innovación Tecnológica Colombia",
  description:
    "Augusto Ruiz: consultor en innovación tecnológica en Colombia. PhD(c) Uniandes. Más de 50 organizaciones asesoradas en Colombia, México, Chile, Perú y Ecuador.",
  alternates: { canonical: "https://www.augustoruiz.org/sobre" },
  openGraph: {
    title: "Augusto Ruiz — Consultor en Innovación Tecnológica | Colombia",
    description: "PhD(c) Uniandes. Consultor en gestión de innovación tecnológica con base en Colombia. Más de 50 organizaciones asesoradas en LATAM.",
    url: "https://www.augustoruiz.org/sobre",
    type: "profile",
  },
};

const timeline = [
  {
    year: "2021 – Presente",
    title: "Candidato doctoral",
    org: "Universidad de los Andes",
    desc: "Investigación sobre errores de selección en decisiones de inversión en I+D+i. Desarrollo de metodologías basadas en simulación Monte Carlo e IA generativa para mejorar la toma de decisiones bajo alta incertidumbre.",
  },
  {
    year: "2019 – Presente",
    title: "Consultor",
    org: "Uno+Uno SAS",
    desc: "Asesoría a organizaciones en evaluación financiera de proyectos de I+D+i, formación corporativa en IA generativa y acceso a beneficios tributarios. Profesor invitado en programas de posgrado y formación ejecutiva.",
  },
  {
    year: "2018 – 2023",
    title: "Director de proyectos",
    org: "Connect Bogotá Región",
    desc: "Liderazgo de iniciativas estratégicas de innovación abierta, transferencia tecnológica y especialización inteligente. Coordinación de alianzas entre empresas, universidades y startups.",
  },
  {
    year: "2015 – 2016",
    title: "Gerente",
    org: "Inventta Consultoría en Innovación",
    desc: "Dirección del equipo consultor en I+D+i. Tasa de aprobación del 85% ante Colciencias en proyectos de beneficios tributarios.",
  },
  {
    year: "2012 – 2013",
    title: "Consultor",
    org: "Minciencias",
    desc: "Seguimiento financiero y técnico de más de 120 subproyectos financiados por el BID y el Banco Mundial.",
  },
  {
    year: "2002 – 2012",
    title: "Ingeniero de proyectos y operaciones",
    org: "PepsiCo · Smurfit Kappa · Amcor / PAYC S.A.",
    desc: "Gestión de proyectos industriales en los sectores de alimentos, papel y plásticos.",
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
                <Image
                  src="/profile-photo-about.jpg"
                  alt="Augusto Ruiz - Foto de perfil profesional"
                  width={384}
                  height={480}
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 384px"
                  className="w-64 h-80 sm:w-72 sm:h-96 lg:w-[24rem] lg:h-[30rem] object-cover object-top block"
                />
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
              Soy investigador doctoral en gestión de la innovación tecnológica en la Universidad
              de los Andes y consultor independiente con más de 15 años de experiencia en
              proyectos con organizaciones del sector real, universidades y organismos
              multilaterales en Colombia y América Latina.
            </p>
            <p>
              A lo largo de mi trayectoria he acompañado a más de 50 organizaciones en decisiones
              de inversión en innovación, formación corporativa en IA generativa y acceso a
              beneficios tributarios por I+D+i. Mi trabajo de campo en Brasil, Uruguay, Argentina
              y Chile me permitió contrastar los retos de la evaluación financiera de innovación
              en distintos ecosistemas de la región.
            </p>
            <p>
              El hallazgo central de mi investigación es que los métodos financieros tradicionales
              — VPN, TIR, flujo de caja descontado — generan errores sistemáticos de selección
              cuando se aplican a proyectos de innovación, porque asumen un futuro predecible que
              no existe en ese contexto. Esa conclusión me llevó a desarrollar PRIME-10™, una
              metodología propia de evaluación financiera probabilística registrada en la
              Dirección Nacional de Derecho de Autor de Colombia en 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary photo */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/sobre-secundaria.jpg"
              alt="Decisiones estratégicas bajo incertidumbre"
              fill
              sizes="100vw"
              className="object-cover"
            />
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
              { title: "CQRM", org: "Certified Quantitative Risk Management", detail: "No. LA-3437" },
              { title: "PMP", org: "Project Management Professional", detail: "PMI · No. 1649915" },
              { title: "Formación", org: "Tecnológico de Monterrey", detail: "Gestión y transferencia de tecnología · 2021" },
              { title: "DEEI", org: "BID-PRODEM", detail: "Diploma en Estrategia de Ecosistemas de Innovación" },
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
