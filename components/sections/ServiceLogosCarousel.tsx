import Image from "next/image";
import type { ServiceLogo } from "@/lib/service-logos";

// Cada mitad de la cinta debe ser más ancha que la pantalla para que el bucle
// (translateX -50%) no deje huecos; con pocos logos se repite la lista.
const MIN_PER_HALF = 12;
const SECONDS_PER_LOGO = 3;

export default function ServiceLogosCarousel({
  logos,
  title = "Organizaciones con las que he trabajado en este servicio",
}: {
  logos: ServiceLogo[];
  title?: string;
}) {
  const half = Array.from(
    { length: Math.ceil(MIN_PER_HALF / logos.length) * logos.length },
    (_, i) => logos[i % logos.length],
  );

  return (
    <section
      aria-label={title}
      className="py-10 bg-white border-b border-border overflow-hidden"
    >
      <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-7 px-5">
        {title}
      </p>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex w-max animate-logos-scroll motion-reduce:animate-none"
          style={{ animationDuration: `${half.length * SECONDS_PER_LOGO}s` }}
        >
          {[...half, ...half].map((logo, i) => (
            <div
              key={`${logo.slug}-${i}`}
              className="relative shrink-0 w-40 h-16 mx-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              aria-hidden={i >= half.length ? true : undefined}
            >
              <Image
                src={`/logos/servicios/${logo.slug}.webp`}
                alt={i < half.length ? logo.name : ""}
                fill
                sizes="160px"
                quality={75}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
