import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

export function MagazineSpreadShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <MediaFrame aspect="wide" tint="editorial" />
      <p className="font-heading text-2xl font-semibold leading-tight">
        The quiet return of slow media
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        As feeds accelerate, readers are choosing depth over volume — and
        publishers are redesigning around it.
      </p>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Essay · 12 min read
      </p>
    </div>
  )
}
