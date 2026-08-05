import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaScript from "@/components/SchemaScript";
import { personSchema, websiteSchema, professionalServiceSchema } from "@/lib/schema";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
    "PhD(c) investigador, consultor y formador especializado en evaluación financiera de innovación tecnológica, IA generativa aplicada y estrategias de financiación. Universidad de los Andes.",
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
      "El puente entre el rigor académico y la decisión organizacional. PhD(c) Universidad de los Andes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augusto Ruiz | Consultor en Gestión de Innovación Tecnológica",
    description:
      "El puente entre el rigor académico y la decisión organizacional.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://www.augustoruiz.org",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <SchemaScript schema={[personSchema, websiteSchema, professionalServiceSchema]} />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
