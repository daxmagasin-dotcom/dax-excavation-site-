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

    // Send email using Cloudflare Email Routing or API
    const CLOUDFLARE_EMAIL_API_KEY = process.env.CLOUDFLARE_EMAIL_API_KEY
    const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    // Try Mailgun first (commonly used with Cloudflare)
    if (MAILGUN_API_KEY && MAILGUN_DOMAIN) {
      const formData = new FormData()
      formData.append("from", `Dax Excavation <noreply@${MAILGUN_DOMAIN}>`)
      formData.append("to", "info@daxexcavation.com")
      formData.append("subject", `Nouvelle demande de soumission de ${name}`)
      formData.append(
        "html",
        `
        <h2>Nouvelle demande de soumission</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Courriel:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
      )
      formData.append("reply-to", email)

      const response = await fetch(
        `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
          },
          body: formData,
        }
      )

      if (!response.ok) {
        console.error("Mailgun API error:", await response.text())
        return NextResponse.json(
          { error: "Erreur lors de l'envoi du courriel" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Try Resend as fallback
    if (RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Dax Excavation <noreply@daxexcavation.com>",
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

    // Log the submission (fallback when no email service is configured)
    console.log("=== Nouvelle demande de soumission ===")
    console.log("Nom:", name)
    console.log("Courriel:", email)
    console.log("Téléphone:", phone)
    console.log("Message:", message)
    console.log("=====================================")

    return NextResponse.json({
      success: true,
      message:
        "Demande reçue. Configurez MAILGUN_API_KEY et MAILGUN_DOMAIN ou RESEND_API_KEY pour activer l'envoi de courriels.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
