import { QuoteIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function TestimonialShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <QuoteIcon className="size-5 text-primary/40" />
          <blockquote className="text-sm leading-relaxed">
            "We redesigned our entire app in a weekend. The theme tokens made it
            trivial to keep components consistent across 40+ screens."
          </blockquote>
          <InsetPanel className="flex items-center gap-2.5 border-primary/15 bg-primary/[0.04]">
            <Avatar size="sm">
              <AvatarFallback className="text-xs">SR</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sarah Rivera</p>
              <p className="text-xs text-muted-foreground">
                Head of Design, Northwind
              </p>
            </div>
          </InsetPanel>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm text-primary">
                ★
              </span>
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
