import Link from "next/link"
import { Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/placeholder-image"
import { siteConfig } from "@/lib/site"

const highlights = ["Humane methods", "Fast response", "Commercial expertise"]

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
            Fast, professional bird extraction services for warehouses, distribution centers, retail facilities, and
            industrial buildings throughout Southern California.
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

        <PlaceholderImage label="Commercial facility hero photo" aspect="square" className="w-full lg:aspect-[4/3]" />
      </div>
    </section>
  )
}
