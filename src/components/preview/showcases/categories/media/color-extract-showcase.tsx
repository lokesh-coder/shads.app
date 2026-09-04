import { PaletteIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Eyebrow,
  InsetPanel,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const swatches = [
  { hex: "#E8A87C", name: "Sand" },
  { hex: "#C38D6A", name: "Terracotta" },
  { hex: "#85B8CB", name: "Sky" },
  { hex: "#3D5A6C", name: "Slate" },
  { hex: "#1A2F3D", name: "Deep navy" },
]

export function ColorExtractShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle className="flex items-center gap-2">
          <PaletteIcon className="size-4 text-muted-foreground" />
          Extracted palette
        </CardTitle>
        <CardDescription>From coastal-sunset.jpg</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MediaFrame tint="media" aspect="video" className="rounded-lg" />
          <div className="flex gap-1.5">
            {swatches.map((swatch) => (
              <div
                key={swatch.hex}
                className="h-10 flex-1 rounded-md ring-1 ring-foreground/10"
                style={{ backgroundColor: swatch.hex }}
                title={swatch.name}
              />
            ))}
          </div>
          <InsetPanel className="flex flex-col gap-1.5">
            <Eyebrow>Color values</Eyebrow>
            {swatches.map((swatch) => (
              <div key={swatch.hex} className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{swatch.name}</span>
                <span className="font-mono tabular-nums">{swatch.hex}</span>
              </div>
            ))}
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
