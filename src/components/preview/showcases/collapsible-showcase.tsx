import { ChevronDownIcon, Settings2Icon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function CollapsibleShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={Settings2Icon} />
          <div>
            <CardTitle>Advanced settings</CardTitle>
            <CardDescription>Optional controls for power users</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Collapsible defaultOpen className="rounded-lg border border-border/70">
            <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium hover:bg-muted/50">
              <span>Developer options</span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-data-open:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-border/60 px-3 pb-3">
              <InsetPanel className="mt-3 flex flex-col gap-3 border-0 bg-transparent p-0">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <Label htmlFor="sc-debug">Debug logging</Label>
                    <p className="text-xs text-muted-foreground">
                      Include request traces in exports
                    </p>
                  </div>
                  <Switch id="sc-debug" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <Label htmlFor="sc-beta">Beta features</Label>
                    <p className="text-xs text-muted-foreground">
                      Try experimental tools early
                    </p>
                  </div>
                  <Switch id="sc-beta" defaultChecked />
                </div>
              </InsetPanel>
            </CollapsibleContent>
          </Collapsible>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
