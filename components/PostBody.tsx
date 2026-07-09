import Link from "next/link";
import type { ContentBlock } from "@/lib/posts";

export function headingId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

// Renderiza el cuerpo de un artículo (ContentBlock[]).
// withAnchors: agrega ids a los h2 para la tabla de contenidos — desactivar en el
// feed de /blog para no duplicar anclas entre artículos.
export default function PostBody({
  blocks,
  withAnchors = true,
}: {
  blocks: ContentBlock[];
  withAnchors?: boolean;
}) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-foreground text-base leading-relaxed">
                {block.text}
              </p>
            );
          case "heading2":
            return (
              <h2
                key={i}
                id={withAnchors ? headingId(block.text) : undefined}
                className="font-heading font-bold text-2xl text-foreground mt-10 mb-4 scroll-mt-28"
              >
                {block.text}
              </h2>
            );
          case "heading3":
            return (
              <h3 key={i} className="font-heading font-semibold text-lg text-foreground mt-7 mb-3">
                {block.text}
              </h3>
            );
          case "highlight":
            return (
              <div key={i} className="bg-muted border-l-4 border-primary p-5 rounded-r-lg my-6">
                <p className="font-heading font-semibold text-foreground text-sm mb-1">{block.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
              </div>
            );
          case "list":
            return (
              <div key={i} className="my-5">
                {block.heading && (
                  <p className="font-heading font-semibold text-foreground text-sm mb-3">{block.heading}</p>
                )}
                <ul className="space-y-2.5 pl-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                      <svg
                        className="w-4 h-4 text-accent shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "cta":
            return (
              <div key={i} className="my-10 bg-primary rounded-2xl p-8 text-center">
                <h3 className="font-heading font-bold text-xl text-white mb-3">{block.heading}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-lg mx-auto">{block.text}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <CtaLink href={block.primaryLink} className="btn-primary">
                    {block.primaryText}
                  </CtaLink>
                  {block.secondaryLink && block.secondaryText && (
                    <CtaLink href={block.secondaryLink} className="btn-outline-white">
                      {block.secondaryText}
                    </CtaLink>
                  )}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
