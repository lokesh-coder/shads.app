import { HardDriveIcon, ServerIcon, ZapIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  IconTile,
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const tiers = [
  { name: "Hot storage", icon: ZapIcon, used: 42, total: "120 GB" },
  { name: "Warm storage", icon: ServerIcon, used: 28, total: "500 GB" },
  { name: "Cold archive", icon: HardDriveIcon, used: 12, total: "2 TB" },
]

export function StorageTierShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Storage by tier</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MetricValue label="Total used" value="612 GB" change="68% of plan" />
          {tiers.map((tier) => (
            <div key={tier.name} className="space-y-1.5">
              <ListRow
                leading={<IconTile icon={tier.icon} />}
                title={tier.name}
                description={`${tier.used}% utilized`}
                trailing={
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {tier.total}
                  </span>
                }
                className="px-0 hover:bg-transparent"
              />
              <Progress value={tier.used} className="h-1.5" />
            </div>
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          612 GB used across all tiers · 68% of plan limit
        </p>
      </CardFooter>
    </Card>
  )
}
