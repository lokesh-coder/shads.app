import { SparklesIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  IconTile,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function UpgradePromptShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <div className="flex items-center gap-3">
          <IconTile icon={SparklesIcon} className="border-primary/20 bg-primary/5" />
          <CardTitle>Upgrade to Pro</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MetricValue
            label="Project usage"
            value="4 of 5"
            change="80% of limit"
            trend="up"
          />
          <p className="text-xs text-muted-foreground">
            Upgrade for unlimited projects, advanced analytics, and team seats.
          </p>
          <Progress value={80} className="h-1.5" />
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2 border-t border-primary/10 bg-primary/[0.02]">
        <Button size="sm" className="flex-1">
          Upgrade — $29/mo
        </Button>
        <Button variant="ghost" size="sm">
          Maybe later
        </Button>
      </CardFooter>
    </Card>
  )
}
