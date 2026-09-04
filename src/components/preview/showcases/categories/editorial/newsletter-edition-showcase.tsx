import { MailIcon } from "lucide-react"

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
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const stories = [
  "Platform team cuts deploy time by 60%",
  "Inside the redesign of our checkout flow",
  "What we learned shipping AI features",
]

export function NewsletterEditionShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader className="gap-3">
        <CardTitle className="text-lg">Weekly digest #142</CardTitle>
        <CardDescription>Shipping to 24,800 subscribers</CardDescription>
        <CardAction>
          <MailIcon className="size-4 text-muted-foreground" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-4">
          <p className="text-sm font-medium">This week in product</p>
          <div className="flex flex-col gap-0.5">
            {stories.map((story) => (
              <ListRow
                key={story}
                leading={<span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />}
                title={story}
                className="items-start"
              />
            ))}
          </div>
          <Badge variant="secondary" className="w-fit">
            Draft · not sent
          </Badge>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Preview edition
        </Button>
      </CardFooter>
    </Card>
  )
}
