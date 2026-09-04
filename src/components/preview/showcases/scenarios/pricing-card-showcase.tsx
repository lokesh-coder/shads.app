import { CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const features = ["Unlimited projects", "50 GB storage", "Priority support", "SSO"]

export function PricingCardShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <div className="flex items-center justify-between">
            <Eyebrow className="normal-case">Pro plan</Eyebrow>
            <Badge>Most popular</Badge>
          </div>
          <MetricValue label="Monthly" value="$29" change="/month billed annually" />
          <p className="text-xs text-muted-foreground">
            For growing teams that need more power
          </p>
          <Separator />
          <div className="flex flex-col gap-0.5">
            {features.map((f) => (
              <ListRow
                key={f}
                leading={<CheckIcon className="size-4 shrink-0 text-primary" />}
                title={f}
                className="px-0"
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-primary/10 bg-primary/[0.02]">
        <Button className="w-full">
          Start free trial
        </Button>
      </CardFooter>
    </Card>
  )
}
