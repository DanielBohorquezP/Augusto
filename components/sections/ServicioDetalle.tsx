import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import { WA_PATH } from "@/lib/whatsapp-icon";
import FAQAccordion from "@/components/FAQAccordion";
import AutoridadConsultor from "@/components/AutoridadConsultor";
import ServiceLogosCarousel from "@/components/sections/ServiceLogosCarousel";
import type { ServiceLogo } from "@/lib/service-logos";
import LastUpdated from "@/components/LastUpdated";
import { renderInlineText } from "@/lib/inline-text";
import { getPostBySlug, type Post } from "@/lib/posts";

type Faq = { q: string; a: string };
type Paso = { titulo: string; desc: string };
type Imagen = { src: string; alt: string };
type ComparativaFila = { criterio: string; general: string; especializada: string };
type Comparativa = {
  titulo: string;
  columnaGeneral: string;
  columnaEspecializada: string;
  filas: ComparativaFila[];
  etiquetas: { general: string; especializada: string };
  /** Título del bloque de las dos píldoras, p. ej. "Cómo trabajamos juntos:". */
  pasosTitulo: string;
  pasos: [string, string];
  /** Frase que acompaña al botón de WhatsApp bajo la cuadrícula. */
  cta: string;
};

export type Hecho = { valor: string; etiqueta: string };
/** Seccion extra opcional entre "El problema" y la comparativa (p. ej. OxI). */
export type SeccionExtra = { etiqueta: string; titulo: string; parrafos: string[] };

export type ServicioDetalleProps = {
  badge: string;
  h1: string;
  intro: string;
  breadcrumbLabel: string;
  /** Ruta de la pagina, p.ej. "/servicios/beneficios-tributarios-innovacion".
   *  Se usa para leer su fecha real de ultima modificacion en lib/routes.ts. */
  routePath: string;
  /** Nombre del servicio en el mensaje prellenado de WhatsApp. Por defecto, el h1. */
  whatsappTema?: string;
  imagen?: Imagen;
  /** Carrusel de logos de clientes del servicio, justo debajo del hero. */
  logos?: ServiceLogo[];
  /** Tres datos clave bajo el hero (valor destacado + etiqueta). */
  hechos?: Hecho[];
  /** Parrafo de apertura de "El problema", en tamano grande. */
  lead?: string;
  problema: string[];
  /** Recuadro oscuro "La clave" junto al problema. */
  clave?: string;
  /** Frase del CTA de WhatsApp al final de "El problema". */
  problemaCta: string;
  /** Pasos de "Qué incluye y cómo funciona". */
  pasos: Paso[];
  pasosIntro: string;
  /** Tarjeta oscura con una cifra destacada bajo la introducción. */
  destacado?: Hecho;
  /** Seccion adicional despues de "El problema". */
  seccionExtra?: SeccionExtra;
  /** Comparativa opcional. Solo la usan beneficios tributarios y evaluacion financiera. */
  comparativa?: Comparativa;
  faqs: Faq[];
  /** Slugs de posts del blog que respaldan este servicio. Solo se muestran los que
   *  existen en content/blog/, asi que se pueden listar posts aun sin publicar. */
  articulosRelacionados?: string[];
};

const eyebrow = "font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent";
const h2Class =
  "font-heading font-semibold text-[30px] sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[-.025em] text-primary";
const wrap = "max-w-[1152px] mx-auto px-5 sm:px-8 lg:px-0";
const num = (i: number) => String(i + 1).padStart(2, "0");

const waBtn =
  "inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-[15px] px-6 py-3.5 rounded-[10px] transition-colors whitespace-nowrap";

function WaButton({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={waBtn}>
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={WA_PATH} />
      </svg>
      Escríbame por WhatsApp
    </a>
  );
}

export default function ServicioDetalle({
  badge,
  h1,
  intro,
  breadcrumbLabel,
  routePath,
  whatsappTema,
  imagen,
  logos,
  hechos,
  lead,
  problema,
  clave,
  problemaCta,
  pasos,
  pasosIntro,
  destacado,
  seccionExtra,
  comparativa,
  faqs,
  articulosRelacionados = [],
}: ServicioDetalleProps) {
  const posts = articulosRelacionados
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p))
    .slice(0, 3);
  const whatsapp = whatsappUrl(`Hola Augusto, quiero información sobre "${whatsappTema ?? h1}".`);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-28 lg:pt-32 pb-28 lg:pb-[136px]">
        <div
          className="absolute inset-0 opacity-[.08] [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-2/5 h-0.5 bg-accent" aria-hidden="true" />
        <div className={`relative ${wrap}`}>
          <div
            className={
              imagen
                ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center"
                : ""
            }
          >
            <div className="flex flex-col gap-5 items-start">
              <nav aria-label="Ruta de navegación">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-white/65">
                  <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-white" aria-current="page">{breadcrumbLabel}</li>
                </ol>
              </nav>
              <span className="bg-accent text-white font-heading font-semibold text-xs tracking-[.06em] uppercase px-3 py-1.5 rounded-full">
                {badge}
              </span>
              <h1 className="font-heading font-bold text-[34px] sm:text-[40px] lg:text-[clamp(36px,4.2vw,50px)] leading-[1.1] tracking-[-.03em] text-white text-balance">
                {h1}
              </h1>
              <LastUpdated path={routePath} />
              <p className="text-base lg:text-[17px] leading-[1.7] text-white/80 max-w-[560px] [text-wrap:pretty]">
                {renderInlineText(intro)}
              </p>
              <div className="flex flex-wrap gap-3 mt-1">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-[15px] px-6 py-3.5 rounded-[10px] transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={WA_PATH} />
                  </svg>
                  Contáctame por WhatsApp
                </a>
                <a
                  href="#incluye"
                  className="inline-flex items-center border-2 border-white/90 text-white hover:bg-white hover:text-primary font-heading font-semibold text-[15px] px-6 py-3 rounded-[10px] transition-colors"
                >
                  Ver qué incluye
                </a>
              </div>
            </div>
            {imagen && (
              <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
                <Image
                  src={imagen.src}
                  alt={imagen.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  quality={90}
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
          {hechos && hechos.length > 0 && (
            <dl className="mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-3 border-t border-white/15">
              {hechos.map((h) => (
                <div key={h.etiqueta} className="pt-6 pr-6 flex flex-col gap-1">
                  <dd className="font-heading font-semibold text-lg lg:text-xl text-white m-0">{h.valor}</dd>
                  <dt className="text-[13px] text-white/65">{h.etiqueta}</dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {logos && logos.length > 0 && <ServiceLogosCarousel logos={logos} />}

      {/* Ficha de autoridad: quien presta el servicio, antes de explicar el problema. */}
      <AutoridadConsultor solapado={!logos?.length} />

      {/* Qué incluye y cómo funciona */}
      <section id="incluye" className="bg-muted pt-16 pb-20 lg:pb-28 scroll-mt-20">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-start`}>
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>Alcance y metodología</span>
            <h2 className={h2Class}>Qué incluye y cómo funciona</h2>
            <p className="text-base leading-[1.7] text-muted-foreground max-w-[400px] [text-wrap:pretty]">
              {pasosIntro}
            </p>
            {destacado && (
              <div className="mt-4 relative overflow-hidden bg-primary rounded-[20px] p-8 flex flex-col gap-2">
                <div
                  className="absolute inset-0 opacity-[.08] [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:24px_24px]"
                  aria-hidden="true"
                />
                <div className="absolute top-0 left-0 w-2/5 h-[3px] bg-accent" aria-hidden="true" />
                <span className="relative font-heading font-bold text-[64px] leading-none tracking-[-.04em] text-white">
                  {destacado.valor}
                </span>
                <span className="relative font-heading font-medium text-base text-white/80">
                  {destacado.etiqueta}
                </span>
              </div>
            )}
          </div>
          <ol className="bg-white rounded-[20px] shadow-[0_24px_48px_-32px_rgba(14,28,61,.35)]">
            {pasos.map((paso, i) => (
              <li
                key={paso.titulo}
                className={`flex gap-5 items-start px-7 py-6 ${i > 0 ? "border-t border-[#E2E8F0]" : ""}`}
              >
                <span
                  className="font-heading font-bold text-[28px] leading-none text-accent min-w-10"
                  aria-hidden="true"
                >
                  {num(i)}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-semibold text-lg text-primary">{paso.titulo}</h3>
                  <p className="text-[15px] leading-[1.6] text-muted-foreground [text-wrap:pretty]">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* El problema */}
      <section className="py-20 lg:py-28 bg-white">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-[72px] items-start`}>
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>Contexto</span>
            <h2 className={h2Class}>El problema</h2>
            {clave && (
              <div className="mt-3 bg-primary rounded-[20px] p-8 flex flex-col gap-3">
                <span className="font-heading font-semibold text-xs tracking-[.14em] uppercase text-[#FCA5A5]">
                  La clave
                </span>
                <p className="font-heading font-medium text-[17px] leading-[1.55] text-white [text-wrap:pretty]">
                  {renderInlineText(clave)}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-6 max-w-[640px]">
            {lead && (
              <p className="text-lg lg:text-[19px] leading-[1.65] text-foreground [text-wrap:pretty]">
                {renderInlineText(lead)}
              </p>
            )}
            {problema.map((p, i) => (
              <p key={i} className="text-base leading-[1.8] text-muted-foreground [text-wrap:pretty]">
                {renderInlineText(p)}
              </p>
            ))}
            <div className="mt-2 flex flex-wrap items-center justify-between gap-5 bg-muted rounded-2xl px-7 py-6 border-l-4 border-accent">
              <p className="font-heading font-semibold text-[17px] leading-[1.45] text-primary flex-1 min-w-[260px]">
                {problemaCta}
              </p>
              <WaButton href={whatsapp} />
            </div>
          </div>
        </div>
      </section>

      {/* Seccion extra opcional (OxI y OxI-R en beneficios tributarios) */}
      {seccionExtra && (
        <section className="bg-muted py-20 lg:py-28 mt-20 lg:mt-28">
          <div className={wrap}>
            <div className="relative overflow-hidden bg-white border border-[#E2E8F0] rounded-[20px] p-6 sm:p-10">
              <div className="absolute left-0 inset-y-0 w-1 bg-accent" aria-hidden="true" />
              <div className="flex flex-wrap gap-10 items-center">
                <div className="flex flex-col gap-4 flex-1 min-w-[260px]">
                  <span className="bg-accent-light text-accent-hover font-heading font-semibold text-[11px] tracking-[.12em] uppercase px-3 py-1.5 rounded-full self-start">
                    {seccionExtra.etiqueta}
                  </span>
                  <h2 className="font-heading font-semibold text-[28px] leading-[1.2] text-primary">
                    {seccionExtra.titulo}
                  </h2>
                </div>
                <div className="flex flex-col gap-4 flex-[1.4] min-w-[260px]">
                  {seccionExtra.parrafos.map((p, i) => (
                    <p key={i} className="text-base leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                      {renderInlineText(p)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparativa (opcional) */}
      {comparativa && (
        <section className="bg-white py-20 lg:py-28 border-t border-[#E2E8F0]">
          <div className={wrap}>
            <div className="flex flex-col gap-4 max-w-[760px] mb-10">
              <span className={eyebrow}>Comparativa</span>
              <h2 className="font-heading font-semibold text-[30px] sm:text-[40px] leading-[1.1] text-primary text-balance">
                {comparativa.titulo}
              </h2>
            </div>
            <div className="grid grid-cols-2 rounded-[20px] shadow-[0_24px_48px_-28px_rgba(14,28,61,.4)]">
              <div className="bg-[#F5F7FB] rounded-tl-[20px] px-5 sm:px-8 py-7 flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-slate-500">{comparativa.etiquetas.general}</span>
                <h3 className="font-heading font-semibold text-lg sm:text-[22px] leading-[1.25] text-primary">
                  {comparativa.columnaGeneral}
                </h3>
              </div>
              <div className="relative bg-primary rounded-tr-[20px] px-5 sm:px-8 py-7 flex flex-col gap-1.5">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent rounded-tr-[20px]" aria-hidden="true" />
                <span className="text-[13px] font-semibold text-[#FCA5A5]">{comparativa.etiquetas.especializada}</span>
                <h3 className="font-heading font-semibold text-lg sm:text-[22px] leading-[1.25] text-white">
                  {comparativa.columnaEspecializada}
                </h3>
              </div>
              {comparativa.filas.map((fila, i) => {
                const last = i === comparativa.filas.length - 1;
                return (
                  <Fragment key={fila.criterio}>
                    <div
                      className={`bg-[#F5F7FB] border-t border-[#E2E8F0] px-5 sm:px-8 py-[22px] flex flex-col gap-1.5 ${last ? "rounded-bl-[20px]" : ""}`}
                    >
                      <span className="text-[11px] font-heading font-semibold tracking-[.14em] uppercase text-slate-500">
                        {fila.criterio}
                      </span>
                      <p className="text-base text-muted-foreground [text-wrap:pretty]">{fila.general}</p>
                    </div>
                    <div
                      className={`bg-primary border-t border-white/10 px-5 sm:px-8 py-[22px] flex flex-col gap-1.5 ${last ? "rounded-br-[20px]" : ""}`}
                    >
                      <span className="text-[11px] font-heading font-semibold tracking-[.14em] uppercase text-[#FCA5A5]">
                        {fila.criterio}
                      </span>
                      <p className="font-heading font-medium text-[17px] leading-[1.45] text-white [text-wrap:pretty]">
                        {fila.especializada}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4 bg-muted rounded-2xl px-7 py-5">
              <strong className="font-heading font-semibold text-[15px] text-primary">{comparativa.pasosTitulo}</strong>
              <span className="inline-flex items-center gap-2.5 bg-white rounded-full py-2 pl-2 pr-4 text-sm font-semibold text-primary">
                <span className="w-[26px] h-[26px] rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  1
                </span>
                {comparativa.pasos[0]}
              </span>
              <span className="text-accent font-bold" aria-hidden="true">→</span>
              <span className="inline-flex items-center gap-2.5 bg-white rounded-full py-2 pl-2 pr-4 text-sm font-semibold text-primary">
                <span className="w-[26px] h-[26px] rounded-full bg-accent text-white text-xs flex items-center justify-center">
                  2
                </span>
                {comparativa.pasos[1]}
              </span>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center">
              <p className="font-heading font-semibold text-xl text-primary">{comparativa.cta}</p>
              <WaButton href={whatsapp} />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] gap-10 lg:gap-16 items-start`}>
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>FAQ</span>
            <h2 className={h2Class}>Preguntas frecuentes</h2>
          </div>
          <FAQAccordion faqs={faqs} variant="plus" initialOpen={0} />
        </div>
      </section>

      {/* Artículos relacionados: enlaces internos del servicio hacia los posts que lo respaldan */}
      {posts.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className={wrap}>
            <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
              <div className="flex flex-col gap-4">
                <span className={eyebrow}>Blog</span>
                <h2 className="font-heading font-semibold text-[28px] sm:text-4xl leading-[1.1] tracking-[-.025em] text-primary">
                  Artículos relacionados
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-heading font-semibold text-sm text-primary border-b-2 border-accent pb-0.5 whitespace-nowrap"
              >
                Ver el blog
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-[18px] overflow-hidden border border-[#E2E8F0] text-foreground hover:shadow-[0_20px_40px_-24px_rgba(14,28,61,.35)] transition-shadow"
                >
                  <div className="relative w-full aspect-video bg-primary">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.imageAlt ?? ""}
                        fill
                        sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                        quality={90}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-[22px] flex flex-col gap-2.5">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {post.category} · {post.readTime}
                    </span>
                    <h3 className="font-heading font-semibold text-base leading-[1.4] text-primary group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-[104px]">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" aria-hidden="true" />
        <div className={`relative ${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center`}>
          <div className="flex flex-col gap-3.5">
            <span className="font-heading font-semibold text-xs uppercase tracking-[.18em] text-[#FCA5A5]">
              ¿Listo para comenzar?
            </span>
            <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[40px] leading-[1.12] tracking-[-.025em] text-white text-balance">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-base leading-[1.7] text-white/80">Respondo en un máximo de 48 horas hábiles.</p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-base px-[30px] py-[17px] rounded-[10px] transition-colors"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
              Contáctame por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="font-heading font-semibold text-[15px] text-white hover:text-[#FCA5A5] py-2 transition-colors"
            >
              O escribir por el formulario →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
