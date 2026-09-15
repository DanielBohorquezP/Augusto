import { NextRequest, NextResponse } from "next/server";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  newsletter?: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(`contact:${ip}`, RATE_LIMIT, RATE_LIMIT_WINDOW_MS)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  // El envío del correo (Web3Forms) lo hace el navegador directamente: su plan
  // gratuito bloquea las peticiones hechas server-to-server (ver docs/INTEGRACIONES.md).
  // Este endpoint solo valida, aplica rate limit y guarda el contacto en Sheets.

  // Guarda el contacto en Google Sheets. Best-effort: si falla, no bloquea el
  // envío del correo, que el navegador hace por su cuenta después de esta respuesta.
  const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_CONTACT_WEBHOOK_URL;
  if (sheetsWebhookUrl) {
    fetch(sheetsWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: name,
        email: email.trim().toLowerCase(),
        empresa: body.company || "",
        servicio: body.service || "",
        mensaje: message,
        newsletter: body.newsletter ? "Sí" : "No",
        fecha: new Date().toISOString(),
      }),
      redirect: "follow",
    }).catch((err) => console.error("Google Sheets contact webhook error:", err));
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
