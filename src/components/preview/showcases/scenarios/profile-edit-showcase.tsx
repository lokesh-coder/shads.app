import { CameraIcon } from "lucide-react"

import { PersonAvatar } from "@/components/media/person-avatar"
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
import { Textarea } from "@/components/ui/textarea"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ProfileEditShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Edit profile</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex items-center gap-3">
            <PersonAvatar
              name="Alex Kim"
              seed="Alex Kim"
              className="size-14 ring-2 ring-border/60"
            />
            <div className="flex flex-col gap-1">
              <Button variant="outline" size="sm">
                <CameraIcon data-icon="inline-start" />
                Change photo
              </Button>
              <p className="text-xs text-muted-foreground">JPG or PNG, max 2 MB</p>
            </div>
          </div>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sc-profile-name">Display name</FieldLabel>
              <Input id="sc-profile-name" defaultValue="Alex Kim" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sc-profile-bio">Bio</FieldLabel>
              <Textarea
                id="sc-profile-bio"
                defaultValue="Product designer at Studio"
                className="min-h-14 resize-none"
              />
            </Field>
          </FieldGroup>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Save changes
        </Button>
      </CardFooter>
    </Card>
  )
}
