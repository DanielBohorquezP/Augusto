import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

type Faq = { q: string; a: string };

export type ServicioDetalleProps = {
  badge: string;
  h1: string;
  intro: string;
  breadcrumbLabel: string;
  faqs: Faq[];
};

const PLACEHOLDER = "[Contenido pendiente — Augusto completa]";

export default function ServicioDetalle({ badge, h1, intro, faqs }: ServicioDetalleProps) {
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
            <p className="mt-4 text-white/80 text-base leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      {/* El problema / contexto */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">El problema</h2>
          <p className="text-muted-foreground leading-relaxed">{PLACEHOLDER}</p>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Qué incluye el servicio</h2>
          <div className="card p-6">
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {PLACEHOLDER}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <h2 className="section-heading text-2xl sm:text-3xl text-center mb-12">Cómo funciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["01", "02", "03", "04"].map((step) => (
              <div key={step} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                  {PLACEHOLDER}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{PLACEHOLDER}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-6">Para quién es</h2>
          <ul className="space-y-3">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {PLACEHOLDER}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-8">Preguntas frecuentes</h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <dt className="font-heading font-semibold text-foreground text-base mb-2">
                  {faq.q}
                </dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
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
