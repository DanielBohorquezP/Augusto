import { NextRequest, NextResponse } from "next/server";

// Suscripción al newsletter → Google Sheets.
// Los correos se agregan como filas a una hoja de cálculo vía un Google Apps
// Script desplegado como Web App. Pasos de configuración en docs/INTEGRACIONES.md.

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: { email: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email } = body;

  if (!email?.trim() || !isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL not configured");
    return NextResponse.json({ error: "Service not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        fecha: new Date().toISOString(),
        origen: "newsletter-web",
      }),
      // Apps Script responde con redirect 302 hacia el resultado
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("Google Sheets webhook error:", res.status, await res.text());
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
