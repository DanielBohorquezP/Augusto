import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import SchemaScript from "@/components/SchemaScript";
import { personSchema, websiteSchema, professionalServiceSchema, uniandesSchema } from "@/lib/schema";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Open Sans es fuente variable: al omitir `weight`, next/font sirve UN solo
// archivo que cubre todo el rango de pesos, en vez de cinco estaticos en la
// ruta critica de renderizado. El peso 300 ademas no se usaba en ningun lado.
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.augustoruiz.org"),
  title: {
    default: "Consultoría de Innovación en Colombia | Augusto Ruiz",
    template: "%s | Augusto Ruiz",
  },
  description:
    "PhD(c) investigador, consultor y formador especializado en evaluación financiera de innovación tecnológica, IA generativa aplicada y estrategias de financiación. Universidad de los Andes.",
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
    // Con barra final, que es la URL que el servidor sirve de verdad. Google
    // normaliza la raíz con y sin barra, así que esto es higiene, no un
    // arreglo de indexación: elimina una señal ambigua de menos.
    canonical: "https://www.augustoruiz.org/",
  },
  // Declaracion explicita en vez de las convenciones de archivo de app/ (que
  // emitian el .ico primero y como sizes="16x16"). Google exige que el favicon
  // sea un cuadrado multiplo de 48px y elige entre estos <link>: por eso van
  // primero el de 96 y el de 192 (48x2 y 48x4), y el .ico queda al final solo
  // para navegadores antiguos. Los archivos viven en public/ para que su URL
  // sea estable, sin el hash que Next anade a los iconos de app/.
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
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
        <SchemaScript schema={[personSchema, websiteSchema, professionalServiceSchema, uniandesSchema]} />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsentBanner />
        {GA_MEASUREMENT_ID && <AnalyticsEvents />}
        {GA_MEASUREMENT_ID && (
          <>
            {/*
              GTM pesa ~160 KiB y provoca un reflow forzado; cargarlo en la ruta
              critica retrasaba el LCP. La cola de consentimiento y dataLayer se
              define de inmediato (no se pierde ningun evento), pero el script
              remoto solo se inyecta cuando el navegador esta inactivo o el
              usuario interactua — lo que ocurra primero.
            */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('consent', 'default', {
                    analytics_storage: (typeof localStorage !== 'undefined' && localStorage.getItem('cookie_consent') === 'granted') ? 'granted' : 'denied',
                    ad_storage: 'denied',
                    wait_for_update: 500
                  });
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');

                  (function () {
                    var loaded = false;
                    function loadGtag() {
                      if (loaded) return;
                      loaded = true;
                      cleanup();
                      var s = document.createElement('script');
                      s.async = true;
                      s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';
                      document.head.appendChild(s);
                    }
                    var events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
                    function cleanup() {
                      events.forEach(function (e) {
                        window.removeEventListener(e, loadGtag, { passive: true });
                      });
                    }
                    events.forEach(function (e) {
                      window.addEventListener(e, loadGtag, { passive: true, once: true });
                    });
                    if ('requestIdleCallback' in window) {
                      requestIdleCallback(loadGtag, { timeout: 5000 });
                    } else {
                      setTimeout(loadGtag, 3000);
                    }
                  })();
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
