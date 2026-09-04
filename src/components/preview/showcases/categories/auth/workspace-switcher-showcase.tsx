import { CheckIcon, PlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const workspaces = [
  { name: "Studio Labs", initials: "SL", plan: "Pro", active: true },
  { name: "Side Project", initials: "SP", plan: "Free", active: false },
  { name: "Client — Northwind", initials: "NW", plan: "Team", active: false },
]

export function WorkspaceSwitcherShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Switch workspace</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          {workspaces.map((ws) => (
            <ListRow
              key={ws.name}
              leading={
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs">{ws.initials}</AvatarFallback>
                </Avatar>
              }
              title={ws.name}
              description={`${ws.plan} plan`}
              trailing={ws.active ? <CheckIcon className="size-4 text-primary" /> : null}
              className={cn(
                ws.active && "bg-muted/50 ring-1 ring-primary/20",
              )}
            />
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <PlusIcon data-icon="inline-start" />
          Create workspace
        </Button>
      </CardFooter>
    </Card>
  )
}
