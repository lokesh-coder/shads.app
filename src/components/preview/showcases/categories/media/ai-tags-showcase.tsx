import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const tags = [
  { label: "Landscape", confidence: 98 },
  { label: "Sunset", confidence: 94 },
  { label: "Ocean", confidence: 91 },
  { label: "Beach", confidence: 87 },
  { label: "Golden hour", confidence: 82 },
  { label: "Travel", confidence: 76 },
]

export function AiTagsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle className="flex items-center gap-2">
          <SparklesIcon className="size-4 text-primary" />
          AI-detected tags
        </CardTitle>
        <CardDescription>sunset-beach-hero.jpg</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MediaFrame tint="media" aspect="video" className="rounded-lg" />
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag.label} variant="secondary" className="gap-1 text-xs">
                {tag.label}
                <span className="text-muted-foreground tabular-nums">
                  {tag.confidence}%
                </span>
              </Badge>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Tags auto-generated from image content. Edit or remove any that don&apos;t fit.
          </p>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
