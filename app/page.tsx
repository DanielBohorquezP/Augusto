import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LogosCarousel from "@/components/sections/LogosCarousel";
import Prime10Banner from "@/components/sections/Prime10Banner";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Augusto Ruiz | Consultor en Gestión de Innovación Tecnológica",
  description:
    "Consultor y formador en gestión de innovación tecnológica. Evaluación financiera bajo incertidumbre, IA generativa y financiación de I+D+i. PhD(c) Uniandes.",
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LogosCarousel />
      <Prime10Banner />
      <AffiliationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
