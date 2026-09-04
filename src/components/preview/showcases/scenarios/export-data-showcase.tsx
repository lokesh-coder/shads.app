import { DownloadIcon, FileSpreadsheetIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Eyebrow,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ExportDataShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Export data</CardTitle>
        <CardDescription>Download a copy of your workspace</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex flex-col gap-1.5">
            <Label>Format</Label>
            <Select defaultValue="csv">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV (.csv)</SelectItem>
                <SelectItem value="json">JSON (.json)</SelectItem>
                <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Eyebrow>Include</Eyebrow>
            {["Projects", "Team members", "Billing history"].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Checkbox id={`sc-export-${item}`} defaultChecked />
                <Label htmlFor={`sc-export-${item}`} className="text-sm font-normal">
                  {item}
                </Label>
              </div>
            ))}
          </div>
          <InsetPanel className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileSpreadsheetIcon className="size-4 shrink-0" />
            Last export: Feb 28, 2026 · 2.4 MB
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          <DownloadIcon data-icon="inline-start" />
          Export
        </Button>
      </CardFooter>
    </Card>
  )
}
