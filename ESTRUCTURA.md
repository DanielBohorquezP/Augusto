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
| Testimonios | `components/sections/TestimonialsSection.tsx` |
| Banner PRIME-10 | `components/sections/Prime10Banner.tsx` |
| Preview de blog en home | `components/sections/BlogPreviewSection.tsx` |
| Afiliaciones (logos) | `components/sections/AffiliationsSection.tsx` |
| CTA final de home | `components/sections/CTASection.tsx` |
| **Artículos del blog** | `lib/posts.ts` |
| Página listado de blog | `app/blog/page.tsx` |
| Página individual de artículo | `app/blog/[slug]/page.tsx` |
| Página Sobre mí | `app/sobre/page.tsx` |
| Página Servicios | `app/servicios/page.tsx` |
| Página PRIME-10 | `app/prime-10/page.tsx` |
| Página Docencia | `app/docencia/page.tsx` |
| Página Medios | `app/medios/page.tsx` |
| Página Contacto | `app/contacto/page.tsx` |
| Formulario de contacto | `components/ContactForm.tsx` |
| Formulario newsletter | `components/NewsletterForm.tsx` |
| Navbar (menú) | `components/Navbar.tsx` |
| Footer | `components/Footer.tsx` |
| SEO global (title, description, keywords) | `app/layout.tsx` |
| SEO por página | Cada `app/[ruta]/page.tsx` — busca `export const metadata` |
| Schema.org (datos estructurados) | `lib/schema.ts` |
| Foto de perfil | `public/profile-photo.png` — reemplazar con mismo nombre |
| Colores, fuentes, estilos globales | `tailwind.config.ts` + `app/globals.css` |
| API formulario de contacto | `app/api/contact/route.ts` |
| API newsletter | `app/api/newsletter/route.ts` |
| Sitemap | `app/sitemap.ts` |
| Robots.txt | `app/robots.ts` |
| llms.txt (visibilidad en IAs) | `public/llms.txt` |

---

## Blog — todo está en un solo archivo

**`lib/posts.ts`** es el único lugar donde viven los artículos. No hay CMS ni base de datos.

### Estructura de un artículo

```ts
{
  slug: "url-del-articulo",          // → augustoruiz.org/blog/url-del-articulo
  category: "Categoría visible",
  title: "Título del artículo",
  excerpt: "Resumen corto (aparece en el listado)",
  metaDescription: "Texto para Google (opcional, si omites usa excerpt)",
  date: "2025-06-01",               // formato YYYY-MM-DD
  readTime: "8 min",
  featured: true,                   // true = aparece destacado en home
  tocItems: ["Sección 1", "…"],     // índice de contenido (opcional)
  content: [ /* bloques de contenido */ ],
}
```

### Tipos de bloque de contenido (`content`)

| Tipo | Para qué sirve |
|---|---|
| `paragraph` | Párrafo de texto |
| `heading2` | Subtítulo H2 |
| `heading3` | Subtítulo H3 |
| `highlight` | Caja destacada con etiqueta y texto |
| `list` | Lista con título opcional e ítems |
| `cta` | Bloque de llamada a la acción con botones |

### Para agregar un artículo nuevo

1. Abre `lib/posts.ts`
2. Agrega un objeto nuevo al array `allPosts`
3. Si tiene contenido completo, agrega el campo `content: [...]`
4. Si no tiene contenido (solo aparece en el listado), omite `content`

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

### Sitemap
→ `app/sitemap.ts` — se genera automáticamente con todas las rutas y posts.

---

## Componentes reutilizables

| Componente | Ubicación | Se usa en |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Todas las páginas (via layout) |
| `Footer` | `components/Footer.tsx` | Todas las páginas (via layout) |
| `SchemaScript` | `components/SchemaScript.tsx` | Layout global — inyecta JSON-LD |
| `ContactForm` | `components/ContactForm.tsx` | `app/contacto/page.tsx` |
| `NewsletterForm` | `components/NewsletterForm.tsx` | Varias páginas |

---

## Variables de entorno

Copia `.env.local.example` a `.env.local` y rellena los valores:

```
cp .env.local.example .env.local
```

Las variables configuran el envío de formularios (contacto y newsletter).

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
│   ├── layout.tsx              # Layout global + SEO global + fuentes
│   ├── page.tsx                # Página de inicio (/)
│   ├── globals.css             # Estilos globales
│   ├── robots.ts               # robots.txt dinámico
│   ├── sitemap.ts              # sitemap.xml dinámico
│   ├── blog/
│   │   ├── page.tsx            # Listado de artículos (/blog)
│   │   └── [slug]/page.tsx     # Artículo individual (/blog/slug)
│   ├── sobre/page.tsx          # Sobre mí (/sobre)
│   ├── servicios/page.tsx      # Servicios (/servicios)
│   ├── prime-10/page.tsx       # PRIME-10 (/prime-10)
│   ├── docencia/page.tsx       # Docencia (/docencia)
│   ├── medios/page.tsx         # Medios (/medios)
│   ├── contacto/page.tsx       # Contacto (/contacto)
│   └── api/
│       ├── contact/route.ts    # API endpoint formulario de contacto
│       └── newsletter/route.ts # API endpoint newsletter
├── components/
│   ├── Navbar.tsx              # Barra de navegación
│   ├── Footer.tsx              # Pie de página
│   ├── ContactForm.tsx         # Formulario de contacto
│   ├── NewsletterForm.tsx      # Formulario newsletter
│   ├── SchemaScript.tsx        # Inyector de JSON-LD
│   └── sections/               # Secciones de la página de inicio
│       ├── HeroSection.tsx
│       ├── StatsSection.tsx
│       ├── ServicesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogPreviewSection.tsx
│       ├── AffiliationsSection.tsx
│       ├── Prime10Banner.tsx
│       └── CTASection.tsx
├── lib/
│   ├── posts.ts                # ← TODOS los artículos del blog viven aquí
│   └── schema.ts               # Schemas JSON-LD (Schema.org)
├── public/
│   ├── profile-photo.png       # Foto de perfil (reemplazar con mismo nombre)
│   └── llms.txt                # Visibilidad para IAs (ChatGPT, Perplexity...)
├── tailwind.config.ts          # Colores, fuentes, breakpoints
└── .env.local.example          # Variables de entorno de referencia
```
