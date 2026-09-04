import { PackageIcon, TruckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Eyebrow,
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function BadgesShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <div className="flex items-start gap-3">
          <IconTile icon={PackageIcon} status="success" />
          <CardTitle>Shipment #4821</CardTitle>
        </div>
        <CardAction>
          <Badge variant="secondary">In transit</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel>
            <Eyebrow>Status variants</Eyebrow>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Processing</Badge>
              <Badge variant="outline">Draft</Badge>
              <Badge variant="destructive">Failed</Badge>
            </div>
          </InsetPanel>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <TruckIcon className="size-4 text-muted-foreground" />
            <span className="text-muted-foreground">Carrier</span>
            <Badge variant="outline">FedEx Express</Badge>
            <span className="text-muted-foreground">·</span>
            <span className="text-xs">ETA tomorrow, 2:30 PM</span>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-between border-t border-border/60 bg-muted/20">
        <span className="text-xs text-muted-foreground">Tracking</span>
        <span className="font-mono text-xs">FX-9284-1029</span>
      </CardFooter>
    </Card>
  )
}
