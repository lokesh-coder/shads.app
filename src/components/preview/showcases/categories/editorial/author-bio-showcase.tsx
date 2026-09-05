import { GlobeIcon, LinkIcon, MailIcon } from "lucide-react"

import { PersonAvatar } from "@/components/media/person-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function AuthorBioShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent className="items-center gap-5 text-center">
          <PersonAvatar
            name="Elena Martinez"
            seed="Elena Martinez"
            className="size-16"
          />
          <div className="flex flex-col gap-1">
            <p className="font-heading text-lg font-semibold">Elena Martinez</p>
            <p className="text-sm text-muted-foreground">Senior Editor · Platform</p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Covers infrastructure, developer tools, and the people building the
            systems we depend on.
          </p>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon-sm">
              <GlobeIcon className="size-3.5" />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <LinkIcon className="size-3.5" />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <MailIcon className="size-3.5" />
            </Button>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
