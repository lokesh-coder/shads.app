import { LayersIcon, PaletteIcon, ZapIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const features = [
  {
    icon: PaletteIcon,
    title: "Brand tokens",
    desc: "Map your palette to semantic roles in one click.",
  },
  {
    icon: LayersIcon,
    title: "Override layers",
    desc: "Focus, surfaces, menus — tune without touching components.",
  },
  {
    icon: ZapIcon,
    title: "Live preview",
    desc: "See every change across real UI patterns instantly.",
  },
]

export function FeatureHighlightShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Why teams switch</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {features.map(({ icon, title, desc }) => (
            <ListRow
              key={title}
              leading={<IconTile icon={icon} className="border-primary/20 bg-primary/5" />}
              title={title}
              description={desc}
            />
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
