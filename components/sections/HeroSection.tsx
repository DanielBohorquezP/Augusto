import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      {/* Decorative red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-accent" aria-hidden="true" />

      <div className="container-site relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-body px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              PhD(c) · Universidad de los Andes
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
              Ayudo a organizaciones a evaluar y financiar proyectos de innovación
              con rigor científico, modelos probabilísticos y aplicaciones de IA generativa.
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

            {/* Mini social proof */}
            <div className="mt-8 flex items-center gap-4 text-white/60 text-xs">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Docente EAFIT
              </div>
              <span>·</span>
              <span>Investigador Uniandes</span>
              <span>·</span>
              <span>PRIME-10 Framework</span>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center overflow-hidden">
                {/* Replace with actual photo */}
                <div className="text-center text-white/40 p-8">
                  <svg className="w-20 h-20 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-xs">Foto profesional</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-xl -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1440 20 1080 0 720 0C360 0 0 20 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
