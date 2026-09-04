import { ArrowLeftIcon, KeyRoundIcon } from "lucide-react"

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

export function ForgotPasswordShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-center gap-3">
          <IconTile icon={KeyRoundIcon} />
          <div>
            <CardTitle>Reset password</CardTitle>
            <CardDescription>
              Enter the email associated with your account and we'll send reset
              instructions.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Field>
            <FieldLabel htmlFor="sc-reset-email">Email</FieldLabel>
            <Input
              id="sc-reset-email"
              type="email"
              placeholder="you@company.com"
            />
          </Field>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Send reset link
        </Button>
        <Button variant="ghost" className="w-full">
          <ArrowLeftIcon data-icon="inline-start" />
          Back to sign in
        </Button>
      </CardFooter>
    </Card>
  )
}
