const credentials = [
  { label: "PhD(c)", title: "Universidad de los Andes", detail: "Gestión de Innovación Tecnológica" },
  { label: "CQRM", title: "Certified Quantitative Risk Management", detail: "No. LA-3437" },
  { label: "PMP", title: "Project Management Professional", detail: "PMI · No. 1649915" },
  { label: "Formación", title: "Tecnológico de Monterrey", detail: "Gestión y transferencia de tecnología · 2021" },
  { label: "DEEI", title: "BID-PRODEM", detail: "Diploma en Estrategia de Ecosistemas de Innovación" },
];

export default function AffiliationsSection() {
  return (
    <section className="py-14 bg-white border-b border-border">
      <div className="container-site">
        <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Afiliaciones académicas e institucionales
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {credentials.map((cred) => (
            <div key={cred.label} className="card p-5">
              <p className="font-heading font-bold text-primary text-sm">{cred.label}</p>
              <p className="font-heading font-semibold text-foreground text-base mt-1">{cred.title}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{cred.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
