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
import { Progress } from "@/components/ui/progress"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const checks = [
  { label: "At least 8 characters", met: true },
  { label: "One uppercase letter", met: true },
  { label: "One number", met: false },
  { label: "One special character", met: false },
]

export function PasswordStrengthShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle className="text-center">Create a password</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Field>
            <FieldLabel htmlFor="sc-pass-new" className="text-xs">
              New password
            </FieldLabel>
            <Input id="sc-pass-new" type="password" defaultValue="MySecure" />
          </Field>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Strength</span>
              <span className="font-medium text-primary">Fair</span>
            </div>
            <Progress value={50} className="h-1.5" />
          </div>
          <ul className="space-y-1">
            {checks.map((c) => (
              <li
                key={c.label}
                className={`text-xs ${c.met ? "text-primary" : "text-muted-foreground"}`}
              >
                {c.met ? "✓" : "○"} {c.label}
              </li>
            ))}
          </ul>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Update password
        </Button>
      </CardFooter>
    </Card>
  )
}
