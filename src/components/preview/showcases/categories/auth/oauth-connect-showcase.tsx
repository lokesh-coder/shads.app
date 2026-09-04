import { CheckIcon, CodeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
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

export function OauthConnectShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Connected accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-2">
          <ListRow
            leading={<IconTile icon={CodeIcon} status="success" />}
            title="GitHub"
            description="@jordanlee"
            trailing={
              <Badge variant="secondary" className="gap-1 text-xs">
                <CheckIcon className="size-3" />
                Connected
              </Badge>
            }
            className="rounded-lg border border-border/70 bg-muted/20 px-3"
          />
          <ListRow
            leading={
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background text-xs font-bold text-muted-foreground">
                G
              </div>
            }
            title="Google"
            description="Not connected"
            trailing={
              <Button variant="outline" size="sm">
                Connect
              </Button>
            }
            className="rounded-lg border border-dashed border-border/70 px-3"
          />
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
