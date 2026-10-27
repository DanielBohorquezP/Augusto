import Carousel from "@/components/Carousel";

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
    <section className="py-20 lg:py-28 bg-muted" id="testimonios">
      <div className="max-w-[1152px] mx-auto px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center text-center gap-4 mb-10 lg:mb-14">
          <span className="font-heading font-semibold text-xs uppercase tracking-[.18em] text-accent">
            Testimonios
          </span>
          <h2 className="font-heading font-semibold text-[30px] sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-.025em] text-primary">
            Lo que dicen participantes y clientes
          </h2>
        </div>

        <Carousel label="Testimonios" variant="soft">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white rounded-[20px] p-7 lg:p-9 flex flex-col gap-6 h-full shadow-[0_1px_2px_rgba(14,28,61,.06)]"
            >
              <span
                className="font-heading font-bold text-[56px] leading-[.5] text-[#E2E8F0] h-6 self-end"
                aria-hidden="true"
              >
                ”
              </span>
              <blockquote className="text-base leading-[1.7] text-foreground flex-1 [text-wrap:pretty]">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-[#E2E8F0]">
                <span
                  className="w-11 h-11 shrink-0 rounded-full bg-primary text-white font-heading font-semibold text-[15px] flex items-center justify-center"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading font-semibold text-sm text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {t.title}
                    {t.company ? ` · ${t.company}` : ""}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
