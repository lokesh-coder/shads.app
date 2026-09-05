import { CheckIcon, UserPlusIcon } from "lucide-react"

import { PersonAvatar } from "@/components/media/person-avatar"
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
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const people = [
  { name: "Maya Chen", initials: "MC", assigned: true },
  { name: "Jordan Lee", initials: "JL", assigned: false },
  { name: "Sam Park", initials: "SP", assigned: false },
]

export function AssigneePickerShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Assign task</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <Input placeholder="Search team..." className="h-8 text-sm" />
          <div className="flex flex-col gap-0.5">
            {people.map((person) => (
              <ListRow
                key={person.name}
                leading={
                  <PersonAvatar name={person.name} seed={person.name} size="sm" />
                }
                title={person.name}
                trailing={
                  person.assigned ? (
                    <CheckIcon className="size-4 text-primary" />
                  ) : null
                }
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-between border-t border-border/60 bg-muted/20">
        <Badge variant="outline">Due Friday</Badge>
        <Button size="sm">
          <UserPlusIcon data-icon="inline-start" />
          Assign
        </Button>
      </CardFooter>
    </Card>
  )
}
