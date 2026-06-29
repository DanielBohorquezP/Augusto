import Link from "next/link";

export default function Prime10Banner() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-accent/20 rounded-full translate-x-[-50%] translate-y-[50%]" aria-hidden="true" />

      <div className="container-site relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Framework propietario
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              PRIME-10 Assessment
            </h2>
            <p className="mt-3 text-white/80 text-base leading-relaxed">
              Una metodología basada en evidencia para evaluar la madurez y el potencial de
              proyectos de innovación tecnológica. Desarrollada a partir de investigación
              doctoral y validada en organizaciones latinoamericanas.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "10 dimensiones de evaluación",
                "Basado en evidencia empírica",
                "Adaptado al contexto LATAM",
                "Resultados accionables",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <Link href="/prime-10" className="btn-primary text-base px-8 py-4">
              Conocer PRIME-10
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
