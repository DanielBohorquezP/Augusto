export type ServiceLogo = { slug: string; name: string };

// Archivos en public/logos/servicios/<slug>.webp
const L = (slug: string, name: string): ServiceLogo => ({ slug, name });

export const logosBeneficiosTributarios: ServiceLogo[] = [
  L("corona", "Corona"),
  L("sodimac", "Sodimac Homecenter"),
  L("sura", "SURA"),
  L("veolia", "Veolia"),
  L("megalabs", "Megalabs"),
  L("colgas", "Colgas"),
  L("fncafeteros", "Federación Nacional de Cafeteros"),
  L("totto", "Totto"),
  L("zfb", "Grupo ZFB"),
  L("lafayette", "Lafayette"),
  L("gabrica", "Gabrica"),
  L("sucroal", "Sucroal"),
  L("apiros", "Apiros"),
  L("bimedco", "Bimedco"),
  L("carboquimica", "Carboquímica"),
  L("soletanche", "Soletanche Bachy"),
  L("vecol", "Vecol"),
  L("proquinal", "Proquinal"),
  L("almacafe", "Almacafé"),
  L("biod", "BioD"),
  L("connect", "Connect Bogotá Región"),
  L("alianza-team", "Alianza Team"),
  L("piloto", "Universidad Piloto de Colombia"),
];

export const logosEvaluacionFinanciera: ServiceLogo[] = [
  L("alfa", "Alfa"),
  L("exito", "Grupo Éxito"),
  L("colgas", "Colgas"),
  L("fncafeteros", "Federación Nacional de Cafeteros"),
  L("belcorp", "Belcorp"),
  L("odl", "Oleoducto de los Llanos Orientales"),
  L("espumlatex", "Espumlátex"),
  L("team-foods", "Team Foods"),
  L("biod", "BioD"),
  L("proquinal", "Proquinal"),
  L("almacafe", "Almacafé"),
  L("ght", "Growers Hub Trading"),
  L("connect", "Connect Bogotá Región"),
  L("esenttia", "Esenttia"),
];

export const logosCapacitacionIA: ServiceLogo[] = [
  L("eafit", "EAFIT"),
  L("rosario", "Universidad del Rosario"),
  L("piloto", "Universidad Piloto de Colombia"),
  L("cooperativa", "Universidad Cooperativa de Colombia"),
  L("poligran", "Politécnico Grancolombiano"),
  L("boston-scientific", "Boston Scientific"),
  L("esenttia", "Esenttia"),
  L("swisscontact", "Swisscontact"),
  L("sippo", "SIPPO"),
  L("maria-salome", "María Salomé"),
];

export const logosDocencia: ServiceLogo[] = [
  L("eafit", "EAFIT"),
  L("ecopetrol", "Ecopetrol"),
  L("uniandes-nodo", "Universidad de los Andes · Nodo de Innovación"),
  L("sena", "SENA"),
  L("cenit", "Cenit"),
  L("uis", "Universidad Industrial de Santander"),
  L("u-america", "Universidad de América"),
];
