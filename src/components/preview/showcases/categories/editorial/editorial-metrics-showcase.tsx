import { ClockIcon, MessageCircleIcon, Share2Icon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const metrics = [
  { icon: ClockIcon, label: "Read time", value: "11 min" },
  { icon: Share2Icon, label: "Shares", value: "1.2k" },
  { icon: MessageCircleIcon, label: "Comments", value: "84" },
]

export function EditorialMetricsShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent className="gap-0">
          <div className="flex items-center justify-around py-2">
            {metrics.map((metric, i) => (
              <div key={metric.label} className="flex items-center">
                {i > 0 && <Separator orientation="vertical" className="mr-8 h-10" />}
                <div className="flex flex-col items-center gap-2">
                  <metric.icon className="size-4 text-muted-foreground" />
                  <span className="font-heading text-xl font-semibold tabular-nums">
                    {metric.value}
                  </span>
                  <Eyebrow className="normal-case">{metric.label}</Eyebrow>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
