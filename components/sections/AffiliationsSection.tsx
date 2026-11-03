const credentials = [
  { label: "PhD(c)", title: "Universidad de los Andes", detail: "Gestión de Innovación Tecnológica" },
  { label: "CQRM", title: "Certified Quantitative Risk Management", detail: "No. LA-3437" },
  { label: "PMP", title: "Project Management Professional", detail: "PMI · No. 1649915" },
  { label: "Formación", title: "Tecnológico de Monterrey", detail: "Gestión y transferencia de tecnología · 2021" },
  { label: "DEEI", title: "BID-PRODEM", detail: "Diploma en Estrategia de Ecosistemas de Innovación" },
];

export default function AffiliationsSection() {
  return (
    <section className="py-6 bg-white border-b border-border">
      <div className="container-site">
        <p className="text-center text-[10px] font-body uppercase tracking-widest text-muted-foreground/60 mb-3">
          Credenciales académicas y profesionales
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2 opacity-60">
          {credentials.map((cred) => (
            <div key={cred.label} className="text-center">
              <p className="font-heading font-semibold text-muted-foreground text-[10px]">
                {cred.label} · {cred.title}
              </p>
              <p className="text-[10px] text-muted-foreground/70 leading-snug">{cred.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
