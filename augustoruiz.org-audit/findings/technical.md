# Auditoría técnica SEO — augustoruiz.org

Fecha: 2026-08-18
Alcance: 14 URLs (home, 5 páginas de servicio/producto, blog + 2 posts, sobre, docencia, medios, contacto, política de privacidad). Sitio Next.js sobre Vercel, SSR completo (no SPA).

Nota de contexto: robots.txt, sitemap.xml (14 URLs con lastmod real), redirect del dominio raíz a www, canonicals autorreferentes en páginas de servicio y meta robots `index,follow` ya estaban verificados y se dan por buenos; no se repite esa verificación aquí salvo cuando aporta un matiz nuevo.

## Resumen ejecutivo

No se encontró ninguna causa técnica que por sí sola explique que varias páginas queden en "Descubierta: actualmente sin indexar". El sitio está técnicamente sano: SSR completo, sitemap correcto, canonicals limpios, metadatos únicos por página, datos estructurados ricos y coherentes, enlazado interno completo (las 14 páginas son alcanzables en 1 clic desde el home), sin cadenas de redirección, sin contenido duplicado detectable. El patrón observado (home indexada, resto "descubiertas, sin indexar") es el comportamiento típico de Google en dominios nuevos (~7 semanas) con autoridad/backlinks casi nulos: Google prioriza el rastreo profundo de la home y pospone el resto hasta que percibe señales de calidad/demanda adicionales. Se identifican, no obstante, varios puntos de mejora que sí pueden estar restando prioridad de rastreo/indexación marginal y que conviene corregir.

**Score técnico: 84/100**

## 1. Crawlability — PASS
- robots.txt correcto (verificado previamente, no se repite).
- Sin bloqueos por `noindex` inesperados; todas las páginas del sitemap devuelven `meta robots: index, follow`.
- Sin `X-Robots-Tag` en cabeceras (uso consistente de meta tag, correcto).
- Enlazado interno: el home enlaza directamente a las 14 páginas del sitemap (nav + footer + CTAs), por lo que ninguna página depende solo del sitemap para ser descubierta. Esto descarta "profundidad de rastreo" como causa.

## 2. Indexabilidad — PASS con una advertencia (Media)
- Meta title, description y canonical son únicos y coherentes por página (verificado en las 12 páginas HTML + home).
- **Hallazgo (Media): el home se enlaza internamente y en el sitemap sin barra final (`https://www.augustoruiz.org`), pero al pedir `https://www.augustoruiz.org/` (con barra, la forma que usan casi todos los rastreadores y clientes) el `<link rel="canonical">` devuelto es `https://www.augustoruiz.org` (sin barra).** Es decir, el canonical de la home no es byte-exacto a la URL que sirve el contenido. Google normalmente resuelve esto sin problema, pero es una inconsistencia menor que conviene alinear (canonical con barra final, igual que la URL real servida) para evitar cualquier ambigüedad de señal en un dominio nuevo donde cada señal cuenta.
- **Hallazgo (Baja): existe una URL con parámetro de filtro enlazada desde el propio home** — `/blog?categoria=beneficios-tributarios` (enlace en la sección de blog). Esta URL sirve HTML completo, con su propio `<title>` ("Beneficios Tributarios — Blog") pero canonical apuntando a `/blog` y cabecera `Cache-Control: private, no-cache, no-store` (a diferencia del resto de páginas, que son `public, max-age=0, must-revalidate` vía CDN de Vercel). No es un problema de indexación (el canonical la consolida correctamente hacia `/blog`), pero sí es una ruta de rastreo adicional que no aporta valor y que Googlebot gastará presupuesto de rastreo en visitar; considerar excluirla vía `rel="nofollow"` interno o quitar el enlace y dejar el filtrado solo client-side.
- Sin contenido duplicado ni thin content grave: los recuentos de palabras (aprox., incluyendo nav/footer) van de ~210 en `/contacto` (esperable, página transaccional) a ~1780 en `/servicios/evaluacion-financiera-innovacion`. Ninguna página está vacía o es un esqueleto.

## 3. Seguridad — FAIL parcial (Media)
- HTTPS correcto en todas las páginas, HSTS presente (`Strict-Transport-Security: max-age=63072000`) en todas las respuestas verificadas.
- **Hallazgo (Media): faltan cabeceras de seguridad estándar.** No se observó ninguna de las siguientes en ninguna página analizada (home, /sobre, /servicios, /blog?categoria=...):
  - `Content-Security-Policy`
  - `X-Content-Type-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`
  - `X-Frame-Options` (o `frame-ancestors` en CSP)
  
  No es un factor de ranking directo de Google, pero sí es una práctica estándar de "site quality/trust" recomendada, fácil de añadir en Next.js vía `headers()` en `next.config.js`, y reduce superficie de clickjacking/MIME-sniffing. Prioridad media porque no explica el problema de indexación pero es una brecha real de higiene técnica.

## 4. Estructura de URLs y redirecciones — PASS
- `augustoruiz.org` → `www.augustoruiz.org` con 308 (verificado previamente).
- `http://` → `https://` con 308, sin cadena adicional.
- URLs con slash final en subpáginas (`/sobre/`) redirigen 308 a la forma canónica sin slash (`/sobre`) — coherente con el resto del sitio.
- 404 real (no soft-404): `/pagina-inexistente-test` y `/Sobre` (mayúscula, case-sensitive) devuelven `HTTP 404` con `X-Next-Error-Status: 404`, no un 200 disfrazado.
- URLs limpias, en español, descriptivas, sin parámetros de sesión ni IDs opacos (excepto el caso de `/blog?categoria=...` ya mencionado).
- Sin cadenas de redirección (todas las redirecciones observadas son de un solo salto).

## 5. Mobile — PASS
- `<meta name="viewport" content="width=device-width, initial-scale=1">` presente en todas las páginas.
- Imágenes servidas vía `next/image` con `srcset`/`sizes` responsive y `alt` descriptivo en las muestras revisadas (home, logos de universidades).
- No se detectaron unidades fijas (px) sospechosas de romper el layout en móvil en el HTML inspeccionado; el sitio usa clases utilitarias tipo Tailwind con breakpoints (`sm:`, `lg:`) consistentes con diseño responsive.

## 6. Core Web Vitals (indicios desde el código fuente) — PASS con nota (Baja)
- LCP: la imagen principal del home (foto de perfil) usa `fetchPriority="high"` y está en el HTML inicial (SSR), buena señal para LCP.
- CLS: las imágenes declaran `width`/`height` (o `fill` con contenedor dimensionado), lo que evita layout shift por carga de imágenes.
- Fuentes: precargadas con `<link rel="preload" as="font">` y `font-display` gestionado por `next/font` (clases `__variable_*`), reduce FOIT/CLS por fuentes.
- No se puede medir INP/LCP/CLS reales sin datos de campo (CrUX) o Lighthouse; dado el bajo tráfico de un dominio de 7 semanas, es probable que CrUX aún no tenga datos suficientes ("Datos insuficientes" en PageSpeed Insights), lo cual es normal y no un fallo técnico.

## 7. Datos estructurados — PASS
- Home: `Organization` + `Person` + `WebSite` + `ProfessionalService` + `OfferCatalog`, con `SearchAction`, `EducationalOccupationalCredential`, `ImageObject` (logo). JSON-LD válido (1 bloque, 6481 bytes).
- Páginas de servicio y `/prime-10`: añaden `Service`, `FAQPage`/`Question`/`Answer`, `BreadcrumbList` — apropiado para featured snippets y breadcrumbs en SERP.
- Posts de blog: `BlogPosting` + `BreadcrumbList` + `WebPage`, con `Place`/`GovernmentOrganization`/`Thing` según el tema del artículo.
- No se detectaron errores de sintaxis JSON-LD en los bloques inspeccionados.

## 8. Renderizado JavaScript — PASS (confirmado)
- Confirmado con fetch crudo (sin ejecutar JS): el HTML servido por el servidor ya contiene el contenido textual completo (`extracted_text` vía trafilatura reproduce el copy real de la home), no un shell vacío. `is_spa: false`.
- No depende de hidratación para ser indexable; esto descarta "rendering JS" como causa del problema de indexación reportado.

## 9. IndexNow — FAIL (Baja/Media)
- **Hallazgo (Media): no hay evidencia de integración con IndexNow.** `https://www.augustoruiz.org/indexnow.txt` (clave típica) devuelve 404, y no hay referencia a IndexNow en el HTML ni en robots.txt.
- En un dominio de 7 semanas con cero backlinks, IndexNow (Bing/Yandex/Naver) es una palanca barata para acelerar el descubrimiento activo de páginas nuevas o actualizadas en motores alternativos a Google, en vez de depender solo del rastreo pasivo vía sitemap. No afecta a Google (que no consume IndexNow) pero sí es una oportunidad perdida de indexación más rápida en otros buscadores, relevante para un sitio joven.

## Sobre el problema reportado: "Descubierta, actualmente sin indexar"

Evidencia recogida que descarta causas técnicas como origen principal:
1. Todas las páginas son alcanzables en 1 clic desde el home (no hay orphan pages).
2. Todas devuelven 200, `index,follow`, canonical autorreferente correcto (salvo la matización de la home sin barra final).
3. El HTML servido al primer byte ya contiene el contenido completo (no hay dependencia de JS para indexar).
4. Sitemap correcto con `lastmod` reales (recién corregido), lo que ayuda a que Google priorice recrawl de páginas con cambios genuinos.
5. No hay contenido duplicado ni thin content severo.

Conclusión: el patrón encaja con el comportamiento estándar de Google para dominios muy jóvenes con autoridad externa mínima — "Discovered, currently not indexed" suele resolverse con tiempo, backlinks y señales de engagement (clics desde SERP, tráfico directo, menciones), no con cambios técnicos adicionales. Las dos palancas técnicas que sí pueden ayudar marginalmente son:
- Corregir la inconsistencia del canonical de la home (barra final) para que la señal sea 100% limpia.
- Activar IndexNow para Bing/Yandex, que puede generar indexación más rápida y visible en otros motores mientras Google madura su confianza en el dominio.
Fuera de eso, no hay bloqueos, errores ni malas prácticas técnicas que expliquen el problema; la explicación dominante sigue siendo la antigüedad/autoridad del dominio, tal como se sospechaba.

## Hallazgos priorizados

| Prioridad | Hallazgo | Evidencia | Recomendación |
|---|---|---|---|
| Media | Canonical de la home sin barra final (`https://www.augustoruiz.org`) mientras la URL servida es `https://www.augustoruiz.org/` | `curl -sD- https://www.augustoruiz.org/` → `<link rel="canonical" href="https://www.augustoruiz.org"/>` | Servir el canonical con barra final para que sea byte-exacto a la URL real, o normalizar ambas al mismo formato en el `generateMetadata` de Next.js |
| Media | Faltan cabeceras de seguridad (`CSP`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`) | `curl -sD- -o /dev/null <url>` en home, /sobre, /servicios: solo aparece `Strict-Transport-Security` | Añadir cabeceras vía `headers()` en `next.config.js` (o `middleware.ts`) |
| Media | Sin integración IndexNow para Bing/Yandex/Naver | `/indexnow.txt` → 404; sin referencia en HTML/robots.txt | Generar clave IndexNow, publicar el archivo de verificación y notificar automáticamente en cada deploy/cambio de contenido (encaja bien con el flujo Vercel + sitemap dinámico ya existente) |
| Baja | Enlace interno a URL con parámetro `/blog?categoria=beneficios-tributarios` sin necesidad SEO (ya consolidada vía canonical, pero consume presupuesto de rastreo) | Enlace visible en el HTML del home; canonical → `/blog`; `Cache-Control: private, no-cache` | Filtrar por categoría solo client-side (sin cambiar URL) o añadir `rel="nofollow"` al enlace interno |
| Informativa | CrUX/Core Web Vitals de campo probablemente sin datos suficientes por bajo tráfico (dominio de 7 semanas) | No verificable vía código fuente; señales de LCP/CLS en el HTML son buenas (preload de fuentes, `fetchPriority="high"`, dimensiones de imagen declaradas) | Ninguna acción técnica requerida; revisar en PageSpeed Insights/Search Console cuando haya volumen de tráfico |

## Archivos relevantes
- Ninguno del repo del sitio fue modificado; esta auditoría es de solo lectura sobre la web pública en `https://www.augustoruiz.org`.
- Informe: `C:\Users\danie\Desktop\Claude\projects\Web Augusto\augusto-ruiz-org\augustoruiz.org-audit\findings\technical.md`
