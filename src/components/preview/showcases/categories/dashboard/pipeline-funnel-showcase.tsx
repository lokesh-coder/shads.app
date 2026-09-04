import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Eyebrow,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const stages = [
  { name: "Qualified", count: 48, value: 100 },
  { name: "Proposal", count: 31, value: 65 },
  { name: "Negotiation", count: 18, value: 38 },
  { name: "Closed won", count: 12, value: 25 },
]

export function PipelineFunnelShowcase() {
  const total = stages[0].count

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Q3 pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          {stages.map((stage, i) => (
            <InsetPanel key={stage.name} className="flex flex-col gap-1.5 p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm">{stage.name}</span>
                <Badge variant="secondary" className="tabular-nums">
                  {stage.count}
                </Badge>
              </div>
              <Progress
                value={stage.value}
                className="h-1.5"
                style={{ opacity: 1 - i * 0.15 }}
              />
            </InsetPanel>
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-between text-xs text-muted-foreground">
        <Eyebrow className="normal-case">{total} leads entered</Eyebrow>
        <span className="font-medium text-foreground tabular-nums">25% win rate</span>
      </CardFooter>
    </Card>
  )
}
