export default function CanvasDiagram() {
  return (
    <div className="w-full aspect-square rounded-xl bg-muted border border-border p-6 flex items-center justify-center">
      <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
        {/* 9 quadrants of the business model canvas */}
        {Array.from({ length: 9 }).map((_, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <rect
              key={i}
              x={10 + col * 58}
              y={10 + row * 58}
              width={52}
              height={52}
              rx={6}
              fill="#0E1C3D"
              opacity={0.08 + (i % 3) * 0.04}
            />
          );
        })}
        {/* 10th quadrant: financial evaluation panel, highlighted */}
        <rect x="10" y="184" width="220" height="46" rx="8" fill="#CE2222" opacity="0.12" stroke="#CE2222" strokeWidth="1.5" />
        <text x="120" y="212" textAnchor="middle" fontSize="11" fontWeight="600" fill="#CE2222" fontFamily="sans-serif">
          10 · Evaluación financiera probabilística
        </text>

        {/* Probability distribution curve overlaid on the financial quadrant */}
        <path
          d="M 20 205 Q 60 175, 90 200 T 160 195 Q 190 180, 220 205"
          fill="none"
          stroke="#0E1C3D"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
