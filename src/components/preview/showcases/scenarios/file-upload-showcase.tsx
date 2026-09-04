import { FileIcon, UploadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  IconTile,
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function FileUploadShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Upload files</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col items-center gap-2 border-dashed py-6 text-center">
            <IconTile icon={UploadIcon} className="size-10" />
            <p className="text-sm font-medium">Drop files here</p>
            <p className="text-xs text-muted-foreground">PNG, PDF up to 10 MB</p>
            <Button variant="outline" size="sm">
              Browse files
            </Button>
          </InsetPanel>
          <ListRow
            leading={<IconTile icon={FileIcon} />}
            title="brand-guidelines.pdf"
            description="Uploading…"
            trailing={<span className="text-xs tabular-nums text-muted-foreground">72%</span>}
            className="rounded-lg border border-border/70 bg-muted/20"
          />
          <Progress value={72} className="h-1" />
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
