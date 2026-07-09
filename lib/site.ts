// Datos de contacto del sitio. Cambiar el número aquí lo actualiza en todo el sitio
// (botón flotante, CTAs de hero, servicios, PRIME-10, contacto).

export const WHATSAPP_NUMBER = "573005348153";

export function whatsappUrl(
  message = "Hola Augusto, vengo de tu sitio web y quiero agendar una consulta."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
