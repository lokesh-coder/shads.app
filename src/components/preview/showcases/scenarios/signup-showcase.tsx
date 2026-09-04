import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function SignupShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Create account</CardTitle>
        <CardDescription>Get started with your free trial</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sc-signup-name">Full name</FieldLabel>
              <Input id="sc-signup-name" placeholder="Alex Kim" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sc-signup-email">Work email</FieldLabel>
              <Input
                id="sc-signup-email"
                type="email"
                placeholder="alex@company.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sc-signup-pass">Password</FieldLabel>
              <Input id="sc-signup-pass" type="password" placeholder="8+ characters" />
            </Field>
          </FieldGroup>
          <div className="flex items-start gap-2.5">
            <Checkbox id="sc-signup-terms" defaultChecked />
            <Label htmlFor="sc-signup-terms" className="text-xs font-normal leading-snug">
              I agree to the Terms of Service and Privacy Policy
            </Label>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-4 border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Create account
        </Button>
        <div className="flex w-full items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>
        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
