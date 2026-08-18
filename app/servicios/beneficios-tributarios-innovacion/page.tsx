import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

// El template de app/layout.tsx anade " | Augusto Ruiz" (15 caracteres). Aqui se usa
// `absolute` para prescindir de ese sufijo: es la unica forma de que quepan las dos
// familias de terminos ("consultoria tributaria para empresas" + "beneficios I+D+i")
// dentro del limite de 65 caracteres que sigue el resto del sitio.
export const metadata: Metadata = {
  title: { absolute: "Consultoría Tributaria para Empresas en Beneficios I+D+i" },
  description:
    "Consultoría tributaria para empresas en Colombia especializada en beneficios tributarios: proyectos de I+D+i ante Minciencias y FNCE ante la UPME y la ANLA.",
  keywords: [
    "consultoría tributaria para empresas",
    "consultoría tributaria empresarial Colombia",
    "consultoría en beneficios tributarios",
    "asesoría tributaria especializada",
    "beneficios tributarios I+D+i",
    "consultor beneficios tributarios Colombia",
  ],
  alternates: { canonical: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
  openGraph: {
    title: "Consultoría Tributaria para Empresas en Beneficios I+D+i | Augusto Ruiz",
    description:
      "Consultoría tributaria para empresas en Colombia especializada en beneficios tributarios: proyectos de I+D+i ante Minciencias y FNCE ante la UPME y la ANLA.",
    url: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion",
    type: "website",
    images: ["https://www.augustoruiz.org/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría Tributaria para Empresas en Beneficios I+D+i | Augusto Ruiz",
    description:
      "Consultoría tributaria para empresas en Colombia especializada en beneficios tributarios: proyectos de I+D+i ante Minciencias y FNCE ante la UPME y la ANLA.",
  },
};

const problema = [
  "Su empresa invierte en innovación, en energías renovables o en mejoras ambientales, y paga el impuesto de renta como si esas inversiones no existieran. Colombia ofrece incentivos fiscales significativos por esas mismas inversiones: hasta un 30% de descuento en renta o un crédito fiscal del 50% por proyectos de I+D+i ante Minciencias, y una deducción del 50% más exclusión de IVA por inversiones en energías renovables y eficiencia energética. La mayoría de las empresas que califican no los usa.",
  "Y casi siempre ocurre con un contador, un revisor fiscal o una firma tributaria ya trabajando en la empresa. No es negligencia de ellos: la consultoría tributaria general se ocupa del cumplimiento —renta, IVA, precios de transferencia, requerimientos de la DIAN— y estos beneficios no se ganan en la declaración, sino antes, en la formulación técnica del proyecto ante la entidad que lo certifica. Son dos oficios distintos que rara vez viven en la misma persona.",
  "Las razones se repiten: no saben que su proyecto puede calificar, asumen que el trámite es solo para grandes empresas o intentaron una postulación sin la formulación técnica que exige la misma y fueron rechazadas. El resultado es el mismo: dinero que la ley permite recuperar y que se queda sin reclamar, año tras año.",
  "El problema rara vez es la elegibilidad del proyecto. Es la formulación. Un proyecto real de innovación mal estructurado se rechaza igual que uno que no califica. Por eso este servicio empieza por la pregunta correcta: antes de cualquier compromiso formal, establecer si su proyecto califica y bajo qué régimen.",
];

const incluye = [
  "Evaluación de elegibilidad del proyecto antes de cualquier compromiso formal: si califica, bajo qué régimen y por cuál beneficio",
  "Estructuración técnica y formulación del proyecto según la tipología del CNBT o los requisitos de la entidad certificadora",
  "Gestión ante la entidad competente: Minciencias para I+D+i; ANLA y UPME para inversiones ambientales y energéticas",
  "Preparación de la documentación requerida para la postulación o la certificación",
  "Seguimiento al proceso hasta la resolución",
];

const comparativa = {
  titulo: "Consultoría tributaria general y consultoría en beneficios: en qué se diferencian",
  columnaGeneral: "Consultoría tributaria general",
  columnaEspecializada: "Consultoría en beneficios tributarios",
  filas: [
    {
      criterio: "Qué resuelve",
      general: "Cumplimiento y planeación fiscal: renta, IVA, precios de transferencia, requerimientos de la DIAN, revisoría fiscal.",
      especializada: "Que una inversión concreta en I+D+i, energía o medio ambiente se convierta en un beneficio tributario efectivo.",
    },
    {
      criterio: "Dónde se decide el resultado",
      general: "En la declaración: en la correcta aplicación de la norma sobre hechos ya ocurridos.",
      especializada: "En la formulación técnica del proyecto ante la entidad certificadora, meses antes de declarar.",
    },
    {
      criterio: "Ante quién se gestiona",
      general: "Ante la DIAN.",
      especializada: "Ante Minciencias y el CNBT (I+D+i), o ante la UPME y la ANLA (FNCE, eficiencia energética, ambiental). La DIAN entra después, con la certificación ya emitida.",
    },
    {
      criterio: "Cuándo se activa",
      general: "De forma permanente, con el calendario tributario.",
      especializada: "Con la convocatoria vigente o el cronograma de la inversión: fuera de esa ventana, el beneficio del año se pierde.",
    },
    {
      criterio: "Qué perfil lo ejecuta",
      general: "Contador, revisor fiscal o abogado tributarista.",
      especializada: "Perfil técnico en gestión de innovación o ingeniería, capaz de sustentar la novedad y la incertidumbre del proyecto ante evaluadores técnicos.",
    },
  ],
  nota: "Los dos servicios son complementarios y conviven sin problema: este servicio no reemplaza a su contador ni a su firma tributaria, se ocupa del tramo que ellos normalmente no cubren.",
};

const metodologia = [
  {
    title: "Evaluación de elegibilidad",
    desc: "Analizamos el proyecto o la inversión y establecemos si califica, bajo qué régimen (Minciencias, ANLA o UPME) y por cuál beneficio conviene postular.",
  },
  {
    title: "Estructuración y formulación",
    desc: "Formulamos el proyecto según los criterios de la entidad: tipología del CNBT para I+D+i, o requisitos técnicos de certificación para inversiones energéticas y ambientales.",
  },
  {
    title: "Postulación y gestión",
    desc: "Presentamos el proyecto por el canal correspondiente (plataforma SIGP en el caso de Minciencias) y gestionamos el proceso ante la entidad.",
  },
  {
    title: "Seguimiento hasta la resolución",
    desc: "Acompañamos las subsanaciones y requerimientos hasta la decisión final y la obtención del soporte del beneficio.",
  },
];

const paraQuien = [
  "Empresas que ya tienen contador, revisor fiscal o firma de consultoría tributaria, pero ningún especialista en la formulación técnica del proyecto ante Minciencias, la UPME o la ANLA: este servicio complementa al asesor tributario, no lo reemplaza",
  "Empresas que invierten en proyectos de I+D+i (nuevos productos, procesos o desarrollos tecnológicos) y no están usando los beneficios de Minciencias",
  "Empresas que invierten en energías renovables, eficiencia energética o control y mejoramiento ambiental, con inversiones certificables ante la UPME o la ANLA",
  "MiPymes que asumen que estos incentivos son solo para grandes empresas: el crédito fiscal del 50% y los TIDIS están diseñados precisamente para ellas",
  "Empresas que ya intentaron una postulación y fueron rechazadas, y necesitan un diagnóstico de la causa antes de volver a presentar",
];

const faqs = [
  {
    q: "¿Qué es una consultoría tributaria para empresas y cuándo conviene una especializada?",
    a: "Una consultoría tributaria para empresas es el servicio profesional que ayuda a una organización a gestionar sus obligaciones e incentivos fiscales. En la práctica se divide en dos oficios distintos. El primero es el de cumplimiento y planeación general: declaración de renta, IVA, precios de transferencia, requerimientos de la DIAN, revisoría fiscal. Lo prestan firmas contables, auditoras y boutiques legales, y toda empresa lo necesita de forma permanente. El segundo es el de beneficios tributarios por inversión: identificar qué proyectos de la empresa califican para un incentivo, formularlos técnicamente y gestionarlos ante la entidad que los certifica —Minciencias y el CNBT para I+D+i, la UPME y la ANLA para energía y medio ambiente—. Conviene una consultoría especializada cuando la empresa invierte en desarrollo tecnológico, energías renovables o eficiencia energética, porque ahí la aprobación no se decide en la declaración de renta sino en la formulación del proyecto, meses antes, con criterios técnicos que no son de naturaleza contable. Los dos servicios son complementarios: uno no sustituye al otro.",
  },
  {
    q: "¿Puedo trabajar con mi contador o mi firma tributaria actual?",
    a: "Sí, y es lo habitual. Este servicio no reemplaza a su contador, a su revisor fiscal ni a su firma de consultoría tributaria: se ocupa de la parte que ellos normalmente no cubren, que es la formulación técnica del proyecto y su gestión ante Minciencias, la UPME o la ANLA. El reparto natural del trabajo es este: yo estructuro y postulo el proyecto ante la entidad certificadora, y su asesor tributario aplica el beneficio ya certificado en la declaración de renta y lo soporta ante la DIAN. De hecho, buena parte de los proyectos llegan por recomendación del propio contador de la empresa, que identifica la oportunidad pero no gestiona la certificación.",
  },
  {
    q: "¿Quién ofrece consultoría en beneficios tributarios en Colombia?",
    a: "Augusto Ruiz presta asesoría especializada en beneficios tributarios en Colombia para empresas que invierten en I+D+i (régimen de Minciencias y el CNBT) y en energías renovables, eficiencia energética o control ambiental (régimen de la UPME y la ANLA). Es investigador doctoral en gestión de innovación tecnológica de la Universidad de los Andes y profesor invitado en posgrados de Uniandes, EAFIT, UIS, Universidad del Bosque y Universidad de América. La tasa de aprobación es del 93% en los proyectos gestionados en su práctica actual de consultoría. El servicio cubre todo el territorio colombiano y empieza siempre por una evaluación de elegibilidad, antes de cualquier compromiso formal.",
  },
  {
    q: "¿Cómo elijo un consultor de beneficios tributarios?",
    a: "Cuatro criterios prácticos. Primero, que el foco esté en la formulación técnica del proyecto ante la entidad certificadora (Minciencias, UPME, ANLA) y no solo en el tratamiento contable del beneficio una vez aprobado: la aprobación se decide en la formulación. Segundo, que haga un diagnóstico de elegibilidad antes de cobrar por una postulación, porque un proyecto que no encaja en la tipología del CNBT no se salva con ajustes de forma. Tercero, que conozca los dos regímenes —I+D+i y FNCE/ambiental— y sepa cuál inversión conviene postular por cuál, ya que una misma inversión no puede generar doble beneficio. Cuarto, que declare su experiencia de forma verificable: convocatorias en las que ha participado, tipos de proyecto y resultados, no promesas de aprobación garantizada.",
  },
  {
    q: "¿En qué se diferencia esta consultoría en beneficios tributarios de la de una firma tributaria general?",
    a: "Las firmas de consultoría tributaria general (auditoras, boutiques legales) resuelven planeación fiscal amplia: renta, IVA, precios de transferencia. Esta es una asesoría especializada específicamente en beneficios tributarios por I+D+i ante Minciencias y por FNCE/eficiencia energética ante la UPME y la ANLA — el foco es la formulación técnica del proyecto ante la entidad certificadora, que es donde se decide la aprobación, no la parte contable del beneficio una vez aprobado.",
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
    q: "¿Cuál es la diferencia entre los beneficios tributarios de Minciencias y los de inversiones FNCE y eficiencia energética?",
    a: "La diferencia está en qué se premia y quién califica. Minciencias premia proyectos de investigación, desarrollo tecnológico e innovación: el CNBT califica el proyecto y el beneficio principal es el descuento del 30% o el crédito fiscal del 50%. El régimen FNCE y eficiencia energética premia inversiones en activos: equipos y obras para energías renovables o gestión eficiente de la energía, con certificación de la UPME y la ANLA, y el beneficio principal es la deducción del 50% de la inversión más la exclusión de IVA y la exención arancelaria. Un mismo proyecto empresarial puede tener componentes de ambos mundos: la clave es estructurar qué inversión se postula por cuál régimen.",
  },
  {
    q: "¿Qué documentos se necesitan para postular a un beneficio tributario?",
    a: "Depende del régimen. Ante Minciencias: el proyecto formulado según la tipología del CNBT (descripción técnica, presupuesto de inversiones, cronograma), la evidencia de la alianza con el actor reconocido y la postulación por la plataforma SIGP dentro de la convocatoria vigente. Ante la UPME y la ANLA: la documentación técnica que acredite que los equipos, servicios y obras corresponden al proyecto de FNCE o de eficiencia energética, para obtener la certificación que soporta el beneficio ante la DIAN. En ambos regímenes, la formulación técnica es donde se decide la aprobación: una inversión real mal documentada se rechaza igual que una que no califica.",
  },
  {
    q: "¿Una misma empresa puede acceder a ambos beneficios?",
    a: "Sí, una misma empresa puede usar los dos regímenes, siempre que sean inversiones distintas. La restricción es sobre el hecho económico, no sobre la empresa: una misma inversión no puede generar doble beneficio tributario. En la práctica es un escenario frecuente: una empresa industrial puede postular su proyecto de I+D+i ante Minciencias y, en paralelo, obtener la deducción del 50% por la inversión en su sistema de energía solar certificada ante la UPME. La estructuración correcta de qué inversión va por cuál régimen es parte central del acompañamiento.",
  },
  {
    q: "¿Qué pasa si mi proyecto es rechazado, se puede volver a postular?",
    a: "Sí. Un proyecto no aprobado puede ajustarse y presentarse en una convocatoria posterior; el rechazo no inhabilita a la empresa. Lo determinante es diagnosticar la causa: si el proyecto no encaja en la tipología del CNBT, ningún ajuste de forma lo salvará; si el problema fue de formulación o soporte documental, la corrección es viable. Por eso el primer paso del servicio es una evaluación de elegibilidad antes de cualquier compromiso formal.",
  },
];

export default function BeneficiosTributariosInnovacionPage() {
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Beneficios tributarios", url: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
    ]),
    serviceSchema({
      slug: "servicios/beneficios-tributarios-innovacion",
      name: "Consultoría Tributaria para Empresas en Beneficios Tributarios I+D+i, FNCE y Eficiencia Energética",
      description:
        "Consultoría tributaria para empresas especializada en beneficios tributarios: identificación, formulación y gestión de proyectos de I+D+i ante Minciencias y de FNCE, eficiencia energética y control ambiental ante la UPME y la ANLA, en Colombia y Latinoamérica.",
      serviceType: "Consultoría tributaria para empresas — beneficios tributarios por inversión",
    }),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Consultoría tributaria especializada"
        h1="Consultoría tributaria para empresas: beneficios por I+D+i, FNCE y eficiencia energética"
        intro="Augusto Ruiz presta consultoría tributaria para empresas en Colombia, especializada en beneficios tributarios por inversión: estructuración y gestión de proyectos de I+D+i ante Minciencias y el CNBT, y de FNCE, eficiencia energética y control ambiental ante la UPME y la ANLA. La tasa de aprobación es del 93% en los proyectos gestionados en mi práctica actual de consultoría."
        breadcrumbLabel="Beneficios tributarios"
        imagen={{
          src: "/images/20221126_083837.jpg",
          alt: "Reunión institucional de gestión de proyectos de innovación con entidades del sector",
        }}
        problema={problema}
        incluye={incluye}
        incluyeNota="Tasa de aprobación en proyectos gestionados: 93%."
        comparativa={comparativa}
        metodologia={metodologia}
        paraQuien={paraQuien}
        faqs={faqs}
      />
    </>
  );
}
