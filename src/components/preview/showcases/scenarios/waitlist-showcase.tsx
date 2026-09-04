import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  IconTile,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function WaitlistShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={`${showcaseHeader.form} text-center`}>
        <IconTile icon={SparklesIcon} className="mx-auto border-primary/20 bg-primary/5" />
        <Badge variant="secondary" className="mx-auto w-fit">
          Coming Q2 2026
        </Badge>
        <CardTitle>AI-powered analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <p className="text-center text-xs text-muted-foreground">
            Be first to try automated insights for your dashboard.
          </p>
          <Input type="email" placeholder="Work email" />
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-3 border-t border-primary/10 bg-primary/[0.02]">
        <Button className="w-full">
          Join waitlist
        </Button>
        <MetricValue
          label="Queue position"
          value="847"
          change="people ahead"
          className="items-center text-center"
        />
      </CardFooter>
    </Card>
  )
}
