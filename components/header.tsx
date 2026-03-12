"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projets", href: "/projects" },
  { name: "À propos", href: "/about" },
  { name: "Zone desservie", href: "/service-area" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="bg-neutral-100 rounded-md p-2">
              <Image
                src="/images/logo.png"
                alt="Dax Excavation"
                width={120}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <a href="tel:+15149724447" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>514 972-4447</span>
          </a>
          <Button asChild>
            <Link href="/contact">Soumission gratuite</Link>
          </Button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="space-y-1 px-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <a href="tel:+15149724447" className="flex items-center gap-2 py-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(514) 972-4447</span>
              </a>
              <Button asChild className="w-full mt-2">
                <Link href="/contact">Soumission gratuite</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
