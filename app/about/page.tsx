import type { Metadata } from "next"
import { Anchor, Waves, Wrench, Award } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PlaceholderImage } from "@/components/placeholder-image"
import { CtaSection } from "@/components/cta-section"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "About | FlightPath Wildlife Services",
  description:
    "Meet Brandon Tolland, the Huntington Beach native and former NCAA Division I swimmer behind FlightPath Wildlife Services.",
}

const values = [
  {
    icon: Award,
    title: "Disciplined & Reliable",
    description: "An NCAA Division I background instilled the consistency and follow-through clients count on.",
  },
  {
    icon: Anchor,
    title: "Practical Problem Solving",
    description: "Years repairing boats translate into hands-on, get-it-done solutions for tough facilities.",
  },
  {
    icon: Waves,
    title: "Southern California Roots",
    description: "A Huntington Beach native who knows the region, its facilities, and its people.",
  },
  {
    icon: Wrench,
    title: "Professional Standards",
    description: "Clear communication and humane methods on every job, from assessment to prevention.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet Brandon Tolland"
        description="The founder of FlightPath Wildlife Services brings athletic discipline and hands-on practicality to humane commercial bird removal."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <PlaceholderImage
            label="Brandon Tolland portrait"
            aspect="square"
            className="w-full lg:sticky lg:top-24 lg:aspect-[4/5]"
          />

          <div className="space-y-5">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Huntington Beach roots, a competitor&apos;s drive
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Brandon Tolland grew up in Huntington Beach, where the ocean shaped both his lifestyle and his work ethic.
              As a former NCAA Division I swimmer, he learned early that consistency, preparation, and showing up matter
              just as much as raw talent.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              That same drive carries into {siteConfig.name}. Brandon is known for reliability, professionalism, and a
              practical approach to problem solving &mdash; qualities that facility and property managers rely on when
              they need a bird issue handled quickly and humanely.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Outside of work, Brandon spends his time boating, fishing, surfing, and repairing boats. That
              hands-on, mechanical mindset is exactly what he brings to every commercial facility he services: assess
              the situation, build a plan, and get it done right.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">What Drives Us</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The standards behind every job
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
