import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" aria-hidden="true" />

      <div className="container-site relative z-10 text-center">
        <span className="inline-block bg-white/10 text-white/90 text-xs font-heading font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-white/20">
          ¿Listo para comenzar?
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto text-balance">
          ¿Listo para tomar mejores decisiones de innovación?
        </h2>
        <p className="mt-4 text-white/80 text-base max-w-xl mx-auto leading-relaxed">
          Agenda una consulta inicial gratuita y exploremos juntos cómo puedo ayudar
          a tu organización a innovar con rigor y confianza.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl("Hola Augusto, quiero agendar una consulta gratuita sobre innovación.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Contáctame por WhatsApp
          </a>
          <Link href="/contacto" className="btn-outline-white text-base px-8 py-4">
            Escribir por el formulario
          </Link>
        </div>
      </div>
    </section>
  );
}
