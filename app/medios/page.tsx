import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema, mediaAppearancesSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Medios y Prensa — Entrevistas y Ponencias",
  description:
    "Apariciones de Augusto Ruiz en medios, podcasts, congresos y entrevistas sobre gestión de innovación tecnológica, evaluación financiera e inteligencia artificial.",
  alternates: { canonical: "https://www.augustoruiz.org/medios" },
  openGraph: {
    title: "Medios y Prensa — Entrevistas y Ponencias | Augusto Ruiz",
    description:
      "Apariciones de Augusto Ruiz en medios, podcasts, congresos y entrevistas sobre gestión de innovación tecnológica, evaluación financiera e inteligencia artificial.",
    url: "https://www.augustoruiz.org/medios",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medios y Prensa — Entrevistas y Ponencias | Augusto Ruiz",
    description:
      "Apariciones de Augusto Ruiz en medios, podcasts, congresos y entrevistas sobre gestión de innovación tecnológica, evaluación financiera e inteligencia artificial.",
  },
};

const podcasts = [
  {
    type: "Podcast",
    date: "Noviembre 2025",
    title: "Inteligencia Artificial: entre la promesa y la realidad",
    outlet: "Project Podcast · by scrumtizate.com",
    description:
      "Adopción real de IA en organizaciones — cómo evitar el valle de la desilusión y conectar teoría, estrategia y resultados medibles.",
    linkLabel: "Ver en Spotify",
    url: "https://scrumtizate.com/",
    image: "medios-project-podcast.jpg",
  },
  {
    type: "Webinar",
    date: "Septiembre 2025",
    title: "Identificación y gestión de riesgos en proyectos de base tecnológica apoyado con IA",
    outlet: "Universidad El Bosque · PMI Bogotá Colombia",
    description:
      "Aplicación de modelos de gestión de riesgos en proyectos tecnológicos usando inteligencia artificial generativa como herramienta de análisis y decisión.",
    linkLabel: "Ver en YouTube",
    url: "https://www.youtube.com/watch?v=-DPePS1nqMw",
    image: "medios-webinar-pmi.jpg",
  },
];

const talks = [
  {
    type: "Congreso internacional",
    status: "En preparación",
    title:
      "Errores de selección en portafolios de I+D+i: evidencia empírica en multinacionales latinoamericanas",
    outlet: "BALAS 2026 — Business Association of Latin American Studies",
    description:
      "Investigación doctoral sobre el efecto de los modelos determinísticos en la calidad de las decisiones de inversión en innovación.",
    year: "2026",
    linkLabel: "Ver congreso",
    url: "https://www.balas.org/",
    image: "medios-balas-2026.jpg",
  },
  {
    type: "Congreso nacional",
    status: "En preparación",
    title: "Modelos probabilísticos para la evaluación financiera de proyectos de innovación",
    outlet: "Conferencia ASCOLFA 2025 — Asociación Colombiana de Facultades de Administración",
    description: "",
    year: "2025",
    linkLabel: "Ver conferencia",
    url: "https://ascolfa.org/index.php/conferencias/conferencia-2025",
    image: "medios-ascolfa-2025.jpg",
  },
];

export default function MediosPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Inicio", url: "https://www.augustoruiz.org" },
            { name: "Medios", url: "https://www.augustoruiz.org/medios" },
          ]),
          mediaAppearancesSchema([
            { type: "PodcastEpisode", name: podcasts[0].title, url: podcasts[0].url, datePublished: "2025-11" },
            { type: "CreativeWork", name: podcasts[1].title, url: podcasts[1].url, datePublished: "2025-09" },
            { type: "CreativeWork", name: talks[0].title, url: talks[0].url },
            { type: "CreativeWork", name: talks[1].title, url: talks[1].url },
          ]),
        ]}
      />
      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Medios y prensa
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Apariciones en medios
            </h1>
            <LastUpdated path="/medios" />
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Entrevistas, artículos, podcasts y ponencias sobre gestión de innovación,
              evaluación financiera e inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Podcasts y webinars */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-2">Podcasts y webinars como invitado</h2>
          <div className="space-y-6 mt-8">
            {podcasts.map((item) => (
              <div key={item.title} className="card p-6 flex flex-col sm:flex-row gap-6">
                <div className="relative w-full sm:w-48 aspect-square rounded-xl shrink-0 self-start overflow-hidden bg-muted mx-auto sm:mx-0 max-w-[220px] sm:max-w-none">
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 220px, 192px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.outlet}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-heading font-semibold text-primary hover:underline"
                  >
                    {item.linkLabel}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ponencias académicas */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-2">Ponencias académicas</h2>
          <p className="text-muted-foreground mb-8">Presentaciones en congresos y conferencias</p>
          <div className="space-y-6">
            {talks.map((item) => (
              <div key={item.title} className="card p-6 flex flex-col sm:flex-row gap-6 bg-white">
                <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-xl shrink-0 self-start overflow-hidden">
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.status}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.outlet}</p>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-sm font-heading font-semibold text-foreground">{item.year}</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:underline"
                    >
                      {item.linkLabel}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Producción propia — RetroCiencia */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <h2 className="section-heading text-2xl sm:text-3xl mb-2">Producción propia</h2>
          <p className="text-muted-foreground mb-8">Podcast · RetroCiencia — Disponible en TikTok y en Spotify</p>

          <div className="card p-6 sm:p-8 flex flex-col sm:flex-row gap-8">
            <div className="relative w-full sm:w-56 aspect-square rounded-xl shrink-0 self-start overflow-hidden mx-auto sm:mx-0 max-w-[220px] sm:max-w-none bg-muted">
              <Image
                src="/images/retrociencia-cover.jpg"
                alt="RetroCiencia"
                fill
                sizes="(max-width: 640px) 220px, 224px"
                className="object-cover object-top"
                quality={90}
              />
            </div>
            <div className="flex-1">
              <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full mb-3">
                Producción propia
              </span>
              <h3 className="font-heading font-semibold text-foreground text-xl">
                Efemérides de la historia de la ciencia
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Micro-historias científicas narradas &ldquo;un día como hoy&rdquo;. Cada episodio revive
                un descubrimiento, un experimento o una teoría que cambió el mundo, pero me enfoco
                en lo que los libros de texto omiten: las intrigas, los rechazos, las rivalidades y
                a veces las muertes que rodean cada avance científico.
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Inspirado en El Calendario de la Historia de la Ciencia de Moncho Núñez, cada
                episodio combina investigación con IA y narrativa histórica para mostrar una verdad
                incómoda: hacer ciencia nunca ha sido fácil, y decidir qué ciencia financiar tampoco.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.tiktok.com/@retro_ciencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:underline"
                >
                  TikTok @retro_ciencia
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/episode/6nSlnhlmdQgDKj5oGstQt4?si=rV6H246NTjKrMbACTsfgUQ&nd=1&dlsi=3105dfac61e24c51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary hover:underline"
                >
                  Spotify · Ep. 5
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-16 bg-muted">
        <div className="container-site max-w-3xl text-center">
          <h2 className="section-heading text-2xl mb-4">Contacto para medios</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            ¿Tienes un podcast, evento o publicación sobre innovación, tecnología o finanzas?
            Estaré encantado de participar.
          </p>
          <a href="/contacto" className="btn-primary">
            Enviar solicitud de entrevista
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
