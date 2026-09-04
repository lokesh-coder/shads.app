import { CreditCardIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function PaymentMethodShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Payment method</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <RadioGroup defaultValue="card" className="gap-2">
            <InsetPanel className="flex items-center gap-2 p-2.5 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5">
              <RadioGroupItem value="card" id="sc-pay-card" />
              <Label htmlFor="sc-pay-card" className="flex flex-1 items-center gap-2 font-normal">
                <IconTile icon={CreditCardIcon} className="size-8" />
                Credit card
              </Label>
              <span className="text-xs text-muted-foreground">•••• 4242</span>
            </InsetPanel>
            <InsetPanel className="flex items-center gap-2 p-2.5">
              <RadioGroupItem value="invoice" id="sc-pay-invoice" />
              <Label htmlFor="sc-pay-invoice" className="font-normal">
                Invoice (Net 30)
              </Label>
            </InsetPanel>
          </RadioGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sc-card-num">Card number</FieldLabel>
              <Input id="sc-card-num" placeholder="4242 4242 4242 4242" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="sc-card-exp">Expiry</FieldLabel>
                <Input id="sc-card-exp" placeholder="MM / YY" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sc-card-cvc">CVC</FieldLabel>
                <Input id="sc-card-cvc" placeholder="123" />
              </Field>
            </div>
          </FieldGroup>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Save payment method
        </Button>
      </CardFooter>
    </Card>
  )
}
