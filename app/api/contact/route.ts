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

    // Use FormSubmit.co - free email forwarding service (no API key needed)
    // First submission will require email confirmation from info@daxexcavation.com
    const response = await fetch("https://formsubmit.co/ajax/info@daxexcavation.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        _subject: `Nouvelle demande de soumission de ${name}`,
        _template: "table",
      }),
    })

    if (!response.ok) {
      console.error("FormSubmit error:", await response.text())
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du courriel" },
        { status: 500 }
      )
    }

    const result = await response.json()
    
    if (result.success === "false" || result.success === false) {
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du courriel" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
