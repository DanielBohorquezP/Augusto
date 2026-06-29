import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Prime10Banner from "@/components/sections/Prime10Banner";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Augusto Ruiz | Consultor en Gestión de Innovación Tecnológica",
  description:
    "PhD(c) investigador, consultor y formador en gestión de innovación tecnológica. Especialista en evaluación financiera bajo incertidumbre, IA generativa y estrategias de financiación. Universidad de los Andes · EAFIT.",
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AffiliationsSection />
      <ServicesSection />
      <Prime10Banner />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
