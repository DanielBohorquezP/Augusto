const testimonials = [
  {
    quote:
      "¡Augusto ya sos parte de este equipo! Gracias por recordarnos que la innovación también es repensar nuestras herramientas, que la IA no reemplaza la intuición ni la experiencia, sino que la potencia.",
    name: "Melissa Londoño Avila",
    title: "Jefe de transferencia tecnológica",
    company: "Universidad EAFIT",
  },
  {
    quote:
      "Gracias Augusto Ruiz !!! Un espacio enriquecedor que nos permite consolidar el uso de nuevas herramientas en el ámbito investigativo!!!",
    name: "Andrés Felipe Gutiérrez",
    title: "Ingeniero Industrial",
    company: "Desarrollo de producto",
  },
  {
    quote:
      "Augusto, tu taller ha sido sin duda uno de los highlights del Olsummit. Estuvo muy amplio, práctico y me generó más curiosidad por seguir aprendiendo el adecuado uso de la IA en emprendimiento.",
    name: "Leonardo Quiñonez Lerma",
    title: "Consultor Financiero",
    company: "Modelamiento financiero y due diligence",
  },
  {
    quote:
      "Excelente MasterClass, muy instructivo y Augusto brilla por su pedagogía, buen humor y dinamismo!",
    name: "Alexis Kucheida",
    title: "Humanitarian Project Manager",
    company: "Financial management",
  },
  {
    quote:
      "Súper recomendado! Gracias Augusto Ruiz por acompañarnos en este reto de romper paradigmas y mostrarnos el potencial de la IA y su aplicación en nuestro negocio.",
    name: "Viviana Montoya Cataño",
    title: "Directora de Ventas y Marketing",
    company: "",
  },
  {
    quote:
      "Estuvo espectacular! Aprendí un montón y me has ayudado a empezar a derribar muchos paradigmas. Me dejas muchas tareas de incorporar y sumar conocimientos y prácticas.",
    name: "Juan Sánchez",
    title: "Design thinker",
    company: "Visual storyteller",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" id="testimonios">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen mis clientes
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl">
            Resultados que hablan por sí solos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-6 lg:p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-foreground leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.title}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
