"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre mí", href: "/sobre" },
  { label: "Servicios", href: "/servicios" },
  { label: "PRIME-10", href: "/prime-10" },
  { label: "Docencia", href: "/docencia" },
  { label: "Blog", href: "/blog" },
  { label: "Medios", href: "/medios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-primary py-4"
      }`}
    >
      <nav className="container-site flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-heading font-bold text-lg leading-tight transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          Augusto Ruiz
          <span className="block text-xs font-normal opacity-70">
            Gestión de Innovación Tecnológica
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary text-sm px-5 py-2.5">
            Agendar consulta
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container-site py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium text-foreground py-2 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm mt-2 w-full text-center"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
