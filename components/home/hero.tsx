import Link from "next/link"
import Image from "next/image"
import { Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

const highlights = ["Humane removal", "Rapid response", "No business interruption"]

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {siteConfig.serviceArea} Wildlife Removal
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Humane Bird Removal for Warehouses &amp; Commercial Facilities
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Rapid-response bird removal that keeps your business running. Humane, professional solutions for warehouses, distribution centers, retail facilities, and industrial buildings.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button render={<Link href="/contact" />} nativeButton={false} size="lg">
              Request Service
            </Button>
            <Button
              render={<a href={siteConfig.phoneHref} />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border lg:aspect-[4/3]">
          <Image
            src="/images/pigeons.jpg"
            alt="A row of pigeons perched along a railing outside a building"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
