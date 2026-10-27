import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import { WA_PATH } from "@/lib/whatsapp-icon";
import FAQAccordion from "@/components/FAQAccordion";
import AutoridadConsultor from "@/components/AutoridadConsultor";
import LastUpdated from "@/components/LastUpdated";
import { renderInlineText } from "@/lib/inline-text";
import { getPostBySlug, type Post } from "@/lib/posts";

type Faq = { q: string; a: string };
type MetodologiaStep = { title: string; desc: string };
type Imagen = { src: string; alt: string };
type ComparativaFila = { criterio: string; general: string; especializada: string };
type Comparativa = {
  titulo: string;
  columnaGeneral: string;
  columnaEspecializada: string;
  filas: ComparativaFila[];
  nota?: string;
  enlace?: { href: string; texto: string };
};

export type Herramienta = { name: string; description: string };
export type Hecho = { valor: string; etiqueta: string };
/** Seccion extra opcional entre "Qué incluye" y la comparativa (p. ej. OxI). */
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
  /** Tres datos clave bajo el hero (valor destacado + etiqueta). */
  hechos?: Hecho[];
  /** Parrafo de apertura de "El problema", en tamano grande. */
  lead?: string;
  problema: string[];
  /** Recuadro oscuro "La clave" junto al problema. */
  clave?: string;
  incluye: string[];
  incluyeNota?: string;
  /** Seccion adicional despues de "Qué incluye". */
  seccionExtra?: SeccionExtra;
  /** Tabla comparativa opcional. Solo la usan beneficios tributarios y evaluacion financiera. */
  comparativa?: Comparativa;
  metodologia: MetodologiaStep[];
  /** Metodologias y tecnicas concretas que usa el servicio (opcional). */
  herramientas?: Herramienta[];
  paraQuien: string[];
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

export default function ServicioDetalle({
  badge,
  h1,
  intro,
  breadcrumbLabel,
  routePath,
  whatsappTema,
  imagen,
  hechos,
  lead,
  problema,
  clave,
  incluye,
  incluyeNota,
  seccionExtra,
  comparativa,
  metodologia,
  herramientas,
  paraQuien,
  faqs,
  articulosRelacionados = [],
}: ServicioDetalleProps) {
  const posts = articulosRelacionados
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p));
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

      {/* Ficha de autoridad: quien presta el servicio, antes de explicar el problema. */}
      <AutoridadConsultor />

      {/* El problema */}
      <section className="pt-10 lg:pt-6 pb-20 lg:pb-28 bg-white">
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
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="incluye" className="py-20 lg:py-28 bg-muted scroll-mt-20">
        <div className={wrap}>
          <div className="flex flex-wrap justify-between items-end gap-6 lg:gap-10 mb-10">
            <div className="flex flex-col gap-4">
              <span className={eyebrow}>Alcance</span>
              <h2 className={h2Class}>Qué incluye el servicio</h2>
            </div>
            {incluyeNota && (
              <div className="bg-white rounded-[14px] px-5 py-3.5 font-heading font-semibold text-sm text-primary max-w-[420px]">
                {incluyeNota}
              </div>
            )}
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
            {incluye.map((item, i) => (
              <li key={i} className="bg-white rounded-[18px] p-7 flex flex-col gap-3.5">
                <span className="w-9 h-9 rounded-[10px] bg-primary text-white font-heading font-semibold text-sm flex items-center justify-center">
                  {num(i)}
                </span>
                <p className="text-[15px] leading-[1.65] text-foreground [text-wrap:pretty]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seccion extra opcional (OxI y OxI-R en beneficios tributarios) */}
      {seccionExtra && (
        <section className="py-20 lg:py-28 bg-white">
          <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-[72px] items-start`}>
            <div className="flex flex-col gap-4">
              <span className={eyebrow}>{seccionExtra.etiqueta}</span>
              <h2 className={h2Class}>{seccionExtra.titulo}</h2>
            </div>
            <div className="flex flex-col gap-6 max-w-[640px]">
              {seccionExtra.parrafos.map((p, i) => (
                <p key={i} className="text-base leading-[1.8] text-muted-foreground [text-wrap:pretty]">
                  {renderInlineText(p)}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparativa (opcional) */}
      {comparativa && (
        <section className="py-20 lg:py-28 bg-white">
          <div className={wrap}>
            <div className="flex flex-col gap-4 max-w-[760px] mb-10">
              <span className={eyebrow}>Comparativa</span>
              <h2 className="font-heading font-semibold text-[28px] sm:text-4xl leading-[1.15] tracking-[-.025em] text-primary text-balance">
                {comparativa.titulo}
              </h2>
            </div>
            <div className="border border-[#E2E8F0] rounded-[20px] overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left border-collapse">
                <thead>
                  <tr>
                    <th scope="col" className="w-[200px] p-5 bg-[#F5F7FB] font-heading font-semibold text-[15px] text-muted-foreground">
                      <span className="sr-only">Criterio</span>
                    </th>
                    <th scope="col" className="p-5 bg-[#F5F7FB] font-heading font-semibold text-[15px] text-muted-foreground">
                      {comparativa.columnaGeneral}
                    </th>
                    <th scope="col" className="p-5 bg-primary font-heading font-semibold text-[15px] text-white">
                      {comparativa.columnaEspecializada}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.filas.map((fila) => (
                    <tr key={fila.criterio} className="border-t border-[#E2E8F0] align-top">
                      <th scope="row" className="px-6 py-[22px] font-heading font-semibold text-sm text-primary text-left">
                        {fila.criterio}
                      </th>
                      <td className="px-6 py-[22px] text-sm leading-[1.6] text-muted-foreground">{fila.general}</td>
                      <td className="px-6 py-[22px] text-sm leading-[1.6] text-foreground bg-[#F8FAFF] border-l-[3px] border-l-accent">
                        {fila.especializada}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {(comparativa.nota || comparativa.enlace) && (
              <p className="mt-5 text-[15px] leading-[1.7] text-muted-foreground max-w-[820px]">
                {comparativa.nota}
                {comparativa.enlace && (
                  <>
                    {comparativa.nota ? " " : null}
                    <Link
                      href={comparativa.enlace.href}
                      className="font-semibold text-primary underline underline-offset-2"
                    >
                      {comparativa.enlace.texto}
                    </Link>
                    .
                  </>
                )}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Cómo funciona */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#E2E8F0]">
        <div className={wrap}>
          <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-14">
            <span className={eyebrow}>Metodología</span>
            <h2 className={h2Class}>Cómo funciona</h2>
          </div>
          <ol
            className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-0 ${
              metodologia.length >= 5
                ? "lg:grid-cols-5"
                : metodologia.length === 4
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-3"
            }`}
          >
            {metodologia.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-4">
                <div className="relative h-11 flex items-center">
                  <span className="absolute left-0 right-0 h-0.5 bg-[#E2E8F0]" aria-hidden="true" />
                  <span className="relative w-11 h-11 rounded-full bg-primary text-white font-heading font-semibold text-[15px] flex items-center justify-center shadow-[0_0_0_6px_#fff]">
                    {num(i)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg leading-[1.3] text-primary pr-4 [overflow-wrap:anywhere]">
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.65] text-muted-foreground pr-4 [text-wrap:pretty]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Metodologías y herramientas (opcional) */}
      {herramientas && herramientas.length > 0 && (
        <section className="py-20 lg:py-28 bg-primary">
          <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-start`}>
            <div className="flex flex-col gap-4">
              <span className="font-heading font-semibold text-xs uppercase tracking-[.18em] text-[#FCA5A5]">
                Herramientas
              </span>
              <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[40px] leading-[1.1] tracking-[-.025em] text-white">
                Metodologías que aplico
              </h2>
              <p className="text-base leading-[1.7] text-white/75">
                Cada una con nombre propio y con el criterio para saber cuándo aplica.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
              {herramientas.map((h) => (
                <div
                  key={h.name}
                  className="bg-white/[.06] border border-white/[.12] rounded-[18px] p-7 flex flex-col gap-2.5"
                >
                  <h3 className="font-heading font-semibold text-lg text-white">{h.name}</h3>
                  <p className="text-sm leading-[1.65] text-white/[.78] [text-wrap:pretty]">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Para quién es */}
      <section className="py-20 lg:py-28 bg-white">
        <div className={wrap}>
          <div className="flex flex-col gap-4 mb-10">
            <span className={eyebrow}>Para quién</span>
            <h2 className={h2Class}>Para quién es</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 border-t border-[#E2E8F0]">
            {paraQuien.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 py-7 md:pr-8 border-b border-[#E2E8F0]"
              >
                <span className="font-heading font-semibold text-sm text-accent pt-0.5">{num(i)}</span>
                <p className="text-[15px] leading-[1.65] text-foreground [text-wrap:pretty]">
                  {renderInlineText(item)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

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
