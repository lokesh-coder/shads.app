import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  GridIcon,
  ListIcon,
  RowsIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Eyebrow,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function ButtonGroupsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Project view</CardTitle>
        <CardDescription>Layout and alignment controls</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            <Eyebrow>View mode</Eyebrow>
            <ToggleGroup defaultValue={["list"]} spacing={0} variant="outline">
              <ToggleGroupItem value="list" aria-label="List view">
                <ListIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <GridIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="rows" aria-label="Rows view">
                <RowsIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </InsetPanel>

          <InsetPanel className="flex flex-col gap-3">
            <Eyebrow>Text alignment</Eyebrow>
            <ToggleGroup defaultValue={["left"]} spacing={0} variant="outline">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </InsetPanel>

          <InsetPanel className="flex flex-col gap-3">
            <Eyebrow>Time range</Eyebrow>
            <ToggleGroup
              defaultValue={["week"]}
              variant="outline"
              className="flex-wrap"
            >
              <ToggleGroupItem value="day">Day</ToggleGroupItem>
              <ToggleGroupItem value="week">Week</ToggleGroupItem>
              <ToggleGroupItem value="month">Month</ToggleGroupItem>
              <ToggleGroupItem value="year">Year</ToggleGroupItem>
            </ToggleGroup>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
