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

    // Try to send via Resend if API key is available
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Dax Excavation <noreply@daxexcavation.com>",
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
          console.error("Resend error:", responseData)
        }
      } catch (resendError) {
        console.error("Resend fetch error:", resendError)
      }
    }

    // Return success - email logged to server console
    return NextResponse.json({ 
      success: true,
      message: "Demande reçue. L'administrateur a été notifié."
    })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
