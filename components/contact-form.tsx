"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Bird Extraction",
  "Warehouse Bird Removal",
  "Retail Facility Bird Removal",
  "Industrial Facility Bird Removal",
  "Wildlife Assessment",
  "Prevention Consulting",
]

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-foreground">Request received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. A member of our team will follow up shortly to schedule your assessment.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
            Company / Facility
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
          Service needed
        </label>
        <select id="service" name="service" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your facility and the issue you're seeing."
          className={fieldClass}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Request Service
      </Button>
    </form>
  )
}
