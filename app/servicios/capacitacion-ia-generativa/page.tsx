import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import ServicioDetalle from "@/components/sections/ServicioDetalle";

export const metadata: Metadata = {
  title: "Capacitación en IA Generativa para Empresas",
  description:
    "Programas de capacitación en inteligencia artificial generativa para equipos corporativos en Colombia. Diseño por área y reto de negocio, con ROI medible.",
  alternates: { canonical: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa" },
};

const problema = [
  "Su empresa ya pagó las licencias. Copilot, ChatGPT, Gemini o Claude están disponibles para los equipos, y sin embargo el uso real es bajo, superficial o desigual: algunas personas las usan para redactar correos, la mayoría no las usa, y nadie las ha conectado con los problemas que de verdad consumen tiempo en cada área.",
  "El error habitual es tratar la adopción de IA como un curso genérico de herramientas. Una capacitación igual para todos, con ejemplos ajenos al negocio, produce asistentes entretenidos y cero cambio en la forma de trabajar. La semana siguiente, cada quien vuelve a sus métodos de siempre.",
  "La adopción funciona cuando se invierte la lógica: primero el reto de negocio, después la herramienta. Cada área identifica problemas concretos de su operación y la formación se diseña alrededor de ellos, con las herramientas que la empresa ya tiene. El resultado no es un equipo de desarrollo: son personas con criterio para usar IA en su trabajo diario.",
];

const incluye = [
  "Diagnóstico previo de retos de negocio por área, antes de la primera sesión",
  "Formación contextualizada al lenguaje y la dinámica de cada área o nivel jerárquico",
  "Trabajo sobre las herramientas de IA que la empresa ya tiene disponibles (Copilot, ChatGPT, Gemini, Claude)",
  "Para áreas de I+D+i: incorporación de herramientas especializadas y enfoque basado en método científico",
  "Un artefacto funcional construido por cada participante, con mentoría durante el proceso y demo day de cierre",
];

const metodologia = [
  {
    title: "Diagnóstico de retos",
    desc: "Antes de cada sesión, el área identifica retos de negocio concretos que podrían resolverse con IA.",
  },
  {
    title: "Fundamentos aplicados",
    desc: "La sesión parte de las generalidades de IA generativa y avanza rápidamente hacia las herramientas que ya usa la empresa, aplicadas al reto específico.",
  },
  {
    title: "Construcción del artefacto",
    desc: "Cada participante desarrolla una solución funcional para su propio problema real, con mentoría durante el proceso.",
  },
  {
    title: "Demo day",
    desc: "El cierre es una presentación de los artefactos construidos: cada persona muestra qué resolvió y cómo lo va a usar al día siguiente.",
  },
];

const paraQuien = [
  "Equipos de cualquier área funcional (comercial, financiera, operaciones, talento humano) que ya tienen acceso a herramientas de IA pero no las han incorporado a su trabajo diario",
  "Niveles directivos que necesitan criterio propio para decidir dónde la IA generativa agrega valor en su organización y dónde no",
  "Áreas de I+D+i que requieren un enfoque especializado, con herramientas de investigación y método científico",
  "Organizaciones que ya intentaron capacitaciones genéricas en IA sin cambio observable en la forma de trabajar",
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
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Inicio", url: "https://www.augustoruiz.org" },
      { name: "Servicios", url: "https://www.augustoruiz.org/servicios" },
      { name: "Capacitación en IA generativa", url: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa" },
    ]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <ServicioDetalle
        badge="Formación corporativa"
        h1="Formación corporativa en IA generativa aplicada a tu negocio"
        intro="Capacitación diseñada por área y reto de negocio, con las herramientas de IA que tu empresa ya usa."
        breadcrumbLabel="Capacitación en IA generativa"
        imagen={{
          src: "/images/IMG_5823.png",
          alt: "Sesión de trabajo con un equipo frente a un tablero de estrategia e innovación",
        }}
        problema={problema}
        incluye={incluye}
        metodologia={metodologia}
        paraQuien={paraQuien}
        faqs={faqs}
      />
    </>
  );
}
