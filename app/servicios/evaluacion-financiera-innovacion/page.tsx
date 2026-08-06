import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Evaluación Financiera de Proyectos de Innovación",
  description:
    "Evaluación financiera probabilística de proyectos de innovación con simulación Monte Carlo. Más allá del VPN y la TIR tradicionales. Consultoría en Colombia y LATAM.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion" },
  // Página en construcción: contenido pendiente por redactar. Quitar este
  // bloque cuando el contenido real esté publicado (ver docs/PLAN-CONTENIDO-BLOG.md
  // y el documento de estructura de páginas de servicio).
  robots: { index: false, follow: true },
};

const faqs = [
  {
    q: "¿Por qué el VPN y la TIR no son suficientes para evaluar un proyecto de innovación?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué es la simulación Monte Carlo y cómo se aplica a la evaluación de innovación?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué son las opciones reales en la valoración de un proyecto de inversión?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Cuánto dura el proceso de evaluación financiera de un proyecto?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué necesito tener listo antes de una evaluación financiera de innovación?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Para qué tipo de proyectos aplica este servicio (etapa, sector, tamaño)?",
    a: "[Contenido pendiente — Augusto completa]",
  },
];

export default function EvaluacionFinancieraInnovacionPage() {
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Evaluación financiera de innovación", url: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion" },
    ]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Evaluación financiera"
        h1="Evaluación financiera de proyectos de innovación bajo incertidumbre"
        intro="Más allá del VPN y la TIR tradicionales: evaluación probabilística con simulación Monte Carlo y opciones reales."
        breadcrumbLabel="Evaluación financiera de innovación"
        faqs={faqs}
      />
    </>
  );
}
