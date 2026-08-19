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
    <section className="py-10 bg-white" aria-label="Quién presta este servicio">
      <div className="container-site max-w-3xl">
        <div className="card p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start">
          <Image
            src="/profile-photo.jpg"
            alt="Augusto Ruiz, consultor en gestión de innovación tecnológica"
            width={96}
            height={96}
            sizes="96px"
            className="rounded-full object-cover shrink-0 w-24 h-24"
          />
          <div className="min-w-0">
            <p className="font-heading font-bold text-lg text-foreground">Augusto Ruiz</p>
            <p className="text-sm text-primary font-heading font-medium mt-0.5">
              PhD(c) en Gestión de Innovación Tecnológica · Universidad de los Andes
            </p>

            <ul className="flex flex-wrap gap-2 mt-4">
              {credenciales.map((c) => (
                <li
                  key={c.sigla}
                  title={`${c.nombre} — registro ${c.registro}`}
                  className="text-xs font-heading font-semibold bg-muted text-foreground rounded-full px-3 py-1"
                >
                  {c.sigla} <span className="font-normal text-muted-foreground">· {c.registro}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Profesor invitado en posgrados de {universidades.slice(0, -1).join(", ")} y{" "}
              {universidades[universidades.length - 1]}. Más de 10 años y 50 organizaciones
              asesoradas en Colombia, México, Chile, Perú y Ecuador.
            </p>

            <Link
              href="/sobre"
              className="inline-block mt-4 text-sm font-heading font-semibold text-primary underline underline-offset-2"
            >
              Ver trayectoria y publicaciones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
