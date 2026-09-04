import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const stats = [
  { label: "Revenue", value: "$48.2k", change: "+12.4%", trend: "up" as const },
  { label: "Active users", value: "2,841", change: "+8.1%", trend: "up" as const },
  { label: "Churn rate", value: "2.3%", change: "−0.4%", trend: "down" as const },
]

export function KpiStatsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <MetricValue
                key={stat.label}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                trend={stat.trend}
                className="rounded-lg border border-border/70 bg-muted/25 p-3"
              />
            ))}
          </div>
          <Separator />
          <Eyebrow className="text-center normal-case">
            Compared to last 30 days
          </Eyebrow>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
