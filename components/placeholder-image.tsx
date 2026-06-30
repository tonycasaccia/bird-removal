import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  label?: string
  className?: string
  aspect?: "video" | "square" | "portrait" | "wide" | "auto"
}

const aspectClasses: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  auto: "",
}

export function PlaceholderImage({ label = "Image placeholder", className, aspect = "video" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted text-muted-foreground",
        aspectClasses[aspect],
        className,
      )}
    >
      <ImageIcon className="size-6" aria-hidden="true" />
      <span className="px-4 text-center text-sm font-medium">{label}</span>
    </div>
  )
}
