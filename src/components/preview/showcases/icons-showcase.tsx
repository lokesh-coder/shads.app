import {
  BellIcon,
  BookmarkIcon,
  HeartIcon,
  MessageCircleIcon,
  PlusIcon,
  StarIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Eyebrow,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function IconsShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Design critique #42</CardTitle>
        <CardDescription>
          Review updated navigation patterns before Friday's sprint review
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel>
            <Eyebrow>Size scale</Eyebrow>
            <div className="mt-2 flex items-end gap-4 text-muted-foreground">
              <HeartIcon className="size-4" />
              <StarIcon className="size-5 text-primary" />
              <BellIcon className="size-6" />
              <MessageCircleIcon className="size-7 opacity-60" />
            </div>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2 border-t border-border/60 bg-muted/20">
        {[
          { icon: HeartIcon, label: "Like" },
          { icon: StarIcon, label: "Favorite" },
          { icon: BookmarkIcon, label: "Save" },
          { icon: MessageCircleIcon, label: "Comment" },
          { icon: BellIcon, label: "Notify" },
        ].map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger
              render={<Button variant="outline" size="icon-sm" />}
            >
              <Icon />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
        <Button size="icon">
          <PlusIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
