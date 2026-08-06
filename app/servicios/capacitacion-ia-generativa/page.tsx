import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Capacitación en IA Generativa para Empresas",
  description:
    "Programas de capacitación en inteligencia artificial generativa para equipos corporativos en Colombia. Diseño por área y reto de negocio, con ROI medible.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa" },
  // Página en construcción: contenido pendiente por redactar. Quitar este
  // bloque cuando el contenido real esté publicado (ver docs/PLAN-CONTENIDO-BLOG.md
  // y el documento de estructura de páginas de servicio).
  robots: { index: false, follow: true },
};

const faqs = [
  {
    q: "¿Qué habilidades necesita mi equipo para trabajar con IA generativa?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Cuánto cuesta una capacitación en IA generativa para empresas en Colombia?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿La capacitación se adapta por área o rol dentro de la empresa?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué diferencia hay entre un curso genérico de IA y una formación por reto de negocio?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Se entrega algún tipo de certificación al finalizar?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Cuánto dura el programa y en qué modalidad se dicta (presencial/virtual)?",
    a: "[Contenido pendiente — Augusto completa]",
  },
];

export default function CapacitacionIaGenerativaPage() {
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Capacitación en IA generativa", url: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa" },
    ]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Formación corporativa"
        h1="Formación corporativa en IA generativa aplicada a tu negocio"
        intro="Capacitación diseñada por área y reto de negocio, con las herramientas de IA que tu empresa ya usa."
        breadcrumbLabel="Capacitación en IA generativa"
        faqs={faqs}
      />
    </>
  );
}
