# Contexto Completo del Proyecto — augustoruiz.org

> Documento de referencia para cualquier sesión de trabajo en este proyecto.
> Última actualización: 2026-07-06

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
- **`Article`** — en cada post del blog (`datePublished`, `dateModified`, autor)
- **`FAQPage`** — en `/servicios` y `/prime-10`
- **`BreadcrumbList`** — en todas las páginas interiores

Funciones disponibles en `lib/schema.ts`:
```ts
articleSchema({ title, description, slug, datePublished, dateModified })
faqSchema(faqs: { q, a }[])
breadcrumbSchema(items: { name, url }[])
```

### robots.ts — AI crawlers permitidos

```
GPTBot ✓ | ClaudeBot ✓ | PerplexityBot ✓ | Googlebot-Extended ✓ | anthropic-ai ✓
```
`/api/` y `/studio/` están bloqueados.

### sitemap.ts

Genera sitemap dinámico con 8 rutas estáticas + slugs de blog + páginas de categoría (se derivan de `content/blog/`, hoy vacío → 8 URLs).

### llms.txt (`/public/llms.txt`)

Archivo optimizado para IA. Estructura de preguntas y respuestas que responde directamente a queries que los modelos de IA reciben sobre consultoría de innovación en Colombia. Cubre:
- Quién es Augusto Ruiz
- Mejores consultorías de innovación en Colombia
- Servicios para startups y pymes
- Metodologías (PRIME-10, Monte Carlo, opciones reales)
- Ecosistema de financiación colombiano
- Cómo elegir consultoría de innovación

---

## 9. Blog — arquitectura y estrategia de contenido

### Estado actual: vacío a propósito (desde 2026-07-06)

Los 10 posts anteriores (6 de expertise en placeholder + 4 con contenido SEO completo)
se **borraron definitivamente** para empezar a publicar contenido real desde cero.
`content/blog/` solo contiene `.gitkeep`. El flujo de publicación queda documentado en
`content/blog/COMO-PUBLICAR.md` (ver sección 13).

### Cómo se lee el blog (decisión de producto, 2026-07-06)

- **`/blog` es un feed**: muestra el **contenido completo** de todos los artículos, uno
  debajo del otro — el visitante lee todo sin hacer clic ni ser redirigido.
- Cada artículo **conserva su URL individual** (`/blog/[slug]`) porque es la que
  Google indexa y posiciona por keyword — el feed no reemplaza el SEO, lo complementa.
- `/blog/categoria/[categoria]` es el mismo feed, filtrado.
- El componente `components/FeedArticle.tsx` renderiza un artículo dentro del feed;
  `components/PostBody.tsx` es el renderizador compartido del cuerpo (usado tanto en
  el feed como en la página individual).

### Infraestructura técnica

- **Fuente de datos:** `content/blog/*.md` — un archivo Markdown por artículo (el nombre del archivo es el slug)
- **Cargador:** `lib/posts.ts` lee la carpeta en build time y parsea frontmatter + Markdown a `ContentBlock[]` (cero dependencias externas). Tolera que la carpeta no exista o esté vacía.
- **Renderizado:** SSG vía `generateStaticParams()` en `app/blog/[slug]/page.tsx`; slugs desconocidos devuelven 404 (`dynamicParams = false`)
- **Páginas de categoría:** `/blog/categoria/[categoria]` — estáticas, generadas de las categorías existentes
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

- **`app/blog/page.tsx`** — feed con el contenido completo de todos los artículos, filtro por categoría (enlaza a `/blog/categoria/[categoria]`), estado vacío con mensaje + newsletter
- **`app/blog/categoria/[categoria]/page.tsx`** — mismo feed, filtrado
- **`app/blog/[slug]/page.tsx`** — página individual (la que indexa Google): breadcrumb, tabla de contenidos con anclas, cuerpo vía `<PostBody>`, sidebar con perfil, posts relacionados, newsletter
- **`components/FeedArticle.tsx`** — un artículo completo dentro del feed (título enlazado a su URL propia + cuerpo sin anclas duplicadas)
- **`components/PostBody.tsx`** — renderizador compartido del cuerpo (`ContentBlock[]` → JSX), con prop `withAnchors` para activar/desactivar los ids de sección
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
- Acepta un array de schemas

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
- [ ] Escribir y publicar los primeros posts reales (blog vacío desde 2026-07-06, ver `content/blog/COMO-PUBLICAR.md`)
- [x] Feed de contenido completo en `/blog` sin redirección, con URL propia por artículo (2026-07)
- [x] Hacer dinámico el bloque de "artículos relacionados" (misma categoría, 2026-07)
- [x] Filtro funcional por categoría — páginas estáticas `/blog/categoria/[categoria]` (2026-07)
- [x] Migrar posts a archivos Markdown en `content/blog/` (2026-07)
- [x] Imagen OG automática por artículo (2026-07)

### Funcionalidad
- [x] Conectar `/api/contact` a Resend (código listo, falta que el usuario cree la cuenta — ver `docs/INTEGRACIONES.md`)
- [x] Conectar `/api/newsletter` a Google Sheets (código listo, falta que el usuario despliegue el Apps Script — ver `docs/INTEGRACIONES.md`)
- [x] Botón de WhatsApp como canal principal de contacto en todo el sitio (2026-07)
- [ ] Agregar paginación al blog cuando haya muchos posts

### SEO / GEO
- [x] Foto de perfil optimizada + `next/image` (2026-07)
- [ ] Agregar `dateModified` diferente a `datePublished` en posts actualizados (ya soportado por el sistema, falta usarlo al editar posts)
- [ ] Foto real en sidebar del blog post (actualmente usa iniciales "AR")
- [ ] Agregar más entidades a `sameAs` en PersonSchema (ResearchGate, Google Scholar, ORCID)
- [ ] Actualizar `/medios` con apariciones reales (URLs reales, no `#`)
- [ ] Considerar agregar `VideoObject` schema si hay charlas en YouTube

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
post aparece automáticamente en el feed de `/blog`, en su página de categoría, en el
sitemap, con imagen OG generada y con schema `Article`.

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
