"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"

const serviceTypes = [
  "Excavation",
  "Défrichage",
  "Tranchées",
  "Préparation de terrain",
  "Nivellement",
  "Autre",
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-excavator.jpg"
            alt="Contactez Dax Excavation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Contactez-nous</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Obtenez une soumission gratuite
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Prêt à démarrer votre projet? Contactez-nous aujourd'hui pour une estimation gratuite et sans obligation. 
              Notre équipe est prête à discuter de vos besoins en excavation.
            </p>
          </div>
        </div>
      </section>

      {/* Section contact */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Demander une soumission</h2>
              
              {isSubmitted ? (
                <Card className="bg-card border-primary">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Merci!</h3>
                    <p className="text-muted-foreground mb-6">
                      Nous avons reçu votre demande et vous répondrons dans les 24 heures.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Soumettre une autre demande</Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jean Tremblay"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Numéro de téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(514) 123-4567"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse courriel *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean@exemple.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Détails du projet *</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet: emplacement, envergure, échéancier, etc."
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté concernant votre demande.
                  </p>
                </form>
              )}
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Coordonnées</h2>
                <div className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Téléphone</h3>
                          <a href="tel:+15149724447" className="text-muted-foreground hover:text-primary transition-colors">
                            514 972-4447
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">Lun-Ven: 8h00 - 17h00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Courriel</h3>
                          <a href="mailto:info@daxexcavation.com" className="text-muted-foreground hover:text-primary transition-colors">
                            info@daxexcavation.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">Réponse dans les 24 heures</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Bureau</h3>
                          <p className="text-muted-foreground">
                            Eastman, QC<br />
                            Région: Cantons-de-l'Est
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Heures d'ouverture</h3>
                          <p className="text-muted-foreground">
                            Lundi - Vendredi: 8h00 - 17h00<br />
                            Samedi - Dimanche: Fermé
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
