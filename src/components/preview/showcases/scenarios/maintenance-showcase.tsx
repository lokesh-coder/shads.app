import { WrenchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function MaintenanceShowcase() {
  return (
    <Card className={showcaseCard.warning}>
      <CardContent className="py-6">
        <ShowcaseContent className="items-center text-center">
          <IconTile icon={WrenchIcon} status="warning" className="size-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">We'll be back soon</p>
            <p className="text-xs text-muted-foreground">
              Upgrading infrastructure. Expected downtime: ~30 minutes.
            </p>
          </div>
          <InsetPanel className="border-amber-500/20 bg-amber-500/5 text-xs">
            <span className="text-muted-foreground">Status: </span>
            <span className="font-medium text-amber-700 dark:text-amber-400">
              In progress · ETA 2:45 PM
            </span>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-amber-500/15 bg-amber-500/[0.03]">
        <Button variant="outline" className="w-full">
          Subscribe to updates
        </Button>
      </CardFooter>
    </Card>
  )
}
