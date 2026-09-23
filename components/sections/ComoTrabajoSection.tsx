import { whatsappUrl } from "@/lib/site";

// Lista ordenada (<ol>) a proposito: los pasos numerados son el formato que
// Google y los motores de IA extraen con mas facilidad. Los datos (48 h
// habiles, evaluacion de elegibilidad antes del compromiso formal) son los que
// ya publica el sitio; no se declara modalidad de precio.
const steps = [
  {
    title: "Conversación inicial",
    description:
      "Me escribes por WhatsApp o por el formulario con la decisión o el proyecto que tienes entre manos. Respondo en un máximo de 48 horas hábiles.",
  },
  {
    title: "Diagnóstico antes de cualquier compromiso",
    description:
      "Qué decisión hay que tomar, cuál es la variable de mayor incertidumbre y, si hay un beneficio tributario en juego, si el proyecto califica y bajo qué régimen.",
  },
  {
    title: "Propuesta a la medida",
    description:
      "Alcance, entregables, tiempos y cotización definidos antes de empezar, según el servicio: evaluación PRIME-10, formulación del proyecto o programa de formación.",
  },
  {
    title: "Ejecución y transferencia",
    description:
      "Entrego el modelo, la postulación o el programa, y la metodología queda en tu equipo para que pueda usarla de forma autónoma.",
  },
];

export default function ComoTrabajoSection() {
  return (
    <section className="py-20 bg-muted" id="como-trabajo">
      <div className="container-site max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Proceso
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl">
            Cómo trabajo: de la consulta a la decisión
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="card p-6 flex flex-col">
              <span
                className="w-10 h-10 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl("Hola Augusto, vengo de tu sitio web y quiero empezar con una conversación inicial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Empezar la conversación
          </a>
        </div>
      </div>
    </section>
  );
}
