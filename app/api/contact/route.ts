import { NextResponse } from "next/server"

export async function POST(request: Request) {
  console.log("[v0] Contact API called - v2")
  
  try {
    const body = await request.json()
    const { name, email, phone, message } = body
    
    console.log("[v0] Form data received:", { name, email, phone, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Send via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    console.log("[v0] RESEND_API_KEY exists:", !!RESEND_API_KEY)
    
    if (!RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY not configured")
      return NextResponse.json(
        { error: "Service de courriel non configuré" },
        { status: 500 }
      )
    }

    console.log("[v0] Sending email via Resend...")
    
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
    console.log("[v0] Resend response status:", response.status)
    console.log("[v0] Resend response data:", JSON.stringify(responseData))

    if (response.ok) {
      console.log("[v0] Email sent successfully!")
      return NextResponse.json({ success: true })
    } else {
      console.error("[v0] Resend API error:", JSON.stringify(responseData))
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
