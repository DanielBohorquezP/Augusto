import Link from "next/link";

const footerLinks = {
  Servicios: [
    { label: "Transferencia tecnológica para empresas", href: "/servicios/evaluacion-financiera-innovacion" },
    { label: "Formación corporativa en IA", href: "/servicios/capacitacion-ia-generativa" },
    { label: "Beneficios tributarios I+D+i", href: "/servicios/beneficios-tributarios-innovacion" },
    { label: "PRIME-10™", href: "/prime-10" },
  ],
  Explorar: [
    { label: "Sobre mí", href: "/sobre" },
    { label: "Docencia", href: "/docencia" },
    { label: "Blog", href: "/blog" },
    { label: "Medios", href: "/medios" },
    { label: "Contacto", href: "/contacto" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruizaugusto/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-heading font-bold text-xl text-white">
              Augusto Ruiz
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
              Evaluación financiera para proyectos I+D+i.
              Investigador, consultor y formador en gestión de innovación tecnológica.
            </p>
            <p className="mt-2 text-xs text-white/50">
              PhD(c) · Universidad de los Andes
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-heading font-semibold text-sm text-white mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {currentYear} Augusto Ruiz. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="/politica-privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Reportar un error
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
