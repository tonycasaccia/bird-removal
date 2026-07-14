import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Humane bird removal methods",
  "Rapid response times",
  "Minimal business interruption",
]

export function WhyChooseSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Commercial Bird Removal</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A bird problem is a business problem
            </h2>
            <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                Birds inside a warehouse, plant, or retail space are more than a nuisance. They contaminate inventory, damage equipment, create health code concerns, and put your business at risk of regulatory violations. In many cases, that means failed inspections, costly cleanup, and unplanned downtime.
              </p>
              <p>
               The longer birds remain inside your facility, the greater the risk to your operations and reputation. FlightPath responds quickly with safe, humane bird removal that minimizes disruption and helps keep your business running.
              </p>
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
