import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";

type Faq = { q: string; a: string };
type MetodologiaStep = { title: string; desc: string };
type Imagen = { src: string; alt: string };

export type ServicioDetalleProps = {
  badge: string;
  h1: string;
  intro: string;
  breadcrumbLabel: string;
  imagen?: Imagen;
  problema: string[];
  incluye: string[];
  incluyeNota?: string;
  metodologia: MetodologiaStep[];
  paraQuien: string[];
  faqs: Faq[];
};

export default function ServicioDetalle({
  badge,
  h1,
  intro,
  imagen,
  problema,
  incluye,
  incluyeNota,
  metodologia,
  paraQuien,
  faqs,
}: ServicioDetalleProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              {badge}
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              {h1}
            </h1>
            <p className="mt-2 text-white/40 text-xs">Última actualización: agosto de 2026</p>
            <p className="mt-4 text-white/80 text-base leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      {/* Imagen destacada */}
      {imagen && (
        <section className="bg-white pt-10">
          <div className="container-site">
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden">
              <Image
                src={imagen.src}
                alt={imagen.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* El problema / contexto */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="section-heading text-2xl sm:text-3xl mb-6">El problema</h2>
          </Reveal>
          <div className="space-y-4">
            {problema.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-muted-foreground leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="section-heading text-2xl sm:text-3xl mb-6">Qué incluye el servicio</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="card p-6">
              <ul className="space-y-3">
                {incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {incluyeNota && (
                <p className="mt-5 pt-5 border-t border-border text-sm font-heading font-semibold text-primary">
                  {incluyeNota}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <Reveal>
            <h2 className="section-heading text-2xl sm:text-3xl text-center mb-12">Cómo funciona</h2>
          </Reveal>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
              metodologia.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
            }`}
          >
            {metodologia.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="h-full">
                <div className="card p-6 text-center h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-accent text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="section-heading text-2xl sm:text-3xl mb-6">Para quién es</h2>
          </Reveal>
          <ul className="space-y-3">
            {paraQuien.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="section-heading text-2xl sm:text-3xl mb-8">Preguntas frecuentes</h2>
          </Reveal>
          <Reveal delay={80}>
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" aria-hidden="true" />
        <div className="container-site relative z-10 text-center">
          <span className="inline-block bg-white/10 text-white/90 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-white/20">
            ¿Listo para comenzar?
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto text-balance">
            ¿Listo para dar el siguiente paso?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl(`Hola Augusto, quiero información sobre "${h1}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              Contáctame por WhatsApp
            </a>
            <Link href="/contacto" className="btn-outline-white text-base px-8 py-4">
              Escribir por el formulario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
