import { FileImageIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const uploads = [
  { name: "hero-banner.png", progress: 100, done: true },
  { name: "product-shot-01.jpg", progress: 64, done: false },
  { name: "team-photo.jpg", progress: 18, done: false },
]

export function UploadQueueShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Upload queue</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            {uploads.map((file) => (
              <div key={file.name} className="flex items-start gap-3">
                <IconTile icon={FileImageIcon} />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{file.name}</p>
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      {file.done ? "Done" : `${file.progress}%`}
                    </span>
                  </div>
                  <Progress value={file.progress} className="h-1" />
                </div>
                {!file.done && (
                  <Button variant="ghost" size="icon-sm" className="shrink-0">
                    <XIcon />
                  </Button>
                )}
              </div>
            ))}
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          2 of 3 files uploading · 48 MB remaining
        </p>
      </CardFooter>
    </Card>
  )
}
