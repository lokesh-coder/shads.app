import { LockIcon } from "lucide-react"

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
import { Separator } from "@/components/ui/separator"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function AuthShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={`${showcaseHeader.form} text-center`}>
        <div className="mx-auto mb-2">
          <IconTile icon={LockIcon} className="mx-auto" />
        </div>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Welcome back to your workspace</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sc-auth-email">Email</FieldLabel>
              <Input
                id="sc-auth-email"
                type="email"
                placeholder="you@team.co"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sc-auth-pass">Password</FieldLabel>
              <Input id="sc-auth-pass" type="password" />
            </Field>
          </FieldGroup>
          <Button className="w-full">Continue</Button>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-3 border-t border-border/60 bg-muted/20">
        <Separator />
        <Button variant="link" size="sm" className="h-auto w-full p-0">
          Forgot password?
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Don't have an account?{" "}
          <span className="font-medium text-foreground">Sign up</span>
        </p>
      </CardFooter>
    </Card>
  )
}
