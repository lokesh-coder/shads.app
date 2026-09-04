import { Badge } from "@/components/ui/badge"
import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

export function PortfolioCaseStudyShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <MediaFrame aspect="video" tint="default" />
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">Brand identity</Badge>
        <Badge variant="secondary">Web</Badge>
      </div>
      <p className="font-heading text-2xl font-semibold leading-tight">
        Northwind Studio — seasonal campaign system
      </p>
      <p className="text-sm text-muted-foreground">
        Art direction, typography, and component library for a multi-city retail
        rollout.
      </p>
    </div>
  )
}
