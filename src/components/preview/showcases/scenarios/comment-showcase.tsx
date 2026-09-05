import { HeartIcon, ReplyIcon } from "lucide-react"

import { PersonAvatar } from "@/components/media/person-avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function CommentShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex gap-2.5">
            <PersonAvatar name="Maya Chen" seed="Maya Chen" size="sm" />
            <div className="min-w-0 flex-1">
              <InsetPanel className="bg-muted/50">
                <p className="text-xs font-medium">Maya Chen · 10:42 AM</p>
                <p className="mt-0.5 text-sm">
                  Can we tighten the spacing on mobile? Feels cramped in the header.
                </p>
              </InsetPanel>
              <div className="mt-2 flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                  <HeartIcon className="size-3" />
                  3
                </Button>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                  <ReplyIcon className="size-3" />
                  Reply
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex gap-2">
            <PersonAvatar name="You" seed="user" size="sm" />
            <Textarea
              placeholder="Write a reply..."
              className="min-h-10 flex-1 resize-none text-sm"
            />
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
