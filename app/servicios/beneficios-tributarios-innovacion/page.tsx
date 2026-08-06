import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Beneficios Tributarios para Empresas en Colombia",
  description:
    "Estructuración y gestión de beneficios tributarios I+D+i ante Minciencias, iNNpulsa y BPIN. Asesoría especializada para empresas y pymes en Colombia.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
  // Página en construcción: contenido pendiente por redactar. Quitar este
  // bloque cuando el contenido real esté publicado (ver docs/PLAN-CONTENIDO-BLOG.md
  // y el documento de estructura de páginas de servicio).
  robots: { index: false, follow: true },
};

const faqs = [
  {
    q: "¿Qué son los beneficios tributarios por inversión en I+D+i en Colombia?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué empresas pueden acceder a beneficios tributarios ante Minciencias?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Cuál es la diferencia entre beneficios tributarios de Minciencias, iNNpulsa y BPIN?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué documentos se necesitan para postular a un beneficio tributario?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Cuánto tiempo toma el proceso de aprobación?",
    a: "[Contenido pendiente — Augusto completa]",
  },
  {
    q: "¿Qué pasa si mi proyecto es rechazado — se puede volver a postular?",
    a: "[Contenido pendiente — Augusto completa]",
  },
];

export default function BeneficiosTributariosInnovacionPage() {
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Beneficios tributarios", url: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
    ]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Beneficios tributarios"
        h1="Beneficios tributarios para empresas: asesoría en I+D+i ante Minciencias"
        intro="Estructuración y gestión de proyectos de I+D+i ante Minciencias, iNNpulsa y BPIN para acceder a beneficios tributarios."
        breadcrumbLabel="Beneficios tributarios"
        faqs={faqs}
      />
    </>
  );
}
