import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ListRow,
  MediaFrame,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function CartItemShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Your cart</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex gap-3">
            <MediaFrame aspect="square" tint="warm" className="size-14 shrink-0 rounded-lg" />
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm font-medium">Wireless earbuds</p>
              <p className="text-xs text-muted-foreground">Midnight black</p>
              <MetricValue label="Price" value="$129.00" className="gap-0" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 rounded-lg border border-border/70">
              <Button variant="ghost" size="icon-sm">
                <MinusIcon />
              </Button>
              <span className="w-8 text-center text-sm tabular-nums">2</span>
              <Button variant="ghost" size="icon-sm">
                <PlusIcon />
              </Button>
            </div>
            <Button variant="ghost" size="icon-sm" className="text-destructive hover:text-destructive">
              <Trash2Icon />
            </Button>
          </div>
          <Separator />
          <ListRow
            title="Subtotal"
            trailing={<span className="text-sm font-medium tabular-nums">$258.00</span>}
            className="px-0"
          />
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}
