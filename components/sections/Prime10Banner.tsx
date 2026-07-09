import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

const phases = [
  { letter: "P", name: "Problem framing", color: "#CE2222" },
  { letter: "R", name: "Readiness validation", color: "#E8A33D" },
  { letter: "I", name: "Investment modeling", color: "#2DD4BF" },
  { letter: "M", name: "Market experimentation", color: "#A78BFA" },
  { letter: "E", name: "Ex post learning", color: "#38BDF8" },
];

export default function Prime10Banner() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              Metodología registrada · DNDA 2025
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
              PRIME-10™
            </h2>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Evaluación financiera probabilística de proyectos de innovación e inversión
              tecnológica. Desarrollada a partir de investigación doctoral y validada en
              organizaciones latinoamericanas.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "5 fases: Problem framing → Ex post learning",
                "Simulación Monte Carlo aplicada al proyecto",
                "Diseño del experimento crítico antes de invertir",
                "Metodología registrada DNDA 2025",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl("Hola Augusto, quiero información sobre el PRIME-10 Assessment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-7 py-3.5"
              >
                Contáctame por WhatsApp
              </a>
              <Link href="/prime-10" className="btn-outline-white text-sm px-7 py-3.5">
                Conocer el framework
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: visual phases grid */}
          <div>
            <p className="text-white/40 text-xs font-heading uppercase tracking-widest mb-6">
              Las cinco fases
            </p>
            <div className="relative grid grid-cols-5 gap-2 sm:gap-3">
              {/* Connecting line behind the badges */}
              <div className="absolute top-8 sm:top-10 left-[10%] right-[10%] h-0.5 bg-white/15" aria-hidden="true" />
              {phases.map((phase) => (
                <Link
                  key={phase.letter}
                  href="/prime-10#fases"
                  className="group relative flex flex-col items-center gap-2.5 text-center"
                >
                  <div
                    className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl sm:text-3xl text-white shadow-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-105"
                    style={{ backgroundColor: phase.color, boxShadow: `0 8px 20px -6px ${phase.color}80` }}
                  >
                    {phase.letter}
                  </div>
                  <span className="text-white/70 group-hover:text-white text-[11px] sm:text-xs leading-tight transition-colors">
                    {phase.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
