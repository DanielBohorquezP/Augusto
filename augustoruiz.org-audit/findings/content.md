# Auditoría de Calidad de Contenido y E-E-A-T — augustoruiz.org

Fecha: 2026-08-18
Alcance revisado: home, /sobre, /servicios, /servicios/beneficios-tributarios-innovacion, /servicios/evaluacion-financiera-innovacion, /servicios/capacitacion-ia-generativa, /prime-10, /docencia, /blog, /medios, /contacto, y los 2 artículos de blog publicados.

## Resumen

Sitio de un consultor individual (E-E-A-T decisivo por tratarse de "Your Money or Your Life" — asesoría tributaria y financiera con impacto económico directo en el lector/cliente). El perfil de credenciales es sólido y verificable, pero el sitio tiene **contenido muy delgado en la mayoría de páginas** y **dos afirmaciones estadísticas que no están presentadas con el rigor que exige un tema YMYL**.

**Content Quality Score estimado: 58/100**

---

## Hallazgos

### 1. Cifra "93% de tasa de aprobación" sin base verificable — CRITICAL

**Evidencia:** En `/servicios/beneficios-tributarios-innovacion` aparece tres veces: en la meta-descripción/intro ("La tasa de aprobación es del 93% en los proyectos gestionados en mi práctica actual de consultoría"), en la lista de bullets ("Tasa de aprobación en proyectos gestionados: 93%.") y en el bloque de FAQ/schema pensado para citación por IA ("La tasa de aprobación es del 93% en los proyectos gestionados en su práctica actual de consultoría").

**Por qué es un riesgo:** Es una estadística de conversión/éxito en un servicio tributario (YMYL) sin: (a) tamaño de muestra, (b) período de tiempo acotado, (c) fuente o metodología de cálculo, (d) diferenciación entre "proyectos que llegaron a evaluación de elegibilidad" vs. "proyectos postulados". Al repetirse en el bloque de FAQ estructurado, es precisamente el tipo de dato que un motor de IA generativa citaría textualmente como hecho verificado — amplificando el riesgo si no es auditable. Las QRG de septiembre 2025 penalizan explícitamente afirmaciones no verificables en contenido YMYL, y un revisor humano marcaría esto como "unmet expectation" de trustworthiness.

**Recomendación:** Acotar la cifra con datos concretos y verificables: período (ej. "en los últimos 24 meses"), número de proyectos gestionados (ej. "17 de 18 proyectos"), y si es posible enlazar o mencionar el tipo de entidad certificadora. Si no se puede verificar con precisión, sustituir por lenguaje cualitativo defendible ("la mayoría de los proyectos que gestiono, tras la evaluación de elegibilidad inicial, son aprobados") o retirar la cifra hasta poder sustentarla.

### 2. Cifra "85% ante Colciencias" atribuida a un cargo de hace 10 años en otra empresa — HIGH

**Evidencia:** En `/sobre`, dentro de la línea de tiempo de trayectoria: "2015 – 2016 · Gerente · Inventta Consultoría en Innovación · Dirección del equipo consultor en I+D+i. Tasa de aprobación del 85% ante Colciencias en proyectos de beneficios tributarios."

**Por qué es un riesgo:** A diferencia del 93%, esta cifra sí tiene periodo acotado (2015-2016) y contexto institucional (Colciencias, ahora Minciencias), lo cual es mejor práctica. Pero: (1) es una cifra de hace ~10 años, de un equipo que Augusto dirigía en una empresa que ya no existe/no es su práctica actual (Inventta), no de su trabajo individual verificable hoy; (2) no hay fuente externa o forma de verificarla (informe de Inventta, comunicado, cliente citable); (3) puede generar confusión con la cifra del 93% de la práctica actual si el lector no distingue el empleador y el período. El riesgo de trust es menor que el hallazgo 1 porque al menos está fechada y contextualizada, pero sigue siendo una afirmación de rendimiento no verificable de tercero.

**Recomendación:** Mantenerla solo como referencia histórica de trayectoria (está bien ubicada como ítem de CV, no como reclamo de venta), pero considerar añadir una aclaración breve tipo "(cifra reportada por Inventta, no verificable de forma independiente)" o eliminarla si no se puede sustentar, para evitar que se lea como aval implícito de resultados actuales.

### 3. Contenido extremadamente delgado en páginas de servicio y sección "Sobre mí" — HIGH

**Evidencia (conteo de palabras de contenido real, excluyendo nav/footer, sobre el HTML renderizado):**
- `/sobre`: texto de cuerpo real muy breve — la "Mi historia" son 2 párrafos cortos (~150 palabras); el resto de la página es una lista de trayectoria en formato tabla/timeline, no prosa.
- `/docencia`: ~370 palabras totales incluyendo nav/footer → cuerpo real probablemente <150 palabras.
- `/medios`: ~438 palabras totales incluyendo nav/footer → cuerpo real probablemente <200 palabras, y es una lista de enlaces a podcasts/entrevistas externas, no contenido propio.
- `/servicios/capacitacion-ia-generativa`: ~900 palabras totales, por debajo del mínimo orientativo de 800 para página de servicio una vez se descuenta el chrome de navegación.

**Umbral de referencia:** página de servicio ≥800 palabras, página "sobre/homepage" ≥500 palabras (ver tabla de mínimos). `/sobre` es la página donde más se juega la confianza (biografía, credenciales) y es la más débil en prosa real: la mayoría del contenido está en formato de lista/tabla (trayectoria, afiliaciones), sin narrativa que dé señales de experiencia de primera mano (casos concretos, anécdotas de proyectos, aprendizajes).

**Recomendación:** Ampliar `/sobre` con 2-3 párrafos adicionales de experiencia narrada (un caso real resuelto, un aprendizaje concreto de campo en Brasil/Uruguay/Argentina/Chile mencionado de forma genérica hoy). Ampliar `/docencia` y `/medios` con contexto propio (qué se enseña, para quién, qué preguntas surgen) en vez de ser solo listados.

### 4. Solo 2 artículos de blog publicados — MEDIUM

**Evidencia:** El sitemap solo lista 2 URLs bajo `/blog/`: `beneficios-tributarios-idi-america-latina-comparativo` (1,366 palabras aprox., incluye nav/footer) y `que-es-un-beneficio-tributario-colombia` (1,596 palabras aprox.). Ambos están sobre el mismo tema (beneficios tributarios), publicados en fechas consecutivas (10 y 11 de agosto de 2026).

**Por qué importa:** Para un consultor que reclama expertise en tres líneas de servicio (tributario, financiero/PRIME-10, capacitación en IA generativa), la cobertura temática del blog está desbalanceada: 100% del contenido editorial cubre solo uno de los tres servicios. No hay evidencia editorial (casos, análisis, guías) sobre evaluación financiera bajo incertidumbre ni sobre capacitación en IA generativa, que son justamente los servicios con metodología propia (PRIME-10) más difícil de explicar y con más necesidad de contenido demostrativo.

**Recomendación:** No es thin content en sí (los 2 artículos existentes superan el mínimo de 1,500 palabras), pero la cobertura topical es incompleta respecto al catálogo de servicios. Priorizar al menos un artículo ancla por línea de servicio antes de seguir publicando solo sobre tributario.

### 5. Afirmaciones de autoridad sin enlace/fuente verificable adicional — MEDIUM

**Evidencia:** En `/sobre` y en el bloque FAQ de `/servicios/beneficios-tributarios-innovacion` se listan credenciales (PhD(c) Universidad de los Andes, profesor invitado en Uniandes, EAFIT, UIS, Universidad del Bosque, Universidad de América) y cifras de trayectoria ("más de 50 organizaciones", "más de 120 subproyectos financiados por el BID y el Banco Mundial") sin enlaces de salida a perfiles institucionales, páginas de facultad, o el registro de PRIME-10 en la Dirección Nacional de Derecho de Autor mencionado en el texto.

**Por qué importa:** Las QRG valoran fuertemente la verificabilidad externa (authoritativeness = reconocimiento externo). CQRM (No. LA-3437) y PMP (No. 1649915) sí incluyen número de certificación, lo cual es buena práctica — pero las afiliaciones académicas y el registro de autor de PRIME-10 no tienen ese mismo tratamiento (sin enlace a la página de profesor invitado en cada universidad, sin número/enlace de registro de derecho de autor).

**Recomendación:** Enlazar cada afiliación académica a la página oficial del programa/facultad donde aparece como profesor invitado, y citar el número de registro de PRIME-10 ante la Dirección Nacional de Derecho de Autor con enlace o referencia verificable, igual que se hizo con CQRM y PMP.

### 6. Ausencia de política editorial o de correcciones explícita — MEDIUM

**Evidencia:** Existe un enlace "Reportar un error" en el footer de todas las páginas revisadas (visto en `/sobre`), lo cual es una señal positiva de trustworthiness. Sin embargo, no se encontró una página o sección dedicada que explique la política editorial (criterios de publicación, proceso de verificación de datos, cómo y cuándo se corrigen artículos, uso de IA en la redacción si aplica). El campo "Última actualización: agosto de 2026" aparece en varias páginas pero es una fecha genérica de mes, no un changelog de qué cambió.

**Recomendación:** Añadir una página corta de "Política editorial" o una sección en `/sobre` que explique: cómo se verifican los datos y cifras citadas, cómo se corrigen errores reportados vía el enlace existente, y si el contenido tiene asistencia de IA generativa y bajo qué supervisión editorial. Sustituir "última actualización: agosto de 2026" por fecha exacta (día) cuando el contenido cambie sustancialmente, para que la señal de frescura sea confiable.

### 7. Legibilidad y densidad de hechos citables — LOW / positivo con matiz

**Evidencia:** Los dos artículos de blog usan cifras concretas y fuentes oficiales por país (ej. "deducciones adicionales de hasta el 240% del gasto en Perú... créditos fiscales del 30% al 50% en México, Chile, Uruguay y Colombia"), estructura de preguntas frecuentes, y frases autocontenidas aptas para citación por IA (buena "AI citation readiness"). Las páginas de servicio también incluyen bloques FAQ con schema, favoreciendo extracción de fragmentos.

**Matiz:** La misma estructura de FAQ que favorece la citación por IA es la que replica la cifra del 93% sin matizar (hallazgo 1), por lo que la alta "citabilidad" del sitio amplifica el riesgo de que una cifra no verificable se propague como hecho establecido en respuestas de IA generativa.

**Recomendación:** Mantener el formato FAQ/schema, pero antes de ampliarlo pasar toda cifra cuantitativa por un chequeo de "¿puedo defender esto con una fuente o metodología pública?".

---

## Qué ya funciona bien

- **Credenciales verificables con número de certificación:** CQRM No. LA-3437 y PMP No. 1649915 están declarados con su número, lo cual es una práctica correcta de trustworthiness (a diferencia de simplemente decir "certificado PMP").
- **Enlace "Reportar un error" visible en el footer** de todas las páginas revisadas — señal directa de transparencia y disposición a corregir, algo que muchos sitios de consultoría individual omiten.
- **Trayectoria profesional detallada y fechada** en `/sobre` (timeline 2002–presente con roles, organizaciones y fechas), lo que da verificabilidad temporal aunque falte prosa narrativa.
- **Dos vías de contacto directo con tiempos de respuesta declarados** (WhatsApp personal + correo institucional `oa.uniandes.edu.co` y `proyectos@augustoruiz.org`, con compromiso de respuesta en 48 horas hábiles) — buena señal de trust y accesibilidad, poco común en sitios de consultoría boutique.
- **Los dos artículos de blog superan el mínimo de palabras y usan fuentes oficiales por país**, con buena estructura de citación por IA (FAQ, cifras acotadas por país y entidad).

---

## Content Quality Score y desglose E-E-A-T (modelo interno de esta skill)

| Factor | Peso | Nota | Justificación |
|---|---|---|---|
| Experience | 20% | 12/20 | Trayectoria fechada y creíble, pero falta narrativa de primera mano (casos, aprendizajes concretos) en prosa |
| Expertise | 25% | 20/25 | PhD(c), profesor invitado en 5 instituciones, certificaciones con número — fuerte |
| Authoritativeness | 25% | 14/25 | Credenciales fuertes pero sin enlaces de verificación externa; blog cubre solo 1 de 3 servicios |
| Trustworthiness | 30% | 12/30 | Penalizado fuertemente por las cifras 93%/85% sin sustento pleno, pese al enlace de reporte de errores y contacto transparente |

**Total ponderado: ~58/100**

## AI Citation Readiness

**Score estimado: 70/100** — buena estructura (FAQ, schema, cifras concretas por país en el blog), pero penalizado por el riesgo de que la cifra 93% se cite como hecho verificado sin serlo.
