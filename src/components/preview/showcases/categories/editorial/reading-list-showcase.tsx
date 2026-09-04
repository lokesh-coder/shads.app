import { BookmarkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const articles = [
  { title: "Why design systems fail at scale", source: "A List Apart", time: "6 min" },
  { title: "The economics of open source", source: "Stratechery", time: "12 min" },
  { title: "Notes on slow productivity", source: "Cal Newport", time: "4 min" },
]

export function ReadingListShowcase() {
  const totalMinutes = articles.reduce((sum, a) => sum + parseInt(a.time), 0)

  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader>
        <CardTitle className="text-lg">Reading list</CardTitle>
        <CardAction>
          <BookmarkIcon className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0.5">
          {articles.map((article) => (
            <ListRow
              key={article.title}
              title={article.title}
              description={`${article.source} · ${article.time}`}
              trailing={
                <Button variant="ghost" size="sm" className="h-7 shrink-0 text-xs">
                  Open
                </Button>
              }
            />
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <span>{articles.length} articles saved</span>
        <span>·</span>
        <span>{totalMinutes} min total</span>
      </CardFooter>
    </Card>
  )
}
