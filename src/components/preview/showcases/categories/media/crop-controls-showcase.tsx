import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Eyebrow,
  InsetPanel,
  MediaFrame,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function CropControlsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Crop image</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <MediaFrame tint="media" aspect="video" className="rounded-lg ring-1 ring-primary/20" />
          <InsetPanel className="space-y-2">
            <Eyebrow>Aspect ratio</Eyebrow>
            <ToggleGroup defaultValue={["16:9"]} variant="outline" className="w-full">
              <ToggleGroupItem value="free" className="flex-1 text-xs">Free</ToggleGroupItem>
              <ToggleGroupItem value="1:1" className="flex-1 text-xs">1:1</ToggleGroupItem>
              <ToggleGroupItem value="4:3" className="flex-1 text-xs">4:3</ToggleGroupItem>
              <ToggleGroupItem value="16:9" className="flex-1 text-xs">16:9</ToggleGroupItem>
            </ToggleGroup>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">Reset</Button>
        <Button size="sm" className="flex-1">Apply crop</Button>
      </CardFooter>
    </Card>
  )
}
