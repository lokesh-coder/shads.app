import { HelpCircleIcon, InfoIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function TooltipShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={HelpCircleIcon} />
          <div>
            <CardTitle>Inline help</CardTitle>
            <CardDescription>Tooltips for dense interfaces</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <TooltipProvider>
            <InsetPanel className="flex flex-wrap items-center gap-3">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" />}>
                  <InfoIcon data-icon="inline-start" />
                  Billing cycle
                </TooltipTrigger>
                <TooltipContent>
                  Annual plans renew on the same calendar day each year.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Button variant="ghost" size="icon" aria-label="Help" />}
                >
                  <HelpCircleIcon />
                </TooltipTrigger>
                <TooltipContent>Learn about proration</TooltipContent>
              </Tooltip>
              <p className="text-sm text-muted-foreground">
                Hover controls to preview tooltip styling under this theme.
              </p>
            </InsetPanel>
          </TooltipProvider>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
