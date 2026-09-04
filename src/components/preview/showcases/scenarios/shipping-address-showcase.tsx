import { MapPinIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ShippingAddressShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-center gap-3">
          <IconTile icon={MapPinIcon} />
          <div>
            <CardTitle>Shipping address</CardTitle>
            <CardDescription>Where should we deliver your order?</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <FieldGroup>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="sc-ship-first">First name</FieldLabel>
                <Input id="sc-ship-first" defaultValue="Jordan" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sc-ship-last">Last name</FieldLabel>
                <Input id="sc-ship-last" defaultValue="Lee" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="sc-ship-street">Street address</FieldLabel>
              <Input id="sc-ship-street" defaultValue="742 Evergreen Terrace" />
            </Field>
            <div className="grid gap-3 sm:grid-cols-3">
              <Field>
                <FieldLabel htmlFor="sc-ship-city">City</FieldLabel>
                <Input id="sc-ship-city" defaultValue="Springfield" />
              </Field>
              <Field>
                <FieldLabel>State</FieldLabel>
                <Select defaultValue="il">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="il">Illinois</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="sc-ship-zip">ZIP</FieldLabel>
                <Input id="sc-ship-zip" defaultValue="62704" />
              </Field>
            </div>
          </FieldGroup>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Continue to payment
        </Button>
      </CardFooter>
    </Card>
  )
}
