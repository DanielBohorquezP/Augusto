"use client";

import { useState } from "react";
import { renderInlineText } from "@/lib/inline-text";

type FAQ = { q: string; a: string };

type Props = {
  faqs: FAQ[];
  /** "plus": tarjetas blancas con icono +/x, el estilo de las paginas de servicio. */
  variant?: "default" | "plus";
  /** Indice de la pregunta abierta al cargar. Por defecto, todas cerradas. */
  initialOpen?: number | null;
};

export default function FAQAccordion({ faqs, variant = "default", initialOpen = null }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);

  if (variant === "plus") {
    return (
      <dl className="flex flex-col gap-2.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.q} className="bg-white rounded-2xl overflow-hidden">
              <dt>
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 px-5 sm:px-7 py-5 text-left"
                  >
                    <span className="font-heading font-semibold text-base leading-[1.4] text-primary">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-heading text-xl transition-all duration-200 ${
                        isOpen ? "bg-accent text-white rotate-45" : "bg-muted text-primary"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
              </dt>
              <dd
                className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-7 pb-6 sm:pr-[72px] text-[15px] leading-[1.75] text-muted-foreground">
                    {renderInlineText(faq.a)}
                  </p>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    );
  }

  return (
    <dl className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.q} className="card overflow-hidden p-0">
            {/*
              La pregunta va dentro de un <h3> real, no de un <span>. El <dl>/<dt>
              ya era semanticamente valido, pero sin encabezado las preguntas no
              entran en el esquema del documento, y es de ahi de donde los motores
              de IA extraen bloques de respuesta citables. El nivel h3 es el
              correcto: la seccion la abre un <h2> "Preguntas frecuentes".
            */}
            <dt>
              <h3 className="font-heading font-semibold text-foreground text-base">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-heading font-semibold text-foreground text-base">
                  {faq.q}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              </h3>
            </dt>
            <dd
              className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                  {renderInlineText(faq.a)}
                </p>
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
