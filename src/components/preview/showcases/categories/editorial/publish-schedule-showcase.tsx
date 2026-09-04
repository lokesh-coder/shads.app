import { CalendarIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function PublishScheduleShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader>
        <CardTitle className="text-lg">Schedule publish</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-5">
          <InsetPanel className="p-4">
            <p className="text-sm font-medium">Annual report deep dive</p>
            <p className="mt-1 text-xs text-muted-foreground">Draft · 2,400 words</p>
          </InsetPanel>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="pub-date" className="text-xs">
                Date
              </Label>
              <div className="relative">
                <CalendarIcon className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input id="pub-date" defaultValue="2026-09-08" className="pl-8" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="pub-time" className="text-xs">
                Time
              </Label>
              <div className="relative">
                <ClockIcon className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input id="pub-time" defaultValue="09:00 AM" className="pl-8" />
              </div>
            </div>
          </div>
          <Badge variant="outline" className="w-fit">
            Timezone: America/New_York
          </Badge>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Save draft
        </Button>
        <Button size="sm" className="flex-1">
          Schedule
        </Button>
      </CardFooter>
    </Card>
  )
}
