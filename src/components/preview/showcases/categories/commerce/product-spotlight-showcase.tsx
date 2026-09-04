import { ShoppingBagIcon, StarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ProductSpotlightShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <div className="relative">
        <MediaFrame tint="media" aspect="video" className="rounded-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ShoppingBagIcon className="size-10 text-muted-foreground/40" />
        </div>
      </div>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Canvas Weekender Tote</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-2">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-semibold tabular-nums">$68.00</span>
            <Badge variant="secondary" className="gap-0.5 text-xs">
              <StarIcon className="size-3 fill-current" />
              4.8
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Waxed canvas · Brass hardware · Ships in 2–3 days
          </p>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  )
}
