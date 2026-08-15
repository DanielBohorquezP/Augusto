function safeSerialize(obj: object): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

// Emite un unico bloque JSON-LD con @graph en vez de N scripts sueltos: asi las
// referencias cruzadas por @id (author, publisher, provider) viven en el mismo
// documento y no dependen de que el parser correlacione scripts separados.
export default function SchemaScript({ schema }: { schema: object | object[] }) {
  const nodes = (Array.isArray(schema) ? schema : [schema]).flat();
  const graph = {
    "@context": "https://schema.org",
    // El @context se declara una sola vez en la raiz del grafo, asi que se
    // descarta el de cada nodo.
    "@graph": nodes.map((node) => {
      const rest = { ...(node as Record<string, unknown>) };
      delete rest["@context"];
      return rest;
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeSerialize(graph) }}
    />
  );
}
