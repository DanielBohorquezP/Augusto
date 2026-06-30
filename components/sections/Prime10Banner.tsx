import Link from "next/link";

const dimensions = Array.from({ length: 10 }, (_, i) => i + 1);

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
              Framework propietario
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
              PRIME-10<br />Assessment
            </h2>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Una metodología basada en evidencia para evaluar la madurez y el potencial de
              proyectos de innovación tecnológica. Desarrollada a partir de investigación
              doctoral y validada en organizaciones latinoamericanas.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "10 dimensiones de evaluación",
                "Basado en evidencia empírica",
                "Adaptado al contexto LATAM",
                "Resultados accionables",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/prime-10" className="btn-primary text-sm px-7 py-3.5">
                Conocer el framework
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: visual dimension grid */}
          <div>
            <p className="text-white/40 text-xs font-heading uppercase tracking-widest mb-5">
              10 dimensiones de evaluación
            </p>
            <div className="grid grid-cols-5 gap-3">
              {dimensions.map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"
                >
                  <span className="font-heading font-bold text-base text-white/70">
                    {String(n).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-white/40 text-xs leading-relaxed">
              Cada dimensión evalúa un aspecto crítico de la madurez del proyecto de innovación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
