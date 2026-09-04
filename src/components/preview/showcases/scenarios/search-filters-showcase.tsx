import { SearchIcon, SlidersHorizontalIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function SearchFiltersShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon-sm">
              <SlidersHorizontalIcon />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-7 w-auto gap-1 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="secondary" className="gap-1">
              Plan: Pro
              <button type="button" className="ml-0.5 opacity-60 hover:opacity-100">
                ×
              </button>
            </Badge>
            <Badge variant="outline" className="cursor-pointer text-xs hover:bg-muted/45">
              Clear all
            </Badge>
          </div>
          <Separator />
          <Eyebrow className="normal-case">24 results · sorted by newest</Eyebrow>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
