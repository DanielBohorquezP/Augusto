// Corrige un bug de @vercel/og (empaquetado dentro de next) en Windows:
// usa path.join() sobre una URL file://, lo que genera backslashes y rompe
// fileURLToPath() al hacer `next build`. Se ejecuta en postinstall.
// Si el patrón no existe (versión nueva de Next ya corregida), no hace nada.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "node_modules", "next", "dist", "compiled", "@vercel", "og", "index.node.js");

if (!existsSync(target)) {
  console.log("[patch-vercel-og] archivo no encontrado, nada que hacer");
  process.exit(0);
}

const src = readFileSync(target, "utf8");
const pattern = /fileURLToPath\(join\(import\.meta\.url, "\.\.\/([^"]+)"\)\)/g;

if (!pattern.test(src)) {
  console.log("[patch-vercel-og] patrón no encontrado (ya parcheado o versión nueva)");
  process.exit(0);
}

const patched = src.replace(pattern, 'fileURLToPath(new URL("./$1", import.meta.url))');
writeFileSync(target, patched, "utf8");
console.log("[patch-vercel-og] parche aplicado");
