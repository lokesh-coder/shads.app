import { ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function ArticlePreviewShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <MediaFrame aspect="video" tint="editorial" />
      <CardHeader className="gap-3">
        <ShowcaseContent className="gap-3">
          <Badge variant="secondary" className="w-fit">
            Technology
          </Badge>
          <CardTitle className="text-lg leading-snug">
            The quiet revolution in edge computing
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            How distributed infrastructure is reshaping latency-sensitive applications
            without the hype cycles of previous decades.
          </CardDescription>
        </ShowcaseContent>
      </CardHeader>
      <CardFooter className="gap-2 text-xs text-muted-foreground">
        <ClockIcon className="size-3.5" />
        <span>8 min read</span>
        <span>·</span>
        <span>Sep 2, 2026</span>
      </CardFooter>
    </Card>
  )
}
