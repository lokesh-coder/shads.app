import { CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Eyebrow,
  StatusDot,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const agenda = [
  { time: "9:00 AM", title: "Product standup", type: "meeting" as const },
  { time: "11:30 AM", title: "Design review — checkout flow", type: "review" as const },
  { time: "2:00 PM", title: "Investor call", type: "call" as const },
  { time: "4:30 PM", title: "Ship v2.4 release", type: "deadline" as const },
]

const dotStatus = {
  meeting: "neutral" as const,
  review: "success" as const,
  call: "success" as const,
  deadline: "error" as const,
}

export function CalendarAgendaShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Today</CardTitle>
        <CardAction>
          <Badge variant="outline" className="gap-1">
            <CalendarIcon className="size-3" />
            Sep 4
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          {agenda.map((item, i) => (
            <div key={item.title} className="flex gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/45">
              <div className="flex flex-col items-center pt-1">
                <StatusDot status={dotStatus[item.type]} />
                {i < agenda.length - 1 && (
                  <div className="my-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-3">
                <Eyebrow className="normal-case tabular-nums">{item.time}</Eyebrow>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
