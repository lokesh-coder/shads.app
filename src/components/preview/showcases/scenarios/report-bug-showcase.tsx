import { BugIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ReportBugShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-center gap-3">
          <IconTile icon={BugIcon} />
          <CardTitle>Report a bug</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex flex-col gap-1.5">
            <Label>What happened?</Label>
            <Textarea
              placeholder="Describe what you expected vs what actually happened..."
              className="min-h-20 resize-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Severity</Label>
            <Select defaultValue="medium">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low — cosmetic issue</SelectItem>
                <SelectItem value="medium">Medium — feature broken</SelectItem>
                <SelectItem value="high">High — blocking work</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          <BugIcon data-icon="inline-start" />
          Submit report
        </Button>
      </CardFooter>
    </Card>
  )
}
