import { Minimize2Icon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  InsetPanel,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function CompressionSettingsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Compression quality</CardTitle>
        <CardAction>
          <Badge variant="secondary" className="text-xs">WebP</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MediaFrame tint="media" aspect="square" className="rounded-lg" />
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Output size estimate</span>
            <span className="font-medium tabular-nums">1.2 MB → 340 KB</span>
          </div>
          <InsetPanel className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="sc-compress-quality" className="text-xs">
                Quality
              </Label>
              <span className="text-xs font-medium tabular-nums">78%</span>
            </div>
            <Slider id="sc-compress-quality" defaultValue={[78]} max={100} step={1} />
          </InsetPanel>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Minimize2Icon className="size-3.5 shrink-0" />
            Balanced quality — good for product thumbnails and galleries.
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
