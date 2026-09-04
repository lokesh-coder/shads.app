import { CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Eyebrow,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const steps = [
  { label: "Create workspace", done: true },
  { label: "Invite your team", done: true },
  { label: "Import your data", done: false },
]

export function OnboardingShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Getting started</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <Eyebrow className="normal-case">Setup progress</Eyebrow>
              <span className="font-medium tabular-nums">2 of 3</span>
            </div>
            <Progress value={66} />
          </div>
          <div className="flex flex-col gap-0.5">
            {steps.map((step) => (
              <ListRow
                key={step.label}
                leading={
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs ${
                      step.done
                        ? "bg-primary text-primary-foreground"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {step.done ? <CheckIcon className="size-3" /> : "3"}
                  </span>
                }
                title={step.label}
                className={step.done ? "[&_p]:text-muted-foreground [&_p]:line-through" : ""}
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-primary/10 bg-primary/[0.02]">
        <Button className="w-full">
          Continue setup
        </Button>
      </CardFooter>
    </Card>
  )
}
