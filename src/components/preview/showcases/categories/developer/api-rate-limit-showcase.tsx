import { GaugeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  InsetPanel,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ApiRateLimitShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>API rate limit</CardTitle>
        <CardAction>
          <Badge variant="outline" className="gap-1 text-xs">
            <GaugeIcon className="size-3" />
            Pro plan
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MetricValue label="Requests this hour" value="7,842" change="78% used" />
          <Progress value={78} className="h-2" />
          <div className="grid grid-cols-2 gap-2">
            <InsetPanel>
              <p className="text-xs text-muted-foreground">Burst limit</p>
              <p className="mt-0.5 font-mono text-sm font-medium tabular-nums">50 req/s</p>
            </InsetPanel>
            <InsetPanel>
              <p className="text-xs text-muted-foreground">Resets in</p>
              <p className="mt-0.5 font-mono text-sm font-medium tabular-nums">23 min</p>
            </InsetPanel>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
