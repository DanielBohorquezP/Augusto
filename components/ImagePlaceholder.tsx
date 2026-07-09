interface ImagePlaceholderProps {
  filename: string;
  label: string;
  className?: string;
  compact?: boolean;
  dark?: boolean;
}

export default function ImagePlaceholder({
  filename,
  label,
  className = "w-full aspect-video rounded-xl",
  compact = false,
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 text-center border-2 border-dashed ${
        dark ? "border-white/30 bg-white/5" : "border-border bg-muted"
      } ${compact ? "p-2" : "p-6"} ${className}`}
      title={`Imagen pendiente: /images/${filename} — ${label}`}
    >
      <svg
        className={`${compact ? "w-5 h-5" : "w-8 h-8"} ${dark ? "text-white/40" : "text-muted-foreground/50"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h.01M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
      </svg>
      {!compact && (
        <>
          <p className={`text-xs font-medium max-w-[220px] ${dark ? "text-white/60" : "text-muted-foreground"}`}>
            {label}
          </p>
          <p className={`text-[10px] font-mono ${dark ? "text-white/40" : "text-muted-foreground/70"}`}>
            /images/{filename}
          </p>
        </>
      )}
    </div>
  );
}
