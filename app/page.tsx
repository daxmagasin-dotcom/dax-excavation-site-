import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shovel, TreePine, Ruler, Mountain, ArrowRight, CheckCircle2, Star, Quote, Leaf, Shield } from "lucide-react"

const services = [
  {
    icon: TreePine,
    title: "Défrichage",
    description: "Déboisement efficace d'arbres, broussailles et débris pour préparer votre terrain.",
  },
  {
    icon: Shovel,
    title: "Terrassement",
    description: "Travaux de terrassement pour aménagement paysager et préparation de terrain.",
  },
  {
    icon: Mountain,
    title: "Nivellement",
    description: "Services de nivellement pour améliorer le drainage et l'esthétique de votre terrain.",
  },
  {
    icon: Ruler,
    title: "Fossés et drainage",
    description: "Création de fossés et systèmes de drainage pour terrains agricoles et résidentiels.",
  },
  {
    icon: Leaf,
    title: "Aménagement paysager",
    description: "Murs de rétention en roche naturelle ou blocs, ensemencement et finitions paysagères.",
  },
  {
    icon: Shield,
    title: "Contrôle de l'érosion",
    description: "Solutions de protection et stabilisation de terrain respectueuses de l'environnement.",
  },
]

const stats = [
  { value: "100%", label: "Satisfaction client" },
  { value: "Équipe", label: "Professionnelle" },
  { value: "Prix", label: "Compétitifs" },
  { value: "Service", label: "Personnalisé" },
]

const testimonials = [
  {
    quote: "Dax Excavation a fait un excellent travail de défrichage sur notre terrain. Rapide, professionnel et un résultat impeccable. Je recommande fortement!",
    author: "Michel Tremblay",
    role: "Propriétaire",
    rating: 5,
  },
  {
    quote: "Le travail de nivellement qu'ils ont fait pour notre cour était excellent. Ils ont été prudents et ont terminé avant la date prévue.",
    author: "Jean-Pierre Bouchard",
    role: "Propriétaire résidentiel",
    rating: 5,
  },
  {
    quote: "Dax Excavation a réalisé le défrichage et l'aménagement du stationnement de ma nouvelle propriété. Leur professionnalisme et leur attention aux détails ont dépassé mes attentes. Travail impeccable et livré à temps. Hautement recommandé!",
    author: "Jonathan Alexandrine",
    role: "Propriétaire - Dérichage et aménagement stationnement",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_AE12655F-C4FD-479B-AF7B-3E25DF320008-EEnlDqPVLezpfalcKUKa2l5Dbf2ePX.jpeg"
            alt="Excavatrice au travail sur un chantier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">
              Votre partenaire de confiance
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Défrichage, terrassement et aménagement
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Services complets de défrichage, terrassement, drainage et aménagement paysager. 
              Avec un équipement moderne et une équipe dévouée, nous livrons des résultats de qualité à temps et selon le budget.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/contact">
                  Demander une soumission gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/services">Nos services</Link>
              </Button>
            </div>
            
            {/* Badges de confiance */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Estimations gratuites</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Service professionnel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Équipement moderne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary-foreground lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Ce que nous faisons</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Nos services complets
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Du défrichage à l'aménagement paysager, nous offrons des services de terrassement et finitions adaptés aux besoins de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Voir tous les services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo pleine largeur */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250821_152517-00M0uVCAWsWJWE3jIl1nl00B8HIJvn.jpg"
          alt="Travaux de défrichage forestier dans les Cantons-de-l'Est"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl lg:text-3xl font-bold text-foreground text-center text-balance px-4">
            Des Cantons-de-l'Est à la Montérégie, nous nous déplaçons pour vous.
          </p>
        </div>
      </div>

      {/* Section pourquoi nous choisir */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold tracking-wider uppercase mb-4">Pourquoi nous choisir</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Votre partenaire de confiance
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chez Dax Excavation, nous combinons un équipement moderne avec un engagement envers la satisfaction du client. 
                Chaque projet reçoit notre attention complète aux détails et un service professionnel.
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Flotte moderne d'équipement bien entretenu",
                  "Opérateurs qualifiés et professionnels",
                  "Prix compétitifs avec soumissions transparentes",
                  "Achèvement des projets dans les délais",
                  "Service personnalisé et attentionné",
                  "Pratiques respectueuses de l'environnement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/about">En savoir plus sur nous</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hans-excavator-buckets-167743_1920-dOHPe2b4xGQdPdIBBW2Xi446424t07.jpg"
                alt="Dents de godet d'excavatrice - équipement professionnel"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Section témoignages */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Témoignages</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Ce que nos clients disent
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Prêt à démarrer votre projet?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui pour une estimation gratuite. Notre équipe est prête à vous aider avec tous vos besoins en terrassement.
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
