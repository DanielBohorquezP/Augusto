import Link from "next/link";

/*
  Los competidores que rankean por "metodologias de innovacion" dicen tener
  metodologias propias sin nombrarlas ni acreditarlas. Esta seccion existe para
  hacer lo contrario: nombrar cada metodologia y dejar PRIME-10 al frente como
  la unica registrada ante la DNDA. Tambien es el puente interno hacia
  /prime-10, que hasta ahora solo recibia enlaces desde el banner.
*/

const metodologias = [
  {
    name: "Simulación Monte Carlo",
    description:
      "Reemplaza el VPN puntual por una distribución de probabilidad del valor del proyecto. En vez de un número que asume un futuro fijo, entrega el rango de resultados posibles y su probabilidad.",
    aplica: "Evaluación financiera",
  },
  {
    name: "Valoración de opciones reales",
    description:
      "Valora la flexibilidad de la decisión: postergar, escalar o abandonar. Es lo que el flujo de caja descontado no captura y lo que hace que se rechacen proyectos que sí crean valor.",
    aplica: "Evaluación financiera",
  },
  {
    name: "Diseño del experimento crítico",
    description:
      "Identifica la variable de mayor incertidumbre del proyecto y define qué debe validarse experimentalmente — con un piloto o un MVP — antes de comprometer la inversión completa.",
    aplica: "Evaluación financiera",
  },
  {
    name: "Canvas de modelo de negocio ampliado",
    description:
      "El Canvas de Osterwalder con un décimo cuadrante: la evaluación financiera probabilística del modelo de negocio, que el lienzo original deja fuera.",
    aplica: "Estrategia",
  },
  {
    name: "Formulación de proyectos I+D+i",
    description:
      "Estructuración técnica de proyectos según los criterios de la entidad competente — Minciencias, ANLA o UPME — para acceder a beneficios tributarios por inversión.",
    aplica: "Beneficios tributarios",
  },
  {
    name: "Adopción de IA por reto de negocio",
    description:
      "La formación parte de un reto real del área, no de un temario genérico. Cada participante termina con un artefacto funcional construido sobre las herramientas que la empresa ya tiene.",
    aplica: "Formación corporativa",
  },
];

export default function MetodologiasSection() {
  return (
    <section className="py-20 bg-muted" id="metodologias">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Metodologías
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl">
            Metodologías de innovación que aplico
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Una consultoría de innovación vale lo que valen sus metodologías. Estas
            son las que uso, con nombre propio y con el criterio para saber cuál
            aplica a cada decisión.
          </p>
        </div>

        {/* Metodologia propia, destacada */}
        <div className="card p-6 lg:p-8 border-l-4 border-l-accent mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <span className="inline-block bg-accent/10 text-accent text-xs font-heading font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Metodología propia · Registrada DNDA 2025
              </span>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                <Link href="/prime-10" className="hover:text-primary transition-colors">
                  PRIME-10™
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Metodología de evaluación financiera probabilística de proyectos de
                innovación bajo alta incertidumbre, desarrollada a partir de
                investigación doctoral en la Universidad de los Andes y registrada en
                la Dirección Nacional de Derecho de Autor de Colombia. Estructura el
                proceso en cinco fases: Problem framing, Readiness validation,
                Investment modeling, Market experimentation y Ex post learning.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/prime-10" className="btn-primary text-sm px-6 py-3">
                Ver la metodología
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Metodologias estandar que integra */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metodologias.map((m) => (
            <div key={m.name} className="card p-6 flex flex-col">
              <span className="text-[11px] font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {m.aplica}
              </span>
              <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                {m.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
