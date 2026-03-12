"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, X } from "lucide-react"

const categories = ["Tous", "Défrichage", "Drainage", "Résidentiel", "Terrassement"]

const projects = [
  {
    id: 1,
    title: "Excavation résidentielle",
    category: "Résidentiel",
    location: "Orford, Cantons-de-l'Est",
    description: "Excavation pour propriété résidentielle incluant préparation du terrain et installation du système de drainage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250704_140417-kMvo5EuTd6n0wkWBVm5BYmpyD2i0lZ.jpg",
  },
  {
    id: 2,
    title: "Défrichage forestier",
    category: "Défrichage",
    location: "Orford, Cantons-de-l'Est",
    description: "Défrichage complet d'un terrain boisé, création d'une route d'accès et préparation du terrain pour développement.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250821_152517-00M0uVCAWsWJWE3jIl1nl00B8HIJvn.jpg",
  },
  {
    id: 3,
    title: "Travaux de drainage forestier",
    category: "Drainage",
    location: "Orford, Cantons-de-l'Est",
    description: "Création de fossés de drainage et système d'évacuation d'eau dans un terrain forestier accidenté.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250629_200331-jMH7czpnMaihqLuYam2iBarNP7FSHj.jpg",
  },
  {
    id: 4,
    title: "Tranchée de drainage forestière",
    category: "Drainage",
    location: "Orford, Cantons-de-l'Est",
    description: "Creusage de tranchées pour système de drainage dans un terrain boisé difficile d'accès.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250525_193600-FdXlAm9kgA9ypQRXEAhKoMU8RWEWZL.jpg",
  },
  {
    id: 6,
    title: "Excavation et transport de matériaux",
    category: "Terrassement",
    location: "Orford, Cantons-de-l'Est",
    description: "Excavation, chargement et transport de matériaux de terrassement avec équipement spécialisé.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_AE12655F-C4FD-479B-AF7B-3E25DF320008-WlRkCWh2Pwyhvr50WYo74PPSJxDEoK.jpeg",
  },
  {
    id: 7,
    title: "Nivellement résidentiel",
    category: "Terrassement",
    location: "Orford, Cantons-de-l'Est",
    description: "Nivellement et préparation de terrain pour construction résidentielle avec équipement de précision.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250710_201302-jIdzmZOMeVPw2owwfPnMsTmpXJHQ3A.jpg",
  },
  {
    id: 8,
    title: "Excavation en terrain difficile",
    category: "Défrichage",
    location: "Orford, Cantons-de-l'Est",
    description: "Excavation et préparation de terrain forestier accidenté pour futur développement résidentiel.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250702_180240-oOMXuzIUXWZihenwl8lwl1IdIdyECB.jpg",
  },
  {
    id: 9,
    title: "Chemin forestier aménagé",
    category: "Défrichage",
    location: "Orford, Cantons-de-l'Est",
    description: "Aménagement d'un chemin d'accès à travers un terrain boisé avec préparation et compactage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250821_152519-n8K2OwPvzpfKMARYYhPFrOkZMwO5ER.jpg",
  },
  {
    id: 10,
    title: "Système de drainage complet",
    category: "Drainage",
    location: "Orford, Cantons-de-l'Est",
    description: "Installation complète d'un système de drainage forestier avec fossés et canalisations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250630_171219-CpkKB4BZdu8itxT1w86s5s0qS0RaHj.jpg",
  },
  {
    id: 12,
    title: "Excavation avec gestion des eaux",
    category: "Drainage",
    location: "Orford, Cantons-de-l'Est",
    description: "Excavation de site avec installation de drainage pour gestion optimale des eaux de surface.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20251023_151206-Be589kRF23JFWvSaw90OPHQ7pRKS6i.jpg",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section héro */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-excavator.jpg"
            alt="Projet d'excavation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Nos réalisations</p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Galerie de projets
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explorez notre galerie de projets réalisés. Du défrichage forestier aux travaux de drainage, découvrez la qualité et la précision de notre travail sur le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Barre de filtres */}
      <section className="py-8 border-b border-border sticky top-[73px] bg-background z-30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de projet */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
            <div className="relative aspect-video">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-4">{selectedProject.title}</h3>
              <p className="text-muted-foreground mt-1">{selectedProject.location}</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Galerie photos */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Notre équipement</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Galerie photos
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Un aperçu de notre équipement et de nos chantiers dans les Cantons-de-l'Est.
            </p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {[
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_AE12655F-C4FD-479B-AF7B-3E25DF320008-EEnlDqPVLezpfalcKUKa2l5Dbf2ePX.jpeg", alt: "Excavatrice Takeuchi chargeant une remorque en forêt" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hans-excavator-buckets-167743_1920-dOHPe2b4xGQdPdIBBW2Xi446424t07.jpg", alt: "Dents de godet d'excavatrice" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_20065EB2-29F8-4698-A998-56835E1E6456-cwIzqQeLuu5ch2686y8W5cnbxaNXOh.jpeg", alt: "Kubota orange en forêt avec tronçonneuse" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20220723_181607-IAtlsYC33kjAHTTkwAwDlnMkXVu4ii.jpg", alt: "Excavatrice CAT sur chantier de terrassement" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_624679EE-DD19-4961-8845-E3A8BEE04FDF-2YoPjo4Xx1LUhpjORmH2WuZUSb02We.jpeg", alt: "Takeuchi rouge défrichage forestier" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zbtTINmOU03zWpKFS7wp35rMY5mtvr.png", alt: "CAT installant un ponceau de drainage" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250704_140417-13SG3o268k6Rfzwx5JE4hGQbSD8AXk.jpg", alt: "John Deere 35G terrassement résidentiel" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20251023_151206.JPG-H3UmcVkgQnBhM6grA2EG4kgIUqMXG0.jpeg", alt: "CAT excavation fossé de drainage automne" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2217857281-612x612-eC2fN28LK49Lk5FkMTVeqshMl5rxAJ.jpg", alt: "Mur de rétention en roche naturelle" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_589558372_qE6hYTrrkClZC3FSoj6i3mrQrjxoZbqm-WhCuXyt1ftkTq2XPUmcTninsyUARuT.jpg", alt: "Mur de soutennement en blocs de paysagement" },
            ].map((photo, index) => (
              <div key={index} className="break-inside-avoid overflow-hidden rounded-lg border border-border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Prêt à démarrer votre projet?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Laissez-nous apporter notre expertise et notre équipement à votre prochain projet d'excavation. Contactez-nous pour une consultation gratuite.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact">
                Demander une soumission gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
