import { ApertureIcon, CameraIcon, MapPinIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  InsetPanel,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const exif = [
  { label: "Camera", value: "Canon EOS R5" },
  { label: "Lens", value: "RF 24-70mm f/2.8" },
  { label: "ISO", value: "400" },
  { label: "Shutter", value: "1/250s" },
  { label: "Aperture", value: "f/4.0" },
]

export function AlbumMetadataShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <MediaFrame tint="media" aspect="wide" className="rounded-none" />
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Golden hour walk</CardTitle>
        <CardDescription>
          <span className="flex items-center gap-1 text-xs">
            <MapPinIcon className="size-3" />
            Big Sur, California · Oct 12, 2025
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1 text-xs">
              <CameraIcon className="size-3" />
              24 photos
            </Badge>
            <Badge variant="outline" className="gap-1 text-xs">
              <ApertureIcon className="size-3" />
              RAW + JPEG
            </Badge>
          </div>
          <Separator />
          <InsetPanel>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {exif.map((item) => (
                <div key={item.label}>
                  <dt className="text-muted-foreground">{item.label}</dt>
                  <dd className="font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
