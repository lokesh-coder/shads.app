import { DropletsIcon } from "lucide-react"

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  IconTile,
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function WatermarkSettingsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Watermark</CardTitle>
        <CardAction>
          <Switch defaultChecked aria-label="Enable watermark" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <ListRow
            leading={<IconTile icon={DropletsIcon} />}
            title="Brand logo"
            description="logo-white.png · 30% opacity"
            className="rounded-lg border border-border/70 bg-muted/20 px-3"
          />
          <InsetPanel className="space-y-2">
            <Label htmlFor="sc-watermark-pos" className="text-xs">
              Position
            </Label>
            <Select defaultValue="bottom-right">
              <SelectTrigger id="sc-watermark-pos" className="text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top-left">Top left</SelectItem>
                <SelectItem value="top-right">Top right</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="bottom-left">Bottom left</SelectItem>
                <SelectItem value="bottom-right">Bottom right</SelectItem>
              </SelectContent>
            </Select>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
