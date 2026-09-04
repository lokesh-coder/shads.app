import { SmartphoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function TwoFactorSetupShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle className="text-center">Authenticator app</CardTitle>
        <CardAction>
          <SmartphoneIcon className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="mx-auto flex size-28 items-center justify-center font-mono text-xs text-muted-foreground">
            QR CODE
          </InsetPanel>
          <p className="text-center text-xs text-muted-foreground">
            Scan with Google Authenticator or 1Password
          </p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sc-2fa-code" className="text-xs">
              Verification code
            </Label>
            <Input
              id="sc-2fa-code"
              placeholder="000 000"
              className="text-center font-mono tracking-widest"
            />
          </div>
          <Button className="w-full">
            Enable 2FA
          </Button>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
