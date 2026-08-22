# Guía de estructura del proyecto — augusto-ruiz-org

Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**

---

## Mapa rápido — "¿Dónde edito X?"

| Quiero editar... | Archivo(s) a abrir |
|---|---|
| Texto de la página de inicio | `app/page.tsx` + secciones en `components/sections/` |
| Hero (título, subtítulo, CTA) | `components/sections/HeroSection.tsx` |
| Estadísticas (años, proyectos...) | `components/sections/StatsSection.tsx` |
| Servicios (cards) | `components/sections/ServicesSection.tsx` |
| Metodologías de innovación (home) | `components/sections/MetodologiasSection.tsx` — tarjeta destacada de PRIME-10 + 6 metodologías; el H2 posiciona "metodologías de innovación" |
| Testimonios | `components/sections/TestimonialsSection.tsx` |
| Banner PRIME-10 | `components/sections/Prime10Banner.tsx` |
| Preview de blog en home | `components/sections/BlogPreviewSection.tsx` |
| Afiliaciones (logos) | `components/sections/AffiliationsSection.tsx` |
| CTA final de home | `components/sections/CTASection.tsx` |
| Plantilla de las 3 páginas de servicio | `components/sections/ServicioDetalle.tsx` — props en `ServicioDetalleProps`; `comparativa` es opcional (con `enlace` opcional dentro) y hoy la usan beneficios tributarios y evaluación financiera |
| **Publicar un artículo nuevo** | `content/blog/COMO-PUBLICAR.md` — instrucciones para Claude |
| **Artículos del blog** | `content/blog/*.md` — un archivo por artículo |
| Página de blog (grid de previews) | `app/blog/page.tsx` — muestra tarjetas (título, imagen, extracto, botón) que enlazan a cada artículo |
| Tarjeta de preview en el grid | `components/BlogPostCard.tsx` |
| Página individual de artículo (URL propia, para Google) | `app/blog/[slug]/page.tsx` |
| Filtro por categoría de blog (query param, misma página) | `app/blog/page.tsx` — `?categoria=slug` |
| Renderizador del cuerpo del artículo | `components/PostBody.tsx` — usado en el feed y en la página individual |
| Cargador/parser de artículos | `lib/posts.ts` |
| Imagen OG automática por artículo | `app/blog/[slug]/opengraph-image.tsx` |
| Imagen OG por defecto del sitio | `app/opengraph-image.tsx` |
| Íconos de marca (pestaña, Android, iOS) | `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` |
| Página Sobre mí | `app/sobre/page.tsx` |
| Página Servicios | `app/servicios/page.tsx` |
| Página PRIME-10 | `app/prime-10/page.tsx` |
| Página Docencia | `app/docencia/page.tsx` |
| Página Medios | `app/medios/page.tsx` |
| Página Contacto | `app/contacto/page.tsx` |
| **Número de WhatsApp (todo el sitio)** | `lib/site.ts` — un solo lugar para cambiarlo |
| Botón flotante de WhatsApp | `components/WhatsAppButton.tsx` — montado en `app/layout.tsx` |
| Formulario de contacto | `components/ContactForm.tsx` |
| Formulario newsletter | `components/NewsletterForm.tsx` |
| Navbar (menú) | `components/Navbar.tsx` |
| Footer | `components/Footer.tsx` |
| SEO global (title, description, keywords) | `app/layout.tsx` |
| SEO por página | Cada `app/[ruta]/page.tsx` — busca `export const metadata` |
| Schema.org (datos estructurados) | `lib/schema.ts` |
| Foto de perfil | `public/profile-photo.jpg` — reemplazar con mismo nombre (optimizada, ~70 KB) |
| Colores, fuentes, estilos globales | `tailwind.config.ts` + `app/globals.css` |
| API formulario de contacto (→ Resend) | `app/api/contact/route.ts` |
| API newsletter (→ Google Sheets) | `app/api/newsletter/route.ts` |
| **Guía de integraciones** (Sheets, Resend, WhatsApp) | `docs/INTEGRACIONES.md` |
| **Calendario de contenido del blog** | `docs/PLAN-CONTENIDO-BLOG.md` |
| **Mapa de keywords** (clústeres UPME/ANLA y rechazos CNBT) | `docs/MAPA-KEYWORDS-UPME-RECHAZOS.md` |
| **Estrategia de posicionamiento #1 en Colombia** (qué términos perseguir, plan por fases) | `docs/ESTRATEGIA-POSICIONAMIENTO-COLOMBIA.md` |
| Sitemap | `app/sitemap.ts` |
| Robots.txt | `app/robots.ts` |
| llms.txt (visibilidad en IAs) | `public/llms.txt` — Markdown válido: H1 + blockquote + enlaces `[texto](url)` |

---

## Blog — cómo funciona

**El blog está vacío ahora mismo** (`content/blog/` solo tiene un `.gitkeep`) — se vació a propósito para empezar a publicar contenido real. Ver `content/blog/COMO-PUBLICAR.md` para el flujo de publicación.

### Flujo de publicación (usuario → Claude)

El usuario envía a Claude **el título y el texto** del artículo (y opcionalmente la
categoría). Claude se encarga de todo: elegir el slug con la keyword, redactar
`excerpt`/`metaDescription`, formatear el cuerpo en Markdown, poner la fecha, correr el
build y verificar en preview antes de dar por publicado. El detalle completo de este
flujo está en **`content/blog/COMO-PUBLICAR.md`**.

### Dónde se ve el contenido

- **`/blog`** — feed con el **contenido completo de todos los artículos**, uno debajo
  del otro, sin necesidad de hacer clic para leerlos. El título de cada uno enlaza a su
  URL propia.
- **`/blog?categoria=slug`** — mismo feed completo, filtrado por categoría (query param, no ruta propia).
- **`/blog/[slug]`** — la página individual del artículo. Esta es la URL que se indexa
  en Google (tiene su propio canonical, schema Article e imagen OG) — el feed de
  `/blog` existe para que el visitante pueda leer todo sin salir de la página, pero el
  posicionamiento por keyword ocurre en la página individual.

### Los artículos viven en archivos Markdown

Un archivo `.md` por artículo en **`content/blog/`**. No hay CMS ni base de datos. El
nombre del archivo es el slug: `content/blog/mi-articulo.md` → `augustoruiz.org/blog/mi-articulo`.

### Para agregar un artículo nuevo

Crea `content/blog/slug-con-keyword.md` y listo — aparece automáticamente en el feed de
`/blog`, en su categoría, en el sitemap, con su imagen OG y su schema Article.
**No hay que tocar ningún otro archivo.**

### Formato del archivo

```markdown
---
title: "Título del artículo con keyword principal"
category: "Consultoría"
excerpt: "Resumen corto (aparece en el listado del blog)."
metaDescription: "Texto para Google, 150-160 caracteres (opcional, si omites usa excerpt)."
date: "2025-06-01"
dateModified: "2025-07-01"   # opcional — solo si actualizaste el artículo
readTime: "8 min"            # opcional — se calcula solo si lo omites
featured: true               # opcional — solo un artículo destacado a la vez
---

Párrafo de introducción en texto normal.

## Título de sección (H2 — alimenta la tabla de contenidos automáticamente)

### Subtítulo (H3)

Listas con guiones:

- Primer punto
- Segundo punto

**Título opcional de la lista:**
- La línea en negrilla justo antes de la lista se vuelve su encabezado

:::destacado Etiqueta del recuadro
Texto de la caja destacada (borde azul a la izquierda).
:::

:::cta
heading: ¿Listo para empezar?
text: Descripción del llamado a la acción.
primary: /contacto | Agendar consulta
secondary: /servicios | Ver servicios
:::
```

Notas:
- La **tabla de contenidos** se genera sola con los títulos `##` (con enlaces ancla) — solo en la página individual, no en el feed (para no duplicar anclas entre artículos).
- El **tiempo de lectura** se calcula solo si no pones `readTime`.
- Las **categorías** se filtran en `/blog?categoria=slug` (query param sobre la misma página, no páginas propias).
- La **imagen OG** (vista previa al compartir) se genera sola a partir del título y la categoría — no hay que crear ninguna imagen.
- Todo artículo debe cerrar con un bloque `:::cta`. El canal principal es WhatsApp: usa `primary: https://wa.me/573005348153?text=... | Escribir por WhatsApp` (enlaces que empiezan por `http` se abren en pestaña nueva automáticamente).

### Para marcar un artículo como destacado en home

Cambia `featured: true` en el artículo que quieras destacar. Solo debería haber uno con `featured: true` a la vez.

---

## SEO — dónde editar cada cosa

### Metadatos globales (aplican a todo el sitio)
→ `app/layout.tsx` — objeto `metadata` al inicio del archivo  
Edita aquí: title por defecto, description global, keywords, Open Graph, Twitter Card.

### Metadatos por página
→ Cada `app/[ruta]/page.tsx` tiene su propio `export const metadata`  
Ejemplo: para cambiar el title de la página de servicios, abre `app/servicios/page.tsx` y edita el objeto `metadata`.

### Schema.org (datos estructurados para Google y IAs)
→ `lib/schema.ts`  
- `personSchema` — datos de Augusto como persona
- `websiteSchema` — datos del sitio web
- `professionalServiceSchema` — servicios profesionales
- `articleSchema()` — función usada en cada artículo del blog
- `faqSchema()` — para agregar preguntas frecuentes
- `breadcrumbSchema()` — migas de pan
- `courseListSchema()` — un `Course` por cada curso dictado, usado en `/docencia`

Todos se inyectan vía `<SchemaScript>`, que los emite en **un solo bloque `@graph`**
por documento (no un `<script>` por schema).

### Sitemap
→ `app/sitemap.ts` — los posts y páginas de categoría se derivan automáticamente de
`content/blog/`; las rutas estáticas (páginas que no son de blog) están en un array
`staticRoutes` que hay que actualizar a mano al crear una página nueva. Checklist SEO
completa para páginas/posts nuevos: **`CONTEXTO-PROYECTO.md`, sección 8.1**.

---

## Componentes reutilizables

| Componente | Ubicación | Se usa en |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Todas las páginas (via layout) |
| `Footer` | `components/Footer.tsx` | Todas las páginas (via layout) |
| `WhatsAppButton` | `components/WhatsAppButton.tsx` | Botón flotante — todas las páginas (via layout) |
| `SchemaScript` | `components/SchemaScript.tsx` | Layout global — inyecta JSON-LD |
| `ContactForm` | `components/ContactForm.tsx` | `app/contacto/page.tsx` |
| `NewsletterForm` | `components/NewsletterForm.tsx` | Varias páginas |
| `PostBody` | `components/PostBody.tsx` | Renderiza el cuerpo Markdown parseado (página individual del artículo) |
| `BlogPostCard` | `components/BlogPostCard.tsx` | `/blog`, `/blog?categoria=slug` y `BlogPreviewSection` (homepage) — tarjeta de preview: título, imagen, extracto y botón "Leer más" |

---

## Contáctame por WhatsApp — canal principal de conversión

Todos los CTA de "contáctame" del sitio (hero, servicios, PRIME-10, CTA final de home,
contacto, botón flotante) abren un chat de WhatsApp en vez de llevar al formulario. El
formulario de `/contacto` se conserva como alternativa para quien prefiera escribir por
correo.

**Para cambiar el número:** edita la constante `WHATSAPP_NUMBER` en `lib/site.ts` — se
actualiza en todo el sitio automáticamente.

---

## Variables de entorno

Copia `.env.local.example` a `.env.local` y rellena los valores:

```
cp .env.local.example .env.local
```

- `GOOGLE_SHEETS_WEBHOOK_URL` — a dónde se envían los correos del newsletter (Google Sheets)
- `RESEND_API_KEY` — servicio de envío de correo del formulario de contacto

Pasos de configuración completos (crear la hoja, el Apps Script, la cuenta Resend) en
**`docs/INTEGRACIONES.md`**.

---

## Comandos útiles

```bash
npm run dev      # servidor local en localhost:3000
npm run build    # compilar para producción
npm run start    # correr la build de producción
```

---

## Estructura de carpetas completa

```
augusto-ruiz-org/
├── app/                        # Rutas del sitio (Next.js App Router)
│   ├── layout.tsx              # Layout global + SEO global + fuentes + WhatsAppButton
│   ├── page.tsx                # Página de inicio (/)
│   ├── globals.css             # Estilos globales
│   ├── robots.ts               # robots.txt dinámico
│   ├── sitemap.ts              # sitemap.xml dinámico
│   ├── opengraph-image.tsx     # Imagen OG por defecto del sitio (generada)
│   ├── favicon.ico             # Ícono de pestaña 256×256
│   ├── icon.png                # Ícono 512×512 (Android / PWA)
│   ├── apple-icon.png          # Ícono 180×180 (iOS "Añadir a inicio")
│   ├── blog/
│   │   ├── page.tsx            # Feed con el contenido COMPLETO de todos los artículos (/blog)
│   │   ├── [slug]/
│   │   │   ├── page.tsx            # Artículo individual — URL que indexa Google (/blog/slug)
│   │   │   └── opengraph-image.tsx # Imagen OG generada para ese artículo
│   │   └── categoria/[categoria]/page.tsx  # Feed filtrado por categoría
│   ├── sobre/page.tsx          # Sobre mí (/sobre)
│   ├── servicios/page.tsx      # Servicios (/servicios)
│   ├── prime-10/page.tsx       # PRIME-10 (/prime-10)
│   ├── docencia/page.tsx       # Docencia (/docencia)
│   ├── medios/page.tsx         # Medios (/medios)
│   ├── contacto/page.tsx       # Contacto (/contacto) — bloque de WhatsApp + formulario
│   └── api/
│       ├── contact/route.ts    # API endpoint formulario de contacto → Resend
│       └── newsletter/route.ts # API endpoint newsletter → Google Sheets
├── components/
│   ├── Navbar.tsx              # Barra de navegación
│   ├── Footer.tsx              # Pie de página
│   ├── WhatsAppButton.tsx      # Botón flotante de WhatsApp (todo el sitio)
│   ├── ContactForm.tsx         # Formulario de contacto
│   ├── NewsletterForm.tsx      # Formulario newsletter
│   ├── SchemaScript.tsx        # Inyector de JSON-LD
│   ├── PostBody.tsx            # Renderiza el cuerpo Markdown parseado de un post
│   ├── BlogPostCard.tsx        # Tarjeta de preview de post (/blog, categorías, homepage)
│   └── sections/               # Secciones de la página de inicio
│       ├── HeroSection.tsx
│       ├── StatsSection.tsx
│       ├── ServicesSection.tsx
│       ├── MetodologiasSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogPreviewSection.tsx   # Se oculta sola si el blog está vacío
│       ├── AffiliationsSection.tsx
│       ├── Prime10Banner.tsx
│       └── CTASection.tsx
├── content/
│   ├── COMO-PUBLICAR.md        # Flujo para publicar posts (usuario envía texto → Claude publica)
│   └── blog/                   # ← LOS ARTÍCULOS DEL BLOG (un .md por artículo) — hoy vacío
├── docs/
│   └── INTEGRACIONES.md        # Cómo conectar Google Sheets (newsletter) y Resend (contacto)
├── lib/
│   ├── posts.ts                # Cargador/parser de los .md del blog
│   ├── schema.ts                # Schemas JSON-LD (Schema.org)
│   └── site.ts                  # Número de WhatsApp y helper whatsappUrl()
├── scripts/
│   └── patch-vercel-og.mjs     # Corrige un bug de @vercel/og en Windows (se ejecuta en postinstall)
├── public/
│   ├── profile-photo.jpg       # Foto de perfil optimizada (~70 KB) — reemplazar con mismo nombre
│   └── llms.txt                # Visibilidad para IAs (ChatGPT, Perplexity...)
├── tailwind.config.ts          # Colores, fuentes, breakpoints
└── .env.local.example          # Variables de entorno de referencia
```
