import { MessageSquareTextIcon, PencilIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const reviewers = [
  { initials: "AK", name: "Alex K." },
  { initials: "JL", name: "Jordan L." },
  { initials: "MR", name: "Morgan R." },
]

export function DraftReviewShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader className="gap-3">
        <CardTitle className="text-lg leading-snug">Q4 product roadmap essay</CardTitle>
        <CardAction>
          <Badge variant="outline" className="gap-1">
            <PencilIcon className="size-3" />
            In review
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-4">
          <p className="text-sm text-muted-foreground">
            Last edited 2 hours ago · 1,840 words
          </p>
          <InsetPanel className="flex items-center gap-3 p-4">
            <MessageSquareTextIcon className="size-4 shrink-0 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium">7 open comments</p>
              <p className="text-xs text-muted-foreground">3 resolved · 2 suggestions</p>
            </div>
            <div className="flex -space-x-2">
              {reviewers.map((r) => (
                <Avatar key={r.initials} className="size-7 ring-2 ring-card">
                  <AvatarFallback className="text-xs">{r.initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Continue editing
        </Button>
      </CardFooter>
    </Card>
  )
}
