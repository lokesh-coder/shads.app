import { ShieldIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function TrustedDevicesShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Trusted devices</CardTitle>
        <CardAction>
          <Badge variant="outline" className="text-xs">3 devices</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-background/60 p-3">
            <IconTile icon={ShieldIcon} className="border-primary/30" />
            <div>
              <p className="text-sm font-medium">This MacBook Pro</p>
              <p className="text-xs text-muted-foreground">
                Trusted since Jan 12 · skips 2FA for 30 days
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Trusted devices can sign in without a second factor. Revoke access if
            a device is lost or shared.
          </p>
          <Button variant="outline" className="w-full">
            Manage trusted devices
          </Button>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
