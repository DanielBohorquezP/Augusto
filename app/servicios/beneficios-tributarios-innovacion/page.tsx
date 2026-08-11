import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Beneficios Tributarios por Innovación, FNCE y Eficiencia Energética",
  description:
    "Estructuración y gestión de beneficios tributarios por inversión en I+D+i ante Minciencias, y en FNCE y eficiencia energética ante la UPME y la ANLA. Asesoría en Colombia.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion" },
};

const problema = [
  "Su empresa invierte en innovación, en energías renovables o en mejoras ambientales, y paga el impuesto de renta como si esas inversiones no existieran. Colombia ofrece incentivos fiscales significativos por esas mismas inversiones: hasta un 30% de descuento en renta o un crédito fiscal del 50% por proyectos de I+D+i ante Minciencias, y una deducción del 50% más exclusión de IVA por inversiones en energías renovables y eficiencia energética. La mayoría de las empresas que califican no los usa.",
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
  "Empresas que invierten en proyectos de I+D+i (nuevos productos, procesos o desarrollos tecnológicos) y no están usando los beneficios de Minciencias",
  "Empresas que invierten en energías renovables, eficiencia energética o control y mejoramiento ambiental, con inversiones certificables ante la UPME o la ANLA",
  "MiPymes que asumen que estos incentivos son solo para grandes empresas: el crédito fiscal del 50% y los TIDIS están diseñados precisamente para ellas",
  "Empresas que ya intentaron una postulación y fueron rechazadas, y necesitan un diagnóstico de la causa antes de volver a presentar",
];

const faqs = [
  {
    q: "¿Qué son los beneficios tributarios por inversión en I+D+i en Colombia?",
    a: "Son incentivos fiscales para empresas que invierten en proyectos de ciencia, tecnología e innovación calificados por el Consejo Nacional de Beneficios Tributarios (CNBT) de Minciencias. Los dos principales son: un descuento del 30% del valor invertido sobre el impuesto de renta a cargo, sin superar el 30% del impuesto a pagar y con traslado de excedentes hasta por cuatro declaraciones siguientes, y un crédito fiscal del 50% de la inversión certificada, aplicable a la compensación de impuestos nacionales; las MiPymes con créditos superiores a 1.000 UVT pueden solicitar TIDIS libremente comercializables. El requisito de fondo es que el proyecto califique como investigación, desarrollo tecnológico o innovación en alianza con un actor reconocido por el ministerio.",
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
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Beneficios tributarios"
        h1="Beneficios tributarios por inversión en I+D+i, FNCE y eficiencia energética"
        intro="Estructuración y gestión de proyectos ante Minciencias, la UPME y la ANLA, con una tasa de aprobación del 93% en los proyectos gestionados."
        breadcrumbLabel="Beneficios tributarios"
        imagen={{
          src: "/images/20221126_083837.jpg",
          alt: "Reunión institucional de gestión de proyectos de innovación con entidades del sector",
        }}
        problema={problema}
        incluye={incluye}
        incluyeNota="Tasa de aprobación en proyectos gestionados: 93%."
        metodologia={metodologia}
        paraQuien={paraQuien}
        faqs={faqs}
      />
    </>
  );
}
