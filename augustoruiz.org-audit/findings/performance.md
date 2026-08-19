# Performance y Core Web Vitals — www.augustoruiz.org

## Metodología y alcance real

- Medición realizada con **Lighthouse 12.8.2 en local** (`npx lighthouse`, Chrome headless), no con la API de PageSpeed Insights: la API devolvió `PSI rate limit exceeded (240 QPM / 25,000 QPD)` en el primer intento y no se reintentó porque Lighthouse local ya dio datos de laboratorio completos y consistentes.
- Páginas medidas: home (`/`) y `/servicios/beneficios-tributarios-innovacion`, cada una en mobile (`--form-factor=mobile --screenEmulation.mobile`, throttling simulado por defecto de Lighthouse) y desktop (`--preset=desktop`).
- **No se obtuvieron datos de campo (CrUX)** en esta sesión — todo lo aquí reportado es de laboratorio (una única corrida por combinación página/dispositivo, sin repeticiones ni mediana de varias corridas). El dato de PSI del 11 de agosto (Performance 84, LCP móvil 4.3s) es el único punto de campo/PSI disponible y se usa solo como referencia histórica, no se validó de nuevo con la API real en esta sesión.
- Todo lo marcado como "medido" proviene directamente del JSON de Lighthouse (`audits['lcp-breakdown-insight']`, `audits['network-requests']`, `audits['render-blocking-insight']`, `audits['network-dependency-tree-insight']`). Lo marcado como "inferencia" es lectura de código/HTML servido, no una medición de tiempo.

## Resumen de resultados (medido)

| Página | Dispositivo | Score | LCP | TBT | CLS | TTFB |
|---|---|---|---|---|---|---|
| Home | Mobile | 88/100 | 2766 ms | 208 ms | 0.001 | 422 ms |
| Home | Desktop | 91/100 | 1417 ms | 85 ms | 0 | 498 ms |
| /servicios/beneficios-tributarios-innovacion | Mobile | 91/100 | 2606 ms | 138 ms | 0 | 703 ms |
| /servicios/beneficios-tributarios-innovacion | Desktop | 100/100 | 710 ms | 0 ms | 0 | 474 ms |

Estado CWV (umbral "good" ≤2.5s LCP): home mobile y /servicios mobile quedan **por encima del umbral "good"** (2.77s y 2.61s respectivamente), aunque en zona "needs improvement", no "poor". CLS y TBT están en verde en todos los casos.

Nota: estos 2.6–2.8s de LCP móvil en laboratorio son **mejores** que el 4.3s reportado por PSI el 11 de agosto. No se puede confirmar si la diferencia se debe a que (a) el sitio mejoró desde esa fecha, (b) PSI usa una localización/red distinta con throttling más agresivo, o (c) variabilidad entre corridas — no se corrió PSI real en esta sesión para contrastar. Tratar el 2.6–2.8s como el dato de laboratorio actual, y el 4.3s como referencia de campo no reconfirmada.

---

## Hallazgo 1 — CSS global bloquea el render en todas las páginas (severidad: Alta)

**Evidencia (medida):** en las cuatro corridas, `render-blocking-insight` reporta un único recurso bloqueante:

```
https://www.augustoruiz.org/_next/static/css/8ec50b15435c916a.css  (9473 bytes)
```

El árbol de dependencias de red (`network-dependency-tree-insight`) muestra que en la home este CSS es hijo directo del documento HTML, y a su vez las dos fuentes woff2 (`9e769f40faa52555-s.woff2`, 47133 bytes, y `37da3febcafd463e-s.woff2`, 22905 bytes) cuelgan del CSS como parte de la misma cadena crítica, con una cadena más larga de **4458 ms** en la home mobile. En `/servicios` la cadena es más corta (documento → CSS, 2329 ms) porque esa página no tiene una imagen LCP que dependa de las fuentes, pero el CSS sigue bloqueando el primer render.

Esto es coherente con el LCP de tipo texto en `/servicios` mobile: `lcp-breakdown-insight` reparte el LCP (2606 ms) en solo dos fases — TTFB 703 ms (27%) y **Element render delay 1903 ms (73%)** — es decir, casi tres cuartas partes del tiempo hasta el LCP se van en render delay, y el único recurso render-blocking identificado es ese CSS.

**Recurso concreto:** `/_next/static/css/8ec50b15435c916a.css`, 9.4 KB de transferencia, generado automáticamente por Next.js (bundle de CSS global de la app, probablemente Tailwind con las clases usadas en toda la app más las declaraciones `@font-face` de `next/font`).

**Recomendación:**
- Verificar si Tailwind está purgando correctamente el CSS no usado (`content` en `tailwind.config.ts`) para reducir el tamaño del bundle.
- Evaluar critical CSS: Next.js App Router no hace inlining automático de CSS crítico; si el framework de estilos lo permite, extraer el CSS above-the-fold a un `<style>` inline y cargar el resto de forma diferida (`media="print" onload="this.media='all'"` o técnica equivalente) para sacar el CSS completo de la ruta crítica de render.
- Confirmar que `next/font` esté generando los `<link rel="preload">` para las fuentes (Next.js lo hace automáticamente si el font se declara con `next/font/google` en el layout raíz); si las fuentes solo se referencian vía `@font-face` en el CSS sin preload, seguirán colgando de la descarga del CSS como se ve en la cadena de red medida.

---

## Hallazgo 2 — LCP de imagen en home (mobile) tarda 1.3s en descargar una imagen de 17.6 KB (severidad: Media)

**Evidencia (medida):** el elemento LCP de la home (mobile y desktop) es:

```html
<img alt="Augusto Ruiz - Foto de perfil profesional" fetchpriority="high" width="593" height="695"
     src="https://www.augustoruiz.org/_next/image?url=%2Fprofile-photo-cutout.png&w=640&q=75" ...>
```

En mobile, `network-requests` muestra que esta imagen concreta (`w=640`, formato `image/webp`, `transferSize: 17643` bytes) se solicita en `rendererStartTime ≈ 906 ms` y termina en `networkEndTime ≈ 2231 ms`, es decir **~1325 ms de descarga** para 17.6 KB — coincide con el `resourceLoadDuration: 1324.676 ms` (48% del LCP) que reporta `lcp-breakdown-insight`. El desglose completo del LCP en home mobile es:

| Subparte | Duración | % del LCP |
|---|---|---|
| TTFB | 422 ms | 15% |
| Resource load delay | 485 ms | 18% |
| Resource load duration | 1325 ms | 48% |
| Element render delay | 534 ms | 19% |

`fetchpriority="high"` ya está aplicado y el request es descubrible en el HTML inicial (`lcp-discovery-insight` pasa en 1/1), así que el problema no es prioridad ni lazy-loading — ya están bien. El cuello de botella es que la descarga tarda desproporcionadamente para 17.6 KB, lo que en laboratorio con throttling simulado de Lighthouse es consistente con una imagen que se sirve vía el optimizador de imágenes de Next (`/_next/image?...`) — cada variante de tamaño se genera on-demand/cacheada en el edge de Vercel, y el "resource load delay" (485 ms) previo a la descarga es indicio de negociación/generación de esa variante antes de que empiece la transferencia.

**Recomendación:**
- Añadir `priority` (ya presente via `fetchpriority=high`, confirmar que el componente usa `<Image priority>` de `next/image`, no solo el atributo HTML) y considerar `<link rel="preload" as="image">` para esta imagen específica en el `<head>` para adelantar el descubrimiento antes del CSS.
- Revisar si la imagen de perfil puede sustituirse por un asset ya optimizado y servido estático (sin pasar por el pipeline `/_next/image` en cada variante) si el catálogo de tamaños es pequeño y estable, para eliminar el "resource load delay" de generación/caché.

---

## Hallazgo 3 — Imágenes de logos sobredimensionadas en la home (severidad: Baja-Media)

**Evidencia (medida):** `uses-responsive-images` en home mobile reporta bytes desperdiciados por servir una imagen más grande de lo que se renderiza:

```
/_next/image?url=%2Flogos%2Fpoli_gracolombiano_hq.png&w=384&q=50   transferSize: 32711 bytes, wastedBytes: 19663
/_next/image?url=%2Flogos%2Funiversidad_rosario_hq.png&w=384&q=50  transferSize: 29414 bytes, wastedBytes: 13069
```

En home desktop aparece el mismo patrón para el logo de la Politécnico Gran Colombiano (`w=256`, wastedBytes: 12852). Estas imágenes no son el elemento LCP, así que no impactan el LCP directamente, pero consumen ancho de banda que compite con la imagen LCP y las fuentes en la cadena crítica, y explican en parte el hallazgo "Improve image delivery (~51 KiB)" que ya había reportado PSI el 11 de agosto.

**Recomendación:** los archivos fuente `poli_gracolombiano_hq.png` y `universidad_rosario_hq.png` (sufijo "_hq" sugiere que son originales de alta resolución) deberían reducirse en su tamaño intrínseco antes de subirlos, o dejar que `next/image` sirva un `sizes` más ajustado al tamaño real de renderizado de los logos en el grid, en vez de depender solo del recorte por ancho de contenedor.

---

## Hallazgo 4 — Imagen LCP de `/servicios/beneficios-tributarios-innovacion` sobredimensionada en desktop, aunque sin impacto en el score (severidad: Baja)

**Evidencia (medida):** en desktop, el LCP de esta página es una imagen (`20221126_083837.jpg`), servida a `w=1920&q=75`, `transferSize: 195685` bytes. `uses-responsive-images` marca `wastedBytes: 150562` (la imagen se sirve mucho más grande de lo necesario para el contenedor visible). Pese a esto, el LCP desktop de esta página es 710 ms y el score es 100/100, porque el TTFB (474 ms, 67% del LCP) domina y la imagen tiene tiempo de sobra para cargar antes del render. En mobile, la misma imagen se sirve en `w=750`, `transferSize: 47845` bytes, con `wastedBytes: 26196` — pero en mobile el elemento LCP es un párrafo de texto, no esta imagen, así que tampoco es crítica para el LCP mobile.

**Recomendación:** aunque no afecta el LCP hoy, sigue siendo peso de página desperdiciado (hasta 150 KB en desktop) que compite por ancho de banda y CPU de decodificación; ajustar el `sizes` del componente `<Image fill>` para que no solicite `w=1920` en un contenedor que en desktop mide ~1216px de ancho (según `boundingRect` medido: `width: 1216`).

---

## Lo que NO se pudo confirmar en esta sesión

- No se corrió PSI (API real) por el rate limit — no hay dato de campo (CrUX, percentil 75) fresco para contrastar con el histórico del 11 de agosto. Se recomienda repetir `pagespeed_check.py` más tarde cuando el rate limit se libere, para confirmar si el LCP móvil de campo (4.3s reportado) sigue vigente o ya bajó, dado que el dato de laboratorio actual (2.6–2.8s) es sustancialmente mejor.
- No se inspeccionó el contenido exacto del CSS bloqueante (8ec50b15435c916a.css) más allá de su peso y su rol en la cadena de red — no se abrió el archivo para confirmar si contiene únicamente Tailwind purgado o también CSS no crítico evitable. Esto es una verificación de código pendiente, no una medición de rendimiento.
- Solo se hizo una corrida por combinación página/dispositivo (no la mediana de 3-5 corridas que recomienda Lighthouse para reducir varianza); los números puntuales de LCP/TBT pueden variar ±10-20% entre corridas.
