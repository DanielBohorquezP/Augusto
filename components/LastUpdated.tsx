import { lastUpdated } from "@/lib/routes";

/*
  Label "Ultima actualizacion" de las paginas estaticas. Lee la fecha real de
  la ruta en lib/routes.ts — el mismo dato que alimenta el <lastmod> del
  sitemap — en vez del literal hardcodeado que antes se repetia identico en
  seis archivos, incluso en paginas que no se habian tocado.

  Si la ruta no esta registrada no pinta nada, en vez de mostrar una fecha
  inventada. Se emite como <time dateTime> para que sea legible por maquina.
*/
export default function LastUpdated({ path }: { path: string }) {
  const updated = lastUpdated(path);
  if (!updated) return null;
  return (
    <p className="mt-2 text-white/40 text-xs">
      Última actualización: <time dateTime={updated.iso}>{updated.label}</time>
    </p>
  );
}
