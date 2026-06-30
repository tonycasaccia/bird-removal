import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { PlaceholderImage } from "@/components/placeholder-image"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact | FlightPath Wildlife Services",
  description:
    "Request humane bird removal service for your facility. Contact FlightPath Wildlife Services across Southern California.",
}

const serviceAreas = [
  "Orange County",
  "Los Angeles County",
  "Riverside County",
  "San Bernardino County",
  "San Diego County",
  "Ventura County",
]

const contactDetails = [
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: siteConfig.emailHref },
  { icon: MapPin, label: "Service Area", value: siteConfig.serviceArea },
  { icon: Clock, label: "Hours", value: siteConfig.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request service"
        description="Tell us about your facility and the bird issue you're facing. We'll follow up quickly to schedule an assessment."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8 lg:py-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Get in touch</h2>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                Reach out by phone or email, or send a request and we&apos;ll respond promptly.
              </p>
            </div>

            <ul className="space-y-4">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a href={detail.href} className="text-sm font-medium text-foreground hover:text-accent">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <PlaceholderImage label="Service area map" aspect="video" />
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Service Area</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Serving facilities across Southern California
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We provide commercial bird removal throughout the region. If your facility is in or near any of these
              areas, we can help.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
              >
                <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
