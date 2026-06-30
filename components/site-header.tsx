"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bird, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navLinks, siteConfig } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Bird className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground">{siteConfig.shortName}</span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Wildlife Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent",
                  active ? "text-accent" : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            render={<a href={siteConfig.phoneHref} />}
            nativeButton={false}
            variant="ghost"
            size="sm"
            className="gap-2"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.phone}
          </Button>
          <Button render={<Link href="/contact" />} nativeButton={false} size="sm">
            Request Service
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-base font-medium transition-colors",
                    active ? "bg-secondary text-accent" : "text-foreground hover:bg-secondary",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                render={<a href={siteConfig.phoneHref} />}
                nativeButton={false}
                variant="outline"
                className="gap-2"
              >
                <Phone className="size-4" aria-hidden="true" />
                {siteConfig.phone}
              </Button>
              <Button render={<Link href="/contact" onClick={() => setOpen(false)} />} nativeButton={false}>
                Request Service
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
