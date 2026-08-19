// Envio de eventos a GA4.
//
// `gtag` se define inline en app/layout.tsx: la cola (dataLayer) existe desde el
// primer byte, aunque el script remoto de Google se cargue mas tarde. Por eso
// aqui no hace falta esperar a nada — los eventos disparados antes de que cargue
// gtag.js quedan encolados y se envian cuando llega.
//
// El Consent Mode lo resuelve Google: con analytics_storage denegado el evento
// viaja sin identificadores, no se pierde la medicion agregada.

export type GtagParams = Record<string, string | number | boolean | undefined>;

// Declaracion unica de gtag para todo el proyecto. La firma es variadica porque
// el mismo objeto atiende llamadas de forma distinta: ('event', nombre, params)
// aqui y ('consent', 'update', {...}) en CookieConsentBanner.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
