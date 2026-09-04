import { AlertTriangleIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ErrorIncidentShowcase() {
  return (
    <Card className={showcaseCard.danger}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <IconTile icon={AlertTriangleIcon} className="border-destructive/30" />
          Upload timeout spike
        </CardTitle>
        <CardAction>
          <Badge variant="destructive" className="text-xs">P1</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <p className="text-xs text-muted-foreground">
            847 failed uploads in the last 15 minutes. Error rate jumped from 0.2% to 12.4%.
          </p>
          <MetricValue label="Error rate" value="12.4%" change="+12.2%" trend="down" />
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1 text-xs">
              <ClockIcon className="size-3" />
              Started 14 min ago
            </Badge>
            <Badge variant="outline" className="text-xs">us-east-1</Badge>
            <Badge variant="outline" className="text-xs">42 events/min</Badge>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">View logs</Button>
        <Button size="sm" className="flex-1">Acknowledge</Button>
      </CardFooter>
    </Card>
  )
}
