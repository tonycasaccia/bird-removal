import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/images/flightpath-logo.png"
              alt={`${siteConfig.name} logo`}
              width={120}
              height={110}
              className="h-20 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Humane, professional bird removal for warehouses, distribution centers, and commercial facilities across the{" "}
            {siteConfig.serviceArea}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Company</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-primary-foreground">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="flex items-center gap-2 hover:text-primary-foreground">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Licensed &amp; insured wildlife removal &mdash; {siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
