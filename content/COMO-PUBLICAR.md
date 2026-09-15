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
   `Financiación` · `Beneficios Tributarios` · `Metodología` · `Casos de estudio` (o
   nueva si tiene sentido). Si es una categoría nueva, agregar su color en
   `categoryColors` dentro de `components/BlogPostCard.tsx` — si no, la tarjeta cae en
   gris por defecto (funciona, pero es inconsistente).
4. **Formato del cuerpo**: estructura el texto con `##` (secciones que alimentan la
   tabla de contenidos), listas `- `, tablas GFM (`| Col A | Col B |` + fila separadora
   `|---|---|`) cuando el contenido sea comparativo, recuadros `:::destacado` para
   datos clave, enlaces a fuentes con `[texto](url)` (funciona en párrafos, listas y
   `:::destacado` — se subrayan automáticamente y abren en pestaña nueva si son
   externos), y **siempre cierra con un bloque `:::cta`** hacia WhatsApp, `/contacto` o
   `/servicios`.
5. **OBLIGATORIO — bloques `:::servicio` repartidos en el cuerpo**: todo artículo debe
   ofrecer, más de una vez y no solo en el `:::cta` de cierre, el servicio de
   `/servicios/<slug>` relacionado con su tema. Insertar **2 bloques `:::servicio`**
   (la tarjeta oscura con imagen, checklist y botón — ver "Sección de servicio" más
   abajo), repartidos en puntos distintos del cuerpo con secciones normales entre
   medio (nunca dos seguidos, nunca ambos pegados al `:::cta` final). Saltarse este
   paso es un error de publicación, no una opción — si el artículo es muy corto para
   repartir 2 sin que se vean seguidos, usar al menos 1.
6. **Fecha**: la del día de publicación (`YYYY-MM-DD`). Si se actualiza un post viejo,
   agregar `dateModified`.
7. **Verificación**: correr `npm run build` y revisar el post en el preview antes de dar
   por terminado — **incluyendo mobile (375px) y tablet (768px)**, no solo desktop.
   Prestar atención especial a tablas anchas (deben scrollear horizontalmente dentro de
   su propio contenedor, nunca desbordar la página), imágenes, y confirmar que los
   bloques `:::servicio` quedaron en el HTML (buscar el heading de cada uno en el
   preview). Actualizar `ESTRUCTURA.md`/`CONTEXTO-PROYECTO.md` si algo estructural
   cambió.

Nada más hay que tocar: sitemap, listado de `/blog` (tarjetas de preview), página de
categoría, imagen OG (auto-generada), schema `BlogPosting`, tabla de contenidos y
tiempo de lectura salen solos.

### Foto del post — obligatoria en todos los artículos

Cada post lleva **una sola foto**, que aparece en dos sitios: la tarjeta del listado
(`/blog`, `/blog?categoria=`, homepage) y el hero del artículo. Es la misma imagen en
ambos — en el hero se coloca a la derecha del título en desktop y debajo del bloque de
título en móvil.

1. Guardar el archivo en `public/blog/<slug>.jpg` (o `.webp`).
2. Formato: 4:3, 1200×900 px, por debajo de 300 KB.
3. Declararla en el frontmatter:

```yaml
image: "/blog/credito-fiscal-idi-amortizacion-colombia.jpg"
imageAlt: "Descripción real de lo que se ve en la foto"
```

`imageAlt` es obligatorio si hay `image` — describe la foto, no repite el título.
Si un post no trae `image`, tanto la tarjeta como el hero caen al bloque de marca
(logo sobre fondo azul); funciona, pero no es el estado deseado.

### Imágenes de las tarjetas — NO usar la imagen OG como thumbnail

La tarjeta de preview (`components/BlogPostCard.tsx`, usada en `/blog`,
`/blog?categoria=` y la homepage) muestra un fondo de marca liso, sin texto
— nunca la imagen OG generada del post. La imagen OG (`app/blog/[slug]/opengraph-image.tsx`)
ya lleva el título grabado como píxeles para compartir en redes; usarla como thumbnail
duplica el título (una vez ilegible dentro de la imagen, otra vez como texto real
debajo) y se ve mal en mobile/tablet — bug real detectado y corregido el 2026-08-11. No
reintroducir ese patrón al tocar `BlogPostCard.tsx`.

### Sección de servicio (`:::servicio`) — ofrecer el servicio relacionado

Tarjeta oscura de dos columnas (texto + checklist + botón a la izquierda, imagen con
insignia roja a la derecha) que promociona el servicio de `/servicios/<slug>` con el
que se relaciona esa parte del artículo. Renderizada por `components/PostBody.tsx`
(caso `servicePromo`), parseada por `lib/posts.ts` desde esta sintaxis:

```markdown
:::servicio
heading: ¿Su empresa ya calificaría para este beneficio?
text: Descripción corta y específica a la sección del artículo donde aparece, no un texto genérico repetido.
image: /images/servicios-beneficios-tributarios.jpg
imageAlt: Descripción real de la foto
badge: 93% DE APROBACIÓN
cta: /servicios/beneficios-tributarios-innovacion | Solicitar evaluación de elegibilidad
- Primer punto del checklist (beneficio concreto del servicio)
- Segundo punto del checklist
- Tercer punto del checklist
:::
```

Reglas:
- `image` apunta a una foto ya existente en `public/images/` (una por servicio:
  `servicios-beneficios-tributarios.jpg`, `servicios-ia-generativa.jpg`; si el
  servicio de evaluación financiera no tiene foto propia, usar `/profile-photo.jpg`
  antes que dejar el bloque sin imagen) — no descargar ni generar imágenes nuevas
  para este bloque.
- `cta` apunta siempre a la subpágina real del servicio (`/servicios/<slug>`, ver
  `app/servicios/*/page.tsx`), no al ancla genérica `/servicios#id`.
- `badge` es opcional (texto corto tipo "93% DE APROBACIÓN", "NORMATIVA VIGENTE").
- 2-3 ítems de checklist por bloque, cortos y concretos — no repetir el mismo listado
  en los dos bloques del mismo artículo, variar según la sección donde aparece.
- No confundir con `:::cta` (banner simple centrado, sin imagen ni checklist): el
  `:::cta` sigue siendo obligatorio al final del artículo; `:::servicio` es el
  refuerzo intermedio, repartido en el cuerpo.

## Template del archivo

Nota los dos bloques `:::servicio` intercalados en el cuerpo — son obligatorios (paso
5 más arriba), no un adorno opcional del ejemplo. Ajustar su contenido al servicio real
relacionado con el artículo y a la sección donde caen, pero no omitirlos.

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

:::servicio
heading: Pregunta o afirmación específica a esta sección, ligada al servicio.
text: Por qué este servicio resuelve lo que se acaba de explicar arriba.
image: /images/servicios-<slug-del-servicio>.jpg
imageAlt: Descripción real de la foto
badge: TEXTO CORTO OPCIONAL
cta: /servicios/<slug-del-servicio> | Texto de acción del botón
- Primer punto del checklist
- Segundo punto del checklist
- Tercer punto del checklist
:::

## Segunda sección

Más contenido...

:::servicio
heading: Otra pregunta o afirmación, distinta a la del primer bloque.
text: Ángulo distinto del mismo servicio, o de otro servicio si el artículo cubre más de uno.
image: /images/servicios-<slug-del-servicio>.jpg
imageAlt: Descripción real de la foto
cta: /servicios/<slug-del-servicio> | Texto de acción del botón
- Ítem distinto a los del primer bloque
- Otro ítem distinto
:::

## Tercera sección

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
