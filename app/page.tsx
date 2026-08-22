import type { Metadata } from "next";
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
    absolute: "Consultoría de Innovación y Metodologías de Innovación | Augusto Ruiz",
  },
  description:
    "Consultoría de innovación y metodologías de innovación para empresas en Colombia. PRIME-10™: metodología propia registrada. Augusto Ruiz, PhD(c) Uniandes.",
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
  openGraph: {
    title: "Consultoría de Innovación y Metodologías de Innovación | Augusto Ruiz",
    description:
      "Consultoría de innovación y metodologías de innovación para empresas en Colombia y Latinoamérica. PRIME-10™, metodología propia registrada en la DNDA.",
    url: "https://www.augustoruiz.org",
    type: "website",
    images: ["https://www.augustoruiz.org/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de Innovación y Metodologías de Innovación | Augusto Ruiz",
    description:
      "Consultoría de innovación y metodologías de innovación para empresas en Colombia y Latinoamérica. PRIME-10™, metodología propia registrada en la DNDA.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LogosCarousel />
      <MetodologiasSection />
      <Prime10Banner />
      <AffiliationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
