# Estrategia de posicionamiento #1 en Colombia

> Creado: 2026-08-19 · Alcance: `/servicios/beneficios-tributarios-innovacion` y
> `/servicios/evaluacion-financiera-innovacion`
> Complementa la auditoría de `augustoruiz.org-audit/` (health score 77.2).

---

## 1. Diagnóstico: dónde está realmente el cuello de botella

La auditoría del 2026-08-18 dejó el on-page en 88/100 y lo técnico en 84/100. La página
de beneficios tributarios tiene title y description optimizados al término objetivo,
FAQPage + Service + BreadcrumbList en JSON-LD, tabla comparativa, 11 FAQs con respuestas
extraíbles, canonical correcto, y está en el sitemap con prioridad 0.9. **El on-page ya
no es el limitante.**

Los tres limitantes reales, en orden de peso:

| # | Limitante | Estado hoy | Peso |
|---|---|---|---|
| 1 | Autoridad de dominio / backlinks | Prácticamente cero. Dominio nuevo (2026), sin enlaces editoriales conocidos | **Alto** |
| 2 | Volumen y profundidad del clúster de contenido | 2 artículos publicados de 12 planeados; el clúster UPME/ANLA/rechazos sin arrancar | **Alto** |
| 3 | Desajuste de intención en el término cabeza | "consultoría tributaria para empresas" tiene SERP de firmas generalistas Big-4 | **Medio-alto** |

Señal de indexación a verificar con urgencia: una consulta `site:augustoruiz.org` solo
devolvió la home. No es prueba concluyente (el operador no es fiable fuera de Google
directo), pero **hay que confirmar en Search Console que las 12 URLs del sitemap estén
indexadas** antes de invertir en cualquier otra cosa. Si las páginas de servicio no están
indexadas, todo lo demás es irrelevante.

---

## 2. La decisión estratégica que hay que tomar primero

Las dos consultas del encargo no son el mismo problema y no se ganan igual.

### "Consultoría financiera para proyectos de innovación" — se puede ganar

Ya está en **posición 2 de Google**, por debajo de EY. Es un término de nicho, con SERP
de intención mixta y sin defensores fuertes. Es el objetivo alcanzable a 3-6 meses.

### "Consultoría tributaria para empresas" — no se gana de frente, pero el activo es bueno

El top-10 es PwC, Russell Bedford, Crowe, BDO, EY. Son dominios con décadas de autoridad
y miles de dominios de referencia. Un dominio de julio 2026 sin backlinks no entra al
top 3 de ese término en 6-12 meses, por buena que sea la página. La señal que decide ese
SERP es autoridad de dominio, y ahí el marcador es ≈0 contra miles.

**Corrección de una versión anterior de este documento (2026-08-19):** aquí se afirmó que
ganar ese término traería leads descalificados por buscar cumplimiento fiscal general.
Con el copy actual de la página eso **no es correcto**. Los cuatro párrafos del bloque
`problema` hacen exactamente el reencuadre necesario: interceptan al lector que ya tiene
contador o firma tributaria, explican por qué ese servicio no cubre esto ("son dos oficios
distintos"), y dan el criterio de autoselección. Ese copy convierte una fracción real del
tráfico genérico y es el mejor activo de conversión del sitio. No tocarlo ni suavizarlo.

El problema práctico no es la intención: es que en posición 30-50 nadie llega a leerlo.

**Recomendación:** no usarlo como KPI principal, pero explotarlo por tres vías donde sí
rinde hoy:

1. **Long-tail cualificado, ya alcanzable:** "consultoría tributaria para empresas que
   invierten en I+D", "diferencia entre consultoría tributaria y beneficios tributarios",
   "mi contador no gestiona beneficios tributarios". Ahí no se compite contra PwC.
2. **GEO / motores de IA — la vía más infravalorada.** Ante preguntas del tipo "¿qué tipo
   de asesor necesito si mi empresa invierte en I+D?", la distinción "son dos oficios
   distintos" es justo lo que un LLM extrae y cita, y ahí la autoridad de dominio pesa
   mucho menos que la claridad de la explicación. **Ganable ahora, sin backlinks.**
3. **Puente semántico** hacia el clúster donde sí se puede ser #1 (secciones 3.A y 3.B).

---

## 3. Los términos donde sí se puede ser #1 en Colombia

La competencia real en este nicho no es PwC. Es **AM&C Colombia, CIDEI, Colinnovación,
GT Group, Connect Bogotá** — actores medianos, con contenido delgado y sin blog fuerte.
Ese es el campo de batalla ganable.

### Clúster A — I+D+i / Minciencias (prioridad 1)

| Término | Competidor a batir | Activo que lo ataca |
|---|---|---|
| consultoría beneficios tributarios I+D+i | AM&C, CIDEI | Página de servicio (ya) |
| crédito fiscal Minciencias | AM&C | **Artículo nuevo — falta** |
| descuento tributario 30% renta investigación | Minciencias (informativo) | FAQ + artículo nuevo |
| convocatoria beneficios tributarios Minciencias 2026 | Minciencias, El Tiempo | **Artículo nuevo — falta** |
| tipología CNBT proyectos I+D+i | nadie lo cubre bien | **Hueco abierto** |
| TIDIS beneficios tributarios MiPymes | nadie lo cubre bien | **Hueco abierto** |
| por qué rechazan proyectos de beneficios tributarios | nadie lo cubre | **Hueco abierto — el de mayor intención de compra** |

### Clúster B — FNCE / UPME / ANLA (prioridad 2, casi sin competencia)

| Término | Estado del SERP |
|---|---|
| beneficios tributarios Ley 1715 | dominado por bufetes con contenido genérico |
| deducción 50% energías renovables Colombia | idem |
| certificación UPME beneficios tributarios | **hueco abierto** |
| certificación ANLA descuento 25% renta | **hueco abierto** |
| exclusión de IVA equipos energía solar Colombia | intención comercial alta, cobertura pobre |

Este clúster es la mayor oportunidad no explotada del sitio: alta intención comercial,
competencia débil, y Augusto tiene la credencial técnica que los bufetes no tienen.

### Clúster C — Evaluación financiera (prioridad 3, consolidar el #2 → #1)

`simulación Monte Carlo evaluación de proyectos`, `opciones reales valoración`,
`por qué el VPN y la TIR fallan en innovación`. Ya están en el plan de contenido
(artículos 3, 4, 5) y siguen pendientes.

---

## 4. Plan de ejecución

### Fase 0 — Verificación (esta semana, bloqueante)

1. **Search Console:** confirmar que las 12 URLs del sitemap están indexadas. Si alguna
   está en "Detectada, actualmente sin indexar", solicitar indexación manual.
2. **Corregir la cifra del 93%** (hallazgo CRITICAL de la auditoría de contenido). En un
   tema YMYL una estadística sin muestra ni período es un riesgo directo de E-E-A-T, y
   está repetida tres veces incluyendo dentro del `FAQPage` que los motores de IA citan
   textualmente. Sustituir por "N de M proyectos en los últimos 24 meses" o retirarla.
3. Igual con la cifra del 85% atribuida a un cargo de hace 10 años en otra empresa.

### Fase 1 — Autoridad de entidad (semanas 1-8) · **la palanca de mayor impacto**

Esto es lo que separa a Augusto de la posición 1, no el contenido. Enlaces y menciones
desde dominios que Google ya asocia al tema:

- **Perfiles institucionales con enlace:** ficha de profesor en EAFIT, Uniandes, UIS,
  Universidad del Bosque, Universidad de América. Pedir explícitamente que incluyan el
  enlace a augustoruiz.org. Son dominios `.edu.co` de altísima confianza temática.
- **CvLAC / GrupLAC de Minciencias:** perfil de investigador actualizado con el sitio.
  Además de enlace, es señal de entidad en el ecosistema donde compite.
- **Gremios:** ANDI, ACOPI, Cámara de Comercio de Medellín y de Bogotá — columnas o
  participación en sus publicaciones sobre incentivos a la innovación.
- **Prensa económica:** una columna de opinión en Portafolio, La República o El
  Colombiano sobre por qué las empresas colombianas no usan los beneficios del CNBT.
  Es un tema noticiable con datos y Augusto tiene la credencial para firmarla.
- **Podcasts y ponencias:** cada aparición debe pedir enlace en las notas del episodio.
- **Wikidata:** crear la entidad "Augusto Ruiz" enlazando Uniandes, EAFIT y el sitio.
  Alimenta directamente el grafo de conocimiento y la citación por IA.

Meta realista: **15-25 dominios de referencia temáticamente relevantes en 6 meses.** Eso
basta para superar a AM&C y CIDEI. No basta para superar a PwC, y no hace falta.

### Fase 2 — Contenido (semanas 2-20, cadencia de 4/mes ya acordada)

Reordenar el calendario de `PLAN-CONTENIDO-BLOG.md` para adelantar los artículos que
atacan huecos abiertos, en este orden:

1. Por qué se rechazan los proyectos de beneficios tributarios ante el CNBT (y cómo
   diagnosticarlo antes de volver a postular) — *máxima intención de compra*
2. Tipología del CNBT: cómo saber si su proyecto califica como investigación,
   desarrollo tecnológico o innovación
3. Crédito fiscal del 50% y TIDIS: la ruta para MiPymes, paso a paso
4. Certificación UPME para FNCE: requisitos, plazos y errores frecuentes
5. Certificación ANLA y el descuento del 25%: qué inversiones ambientales califican
6. Ley 1715: los cuatro beneficios y cómo se combinan sin duplicar el hecho económico
7. Guía de beneficios tributarios I+D+i para pymes (ya en el plan, #2)
8. Convocatoria de beneficios tributarios 2026: fechas, cupo y cómo prepararse

Cada artículo, para competir en este nicho y ser citado por IA:
- Dato propio o cálculo original (un ejemplo numérico trabajado vale más que 500 palabras)
- Cita normativa exacta con artículo del Estatuto Tributario y enlace a la norma
- Bloque de respuesta directa de 40-60 palabras justo bajo cada H2
- Enlace contextual a la página de servicio con anchor variado
- `dateModified` real y actualización anual visible

### Fase 3 — Refuerzo de la página de servicio (semanas 4-8)

La auditoría SXO identificó la brecha correcta: la página compara "este servicio vs. el
servicio adyacente", pero el SERP de este nicho premia **quién soy, qué credenciales
tengo y qué casos he ganado.** Añadir a la página:

- **2-3 casos de estudio con cifras**, aunque sean anonimizados por sector: "empresa
  manufacturera del Valle, inversión de X, beneficio certificado de Y, tiempo Z".
  Es lo único que AM&C tiene y Augusto no muestra.
- Bloque de credenciales verificable sobre el pliegue, con enlaces salientes a Uniandes,
  EAFIT y Minciencias (los enlaces salientes a fuentes de autoridad son señal E-E-A-T).
- `HowTo` schema para el proceso de postulación (4 pasos ya están en `metodologia`).
- Landing por régimen: separar `/servicios/beneficios-tributarios-idi-minciencias` y
  `/servicios/beneficios-tributarios-fnce-upme-anla`. Hoy una sola página compite por
  dos clústeres distintos y diluye ambos. Dos páginas específicas rankean mejor que una
  genérica cuando la competencia es débil, que es exactamente el caso del clúster B.

### Fase 4 — GEO / citación por IA (continuo)

Aquí la autoridad de dominio pesa mucho menos y Augusto puede ganar antes que en Google.
El sitio ya tiene `llms.txt`, robots abierto a GPTBot/ClaudeBot/PerplexityBot, y FAQs
bien estructuradas. Falta:

- [x] Ampliar `llms.txt` con una sección por cada régimen (I+D+i y FNCE) con las cifras
  clave — hecho 2026-08-19. Añadidos 5 bloques: "¿mi contador debería gestionarlo?",
  "¿por qué las empresas que califican no los usan?", régimen Minciencias/CNBT con cifras,
  régimen UPME/ANLA con cifras, y combinación de ambos regímenes. La distinción
  "consultoría general vs. beneficios" ya existía desde antes y estaba bien resuelta.
- Medir mensualmente: preguntar a ChatGPT, Perplexity, Gemini y Claude "¿quién ofrece
  consultoría en beneficios tributarios I+D+i en Colombia?" y registrar si aparece
- Las menciones de marca sin enlace también cuentan para GEO: la Fase 1 alimenta esto

---

## 5. Expectativa realista de resultados

| Horizonte | Resultado esperable |
|---|---|
| 1-2 meses | Indexación completa; primeras posiciones en long-tail del clúster B (UPME/ANLA) |
| 3-4 meses | Top 3 en "consultoría financiera para proyectos de innovación"; top 5 en varios términos de I+D+i |
| 6 meses | #1 en el clúster FNCE/UPME/ANLA; top 3 frente a AM&C y CIDEI en I+D+i; citación regular en IA |
| 12 meses | Autoridad de entidad consolidada; competencia real por los términos cabeza del nicho |

**"Consultoría tributaria para empresas" no aparece en esta tabla a propósito.** Superar
a PwC y BDO en su propio término genérico no es alcanzable en este horizonte: es
aritmética de autoridad de dominio, no una cuestión de calidad de página. El objetivo
correcto es ser el #1 indiscutible del nicho donde Augusto es objetivamente el mejor, y
extraer de ese término las tres vías de la sección 2 — long-tail cualificado, citación
por IA y puente semántico — que sí rinden desde ya.
