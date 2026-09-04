import { TagIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  InsetPanel,
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function CouponCodeShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Promo code</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex gap-2">
            <Input placeholder="Enter code" defaultValue="LAUNCH20" className="flex-1" />
            <Button variant="outline" size="sm">
              Apply
            </Button>
          </div>
          <InsetPanel className="border-primary/20 bg-primary/5">
            <ListRow
              leading={<TagIcon className="size-4 text-primary" />}
              title="LAUNCH20"
              trailing={
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">20% off</Badge>
                  <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs">
                    Remove
                  </Button>
                </div>
              }
              className="px-0"
            />
          </InsetPanel>
          <Separator />
          <MetricValue
            label="Discount"
            value="−$51.60"
            className="[&_p:nth-child(2)]:text-primary"
          />
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
