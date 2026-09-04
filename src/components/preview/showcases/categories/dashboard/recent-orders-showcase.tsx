import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const orders = [
  { id: "#4821", customer: "Acme Corp", amount: "$1,240", status: "shipped" as const },
  { id: "#4820", customer: "Nova Labs", amount: "$890", status: "processing" as const },
  { id: "#4819", customer: "Bright Co", amount: "$2,150", status: "delivered" as const },
  { id: "#4818", customer: "Pixel Studio", amount: "$420", status: "pending" as const },
]

const statusVariant = {
  shipped: "secondary" as const,
  processing: "outline" as const,
  delivered: "default" as const,
  pending: "outline" as const,
}

export function RecentOrdersShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Recent orders</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0.5">
          {orders.map((order) => (
            <ListRow
              key={order.id}
              title={order.customer}
              description={order.id}
              trailing={
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium tabular-nums">{order.amount}</span>
                  <Badge variant={statusVariant[order.status]} className="capitalize">
                    {order.status}
                  </Badge>
                </div>
              }
            />
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
