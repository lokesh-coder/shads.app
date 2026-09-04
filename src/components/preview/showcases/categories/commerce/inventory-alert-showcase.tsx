import { AlertTriangleIcon, PackageIcon } from "lucide-react"

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
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const items = [
  { name: "Ceramic Mug — Sage", stock: 4 },
  { name: "Linen Napkin Set", stock: 8 },
]

export function InventoryAlertShowcase() {
  return (
    <Card className={showcaseCard.warning}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle className="flex items-center gap-2">
          <IconTile icon={AlertTriangleIcon} className="border-amber-500/30" />
          Low stock alert
        </CardTitle>
        <CardAction>
          <Badge variant="outline" className="border-amber-500/50 text-xs text-amber-700">
            3 items
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {items.map((item) => (
            <ListRow
              key={item.name}
              leading={<IconTile icon={PackageIcon} />}
              title={item.name}
              description="Below reorder threshold"
              trailing={
                <span className="text-sm font-medium tabular-nums text-amber-600">
                  {item.stock} left
                </span>
              }
              className="rounded-lg border border-border/70 bg-background/60 px-3"
            />
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Reorder from supplier
        </Button>
      </CardFooter>
    </Card>
  )
}
