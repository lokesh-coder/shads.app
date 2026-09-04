import { HeadphonesIcon, PauseIcon, PlayIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function PodcastEpisodeShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader className="gap-3">
        <Badge variant="secondary" className="w-fit">
          Episode 48
        </Badge>
        <CardTitle className="text-lg leading-snug">
          Designing for trust in regulated industries
        </CardTitle>
        <CardDescription>With Dr. Sarah Chen · 42 min</CardDescription>
        <CardAction>
          <HeadphonesIcon className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-4">
          <div className="flex items-center gap-4">
            <Button size="icon" className="size-10 shrink-0 rounded-full">
              <PlayIcon className="size-4" />
            </Button>
            <div className="flex-1">
              <Progress value={34} className="h-1.5" />
              <div className="mt-2 flex justify-between text-xs tabular-nums text-muted-foreground">
                <span>14:22</span>
                <span>42:08</span>
              </div>
            </div>
            <Button variant="ghost" size="icon-sm">
              <PauseIcon className="size-3.5" />
            </Button>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <span>34% complete</span>
        <span>·</span>
        <span>27 min remaining</span>
      </CardFooter>
    </Card>
  )
}
