# Auditoría GEO/AEO (visibilidad en motores de IA) — augustoruiz.org

Fecha: 2026-08-18
Alcance: home, `/llms.txt`, páginas de servicio (`/servicios/beneficios-tributarios-innovacion`, `/servicios/evaluacion-financiera-innovacion`), fetch SSR crudo (sin JS) de las páginas clave.

Contexto estratégico del sitio: dominio de 7 semanas, sin autoridad de backlinks, compitiendo en Google clásico contra EY, PwC y Minciencias. Los motores de IA (ChatGPT, Perplexity, Claude, Google AIO) no rankean por autoridad de dominio de la misma forma que Google Search — priorizan extractabilidad, densidad de hechos y coincidencia semántica con la pregunta — así que son un canal donde este sitio puede competir con jugadores mucho más grandes desde ya. Esta auditoría no repite lo ya verificado (robots.txt permite los crawlers de IA correctos; `/llms.txt` existe y es Markdown válido).

**GEO Health Score: 71/100**

| Dimensión | Peso | Score | Ponderado |
|---|---|---|---|
| Citabilidad | 25% | 80/100 | 20.0 |
| Estructura / legibilidad | 20% | 65/100 | 13.0 |
| Contenido multi-modal | 15% | 25/100 | 3.75 |
| Señales de autoridad y marca | 20% | 65/100 | 13.0 |
| Accesibilidad técnica | 20% | 95/100 | 19.0 |

---

## 1. Motor por motor: qué usa cada uno realmente

Este es el punto que más falsas expectativas genera, así que se aclara explícitamente:

| Motor | ¿Lee `/llms.txt`? | ¿Rastrea con crawler propio? | ¿Usa robots.txt? |
|---|---|---|---|
| **ChatGPT (respuesta en vivo, browsing)** | No hay confirmación oficial de OpenAI de que lo consuma; en la práctica actual, no es una fuente que OpenAI declare usar en el pipeline de respuesta. Sirve como documento legible por cualquier LLM que se le pase la URL directamente (uso manual/agéntico), no como señal de indexación. | Sí, `GPTBot` (entrenamiento) y `OAI-SearchBot` (búsqueda/citación en vivo) | Sí, ambos respetan robots.txt |
| **Perplexity** | No confirmado como fuente de indexación regular | Sí, `PerplexityBot` | Sí |
| **Claude (respuestas con búsqueda)** | Igual que ChatGPT: sin confirmación de que Anthropic lo indexe de forma sistemática | Sí, `ClaudeBot` (entrenamiento) y `Claude-SearchBot`/`Claude-User` (uso agéntico en vivo) | Sí |
| **Google AI Overviews / Google AI Mode** | **No.** Google ha declarado explícitamente que no usa `llms.txt`; los AI Overviews se generan a partir del índice normal de Google Search (mismo pipeline de rastreo/indexación que el buscador clásico, vía `Google-Extended` para permisos de IA y `Googlebot` para indexación). | Googlebot / Google-Extended | Sí |
| **Bing Copilot** | No confirmado | Bingbot | Sí |

**Conclusión práctica:** `/llms.txt` es, hoy, un artefacto de buena voluntad/experimental — ningún motor mayor ha confirmado que lo use como fuente de indexación primaria. Su valor real actual es doble: (1) sirve de "resumen ejecutivo perfecto" cuando un usuario pega la URL en un chat con capacidad de fetch (uso agéntico/manual, que sí ocurre y es creciente), y (2) es una apuesta de bajo costo por si el estándar se adopta más ampliamente. **No sustituye** el trabajo de que el HTML normal de cada página sea igual de citable — que es donde deben concentrarse los esfuerzos, porque eso sí alimenta a Google AIO (vía el índice normal) y a los `*Bot` de citación en vivo de OpenAI/Anthropic/Perplexity, que rastrean el HTML de las páginas, no `/llms.txt`.

**Severidad: Informativo.** No es una acción correctiva, es una corrección de expectativas para priorizar el roadmap correctamente: el HTML de `/servicios/*` y `/blog/*` pesa más para GEO que seguir puliendo `/llms.txt`.

---

## 2. Citabilidad (25%) — Score 80/100

**Hallazgo positivo:** Las 12 preguntas del FAQ en `/servicios/beneficios-tributarios-innovacion` tienen respuestas de 70 a 168 palabras, con la mayoría (7 de 12) dentro o muy cerca del rango óptimo de 134-167 palabras documentado para citación por LLM. Están marcadas con `FAQPage`/`Question`/`Answer` en JSON-LD y coinciden con preguntas reales de intención de búsqueda ("¿Puedo trabajar con mi contador o mi firma tributaria actual?", "¿Qué pasa si mi proyecto es rechazado?"). Esto es exactamente el patrón de bloque auto-contenido que un LLM puede extraer y citar sin necesitar contexto adicional.

**Hallazgo positivo:** `/llms.txt` está redactado casi enteramente como preguntas H2 con respuesta directa en el primer párrafo ("¿Quién ofrece consultoría tributaria para empresas en Colombia?" → respuesta directa en la primera frase), que es la estructura ideal de extracción.

**Hallazgo (Media): faltan estadísticas con atribución de fuente verificable en el cuerpo visible de las páginas de servicio.** La cifra "tasa de aprobación del 93%" aparece repetida (home, llms.txt, página de servicio) pero sin nota metodológica ni enlace a un caso o fuente que la sustente en la página donde se usa como respuesta a "¿Cómo elijo un consultor de beneficios tributarios?". Un LLM puede citar la cifra, pero sin trazabilidad a una fuente verificable es un dato que un motor de IA prudente (o un usuario que pida la fuente) no puede confirmar. Añadir un enlace a metodología/casos o una nota "(N=X proyectos, periodo Y)" refuerza la citabilidad sin cambiar el mensaje.

**Hallazgo (Baja): las 5 respuestas más cortas del FAQ (70-100 palabras)** están por debajo del rango óptimo. No es grave — siguen siendo extraíbles — pero ampliarlas ligeramente con un dato concreto adicional (plazo, cifra, ejemplo) las llevaría al rango de mayor probabilidad de citación.

---

## 3. Estructura y legibilidad (20%) — Score 65/100

**Hallazgo (Alta): las preguntas del FAQ en el HTML de la página de servicio NO son encabezados (H3/H4), son `<span>` dentro de un `<button>` de acordeón (patrón `<dl><dt><button><span>`).** El texto de la pregunta y la respuesta sí están presentes en el HTML servido (confirmado por fetch crudo sin JS — no hay problema de indexación), y además está reforzado por el JSON-LD `FAQPage`, que es lo que hoy sostiene la aparición en snippets de Google. Pero para un LLM que parsea la jerarquía semántica del documento (no solo el JSON-LD) en lugar de depender de un fragmento aislado, cada pregunta como encabezado real (`<h3>`) refuerza la señal de "esto es una unidad de respuesta autocontenida" independientemente de si el motor lee o no schema.org. Es una discrepancia entre "lo que ve el usuario/lector visual" (accordion sin jerarquía tipográfica de encabezado) y "lo que debería ver un extractor de estructura". Cambiar el `<span>` por un `<h3>` dentro del botón (manteniendo el estilo visual con CSS) es un cambio de bajo riesgo y alto impacto.

**Hallazgo (Media): no hay fecha de actualización en formato máquina (`dateModified`) en el JSON-LD de las páginas de servicio.** El texto visible sí dice "Última actualización: agosto de 2026", lo cual es correcto para un lector humano o un LLM que procese el texto extraído, pero el schema de la página (`Service`/`ProfessionalService`/`FAQPage`) no incluye `dateModified`/`datePublished` explícito. Añadir `dateModified` al nodo `WebPage` (o envolver la página en `WebPage` con esa propiedad) da a los motores de IA una señal estructurada de frescura sin depender del parseo de texto libre, relevante porque "actualidad" es un factor de confianza declarado para AI Overviews y para respuestas de ChatGPT con browsing.

**Hallazgo positivo:** Jerarquía de encabezados del resto de la página coherente y semántica (`H1` único, `H2` por sección temática: "El problema", "Qué incluye el servicio", "Cómo funciona", "Para quién es", "Preguntas frecuentes") — buena segmentación para chunking por parte de cualquier pipeline RAG o de indexación de IA.

---

## 4. Contenido multi-modal (15%) — Score 25/100

**Hallazgo (Alta): las páginas de servicio (el contenido más importante para las consultas objetivo) tienen prácticamente cero contenido multimodal.** La página de beneficios tributarios tiene **1 sola imagen** en todo el documento (foto genérica de "reunión institucional", con alt-text correcto pero decorativa, no informativa). No hay tablas, no hay infografías, no hay comparativas visuales, no hay video. Esto es relevante en dos frentes:

1. **Para citación directa por IA generativa**: los motores de respuesta valoran tablas y datos estructurados visualmente (comparativas, cronogramas) porque son más fáciles de convertir en respuestas estructuradas o de citar como "fuente con datos".
2. **Para la correlación de marca documentada** (YouTube ~0.737, la señal individual más fuerte de correlación con citación por IA): el sitio no tiene presencia detectable en YouTube. Dado que Augusto Ruiz ya es docente y da charlas/talleres (dato confirmado en `/llms.txt`: "talleres de 4–8 horas y charlas magistrales de 60–90 minutos"), hay contenido natural que grabar y publicar (aunque sea un fragmento de charla o una explicación de 3-5 min de PRIME-10™) — es la palanca de mayor impacto disponible y actualmente en cero.

**Hallazgo (Media): el comparativo de beneficios tributarios I+D+i en América Latina (Brasil, Chile, Argentina, Uruguay, México, Perú) existe como texto corrido en `/llms.txt` y presumiblemente en el post de blog homónimo, pero no como tabla HTML real en la página.** Una tabla comparativa (país / ley / % crédito / vigencia) es exactamente el tipo de bloque que Perplexity y Google AIO extraen directamente para responder consultas comparativas ("¿qué país de LatAm tiene el mejor incentivo fiscal a I+D+i?"), y hoy esa consulta específica no tiene un bloque tabular citable en el HTML.

---

## 5. Señales de autoridad y marca (20%) — Score 65/100

**Hallazgo positivo:** Entidad `Person` bien construida en JSON-LD (nombre, `alternateName` con nombre legal completo, `jobTitle`, `description`, `knowsAbout`, `worksFor` → Universidad de los Andes, `sameAs` → LinkedIn y TikTok). Esto es exactamente el tipo de grafo de entidad que ayuda a un motor de IA a resolver "¿quién es esta persona / es una fuente confiable?" independientemente del volumen de backlinks (coherente con el dato de que Domain Rating solo correlaciona ~0.266 con citación por IA — la entidad importa más que los enlaces).

**Hallazgo (Alta): no hay entidad Wikipedia/Wikidata, y `sameAs` no incluye Reddit ni YouTube.** Dado el perfil (docente en 5 programas de posgrado, metodología propia registrada, práctica de más de 10 años y 50+ organizaciones asesoradas en 5 países), Augusto Ruiz probablemente cumple criterios de notabilidad limitada para una entrada en Wikidata (que no exige los mismos umbrales editoriales que Wikipedia y es una fuente que los LLM usan intensamente para resolución de entidades) aunque no necesariamente para Wikipedia. Crear un ítem en Wikidata enlazando LinkedIn, el sitio, ORCID (si existe como investigador doctoral) y afiliaciones universitarias es una acción de costo bajo-medio con potencial impacto alto en resolución de entidad por parte de motores de IA.

**Hallazgo (Media): sin presencia visible en Reddit.** No se pudo verificar de forma concluyente por restricciones de acceso a la API de búsqueda de Reddit en esta auditoría, pero dado que el dominio tiene 7 semanas es razonable asumir que no hay hilos orgánicos que mencionen el sitio todavía. Reddit es la segunda señal de correlación más fuerte documentada. Participar (no promocionalmente) en subreddits relevantes en español sobre emprendimiento/innovación en Colombia (p. ej. r/Colombia, comunidades de startups LatAm) donde surjan preguntas sobre Minciencias/beneficios tributarios es una vía de generar esa señal orgánicamente, no vía spam de enlaces.

**Hallazgo positivo:** autoría clara y consistente (31 menciones de "Augusto Ruiz" en la sola página de servicio revisada, credenciales verificables, afiliaciones a 5 universidades nombradas explícitamente) — buena señal E-E-A-T que también alimenta autoridad percibida por LLM.

---

## 6. Accesibilidad técnica para crawlers de IA (20%) — Score 95/100

**Hallazgo positivo (confirmado en esta auditoría):** El fetch crudo sin JavaScript de `/servicios/beneficios-tributarios-innovacion` devuelve el HTML completo con las 12 preguntas y respuestas del FAQ, el H1, todos los H2, el JSON-LD completo (2 bloques, ~18KB, tipos `Person/Organization/ProfessionalService/Service/WebSite` + `FAQPage/Question/Answer/BreadcrumbList`) — **sin necesidad de renderizado por navegador**. Esto es crítico para GEO: `GPTBot`, `ClaudeBot`, `PerplexityBot` y la mayoría de crawlers de IA actuales tienen soporte limitado o nulo de JavaScript; un sitio CSR/SPA perdería todo este contenido para ellos. Este sitio es Next.js con SSR completo y no tiene ese riesgo.

**Hallazgo positivo:** el contenido del FAQ está en el DOM inicial aunque visualmente esté colapsado en un acordeón (`grid-rows-[0fr] opacity-0` vía CSS, no `display:none` condicionado a JS ni carga diferida) — confirma que no hay contenido "oculto por interacción" invisible a un crawler sin JS.

No se penaliza más esta dimensión porque no se identificó ningún bloqueo, `noindex` inesperado, `X-Robots-Tag` restrictivo, ni problema de renderizado — consistente con lo ya documentado en la auditoría técnica SEO existente (`findings/technical.md`).

---

## Top 5 cambios de mayor impacto

| # | Cambio | Dimensión | Impacto | Esfuerzo |
|---|---|---|---|---|
| 1 | Convertir las preguntas del FAQ de `<span>` a `<h3>` real dentro del botón del acordeón (manteniendo el estilo visual) | Estructura | Alto | Bajo (cambio de un componente reutilizado en todas las páginas de servicio/`/prime-10`) |
| 2 | Producir 3-5 piezas de video corto (fragmentos de charlas/talleres ya impartidos, o explicación de PRIME-10™) y publicarlas en YouTube con enlace de vuelta al sitio | Multi-modal + Marca | Alto (mayor correlación individual documentada, 0.737) | Medio-Alto |
| 3 | Añadir `dateModified` estructurado (JSON-LD `WebPage`) a las páginas de servicio y blog, sincronizado con el texto visible "Última actualización" | Estructura + Autoridad | Medio | Bajo |
| 4 | Convertir el comparativo de beneficios tributarios I+D+i en LatAm en una tabla HTML real (con fuentes por país) en la página/post correspondiente, no solo texto corrido | Citabilidad + Multi-modal | Medio-Alto | Bajo-Medio |
| 5 | Crear entidad en Wikidata (Persona: Augusto Ruiz / Ober Augusto Ruiz Catanho) enlazando LinkedIn, sitio, afiliaciones universitarias, y sustentar la cifra "93% de aprobación" con nota metodológica o enlace a evidencia en la página donde se usa como respuesta | Autoridad | Medio-Alto | Medio |

---

## Puntuaciones específicas por plataforma (estimación cualitativa, sin acceso a herramientas de medición en vivo tipo DataForSEO en esta sesión)

| Plataforma | Estimación | Razonamiento |
|---|---|---|
| **Google AI Overviews** | Bajo (arrastra el problema de indexación del dominio nuevo documentado en `technical.md`: la mayoría de páginas están "descubiertas, sin indexar"). El FAQ schema y la estructura ayudarán en cuanto Google indexe, pero hoy el techo es la indexación, no la citabilidad. | AIO se alimenta del índice normal de Google; no puede citar lo que no está indexado. |
| **ChatGPT (con búsqueda/browsing)** | Medio | `OAI-SearchBot` está permitido y el HTML es plenamente accesible sin JS; el FAQ estructurado y las respuestas de 100-170 palabras son favorables. Techo actual: poca autoridad de marca fuera del propio dominio. |
| **Perplexity** | Medio-Alto | Perplexity tiende a citar con menor umbral de autoridad de dominio que Google y valora fuertemente la extractabilidad directa; el formato pregunta-respuesta del sitio (tanto FAQ como `/llms.txt`) encaja bien con su patrón de citación. |
| **Bing Copilot** | Medio | Mismo razonamiento que ChatGPT (comparte índice/infraestructura de Bing); sin datos propios verificados en esta auditoría. |

---

## Resumen de severidades

- **Alta**: preguntas de FAQ sin marcado de encabezado real (§3); ausencia casi total de contenido multimodal en páginas de servicio, en particular vídeo/YouTube (§4); sin entidad Wikidata ni presencia en Reddit/YouTube en `sameAs` (§5).
- **Media**: estadísticas clave sin fuente trazable en el cuerpo de la página (§2); falta `dateModified` estructurado (§3); comparativo LatAm sin tabla HTML (§4); sin presencia verificable en Reddit (§5).
- **Baja**: respuestas de FAQ por debajo del rango óptimo de palabras en 5 de 12 preguntas (§2).
- **Informativo**: alcance real de `/llms.txt` por motor — no reemplaza el trabajo de citabilidad del HTML normal, y Google Search/AIO no lo usa (§1).
