import { HardDriveIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import {
  IconTile,
  InsetPanel,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function SlidersShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <div className="flex items-start gap-3">
          <IconTile icon={HardDriveIcon} status="warning" />
          <MetricValue label="Storage" value="6.4 GB" change="64% used" />
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">Brightness</span>
              <span className="text-xs font-medium tabular-nums">72%</span>
            </div>
            <Slider defaultValue={[72]} max={100} step={1} />
          </InsetPanel>

          <InsetPanel className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <Label className="text-xs">Quota used</Label>
              <span className="text-xs tabular-nums text-muted-foreground">
                6.4 / 10 GB
              </span>
            </div>
            <Progress value={64} />
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
