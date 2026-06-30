import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

export function CtaSection() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Have a bird problem in your facility?
        </h2>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-accent-foreground/85 sm:text-lg">
          Get a fast, humane assessment from a team that understands warehouses, distribution centers, and commercial
          buildings. We respond quickly and keep your operation running.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/contact" />} nativeButton={false} size="lg" variant="secondary">
            Request Service
          </Button>
          <Button
            render={<a href={siteConfig.phoneHref} />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="gap-2 border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
