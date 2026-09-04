import { CalendarIcon, CreditCardIcon } from "lucide-react"

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

export function RenewalReminderShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Subscription renewal</CardTitle>
        <CardAction>
          <Badge variant="outline" className="gap-1 text-xs">
            <CalendarIcon className="size-3" />
            5 days
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MetricValue label="Renews on" value="$29.00" change="Mar 9, 2026" />
          <p className="text-xs text-muted-foreground">
            Your Pro plan renews monthly. Update payment before the due date to avoid interruption.
          </p>
          <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 p-2.5 text-xs">
            <IconTile icon={CreditCardIcon} />
            <span>Visa ending in 4242</span>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">Update payment</Button>
        <Button size="sm" className="flex-1">Renew now</Button>
      </CardFooter>
    </Card>
  )
}
