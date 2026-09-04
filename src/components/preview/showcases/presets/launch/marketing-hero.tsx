import { Button } from "@/components/ui/button"
import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

export function MarketingHeroShowcase() {
  return (
    <div className="flex w-full flex-col gap-5">
      <MediaFrame aspect="wide" tint="editorial" />
      <div className="flex max-w-lg flex-col gap-3">
        <p className="font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Ship product experiences your team can scale
        </p>
        <p className="text-sm text-muted-foreground md:text-base">
          Launch faster with a design system that keeps marketing and product in
          sync.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button>Start free trial</Button>
          <Button variant="outline">Book a demo</Button>
        </div>
      </div>
    </div>
  )
}
