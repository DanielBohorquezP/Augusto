export const prime10Phases = [
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

/** Linea de tiempo vertical de las cinco fases (solo vive en /prime-10). */
export default function Prime10Phases() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 lg:gap-20 items-start">
      <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
        <span className="font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent">
          El proceso
        </span>
        <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-.025em] text-primary">
          Las cinco fases de PRIME-10™
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          Del encuadre de la decisión al aprendizaje después del experimento. Una evaluación
          completa toma entre 3 y 5 días.
        </p>
      </div>
      <ol className="relative flex flex-col">
        <span
          className="absolute left-[27px] sm:left-[35px] top-9 bottom-9 w-0.5 bg-[#E2E8F0]"
          aria-hidden="true"
        />
        {prime10Phases.map((p, i) => (
          <li
            key={p.letter}
            className="relative grid grid-cols-[56px_minmax(0,1fr)] sm:grid-cols-[72px_minmax(0,1fr)] gap-5 sm:gap-8 pb-5"
          >
            <span
              className="relative z-[1] w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-[20px] text-primary font-heading font-bold text-2xl sm:text-3xl flex items-center justify-center shadow-[0_0_0_6px_#fff]"
              style={{ background: p.color }}
              aria-hidden="true"
            >
              {p.letter}
            </span>
            <div
              className="bg-[#F5F7FB] rounded-[18px] px-5 py-5 sm:px-7 sm:py-6 flex flex-col gap-1.5 border-t-[3px]"
              style={{ borderTopColor: p.color }}
            >
              <span className="font-heading font-semibold text-xs tracking-[.08em] text-muted-foreground">
                FASE {i + 1}
              </span>
              <h3 className="font-heading font-semibold text-[21px] text-primary">{p.title}</h3>
              <p className="text-[15px] leading-[1.65] text-muted-foreground [text-wrap:pretty]">{p.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
