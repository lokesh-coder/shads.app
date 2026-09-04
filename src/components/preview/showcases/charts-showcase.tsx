import { TrendingUpIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

const data = [
  { day: "M", visits: 120 },
  { day: "T", visits: 186 },
  { day: "W", visits: 142 },
  { day: "T", visits: 210 },
  { day: "F", visits: 168 },
  { day: "S", visits: 94 },
  { day: "S", visits: 72 },
]

const config = {
  visits: { label: "Visits", color: "var(--chart-1)" },
} satisfies ChartConfig

export function ChartsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <MetricValue
          label="Weekly visits"
          value="992"
          change="+18%"
          trend="up"
        />
        <CardAction>
          <Badge variant="secondary" className="gap-1">
            <TrendingUpIcon className="size-3" />
            Live
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          <ChartContainer config={config} className="aspect-auto h-36 w-full">
            <BarChart data={data} accessibilityLayer>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={6}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Bar
                dataKey="visits"
                fill="var(--color-visits)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
          <p className="text-center text-xs text-muted-foreground">
            Compared to previous week
          </p>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
