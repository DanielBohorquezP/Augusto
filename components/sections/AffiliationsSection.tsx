const affiliations = [
  { name: "Universidad de los Andes", short: "Uniandes", role: "PhD(c) Investigador" },
  { name: "EAFIT University", short: "EAFIT", role: "Docente - Finanzas para la Innovación" },
  { name: "RetroCiencia", short: "RetroCiencia", role: "Divulgación científica" },
];

export default function AffiliationsSection() {
  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="container-site">
        <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Afiliaciones académicas e institucionales
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {affiliations.map((aff) => (
            <div key={aff.name} className="text-center">
              <div className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="font-heading font-bold text-primary text-sm">{aff.short}</span>
              </div>
              <p className="text-xs text-muted-foreground max-w-[120px]">{aff.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
