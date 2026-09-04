import { Button } from "@/components/ui/button"
import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

export function LookbookProductTileShowcase() {
  return (
    <div className="flex w-full flex-col gap-3">
      <MediaFrame aspect="portrait" tint="editorial" />
      <div className="flex flex-col gap-1">
        <p className="font-heading text-sm font-medium tracking-wide uppercase">
          Structured wool coat
        </p>
        <p className="text-xs text-muted-foreground">Ink · Sizes XS–L</p>
        <p className="font-heading text-lg font-semibold tabular-nums">$420</p>
      </div>
      <Button className="w-full">Add to bag</Button>
    </div>
  )
}
