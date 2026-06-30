import { reasons } from "@/lib/content"

export function WhyChooseSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A reliable partner for facility managers
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            We combine humane practices with the speed and professionalism commercial operations depend on.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <reason.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
