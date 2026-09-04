import { LaptopIcon, MonitorIcon, SmartphoneIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
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

const sessions = [
  { device: "MacBook Pro", icon: LaptopIcon, location: "San Francisco", current: true },
  { device: "iPhone 15", icon: SmartphoneIcon, location: "San Francisco", current: false },
  { device: "Chrome · Windows", icon: MonitorIcon, location: "Austin, TX", current: false },
]

export function SessionListShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Active sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {sessions.map((s) => (
            <ListRow
              key={s.device}
              leading={<IconTile icon={s.icon} status={s.current ? "success" : "neutral"} />}
              title={s.device}
              description={s.location}
              trailing={
                s.current ? (
                  <Badge variant="secondary" className="text-xs">This device</Badge>
                ) : (
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    Revoke
                  </Button>
                )
              }
            />
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Sign out all other sessions
        </Button>
      </CardFooter>
    </Card>
  )
}
