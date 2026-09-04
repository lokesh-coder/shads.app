import { PlusIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

const team = [
  { name: "Sam Rivera", initials: "SR", role: "Lead designer" },
  { name: "Priya Nair", initials: "PN", role: "UX researcher" },
  { name: "Chris Wu", initials: "CW", role: "Frontend dev" },
  { name: "Morgan Lee", initials: "ML", role: "Product manager" },
]

export function AvatarsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Design squad</CardTitle>
        <CardDescription>4 members · 2 seats available</CardDescription>
        <CardAction>
          <Badge variant="outline" className="tabular-nums">
            6 seats
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex items-center -space-x-2">
            {team.map((member) => (
              <Avatar key={member.initials} className="ring-2 ring-card">
                <AvatarImage src="" alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            ))}
            <Button
              variant="outline"
              size="icon-sm"
              className="relative z-10 rounded-full"
            >
              <PlusIcon />
            </Button>
          </div>

          <div className="flex flex-col gap-0.5">
            {team.map((member) => (
              <ListRow
                key={member.initials}
                leading={
                  <Avatar size="sm">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                }
                title={member.name}
                description={member.role}
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button variant="outline" className="w-full">
          <PlusIcon data-icon="inline-start" />
          Invite member
        </Button>
      </CardFooter>
    </Card>
  )
}
