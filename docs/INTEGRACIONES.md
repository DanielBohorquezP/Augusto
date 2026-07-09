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

## 2. Formulario de contacto → Email (Resend)

El formulario de `/contacto` envía el mensaje a tu correo usando
[Resend](https://resend.com) (gratis hasta 3.000 emails/mes).

### Pasos

1. Crea una cuenta en [resend.com](https://resend.com).
2. **Verificar el dominio:** en Resend → Domains → Add Domain → `augustoruiz.org`.
   Resend te da 3 registros DNS (SPF, DKIM) — agrégalos donde esté administrado
   el dominio (Vercel, GoDaddy, Cloudflare...). La verificación tarda minutos.
3. **API key:** Resend → API Keys → Create API Key → copia la clave `re_...`.
4. Conéctala igual que la anterior:
   - Local: `RESEND_API_KEY=re_...` en `.env.local`
   - Vercel: Environment Variables → `RESEND_API_KEY` → redeploy.

Los mensajes llegan a `proyectos@augustoruiz.org` y `oa.ruiz27@uniandes.edu.co`
(configurado en `app/api/contact/route.ts`). Si quieres cambiar los destinatarios,
edita la línea `to: [...]` en ese archivo.

---

## 3. WhatsApp

El número de WhatsApp de todos los botones del sitio (botón flotante, hero, servicios,
PRIME-10, contacto) está centralizado en **`lib/site.ts`**:

```ts
export const WHATSAPP_NUMBER = "573005348153";
```

Para cambiarlo, edita solo esa línea.
