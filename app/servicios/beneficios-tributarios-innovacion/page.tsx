import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema, serviceSchema, globalSchemaNodes } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";
import { logosBeneficiosTributarios } from "@/lib/service-logos";

// El template de app/layout.tsx anade " | Augusto Ruiz" (15 caracteres). Aqui se usa
// `absolute` para prescindir de ese sufijo: es la unica forma de que quepan las dos
// familias de terminos ("consultoria tributaria para empresas" + "beneficios I+D+i")
// dentro del limite de 65 caracteres que sigue el resto del sitio.
export const metadata: Metadata = {
  title: { absolute: "Beneficios Tributarios y OxI para Empresas en Colombia" },
  description:
    "Beneficios tributarios y Obras por Impuestos (OxI) para empresas en Colombia: proyectos de I+D+i ante Minciencias, inversiones ambientales ante la ANLA y UPME, y OxI-R.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
  openGraph: {
    title: "Beneficios Tributarios y OxI para Empresas en Colombia | Augusto Ruiz",
    description:
      "Beneficios tributarios y Obras por Impuestos (OxI) para empresas en Colombia: proyectos de I+D+i ante Minciencias, inversiones ambientales ante la ANLA y UPME, y OxI-R.",
    url: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beneficios Tributarios y OxI para Empresas en Colombia | Augusto Ruiz",
    description:
      "Beneficios tributarios y Obras por Impuestos (OxI) para empresas en Colombia: proyectos de I+D+i ante Minciencias, inversiones ambientales ante la ANLA y UPME, y OxI-R.",
  },
};

const lead = "Su empresa invierte en innovación, en energías renovables o en mejoras ambientales, y paga el impuesto de renta como si esas inversiones no existieran. Colombia ofrece [varios tipos de beneficio tributario](/blog/que-es-un-beneficio-tributario-colombia) por esas mismas inversiones: hasta un 30% de descuento en renta o un crédito fiscal del 50% por proyectos de I+D+i ante Minciencias, y una deducción del 50% más exclusión de IVA por inversiones en energías renovables y eficiencia energética. La mayoría de las empresas que califican no los usa.";

const problema = ["Y casi siempre ocurre con un contador, un revisor fiscal o una firma tributaria ya trabajando en la empresa. No es negligencia de ellos: la consultoría tributaria general se ocupa del cumplimiento —renta, IVA, precios de transferencia, requerimientos de la DIAN— y estos beneficios no se ganan en la declaración, sino antes, en la formulación técnica del proyecto ante la entidad que lo certifica.", "Las razones se repiten: no saben que su proyecto puede calificar, asumen que el trámite es solo para grandes empresas o intentaron una postulación sin la formulación técnica que exige y fueron rechazadas. El resultado es el mismo: dinero que la ley permite recuperar y que se queda sin reclamar, año tras año."];

const clave = "El problema rara vez es la elegibilidad del proyecto. Es la formulación. Por eso este servicio empieza por establecer, antes de cualquier compromiso formal, si su proyecto califica y bajo qué régimen.";

const hechos = [{"valor": "93%", "etiqueta": "Tasa de aprobación en proyectos gestionados"}, {"valor": "Minciencias · UPME · ANLA", "etiqueta": "Los dos regímenes de beneficio"}, {"valor": "Todo Colombia", "etiqueta": "Sin importar la ciudad donde opere"}];

const seccionOxi = {
  etiqueta: "Servicio adicional",
  titulo: "Obras por Impuestos (OxI y OxI-R)",
  parrafos: [
    "Además de los beneficios por I+D+i y ambientales, acompaño la estructuración y postulación de proyectos bajo el mecanismo de Obras por Impuestos (OxI), incluida su modalidad para la reconstrucción (OxI-R), con gestión ante las entidades competentes, entre ellas la ART.",
    // TODO: contenido completo de OxI y OxI-R, pendiente de envío por parte del cliente.
  ],
};

const pasosIntro = "Cinco pasos, de principio a fin: desde saber si su proyecto califica hasta tener el beneficio aprobado.";

const destacado = { valor: "93%", etiqueta: "de aprobación en los proyectos gestionados" };

const problemaCta = "¿Su proyecto podría calificar? Lo revisamos sin compromiso.";

const pasos = [
  { titulo: "Diagnóstico de elegibilidad", desc: "Sabrá si su proyecto califica, en qué régimen y por cuál beneficio, antes de comprometerse." },
  { titulo: "Formulación técnica", desc: "Estructuro el proyecto con los criterios exactos del CNBT o de la entidad certificadora." },
  { titulo: "Gestión ante la entidad", desc: "Postulo por el canal correspondiente: SIGP en Minciencias para I+D+i; UPME y ANLA para energía y medio ambiente." },
  { titulo: "Documentación completa", desc: "Preparo todos los soportes que exige la postulación o la certificación." },
  { titulo: "Acompañamiento hasta el final", desc: "Respondo requerimientos y subsanaciones hasta la decisión final y el soporte del beneficio." },
];

const comparativa = {
  titulo: "Su contador y este servicio no compiten: se complementan",
  columnaGeneral: "Consultoría tributaria general",
  columnaEspecializada: "Consultoría en beneficios tributarios",
  filas: [
    {
      criterio: "Qué resuelve",
      general: "Cumplir con la DIAN: renta, IVA y revisoría fiscal.",
      especializada: "Convertir su inversión en I+D+i, energía o ambiente en ahorro tributario.",
    },
    {
      criterio: "Cuándo actúa",
      general: "Al declarar, sobre lo que ya pasó.",
      especializada: "Meses antes, al formular el proyecto.",
    },
    {
      criterio: "Ante quién",
      general: "DIAN",
      especializada: "Minciencias, UPME y ANLA",
    },
    {
      criterio: "Plazo",
      general: "Todo el año, con el calendario tributario.",
      especializada: "Solo en la convocatoria. Si se pasa, el beneficio del año se pierde.",
    },
    {
      criterio: "Quién lo hace",
      general: "Contador o abogado tributarista.",
      especializada: "Especialista técnico en innovación e ingeniería.",
    },
  ],
  etiquetas: { general: "Lo que ya tiene", especializada: "Lo que le falta" },
  pasosTitulo: "Cómo trabajamos juntos:",
  pasos: ["Yo formulo y certifico el proyecto", "Su contador aplica el beneficio en la renta"] as [string, string],
  cta: "¿Quiere saber qué beneficio aplica a su inversión?",
};

const faqs = [
  {
    q: "¿Puedo trabajar con mi contador o mi firma tributaria actual?",
    a: "Sí, y es lo habitual. Este servicio no reemplaza a su contador, a su revisor fiscal ni a su firma de consultoría tributaria: se ocupa de la parte que ellos normalmente no cubren, que es la formulación técnica del proyecto y su gestión ante Minciencias, la UPME o la ANLA. El reparto natural del trabajo es este: yo estructuro y postulo el proyecto ante la entidad certificadora, y su asesor tributario aplica el beneficio ya certificado en la declaración de renta y lo soporta ante la DIAN. De hecho, buena parte de los proyectos llegan por recomendación del propio contador de la empresa, que identifica la oportunidad pero no gestiona la certificación.",
  },
  {
    q: "¿Qué son los beneficios tributarios por inversión en I+D+i en Colombia?",
    a: "Son incentivos fiscales regulados por los artículos 256 y 256-1 del Estatuto Tributario colombiano, para empresas que invierten en proyectos de ciencia, tecnología e innovación calificados por el Consejo Nacional de Beneficios Tributarios (CNBT) de Minciencias. Los dos principales son: un descuento del 30% del valor invertido sobre el impuesto de renta a cargo, sin superar el 30% del impuesto a pagar y con traslado de excedentes hasta por cuatro declaraciones siguientes, y un crédito fiscal del 50% de la inversión certificada, aplicable a la compensación de impuestos nacionales; las MiPymes con créditos superiores a 1.000 UVT pueden solicitar TIDIS libremente comercializables. El requisito de fondo es que el proyecto califique como investigación, desarrollo tecnológico o innovación en alianza con un actor reconocido por el ministerio.",
  },
  {
    q: "¿Qué son los beneficios tributarios por inversiones FNCE y eficiencia energética?",
    a: "Son beneficios consagrados en la Ley 1715 de 2014 que incentivan la inversión en fuentes no convencionales de energía (FNCE) y en gestión eficiente de la energía, bajo los parámetros del Ministerio de Minas y Energía. Incluyen: deducción del 50% del valor de la inversión sobre el impuesto de renta, exclusión de IVA para equipos y servicios destinados al proyecto, exención arancelaria para la importación de equipos y deducción por depreciación acelerada. Para inversiones ambientales certificadas por la ANLA aplica además un descuento del 25% del valor de la inversión sobre el impuesto de renta (artículo 255 del Estatuto Tributario).",
  },
  {
    q: "¿Qué empresas pueden acceder a estos beneficios tributarios?",
    a: "Cualquier empresa contribuyente del impuesto de renta en Colombia, sin restricción de tamaño o sector. Para el régimen de Minciencias, micro, pequeñas, medianas y grandes empresas pueden acceder, con la condición de ejecutar el proyecto en alianza con un actor reconocido por el ministerio y de que el proyecto encaje en la tipología del CNBT. Para el régimen ambiental y energético, la condición es que la inversión corresponda a FNCE, gestión eficiente de la energía o control y mejoramiento del medio ambiente, con certificación de la UPME o la ANLA según el caso. El filtro real no es el tamaño de la empresa sino la naturaleza del proyecto o de la inversión.",
  },
  {
    q: "¿Qué documentos se necesitan para postular a un beneficio tributario?",
    a: "Depende del régimen. Ante Minciencias: el proyecto formulado según la tipología del CNBT (descripción técnica, presupuesto de inversiones, cronograma), la evidencia de la alianza con el actor reconocido y la postulación por la plataforma SIGP dentro de la convocatoria vigente. Ante la UPME y la ANLA: la documentación técnica que acredite que los equipos, servicios y obras corresponden al proyecto de FNCE o de eficiencia energética, para obtener la certificación que soporta el beneficio ante la DIAN. En ambos regímenes, la formulación técnica es donde se decide la aprobación: una inversión real mal documentada se rechaza igual que una que no califica.",
  },
  {
    q: "¿Qué pasa si mi proyecto es rechazado, se puede volver a postular?",
    a: "Sí. Un proyecto no aprobado puede ajustarse y presentarse en una convocatoria posterior; el rechazo no inhabilita a la empresa. Lo determinante es diagnosticar la causa: si el proyecto no encaja en la tipología del CNBT, ningún ajuste de forma lo salvará; si el problema fue de formulación o soporte documental, la corrección es viable. Por eso el primer paso del servicio es una evaluación de elegibilidad antes de cualquier compromiso formal.",
  },
];

export default function BeneficiosTributariosInnovacionPage() {
  const schemas = [
    ...globalSchemaNodes,
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Beneficios tributarios y OxI", url: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
    ]),
    serviceSchema({
      slug: "servicios/beneficios-tributarios-innovacion",
      name: "Beneficios tributarios y OxI",
      description:
        "Acompañamiento en la estructuración y postulación de proyectos para acceder a beneficios tributarios por inversiones en I+D+i ante Minciencias, inversiones ambientales ante la ANLA y el mecanismo de Obras por Impuestos (OxI), incluida su modalidad para la reconstrucción (OxI-R), en Colombia y Latinoamérica.",
      serviceType: "Consultoría tributaria para empresas — beneficios tributarios por inversión",
    }),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        logos={logosBeneficiosTributarios}
        badge="Consultoría tributaria especializada"
        h1="Consultoría en beneficios tributarios para empresas I+D+i"
        // Hero corto a proposito: dos lineas. La identidad del consultor la cubre
        // <AutoridadConsultor> justo debajo, y el detalle de entidades y regimenes
        // vive en "El problema" y en las FAQ. Sin enlaces aqui: las menciones a
        // otras paginas van en las secciones de contenido, no en el encabezado.
        intro="Estructuración y gestión de proyectos de I+D+i ante Minciencias y el CNBT, y de energía y medio ambiente ante la UPME y la ANLA. Tasa de aprobación del 93% en los proyectos gestionados."
        breadcrumbLabel="Beneficios tributarios y OxI"
        routePath="/servicios/beneficios-tributarios-innovacion"
        imagen={{
          src: "/images/servicio-tributarios-hero-v2.webp",
          alt: "Augusto Ruiz en una reunión de ingeniería sobre un prototipo tecnológico y su elegibilidad tributaria",
        }}
        hechos={hechos}
        lead={lead}
        problema={problema}
        clave={clave}
        problemaCta={problemaCta}
        pasos={pasos}
        pasosIntro={pasosIntro}
        destacado={destacado}
        seccionExtra={seccionOxi}
        comparativa={comparativa}
        faqs={faqs}
        articulosRelacionados={[
          "que-es-un-beneficio-tributario-colombia",
          "como-estructurar-proyecto-idi-beneficios-tributarios-colombia",
          "credito-fiscal-idi-amortizacion-colombia",
          "como-financiar-proyecto-innovador-colombia",
        ]}
      />
    </>
  );
}
