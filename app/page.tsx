import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { globalSchemaNodes, faqSchema } from "@/lib/schema";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MetodologiasSection from "@/components/sections/MetodologiasSection";
import LogosCarousel from "@/components/sections/LogosCarousel";
import Prime10Banner from "@/components/sections/Prime10Banner";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  // `absolute` evita que se aplique el template "%s | Augusto Ruiz" del layout
  // raiz: la marca ya va escrita aqui, al final, para que la frase que se quiere
  // posicionar ocupe el arranque del title (que es lo que Google pondera).
  title: {
    absolute: "Consultoría de Innovación y Metodologías | Augusto Ruiz",
  },
  description:
    "Consultoría de innovación y metodologías para empresas en Colombia. PRIME-10™: metodología propia registrada. Augusto Ruiz, PhD(c) Uniandes.",
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
  openGraph: {
    title: "Consultoría de Innovación y Metodologías de Innovación | Augusto Ruiz",
    description:
      "Consultoría de innovación y metodologías de innovación para empresas en Colombia y Latinoamérica. PRIME-10™, metodología propia registrada en la DNDA.",
    url: "https://www.augustoruiz.org",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de Innovación y Metodologías de Innovación | Augusto Ruiz",
    description:
      "Consultoría de innovación y metodologías de innovación para empresas en Colombia y Latinoamérica. PRIME-10™, metodología propia registrada en la DNDA.",
  },
};

const faqs = [
  {
    q: "¿Quién es Augusto Ruiz?",
    a: "Augusto Ruiz es consultor especializado en gestión de innovación tecnológica, investigador doctoral (PhD candidato, Universidad de los Andes) y profesor invitado en programas de posgrado en Universidad de los Andes, EAFIT, UIS, Universidad del Bosque y Universidad de América. Con más de 10 años de experiencia y más de 50 organizaciones asesoradas en Colombia, México, Chile, Perú y Ecuador, combina investigación activa de frontera con práctica organizacional concreta.",
  },
  {
    q: "¿Qué es la consultoría en innovación tecnológica y para qué sirve?",
    a: "Es un servicio profesional que ayuda a organizaciones a diseñar, evaluar, financiar e implementar proyectos de innovación tecnológica de forma rigurosa. A diferencia de la consultoría de gestión tradicional, trabaja con alta incertidumbre tecnológica y de mercado, por lo que usa modelos financieros probabilísticos en lugar de los métodos deterministas convencionales (VPN, TIR).",
  },
  {
    q: "¿Qué es la metodología PRIME-10™?",
    a: "PRIME-10™ es una metodología propia de evaluación financiera probabilística de proyectos de innovación bajo alta incertidumbre, registrada en la Dirección Nacional de Derecho de Autor de Colombia (2025). Sus cinco fases son Problem framing, Readiness validation, Investment modeling, Market experimentation y Ex post learning; el número 10 refiere al décimo cuadrante que agrega al Business Model Canvas de Osterwalder: la evaluación financiera probabilística del modelo de negocio.",
  },
  {
    q: "¿Cómo elegir un buen proveedor de servicios de innovación en Colombia?",
    a: "Seis criterios prácticos: que fundamente sus metodologías en evidencia e investigación; que conozca el ecosistema colombiano (Minciencias, iNNpulsa, marco regulatorio); que tenga metodologías propias validadas en proyectos reales, no recetas genéricas; que sus credenciales sean verificables (afiliaciones universitarias, casos de estudio con métricas); que diagnostique antes de proponer soluciones; y que su objetivo sea transferir capacidades a la organización, no generar dependencia indefinida del consultor.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={[...globalSchemaNodes, faqSchema(faqs)]} />
      <HeroSection />
      <ServicesSection />
      <LogosCarousel />
      <MetodologiasSection />
      <Prime10Banner />
      <AffiliationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
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
      <CTASection />
    </>
  );
}
