import { CheckCircle2Icon, CircleIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const steps = [
  { label: "Refund requested", date: "Mar 1, 2:14 PM", done: true },
  { label: "Under review", date: "Mar 1, 2:16 PM", done: true },
  { label: "Approved", date: "Mar 2, 9:30 AM", done: true },
  { label: "Processing payout", date: "Est. Mar 4", done: false },
]

export function RefundTrackingShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Refund #RF-8291</CardTitle>
        <CardDescription className="text-xs">Order #ORD-4420</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MetricValue label="Refund amount" value="$124.50" />
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <ListRow
                key={step.label}
                leading={
                  step.done ? (
                    <CheckCircle2Icon className="size-4 shrink-0 text-primary" />
                  ) : (
                    <CircleIcon className="size-4 shrink-0 text-muted-foreground" />
                  )
                }
                title={step.label}
                description={step.date}
                trailing={
                  i === steps.length - 1 && !step.done ? (
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <ClockIcon className="size-3" />
                      Pending
                    </Badge>
                  ) : null
                }
                className="px-0"
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
