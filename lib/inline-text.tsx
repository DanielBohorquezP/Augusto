import Link from "next/link";

/*
  Enlaces en linea para los campos de texto plano del sitio.

  Varios componentes reciben su contenido como `string` dentro de arrays de
  datos (respuestas de FAQ, intro de servicio, descripciones de tarjeta) y lo
  renderizan con `{variable}`. Eso impide poner un enlace contextual dentro de
  la oracion, que es justo donde tiene valor: un enlace interno descriptivo,
  embebido en la prosa, pesa mas que un "ver mas" pegado al final del bloque.

  La solucion es escribir esos strings con sintaxis Markdown `[texto](url)` y
  pasarlos por `renderInlineText`. El parser vivia dentro de PostBody.tsx; se
  extrae aqui para reutilizarlo sin duplicarlo.

  `stripInlineLinks` es su contraparte para el JSON-LD: los mismos strings
  alimentan el schema (FAQPage, Service), y ahi los corchetes de Markdown se
  colarian como texto literal en los datos estructurados.
*/

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const LINK_CLASS = "underline decoration-1 underline-offset-2 hover:text-primary transition-colors";

/** Convierte `[texto](url)` en <Link>/<a> y deja el resto del texto intacto. */
export function renderInlineText(text: string): React.ReactNode {
  const pattern = new RegExp(LINK_PATTERN.source, "g");
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isExternal = href.startsWith("http");
    parts.push(
      isExternal ? (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {label}
        </a>
      ) : (
        <Link key={key++} href={href} className={LINK_CLASS}>
          {label}
        </Link>
      )
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

/** Deja solo el texto del enlace: `[texto](url)` -> `texto`. Para JSON-LD. */
export function stripInlineLinks(text: string): string {
  return text.replace(new RegExp(LINK_PATTERN.source, "g"), "$1");
}
