import { ActivityIcon, CheckCircle2Icon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  MetricValue,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function UptimeMonitorShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <div className="flex items-start justify-between gap-3">
            <MetricValue label="30-day uptime" value="99.97%" />
            <Badge variant="secondary" className="gap-1">
              <CheckCircle2Icon className="size-3 text-emerald-600" />
              Operational
            </Badge>
          </div>
          <Progress value={99.97} className="h-2" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ActivityIcon className="size-3.5" />
              Last incident: 12 days ago
            </span>
            <span className="tabular-nums">13m downtime</span>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
