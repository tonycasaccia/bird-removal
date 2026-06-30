import { Quote } from "lucide-react"
import { testimonials } from "@/lib/content"

export function TestimonialsSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What facility teams say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col rounded-lg border border-border bg-card p-6">
              <Quote className="size-7 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
