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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function SamlConfigShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle className="text-center">SAML single sign-on</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="sc-saml-enable" className="text-xs">Enable SAML</Label>
            <Switch id="sc-saml-enable" defaultChecked />
          </div>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sc-saml-url" className="text-xs">
                Identity provider URL
              </FieldLabel>
              <Input
                id="sc-saml-url"
                defaultValue="https://idp.acme.com/saml/sso"
                className="font-mono text-xs"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sc-saml-entity" className="text-xs">
                Entity ID
              </FieldLabel>
              <Input
                id="sc-saml-entity"
                defaultValue="urn:acme:studio"
                className="font-mono text-xs"
              />
            </Field>
          </FieldGroup>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Save configuration
        </Button>
      </CardFooter>
    </Card>
  )
}
