export default function WorkshopIllustration() {
  return (
    <div className="w-full aspect-[21/9] rounded-xl bg-muted border border-border p-6 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 480 160" className="w-full h-full" aria-hidden="true">
        {/* Table */}
        <rect x="60" y="110" width="360" height="10" rx="4" fill="#0E1C3D" opacity="0.15" />
        {/* Three participants around the table, abstracted as heads + shoulders */}
        {[100, 240, 380].map((cx, i) => (
          <g key={cx}>
            <circle cx={cx} cy={70} r="18" fill="#0E1C3D" opacity={0.5 + i * 0.1} />
            <path
              d={`M ${cx - 26} 108 Q ${cx} 82, ${cx + 26} 108 L ${cx + 26} 112 L ${cx - 26} 112 Z`}
              fill="#0E1C3D"
              opacity={0.5 + i * 0.1}
            />
          </g>
        ))}
        {/* Speech / idea bubble above the middle participant */}
        <g transform="translate(220,18)">
          <rect x="0" y="0" width="40" height="28" rx="8" fill="#CE2222" opacity="0.85" />
          <path d="M14 28 L20 38 L26 28 Z" fill="#CE2222" opacity="0.85" />
          <circle cx="12" cy="14" r="3" fill="white" />
          <circle cx="20" cy="14" r="3" fill="white" />
          <circle cx="28" cy="14" r="3" fill="white" />
        </g>
        {/* Laptop / artifact on the table */}
        <rect x="215" y="96" width="50" height="6" rx="2" fill="#CE2222" opacity="0.3" />
      </svg>
    </div>
  );
}
