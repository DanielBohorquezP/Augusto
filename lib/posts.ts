import fs from "node:fs";
import path from "node:path";

// ─────────────────────────────────────────────────────────────────────────────
// Blog basado en archivos Markdown: cada post es un archivo en content/blog/.
// El slug es el nombre del archivo (sin .md). Para publicar un post nuevo solo
// hay que agregar el archivo — sitemap, índice y rutas se generan solos.
//
// Formato del archivo:
//   ---
//   title: "Título con keyword principal"
//   category: "Consultoría"
//   excerpt: "Resumen para la tarjeta del blog."
//   metaDescription: "Meta description para Google (150-160 chars)."   ← opcional
//   date: "2025-03-15"
//   dateModified: "2025-06-01"     ← opcional, si se actualizó el post
//   readTime: "9 min"              ← opcional, se calcula solo si falta
//   featured: true                 ← opcional, solo un post a la vez
//   ---
//
//   Párrafos en Markdown. `## Título` para secciones (alimentan la tabla de
//   contenidos), `### Subtítulo`, listas con `- item` (con encabezado opcional
//   en una línea `**En negrilla**` justo antes), y dos directivas propias:
//
//   :::destacado Etiqueta del recuadro
//   Texto del recuadro destacado.
//   :::
//
//   :::cta
//   heading: ¿Listo para empezar?
//   text: Descripción del llamado a la acción.
//   primary: /contacto | Agendar consulta
//   secondary: /servicios | Ver servicios
//   :::
// ─────────────────────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "highlight"; label: string; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | {
      type: "cta";
      heading: string;
      text: string;
      primaryLink: string;
      primaryText: string;
      secondaryLink?: string;
      secondaryText?: string;
    };

export interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  metaDescription?: string;
  date: string;
  dateModified?: string;
  readTime: string;
  featured: boolean;
  tocItems?: string[];
  content?: ContentBlock[];
}

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }
    data[key] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

function parseBody(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = body.split(/\r?\n/);
  let i = 0;

  const isBoldOnly = (line: string) => /^\*\*(.+)\*\*$/.test(line.trim());

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith(":::destacado")) {
      const label = line.slice(":::destacado".length).trim();
      const text: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") {
        if (lines[i].trim()) text.push(lines[i].trim());
        i++;
      }
      i++;
      blocks.push({ type: "highlight", label, text: text.join(" ") });
      continue;
    }

    if (line.startsWith(":::cta")) {
      const fields: Record<string, string> = {};
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") {
        const idx = lines[i].indexOf(":");
        if (idx > -1) fields[lines[i].slice(0, idx).trim()] = lines[i].slice(idx + 1).trim();
        i++;
      }
      i++;
      const [primaryLink = "/contacto", primaryText = "Agendar consulta"] = (fields.primary ?? "")
        .split("|")
        .map((s) => s.trim());
      const [secondaryLink, secondaryText] = (fields.secondary ?? "").split("|").map((s) => s.trim());
      blocks.push({
        type: "cta",
        heading: fields.heading ?? "",
        text: fields.text ?? "",
        primaryLink,
        primaryText,
        ...(secondaryLink && secondaryText ? { secondaryLink, secondaryText } : {}),
      });
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "heading3", text: line.slice(4).trim() });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading2", text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2).trim());
        i++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    // Línea en negrilla sola seguida de lista → encabezado de la lista
    if (isBoldOnly(line)) {
      let j = i + 1;
      while (j < lines.length && !lines[j].trim()) j++;
      if (j < lines.length && lines[j].trim().startsWith("- ")) {
        const heading = line.trim().replace(/^\*\*|\*\*$/g, "");
        const items: string[] = [];
        i = j;
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().slice(2).trim());
          i++;
        }
        blocks.push({ type: "list", heading, items });
        continue;
      }
    }

    // Párrafo: acumula líneas consecutivas no vacías que no inicien otro bloque
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(##|###|- |:::)/.test(lines[i].trim()) &&
      !isBoldOnly(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "paragraph", text: para.join(" ") });
  }

  return blocks;
}

function estimateReadTime(blocks: ContentBlock[]): string {
  const words = blocks
    .map((b) => {
      switch (b.type) {
        case "paragraph":
        case "heading2":
        case "heading3":
          return b.text;
        case "highlight":
          return `${b.label} ${b.text}`;
        case "list":
          return `${b.heading ?? ""} ${b.items.join(" ")}`;
        case "cta":
          return `${b.heading} ${b.text}`;
      }
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

function loadPost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, body } = parseFrontmatter(raw);
  const content = body.trim() ? parseBody(body) : undefined;
  const tocItems = content
    ?.filter((b): b is { type: "heading2"; text: string } => b.type === "heading2")
    .map((b) => b.text);

  return {
    slug,
    category: data.category ?? "Consultoría",
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    metaDescription: data.metaDescription || undefined,
    date: data.date ?? "1970-01-01",
    dateModified: data.dateModified || undefined,
    readTime: data.readTime || (content ? estimateReadTime(content) : "5 min"),
    featured: data.featured === "true",
    tocItems: tocItems && tocItems.length > 0 ? tocItems : undefined,
    content,
  };
}

export const allPosts: Post[] = fs.existsSync(POSTS_DIR)
  ? fs
      .readdirSync(POSTS_DIR)
      // Los archivos que empiezan con "_" son borradores y no se publican
      .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
      .map(loadPost)
      .sort((a, b) => b.date.localeCompare(a.date))
  : [];

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return allPosts.slice(0, limit);
  const sameCategory = allPosts.filter((p) => p.slug !== slug && p.category === current.category);
  const others = allPosts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(allPosts.map((p) => p.category)));
}

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getCategoryBySlug(categorySlug: string): string | undefined {
  return getAllCategories().find((c) => slugifyCategory(c) === categorySlug);
}
