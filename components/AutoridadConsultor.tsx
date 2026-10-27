import Image from "next/image";
import Link from "next/link";

/**
 * Ficha de autoridad del consultor, en las paginas de servicio.
 *
 * Sale de la auditoria SXO: las paginas que ganan estas SERP (EY, PwC) muestran
 * consultores con nombre, cargo y foto, mientras aqui la credencial estaba
 * enterrada dentro de una FAQ, debajo de ~2.000 palabras.
 *
 * Se construye solo sobre hechos verificables de forma independiente: titulos
 * con numero de registro e instituciones donde se puede comprobar la docencia.
 * Deliberadamente NO incluye la tasa de aprobacion del 93%: la auditoria de
 * contenido la marco como riesgo critico por no tener muestra, periodo ni
 * fuente, y ponerla en un bloque de autoridad amplificaria justo ese problema.
 * Si algun dia se acota con datos verificables, este es su sitio natural.
 *
 * Diseno: la tarjeta sube sobre el borde inferior del hero (-mt-16), como en
 * design-reference/Servicio Detalle.dc.html.
 */

const credenciales = [
  { sigla: "CQRM", nombre: "Certified Quantitative Risk Management", registro: "LA-3437" },
  { sigla: "PMP", nombre: "Project Management Professional", registro: "1649915" },
];

const universidades = [
  "Universidad de los Andes",
  "EAFIT",
  "UIS",
  "Universidad del Bosque",
  "Universidad de América",
];

export default function AutoridadConsultor() {
  return (
    <section
      className="relative z-10 bg-white px-5 sm:px-8 lg:px-0"
      aria-label="Quién presta este servicio"
    >
      <div className="max-w-[1152px] mx-auto -mt-16">
        <div className="bg-white rounded-[20px] shadow-[0_24px_48px_-24px_rgba(14,28,61,.35)] px-5 py-6 sm:px-8 sm:py-7 grid grid-cols-1 sm:grid-cols-[88px_minmax(0,1fr)] md:grid-cols-[88px_minmax(0,1fr)_auto] gap-5 sm:gap-6 items-center">
          <Image
            src="/profile-photo.jpg"
            alt="Augusto Ruiz, consultor en gestión de innovación tecnológica"
            width={88}
            height={88}
            sizes="88px"
            className="rounded-full object-cover w-[88px] h-[88px]"
          />
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <p className="font-heading font-bold text-lg text-foreground">Augusto Ruiz</p>
              <ul className="contents">
                {credenciales.map((c) => (
                  <li
                    key={c.sigla}
                    title={`${c.nombre} — registro ${c.registro}`}
                    className="text-xs font-semibold bg-muted rounded-full px-2.5 py-1"
                  >
                    {c.sigla} · {c.registro}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-heading font-medium text-sm text-primary">
              PhD(c) en Gestión de Innovación Tecnológica · Universidad de los Andes
            </p>
            <p className="text-[13px] leading-[1.55] text-muted-foreground">
              Profesor invitado en {universidades.slice(0, -1).join(", ")} y{" "}
              {universidades[universidades.length - 1]}. Más de 15 años y 50 organizaciones
              asesoradas en Colombia, México, Chile, Perú y Ecuador.
            </p>
          </div>
          <Link
            href="/sobre-augusto-ruiz"
            className="font-heading font-semibold text-sm text-primary border-b-2 border-accent pb-0.5 whitespace-nowrap justify-self-start md:justify-self-auto"
          >
            Ver trayectoria
          </Link>
        </div>
      </div>
    </section>
  );
}
