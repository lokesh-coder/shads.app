import { FolderOpenIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function EmptyStateShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardContent className="py-8">
        <ShowcaseContent className="items-center text-center">
          <IconTile icon={FolderOpenIcon} className="size-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Start your first project</p>
            <p className="max-w-[200px] text-xs text-muted-foreground">
              Create a project to organize files, tasks, and team members in one
              place.
            </p>
          </div>
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            New project
          </Button>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
