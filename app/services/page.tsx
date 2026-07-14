import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PlaceholderImage } from "@/components/placeholder-image"
import { CtaSection } from "@/components/cta-section"
import { services } from "@/lib/content"

export const metadata: Metadata = {
  title: "Services | FlightPath Wildlife Services",
  description:
    "Commercial bird removal, falconry-based bird deterrence, and general wildlife removal for warehouses, retail, and industrial facilities.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive commercial bird removal"
        description="Bird removal is our specialty, supported by falconry-based deterrence and general wildlife removal so your facility has one dependable provider."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {services.map((service, index) => (
            <div key={service.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <span className="flex size-12 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <PlaceholderImage
                label={`${service.title} photo`}
                aspect="video"
                className={index % 2 === 1 ? "lg:order-1" : undefined}
              />
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
