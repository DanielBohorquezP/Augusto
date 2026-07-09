# Cómo publicar un artículo en el blog

> **Flujo acordado:** el usuario (Daniel/Augusto) envía a Claude el **título y el texto**
> del artículo (opcionalmente la categoría). Claude hace todo lo demás y publica.

## Lo que hace Claude al recibir un artículo

1. **Slug**: crea `content/blog/<slug>.md` — el slug debe contener la keyword principal
   (ej. `evaluacion-financiera-proyectos-innovacion-colombia.md`). El nombre del archivo
   ES la URL final: `augustoruiz.org/blog/<slug>`.
2. **Frontmatter**: redacta `excerpt` (1-2 frases para el listado) y `metaDescription`
   (150–160 caracteres, con keyword + propuesta de valor, para Google).
3. **Categoría**: una de: `Consultoría` · `Evaluación Financiera` · `IA Generativa` ·
   `Financiación` · `Metodología` · `Casos de estudio` (o nueva si tiene sentido).
4. **Formato del cuerpo**: estructura el texto con `##` (secciones que alimentan la
   tabla de contenidos), listas `- `, recuadros `:::destacado` para datos clave, y
   **siempre cierra con un bloque `:::cta`** hacia WhatsApp, `/contacto` o `/servicios`.
5. **Fecha**: la del día de publicación (`YYYY-MM-DD`). Si se actualiza un post viejo,
   agregar `dateModified`.
6. **Verificación**: correr `npm run build` y revisar el post en el preview antes de dar
   por terminado. Actualizar `ESTRUCTURA.md`/`CONTEXTO-PROYECTO.md` si algo estructural cambió.

Nada más hay que tocar: sitemap, feed de /blog, página de categoría, imagen OG
(auto-generada), schema Article, tabla de contenidos y tiempo de lectura salen solos.

## Template del archivo

```markdown
---
title: "Título del artículo con la keyword principal"
category: "Consultoría"
excerpt: "Resumen de 1-2 frases que aparece en el listado y la homepage."
metaDescription: "Meta description para Google, 150-160 caracteres, keyword incluida."
date: "2026-07-06"
featured: false
---

Párrafo de introducción que responde de una vez la pregunta del lector (importante
para SEO y para que las IAs citen el artículo).

## Primera sección

Texto de la sección...

:::destacado Dato clave
Un dato con fuente o una definición citable — las IAs y los featured snippets de
Google aman estos bloques.
:::

**Puntos principales:**
- Punto uno
- Punto dos

## Segunda sección

Más contenido...

:::cta
heading: ¿Quieres aplicar esto en tu organización?
text: Agenda una consulta inicial gratuita y evaluemos juntos tu caso.
primary: https://wa.me/573005348153?text=Hola%20Augusto%2C%20le%C3%AD%20tu%20art%C3%ADculo | Escribir por WhatsApp
secondary: /servicios | Ver servicios
:::
```

## Principios de contenido (E-E-A-T)

- Incluir ejemplos de proyectos reales asesorados (experiencia).
- Referenciar metodologías propias: PRIME-10, Monte Carlo, opciones reales (expertise).
- Mencionar Uniandes/EAFIT y contexto doctoral (autoridad).
- Datos con fuente, contexto colombiano/LATAM (Minciencias, iNNpulsa) (confianza).
- Un solo post con `featured: true` a la vez.
