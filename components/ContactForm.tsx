"use client";

import { useState } from "react";

const services = [
  "Evaluación Financiera de Innovación",
  "IA Generativa Aplicada",
  "Estrategias de Financiación",
  "PRIME-10 Assessment",
  "Charla / Taller",
  "Otro",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Tu nombre es requerido";
    if (!form.email.trim()) errs.email = "Tu email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email no válido";
    if (!form.message.trim()) errs.message = "El mensaje es requerido";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErrorField = document.getElementById(Object.keys(errs)[0]);
      firstErrorField?.focus();
      return;
    }
    setErrors({});
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-heading font-bold text-xl text-foreground mb-2">¡Mensaje enviado!</h2>
        <p className="text-muted-foreground text-sm">
          Gracias por contactarme. Te responderé en un plazo máximo de 48 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulario de contacto">
      {state === "error" && (
        <div role="alert" className="bg-accent/10 border border-accent/30 text-accent text-sm p-4 rounded-lg">
          Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente a contacto@augustoruiz.org.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-heading font-medium text-sm text-foreground mb-1.5">
            Nombre completo <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.name ? "border-accent focus:ring-accent" : "border-border"}`}
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-accent">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block font-heading font-medium text-sm text-foreground mb-1.5">
            Email <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.email ? "border-accent focus:ring-accent" : "border-border"}`}
            placeholder="tu@empresa.com"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-accent">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block font-heading font-medium text-sm text-foreground mb-1.5">
          Empresa u organización
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          placeholder="Nombre de tu empresa (opcional)"
        />
      </div>

      <div>
        <label htmlFor="service" className="block font-heading font-medium text-sm text-foreground mb-1.5">
          ¿En qué puedo ayudarte?
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white"
        >
          <option value="">Selecciona una opción (opcional)</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-heading font-medium text-sm text-foreground mb-1.5">
          Mensaje <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${errors.message ? "border-accent focus:ring-accent" : "border-border"}`}
          placeholder="Cuéntame sobre tu proyecto o desafío de innovación..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-accent">{errors.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="newsletter"
          type="checkbox"
          checked={form.newsletter}
          onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
          className="mt-0.5 w-4 h-4 rounded border-border text-primary accent-primary"
        />
        <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
          Quiero recibir artículos e investigaciones sobre gestión de innovación tecnológica
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar este formulario aceptas nuestra{" "}
        <a href="/politica-privacidad" className="text-primary hover:underline">política de privacidad</a>.
      </p>
    </form>
  );
}
