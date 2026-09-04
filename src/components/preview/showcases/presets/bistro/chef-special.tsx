import { Badge } from "@/components/ui/badge"
import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

export function ChefSpecialShowcase() {
  return (
    <div className="flex w-full flex-col gap-3">
      <MediaFrame aspect="video" tint="warm" />
      <div className="flex items-center gap-2">
        <Badge>Chef&apos;s special</Badge>
        <span className="text-xs text-muted-foreground">Limited tonight</span>
      </div>
      <p className="font-heading text-xl font-semibold leading-tight">
        Charred cabbage with miso butter
      </p>
      <p className="text-sm text-muted-foreground">
        Smoked almonds, pickled shallot, herb oil — paired with natural wine.
      </p>
    </div>
  )
}
