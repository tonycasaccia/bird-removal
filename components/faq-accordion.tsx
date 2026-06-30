"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/lib/content"

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {item.question}
                <ChevronDown
                  className={cn("size-5 shrink-0 text-muted-foreground transition-transform", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
