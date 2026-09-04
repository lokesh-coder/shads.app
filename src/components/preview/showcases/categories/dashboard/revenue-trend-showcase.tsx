import { Area, AreaChart } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const data = [
  { day: "Mon", revenue: 4200 },
  { day: "Tue", revenue: 5100 },
  { day: "Wed", revenue: 4800 },
  { day: "Thu", revenue: 6200 },
  { day: "Fri", revenue: 7100 },
  { day: "Sat", revenue: 5800 },
  { day: "Sun", revenue: 8400 },
]

const config = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig

export function RevenueTrendShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Last 7 days</CardDescription>
        <CardAction>
          <Badge variant="secondary" className="tabular-nums">
            +18.2%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          <MetricValue label="Total" value="$41,600" change="+18.2%" trend="up" />
          <ChartContainer config={config} className="aspect-auto h-20 w-full px-1 pt-1">
            <AreaChart data={data} accessibilityLayer margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                fill="url(#revenueFill)"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ChartContainer>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
