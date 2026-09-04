import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import {
  Eyebrow,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function TogglesShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose how you want to be notified</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <Label htmlFor="sc-push">Push alerts</Label>
                <p className="text-xs text-muted-foreground">
                  Real-time activity on mobile
                </p>
              </div>
              <Switch id="sc-push" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <Label htmlFor="sc-email">Weekly digest</Label>
                <p className="text-xs text-muted-foreground">
                  Summary every Monday
                </p>
              </div>
              <Switch id="sc-email" />
            </div>
          </InsetPanel>

          <div className="flex items-center gap-2.5">
            <Checkbox id="sc-terms" defaultChecked />
            <Label htmlFor="sc-terms" className="font-normal leading-none">
              Include product updates
            </Label>
          </div>

          <InsetPanel className="flex flex-col gap-3">
            <Eyebrow>Delivery frequency</Eyebrow>
            <RadioGroup defaultValue="instant" className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="instant" id="sc-instant" />
                <Label htmlFor="sc-instant" className="font-normal">
                  Instant
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="daily" id="sc-daily" />
                <Label htmlFor="sc-daily" className="font-normal">
                  Daily batch
                </Label>
              </div>
            </RadioGroup>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <p className="text-xs text-muted-foreground">
          Changes apply immediately across all devices
        </p>
      </CardFooter>
    </Card>
  )
}
