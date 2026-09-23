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
import ParaQuienSection from "@/components/sections/ParaQuienSection";
import ComoTrabajoSection from "@/components/sections/ComoTrabajoSection";

export const metadata: Metadata = {
  // `absolute` evita que se aplique el template "%s | Augusto Ruiz" del layout
  // raiz: la marca ya va escrita aqui, al final, para que la frase que se quiere
  // posicionar ocupe el arranque del title (que es lo que Google pondera).
  title: {
    absolute: "Consultoría de Innovación y Beneficios I+D+i | Augusto Ruiz",
  },
  // "en Colombia" va en la description y no en el title: el title de /servicios
  // usa "en Colombia" como diferenciador frente al home (ver commit 8226c3c).
  description:
    "Consultoría de innovación en Colombia: evaluación financiera de proyectos I+D+i con PRIME-10™, beneficios tributarios e IA. PhD(c) Uniandes. Escríbeme.",
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
  openGraph: {
    title: "Consultoría de Innovación y Beneficios I+D+i | Augusto Ruiz",
    description:
      "Evaluación financiera de proyectos I+D+i con PRIME-10™ (metodología registrada en la DNDA), beneficios tributarios e IA generativa para empresas en Colombia y Latinoamérica.",
    url: "https://www.augustoruiz.org",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de Innovación y Beneficios I+D+i | Augusto Ruiz",
    description:
      "Evaluación financiera de proyectos I+D+i con PRIME-10™ (metodología registrada en la DNDA), beneficios tributarios e IA generativa para empresas en Colombia y Latinoamérica.",
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
  // Preguntas transaccionales (costo, tiempos, cobertura, elegibilidad,
  // formato). Solo usan datos que el sitio ya publica en otras paginas.
  {
    q: "¿Cuánto cuesta una consultoría de innovación?",
    a: "Depende del alcance: no cuesta lo mismo una evaluación PRIME-10 de un proyecto que la formulación de un beneficio tributario o un programa de formación en IA. Por eso cada servicio se cotiza a la medida, después de una conversación inicial y un diagnóstico, y la propuesta define alcance, entregables y tiempos antes de empezar.",
  },
  {
    q: "¿Cuánto tarda una evaluación con PRIME-10™?",
    a: "El PRIME-10 Assessment genera resultados accionables en 2 a 3 semanas, y la evaluación completa del modelo toma de 3 a 5 días de trabajo. El resultado es una distribución de probabilidad del valor del proyecto, las variables de mayor incertidumbre y el experimento crítico que conviene hacer antes de comprometer la inversión completa.",
  },
  {
    q: "¿Trabajas solo en Colombia o también en otros países?",
    a: "Trabajo con organizaciones de Colombia, México, Chile, Perú y Ecuador. En Colombia tengo presencia activa en Medellín y Bogotá, y el trabajo puede hacerse de forma remota. Los beneficios tributarios ante Minciencias, la UPME y la ANLA aplican a empresas de todo el territorio colombiano, sin importar la ciudad donde operen.",
  },
  {
    q: "¿Una pyme puede acceder a beneficios tributarios por I+D+i en Colombia?",
    a: "Sí. Cualquier empresa contribuyente del impuesto de renta en Colombia puede acceder, sin restricción de tamaño o sector, y el crédito fiscal del 50% y los TIDIS están diseñados para las MiPymes. Lo que decide es que el proyecto califique en la tipología del CNBT y que esté bien formulado ante Minciencias.",
  },
  {
    q: "¿La capacitación en IA generativa es un curso genérico?",
    a: "No. El programa se diseña por área y por reto de negocio concreto, a partir de un diagnóstico de los casos de uso con más potencial. Cada participante trabaja sobre su propio problema y termina con un artefacto funcional hecho con las herramientas que la empresa ya tiene. Hay talleres de 4 a 8 horas, charlas de 60 a 90 minutos y programas extendidos.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={[...globalSchemaNodes, faqSchema(faqs)]} />
      <HeroSection />
      <ServicesSection />
      <LogosCarousel />
      <ParaQuienSection />
      <MetodologiasSection />
      <Prime10Banner />
      <ComoTrabajoSection />
      <AffiliationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="section-heading text-2xl sm:text-3xl mb-8">Preguntas frecuentes sobre consultoría de innovación</h2>
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
