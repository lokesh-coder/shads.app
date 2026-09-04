import { LinkIcon, UsersIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function PopoversShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={UsersIcon} />
          <div>
            <CardTitle>Share link</CardTitle>
            <CardDescription>
              Invite collaborators to this project
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">
              Anyone with the link can comment on files
            </p>
            <div className="flex gap-2">
              <Input
                readOnly
                value="https://app.io/r/8xk2"
                className="text-xs"
              />
              <Button size="sm" variant="secondary">
                Copy
              </Button>
            </div>
          </InsetPanel>

          <div className="flex flex-wrap items-center gap-2">
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="sm" />}>
                <LinkIcon data-icon="inline-start" />
                Invite
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <PopoverHeader>
                  <PopoverTitle>Invite collaborator</PopoverTitle>
                  <PopoverDescription>
                    Anyone with the link can comment.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value="https://app.io/r/8xk2"
                    className="text-xs"
                  />
                  <Button size="sm">Copy</Button>
                </div>
              </PopoverContent>
            </Popover>

            <Tooltip>
              <TooltipTrigger render={<Button variant="ghost" size="sm" />}>
                Permissions
              </TooltipTrigger>
              <TooltipContent>Only owners can change access</TooltipContent>
            </Tooltip>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <p className="text-xs text-muted-foreground">
          3 collaborators · Link expires in 7 days
        </p>
      </CardFooter>
    </Card>
  )
}
