import {
  CopyIcon,
  DownloadIcon,
  FileTextIcon,
  MoreHorizontalIcon,
  ShareIcon,
  Trash2Icon,
} from "lucide-react"

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Eyebrow,
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function ActionsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <div className="flex items-start gap-3">
          <IconTile icon={FileTextIcon} />
          <div className="min-w-0 flex-1">
            <CardTitle>Q4 Revenue Report</CardTitle>
            <CardDescription className="mt-1">
              Generated Dec 31, 2025 · 2.4 MB
            </CardDescription>
          </div>
        </div>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="icon-sm" />}
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel>
            <Eyebrow>Summary</Eyebrow>
            <p className="mt-1 text-sm text-muted-foreground">
              847 transactions across 12 regions · Net revenue up 14% QoQ
            </p>
          </InsetPanel>
          <div className="flex flex-wrap items-center gap-2">
            <Button>
              <DownloadIcon data-icon="inline-start" />
              Export
            </Button>
            <Button variant="outline">
              <ShareIcon data-icon="inline-start" />
              Share
            </Button>
            <Button variant="secondary">
              <CopyIcon data-icon="inline-start" />
              Copy link
            </Button>
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2Icon data-icon="inline-start" />
              Delete
            </Button>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-end gap-2 border-t border-border/60 bg-muted/20">
        <Button variant="outline">Preview</Button>
        <Button>
          <DownloadIcon data-icon="inline-start" />
          Download PDF
        </Button>
      </CardFooter>
    </Card>
  )
}
