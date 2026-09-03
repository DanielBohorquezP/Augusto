/*
  Fecha de ultima modificacion real por ruta estatica. Fuente unica de verdad
  para dos consumidores que antes vivian separados y podian contradecirse:

  1. `app/sitemap.ts` -> <lastmod> del sitemap (lo que se le declara a Google).
  2. El label visible "Ultima actualizacion: ..." de cada pagina.

  El label visible estaba hardcodeado como el literal "agosto de 2026" en seis
  archivos distintos, identico en paginas con contenido y ritmo de cambio muy
  diferentes (/medios y una pagina de servicio tributario no envejecen igual).
  Eso es frescura falsa: le dice al lector "esto se reviso hace poco" sin que
  nada lo respalde, y en contenido normativo tributario es un riesgo real.

  `lastModified` se mantiene A MANO, en formato YYYY-MM-DD.

  Antes se leia el `mtime` del archivo fuente, con la buena intencion de no
  publicar frescura falsa. Pero en Vercel el `git clone` del build reescribe el
  mtime de TODOS los archivos con la hora del checkout, asi que el sitemap
  acababa declarando las 12 rutas modificadas en el mismo segundo, en cada
  despliegue. Google solo hace caso a <lastmod> mientras lo encuentre fiable:
  si un sitio le dice que todo cambio y al recrastrear ve paginas identicas,
  deja de usar la senal para priorizar. En un dominio nuevo, con presupuesto
  de rastreo ajustado, eso se paga caro.

  Al publicar un cambio de contenido real en una pagina, actualiza su fecha
  aqui. Un cambio solo de estilo o de refactor NO cuenta: si la fecha no
  corresponde a un cambio que el lector notaria, es mejor dejarla quieta.
*/
export type StaticRoute = {
  path: string;
  lastModified: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const staticRoutes: StaticRoute[] = [
  { path: "", lastModified: "2026-09-03", priority: 1.0, changeFrequency: "weekly" },
  { path: "/sobre", lastModified: "2026-09-03", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios", lastModified: "2026-09-03", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/beneficios-tributarios-innovacion", lastModified: "2026-09-03", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/evaluacion-financiera-innovacion", lastModified: "2026-09-01", priority: 0.85, changeFrequency: "monthly" },
  { path: "/servicios/capacitacion-ia-generativa", lastModified: "2026-08-18", priority: 0.85, changeFrequency: "monthly" },
  { path: "/prime-10", lastModified: "2026-08-15", priority: 0.85, changeFrequency: "monthly" },
  { path: "/docencia", lastModified: "2026-08-15", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", lastModified: "2026-08-18", priority: 0.85, changeFrequency: "weekly" },
  { path: "/medios", lastModified: "2026-08-12", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacto", lastModified: "2026-08-12", priority: 0.8, changeFrequency: "yearly" },
  { path: "/politica-privacidad", lastModified: "2026-08-05", priority: 0.3, changeFrequency: "yearly" },
];

const byPath = new Map(staticRoutes.map((r) => [r.path, r]));

/**
 * Fecha de ultima modificacion de una ruta, en ISO (YYYY-MM-DD) y como
 * etiqueta "mes de año" en es-CO. Devuelve null si la ruta no esta
 * registrada, para que la pagina omita el label en vez de inventar una fecha.
 */
export function lastUpdated(path: string): { iso: string; label: string } | null {
  const route = byPath.get(path);
  if (!route) return null;
  return {
    iso: route.lastModified,
    label: new Date(`${route.lastModified}T12:00:00.000Z`).toLocaleDateString("es-CO", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
    }),
  };
}
