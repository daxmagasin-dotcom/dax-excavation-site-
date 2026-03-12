import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Award, Users, Truck, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos | Dax Excavation",
  description: "Découvrez Dax Excavation - services d'excavation professionnels au Québec. Une équipe passionnée et engagée envers l'excellence.",
}

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, peu importe sa taille.",
  },
  {
    icon: Users,
    title: "Priorité client",
    description: "Votre satisfaction est notre priorité absolue. Nous écoutons et livrons.",
  },
  {
    icon: Truck,
    title: "Équipement moderne",
    description: "Nous investissons dans les derniers équipements pour un travail efficace et de qualité.",
  },
  {
    icon: Shield,
    title: "Sécurité d'abord",
    description: "La sécurité est primordiale dans tout ce que nous faisons, sur chaque chantier.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-excavator.jpg"
            alt="Équipe Dax Excavation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">À propos</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Services d'excavation basés à Eastman
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Dax Excavation est votre partenaire de confiance pour les services d'excavation et terrassement 
              dans les Cantons-de-l'Est, Sherbrooke et la Montérégie. Notre engagement envers la qualité, la sécurité 
              et la satisfaction client guide chaque projet que nous entreprenons.
            </p>
          </div>
        </div>
      </section>

      {/* Section histoire */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Équipe Dax Excavation"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-primary font-semibold tracking-wider uppercase mb-4">Notre histoire</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Basés à Eastman, au service des Cantons-de-l'Est
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dax Excavation a été fondée par un propriétaire possédant plus de 10 ans d'expérience en excavation et machinerie lourde. 
                  De projets de grande envergure à des travaux plus ciblés, nous avons développé l'expertise pour réaliser tous types de projets avec professionnalisme et efficacité.
                </p>
                <p>
                  Avec un équipement moderne et une équipe de professionnels qualifiés, nous sommes prêts à relever 
                  tous les défis. Basés à Eastman, nous desservons les Cantons-de-l'Est, Sherbrooke et la Montérégie avec le même dévouement.
                </p>
                <p>
                  Nos principes sont simples: travail de qualité, communication honnête et engagement à dépasser 
                  les attentes de nos clients à chaque projet, peu importe la taille de l'ouvrage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section valeurs */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Nos valeurs</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Ce qui nous motive chaque jour
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="bg-background border-border text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section certifications */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold tracking-wider uppercase mb-4">Notre engagement</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Qualité et professionnalisme
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chez Dax Excavation, nous nous engageons à respecter les plus hauts standards de qualité et de sécurité. 
                Nous investissons dans la formation continue pour assurer que notre équipe reste à jour avec les dernières techniques.
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Équipement moderne et bien entretenu",
                  "Formation continue de notre équipe",
                  "Respect des normes de sécurité",
                  "Communication transparente",
                  "Respect des délais et budgets",
                  "Service client attentionné",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-excavator.jpg"
                alt="Équipement professionnel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Prêt à travailler avec nous?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Faites confiance à notre équipe passionnée pour réaliser votre prochain projet d'excavation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/contact">
                Demander une soumission gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/projects">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
