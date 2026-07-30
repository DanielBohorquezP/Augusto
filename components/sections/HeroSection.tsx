import Link from "next/link";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

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
              <a
                href={whatsappUrl("Hola Augusto, vengo de tu sitio web y quiero una consulta sobre innovación.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Contáctame por WhatsApp
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <Link href="/servicios" className="btn-outline-white">
                Ver mis servicios
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "+15", label: "Años de experiencia" },
                { value: "50+", label: "Organizaciones asesoradas" },
                { value: "93%", label: "Beneficios Tributarios" },
                { value: "PRIME-10", label: "Decisiones bajo incertidumbre" },
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
                <Image
                  src="/profile-photo.jpg"
                  alt="Augusto Ruiz - Foto de perfil profesional"
                  width={448}
                  height={544}
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 448px"
                  className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[28rem] lg:h-[34rem] object-cover object-top block"
                />
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
