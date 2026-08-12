import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { whatsappUrl } from "@/lib/site";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto — Agendar consulta",
  description:
    "Agenda una consulta con Augusto Ruiz. Consultoría en evaluación financiera de innovación, IA generativa aplicada y estrategias de financiación para organizaciones latinoamericanas.",
  alternates: { canonical: "https://www.augustoruiz.org/contacto" },
  openGraph: {
    title: "Contacto — Agendar consulta | Augusto Ruiz",
    description:
      "Agenda una consulta con Augusto Ruiz. Consultoría en evaluación financiera de innovación, IA generativa aplicada y estrategias de financiación para organizaciones latinoamericanas.",
    url: "https://www.augustoruiz.org/contacto",
    type: "website",
    images: ["https://www.augustoruiz.org/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto — Agendar consulta | Augusto Ruiz",
    description:
      "Agenda una consulta con Augusto Ruiz. Consultoría en evaluación financiera de innovación, IA generativa aplicada y estrategias de financiación para organizaciones latinoamericanas.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Inicio", url: "https://www.augustoruiz.org" },
          { name: "Contacto", url: "https://www.augustoruiz.org/contacto" },
        ])}
      />
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
              Cuéntame sobre tu proyecto o desafío de innovación, sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          {/* WhatsApp directo — canal principal */}
          <div className="mb-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-heading font-bold text-lg text-foreground mb-1">
                Escríbeme directo por WhatsApp
              </h2>
              <p className="text-sm text-muted-foreground">
                Es la vía más rápida — respondo personalmente. También puedes usar el formulario
                de abajo si prefieres el correo.
              </p>
            </div>
            <a
              href={whatsappUrl("Hola Augusto, vengo de tu sitio web y quiero agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 !bg-[#25D366] hover:!bg-[#1EBE5A]"
            >
              Abrir WhatsApp
            </a>
          </div>

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
                      <p className="text-sm text-muted-foreground">oa.ruiz27@uniandes.edu.co</p>
                      <p className="text-sm text-muted-foreground">proyectos@augustoruiz.org</p>
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
                        href="https://www.linkedin.com/in/ruizaugusto/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent-hover transition-colors"
                      >
                        linkedin.com/in/ruizaugusto
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
