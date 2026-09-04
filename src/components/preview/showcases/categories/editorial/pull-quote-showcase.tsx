import { QuoteIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function PullQuoteShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardContent className="border-l-4 border-primary pl-4 pt-(--card-spacing)">
        <ShowcaseContent className="gap-4">
          <QuoteIcon className="size-5 text-primary/40" />
          <blockquote className="font-heading text-lg leading-relaxed font-medium">
            Good writing is not about sounding smart. It&apos;s about making the reader
            feel smarter than they did before.
          </blockquote>
          <footer className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            <cite className="not-italic">William Zinsser, On Writing Well</cite>
          </footer>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
