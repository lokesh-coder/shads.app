import { AlertTriangleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function DeleteAccountShowcase() {
  return (
    <Card className={showcaseCard.danger}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-center gap-3">
          <IconTile icon={AlertTriangleIcon} status="error" />
          <CardTitle>Delete account</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="border-destructive/20 bg-destructive/5">
            <p className="text-sm text-muted-foreground">
              This permanently deletes your account, projects, and billing history.
              This cannot be undone.
            </p>
          </InsetPanel>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sc-delete-confirm">
              Type <span className="font-mono font-medium">DELETE</span> to confirm
            </Label>
            <Input id="sc-delete-confirm" placeholder="DELETE" />
          </div>
          <div className="flex items-start gap-2.5">
            <Checkbox id="sc-delete-understand" />
            <Label htmlFor="sc-delete-understand" className="text-xs font-normal leading-snug">
              I understand this action is permanent and all data will be lost
            </Label>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-destructive/15 bg-destructive/5">
        <Button variant="destructive" className="w-full">
          Delete my account
        </Button>
      </CardFooter>
    </Card>
  )
}
