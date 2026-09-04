import { GitCommitIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const events = [
  {
    user: "Maya",
    action: "merged PR #142 into main",
    time: "2m ago",
    type: "merge",
  },
  {
    user: "Jordan",
    action: "commented on Design review",
    time: "18m ago",
    type: "comment",
  },
  {
    user: "Sam",
    action: "deployed v2.4.1 to production",
    time: "1h ago",
    type: "deploy",
  },
]

export function ActivityItemShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          {events.map((event, i) => (
            <div key={event.action}>
              {i > 0 ? <Separator className="my-1" /> : null}
              <ListRow
                leading={
                  <Avatar size="sm">
                    <AvatarFallback className="text-xs">
                      {event.user.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                }
                title={`${event.user} ${event.action}`}
                description={event.time}
                trailing={
                  event.type === "deploy" ? (
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      <GitCommitIcon className="size-3" />
                      Live
                    </Badge>
                  ) : null
                }
              />
            </div>
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
