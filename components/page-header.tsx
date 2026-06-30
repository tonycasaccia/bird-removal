interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
