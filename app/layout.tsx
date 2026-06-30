import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import { personSchema, websiteSchema, professionalServiceSchema } from "@/lib/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.augustoruiz.org"),
  title: {
    default: "Augusto Ruiz | Consultor en Gestión de Innovación Tecnológica",
    template: "%s | Augusto Ruiz",
  },
  description:
    "PhD(c) investigador, consultor y formador especializado en evaluación financiera de innovación tecnológica, IA generativa aplicada y estrategias de financiación. Universidad de los Andes · EAFIT.",
  keywords: [
    "consultoría en innovación empresarial Colombia",
    "consultoría en innovación tecnológica",
    "consultoría en innovación digital",
    "consultoría en innovación para pymes",
    "consultor innovación Colombia",
    "gestión innovación tecnológica",
    "evaluación financiera innovación",
    "PRIME-10 assessment",
    "Augusto Ruiz",
    "consultoría innovación Medellín",
    "consultoría innovación Bogotá",
    "innovación empresarial Colombia",
  ],
  authors: [{ name: "Augusto Ruiz" }],
  creator: "Augusto Ruiz",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.augustoruiz.org",
    siteName: "Augusto Ruiz",
    title: "Augusto Ruiz | Consultor en Gestión de Innovación Tecnológica",
    description:
      "El puente entre el rigor académico y la decisión organizacional. PhD(c) Universidad de los Andes · Docente EAFIT.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Augusto Ruiz — Consultor en Gestión de Innovación Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Augusto Ruiz | Consultor en Gestión de Innovación Tecnológica",
    description:
      "El puente entre el rigor académico y la decisión organizacional.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <SchemaScript schema={[personSchema, websiteSchema, professionalServiceSchema]} />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
