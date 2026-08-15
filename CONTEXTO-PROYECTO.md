# Contexto Completo del Proyecto — augustoruiz.org

> Documento de referencia para cualquier sesión de trabajo en este proyecto.
> Última actualización: 2026-08-11 — checklist SEO (8.1) + lección sobre aplicar fixes
> retroactivamente a todas las páginas, no solo a las tocadas en el momento del fix

---

## 1. Quién es Augusto Ruiz

Augusto Ruiz es consultor especializado en **gestión de innovación tecnológica**, investigador doctoral y docente universitario con base en Colombia.

| Dato | Detalle |
|------|---------|
| Rol principal | Consultor, Investigador y Formador |
| Credencial académica | PhD(c) — Universidad de los Andes (Gestión de Innovación Tecnológica) |
| Docencia | Profesor de "Finanzas para la Innovación" — Maestría en Finanzas, EAFIT University |
| Experiencia | +10 años, +50 organizaciones asesoradas |
| Geografía | Colombia (Medellín y Bogotá) + LATAM: México, Chile, Perú, Ecuador |
| Divulgación | RetroCiencia |
| LinkedIn | https://www.linkedin.com/in/ruizaugusto/ |
| Frase identidad | *"El puente entre el rigor académico y la decisión organizacional"* |
| Filosofía | *"Enseño lo que investigo y practico lo que enseño"* |

### Áreas de expertise

- Evaluación financiera de proyectos de innovación tecnológica (modelos probabilísticos)
- IA Generativa aplicada a organizaciones
- Estrategias de financiación de innovación (Minciencias, iNNpulsa, BPIN, privados)
- Framework propietario **PRIME-10 Assessment**
- Opciones reales y simulación Monte Carlo

---

## 2. Objetivo estratégico del sitio

> **Posicionar a Augusto Ruiz como el experto de referencia en consultoría de innovación tecnológica en Colombia y LATAM, tanto en Google como en motores de IA (ChatGPT, Perplexity, Gemini, Claude).**

Los tres vectores de posicionamiento son:

1. **SEO en Google** — capturar tráfico de intención de búsqueda sobre consultoría en innovación en Colombia
2. **GEO / AEO (AI Answer Engine Optimization)** — ser citado cuando IAs responden preguntas sobre consultoría de innovación en LATAM
3. **Blog como motor de contenido** — publicar artículos que demuestren expertise, capturen keywords long-tail y generen autoridad de dominio

---

## 3. Stack técnico

| Tecnología | Uso |
|-----------|-----|
| **Next.js 14** (App Router) | Framework principal — SSG/SSR |
| **TypeScript** | Todo el código |
| **Tailwind CSS** | Estilos — design system custom |
| **Google Fonts** | Poppins (headings) + Open Sans (body) |
| **Schema.org JSON-LD** | SEO estructurado inyectado via `<SchemaScript>` |
| **Next.js Metadata API** | `<head>` SEO (title, description, OG, Twitter) |
| **Vercel** (implícito) | Deploy (Next.js estático + API Routes) |

### Comandos principales

```bash
npm run dev      # desarrollo local
npm run build    # build de producción
npm run start    # servidor de producción
```

---

## 4. Design System

### Paleta de colores

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#0E1C3D` | Azul marino oscuro — fondos hero, navbar |
| `primary-dark` | `#08112A` | Variante más oscura |
| `primary-light` | `#1B2B5E` | Variante más clara |
| `accent` | `#CE2222` | Rojo — CTAs, badges, acentos |
| `accent-hover` | `#B01A1A` | Hover del acento |
| `background` | `#FFFFFF` | Fondo base |
| `foreground` | `#0F172A` | Texto principal |
| `muted` | `#EEF2FA` | Fondos alternativos (secciones pares) |
| `muted-foreground` | `#64748B` | Texto secundario |
| `border` | `#CBD5E1` | Bordes de cards |

### Tipografía

- **Heading** → `font-poppins` (weights: 400, 500, 600, 700) — títulos, badges, etiquetas
- **Body** → `font-open-sans` (weights: 300, 400, 500, 600, 700) — párrafos

### Clases utilitarias clave (globals.css / Tailwind)

```
.container-site    → max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
.section-heading   → font-heading font-bold text-foreground
.card              → bg-white rounded-2xl border border-border shadow-sm
.btn-primary       → bg-accent hover:bg-accent-hover text-white font-heading font-semibold px-6 py-3 rounded-xl
.btn-outline-white → border border-white/30 text-white hover:bg-white/10 ...
.btn-secondary     → border border-border text-foreground hover:border-primary ...
```

---

## 5. Arquitectura de páginas

### Rutas y propósito

| Ruta | Archivo | Propósito |
|------|---------|-----------|
| `/` | `app/page.tsx` | Homepage — conversión + overview |
| `/sobre` | `app/sobre/page.tsx` | Perfil, bio, trayectoria, credenciales |
| `/servicios` | `app/servicios/page.tsx` | Servicios detallados + FAQ + CTA |
| `/prime-10` | `app/prime-10/page.tsx` | Framework PRIME-10 — producto flagship |
| `/blog` | `app/blog/page.tsx` | Índice de artículos + newsletter |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Artículo individual |
| `/docencia` | `app/docencia/page.tsx` | Curso en EAFIT + talleres |
| `/medios` | `app/medios/page.tsx` | Prensa, podcasts, ponencias |
| `/contacto` | `app/contacto/page.tsx` | Formulario de contacto |

### Prioridades en sitemap.ts

```
/ → 1.0 (semanal)
/sobre, /servicios → 0.9 (mensual)
/prime-10, /blog → 0.85 (mensual/semanal)
/docencia → 0.8
/contacto → 0.8
/medios → 0.7
/blog/* → 0.75 (mensual)
```

### Estructura de la Homepage (`/`)

1. `<HeroSection>` — identidad, foto, stats (10+ años, 50+ org, PRIME-10)
2. `<ServicesSection>` — los 3 servicios principales
3. `<Prime10Banner>` — CTA al framework propietario
4. `<AffiliationsSection>` — logos/sellos Uniandes + EAFIT
5. `<TestimonialsSection>` — testimonios de clientes
6. `<BlogPreviewSection>` — últimos artículos del blog
7. `<CTASection>` — llamada a la acción final

---

## 6. Servicios ofrecidos

### 1. Evaluación Financiera de Innovación
- **Problema que resuelve:** VPN/TIR generan sesgos en proyectos de innovación por asumir futuro predecible
- **Metodología:** Modelos probabilísticos, simulación Monte Carlo, valoración de opciones reales
- **Para quién:** CFOs, directores de innovación, equipos de gestión de proyectos tecnológicos
- **Entregable:** Informe ejecutivo con recomendaciones accionables

### 2. IA Generativa Aplicada
- **Problema:** Implementaciones de IA fallan por falta de estrategia
- **Metodología:** Diagnóstico de casos de uso, estrategia de adopción, ROI medible
- **Para quién:** CEOs, directores de transformación digital
- **Entregable:** Estrategia de adopción + flujos de trabajo aumentados con IA

### 3. Estrategias de Financiación de Innovación
- **Problema:** Ecosistema de financiación complejo y difícil de navegar
- **Metodología:** Mapeo de fondos, estructuración de propuestas, pitch para privados
- **Para quién:** Startups, pymes innovadoras, grandes empresas con I+D
- **Fuentes:** Minciencias, iNNpulsa, BPIN, FNG, Bancóldex, capital privado

### Proceso de trabajo (4 pasos)
01. Diagnóstico inicial → 02. Análisis y modelado → 03. Entrega de resultados → 04. Implementación (opcional)

---

## 7. Framework PRIME-10 Assessment

**Nombre completo:** Probabilistic Risk and Innovation Management Evaluation

Producto diferenciador y propietario de Augusto Ruiz. Evalúa 10 dimensiones de madurez de innovación:

| # | Dimensión |
|---|-----------|
| 01 | Madurez tecnológica |
| 02 | Potencial de mercado |
| 03 | Capacidades organizacionales |
| 04 | Modelo de financiación |
| 05 | Gestión de la incertidumbre |
| 06 | Ecosistema de innovación |
| 07 | Marco regulatorio |
| 08 | Impacto y sostenibilidad |
| 09 | Escalabilidad |
| 10 | Apropiación del conocimiento |

- **Duración:** 2–3 semanas
- **Entregable:** Informe ejecutivo, análisis de brechas, benchmarking sectorial, hoja de ruta
- **Para quién:** Startups (pre-inversión), corporaciones (portafolio I+D), entidades públicas
- **URL:** `/prime-10`

---

## 8. Infraestructura SEO implementada

### Metadata (Next.js Metadata API)

- `metadataBase: https://www.augustoruiz.org`
- Title template: `"%s | Augusto Ruiz"`
- Keywords principales en `layout.tsx`:
  - "consultoría en innovación empresarial Colombia"
  - "consultoría en innovación tecnológica"
  - "consultoría en innovación digital"
  - "consultoría en innovación para pymes"
  - "consultor innovación Colombia"
  - "PRIME-10 assessment"
  - "consultoría innovación Medellín / Bogotá"
- OG tags completos (type, locale `es_CO`, imagen generada automáticamente por `app/opengraph-image.tsx`)
- Twitter Card: `summary_large_image`
- Canonical URLs en todas las páginas

### JSON-LD Schemas (`lib/schema.ts`)

Schemas activos en producción:
- **`Person`** — identidad de Augusto, credentials, knowsAbout, alumniOf (Uniandes), worksFor (EAFIT), sameAs (LinkedIn)
- **`WebSite`** — nombre, URL, SearchAction apuntando a `/blog?q=`
- **`ProfessionalService`** — tipo de servicio, areaServed (5 países), knowsAbout, hasOfferCatalog (4 servicios)

Schemas adicionales por página:
- **`BlogPosting`** — en cada post del blog (`datePublished`, `dateModified`, autor,
  `mainEntityOfPage`, `isPartOf` → `#website`)
- **`FAQPage`** — en `/servicios` y `/prime-10`
- **`BreadcrumbList`** — en todas las páginas interiores (agregarla a mano en cada
  página nueva — no es automática, ver checklist 8.1)

Funciones disponibles en `lib/schema.ts`:
```ts
articleSchema({ title, description, slug, datePublished, dateModified })
faqSchema(faqs: { q, a }[])
breadcrumbSchema(items: { name, url }[])
courseListSchema(programs: { institution, course, url? }[])  // → array de Course, usado en /docencia
```

### robots.ts — AI crawlers permitidos

```
GPTBot ✓ | ClaudeBot ✓ | PerplexityBot ✓ | Google-Extended ✓ | anthropic-ai ✓
OAI-SearchBot ✓ | Applebot-Extended ✓ | Amazonbot ✓ | Meta-ExternalAgent ✓
```
`/api/` está bloqueado. **Ojo con el nombre exacto de los tokens de user-agent** — el
token real de Google para IA es `Google-Extended`, no `Googlebot-Extended`; ese typo
estuvo en el código hasta el 2026-08-11 (funcionalmente inofensivo porque la regla
wildcard `*` ya permitía todo, pero la regla explícita nunca aplicaba). No hay ruta
`/studio/` en este proyecto (no hay CMS headless) — si `robots.ts` alguna vez vuelve a
listar `/studio/`, es un error de copiar/pegar, no una regla real.

### sitemap.ts

Genera sitemap dinámico: rutas estáticas listadas a mano en `staticRoutes` (array en
`app/sitemap.ts`) + slugs de blog y páginas de categoría, estas últimas **derivadas
automáticamente** de `content/blog/` (no hay que tocar `sitemap.ts` al publicar un post).
`lastModified` de las rutas estáticas usa la fecha real de modificación del archivo
fuente (`fs.statSync(...).mtime`), no la fecha del build.

**Importante:** `staticRoutes` NO se actualiza solo — cualquier página nueva de nivel
superior (`/algo/page.tsx`) que no sea un post de blog debe agregarse a mano a ese
array, o quedará fuera del sitemap. Ver checklist en 8.1.

### llms.txt (`/public/llms.txt`)

Archivo optimizado para IA. Estructura de preguntas y respuestas que responde directamente a queries que los modelos de IA reciben sobre consultoría de innovación en Colombia. Cubre:
- Quién es Augusto Ruiz
- Mejores consultorías de innovación en Colombia
- Servicios para startups y pymes
- Metodologías (PRIME-10, Monte Carlo, opciones reales)
- Ecosistema de financiación colombiano
- Cómo elegir consultoría de innovación

Es un archivo **estático**, no se regenera solo. Si una página o post nuevo aporta un
hecho, cifra o metodología citable que valga la pena que un motor de IA use como
respuesta directa, agrégalo aquí a mano (ver checklist 8.1).

---

## 8.1 Checklist SEO obligatorio — correr SIEMPRE que se publique algo nuevo

Esta sección existe para no tener que volver a correr una auditoría completa cada vez
que se agrega contenido. Es la lista de archivos que el SEO de este sitio depende y que
**no se actualizan solos** salvo que se indique lo contrario. Verificar antes de dar por
terminado cualquier cambio.

> **Lección del 2026-08-11 (segunda auditoría):** el primer fix de `openGraph` faltante
> solo se aplicó a las 3 páginas que la auditoría de ese momento cubrió
> (`/prime-10`, `/docencia`, `/blog`). Una segunda auditoría, días después, encontró el
> **mismo bug en 5 páginas más** que ya existían pero que esa primera pasada no había
> revisado (`/servicios/*` × 3, `/medios`, `/contacto`, `/blog/categoria/[categoria]`).
> La checklist no se aplicó retroactivamente a páginas existentes, solo a las tocadas en
> ese momento. **Al corregir un patrón de bug (ej. `openGraph` faltante), correr un grep
> sobre TODO `app/**/page.tsx` (`grep -L "openGraph:" app/**/page.tsx`) en vez de asumir
> que ya se cubrió con el fix anterior.**

### A. Nueva página de nivel superior (ej. `/algo/page.tsx`, como pasó con `/docencia`)

1. **`app/sitemap.ts`** — agregar una entrada al array `staticRoutes` (path, file,
   priority, changeFrequency). Sin esto la página no aparece en `sitemap.xml`.
2. **Metadata de la página** — en el `export const metadata` (o `generateMetadata`):
   - `title` (sin repetir "Augusto Ruiz": el layout ya agrega `| Augusto Ruiz` vía
     template — ver bug real encontrado en `/docencia` el 2026-08-11).
   - `description` única.
   - `alternates.canonical` con la URL absoluta.
   - **`openGraph: { title, description, url, type: "website" }` explícito.** Si se
     omite, Next hereda el OG del layout raíz (título/URL de la home) y los enlaces
     compartidos de esa página muestran la portada del sitio, no la página real — bug
     real que tuvieron `/prime-10`, `/docencia` y `/blog` hasta el fix del 2026-08-11.
3. **`BreadcrumbList` schema** — importar `SchemaScript` + `breadcrumbSchema` de
   `@/lib/schema` y renderizarlo como primer hijo del `return`, con el mismo patrón que
   usan todas las páginas interiores. Sin esto la página queda sin ningún JSON-LD
   (pasó con `/docencia`, que fue la única página del sitio con cero structured data).
4. **Navegación interna** — enlazar la página nueva desde donde tenga sentido
   (`Navbar`, `Footer`, la home, u otras páginas relacionadas). Una página sin enlaces
   entrantes internos es más difícil de rastrear y de posicionar internamente.
5. Si la página representa un servicio o entidad nueva relevante para IA, considerar
   agregarla a `public/llms.txt`.

### B. Nueva subpágina de servicio (`app/servicios/algo/page.tsx`)

Todo lo de la sección A, más:
6. **`lib/schema.ts` → `professionalServiceSchema.hasOfferCatalog.itemListElement`** —
   agregar (o actualizar) la entrada `Offer.itemOffered` correspondiente con `@id` y
   `url` apuntando a la nueva subpágina (patrón: `${BASE_URL}/servicios/slug#service` /
   `${BASE_URL}/servicios/slug`). Si no se hace, el catálogo de servicios en el schema
   global queda desincronizado de las páginas reales.
7. Enlazar la subpágina desde `/servicios` (sección o tarjeta correspondiente).

### C. Nuevo post de blog (`content/blog/slug.md`)

**Ya es mayormente automático** — ver sección 13 para el flujo completo. Solo falta
manual:
8. Si la categoría del post es nueva, agregar su color en
   `categoryColors` dentro de `components/BlogPostCard.tsx` (si no, cae en el gris por
   defecto — funciona pero es inconsistente visualmente).
9. Mover la fila del artículo de "Pendientes" a "Publicados" en
   `docs/PLAN-CONTENIDO-BLOG.md` (registro de contenido del proyecto, no afecta SEO
   pero evita duplicar temas).
10. Si el post cita fuentes externas o internas, usar el formato `[texto](url)` dentro
    del Markdown — `PostBody.tsx` lo convierte en un link subrayado (nueva pestaña si es
    externo). Funciona en párrafos, listas y bloques `:::destacado`.
11. Si el post aporta un dato o metodología citable, considerar agregarlo a
    `public/llms.txt`.
12. Si el post tiene contenido comparativo, usar tablas GFM (`| Col A | Col B |` +
    `|---|---|`) — el parser las soporta y `PostBody.tsx` las renderiza con scroll
    horizontal propio (nunca desbordan la página).
13. **Verificar SIEMPRE en mobile (375px) y tablet (768px)**, no solo desktop — bug real
    encontrado el 2026-08-11: la tarjeta de preview usaba la imagen OG (que ya lleva el
    título grabado como píxeles) como thumbnail, duplicando el título y viéndose mal en
    pantallas chicas. `BlogPostCard.tsx` ahora usa un fondo de marca sin texto — no
    reutilizar la imagen OG como thumbnail en ningún rediseño futuro de la tarjeta.
    Detalle completo en `content/COMO-PUBLICAR.md`.

### D. Editar una sección/página existente

12. Si el cambio afecta un hecho verificable (estadística, fecha, credencial), revisar
    si ese mismo dato está duplicado en `lib/schema.ts` o `public/llms.txt` y
    actualizarlo ahí también — evita que el JSON-LD o el llms.txt queden desactualizados
    respecto al contenido visible.
13. Si se agregan imágenes, siempre con `alt` descriptivo (no genérico) — regla ya
    cumplida en todo el sitio, mantenerla.
14. Actualizar este documento y `ESTRUCTURA.md` en el mismo turno si el cambio es
    estructural (regla ya establecida, ver arriba).

---

## 9. Blog — arquitectura y estrategia de contenido

### Estado actual: primer post publicado (2026-08-10)

Los 10 posts anteriores (6 de expertise en placeholder + 4 con contenido SEO completo)
se **borraron definitivamente** el 2026-07-06 para empezar a publicar contenido real
desde cero. El primer post real (`que-es-un-beneficio-tributario-colombia`) se publicó
el 2026-08-10 — ver `docs/PLAN-CONTENIDO-BLOG.md` para el calendario de los siguientes.
El flujo de publicación queda documentado en `content/blog/COMO-PUBLICAR.md` (ver
sección 13).

### Cómo se lee el blog (decisión de producto, actualizada 2026-08-11)

- **`/blog` es un grid de previews**: muestra tarjetas (`BlogPostCard`) con título,
  imagen (la OG image auto-generada del post), un extracto corto y un botón "Leer
  más" — no el contenido completo. El visitante hace clic para ir al artículo.
- Cada artículo tiene su URL individual (`/blog/[slug]`), que es la que Google indexa
  y posiciona por keyword, y la única página que renderiza el cuerpo completo.
- `/blog?categoria=slug` es el mismo grid de previews, filtrado por query param
  sobre la misma página (no una ruta propia — decisión 2026-08-15, ver nota abajo).
- El componente `components/BlogPostCard.tsx` renderiza cada tarjeta en el grid (se
  reusa también en `BlogPreviewSection` de la homepage); `components/PostBody.tsx`
  es el renderizador del cuerpo, usado solo en la página individual del artículo.
- (Decisión anterior, 2026-07-06, revertida: `/blog` mostraba el contenido completo
  de todos los artículos en una sola página vía `components/FeedArticle.tsx`, hoy
  eliminado.)

### Infraestructura técnica

- **Fuente de datos:** `content/blog/*.md` — un archivo Markdown por artículo (el nombre del archivo es el slug)
- **Cargador:** `lib/posts.ts` lee la carpeta en build time y parsea frontmatter + Markdown a `ContentBlock[]` (cero dependencias externas). Tolera que la carpeta no exista o esté vacía.
- **Renderizado:** SSG vía `generateStaticParams()` en `app/blog/[slug]/page.tsx`; slugs desconocidos devuelven 404 (`dynamicParams = false`)
- **Filtro de categoría:** `/blog?categoria=slug` — query param sobre `app/blog/page.tsx`, no rutas propias (ver nota 2026-08-15)
- **Derivados automáticos:** tabla de contenidos (de los `##`), tiempo de lectura (si falta `readTime`), sitemap, posts relacionados (misma categoría), imagen OG (`app/blog/[slug]/opengraph-image.tsx`, generada con `next/og` a partir del título y la categoría)
- **Tipo `ContentBlock`:** sistema de bloques tipados que produce el parser
- **`components/sections/BlogPreviewSection.tsx`**: muestra los 3 posts más recientes en la homepage; retorna `null` si el blog está vacío (no genera enlaces rotos)

#### Tipos de ContentBlock disponibles

```ts
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "highlight"; label: string; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "cta"; heading; text; primaryLink; primaryText; secondaryLink?; secondaryText? }
```

#### Campos del tipo `Post`

```ts
interface Post {
  slug: string
  category: string       // "Consultoría" | "Evaluación Financiera" | "IA Generativa" | "Financiación" | "Metodología" | "Casos de estudio"
  title: string
  excerpt: string
  metaDescription?: string   // si diferente al excerpt
  date: string               // YYYY-MM-DD
  readTime: string           // "8 min"
  featured: boolean          // solo 1 post a la vez
  tocItems?: string[]        // tabla de contenidos
  content?: ContentBlock[]   // si vacío → muestra placeholder
}
```

### Posts existentes: ninguno (blog vacío, ver arriba)

Los posts que existieron hasta 2026-07-06 cubrían estas líneas — útiles como referencia
de qué volver a escribir, con contenido nuevo:

- **Expertise/metodología**: modelos probabilísticos vs. VPN/TIR, IA generativa en
  decisiones organizacionales, financiación de innovación en LATAM, incertidumbre
  tecnológica vs. riesgo de mercado, caso de estudio PRIME-10, opciones reales.
- **Intención SEO/comercial**: consultoría en innovación empresarial en Colombia,
  consultoría en innovación para pymes, tipos de consultoría en innovación, cómo elegir
  consultoría de innovación en Colombia.

### Estrategia del blog

El blog opera en dos capas de contenido:

**Capa 1 — Intención comercial (ya ejecutada parcialmente):**
Posts de tipo "guía" que capturan búsquedas con intención de contratar: "consultoría en innovación para pymes Colombia", "cómo elegir consultoría de innovación". CTAs internos en cada post dirigen a `/contacto` y `/servicios`.

**Capa 2 — Autoridad académica (por completar):**
Posts profundos sobre las metodologías de Augusto (modelos probabilísticos, opciones reales, PRIME-10). Demuestran expertise único, son citables por IAs, y atraen tráfico de profesionales y tomadores de decisión.

### Componentes del blog

- **`app/blog/page.tsx`** — grid de previews (`BlogPostCard`) de todos los artículos, filtro por categoría vía `?categoria=slug` (mismo componente, sin ruta propia), estado vacío con mensaje + newsletter
- **`app/blog/[slug]/page.tsx`** — página individual (la que indexa Google): breadcrumb, tabla de contenidos con anclas, cuerpo vía `<PostBody>`, sidebar con perfil, posts relacionados, newsletter
- **`components/BlogPostCard.tsx`** — tarjeta de preview (título, imagen OG del post, extracto, botón "Leer más"), usada en `/blog`, `/blog?categoria=slug` y `BlogPreviewSection`
- **`components/PostBody.tsx`** — renderizador del cuerpo (`ContentBlock[]` → JSX) en la página individual del artículo
- **`components/NewsletterForm.tsx`** — formulario de captura de email (conectado a `/api/newsletter` → Google Sheets)
- **Artículos relacionados** — dinámicos, misma categoría (`getRelatedPosts()` en `lib/posts.ts`)

### Categorías de contenido

```
"Consultoría"         → bg-primary/10 text-primary
"Evaluación Financiera" → bg-primary/10 text-primary
"IA Generativa"       → bg-accent/10 text-accent
"Financiación"        → bg-green-50 text-green-700
"Metodología"         → bg-purple-50 text-purple-700
"Casos de estudio"    → bg-amber-50 text-amber-700
```

---

## 10. Componentes principales

### Layout global (`app/layout.tsx`)
- Fuentes Google: Poppins + Open Sans via CSS variables
- Schemas globales: `Person + WebSite + ProfessionalService` en `<head>`
- Estructura: `<Navbar> + <main> + <Footer> + <WhatsAppButton>`

### `<Navbar>` (`components/Navbar.tsx`)
- Links: Inicio / Servicios / PRIME-10 / Blog / Docencia / Contacto
- Sticky con scroll, mobile hamburger menu

### `<Footer>` (`components/Footer.tsx`)
- Logo, descripción breve, links de navegación, redes sociales, copyright

### `<SchemaScript>` (`components/SchemaScript.tsx`)
- Inyecta JSON-LD como `<script type="application/ld+json">` en el `<head>`
- Acepta un array de schemas y los emite en **un solo bloque `@graph`** (no N scripts
  sueltos), para que las referencias cruzadas por `@id` (`author`, `publisher`,
  `provider` → `/#person`) vivan en el mismo documento. El `@context` de cada nodo se
  quita y se declara una sola vez en la raíz del grafo (2026-08-15)

### Íconos de marca e imagen OG (2026-08-15)

Los tres íconos se detectan por **convención de archivo** de Next (no hay `<link>` escrito
a mano en `layout.tsx`; Next los inyecta y les pone hash de caché):

| Archivo | Tamaño | Uso |
| --- | --- | --- |
| `app/favicon.ico` | 256×256 | Pestaña del navegador |
| `app/icon.png` | 512×512 | Android, PWA |
| `app/apple-icon.png` | 180×180 | iOS, "Añadir a pantalla de inicio" |

Los dos PNG se generaron a partir del `.ico` existente (cruz blanca sobre el azul de
marca). **Sin transparencia a propósito**: iOS aplica sus propias esquinas redondeadas y
un PNG transparente saldría con fondo negro.

`app/opengraph-image.tsx` ya no es una tarjeta solo-texto: muestra la foto recortada
(`public/profile-photo-cutout.png`) sobre el azul con el patrón de puntos del hero. La
foto se embebe como **data URI leyendo el archivo con `fs` en build** — Satori no resuelve
rutas de `/public` ni hace fetch. Ojo con el gradiente de puntos: Satori exige unidad en
cada parada (`transparent 1px`); escribir `transparent 0` rompe el render con
`Missing )` y devuelve 500.

Nota: si el favicon "no aparece" en el navegador o en resultados de Google, casi siempre
es caché — los favicons viven en un almacén aparte que `Ctrl+Shift+R` no limpia, y Google
refresca el suyo solo al volver a rastrear el sitio (puede tardar semanas).

### `<WhatsAppButton>` (`components/WhatsAppButton.tsx`)
- Botón flotante fijo abajo a la derecha, visible en todo el sitio
- Número centralizado en `lib/site.ts` (`WHATSAPP_NUMBER` + helper `whatsappUrl(mensaje)`)
- Es el canal principal de conversión: los CTA de hero, servicios, PRIME-10, CTA final de home y contacto abren WhatsApp en vez del formulario (el formulario sigue disponible en `/contacto` como alternativa)

### Secciones de la homepage

| Componente | Contenido |
|-----------|-----------|
| `HeroSection` | Foto profesional, headline, descripción, 2 CTAs, stats row |
| `ServicesSection` | 3 servicios en cards con beneficios listados |
| `Prime10Banner` | Banner destacado con CTA al framework |
| `AffiliationsSection` | Uniandes + EAFIT + otras afiliaciones |
| `TestimonialsSection` | Testimonios de clientes (placeholder) |
| `BlogPreviewSection` | Vista previa de últimos posts |
| `CTASection` | CTA final — "Agenda una consulta gratuita" |
| `StatsSection` | Sección de stats (removida de homepage, existe el componente) |

### APIs (`app/api/`)
- `/api/contact/route.ts` — maneja formulario de contacto → envía por Resend (requiere `RESEND_API_KEY`)
- `/api/newsletter/route.ts` — maneja suscripciones al newsletter → agrega fila a Google Sheets (requiere `GOOGLE_SHEETS_WEBHOOK_URL`)
- Pasos de configuración de ambos servicios en `docs/INTEGRACIONES.md`

---

## 11. Activos públicos relevantes

| Archivo | Descripción |
|---------|-------------|
| `/public/profile-photo.jpg` | Foto profesional de Augusto, optimizada (~70 KB, antes 2.1 MB en PNG) — usada en Hero + Sobre vía `next/image` |
| `/public/llms.txt` | Archivo para motores de IA — preguntas y respuestas |

Las imágenes OG (portada del sitio y de cada artículo) ya no son archivos estáticos:
se generan en build time con `next/og` (`app/opengraph-image.tsx` y
`app/blog/[slug]/opengraph-image.tsx`) — no hay que crear ni subir ninguna imagen.

---

## 12. Deuda técnica y tareas pendientes

### Contenido del blog (alta prioridad)
- [x] Publicar el primer post real (`que-es-un-beneficio-tributario-colombia`, 2026-08-10)
- [ ] Publicar los siguientes posts del calendario (ver `docs/PLAN-CONTENIDO-BLOG.md`)
- [x] `/blog` como grid de previews (título, imagen, extracto, botón), con URL propia por artículo (2026-08-11, reemplaza el feed de contenido completo de 2026-07)
- [x] Hacer dinámico el bloque de "artículos relacionados" (misma categoría, 2026-07)
- [x] Filtro funcional por categoría — páginas estáticas `/blog/categoria/[categoria]` (2026-07)
- [x] Migrar posts a archivos Markdown en `content/blog/` (2026-07)
- [x] Imagen OG automática por artículo (2026-07)
- [x] Links `[texto](url)` a fuentes dentro del cuerpo del post (2026-08-11)

### Funcionalidad
- [x] Conectar `/api/contact` a Resend (código listo, falta que el usuario cree la cuenta — ver `docs/INTEGRACIONES.md`)
- [x] Conectar `/api/newsletter` a Google Sheets (código listo, falta que el usuario despliegue el Apps Script — ver `docs/INTEGRACIONES.md`)
- [x] Botón de WhatsApp como canal principal de contacto en todo el sitio (2026-07)
- [ ] Agregar paginación al blog cuando haya muchos posts

### SEO / GEO
- [x] Foto de perfil optimizada + `next/image` (2026-07)
- [x] OG title/url específico por página en `/prime-10`, `/docencia`, `/blog` (2026-08-11 — antes heredaban el de la home)
- [x] OG title/url en las 3 subpáginas de `/servicios`, `/medios`, `/contacto` y `/blog/categoria/[categoria]` (2026-08-11 — mismo bug encontrado en una segunda pasada, ver nota en 8.1)
- [x] `BreadcrumbList` en `/docencia` — era la única página del sitio sin ningún JSON-LD (2026-08-11)
- [x] `@id`/`url` en cada `Offer.itemOffered` del catálogo de servicios, apuntando a su subpágina real (2026-08-11)
- [x] `mainEntityOfPage`/`isPartOf` en el schema `BlogPosting` (2026-08-11)
- [x] Token de user-agent corregido: `Google-Extended` (no `Googlebot-Extended`) en `app/robots.ts` (2026-08-11)
- [x] Regla `/studio/` eliminada de `robots.ts` — no existe esa ruta en el proyecto (2026-08-11)
- [x] `public/llms.txt` actualizado con los 2 posts del blog y `/docencia` (2026-08-11)
- [x] `/servicios/beneficios-tributarios-innovacion` agregada a `sitemap.ts` (faltaba por completo — solo era alcanzable vía los 2 posts del blog) (2026-08-11)
- [x] Enlaces internos home → servicio de beneficios tributarios (tarjeta H3 en `ServicesSection.tsx` sin `href`, footer apuntaba al ancla `#financiacion` en vez de la página completa) (2026-08-11)
- [x] Botón "Ver el servicio completo" en la sección de financiación de `/servicios`, además del CTA de WhatsApp (2026-08-11)
- [x] Badge de categoría en `BlogPostCard.tsx` ahora enlaza a `/blog/categoria/[categoria]` (antes era texto plano, sin ruta desde el home hacia la categoría) (2026-08-11)
- [x] `FAQPage` schema en `/blog/que-es-un-beneficio-tributario-colombia` a partir de sus H2 en formato pregunta (2026-08-11)
- [x] `about` (CNBT, Minciencias, DIAN, países) en `BlogPosting` de ambos posts de beneficios tributarios + "Beneficios tributarios para I+D+i" en `knowsAbout` del `PersonSchema` + `inLanguage` en `WebSite` (2026-08-11)
- [x] Byline del autor en los posts del blog enlazado a `/sobre` (hero + sidebar) (2026-08-11)
- [x] Disclaimer YMYL ("no constituye asesoría tributaria/legal individualizada") en ambos posts de beneficios tributarios (2026-08-11)
- [x] `og:image` propio + `twitter:title/description` explícitos en `/blog/categoria/[categoria]` (heredaban los del home) (2026-08-11)
- [ ] Agregar `dateModified` diferente a `datePublished` en posts actualizados (ya soportado por el sistema, falta usarlo al editar posts) — **para los posts de beneficios tributarios en particular: revisar cada enero, cuando la DIAN publica el UVT del año**, y los equivalentes UTM/UIT/pesos de los países citados en el comparativo. Aunque las cifras no cambien, marcar `dateModified` como "revisado, sin cambios" mantiene la señal de frescura para Google y los motores de IA.
- [ ] Foto real en sidebar del blog post (actualmente usa iniciales "AR")
- [ ] Agregar más entidades a `sameAs` en PersonSchema — **necesita confirmación de Augusto**: ¿la cuenta TikTok @retro_ciencia y el show de Spotify de RetroCiencia son de su propiedad/operación directa? (no asumir); ¿existe ORCID o Google Scholar para la investigación doctoral?
- [x] Estadística "93% tasa de aprobación" acotada a "en mi práctica actual de consultoría" en `/servicios` y en el post, para no confundirse con el 85% (Inventta, 2015-2016) de `/sobre` (2026-08-11) — sigue sin fuente/fecha/muestra verificable si se quiere citar con más rigor
- [ ] Sin fecha "última actualización" visible en `/sobre`, `/servicios`, `/prime-10`, `/docencia` (sí la tienen `/politica-privacidad` y los posts del blog) — mecánico de agregar una vez se defina el patrón
- [x] `/blog/categoria/[categoria]` eliminada: el filtro por categoría ahora vive en `/blog?categoria=slug` (query param sobre la misma página) en vez de páginas casi-duplicadas por categoría — pedido explícito de Augusto, "no quiero una página extra". Se quitó de `sitemap.ts`, se actualizaron los enlaces en `BlogPostCard.tsx` y las referencias en `llms.txt`/`ESTRUCTURA.md`/`COMO-PUBLICAR.md` (2026-08-15)
- [x] 5 `<title>` recortados a menos de 65 caracteres (incluyendo el sufijo `" | Augusto Ruiz"` de 16 caracteres que agrega el template en `app/layout.tsx`) en `/blog`, los 2 posts de beneficios tributarios, `/prime-10` y `/servicios/beneficios-tributarios-innovacion` — hallazgo de auditoría SEO (2026-08-15)
- [ ] LCP móvil en 4.3s (PageSpeed Insights, 2026-08-11, sobre el sitio en producción) — Performance 84/100 en móvil, SEO 100/100. Insights de PSI: "Improve image delivery" (51 KiB) y "Render-blocking requests" (840ms). No es una regresión de esta sesión; queda pendiente investigar con más profundidad (Chrome DevTools Performance panel) qué recurso específico bloquea el render antes de tocar nada — priorizar sobre todo si el LCP no baja de 2.5s tras el próximo deploy.
- [ ] Copy del newsletter promete "cada semana" con solo 2 posts publicados en 2 días — decisión de Augusto: suavizar el texto o sostener la cadencia semanal en los próximos posts
- [ ] Sin política editorial/de corrección visible en el sitio
- [ ] Credenciales de Augusto más delgadas en `/prime-10` y `/docencia` que en `/sobre` — falta franja de crédito consistente
- [ ] Actualizar `/medios` con apariciones reales (URLs reales, no `#`)
- [ ] Considerar agregar `VideoObject` schema si hay charlas en YouTube

#### Auditoría SEO/GEO del 2026-08-15 (4 especialistas en paralelo, Tier 0 — solo código fuente)

Scores: **Search SEO 87/100 (B+)** · **AI Visibility 82/100 (B)**.

Aplicado en esa sesión:
- [x] `/politica-privacidad` agregada a `staticRoutes` en `app/sitemap.ts` — tenía `robots: index:true` y canonical propio pero estaba fuera del sitemap (2026-08-15)
- [x] Meta description de la home recortada de 208 a ~157 caracteres en `app/page.tsx` (2026-08-15)
- [x] 4 AI crawlers explícitos agregados a `app/robots.ts`: `OAI-SearchBot` (ChatGPT Search), `Applebot-Extended`, `Amazonbot`, `Meta-ExternalAgent`. Ya pasaban por la regla `*` — esto es blindaje ante un futuro cambio del wildcard, no un desbloqueo (2026-08-15)
- [x] `SchemaScript` unificado en un solo `@graph` por documento (2026-08-15)
- [x] `courseListSchema()` + 6 nodos `Course` en `/docencia` — sin `hasCourseInstance`/`startDate`, se mantiene la omisión deliberada de fechas no confirmadas (2026-08-15)
- [x] Enlace a `dian.gov.co` en el paso 4 de `que-es-un-beneficio-tributario-colombia.md` — era la única entidad citada como autoridad sin fuente enlazada, a diferencia de Minciencias y Minambiente (2026-08-15)

Pendiente, **bloqueado por datos que solo tiene Augusto**:
- [ ] `sameAs` de `personSchema` sin ORCID / Google Scholar / perfil docente Uniandes — hallazgo levantado de forma independiente por el especialista GEO y el de schema. "Augusto Ruiz" es un nombre ambiguo y todo el posicionamiento descansa en credenciales de investigación; sin anclas académicas los motores de IA no pueden desambiguar la entidad. **No inventar URLs.**
- [ ] Cifra "93% de aprobación" sin denominador ni ventana temporal, repetida en 3 lugares (`app/servicios/beneficios-tributarios-innovacion/page.tsx:124,132` y `que-es-un-beneficio-tributario-colombia.md:91`). Es el mejor dato original del sitio —justo lo que los motores de IA citan— pero sin "sobre N proyectos entre 20XX-20XX" se descarta como marketing.
- [ ] Registro DNDA de PRIME-10 afirmado 4 veces sin número de registro verificable (`lib/schema.ts`, `llms.txt`, `/prime-10`)
- [ ] Título "…en LatAm 2026" ancla un año fijo (`beneficios-tributarios-idi-america-latina-comparativo.md:2-5`) — decisión editorial: o refresco anual comprometido, o desanclar y dejar que la columna "Vigencia" comunique actualidad
- [ ] Ningún post usa `dateModified` pese a que `lib/posts.ts` y `app/blog/[slug]/page.tsx:177-190` ya lo soportan y renderizan "Actualizado el…". Falta la práctica, no el código — con contenido normativo (UVT, cupos, prórrogas) esto envejece rápido

Sin verificar (`needs_api`, requieren el sitio en vivo o APIs no disponibles):
- [ ] **Si el CDN/Vercel bloquea a los AI crawlers pese a `robots.ts`** — potencialmente el hallazgo de mayor impacto: invalidaría todo el trabajo GEO. Verificar con `curl -A "GPTBot" -I https://www.augustoruiz.org/` o en el panel de Vercel → Firewall/Bot Protection
- [ ] Core Web Vitals de campo y mobile-friendliness renderizado (sin PSI ni Playwright en esa sesión)
- [ ] Vigencia del enlace OCDE citado en el comparativo — dio 403, probablemente anti-bot y no enlace roto
- [ ] Rich Results Test sobre `/`, `/blog/[slug]`, `/prime-10`, `/servicios`, `/docencia`

#### Auditoría GEO del 2026-08-15 — keywords "consultoría / asesoría / consultor beneficios tributarios"

Auditoría sobre el **sitio en vivo** con objetivo comercial explícito. AI Visibility para
ese nicho: **78/100 (C+)**. Diagnóstico: el sitio respondía muy bien la consulta
informativa ("¿qué es un beneficio tributario?") pero no la **transaccional**
("¿quién me asesora?"). El H1, el `<title>` y el `Service` schema ya usaban el vocabulario
de búsqueda correcto — el hueco era de redacción, no de infraestructura.

Verificado en vivo y **descartado como problema**: GPTBot, ClaudeBot, PerplexityBot y
OAI-SearchBot reciben **200 OK** en `https://www.augustoruiz.org/`. El CDN no los bloquea.

Contexto competitivo (búsqueda real, 2026-08-15): para estas consultas aparecen EY, PwC,
AM&C, Russell Bedford y Cidei — todas *firmas*. augustoruiz.org no aparecía en ninguna. La
consulta ganable no es "mejores firmas de beneficios tributarios" sino "consultor
especializado en beneficios tributarios I+D+i Colombia", donde el rigor académico y el
foco en Minciencias/CNBT son ventaja.

Aplicado:
- [x] **Frase ancla de entidad** en el intro de `/servicios/beneficios-tributarios-innovacion`: ahora abre con sujeto explícito ("Augusto Ruiz es consultor en beneficios tributarios en Colombia…"). Antes describía el servicio sin nombrar a nadie, y ese es justo el patrón (entidad + servicio + geografía) que un motor de IA necesita extraer (2026-08-15)
- [x] **2 FAQs transaccionales al inicio del array** (el orden importa para la extracción): "¿Quién ofrece consultoría en beneficios tributarios en Colombia?" y "¿Cómo elijo un consultor de beneficios tributarios?". La segunda permite definir los criterios de selección en los que Augusto gana. Ambas usan solo datos ya verificables en el sitio — sin inventar años de experiencia ni nº de proyectos (2026-08-15)
- [x] **Artículos 256 y 256-1 del Estatuto Tributario** citados en el FAQ de I+D+i de la página comercial; antes la cita normativa vivía solo en el blog, obligando al motor a cruzar dos URLs (2026-08-15)
- [x] **Mención en el hero del home** con enlace interno a la página de servicio (2026-08-15)

Pendiente (ítem 3 del plan, **bloqueado por datos de Augusto**):
- [ ] Bloque de atributos comparables en la página de servicio: años de experiencia, nº de proyectos gestionados, cobertura geográfica. Son los atributos discretos que un motor de IA necesita para incluir la entidad en una respuesta tipo lista comparativa. Sin ellos es difícil aparecer junto a EY/PwC.

Anotado sin acción: los testimonios muestran **5 estrellas fijas e idénticas** para los 6 casos (`components/sections/TestimonialsSection.tsx:63-69`) sin fuente de rating real. Correctamente **no** hay `AggregateRating`/`Review` en el JSON-LD —eso está bien y debe seguir así mientras no exista una fuente verificable— pero el elemento visual en sí puede leerse como reseña simulada. Vale la pena reconsiderarlo con Augusto.

### Nuevos posts recomendados (por intención de búsqueda)
- "evaluación financiera de proyectos de innovación Colombia" 
- "cómo acceder a fondos Minciencias pymes"
- "simulación Monte Carlo proyectos de innovación"
- "opciones reales vs VPN en innovación"
- "IA generativa en empresas colombianas — casos de uso"
- "PRIME-10 qué es y cómo funciona"

---

## 13. Cómo agregar un nuevo post al blog

**Flujo acordado con el usuario:** Daniel/Augusto envía a Claude **solo el título y el
texto** del artículo (y opcionalmente la categoría). Claude hace todo lo demás:

1. Elige el slug (nombre de archivo) con la keyword principal.
2. Redacta `excerpt` y `metaDescription` (150–160 caracteres).
3. Formatea el cuerpo en Markdown: `##` para secciones, `:::destacado` para datos
   clave, listas, y **siempre cierra con un bloque `:::cta`** — el canal principal es
   WhatsApp (`https://wa.me/573005348153?text=...`).
4. Asigna la fecha del día. Si es una actualización de un post viejo, agrega `dateModified`.
5. Corre `npm run build` y verifica el post en preview antes de darlo por publicado.
6. Si algo estructural cambia, actualiza este documento y `ESTRUCTURA.md` en el mismo turno.

Instrucciones detalladas y el template completo viven en
**`content/blog/COMO-PUBLICAR.md`** (fuente de verdad — mantenerla sincronizada con
este resumen).

Al crear el archivo en `content/blog/slug-con-keyword.md` no hay que tocar nada más: el
post aparece automáticamente en el grid de previews de `/blog`, en su página de
categoría, en el sitemap, con imagen OG generada y con schema `BlogPosting`. Lo que
**no** es automático (revisar checklist completo en 8.1-C): el color de categoría en
`BlogPostCard.tsx` si es una categoría nueva, mover la fila en
`docs/PLAN-CONTENIDO-BLOG.md`, y los links `[texto](url)` a fuentes si el post las cita.

---

## 13.1 WhatsApp e integraciones (desde 2026-07-06)

- **WhatsApp es el canal principal de contacto.** Número: `+57 300 5348153`, centralizado en `lib/site.ts` (`WHATSAPP_NUMBER` + `whatsappUrl()`). Botón flotante en todo el sitio + botones "Contáctame por WhatsApp" en hero, servicios, PRIME-10, CTA final de home y contacto. El formulario de `/contacto` se conserva como alternativa.
- **Newsletter → Google Sheets**: `/api/newsletter` hace POST a un Google Apps Script (`GOOGLE_SHEETS_WEBHOOK_URL`) que agrega el correo como fila en una hoja. El usuario decide qué extensión de Sheets usa para enviar correos desde ahí.
- **Contacto → Resend**: `/api/contact` ya está programado para enviar el mensaje por Resend (`RESEND_API_KEY`); falta que el usuario cree la cuenta y verifique el dominio.
- Pasos de configuración completos de ambas integraciones: **`docs/INTEGRACIONES.md`**.

---

## 14. Keywords estratégicas por prioridad

### Tier 1 — Keywords de conversión (máxima prioridad)
- "consultoría en innovación empresarial Colombia"
- "consultoría en innovación tecnológica Colombia"
- "consultor innovación Colombia"
- "consultoría en innovación para pymes Colombia"
- "consultoría innovación Medellín"
- "consultoría innovación Bogotá"

### Tier 2 — Keywords de metodología / expertise
- "evaluación financiera innovación"
- "modelos probabilísticos innovación"
- "opciones reales innovación"
- "simulación Monte Carlo proyectos"
- "PRIME-10 assessment"
- "incertidumbre tecnológica evaluación"

### Tier 3 — Keywords long-tail / informacionales
- "cómo elegir consultoría en innovación Colombia"
- "tipos de consultoría en innovación"
- "fuentes de financiación innovación Colombia"
- "Minciencias convocatorias pymes"
- "IA generativa organizaciones Colombia"
- "evaluación financiera proyectos I+D"

### Keywords de marca (GEO)
- "Augusto Ruiz consultor innovación"
- "Augusto Ruiz PRIME-10"
- "Augusto Ruiz Uniandes EAFIT"

---

## 15. Principios de contenido del blog

Toda pieza de contenido debe seguir estos principios alineados con E-E-A-T:

1. **Experiencia**: incluir ejemplos y datos de proyectos reales asesorados
2. **Expertise**: referenciar metodologías propias (PRIME-10, Monte Carlo) y el contexto doctoral
3. **Autoridad**: mencionar Uniandes y EAFIT en el byline; citar investigación propia
4. **Confianza**: incluir datos con fuentes, CTAs a consulta gratuita (sin presión), checklist verificables
5. **Contexto LATAM**: adaptar siempre al ecosistema colombiano (mencionar Minciencias, iNNpulsa, etc.)
6. **CTA en cada post**: mínimo 1 bloque `cta` tipo que dirija a `/contacto` o `/servicios`

---

*Este documento debe actualizarse cuando cambien: la estrategia de posicionamiento, los servicios ofrecidos, la arquitectura del proyecto, o cuando se agreguen capacidades técnicas nuevas (CMS, analytics, etc.).*
