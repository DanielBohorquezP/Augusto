const phases = [
  {
    letter: "P",
    title: "Problem framing",
    desc: "Define la decisión de inversión y construye el canvas de 10 cuadrantes: 9 del modelo de negocio más la evaluación financiera.",
    color: "#CE2222",
  },
  {
    letter: "R",
    title: "Readiness validation",
    desc: "Evalúa la madurez tecnológica y comercial del proyecto, e identifica las incertidumbres reales que afectan la decisión.",
    color: "#E8A33D",
  },
  {
    letter: "I",
    title: "Investment modeling",
    desc: "Construye el modelo de flujo de caja, determina el costo de capital y corre la simulación Monte Carlo con distribuciones calibradas.",
    color: "#2DD4BF",
  },
  {
    letter: "M",
    title: "Market experimentation",
    desc: "Valora las opciones reales disponibles y diseña el experimento crítico con métricas mínimas de decisión go/no-go.",
    color: "#A78BFA",
  },
  {
    letter: "E",
    title: "Ex post learning",
    desc: "Con los resultados del experimento, actualiza el modelo y responde: ¿vale la pena seguir, escalar, pivotar o abandonar?",
    color: "#38BDF8",
  },
];

const gradientLine = `linear-gradient(to right, ${phases.map((p) => p.color).join(", ")})`;

export default function Prime10Phases() {
  return (
    <div>
      <h3 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-10">
        Las cinco fases de PRIME-10™
      </h3>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
        {/* Gradient connector line behind the nodes, desktop only */}
        <div
          className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[3px] rounded-full opacity-70"
          style={{ backgroundImage: gradientLine }}
          aria-hidden="true"
        />
        {phases.map((phase) => (
          <div key={phase.letter} className="relative flex flex-col items-center text-center">
            {/* Node */}
            <div
              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-xl text-white ring-4 ring-white shadow-md"
              style={{ backgroundColor: phase.color, boxShadow: `0 8px 18px -6px ${phase.color}90` }}
            >
              {phase.letter}
            </div>

            {/* Card */}
            <div
              className="mt-4 w-full bg-white rounded-lg border-t-4 shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex-1"
              style={{ borderTopColor: phase.color }}
            >
              <h4 className="font-heading font-semibold text-sm text-foreground mb-1.5">
                {phase.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{phase.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
