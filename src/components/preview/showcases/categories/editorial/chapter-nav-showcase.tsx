import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function ChapterNavShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent className="gap-5">
          <div className="text-center">
            <Eyebrow>Chapter 7 of 24</Eyebrow>
            <p className="mt-2 font-heading text-lg font-semibold">
              The architecture of habit
            </p>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Previous</p>
              <p className="mt-1 font-medium">Cue, craving, response</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">Next</p>
              <p className="mt-1 font-medium">The role of environment</p>
            </div>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1 gap-1">
          <ChevronLeftIcon className="size-3.5" />
          Ch. 6
        </Button>
        <Button size="sm" className="flex-1 gap-1">
          Ch. 8
          <ChevronRightIcon className="size-3.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
