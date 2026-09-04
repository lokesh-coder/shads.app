import { ArrowRightIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Eyebrow,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const stories = [
  { title: "Rethinking async collaboration", category: "Culture" },
  { title: "The return of RSS", category: "Media" },
  { title: "Building trust in AI products", category: "Product" },
]

export function RelatedStoriesShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader>
        <CardTitle className="text-lg">Keep reading</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="flex-row gap-3 overflow-x-auto pb-1">
          {stories.map((story) => (
            <a
              key={story.title}
              href="#"
              className="group flex w-40 shrink-0 flex-col gap-3 rounded-lg border border-border/70 p-3 transition-colors hover:bg-muted/45"
            >
              <MediaFrame aspect="square" tint="editorial" className="rounded-md" />
              <Eyebrow>{story.category}</Eyebrow>
              <p className="text-sm font-medium leading-snug group-hover:text-primary">
                {story.title}
              </p>
              <ArrowRightIcon className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
