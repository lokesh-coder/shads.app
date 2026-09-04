import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { LightbulbIcon, TargetIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { TemplateSectionHeading } from "./template-sections"
import {
  TemplateContent,
  TemplateLogo,
  TemplateMetricGrid,
  TemplateSurface,
  TemplateTableCard,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.metrics

const chartData = [
  { week: "W1", revenue: 42 },
  { week: "W2", revenue: 58 },
  { week: "W3", revenue: 51 },
  { week: "W4", revenue: 67 },
  { week: "W5", revenue: 72 },
  { week: "W6", revenue: 68 },
  { week: "W7", revenue: 78 },
  { week: "W8", revenue: 84 },
]

const config = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
} satisfies ChartConfig

const funnel = [
  { stage: "Visitors", value: 100, pct: 100 },
  { stage: "Signups", value: 24, pct: 24 },
  { stage: "Trials", value: 12, pct: 12 },
  { stage: "Paid", value: 4.2, pct: 4.2 },
] as const

const goals = [
  { label: "Q1 revenue target", current: 218420, target: 250000, unit: "$" },
  { label: "New paid accounts", current: 142, target: 180, unit: "" },
  { label: "Net retention", current: 108, target: 110, unit: "%" },
] as const

export function MetricsTemplate() {
  return (
    <TemplateSurface>
      {/* 1. Analytics header */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Overview", active: true },
          { label: "Funnels" },
          { label: "Retention" },
          { label: "Cohorts" },
        ]}
        trailing={
          <>
            <Button variant="outline" size="sm">
              Last 30 days
            </Button>
            <Button variant="outline" size="sm">
              Compare
            </Button>
            <Button size="sm">Share report</Button>
          </>
        }
      />

      <TemplateContent width="wide" className="flex flex-col gap-8 py-8">
        {/* 2. Hero revenue number */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{narrative.tagline}</p>
            <h1 className="font-heading text-4xl font-semibold tabular-nums tracking-tight md:text-5xl">
              {narrative.hero}
            </h1>
            <p className="mt-1 text-sm text-primary">{narrative.subhero}</p>
          </div>
          <Badge variant="secondary">Updated 2m ago</Badge>
        </div>

        {/* 3. KPI metric grid */}
        <TemplateMetricGrid
          columns={4}
          stats={[
            { label: "Conversion", value: "3.8%", change: "+0.4 pts", trend: "up" },
            { label: "Trials", value: "412", change: "+22%", trend: "up" },
            { label: "Churn", value: "1.9%", change: "-0.3 pts", trend: "up" },
            { label: "ARPU", value: "$84", change: "+$6", trend: "up" },
          ]}
        />

        {/* 4. Primary BarChart */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-3">
            <div>
              <CardTitle>Weekly net revenue</CardTitle>
              <CardDescription>USD · thousands · 8-week trend</CardDescription>
            </div>
            <Badge variant="outline" className="tabular-nums">
              +18.4% vs prior period
            </Badge>
          </CardHeader>
          <CardContent>
            <ChartContainer config={config} className="aspect-[16/6] w-full min-h-[220px]">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="week" tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 5. Funnel Progress section */}
          <Card>
            <CardHeader>
              <CardTitle>Acquisition funnel</CardTitle>
              <CardDescription>Last 30 days · all channels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {funnel.map((step) => (
                <div key={step.stage} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{step.stage}</span>
                    <span className="tabular-nums text-muted-foreground">{step.pct}%</span>
                  </div>
                  <Progress value={step.pct}>
                    <ProgressLabel className="sr-only">{step.stage}</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 6. Breakdown table */}
          <TemplateTableCard
            title="Channel breakdown"
            description="Revenue attribution by source"
            columns={["Channel", "Revenue", "Share", "Δ"]}
            rows={[
              ["Organic search", "$82,400", "37.7%", <Badge key="o" variant="secondary">+12%</Badge>],
              ["Paid social", "$54,200", "24.8%", <Badge key="p" variant="secondary">+8%</Badge>],
              ["Referral", "$41,800", "19.1%", <Badge key="r" variant="outline">+2%</Badge>],
              ["Direct", "$28,600", "13.1%", <Badge key="d" variant="outline">-1%</Badge>],
              ["Email", "$11,420", "5.2%", <Badge key="e" variant="secondary">+18%</Badge>],
            ]}
          />
        </div>

        {/* 7. Goal tracker */}
        <section>
          <TemplateSectionHeading
            title="Goal tracker"
            description="Progress against quarterly targets"
            className="mb-4"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {goals.map((goal) => {
              const pct = Math.round((goal.current / goal.target) * 100)
              const formatted =
                goal.unit === "$"
                  ? `$${goal.current.toLocaleString()}`
                  : goal.unit === "%"
                    ? `${goal.current}%`
                    : goal.current.toString()
              const targetFormatted =
                goal.unit === "$"
                  ? `$${goal.target.toLocaleString()}`
                  : goal.unit === "%"
                    ? `${goal.target}%`
                    : goal.target.toString()

              return (
                <Card key={goal.label} size="sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <TargetIcon className="size-4 text-primary" />
                      <CardDescription>{goal.label}</CardDescription>
                    </div>
                    <CardTitle className="font-heading text-xl tabular-nums">
                      {formatted}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 pt-0">
                    <Progress value={pct}>
                      <ProgressLabel className="sr-only">{goal.label}</ProgressLabel>
                      <ProgressValue />
                    </Progress>
                    <p className="text-xs text-muted-foreground">
                      {pct}% of {targetFormatted} target
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* 8. Insight callout */}
        <Alert>
          <LightbulbIcon />
          <AlertTitle>Insight · Enterprise trials converting 2.4× faster</AlertTitle>
          <AlertDescription>
            Teams that complete onboarding within 48 hours convert at 18.2% vs 7.6% baseline.
            Consider nudging stalled trials with in-app guidance — 34 accounts are currently in
            day 3–5 of trial without a second session.
          </AlertDescription>
        </Alert>
      </TemplateContent>
    </TemplateSurface>
  )
}
