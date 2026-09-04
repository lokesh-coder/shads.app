import { ImageIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const thumbnails = [
  { id: 1, label: "sunset-beach.jpg", selected: true },
  { id: 2, label: "mountain-vista.jpg", selected: false },
  { id: 3, label: "city-lights.jpg", selected: false },
  { id: 4, label: "forest-trail.jpg", selected: false },
  { id: 5, label: "coastal-cliffs.jpg", selected: false },
  { id: 6, label: "desert-dunes.jpg", selected: false },
]

export function ImageGalleryShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <MediaFrame tint="media" aspect="video" className="rounded-none" />
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Summer collection</CardTitle>
        <CardAction>
          <Badge variant="outline" className="text-xs">6 photos</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-2">
          <div className="grid grid-cols-3 gap-2">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                className={cn(
                  "flex aspect-square flex-col items-center justify-center gap-1 rounded-lg border bg-muted/40 transition-shadow",
                  thumb.selected
                    ? "border-primary/40 ring-2 ring-primary/30"
                    : "border-border/70",
                )}
              >
                <ImageIcon className="size-4 text-muted-foreground" />
                <span className="max-w-full truncate px-1 text-xs text-muted-foreground">
                  {thumb.label}
                </span>
              </div>
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
