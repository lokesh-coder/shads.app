import { CopyIcon, EyeOffIcon, WebhookIcon } from "lucide-react"

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
import { Input } from "@/components/ui/input"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function WebhookEndpointShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Webhook endpoint</CardTitle>
        <CardAction>
          <Badge variant="secondary" className="gap-1 text-xs">
            <WebhookIcon className="size-3" />
            Active
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="space-y-1.5">
            <p className="text-xs text-muted-foreground">Endpoint URL</p>
            <div className="flex gap-2">
              <Input
                readOnly
                value="https://api.acme.dev/hooks/img-processed"
                className="font-mono text-xs"
              />
              <Button variant="outline" size="icon-sm">
                <CopyIcon />
              </Button>
            </div>
          </InsetPanel>
          <InsetPanel className="space-y-1.5">
            <p className="text-xs text-muted-foreground">Signing secret</p>
            <div className="flex gap-2">
              <Input readOnly value="whsec_••••••••••••••••" className="font-mono text-xs" />
              <Button variant="outline" size="icon-sm">
                <EyeOffIcon />
              </Button>
            </div>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <p className="font-mono text-xs text-muted-foreground">
          Last delivery succeeded · 3 min ago · 200 OK
        </p>
      </CardFooter>
    </Card>
  )
}
