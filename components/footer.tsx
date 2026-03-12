import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const navigation = {
  services: [
    { name: "Excavation", href: "/services#excavation" },
    { name: "Défrichage", href: "/services#land-clearing" },
    { name: "Tranchées", href: "/services#trenching" },
    { name: "Préparation de terrain", href: "/services#site-preparation" },
    { name: "Nivellement", href: "/services#grading" },
  ],
  company: [
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Zone de service", href: "/service-area" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="bg-neutral-100 rounded-md p-2 inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Dax Excavation"
                  width={120}
                  height={60}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Services d'excavation professionnels basés à Eastman desservant les Cantons-de-l'Est, Sherbrooke et la Montérégie. 
              Engagés envers l'excellence et la satisfaction client.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Entreprise</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+15149724447" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>514 972-4447</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@daxexcavation.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@daxexcavation.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Eastman, QC<br />Desservant: Cantons-de-l'Est, Sherbrooke & Montérégie</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Lun-Ven: 8h-17h<br />Fermé: Sam-Dim</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dax Excavation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
