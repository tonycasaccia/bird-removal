import { industries } from "@/lib/content"

export function IndustriesSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Industries Served</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted across commercial sectors
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <industry.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{industry.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
