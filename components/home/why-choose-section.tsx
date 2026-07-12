import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Humane bird removal methods",
  "Rapid response times",
  "Minimal business interruption",
  "Commercial facility expertise",
  "Prevention-focused recommendations",
]

export function WhyChooseSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Commercial Bird Removal</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for Commercial Facilities
            </h2>
            <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                Bird activity inside warehouses, distribution centers, retail facilities, and industrial buildings can
                create safety, sanitation, and operational concerns. FlightPath Wildlife Services provides fast, humane
                bird removal solutions designed specifically for commercial environments.
              </p>
              <p>Our goal is simple: resolve the problem quickly while keeping your facility running normally.</p>
            </div>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button render={<Link href="/contact" />} nativeButton={false} size="lg">
                Request Service
              </Button>
            </div>
          </div>

          <div className="lg:order-last">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/warehouse.jpg"
                alt="Forklift operating in a warehouse aisle lined with tall storage racks"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
