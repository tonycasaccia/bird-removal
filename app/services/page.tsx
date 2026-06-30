import type { Metadata } from "next"
import { Bird, Warehouse, Building2, ShieldCheck, ClipboardCheck, CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PlaceholderImage } from "@/components/placeholder-image"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaSection } from "@/components/cta-section"
import { faqs } from "@/lib/content"

export const metadata: Metadata = {
  title: "Services | FlightPath Wildlife Services",
  description:
    "Detailed humane bird removal services for warehouses, retail, and industrial facilities, plus prevention consulting and FAQs.",
}

const detailedServices = [
  {
    icon: Bird,
    title: "Bird Removal",
    description:
      "Humane extraction of birds that have entered your building. We assess the situation, locate the birds, and use safe, low-stress methods to capture and remove them without disrupting your operation.",
    points: ["Safe capture techniques", "Single-bird and flock situations", "Minimal disruption to operations"],
  },
  {
    icon: Warehouse,
    title: "Warehouse Services",
    description:
      "High-bay warehouses and distribution centers present unique challenges. We work around racking, conveyors, and tall ceilings where birds commonly roost, with solutions scaled to large square footage.",
    points: ["High-ceiling and rafter access", "Distribution center experience", "Inventory protection focus"],
  },
  {
    icon: Building2,
    title: "Commercial Facility Services",
    description:
      "Retail stores, manufacturing plants, and industrial buildings each require a tailored approach. We adapt our methods to your environment, foot traffic, and operating hours.",
    points: ["Retail and customer-facing spaces", "Manufacturing and industrial sites", "Flexible scheduling"],
  },
  {
    icon: ShieldCheck,
    title: "Humane Wildlife Solutions",
    description:
      "Every job prioritizes the safe, ethical handling of wildlife. Our methods are designed to protect the birds while resolving the issue for your facility.",
    points: ["Ethical, low-stress methods", "Compliance-minded practices", "Wildlife-safe removal"],
  },
  {
    icon: ClipboardCheck,
    title: "Prevention Consulting",
    description:
      "Removal is only part of the solution. We identify entry points and roosting areas and provide practical recommendations to help keep birds from returning.",
    points: ["Entry-point identification", "Exclusion and deterrent guidance", "Long-term prevention planning"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive commercial bird removal"
        description="From extraction to prevention, FlightPath delivers humane, professional solutions tailored to warehouses, retail, and industrial facilities."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {detailedServices.map((service, index) => (
            <div
              key={service.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
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

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
