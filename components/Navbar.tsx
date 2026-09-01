"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Sobre mí", href: "/sobre" },
  { label: "PRIME-10", href: "/prime-10" },
  { label: "Docencia", href: "/docencia" },
  { label: "Blog", href: "/blog" },
  { label: "Medios", href: "/medios" },
];

const serviciosLinks = [
  { label: "Todos los servicios", href: "/servicios" },
  { label: "Transferencia tecnológica para empresas", href: "/servicios/evaluacion-financiera-innovacion" },
  { label: "Capacitación en IA generativa", href: "/servicios/capacitacion-ia-generativa" },
  { label: "Beneficios tributarios", href: "/servicios/beneficios-tributarios-innovacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Safety net: always close the mobile menu when the route changes,
  // in case a link's onClick doesn't fire in time (common on iOS Safari).
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Prevent the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the desktop "Servicios" dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const isServiciosActive = pathname.startsWith("/servicios");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm border-b border-primary-light/30 shadow-md py-3"
          : "bg-primary py-4"
      }`}
    >
      <nav className="container-site flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-lg leading-tight text-white"
        >
          Augusto Ruiz
          <span className="block text-xs font-normal opacity-70">
            Gestión de Innovación Tecnológica
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Servicios dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              className={`flex items-center gap-1 font-body text-sm font-medium transition-colors hover:text-accent ${
                isServiciosActive ? "text-white" : "text-white/90 hover:text-white"
              }`}
            >
              Servicios
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Servicios"
                className="absolute left-0 top-full mt-3 w-72 rounded-xl bg-white shadow-lg border border-border py-2 z-50"
              >
                {serviciosLinks.map((link, i) => (
                  <div key={link.href}>
                    {i === 1 && <div className="my-1 border-t border-border" aria-hidden="true" />}
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-body transition-colors hover:bg-muted hover:text-primary ${
                        pathname === link.href ? "text-primary font-medium" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium transition-colors text-white/90 hover:text-white hover:text-accent"
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
          className="lg:hidden p-2 rounded-md text-white"
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

      {/* Backdrop — tapping outside the mobile menu closes it */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden relative z-50 bg-primary border-t border-primary-light/30 shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="container-site py-4 flex flex-col gap-1">
            {/* Servicios accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className={`flex w-full items-center justify-between gap-2 font-body text-sm font-medium py-2.5 transition-colors ${
                  isServiciosActive ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-4 pb-1 flex flex-col gap-1 border-l border-white/20 ml-1">
                    {serviciosLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-body text-sm py-2 transition-colors ${
                          pathname === link.href ? "text-white font-medium" : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium text-white/90 py-2.5 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm mt-3 w-full text-center"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
