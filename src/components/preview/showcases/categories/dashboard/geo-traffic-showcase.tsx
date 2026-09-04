import { GlobeIcon } from "lucide-react"

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Eyebrow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const regions = [
  { name: "North America", visitors: "42.1k", share: 38 },
  { name: "Europe", visitors: "28.4k", share: 26 },
  { name: "Asia Pacific", visitors: "24.8k", share: 22 },
  { name: "Latin America", visitors: "9.2k", share: 8 },
  { name: "Other", visitors: "6.5k", share: 6 },
]

export function GeoTrafficShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Traffic by region</CardTitle>
        <CardAction>
          <GlobeIcon className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {regions.map((region) => (
            <div
              key={region.name}
              className="flex flex-col gap-1.5 rounded-lg px-2 py-2 transition-colors hover:bg-muted/45"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{region.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {region.visitors}
                  </span>
                  <Eyebrow className="w-8 text-right normal-case">{region.share}%</Eyebrow>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${region.share}%` }}
                />
              </div>
            </div>
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
