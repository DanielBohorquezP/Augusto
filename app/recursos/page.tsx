import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SchemaScript from "@/components/SchemaScript";
import LastUpdated from "@/components/LastUpdated";
import { breadcrumbSchema, globalSchemaNodes } from "@/lib/schema";
import { accesoLabel, porSeccion, type Recurso, type RecursoSeccion } from "@/lib/recursos";

const TITLE = "Recursos sobre innovación, incertidumbre e IA | Augusto Ruiz";
const DESCRIPTION =
  "Lecturas, videos, podcasts y cursos sobre evaluación de proyectos de innovación bajo incertidumbre e inteligencia artificial, casi todos de acceso libre.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://www.augustoruiz.org/recursos" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.augustoruiz.org/recursos",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

function Tags({ r }: { r: Recurso }) {
  const acceso = accesoLabel[r.acceso];
  return (
    <span className="flex flex-wrap items-center gap-1.5">
      <span
        className={`text-[11px] font-heading font-semibold px-2 py-0.5 rounded-full ${
          r.idioma === "ES" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
        }`}
        title={r.idioma === "ES" ? "En español" : "En inglés"}
      >
        {r.idioma}
      </span>
      {acceso && (
        <span className="text-[11px] font-heading font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
          {acceso}
        </span>
      )}
      {r.nota && <span className="text-[11px] text-muted-foreground">{r.nota}</span>}
    </span>
  );
}

function ResourceLink({ r, className }: { r: Recurso; className?: string }) {
  return r.interno ? (
    <Link href={r.url} className={className}>
      {r.titulo}
    </Link>
  ) : (
    <a href={r.url} {...externalProps} className={className}>
      {r.titulo}
    </a>
  );
}

function ExtraLinks({ r }: { r: Recurso }) {
  if (!r.links) return null;
  return (
    <p className="mt-2 text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
      {r.links.map((l) => (
        <a key={l.url} href={l.url} {...externalProps} className="text-primary font-medium hover:underline">
          {l.label}
        </a>
      ))}
    </p>
  );
}

function MediaCard({ r }: { r: Recurso }) {
  return (
    <article className="card overflow-hidden flex flex-col h-full">
      {!r.image && r.logo === "youtube" && (
        <div className="aspect-video bg-muted flex items-center justify-center" role="img" aria-label="YouTube">
          <svg className="w-16 h-auto" viewBox="0 0 28 20" aria-hidden="true">
            <rect width="28" height="20" rx="5" fill="#FF0000" />
            <path d="M11 6l7 4-7 4z" fill="#fff" />
          </svg>
        </div>
      )}
      {r.image && (
        <div className="relative aspect-video bg-primary/5">
          <Image
            src={`/images/recursos/${r.image}`}
            alt={r.titulo}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-foreground text-base leading-snug">
          <ResourceLink r={r} className="hover:text-primary transition-colors" />
        </h3>
        <p className="text-xs text-muted-foreground mt-1">{r.autor}</p>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{r.descripcion}</p>
        <ExtraLinks r={r} />
        <div className="mt-4">
          <Tags r={r} />
        </div>
      </div>
    </article>
  );
}

function CourseCard({ r }: { r: Recurso }) {
  return (
    <article className="card p-5 flex flex-col h-full">
      <h3 className="font-heading font-semibold text-foreground text-base leading-snug">
        <ResourceLink r={r} className="hover:text-primary transition-colors" />
      </h3>
      <p className="text-xs text-muted-foreground mt-1">{r.autor}</p>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{r.descripcion}</p>
      <div className="mt-4">
        <Tags r={r} />
      </div>
    </article>
  );
}

function Section({
  id,
  title,
  intro,
  muted,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-16 ${muted ? "bg-muted" : "bg-white"}`}>
      <div className="container-site">
        <h2 className="section-heading text-2xl sm:text-3xl mb-2">{title}</h2>
        {intro && <p className="text-muted-foreground mb-8 max-w-3xl">{intro}</p>}
        {!intro && <div className="mb-8" />}
        {children}
      </div>
    </section>
  );
}

export default function RecursosPage() {
  const inicial = porSeccion("lectura-inicial");
  const lecturas = porSeccion("lectura");
  const videos = porSeccion("video");
  const podcasts = porSeccion("podcast");
  const cursos = porSeccion("curso");
  const propios = porSeccion("propio");
  const media: [RecursoSeccion, Recurso[], "video" | "podcast"][] = [
    ["video", videos, "video"],
    ["podcast", podcasts, "podcast"],
  ];

  return (
    <>
      <SchemaScript
        schema={[
          ...globalSchemaNodes,
          breadcrumbSchema([
            { name: "Inicio", url: "https://www.augustoruiz.org" },
            { name: "Recursos", url: "https://www.augustoruiz.org/recursos" },
          ]),
        ]}
      />

      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Recursos
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">Recursos</h1>
            <LastUpdated path="/recursos" />
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Estas son las lecturas, videos, podcasts y cursos que recomiendo a quien me pregunta por dónde empezar a
              estudiar la evaluación de proyectos de innovación bajo incertidumbre y el avance de la inteligencia
              artificial. La mayoría está en inglés, que es el idioma en el que se publica casi todo este material, y
              los que están en español aparecen marcados.
            </p>
          </div>
        </div>
      </section>

      <Section id="lecturas-para-empezar" title="Cinco lecturas para empezar">
        <ol className="max-w-4xl divide-y divide-border">
          {inicial.map((r, i) => (
            <li key={r.url} className="flex gap-5 py-5 first:pt-0">
              <span className="font-heading font-bold text-3xl text-accent/70 leading-none w-10 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-foreground text-lg leading-snug">
                  <ResourceLink r={r} className="hover:text-primary transition-colors" />{" "}
                  <span className="font-normal text-muted-foreground text-sm">({r.autor})</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.descripcion}</p>
                <div className="mt-3">
                  <Tags r={r} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="mas-lecturas" title="Más lecturas" muted>
        <ul className="max-w-4xl space-y-6">
          {lecturas.map((r) => (
            <li key={r.url} className="bg-white rounded-xl p-5 border border-border">
              <h3 className="font-heading font-semibold text-foreground leading-snug">
                <ResourceLink r={r} className="hover:text-primary transition-colors" />{" "}
                <span className="font-normal text-muted-foreground text-sm">({r.autor})</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.descripcion}</p>
              <ExtraLinks r={r} />
              <div className="mt-3">
                <Tags r={r} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {media.map(([id, items, kind], idx) => (
        <Section
          key={id}
          id={kind === "video" ? "videos" : "podcasts"}
          title={kind === "video" ? "Videos" : "Podcasts"}
          muted={idx === 1}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {items.map((r) => (
              <MediaCard key={r.url} r={r} />
            ))}
          </div>
        </Section>
      ))}

      <Section id="cursos" title="Cursos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((r) => (
            <CourseCard key={r.url} r={r} />
          ))}
        </div>
      </Section>

      <Section id="de-mi-autoria" title="De mi autoría" muted>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propios.map((r) => (
            <CourseCard key={r.url} r={r} />
          ))}
        </div>
      </Section>

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" aria-hidden="true" />
        <div className="container-site relative z-10 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto text-balance">
            ¿Tienes una decisión de innovación por tomar?
          </h2>
          <p className="mt-4 text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            Si estás evaluando un proyecto con alta incertidumbre, conversemos sobre cómo abordarlo.
          </p>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary text-base px-8 py-4">
              Agendar consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
