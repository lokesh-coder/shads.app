import { ScanFaceIcon } from "lucide-react"

import { PersonAvatar } from "@/components/media/person-avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ListRow,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const faces = [
  { name: "Alex Rivera", role: "Subject", confidence: 99 },
  { name: "Maya Chen", role: "Background", confidence: 87 },
  { name: "Unknown", role: "Partial", confidence: 62 },
]

export function FaceDetectionShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Face detection</CardTitle>
        <CardAction>
          <Badge variant="outline" className="gap-1 text-xs">
            <ScanFaceIcon className="size-3" />
            3 found
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MediaFrame tint="media" aspect="video" className="rounded-lg" />
          <div className="flex flex-col gap-0.5">
            {faces.map((face) => (
              <ListRow
                key={face.name}
                leading={
                  <PersonAvatar name={face.name} seed={face.name} className="size-8" />
                }
                title={face.name}
                description={face.role}
                trailing={
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {face.confidence}%
                  </span>
                }
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
