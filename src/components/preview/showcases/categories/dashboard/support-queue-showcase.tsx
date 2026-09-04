import { ClockIcon, MessageSquareIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const tickets = [
  {
    id: "TKT-1042",
    subject: "Billing discrepancy on invoice",
    priority: "high" as const,
    wait: "2h",
    initials: "MR",
  },
  {
    id: "TKT-1041",
    subject: "Cannot export CSV report",
    priority: "medium" as const,
    wait: "5h",
    initials: "SL",
  },
  {
    id: "TKT-1039",
    subject: "SSO login redirect loop",
    priority: "high" as const,
    wait: "8h",
    initials: "JK",
  },
]

export function SupportQueueShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Open tickets</CardTitle>
        <CardAction>
          <Badge variant="destructive">3 urgent</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {tickets.map((ticket) => (
            <ListRow
              key={ticket.id}
              leading={
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs">{ticket.initials}</AvatarFallback>
                </Avatar>
              }
              title={ticket.subject}
              description={`${ticket.id} · Waiting ${ticket.wait}`}
              trailing={
                <div className="flex items-center gap-2">
                  <Badge
                    variant={ticket.priority === "high" ? "destructive" : "secondary"}
                    className="text-xs capitalize"
                  >
                    {ticket.priority}
                  </Badge>
                  <ClockIcon className="size-3.5 text-muted-foreground" />
                </div>
              }
            />
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full gap-1.5">
          <MessageSquareIcon className="size-3.5" />
          View all tickets
        </Button>
      </CardFooter>
    </Card>
  )
}
