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
  Eyebrow,
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const items = [
  { name: "Pro plan (annual)", price: "$228.00" },
  { name: "Extra seats × 3", price: "$87.00" },
  { name: "Tax", price: "$18.45" },
]

export function OrderSummaryShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Order summary</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex flex-col gap-0.5">
            {items.map((item) => (
              <ListRow
                key={item.name}
                title={item.name}
                trailing={<span className="text-sm tabular-nums">{item.price}</span>}
                className="px-0 [&_p]:font-normal [&_p]:text-muted-foreground"
              />
            ))}
          </div>
          <Separator />
          <MetricValue label="Total due today" value="$333.45" />
          <Eyebrow className="normal-case">
            Renews Mar 4, 2027. Cancel anytime from billing settings.
          </Eyebrow>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Confirm purchase
        </Button>
      </CardFooter>
    </Card>
  )
}
