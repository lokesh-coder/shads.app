import { ArrowRightIcon, PlayIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Eyebrow,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function HeroCtaShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <MediaFrame aspect="wide" tint="editorial" className="h-20" />
      <CardContent className="py-6">
        <ShowcaseContent className="items-center text-center">
          <div className="flex flex-col gap-1">
            <Eyebrow className="normal-case text-primary">New release</Eyebrow>
            <p className="font-heading text-lg font-semibold leading-tight">
              Ship beautiful products in half the time
            </p>
            <p className="text-xs text-muted-foreground">
              Design, build, and deploy with a theme system your whole team trusts.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button size="sm" className="flex-1">
              Get started free
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <PlayIcon data-icon="inline-start" />
              Watch demo
            </Button>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-center border-t border-primary/10 bg-primary/[0.02] pt-0">
        <p className="text-xs text-muted-foreground">
          No credit card required · Free for 14 days
        </p>
      </CardFooter>
    </Card>
  )
}
