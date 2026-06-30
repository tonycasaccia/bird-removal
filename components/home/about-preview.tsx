import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/placeholder-image"
import { siteConfig } from "@/lib/site"

export function AboutPreview() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <PlaceholderImage label="Brandon Tolland portrait" aspect="square" className="w-full max-w-md lg:aspect-[4/5]" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Meet the Owner</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {siteConfig.owner}, Founder
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            A Huntington Beach native and former NCAA Division I swimmer, Brandon built {siteConfig.name} on the same
            qualities that defined his athletic career: discipline, reliability, and a practical approach to solving
            problems.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            When he is not removing birds from commercial facilities, you will find him boating, fishing, surfing, or
            repairing boats along the Southern California coast.
          </p>
          <div className="mt-8">
            <Button render={<Link href="/about" />} nativeButton={false} variant="outline" className="gap-2">
              More about Brandon
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
