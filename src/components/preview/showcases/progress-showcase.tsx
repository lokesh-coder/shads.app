import { UploadCloudIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function ProgressShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={UploadCloudIcon} />
          <div>
            <CardTitle>Uploading assets</CardTitle>
            <CardDescription>Brand kit · 24 files</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-4">
            <Progress value={72}>
              <ProgressLabel>Logos & icons</ProgressLabel>
              <ProgressValue />
            </Progress>
            <Progress value={38}>
              <ProgressLabel>Photography</ProgressLabel>
              <ProgressValue />
            </Progress>
            <Progress value={100}>
              <ProgressLabel>Typography</ProgressLabel>
              <ProgressValue />
            </Progress>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
