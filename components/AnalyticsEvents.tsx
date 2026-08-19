"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

/**
 * Escucha delegada para los clics a WhatsApp.
 *
 * El sitio tiene nueve enlaces a wa.me repartidos entre hero, servicios,
 * PRIME-10, contacto, el boton flotante y los CTA de cada pagina de servicio.
 * Casi todos viven en server components: ponerles onClick obligaria a
 * convertir esas paginas a client components. Un unico listener en el
 * document los cubre todos, y cubre tambien los que se agreguen despues sin
 * tener que acordarse de instrumentarlos.
 */
export default function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (!href.startsWith("https://wa.me/")) return;

      trackEvent("whatsapp_click", {
        // Desde que pagina se pidio la conversacion: es el dato que dice si las
        // paginas de servicio convierten o solo reciben visitas.
        page_path: pathname,
        // Distingue el boton flotante (presente en todo el sitio) de los CTA
        // concretos de cada seccion.
        cta: link.getAttribute("aria-label") ?? link.textContent?.trim().slice(0, 60) ?? "sin etiqueta",
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
