import { MailCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function MagicLinkShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={`${showcaseHeader.form} text-center`}>
        <IconTile
          icon={MailCheckIcon}
          status="success"
          className="mx-auto border-primary/20 bg-primary/10 [&_svg]:text-primary"
        />
        <CardTitle>Check your inbox</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col items-center gap-2 py-4 text-center">
            <p className="max-w-[220px] text-xs text-muted-foreground">
              We sent a sign-in link to jordan@studio.io. It expires in 10 minutes.
            </p>
          </InsetPanel>
          <Field>
            <FieldLabel htmlFor="sc-magic-email">Use a different email</FieldLabel>
            <Input id="sc-magic-email" type="email" placeholder="you@team.co" />
          </Field>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-primary/10 bg-primary/[0.02]">
        <Button variant="outline" className="w-full">
          Resend link
        </Button>
      </CardFooter>
    </Card>
  )
}
