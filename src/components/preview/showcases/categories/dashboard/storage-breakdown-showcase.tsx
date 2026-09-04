import { HardDriveIcon } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Eyebrow,
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const categories = [
  { name: "Media assets", size: "48.2 GB", percent: 42, color: "bg-chart-1" },
  { name: "Database backups", size: "31.6 GB", percent: 28, color: "bg-chart-2" },
  { name: "Application logs", size: "18.4 GB", percent: 16, color: "bg-chart-3" },
  { name: "User uploads", size: "12.1 GB", percent: 11, color: "bg-chart-4" },
  { name: "Other", size: "3.7 GB", percent: 3, color: "bg-muted-foreground" },
]

export function StorageBreakdownShowcase() {
  const used = 114
  const total = 256

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Storage</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="p-2">
            <div className="flex h-3 overflow-hidden rounded-full">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className={`${cat.color} first:rounded-l-full last:rounded-r-full`}
                  style={{ width: `${cat.percent}%` }}
                />
              ))}
            </div>
          </InsetPanel>
          <div className="flex flex-col gap-0.5">
            {categories.map((cat) => (
              <ListRow
                key={cat.name}
                leading={<div className={`size-2 rounded-full ${cat.color}`} />}
                title={cat.name}
                trailing={
                  <span className="text-xs tabular-nums text-muted-foreground">{cat.size}</span>
                }
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <HardDriveIcon className="size-3.5" />
          <Eyebrow className="normal-case">{used} GB of {total} GB used</Eyebrow>
        </span>
        <span className="tabular-nums">{Math.round((used / total) * 100)}% full</span>
      </CardFooter>
    </Card>
  )
}
