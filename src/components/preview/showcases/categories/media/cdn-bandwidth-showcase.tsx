import { ArrowDownIcon, ArrowUpIcon, GlobeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  IconTile,
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const regions = [
  { name: "North America", usage: 82, change: "+14%" },
  { name: "Europe", usage: 61, change: "+6%" },
  { name: "Asia Pacific", usage: 45, change: "−2%" },
]

export function CdnBandwidthShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconTile icon={GlobeIcon} />
              <span className="text-sm font-medium">CDN bandwidth</span>
            </div>
            <Badge variant="outline" className="text-xs tabular-nums">
              2.4 TB / 5 TB
            </Badge>
          </div>
          <MetricValue label="Usage" value="48%" change="+12% vs last week" trend="up" />
          <Progress value={48} className="h-2" />
          <div className="flex flex-col gap-0.5">
            {regions.map((region) => (
              <ListRow
                key={region.name}
                title={region.name}
                description={`${region.usage}% of regional cap`}
                trailing={
                  <Badge
                    variant="secondary"
                    className={`h-5 gap-0.5 px-1.5 text-xs ${
                      region.change.startsWith("+") ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {region.change.startsWith("+") ? (
                      <ArrowUpIcon className="size-2.5" />
                    ) : (
                      <ArrowDownIcon className="size-2.5" />
                    )}
                    {region.change}
                  </Badge>
                }
                className="px-0 hover:bg-transparent"
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
