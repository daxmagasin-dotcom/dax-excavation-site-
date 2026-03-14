import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Log submission to console
    console.log("=== NOUVELLE DEMANDE DE SOUMISSION ===")
    console.log("Nom:", name)
    console.log("Courriel:", email)
    console.log("Téléphone:", phone)
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("========================================")

    // Send via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured")
      return NextResponse.json(
        { error: "Service de courriel non configuré" },
        { status: 500 }
      )
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Dax Excavation <onboarding@resend.dev>",
        to: "info@daxexcavation.com",
        subject: `Nouvelle demande de soumission de ${name}`,
        html: `
          <h2>Nouvelle demande de soumission</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Courriel:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        reply_to: email,
      }),
    })

    const responseData = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      console.error("Resend API error:", responseData)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du courriel" },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
