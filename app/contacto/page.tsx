import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Agendar consulta",
  description:
    "Agenda una consulta con Augusto Ruiz. Consultoría en evaluación financiera de innovación, IA generativa aplicada y estrategias de financiación para organizaciones latinoamericanas.",
  alternates: { canonical: "https://www.augustoruiz.org/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Hablemos
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Agendemos una conversación
            </h1>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Cuéntame sobre tu proyecto o desafío de innovación. La consulta inicial es gratuita
              y sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Información de contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-medium text-sm text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">contacto@augustoruiz.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-medium text-sm text-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/augusto-ruiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        linkedin.com/in/augusto-ruiz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-heading font-semibold text-sm text-foreground mb-3">Tiempo de respuesta</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Respondo todos los mensajes en un plazo máximo de <strong className="text-foreground">48 horas hábiles</strong>.
                  Para solicitudes urgentes, incluye esa indicación en el mensaje.
                </p>
              </div>

              <div className="card p-5 bg-primary text-white border-0">
                <h3 className="font-heading font-semibold text-sm text-white mb-2">¿Tienes un evento?</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Si buscas un ponente experto en innovación, tecnología o finanzas para tu evento,
                  incluye los detalles en el formulario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
