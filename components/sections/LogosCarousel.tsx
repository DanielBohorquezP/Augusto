import Image from "next/image";

const logos = [
  { file: "universidad_eafit_hq.png", name: "EAFIT" },
  { file: "universidad_rosario_hq.png", name: "Universidad del Rosario" },
  { file: "universidad_cooperativa_colombia_hq.png", name: "Universidad Cooperativa de Colombia" },
  { file: "universidad_piloto_colombia_hq.png", name: "Universidad Piloto de Colombia" },
  { file: "poli_gracolombiano_hq.png", name: "Politécnico Grancolombiano" },
  { file: "connect_15_anos_hq.png", name: "Connect Bogotá Región" },
  { file: "swisscontact_hq.png", name: "Swisscontact" },
  { file: "sippo_hq.png", name: "SIPPO" },
  { file: "acotur_hq.png", name: "Acotur" },
  { file: "boston_scientific_hq.png", name: "Boston Scientific" },
  { file: "esenttia_hq.png", name: "Esenttia" },
  { file: "maria_salome_hq.png", name: "María Salomé" },
  { file: "logo_barras_hq.png", name: "Organización aliada" },
];

export default function LogosCarousel() {
  return (
    <section className="py-14 bg-white border-y border-border overflow-hidden">
      <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        Organizaciones con las que he trabajado
      </p>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-logos-scroll motion-reduce:animate-none">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.file}-${i}`}
              className="relative shrink-0 w-40 h-16 mx-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <Image
                src={`/logos/${logo.file}`}
                alt={logo.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
