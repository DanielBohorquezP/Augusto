"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// El tipo global de window.gtag se declara una sola vez, en lib/analytics.
import "@/lib/analytics";

type Consent = "granted" | "denied";

const STORAGE_KEY = "cookie_consent";

function applyConsent(value: Consent) {
  window.gtag?.("consent", "update", {
    analytics_storage: value,
  });
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "granted" || stored === "denied") {
      applyConsent(stored);
      return;
    }
    setVisible(true);
  }, []);

  const choose = (value: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    applyConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-primary text-white shadow-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-sm text-white/85 leading-relaxed flex-1">
          Uso cookies de analítica (Google Analytics) para entender cómo se usa este sitio y
          mejorarlo. No se usan para publicidad. Puedes leer más en la{" "}
          <Link href="/politica-privacidad" className="underline hover:text-white">
            política de privacidad
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="px-4 py-2 rounded-lg text-sm font-heading font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="btn-primary !bg-accent hover:!bg-accent-hover px-4 py-2 text-sm"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
