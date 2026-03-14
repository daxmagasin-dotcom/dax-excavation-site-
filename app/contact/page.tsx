import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
            {/* CTA Email */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Demander une soumission</h2>
              
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Envoyez-nous un courriel
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Pour obtenir une soumission gratuite, envoyez-nous un courriel avec les détails de votre projet: 
                      emplacement, type de travaux, envergure et échéancier souhaité.
                    </p>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href="mailto:info@daxexcavation.com?subject=Demande de soumission">
                        info@daxexcavation.com
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Nous répondons dans les 24 heures
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-3">Informations à inclure dans votre courriel:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Votre nom et numéro de téléphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Adresse ou emplacement du projet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Type de travaux souhaités</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Échéancier prévu</span>
                  </li>
                </ul>
              </div>
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
