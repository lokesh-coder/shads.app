import { UserIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function FieldShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={UserIcon} />
          <div>
            <CardTitle>Profile details</CardTitle>
            <CardDescription>Structured fields with labels and help text</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <FieldSet>
            <FieldLegend>Public profile</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sc-display-name">Display name</FieldLabel>
                <Input id="sc-display-name" defaultValue="Jordan Lee" />
                <FieldDescription>
                  Shown on comments and shared links.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="sc-handle">Handle</FieldLabel>
                <Input id="sc-handle" defaultValue="@jordan" />
                <FieldDescription>
                  Must be unique across the workspace.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-end border-t border-border/60 bg-muted/20">
        <Button>Save profile</Button>
      </CardFooter>
    </Card>
  )
}
