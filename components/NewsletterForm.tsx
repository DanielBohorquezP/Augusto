"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex items-center justify-center gap-2 text-sm font-heading font-medium text-green-700 bg-green-50 rounded-lg px-4 py-3">
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        ¡Suscrito! Revisa tu email para confirmar.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <label htmlFor="newsletter-email" className="sr-only">Tu email</label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="tu@email.com"
        className="flex-1 px-4 py-3 rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        aria-label="Email para suscripción al newsletter"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary shrink-0 disabled:opacity-60"
      >
        {state === "loading" ? "..." : "Suscribirme"}
      </button>
    </form>
  );
}
