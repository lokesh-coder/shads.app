import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Eyebrow,
  InsetPanel,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const metrics = [
  { label: "Visitors", value: "12,480", change: "+4.2%", up: true },
  { label: "Sign-ups", value: "312", change: "+1.8%", up: true },
  { label: "Purchases", value: "89", change: "−0.6%", up: false },
]

export function ConversionWidgetShowcase() {
  const rate = 2.84

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Conversion rate</CardTitle>
        <CardDescription>Visitor to purchase, last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex items-end gap-2">
            <MetricValue label="Rate" value={`${rate}%`} change="+0.3pp" trend="up" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((m) => (
              <InsetPanel key={m.label} className="flex flex-col gap-1 p-2.5">
                <Eyebrow>{m.label}</Eyebrow>
                <p className="text-sm font-semibold tabular-nums">{m.value}</p>
                <p
                  className={`flex items-center gap-0.5 text-xs ${
                    m.up ? "text-primary" : "text-destructive"
                  }`}
                >
                  {m.up ? (
                    <ArrowUpIcon className="size-3" />
                  ) : (
                    <ArrowDownIcon className="size-3" />
                  )}
                  <span className="tabular-nums">{m.change}</span>
                </p>
              </InsetPanel>
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
