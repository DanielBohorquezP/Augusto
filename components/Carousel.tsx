"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

type CarouselProps = {
  /** Nombre accesible del carrusel (lo leen los lectores de pantalla). */
  label: string;
  children: React.ReactNode;
  /** Ancho de cada diapositiva segun breakpoint. Por defecto 1 / 2 / 3 por vista. */
  itemClassName?: string;
};

const arrowClass =
  "w-11 h-11 rounded-full border border-border bg-white text-primary flex items-center justify-center transition-colors hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40 disabled:pointer-events-none";

/*
  Carrusel con scroll-snap nativo: todas las diapositivas quedan en el HTML
  (indexables) y el scroll tactil/teclado funciona sin JS; el JS solo agrega
  flechas y puntos.
*/
export default function Carousel({
  label,
  children,
  itemClassName = "basis-full md:basis-1/2 lg:basis-1/3",
}: CarouselProps) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const cardStep = useCallback(() => {
    const first = trackRef.current?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth : 0;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      track.scrollTo({ left: clamped * cardStep(), behavior: "smooth" });
    },
    [cardStep, items.length]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const step = cardStep();
      if (step) setActive(Math.round(track.scrollLeft / step));
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cardStep]);

  const current = atEnd ? items.length - 1 : active;
  // Si todo cabe en una vista, no hace falta navegacion.
  const fits = atEnd && active === 0;

  return (
    <div>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label={label}
        tabIndex={0}
        className="flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none"
      >
        {items.map((child, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${items.length}`}
            className={`snap-start shrink-0 px-3 ${itemClassName}`}
          >
            <div className="h-full">{child}</div>
          </div>
        ))}
      </div>

      {!fits && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button type="button" className={arrowClass} onClick={() => goTo(active - 1)} disabled={active <= 0} aria-label={`${label}: anterior`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-accent" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <button type="button" className={arrowClass} onClick={() => goTo(active + 1)} disabled={atEnd} aria-label={`${label}: siguiente`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
