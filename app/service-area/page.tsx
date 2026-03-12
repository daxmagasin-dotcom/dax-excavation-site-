import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Zone de service | Dax Excavation",
  description: "Dax Excavation basée à Eastman dessert les Cantons-de-l'Est, Sherbrooke et la Montérégie. Service de terrassement et défrichage professionnel.",
}

const serviceAreas = [
  {
    region: "Cantons-de-l'Est - Centre",
    cities: ["Eastman", "Orford", "Magog", "Sherbrooke", "Ascot-Jonction", "Wotton"],
  },
  {
    region: "Cantons-de-l'Est - Sud",
    cities: ["Coaticook", "East Angus", "Disraeli", "Courcelles", "Nantes", "Stanstead"],
  },
  {
    region: "Cantons-de-l'Est - Ouest",
    cities: ["Granby", "Roxton Pond", "Saint-Armand", "Farnham", "Warwick", "Cowansville"],
  },
  {
    region: "Montérégie",
    cities: ["Brossard", "Longueuil", "Laprairie", "Saint-Constant", "Candiac", "Châteauguay", "Saint-Hyacinthe", "Sorel-Tracy"],
  },
]

export default function ServiceAreaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-excavator.jpg"
            alt="Zone de service d'excavation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Zone de service</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Service Cantons-de-l'Est, Sherbrooke & Montérégie
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Basée à Eastman, Dax Excavation offre des services professionnels de terrassement et défrichage dans les Cantons-de-l'Est, 
              Sherbrooke et la Montérégie. Nous servons les clients résidentiels et commerciaux à travers ces régions dynamiques.
            </p>
          </div>
        </div>
      </section>

      {/* Section carte */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-semibold tracking-wider uppercase mb-4">Zone de couverture</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Basés à Eastman
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nos services couvrent les Cantons-de-l'Est, Sherbrooke et la Montérégie. Basés à Eastman, nous nous déplaçons 
                chez vous pour vos projets de terrassement, défrichage et drainage avec un service professionnel et de qualité.
              </p>

              <div className="mt-8 p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Base d'opération</p>
                    <p className="text-sm text-muted-foreground">Eastman, Cantons-de-l'Est, QC</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Contactez-nous</p>
                    <a href="tel:+15149724447" className="text-sm text-primary hover:underline">514 972-4447</a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Pourquoi la localisation compte</h3>
                <ul className="space-y-3">
                  {[
                    "Temps de réponse rapide pour les urgences",
                    "Coûts de mobilisation réduits pour votre projet",
                    "Visites de site le jour même disponibles",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.3949255896127!2d-72.3051!3d45.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc905c8c5c5c5c5%3A0x4cc905c8c5c5c5c5!2sEastman%2C%20QC!5e0!3m2!1sfr!2sca!4v1709123456789!5m2!1sfr!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Carte d'Eastman et région"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Liste des zones de service */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Régions desservies</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Villes et régions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Voici quelques-unes des communautés que nous desservons régulièrement. Vous ne voyez pas votre secteur? Contactez-nous pour confirmer que nous pouvons vous servir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Card key={area.region} className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {area.region}
                  </h3>
                  <ul className="space-y-2">
                    {area.cities.map((city) => (
                      <li key={city} className="text-sm text-muted-foreground pl-7 relative">
                        <span className="absolute left-2 top-2 w-1.5 h-1.5 bg-primary/50 rounded-full" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA secteur non listé */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Votre secteur n'est pas listé?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Nous pouvons peut-être quand même desservir votre localisation. Contactez-nous pour discuter de votre projet et de votre emplacement, 
            et nous vous dirons si nous pouvons vous aider.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+15149724447">Appelez 514 972-4447</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
