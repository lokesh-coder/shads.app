import { GiftIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function GiftCardRedeemShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle className="flex items-center justify-center gap-2">
          <IconTile icon={GiftIcon} />
          Redeem gift card
        </CardTitle>
        <CardDescription className="text-center text-xs">
          Enter the 16-character code from your gift card email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Field>
            <FieldLabel htmlFor="sc-gift-code" className="text-xs">
              Gift card code
            </FieldLabel>
            <Input
              id="sc-gift-code"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="font-mono tracking-widest"
            />
          </Field>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply to balance</Button>
      </CardFooter>
    </Card>
  )
}
