"use client";

import { useState } from "react";
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
    cta: "Beneficios tributarios y OxI",
  },
  {
    title: "Empresas que deben decidir una inversión tecnológica",
    description:
      "Adoptar, licenciar o desarrollar una tecnología sin serie histórica: la decisión se evalúa con distribuciones de probabilidad, no con un VPN puntual.",
    href: "/servicios/evaluacion-financiera-innovacion",
    cta: "Evaluación financiera de proyectos",
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
  const [active, setActive] = useState(0);
  const seg = segments[active];

  return (
    <section className="py-20 lg:py-28 bg-white" id="para-quien">
      <div className="max-w-[1152px] mx-auto px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center text-center gap-4 mb-10 lg:mb-14">
          <span className="font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent">
            Situaciones
          </span>
          <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-.025em] text-primary">
            Por qué me buscan las empresas
          </h2>
          <p className="max-w-[640px] text-base leading-[1.7] text-muted-foreground">
            Organizaciones en Colombia y Latinoamérica que tienen que tomar una decisión de
            innovación con alta incertidumbre, o convertir una inversión en un beneficio.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Situaciones en las que trabajo"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          {segments.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                id={`situacion-tab-${i}`}
                aria-selected={on}
                aria-controls="situacion-panel"
                onClick={() => setActive(i)}
                className={`flex flex-col gap-3 lg:gap-5 p-4 sm:p-6 lg:p-7 min-h-[150px] lg:min-h-[190px] rounded-2xl text-left border-2 transition-all duration-200 ${
                  on
                    ? "bg-white border-primary shadow-[0_16px_32px_-16px_rgba(14,28,61,.35)]"
                    : "bg-[#F5F7FB] border-transparent"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-[22px] h-[22px] rounded-full border-2 ${
                    on ? "border-accent" : "border-border"
                  }`}
                  aria-hidden="true"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${on ? "bg-accent" : "bg-transparent"}`} />
                </span>
                <span className="font-heading font-semibold text-sm sm:text-base lg:text-[17px] leading-[1.35] text-primary">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="situacion-panel"
          role="tabpanel"
          aria-labelledby={`situacion-tab-${active}`}
          className="mt-6 bg-[#F5F7FB] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 lg:px-10 lg:py-8 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-6 md:gap-10 items-center"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-semibold text-muted-foreground">Lo que necesitas</span>
            <p className="text-base lg:text-[17px] leading-[1.65] text-foreground [text-wrap:pretty]">
              {seg.description}
            </p>
          </div>
          <Link
            href={seg.href}
            className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-light text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors"
          >
            {seg.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
