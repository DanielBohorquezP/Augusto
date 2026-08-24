import { NextRequest, NextResponse } from "next/server";

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

  const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!web3formsAccessKey) {
    console.error("WEB3FORMS_ACCESS_KEY not configured");
    return NextResponse.json({ error: "Mail service not configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: web3formsAccessKey,
        subject: `[Contacto Web] ${body.service ?? "Consulta"} — ${name}`,
        from_name: name,
        replyto: email,
        Nombre: name,
        Email: email,
        Empresa: body.company || "—",
        Servicio: body.service || "—",
        Mensaje: message,
        Newsletter: body.newsletter ? "Sí" : "No",
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
