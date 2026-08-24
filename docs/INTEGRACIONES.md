# Integraciones — configuración paso a paso

Guía para conectar los formularios del sitio a servicios reales. Nada de esto requiere
tocar código: solo crear las cuentas, seguir los pasos y pegar las claves en las
variables de entorno.

---

## 1. Newsletter → Google Sheets

Los correos que la gente deja en el formulario de newsletter se guardan como filas en
una hoja de cálculo tuya. Desde ahí puedes usar cualquier extensión de Sheets
(Mail Merge, YAMM, formMule, etc.) para enviarles correos.

### Paso 1 — Crear la hoja

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
   Nómbrala por ejemplo **"Suscriptores augustoruiz.org"**.
2. En la fila 1 escribe estos encabezados: `email` | `fecha` | `origen`

### Paso 2 — Crear el Apps Script

1. En la hoja: menú **Extensiones → Apps Script**.
2. Borra el contenido del editor y pega esto:

```javascript
function doPost(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var datos = JSON.parse(e.postData.contents);

  // Evitar duplicados
  var emails = hoja.getRange("A:A").getValues().flat();
  if (emails.indexOf(datos.email) === -1) {
    hoja.appendRow([datos.email, datos.fecha, datos.origen]);
  }

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda (ícono de disquete) y ponle un nombre al proyecto, ej. "Newsletter Web".

### Paso 3 — Desplegar como Web App

1. Botón azul **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Configuración:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** **Cualquier persona** ← importante, si no el sitio no puede escribir
4. Clic en **Implementar** y autoriza los permisos que pida.
5. Copia la **URL de la aplicación web** (termina en `/exec`).

### Paso 4 — Conectar el sitio

- **En local:** crea el archivo `.env.local` (copia de `.env.local.example`) y pega:
  ```
  GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/TU_ID/exec
  ```
- **En Vercel:** Project → Settings → Environment Variables → agrega
  `GOOGLE_SHEETS_WEBHOOK_URL` con la misma URL → redeploy.

> Si después editas el script, debes crear una **nueva implementación** (o administrar
> versiones) para que los cambios apliquen — la URL puede cambiar.

---

## 2. Formulario de contacto → Email (Web3Forms)

El formulario de `/contacto` envía el mensaje a tu correo usando
[Web3Forms](https://web3forms.com) (gratis hasta 250 envíos/mes, sin verificar
dominio por DNS).

### Pasos

1. Ve a [web3forms.com](https://web3forms.com), escribe el correo donde quieres
   recibir los mensajes y clic en **Create Access Key**.
2. Te llega un correo con la **Access Key** (formato UUID) — cópiala.
3. Conéctala:
   - Local: `WEB3FORMS_ACCESS_KEY=...` en `.env.local`
   - Vercel: Environment Variables → `WEB3FORMS_ACCESS_KEY` → redeploy.

Los mensajes llegan al correo que registraste al crear la Access Key
(actualmente `proyectos@augustoruiz.org`). Si quieres cambiar el destinatario,
genera una nueva Access Key en Web3Forms con el correo nuevo y reemplázala en
las variables de entorno — no requiere tocar `app/api/contact/route.ts`.

---

## 3. WhatsApp

El número de WhatsApp de todos los botones del sitio (botón flotante, hero, servicios,
PRIME-10, contacto) está centralizado en **`lib/site.ts`**:

```ts
export const WHATSAPP_NUMBER = "573005348153";
```

Para cambiarlo, edita solo esa línea.

---

## 4. Google Search Console

Te dice qué tan bien te encuentra Google: impresiones, clics, posición promedio,
qué buscan las personas para llegar a tu sitio, y errores de indexación. **Esto no
lo reemplaza ningún analytics** — es la única fuente de esos datos.

### Paso 1 — Crear la propiedad

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
   e inicia sesión con la cuenta de Google que quieras usar como administradora.
2. Elige **"Prefijo de URL"** (no "Dominio") y escribe `https://www.augustoruiz.org`.

### Paso 2 — Verificar la propiedad (método etiqueta HTML)

1. Google te mostrará varios métodos de verificación. Elige **"Etiqueta HTML"**.
2. Te da una línea como:
   ```html
   <meta name="google-site-verification" content="AbCdEfGhIjKlMnOpQrStUvWxYz1234567890" />
   ```
   Copia **solo el valor de `content`** (la parte entre comillas).
3. Pégalo en `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
   ```
   En Vercel: Project → Settings → Environment Variables → agrega la misma variable
   → redeploy.
4. Con el sitio ya desplegado con esa variable, vuelve a Search Console y haz clic
   en **"Verificar"**.

### Paso 3 — Enviar el sitemap

1. En Search Console, menú lateral **Sitemaps**.
2. Escribe `sitemap.xml` y clic en **Enviar**. El sitemap ya existe en
   `https://www.augustoruiz.org/sitemap.xml` (generado automáticamente por
   `app/sitemap.ts`), no necesitas crear nada más.

Los primeros datos de impresiones/clics tardan unos días en aparecer.

---

## 5. Google Analytics 4 (GA4)

Te dice cómo se comporta la gente dentro del sitio: visitas, de dónde vienen,
qué páginas ven, cuánto se quedan.

### Paso 1 — Crear la propiedad

1. Ve a [analytics.google.com](https://analytics.google.com) → **Administrar** →
   **Crear propiedad**.
2. Nombre: "Augusto Ruiz - Sitio web". Zona horaria: Colombia. Moneda: COP.
3. En el flujo de datos, elige **Web**, pon la URL `https://www.augustoruiz.org`
   y un nombre de flujo (ej. "Sitio principal").
4. Google te da un **ID de medición** con formato `G-XXXXXXXXXX`. Cópialo.

### Paso 2 — Conectar el sitio

- **Local:** en `.env.local` agrega:
  ```
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
  ```
- **Vercel:** Project → Settings → Environment Variables → agrega la misma
  variable → redeploy.

El código ya está listo en `app/layout.tsx`: si la variable existe, GA4 se activa
solo; si no existe, simplemente no se carga (cero impacto en quienes aún no lo
configuren).

### Paso 3 — Confirmar que está recibiendo datos

1. En GA4, ve a **Informes → Tiempo real**.
2. Abre tu sitio en otra pestaña y navega un par de páginas.
3. Deberías verte a ti mismo como usuario activo en el reporte en segundos.

---

## 6. Vercel Analytics

Alternativa más simple y sin cookies a GA4 — buena para una vista rápida de
tráfico sin configurar nada. Ya está instalado en el código
(`@vercel/analytics`, activo en `app/layout.tsx`).

### Único paso pendiente — activarlo en el dashboard

1. Ve a tu proyecto en [vercel.com](https://vercel.com) → pestaña **Analytics**.
2. Clic en **Enable**. Es gratis en el plan Hobby con límite mensual de eventos
   (suficiente para un sitio de este tamaño); si lo superas, simplemente deja de
   registrar hasta el mes siguiente, no genera cobros inesperados a menos que lo
   actives explícitamente en un plan de pago.
3. Los datos aparecen ahí mismo, sin necesidad de ninguna variable de entorno
   adicional — el paquete detecta el entorno de Vercel automáticamente.
