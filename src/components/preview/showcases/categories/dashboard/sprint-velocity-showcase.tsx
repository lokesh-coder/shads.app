import { Bar, BarChart, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Eyebrow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const data = [
  { sprint: "S18", points: 34 },
  { sprint: "S19", points: 41 },
  { sprint: "S20", points: 38 },
  { sprint: "S21", points: 47 },
  { sprint: "S22", points: 52 },
]

const config = {
  points: { label: "Story points", color: "var(--chart-2)" },
} satisfies ChartConfig

export function SprintVelocityShowcase() {
  const avg = Math.round(data.reduce((sum, d) => sum + d.points, 0) / data.length)

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Sprint velocity</CardTitle>
        <CardAction>
          <Badge variant="secondary" className="tabular-nums">
            Avg {avg} pts
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          <div className="flex items-end gap-2">
            <MetricValue label="Current sprint" value="52" className="gap-0.5" />
            <Eyebrow className="mb-1 normal-case">points</Eyebrow>
          </div>
          <ChartContainer config={config} className="aspect-auto h-24 w-full px-1 pt-1">
            <BarChart data={data} accessibilityLayer margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="sprint"
                tickLine={false}
                axisLine={false}
                tickMargin={6}
                tick={{ fontSize: 11 }}
              />
              <Bar
                dataKey="points"
                fill="var(--color-points)"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
