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

    // Send email using Resend or another email service
    // For now, we'll use a simple mailto link approach or you can integrate with Resend
    
    // Option 1: If you have Resend API key set up
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Dax Excavation Site <onboarding@resend.dev>",
          to: ["info@daxexcavation.com"],
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

      if (!response.ok) {
        console.error("Resend API error:", await response.text())
        return NextResponse.json(
          { error: "Erreur lors de l'envoi du courriel" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Option 2: Log the submission (fallback when no email service is configured)
    console.log("=== Nouvelle demande de soumission ===")
    console.log("Nom:", name)
    console.log("Courriel:", email)
    console.log("Téléphone:", phone)
    console.log("Message:", message)
    console.log("=====================================")

    // Return success even without email service (for development)
    return NextResponse.json({ 
      success: true, 
      message: "Demande reçue. Configurez RESEND_API_KEY pour activer l'envoi de courriels." 
    })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
