import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Evaluación Financiera de Proyectos de Innovación",
  description:
    "Evaluación financiera probabilística de proyectos de innovación con simulación Monte Carlo. Más allá del VPN y la TIR tradicionales. Consultoría en Colombia y LATAM.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion" },
  openGraph: {
    title: "Evaluación Financiera de Proyectos de Innovación | Augusto Ruiz",
    description:
      "Evaluación financiera probabilística de proyectos de innovación con simulación Monte Carlo. Más allá del VPN y la TIR tradicionales.",
    url: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion",
    type: "website",
    images: ["https://www.augustoruiz.org/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación Financiera de Proyectos de Innovación | Augusto Ruiz",
    description:
      "Evaluación financiera probabilística de proyectos de innovación con simulación Monte Carlo. Más allá del VPN y la TIR tradicionales.",
  },
};

const problema = [
  "Su organización tiene sobre la mesa una decisión de inversión en innovación o tecnología. El equipo financiero corrió el modelo, el VPN dio positivo y aun así nadie en el comité está tranquilo. La razón es conocida: ese número único asume un futuro predecible, y en proyectos de innovación ese futuro no existe.",
  "El resultado son errores de selección en dos direcciones. Se aprueban proyectos que parecen viables porque las variables críticas se fijaron con valores optimistas, y terminan destruyendo valor. Y se rechazan proyectos que sí crean valor, porque el modelo no captura la flexibilidad de la decisión ni la posibilidad de validar antes de comprometer toda la inversión.",
  "El problema no es el proyecto. Es la herramienta con la que se evalúa. Una evaluación PRIME-10 reemplaza el número único por una distribución de probabilidad del valor del proyecto, identifica las variables que realmente mueven la decisión y define qué debe validarse experimentalmente antes de invertir.",
];

const incluye = [
  "Canvas de 10 cuadrantes del proyecto: los 9 del modelo de negocio más la evaluación financiera probabilística",
  "Modelo de flujo de caja con simulación Monte Carlo y distribuciones calibradas con la información disponible del proyecto",
  "Identificación de las variables de mayor incertidumbre y su efecto sobre la decisión (análisis de sensibilidad tipo tornado)",
  "Diseño del experimento crítico: hipótesis a validar, métricas y valores mínimos aceptables para la decisión go/no-go",
  "Informe ejecutivo con la recomendación de inversión sustentada",
];

const metodologia = [
  {
    title: "Problem framing",
    desc: "Definimos la decisión de inversión y construimos el canvas de 10 cuadrantes del proyecto.",
  },
  {
    title: "Readiness validation",
    desc: "Evaluamos la madurez tecnológica y comercial e identificamos las incertidumbres que afectan la decisión.",
  },
  {
    title: "Investment modeling",
    desc: "Construimos el flujo de caja, determinamos el costo de capital y corremos la simulación Monte Carlo.",
  },
  {
    title: "Market experimentation",
    desc: "Valoramos las opciones reales disponibles y diseñamos el experimento crítico con métricas de decisión.",
  },
  {
    title: "Ex post learning",
    desc: "Con los resultados del experimento, actualizamos el modelo y respondemos: seguir, escalar, pivotar o abandonar.",
  },
];

const paraQuien = [
  "Direcciones de innovación y tecnología que deben sustentar una decisión de inversión ante junta o comité",
  "CFOs y equipos financieros que evalúan proyectos de I+D+i con herramientas diseñadas para contextos predecibles",
  "Equipos de proyectos tecnológicos que necesitan un criterio claro de go/no-go antes de comprometer recursos",
  "Organizaciones que ya aprobaron o rechazaron un proyecto con base en un VPN puntual y quieren una segunda opinión metodológicamente fundamentada",
];

const faqs = [
  {
    q: "¿Por qué el VPN y la TIR no son suficientes para evaluar un proyecto de innovación?",
    a: "Porque el VPN y la TIR producen un único número que asume un futuro predecible, y en proyectos de innovación ese futuro no existe. Ambos métodos fijan las variables críticas del proyecto en valores puntuales, con frecuencia optimistas, y no capturan la flexibilidad real de la decisión ni la posibilidad de validar antes de comprometer toda la inversión. El resultado son errores de selección en dos direcciones: aprobar proyectos que destruyen valor y rechazar proyectos que sí lo crean. La evaluación probabilística no descarta el VPN: lo reemplaza como número único por una distribución de probabilidad del valor del proyecto.",
  },
  {
    q: "¿Qué es la simulación Monte Carlo y cómo se aplica a la evaluación de innovación?",
    a: "La simulación Monte Carlo es una técnica que recalcula el modelo financiero miles de veces, tomando en cada iteración valores distintos de las variables inciertas según distribuciones de probabilidad calibradas. Aplicada a un proyecto de innovación, convierte el VPN puntual en una distribución de resultados posibles: en lugar de un solo número, la organización obtiene la probabilidad de que el proyecto cree o destruya valor y la identificación de las variables que más afectan ese resultado. En PRIME-10™, esa información define qué debe validarse experimentalmente antes de invertir.",
  },
  {
    q: "¿Qué son las opciones reales en la valoración de un proyecto de inversión?",
    a: "Las opciones reales son la flexibilidad que tiene una organización para modificar una decisión de inversión a medida que se resuelve la incertidumbre: diferir, expandir, contraer, abandonar o ejecutar por etapas. Un VPN tradicional ignora esa flexibilidad y por eso puede subvalorar proyectos de innovación donde la posibilidad de validar con un piloto antes de escalar tiene valor económico propio. En la evaluación PRIME-10, la valoración de opciones reales hace parte de la fase de experimentación de mercado: se identifica si el proyecto tiene opciones relevantes y se valora la más material antes de la decisión go/no-go.",
  },
  {
    q: "¿Cuánto dura el proceso de evaluación financiera de un proyecto?",
    a: "Una evaluación PRIME-10 completa toma típicamente entre 3 y 5 días, incluyendo la recopilación de información, el análisis y la presentación de resultados. El plazo depende principalmente de la disponibilidad de la información del proyecto: cifras del modelo de negocio, supuestos de inversión y datos de mercado. Proyectos con información dispersa o incompleta pueden requerir una etapa previa de levantamiento.",
  },
  {
    q: "¿Qué necesito tener listo antes de una evaluación financiera de innovación?",
    a: "Necesita una descripción clara del proyecto y las cifras disponibles de su modelo de negocio: inversión estimada, supuestos de ingresos y costos, y el estado de madurez tecnológica y comercial. No se requiere un modelo financiero terminado; parte del trabajo de la evaluación es construirlo con rigor probabilístico. Lo que sí es indispensable es acceso a las personas que conocen el proyecto, porque las distribuciones de probabilidad se calibran con la mejor información disponible de la organización.",
  },
  {
    q: "¿Para qué tipo de proyectos aplica este servicio (etapa, sector, tamaño)?",
    a: "Aplica a proyectos de innovación e inversión tecnológica con un nivel mínimo de madurez validado, en cualquier sector; la experiencia acumulada cubre energía, alimentos, bioeconomía, manufactura y servicios. No aplica a proyectos con madurez tecnológica muy baja (TRL ≤ 3), donde la incertidumbre es tan profunda que no puede modelarse con distribuciones de probabilidad; en esos casos se recomienda primero un proceso de validación tecnológica. En cuanto al tamaño, el criterio no es el monto de la inversión sino la relevancia de la decisión: si el proyecto amerita sustentarse ante una junta o comité, amerita una evaluación probabilística.",
  },
];

export default function EvaluacionFinancieraInnovacionPage() {
  const schemas = [
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Evaluación financiera de innovación", url: "https://www.augustoruiz.org/servicios/evaluacion-financiera-innovacion" },
    ]),
    serviceSchema({
      slug: "servicios/evaluacion-financiera-innovacion",
      name: "Evaluación Financiera de Innovación",
      description:
        "Modelos probabilísticos para evaluar proyectos de innovación tecnológica superando las limitaciones del VPN y la TIR.",
      serviceType: "Evaluación Financiera de Innovación",
    }),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Evaluación financiera"
        h1="Evaluación financiera de proyectos de innovación bajo incertidumbre"
        intro="Más allá del VPN y la TIR tradicionales: evaluación probabilística con simulación Monte Carlo y opciones reales."
        breadcrumbLabel="Evaluación financiera de innovación"
        imagen={{
          src: "/images/20200117_083026.jpg",
          alt: "Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio",
        }}
        problema={problema}
        incluye={incluye}
        incluyeNota="Plazo de referencia: entre 3 y 5 días, según la información disponible del proyecto."
        metodologia={metodologia}
        paraQuien={paraQuien}
        faqs={faqs}
      />
    </>
  );
}
