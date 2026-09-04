import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import {
  IconTile,
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

const displayOptions = [
  { id: "compact", label: "Compact mode", desc: "Reduce spacing in lists", on: true },
  { id: "animations", label: "Animations", desc: "Motion and transitions", on: true },
  { id: "sidebar", label: "Collapsed sidebar", desc: "Start with nav hidden", on: false },
]

export function SheetShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={MonitorIcon} />
          <div>
            <CardTitle>Display settings</CardTitle>
            <CardDescription>
              Adjust how the app looks on your device
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex items-center gap-3">
            <SunIcon className="size-4 text-muted-foreground" />
            <div className="h-px flex-1 bg-border/60" />
            <MoonIcon className="size-4 text-muted-foreground" />
          </InsetPanel>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" className="w-full" />}>
              Open panel
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Display</SheetTitle>
                <SheetDescription>Adjust how the app looks.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {displayOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center justify-between gap-3 py-2"
                  >
                    <div className="flex flex-col gap-0.5">
                      <Label className="text-sm">{option.label}</Label>
                      <p className="text-xs text-muted-foreground">
                        {option.desc}
                      </p>
                    </div>
                    <Switch
                      id={`sc-sheet-${option.id}`}
                      defaultChecked={option.on}
                    />
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <ListRow
          className="w-full px-0 hover:bg-transparent"
          title="Theme"
          description="System preference"
          trailing={<span className="text-xs text-muted-foreground">Auto</span>}
        />
      </CardFooter>
    </Card>
  )
}
