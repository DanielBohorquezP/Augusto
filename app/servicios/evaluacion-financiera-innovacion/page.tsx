import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema, serviceSchema, globalSchemaNodes } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

// "Evaluación financiera de proyectos" tiene una SERP educativa (cursos, programas y
// PDFs universitarios): Google no quiere una pagina de servicio ahi. La meta description
// apunta a "consultoria financiera para proyectos de innovacion", SERP comercial donde
// los que rankean (EY, PwC) no mencionan Monte Carlo ni opciones reales.
// El titulo/H1 ya no dicen "transferencia tecnologica": ese posicionamiento se retiro
// porque no coincidia con la URL ni con la meta description (cambio parcial previo).
export const metadata: Metadata = {
  title: { absolute: "Evaluación financiera de proyectos de innovación con PRIME-10 | Augusto Ruiz" },
  description:
    "Consultoría financiera para proyectos de innovación: evaluación probabilística con simulación Monte Carlo y opciones reales, más allá del VPN y la TIR.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion" },
  openGraph: {
    title: "Evaluación financiera de proyectos de innovación con PRIME-10 | Augusto Ruiz",
    description:
      "Consultoría financiera para proyectos de innovación: evaluación probabilística con simulación Monte Carlo y opciones reales, más allá del VPN y la TIR.",
    url: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación financiera de proyectos de innovación con PRIME-10 | Augusto Ruiz",
    description:
      "Consultoría financiera para proyectos de innovación: evaluación probabilística con simulación Monte Carlo y opciones reales, más allá del VPN y la TIR.",
  },
};

const lead = "Su organización tiene sobre la mesa una decisión de inversión en innovación o tecnología. El equipo financiero corrió el modelo, el VPN dio positivo y aun así nadie en el comité está tranquilo. La razón es conocida: ese número único asume un futuro predecible, y en proyectos de innovación ese futuro no existe.";

const problema = ["El resultado son errores de selección en dos direcciones. Se aprueban proyectos que parecen viables porque las variables críticas se fijaron con valores optimistas, y terminan destruyendo valor. Y se rechazan proyectos que sí crean valor, porque el modelo no captura la flexibilidad de la decisión ni la posibilidad de validar antes de comprometer toda la inversión."];

const clave = "El problema no es el proyecto: es la herramienta con la que se evalúa. PRIME-10 reemplaza el número único por una distribución de probabilidad, identifica las variables que mueven la decisión y define qué validar antes de invertir.";

const hechos = [{"valor": "3–5 días", "etiqueta": "Plazo de referencia de la evaluación"}, {"valor": "PRIME-10™", "etiqueta": "Metodología registrada DNDA 2025"}, {"valor": "Go / no-go", "etiqueta": "Decisión sustentada antes de invertir"}];

const pasosIntro = "Cinco pasos con la metodología PRIME-10™, desde plantear la decisión hasta tener una recomendación de inversión sustentada.";

const destacado = { valor: "3–5 días", etiqueta: "plazo de referencia, según la información disponible del proyecto" };

const problemaCta = "¿Tiene una decisión de inversión sobre la mesa? Conversemos antes de comprometer el capital.";

const pasos = [
  { titulo: "Plantear la decisión", desc: "Definimos la decisión de inversión y construimos el canvas de 10 cuadrantes del proyecto." },
  { titulo: "Validar la madurez", desc: "Evaluamos la madurez tecnológica y comercial e identificamos las incertidumbres que mueven la decisión." },
  { titulo: "Modelar la inversión", desc: "Flujo de caja con simulación Monte Carlo y análisis de sensibilidad tipo tornado." },
  { titulo: "Diseñar el experimento crítico", desc: "Valoramos las opciones reales y definimos hipótesis, métricas y umbrales go/no-go." },
  { titulo: "Decidir con evidencia", desc: "Informe ejecutivo con la recomendación: seguir, escalar, pivotar o abandonar." },
];

// La SERP de "consultoria financiera para proyectos de innovacion" esta ocupada por
// firmas de FORMULACION de proyectos (marco logico, postulacion ante Minciencias).
// Ninguna menciona evaluacion bajo incertidumbre. Esta tabla marca esa diferencia.
const comparativa = {
  titulo: "Formular un proyecto no es lo mismo que evaluar si conviene hacerlo",
  columnaGeneral: "Formulación de proyectos",
  columnaEspecializada: "Evaluación de la decisión de inversión",
  filas: [
    {
      criterio: "Qué produce",
      general: "Un proyecto documentado para postular.",
      especializada: "Una decisión: invertir, no invertir o validar primero.",
    },
    {
      criterio: "Qué pregunta responde",
      general: "¿Cómo lo presento para que lo aprueben?",
      especializada: "¿Merece la inversión, en qué monto y con qué condiciones?",
    },
    {
      criterio: "Cuándo ocurre",
      general: "Cuando ya se decidió hacer el proyecto.",
      especializada: "Antes de decidir, cuando cambiar de rumbo es barato.",
    },
    {
      criterio: "Si el proyecto no conviene",
      general: "Se presenta igual.",
      especializada: "Se detecta antes de comprometer el capital.",
    },
    {
      criterio: "Herramientas",
      general: "Marco lógico, presupuesto y cronograma.",
      especializada: "Monte Carlo, opciones reales y experimento crítico.",
    },
  ],
  etiquetas: { general: "Lo que suele contratarse", especializada: "Lo que decide la inversión" },
  pasosTitulo: "El orden correcto:",
  pasos: ["Evaluar si el proyecto merece la inversión", "Formularlo para postularlo"] as [string, string],
  cta: "¿Quiere evaluar su proyecto antes de invertir?",
};

const faqs = [
  {
    q: "¿Cuál es la diferencia entre formular un proyecto de innovación y evaluarlo financieramente?",
    a: "Formular es documentar el proyecto para que una entidad lo apruebe: marco lógico, objetivos, cronograma, presupuesto e indicadores, en el formato que exige Minciencias, una convocatoria o un inversionista. Evaluar financieramente es responder una pregunta anterior y distinta: si ese proyecto merece la inversión, en qué monto y bajo qué condiciones. Son dos oficios complementarios que el mercado suele confundir, porque la mayoría de las consultorías de innovación en Colombia se dedica a formular. La consecuencia práctica es que un proyecto puede estar impecablemente formulado, ser aprobado, y aun así destruir valor para la empresa: la formulación no evalúa la conveniencia económica, la documenta. El orden correcto es evaluar primero y formular después, cuando ya se sabe que el proyecto vale la pena.",
  },
  {
    q: "¿Por qué el VPN y la TIR no son suficientes para evaluar un proyecto de innovación?",
    a: "Porque el VPN y la TIR producen un único número que asume un futuro predecible, y en proyectos de innovación ese futuro no existe. Ambos métodos fijan las variables críticas del proyecto en valores puntuales, con frecuencia optimistas, y no capturan la flexibilidad real de la decisión ni la posibilidad de validar antes de comprometer toda la inversión. El resultado son errores de selección en dos direcciones: aprobar proyectos que destruyen valor y rechazar proyectos que sí lo crean. La evaluación probabilística no descarta el VPN: lo reemplaza como número único por una distribución de probabilidad del valor del proyecto.",
  },
  {
    q: "¿Qué es la simulación Monte Carlo y cómo se aplica a la evaluación de innovación?",
    a: "La simulación Monte Carlo es una técnica que recalcula el modelo financiero miles de veces, tomando en cada iteración valores distintos de las variables inciertas según distribuciones de probabilidad calibradas. Aplicada a un proyecto de innovación, convierte el VPN puntual en una distribución de resultados posibles: en lugar de un solo número, la organización obtiene la probabilidad de que el proyecto cree o destruya valor y la identificación de las variables que más afectan ese resultado. En PRIME-10™, esa información define qué debe validarse experimentalmente antes de invertir.",
  },
  {
    q: "¿Cuánto dura el proceso de evaluación financiera de un proyecto?",
    a: "Una evaluación PRIME-10 completa toma típicamente entre 3 y 5 días, incluyendo la recopilación de información, el análisis y la presentación de resultados. El plazo depende principalmente de la disponibilidad de la información del proyecto: cifras del modelo de negocio, supuestos de inversión y datos de mercado. Proyectos con información dispersa o incompleta pueden requerir una etapa previa de levantamiento.",
  },
  {
    q: "¿Para qué tipo de proyectos aplica este servicio (etapa, sector, tamaño)?",
    a: "Aplica a proyectos de innovación e inversión tecnológica con un nivel mínimo de madurez validado, en cualquier sector; la experiencia acumulada cubre energía, alimentos, bioeconomía, manufactura y servicios. No aplica a proyectos con madurez tecnológica muy baja (TRL ≤ 3), donde la incertidumbre es tan profunda que no puede modelarse con distribuciones de probabilidad; en esos casos se recomienda primero un proceso de validación tecnológica. En cuanto al tamaño, el criterio no es el monto de la inversión sino la relevancia de la decisión: si el proyecto amerita sustentarse ante una junta o comité, amerita una evaluación probabilística.",
  },
];

export default function EvaluacionFinancieraInnovacionPage() {
  const schemas = [
    ...globalSchemaNodes,
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Evaluación financiera de innovación", url: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion" },
    ]),
    serviceSchema({
      slug: "servicios/evaluacion-financiera-innovacion",
      name: "Evaluación financiera de proyectos de innovación con PRIME-10",
      description:
        "Evaluación financiera de proyectos de innovación y tecnología bajo incertidumbre, con modelos probabilísticos, simulación Monte Carlo y valoración de opciones reales, superando las limitaciones del VPN y la TIR.",
      serviceType: "Evaluación financiera de proyectos de innovación",
    }),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Evaluación financiera de innovación"
        h1="Evaluación financiera de proyectos de innovación bajo incertidumbre"
        intro="Evaluación financiera de proyectos de innovación y tecnología bajo incertidumbre, donde el VPN y la TIR se quedan cortos. Con la metodología PRIME-10™: modelos probabilísticos con simulación Monte Carlo, valoración de opciones reales y diseño del experimento crítico antes de comprometer la inversión."
        whatsappTema="Evaluación financiera de proyectos de innovación con PRIME-10"
        comparativa={comparativa}
        breadcrumbLabel="Evaluación financiera de innovación"
        routePath="/servicios/evaluacion-financiera-innovacion"
        imagen={{
          src: "/images/servicio-evaluacion-hero-v2.webp",
          alt: "Augusto Ruiz revisando con un equipo directivo el análisis de una decisión de inversión",
        }}
        hechos={hechos}
        lead={lead}
        problema={problema}
        clave={clave}
        problemaCta={problemaCta}
        pasos={pasos}
        pasosIntro={pasosIntro}
        destacado={destacado}
        faqs={faqs}
        articulosRelacionados={[
          "tasa-interna-de-retorno-tir-que-es-y-por-que-falla-en-innovacion",
          "indicadores-financieros-evaluar-proyecto-innovacion-colombia",
          "simulacion-monte-carlo-que-es-y-cuando-usarla",
          "analisis-de-sensibilidad-que-es-y-como-hacerlo",
          "monte-carlo-ia-generativa-lecciones-proyectos-innovacion",
          "simulacion-monte-carlo-evaluacion-innovacion",
          "que-es-transferencia-tecnologica-empresas",
          "metodologias-de-innovacion-empresas",
          "gestion-de-la-innovacion-sistema-empresa-tecnologica",
          "asesoria-proyectos-innovacion-colombia-donde-buscar",
        ]}
      />
    </>
  );
}
