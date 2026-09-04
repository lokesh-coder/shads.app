import { AlertCircleIcon, InfoIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function AlertsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>System status</CardTitle>
        <CardDescription>Recent alerts and notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Alert>
            <InfoIcon />
            <AlertTitle>Update available</AlertTitle>
            <AlertDescription>
              Version 2.4 includes focus and menu layer fixes.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              Update your card to restore access.
            </AlertDescription>
          </Alert>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
