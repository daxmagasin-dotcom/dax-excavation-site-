import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Blocks, ArrowRight, CheckCircle2, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "Murs de soutènement | Dax Excavation",
  description: "Experts en construction de murs de soutènement. Boulders naturels, roches guillotine, blocs de béton. Design personnalisé pour votre terrain.",
}

const wallTypes = [
  {
    title: "Boulders naturels",
    description: "Murs en roches naturelles massives pour un look authentique et durable. Parfait pour les pentes raides et les zones boisées.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2217857281-612x612-eC2fN28LK49Lk5FkMTVeqshMl5rxAJ.jpg",
    features: ["Aspect naturel", "Très durable", "Stabilisation de pentes", "Design authentique"],
  },
  {
    title: "Roches guillotine (Armour Stone)",
    description: "Blocs de roche massive taillés pour l'interlocking. Haute capacité de retenue et finition professionnelle.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_589558372_qE6hYTrrkClZC3FSoj6i3mrQrjxoZbqm-WhCuXyt1ftkTq2XPUmcTninsyUARuT.jpg",
    features: ["Empilement précis", "Très solide", "Finition nette", "Longévité garantie"],
  },
  {
    title: "Blocs de béton modulaires",
    description: "Blocs préfabriqués pour une installation rapide et économique. Design moderne et finitions variées.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250704_140417-13SG3o268k6Rfzwx5JE4hGQbSD8AXk.jpg",
    features: ["Installation rapide", "Économique", "Largeur variable", "Finitions modernes"],
  },
  {
    title: "Pierre naturelle empilée",
    description: "Murs en pierre taillée pour un rendu classique et élégant. Excellent pour les aménagements résidentiels haut de gamme.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_AE12655F-C4FD-479B-AF7B-3E25DF320008-EEnlDqPVLezpfalcKUKa2l5Dbf2ePX.jpeg",
    features: ["Élégant", "Classique", "Premium", "Personnalisable"],
  },
]

const benefits = [
  "Design personnalisé selon votre terrain et vos préférences",
  "Consultation gratuite et évaluation de site",
  "Équipe spécialisée avec années d'expérience",
  "Matériaux de qualité supérieure",
  "Drainage approprié pour longévité maximale",
  "Achèvement dans les délais prévus",
]

export default function MursSoutenementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2217857281-612x612-eC2fN28LK49Lk5FkMTVeqshMl5rxAJ.jpg"
            alt="Mur de soutènement en roche naturelle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Blocks className="h-6 w-6 text-primary" />
              <p className="text-primary font-semibold tracking-wider uppercase">Spécialité</p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Murs de soutènement professionnels
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Experts en construction de murs de soutènement durables et esthétiques. Du boulder naturel aux roches guillotine, 
              nous créons des structures adaptées à votre terrain et à votre vision.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/contact">
                  Demander une consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types de murs */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Types de murs de soutènement
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nous offrons une variété de matériaux et de designs pour créer le mur parfait pour votre propriété.
            </p>
          </div>

          <div className="space-y-20">
            {wallTypes.map((wall, index) => (
              <div
                key={wall.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-bold text-foreground">{wall.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{wall.description}</p>
                  
                  <ul className="mt-6 space-y-3">
                    {wall.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className={`bg-card border-border overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={wall.image}
                        alt={wall.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Pourquoi choisir nos murs de soutènement?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Avec des années d'expérience en construction de murs de soutènement, nous apportons expertise, 
                attention aux détails et engagement envers la qualité à chaque projet.
              </p>
              
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Mountain className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/contact">Obtenir une estimation gratuite</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_589558372_qE6hYTrrkClZC3FSoj6i3mrQrjxoZbqm-WhCuXyt1ftkTq2XPUmcTninsyUARuT.jpg"
                alt="Exemple de mur de soutènement de qualité"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Transformez votre terrain avec un mur de soutènement
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Consultez notre équipe d'experts pour transformer votre propriété. Estimations gratuites et designs personnalisés.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/contact">
                Demander une soumission gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+15149724447">Appelez 514 972-4447</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
