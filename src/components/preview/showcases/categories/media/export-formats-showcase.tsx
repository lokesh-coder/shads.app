import { DownloadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const formats = [
  { id: "jpeg", label: "JPEG", desc: "Best for web and social", checked: true },
  { id: "webp", label: "WebP", desc: "Smaller file size", checked: true },
  { id: "png", label: "PNG", desc: "Lossless with transparency", checked: false },
  { id: "avif", label: "AVIF", desc: "Next-gen compression", checked: false },
]

export function ExportFormatsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Export formats</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            {formats.map((fmt) => (
              <div key={fmt.id} className="flex items-start gap-3">
                <Checkbox id={`sc-export-${fmt.id}`} defaultChecked={fmt.checked} />
                <Label htmlFor={`sc-export-${fmt.id}`} className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{fmt.label}</span>
                  <span className="text-xs font-normal text-muted-foreground">{fmt.desc}</span>
                </Label>
              </div>
            ))}
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <DownloadIcon data-icon="inline-start" />
          Export 12 images
        </Button>
      </CardFooter>
    </Card>
  )
}
