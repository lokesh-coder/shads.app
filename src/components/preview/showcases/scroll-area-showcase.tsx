import { InboxIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  IconTile,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

const messages = [
  { title: "Deploy finished", detail: "main · 2m ago" },
  { title: "Invoice paid", detail: "Acme Corp · 18m ago" },
  { title: "New comment", detail: "Homepage v3 · 1h ago" },
  { title: "Build failed", detail: "feature/auth · 2h ago" },
  { title: "Member joined", detail: "Jordan Lee · 4h ago" },
  { title: "Export ready", detail: "Q4 report · yesterday" },
]

export function ScrollAreaShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={InboxIcon} />
          <div>
            <CardTitle>Activity feed</CardTitle>
            <CardDescription>Recent workspace events</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <ScrollArea className="h-44 rounded-lg border border-border/70 bg-muted/20 pr-3">
            <div className="flex flex-col gap-1 p-2">
              {messages.map((message) => (
                <ListRow
                  key={message.title}
                  title={message.title}
                  description={message.detail}
                  trailing={
                    <Badge variant="secondary" className="text-xs">
                      New
                    </Badge>
                  }
                />
              ))}
            </div>
          </ScrollArea>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
