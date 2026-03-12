import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shovel, TreePine, Ruler, Mountain, ArrowRight, CheckCircle2, Leaf, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Services | Dax Excavation",
  description: "Services professionnels de défrichage, terrassement, nivellement, drainage et aménagement paysager au Québec.",
}

const services = [
  {
    id: "defrichage",
    icon: TreePine,
    title: "Défrichage",
    description: "Nous offrons des services complets de défrichage pour préparer votre terrain pour l'agriculture, l'aménagement paysager ou tout autre projet.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250702_180240-oOMXuzIUXWZihenwl8lwl1IdIdyECB.jpg",
    features: [
      "Abattage d'arbres et dessouchage",
      "Débroussaillage et nettoyage de végétation",
      "Enlèvement et élimination des débris",
      "Nettoyage de terrain",
      "Dégagement d'emprise",
      "Pratiques respectueuses de l'environnement",
    ],
  },
  {
    id: "terrassement",
    icon: Shovel,
    title: "Terrassement",
    description: "Services de terrassement pour l'aménagement de votre terrain, création de plateaux et modification du relief.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250704_140417-13SG3o268k6Rfzwx5JE4hGQbSD8AXk.jpg",
    features: [
      "Déplacement et transport de terre",
      "Création de plateaux et terrasses",
      "Aménagement de terrain en pente",
      "Remblayage et déblayage",
      "Création d'accès et chemins",
      "Préparation pour aménagement paysager",
    ],
  },
  {
    id: "nivellement",
    icon: Mountain,
    title: "Nivellement",
    description: "Services experts de nivellement pour améliorer le drainage, l'esthétique et la fonctionnalité de votre terrain.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_624679EE-DD19-4961-8845-E3A8BEE04FDF-2YoPjo4Xx1LUhpjORmH2WuZUSb02We.jpeg",
    features: [
      "Nivellement fin et brut",
      "Création et correction de pente",
      "Amélioration du drainage naturel",
      "Nivellement pour gazon et pelouse",
      "Nivellement d'entrée de cour",
      "Préparation de terrain pour jardinage",
    ],
  },
  {
    id: "drainage",
    icon: Ruler,
    title: "Fossés et drainage",
    description: "Création de fossés et systèmes de drainage pour terrains agricoles, résidentiels et ruraux.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20251023_151206.JPG-H3UmcVkgQnBhM6grA2EG4kgIUqMXG0.jpeg",
    features: [
      "Creusage de fossés de drainage",
      "Aménagement de rigoles",
      "Systèmes de gestion des eaux",
      "Gestion des eaux de surface",
      "Correction de problèmes d'eau stagnante",
      "Entretien de fossés existants",
    ],
  },
  {
    id: "amenagement-paysager",
    icon: Leaf,
    title: "Aménagement paysager et murs de rétention",
    description: "Services d'aménagement paysager complets incluant la construction de murs de rétention en roche naturelle ou blocs de paysagement, ensemencement et finitions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2217857281-612x612-eC2fN28LK49Lk5FkMTVeqshMl5rxAJ.jpg",
    features: [
      "Murs de rétention en roche naturelle",
      "Murs de rétention en blocs de paysagement",
      "Installation de structures paysagères",
      "Préparation et ensemencement de gazon",
      "Aménagement d'entrée et finitions",
      "Design et réalisation sur mesure",
    ],
  },
  {
    id: "controle-erosion",
    icon: Shield,
    title: "Contrôle de l'érosion",
    description: "Solutions de contrôle de l'érosion pour protéger votre terrain et respecter les normes environnementales.",
    image: "/images/erosion-control.jpg",
    features: [
      "Stabilisation de pentes",
      "Installation de barrières anti-érosion",
      "Ensemencement de couverture végétale",
      "Gestion des sédiments",
      "Protection contre le ravinement",
      "Conformité aux normes environnementales",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hans-excavator-buckets-167743_1920-dOHPe2b4xGQdPdIBBW2Xi446424t07.jpg"
            alt="Équipement d'excavation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Nos Services</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Solutions d'excavation et aménagement complètes
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Du défrichage au nivellement, drainage et aménagement paysager complet. Nous offrons des services de terrassement et finitions pour vos projets d'aménagement de toutes tailles.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact">
                        Obtenir une soumission
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <Card className={`bg-card border-border overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/5" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Nos projets récents
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Découvrez quelques exemples de nos projets de défrichage et terrassement réalisés dans les Cantons-de-l'Est.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_20065EB2-29F8-4698-A998-56835E1E6456-cwIzqQeLuu5ch2686y8W5cnbxaNXOh.jpeg"
                    alt="Projet de défrichage forestier"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250704_140417-13SG3o268k6Rfzwx5JE4hGQbSD8AXk.jpg"
                    alt="Projet de terrassement résidentiel"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Besoin d'une solution personnalisée?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques et obtenir une soumission personnalisée pour vos travaux de terrassement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Demander une soumission gratuite
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
