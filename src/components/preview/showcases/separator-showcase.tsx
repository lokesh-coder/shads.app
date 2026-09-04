import { CreditCardIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function SeparatorShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={CreditCardIcon} />
          <div>
            <CardTitle>Order details</CardTitle>
            <CardDescription>Review line items before checkout</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Studio Pro (annual)</span>
              <span className="font-medium tabular-nums">$288.00</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Priority support</span>
              <span className="font-medium tabular-nums">$48.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Total due today</span>
              <span className="font-heading text-base font-semibold tabular-nums">
                $336.00
              </span>
            </div>
          </InsetPanel>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Visa ·4242</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Renews Mar 12</span>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
