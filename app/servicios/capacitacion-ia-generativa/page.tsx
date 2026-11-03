import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema, serviceSchema, globalSchemaNodes } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Capacitación en IA Generativa para Empresas",
  description:
    "Programas de capacitación en inteligencia artificial generativa para equipos corporativos en Colombia. Diseño por área y reto de negocio, con ROI medible.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa" },
  openGraph: {
    title: "Capacitación en IA Generativa para Empresas | Augusto Ruiz",
    description:
      "Programas de capacitación en inteligencia artificial generativa para equipos corporativos en Colombia. Diseño por área y reto de negocio, con ROI medible.",
    url: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa",
    type: "website",
    images: [{ url: "https://www.augustoruiz.org/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacitación en IA Generativa para Empresas | Augusto Ruiz",
    description:
      "Programas de capacitación en inteligencia artificial generativa para equipos corporativos en Colombia. Diseño por área y reto de negocio, con ROI medible.",
  },
};

const lead = "Su empresa ya pagó las licencias. Copilot, ChatGPT, Gemini o Claude están disponibles para los equipos, y sin embargo el uso real es bajo, superficial o desigual: algunas personas las usan para redactar correos, la mayoría no las usa, y nadie las ha conectado con los problemas que de verdad consumen tiempo en cada área.";

const problema = ["El error habitual es tratar la adopción de IA como un curso genérico de herramientas. Una capacitación igual para todos, con ejemplos ajenos al negocio, produce asistentes entretenidos y cero cambio en la forma de trabajar. La semana siguiente, cada quien vuelve a sus métodos de siempre."];

const clave = "Primero el reto de negocio, después la herramienta. El resultado no es un equipo de desarrollo: son personas con criterio para usar IA en su trabajo diario.";

const hechos = [{"valor": "Por área y reto", "etiqueta": "No existen dos programas iguales"}, {"valor": "Copilot · ChatGPT · Gemini · Claude", "etiqueta": "Las herramientas que ya tiene"}, {"valor": "1 artefacto", "etiqueta": "Por participante, con demo day"}];

const pasosIntro = "Cuatro pasos, del reto de negocio a una solución funcional que cada persona usa al día siguiente.";

const destacado = { valor: "1 artefacto", etiqueta: "funcional por participante, con mentoría y demo day" };

const problemaCta = "¿Sus equipos tienen las licencias pero no las usan? Diseñemos el programa para su empresa.";

const pasos = [
  { titulo: "Diagnóstico de retos", desc: "Antes de la primera sesión, cada área identifica retos de negocio concretos que la IA podría resolver." },
  { titulo: "Formación a la medida", desc: "Contextualizada al lenguaje de cada área y nivel, con Copilot, ChatGPT, Gemini o Claude. En I+D+i, con herramientas especializadas y método científico." },
  { titulo: "Construcción del artefacto", desc: "Cada participante crea una solución funcional para su propio problema, con mentoría durante el proceso." },
  { titulo: "Demo day", desc: "Cada persona muestra qué resolvió y cómo lo va a usar al día siguiente." },
];

const faqs = [
  {
    q: "¿Qué habilidades necesita mi equipo para trabajar con IA generativa?",
    a: "Ninguna habilidad técnica previa: el programa está diseñado para equipos y líderes de cualquier área funcional, independientemente de su nivel técnico. Lo que sí se requiere es conocimiento del propio trabajo, porque cada sesión parte de un reto de negocio concreto del área. Las habilidades que el programa desarrolla son las que marcan la diferencia en el uso productivo de IA: formular bien un problema, dar contexto e instrucciones precisas a la herramienta, evaluar críticamente los resultados y saber cuándo la IA agrega valor y cuándo no.",
  },
  {
    q: "¿Cuánto cuesta una capacitación en IA generativa para empresas en Colombia?",
    a: "El programa se dimensiona según el número de áreas involucradas, la cantidad de sesiones y el nivel de acompañamiento en la construcción de artefactos. El primer paso es una conversación de diagnóstico para definir el alcance y entregar una propuesta a la medida.",
  },
  {
    q: "¿La capacitación se adapta por área o rol dentro de la empresa?",
    a: "Sí, la adaptación por área y nivel jerárquico es la base del diseño del programa, no un ajuste opcional. Antes de cada sesión, el área identifica retos de negocio concretos que podrían resolverse con IA, y la formación se contextualiza al lenguaje y la dinámica de esa área. Un equipo comercial trabaja sobre sus propios casos comerciales; un área de I+D+i trabaja con herramientas especializadas y enfoque de método científico. Por eso no existen dos programas iguales.",
  },
  {
    q: "¿Qué diferencia hay entre un curso genérico de IA y una formación por reto de negocio?",
    a: "La diferencia está en el punto de partida: un curso genérico enseña herramientas con ejemplos ajenos a la empresa; una formación por reto de negocio parte de un problema real del área y usa las herramientas para resolverlo. En el formato genérico, el participante termina con conocimiento general que rara vez aplica. En el formato por reto, cada participante termina con un artefacto funcional que puede usar al día siguiente en su trabajo, construido con las herramientas que la empresa ya tiene (Copilot, ChatGPT, Gemini o Claude). El objetivo no es saber de IA: es trabajar distinto.",
  },
];

export default function CapacitacionIaGenerativaPage() {
  const schemas = [
    ...globalSchemaNodes,
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Capacitación en IA generativa", url: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa" },
    ]),
    serviceSchema({
      slug: "servicios/capacitacion-ia-generativa",
      name: "IA Generativa Aplicada",
      description:
        "Estrategia de adopción e implementación de IA generativa en procesos organizacionales con ROI medible.",
      serviceType: "Formación Corporativa en IA Generativa",
    }),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Formación corporativa"
        h1="Capacitación en IA generativa para empresas"
        intro="Formación corporativa en IA generativa aplicada a tu negocio: diseñada por área y por reto concreto, con las herramientas de IA que tu empresa ya usa."
        breadcrumbLabel="Capacitación en IA generativa"
        routePath="/servicios/capacitacion-ia-generativa"
        imagen={{
          src: "/images/servicio-ia-hero-v2.webp",
          alt: "Augusto Ruiz con participantes de un workshop de IA generativa para equipos corporativos",
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
          "desafios-adopcion-ia-generativa-empresas-colombianas",
          "monte-carlo-ia-generativa-lecciones-proyectos-innovacion",
          "gestion-de-la-innovacion-sistema-empresa-tecnologica",
        ]}
      />
    </>
  );
}
