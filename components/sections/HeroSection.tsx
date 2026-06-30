import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-screen flex items-center pt-20 [clip-path:polygon(0_0,100%_0,100%_96%,0_100%)]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      {/* Accent line — short, left-aligned */}
      <div className="absolute top-0 left-0 w-2/5 h-0.5 bg-accent" aria-hidden="true" />

      <div className="container-site relative z-10 py-16 lg:py-24 pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-body px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              PhD(c) · Universidad de los Andes · Colombia
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance">
              El puente entre el{" "}
              <span className="text-accent">rigor académico</span>{" "}
              y la decisión organizacional
            </h1>

            <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed">
              Investigador · Consultor · Formador en{" "}
              <strong className="text-white font-semibold">
                Gestión de Innovación Tecnológica
              </strong>
            </p>

            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-lg">
              Brindo{" "}
              <strong className="text-white/90 font-medium">
                consultoría en innovación tecnológica
              </strong>{" "}
              a empresas, startups y pymes en Colombia y Latinoamérica — evaluación
              financiera probabilística, IA generativa aplicada y estrategias de
              financiación con rigor académico.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/servicios" className="btn-primary">
                Ver mis servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/prime-10" className="btn-outline-white">
                Conocer PRIME-10
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "10+", label: "Años de experiencia" },
                { value: "50+", label: "Organizaciones asesoradas" },
                { value: "3", label: "Universidades partner" },
                { value: "PRIME-10", label: "Framework propietario" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading font-bold text-2xl text-white">{stat.value}</p>
                  <p className="text-white/55 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative lg:-translate-x-8">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/profile-photo.png"
                  alt="Augusto Ruiz - Foto de perfil profesional"
                  className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[28rem] lg:h-[34rem] object-cover object-top block"
                />
                {/* Floating fade effect */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary via-primary/50 to-transparent pointer-events-none" aria-hidden="true" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-xl -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
