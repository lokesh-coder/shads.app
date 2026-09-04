import { RefreshCwIcon, TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Eyebrow,
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ErrorStateShowcase() {
  return (
    <Card className={showcaseCard.danger}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-center gap-3">
          <IconTile icon={TriangleAlertIcon} status="error" />
          <CardTitle>Something went wrong</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Alert variant="destructive">
            <TriangleAlertIcon />
            <AlertTitle>Failed to load dashboard</AlertTitle>
            <AlertDescription>
              We couldn't reach the server. Check your connection and try again.
            </AlertDescription>
          </Alert>
          <Eyebrow className="text-center normal-case">
            Error code: <span className="font-mono">ERR_NETWORK_502</span>
          </Eyebrow>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2 border-t border-destructive/15 bg-destructive/5">
        <Button size="sm" className="flex-1">
          <RefreshCwIcon data-icon="inline-start" />
          Retry
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          Contact support
        </Button>
      </CardFooter>
    </Card>
  )
}
