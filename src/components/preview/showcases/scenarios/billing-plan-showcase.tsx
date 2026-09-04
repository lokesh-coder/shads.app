import { CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$12",
    features: ["5 projects", "1 GB storage"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    features: ["Unlimited projects", "50 GB storage", "Priority support"],
    popular: true,
  },
]

export function BillingPlanShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Choose a plan</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <RadioGroup defaultValue="pro" className="gap-2">
            {plans.map((plan) => (
              <Label
                key={plan.id}
                htmlFor={`sc-plan-${plan.id}`}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/70 p-3 transition-colors hover:bg-muted/30 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
              >
                <RadioGroupItem value={plan.id} id={`sc-plan-${plan.id}`} className="mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{plan.name}</span>
                    {plan.popular ? <Badge variant="secondary">Popular</Badge> : null}
                  </div>
                  <p className="text-lg font-semibold tabular-nums">
                    {plan.price}
                    <span className="text-xs font-normal text-muted-foreground">/mo</span>
                  </p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {plan.features.map((f) => (
                      <ListRow
                        key={f}
                        leading={<CheckIcon className="size-3 text-primary" />}
                        title={f}
                        className="px-0 py-0.5 text-xs text-muted-foreground [&_p]:text-xs [&_p]:font-normal"
                      />
                    ))}
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
          <Separator />
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Upgrade to Pro
        </Button>
      </CardFooter>
    </Card>
  )
}
