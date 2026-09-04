import { GiftIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function LoyaltyRewardsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconTile icon={GiftIcon} className="border-primary/30" />
              <div>
                <p className="text-sm font-medium">Rewards balance</p>
                <p className="text-xs text-muted-foreground">Gold member since 2024</p>
              </div>
            </div>
            <Badge variant="secondary" className="gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +120 this month
            </Badge>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl font-semibold tabular-nums">2,480</p>
            <p className="text-xs text-muted-foreground">points · $24.80 value</p>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress to Platinum</span>
              <span className="tabular-nums">2,480 / 5,000</span>
            </div>
            <Progress value={50} className="h-1.5" />
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Redeem points</Button>
      </CardFooter>
    </Card>
  )
}
