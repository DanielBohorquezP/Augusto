# Auditoría de datos estructurados (JSON-LD) — augustoruiz.org

Páginas revisadas: home, /servicios, /servicios/beneficios-tributarios-innovacion, /servicios/evaluacion-financiera-innovacion, /sobre, /prime-10, /docencia, /blog, /blog/que-es-un-beneficio-tributario-colombia.

Arquitectura general: bloque 1 (global, idéntico en todas las páginas, 6481 bytes) con `@graph` de `Person` (`#person`), `WebSite` (`#website`) y `ProfessionalService` (`#professional-service`), más un `ImageObject` reutilizable como `#logo`. Bloque 2 (específico por página) con combinaciones de `FAQPage`, `BreadcrumbList`, `Service`, `BlogPosting`, `Course`, `CreativeWork`, `WebPage`. Todos los bloques son JSON-LD válido sintácticamente (`valid: true` en las 9 páginas), usan `@context: https://schema.org` y URLs absolutas.

---

## Hallazgo 1 — FAQPage ya no genera rich results en Google (canal SERP muerto, canal IA no confirmado)
**Severidad: Info**

**Evidencia:** `FAQPage` aparece en 6 de las 9 páginas auditadas (home no la usa; servicios, beneficios-tributarios, evaluación-financiera, prime-10 y el post de blog sí), con un volumen considerable de preguntas (hasta 12 en beneficios-tributarios).

Google retiró los rich results de FAQ para todos los sitios (a partir de mayo 2026, extendiendo la restricción de agosto 2023 a gobierno/salud). Esto significa que ninguna de estas páginas obtiene ya el snippet expandible en el SERP de Google, sin importar qué tan bien esté marcado el `FAQPage`.

**Distinción de canales (no negociable):**
- **Canal Google Search (SERP):** sin beneficio. El marcado no producirá rich result, acordeón ni "People Also Ask" adicional por su presencia.
- **Canal motores de IA / GEO (ChatGPT, Perplexity, Google AI Overviews, etc.):** el beneficio de tener preguntas y respuestas estructuradas en `FAQPage` para que un LLM las cite o resuma **no está confirmado** — no hay evidencia pública de que estos motores prioricen `FAQPage` sobre texto plano bien estructurado en el HTML visible. Es plausible que ayude (marcado semántico explícito de pares pregunta-respuesta), pero no es un hecho verificado.

**Recomendación:** No quitar el `FAQPage` existente — el contenido de las preguntas es de alto valor (aclara diferencias con contadores, tasas de aprobación del 93%, plazos, etc.) y mantenerlo marcado no tiene costo real ni riesgo de penalización. Pero no debe presentarse internamente como una táctica de SEO de Google: es, en el mejor de los casos, una apuesta de GEO sin garantía. Si se prioriza esfuerzo, es más valioso invertir en `Service`, `BlogPosting` y `BreadcrumbList` (que sí tienen tratamiento confirmado en Google) que en ampliar el `FAQPage`.

---

## Hallazgo 2 — Servicio "IA Generativa Aplicada" enlazado por @id pero sin nodo `Service` propio en ninguna página auditada
**Severidad: High**

**Evidencia:** En el `OfferCatalog` del bloque global (`#professional-service` → `hasOfferCatalog`), el tercer `Offer` referencia:

```json
"itemOffered": {
  "@type": "Service",
  "@id": "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa#service",
  "url": "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa",
  "name": "IA Generativa Aplicada",
  "description": "..."
}
```

Esta entrada aparece **completa inline** dentro del `OfferCatalog` (no es una referencia vacía `{"@id": "..."}`), así que en sí misma no está "rota". El problema es que la página `/servicios/capacitacion-ia-generativa` existe y devuelve 200, pero **no fue incluida en el alcance de esta auditoría** y a diferencia de `evaluacion-financiera-innovacion` y `beneficios-tributarios-innovacion` — que sí declaran un nodo `Service` propio con el mismo `@id` en su bloque de página — no se pudo verificar si esa página replica el nodo `Service` con `@id="...#service"` coincidente. Si no lo hace, el `@id` referenciado en la home/servicios queda "colgando": apunta a un fragmento que no existe como nodo declarado en ningún `@graph`, lo cual es un patrón inconsistente frente a las otras 3 líneas de servicio (que sí tienen su `Service` propio en su página).

**Recomendación:** Verificar que `/servicios/capacitacion-ia-generativa` declare un bloque `Service` con `@id: "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa#service"` idéntico en estructura al de `evaluacion-financiera-innovacion` y `beneficios-tributarios-innovacion`, para que el `@graph` sea consistente en las 4 líneas de servicio.

```json
{
  "@type": "Service",
  "@id": "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa#service",
  "url": "https://www.augustoruiz.org/servicios/capacitacion-ia-generativa",
  "name": "IA Generativa Aplicada",
  "description": "Estrategia de adopción e implementación de IA generativa en procesos organizacionales con ROI medible.",
  "serviceType": "Consultoría en IA generativa aplicada",
  "provider": { "@id": "https://www.augustoruiz.org/#person" },
  "areaServed": ["Colombia", "México", "Chile", "Perú", "Ecuador"]
}
```

---

## Hallazgo 3 — Ausencia de nodo `WebPage` con `@id` en la mayoría de páginas (BreadcrumbList y FAQPage "flotan" sin ancla a la página)
**Severidad: Medium**

**Evidencia:** Solo `/docencia` declara un `WebPage` explícito (`@id: ".../docencia#webpage"`) y solo el post de blog declara `WebPage` implícitamente vía `mainEntityOfPage` dentro de `BlogPosting`. El resto de páginas (`/servicios`, `/servicios/beneficios-tributarios-innovacion`, `/servicios/evaluacion-financiera-innovacion`, `/sobre`, `/prime-10`, `/blog`) no tienen un nodo `WebPage` propio: el `BreadcrumbList` y el `FAQPage` quedan sueltos en el `@graph`, sin `isPartOf` que los conecte al `WebSite` ni `about`/`mainEntity` recíproco con la página. Esto es válido sintácticamente pero deja pasar la oportunidad de que el motor de búsqueda entienda inequívocamente "este FAQPage y este Breadcrumb pertenecen a esta URL específica" mediante relaciones explícitas, más allá de que coincidan por estar en el mismo documento.

**Recomendación:** Añadir un nodo `WebPage` por página con `@id` propio, `isPartOf` apuntando a `#website`, y que `FAQPage`/`Service` referencien `mainEntity`/`about` hacia él. Ejemplo para `/servicios/beneficios-tributarios-innovacion`:

```json
{
  "@type": "WebPage",
  "@id": "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion#webpage",
  "url": "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion",
  "name": "Consultoría Tributaria para Empresas en Beneficios Tributarios I+D+i, FNCE y Eficiencia Energética",
  "isPartOf": { "@id": "https://www.augustoruiz.org/#website" },
  "about": { "@id": "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion#service" },
  "breadcrumb": { "@id": "https://www.augustoruiz.org/servicios/beneficios-tributarios-innovacion#breadcrumb" }
}
```
(y añadir `"@id"` al `BreadcrumbList` de esa página para que coincida con la referencia `breadcrumb` de arriba.)

---

## Hallazgo 4 — `BreadcrumbList` y `FAQPage` sin `@id` propio
**Severidad: Low**

**Evidencia:** En las 9 páginas, ni `BreadcrumbList` ni `FAQPage` llevan `@id`. Esto no invalida el marcado (Google no lo exige), pero impide referenciarlos desde `WebPage.breadcrumb` o `WebPage.mainEntity`, y complica la deduplicación si en el futuro se reutiliza el mismo breadcrumb en variantes de URL (paginación, parámetros UTM, etc.).

**Recomendación:** Agregar `@id` único por página, p. ej. `".../beneficios-tributarios-innovacion#breadcrumb"` y `".../beneficios-tributarios-innovacion#faq"`.

---

## Hallazgo 5 — `ProfessionalService` sin datos de contacto ni geolocalización (oportunidad desaprovechada para un consultor independiente en Colombia)
**Severidad: Medium**

**Evidencia:** El nodo `#professional-service` tiene `name`, `url`, `description`, `serviceType`, `logo`, `areaServed`, `knowsAbout`, `hasOfferCatalog`, `provider`, `sameAs` — pero **no tiene** `telephone`, `email`, `address`, `priceRange`, ni `aggregateRating`/`review`. Para un `ProfessionalService` de consultor individual que factura en Colombia y busca leads B2B, la ausencia de forma de contacto estructurada es una oportunidad perdida: Google puede usar estos campos para Knowledge Panel y para señales de confianza E-E-A-T, y los motores de IA (GEO) suelen priorizar entidades con datos de contacto verificables al recomendar proveedores.

**Recomendación:** Añadir, si existen públicamente, `email`, `telephone` (formato E.164, ej. `+57...`) y `address` (al menos `addressCountry: "CO"`, sin necesidad de exponer dirección física si es remoto). Si hay testimonios de clientes citables (Ecopetrol, Connect Bogotá, SwissContact, Instituto Humboldt, BID-PRODEM ya se mencionan en el FAQ como texto plano), considerar `Review`/`AggregateRating` solo si son reales y verificables — nunca inventar reseñas.

```json
{
  "@type": "ProfessionalService",
  "@id": "https://www.augustoruiz.org/#professional-service",
  "email": "correo@augustoruiz.org",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO"
  },
  "priceRange": "$$"
}
```
(fusionar estas propiedades dentro del nodo existente, no crear uno nuevo.)

---

## Hallazgo 6 — `ImageObject` del logo sin dimensiones mínimas recomendadas verificadas ni `ImageObject` para las fotos de perfil/OG
**Severidad: Low**

**Evidencia:** El logo (`#logo`) declara `width: 512, height: 512` sobre `icon.png` (200 OK) — cumple el mínimo de Google (112x112) y es cuadrado, correcto. Pero `Person.image` (`profile-photo.jpg`) y `BlogPosting.image` (`.../opengraph-image`) son **strings de URL simples**, no nodos `ImageObject` con `width`/`height`/`caption`. Google recomienda `ImageObject` explícito para imágenes que se usan en rich results de `Person`/`Article` cuando se quiere control fino de recorte y aspecto.

**Recomendación (opcional, bajo impacto):** Convertir `Person.image` y `BlogPosting.image` a `ImageObject`:

```json
"image": {
  "@type": "ImageObject",
  "url": "https://www.augustoruiz.org/profile-photo.jpg",
  "width": 800,
  "height": 800
}
```

---

## Hallazgo 7 — `BlogPosting` correcto pero sin `wordCount`, `keywords` ni `articleSection`
**Severidad: Low**

**Evidencia:** El post `/blog/que-es-un-beneficio-tributario-colombia` tiene `headline`, `description`, `url`, `datePublished`, `dateModified`, `author` (@id), `publisher` (@id — ver Hallazgo 8), `image`, `inLanguage`, `mainEntityOfPage`, `isPartOf`, `about` (con `GovernmentOrganization` bien enlazadas a Minciencias/DIAN/CNBT vía `sameAs`). Es uno de los bloques mejor construidos del sitio. Faltan solo propiedades recomendadas de menor impacto: `articleSection` (ej. "Beneficios tributarios"), `keywords`, `wordCount`.

**Recomendación:** Agregar si es fácil de generar automáticamente desde el CMS/Markdown:
```json
"articleSection": "Beneficios tributarios",
"keywords": ["beneficios tributarios Colombia", "I+D+i", "CNBT", "Minciencias"]
```

---

## Hallazgo 8 — `BlogPosting.publisher` apunta a `Person`, no a una entidad organizacional (inconsistente con buenas prácticas de Google para Article/NewsArticle)
**Severidad: Medium**

**Evidencia:**
```json
"publisher": { "@id": "https://www.augustoruiz.org/#person" }
```
Google recomienda que `publisher` en `Article`/`BlogPosting` sea una `Organization` (con `logo` tipo `ImageObject`), no una `Person`, precisamente porque las directrices de rich results para artículos piden `publisher.logo` — y aquí el logo vive en `ProfessionalService` (`#professional-service`), no en `Person`. Aunque para un consultor individual es defendible usar `Person` como publisher (es su propia marca), la inconsistencia es que el nodo que sí tiene el `logo` de marca (`#professional-service`) no está siendo usado como `publisher`, mientras que `Person` no declara `logo` en absoluto.

**Recomendación:** Cambiar `publisher` en `BlogPosting` para apuntar a `#professional-service` (que ya tiene `logo` con `@id: #logo`), manteniendo `author` en `#person`:

```json
"author": { "@id": "https://www.augustoruiz.org/#person" },
"publisher": { "@id": "https://www.augustoruiz.org/#professional-service" }
```

---

## Hallazgo 9 — `Course` (docencia) sin `hasCourseInstance`, `educationalCredentialAwarded` ni `@id`
**Severidad: Low**

**Evidencia:** Las 6 entradas `Course` en `/docencia` (Finanzas para la Innovación, Estrategia de Gestión de Innovación, etc.) tienen `name`, `provider`, `instructor` (@id a Person) — correcto y sin errores — pero carecen de `@id` propio (dificulta referenciarlos desde otros nodos) y de `hasCourseInstance` (que Google recomienda para rich results de cursos, con `courseMode`, `startDate` si aplica). Dado que son cursos de posgrado dictados por terceros (universidades), es razonable no forzar `hasCourseInstance` con fechas que el consultor no controla, pero si el sitio busca rich results de "Course" en Google, esta propiedad es semi-requerida.

**Recomendación:** Si no se busca el rich result de Course (que exige `hasCourseInstance` con detalles operativos que aquí no aplican por ser cursos de terceros), dejar como está — es información de credibilidad/E-E-A-T, no necesita optimizarse para SERP. Si se quisiera, añadir solo `@id` para trazabilidad:
```json
"@id": "https://www.augustoruiz.org/docencia#course-finanzas-innovacion"
```

---

## Hallazgo 10 — Consistencia y validez general (aspectos positivos, sin acción requerida)
**Severidad: Info**

- Todos los bloques son JSON-LD válido, `@context: https://schema.org` (https, correcto), sin placeholders.
- El patrón de reutilización por `@id` (`#person`, `#website`, `#professional-service`, `#logo`) funciona correctamente entre páginas: `WebSite.author`, `WebSite.publisher`, `ProfessionalService.provider`, `Service.provider` y `CreativeWork.creator` (en /prime-10) todos referencian `#person` de forma coherente y sin duplicar el nodo completo.
- No se detectó ningún `HowTo`, `SpecialAnnouncement`, `CourseInfo`, `EstimatedSalary` ni `LearningVideo` (tipos deprecados) — correcto, nada que retirar por ese lado.
- `BreadcrumbList` es coherente y jerárquico en todas las páginas (Inicio → Servicios → sub-servicio, etc.), con `item` como URL absoluta — correcto.
- El `Service` de `/prime-10` está bien vinculado con un `CreativeWork` propio (`#methodology`) para describir la metodología PRIME-10™ registrada — buen patrón, no común de ver en sitios de consultores individuales.

---

## Resumen de severidades

| # | Hallazgo | Severidad |
|---|----------|-----------|
| 1 | FAQPage sin rich result en Google; beneficio GEO no confirmado | Info |
| 2 | Service "IA Generativa Aplicada" fuera de alcance, verificar @id coincidente | High |
| 3 | Falta nodo WebPage con @id en la mayoría de páginas | Medium |
| 4 | BreadcrumbList/FAQPage sin @id propio | Low |
| 5 | ProfessionalService sin contacto/dirección estructurada | Medium |
| 6 | Person.image / BlogPosting.image como string, no ImageObject | Low |
| 7 | BlogPosting sin articleSection/keywords/wordCount | Low |
| 8 | BlogPosting.publisher apunta a Person en vez de ProfessionalService | Medium |
| 9 | Course sin @id ni hasCourseInstance | Low |
| 10 | Aspectos positivos generales | Info |
