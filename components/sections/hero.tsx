"use client"

import { HeroContent } from "./hero-content"
import { HeroImage } from "./hero-image"
import { FloatingElements } from "@/components/animations/floating-elements"
import { ArchCard } from "@/components/animations/arch-card"

export function Hero() {
  return (
    <section className="min-h-screen bg-primary text-foreground overflow-hidden flex items-center">
      <FloatingElements />
      <div className="container px-4 py-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
      <ArchCard />
    </section>
  )
}