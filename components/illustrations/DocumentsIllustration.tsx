export default function DocumentsIllustration() {
  return (
    <div className="w-full aspect-[21/9] rounded-xl bg-muted border border-border p-6 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 480 160" className="w-full h-full" aria-hidden="true">
        {/* Stack of documents */}
        <rect x="150" y="30" width="110" height="140" rx="6" fill="#0E1C3D" opacity="0.08" />
        <rect x="165" y="20" width="110" height="140" rx="6" fill="#0E1C3D" opacity="0.14" />
        <rect x="180" y="10" width="110" height="140" rx="6" fill="white" stroke="#0E1C3D" strokeOpacity="0.2" strokeWidth="1.5" />
        {[28, 42, 56, 70, 84].map((y) => (
          <rect key={y} x="196" y={y} width={y === 28 ? 50 : 78} height="6" rx="3" fill="#0E1C3D" opacity="0.15" />
        ))}

        {/* Approval seal / checkmark */}
        <circle cx="255" cy="120" r="26" fill="#CE2222" opacity="0.9" />
        <path d="M243 120 L251 128 L268 110" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        {/* Coins representing tax benefit / funding */}
        <g opacity="0.7">
          <circle cx="90" cy="120" r="16" fill="#E8A33D" />
          <circle cx="112" cy="132" r="16" fill="#E8A33D" opacity="0.7" />
        </g>
        <g opacity="0.7">
          <circle cx="380" cy="115" r="16" fill="#2DD4BF" />
          <circle cx="402" cy="128" r="16" fill="#2DD4BF" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
