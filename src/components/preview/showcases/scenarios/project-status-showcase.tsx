import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const tasks = [
  { title: "Update landing page copy", status: "In progress", priority: "High" },
  { title: "Fix checkout bug", status: "Review", priority: "Urgent" },
  { title: "Design system audit", status: "Backlog", priority: "Low" },
]

const statusColor: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "In progress": "secondary",
  Review: "default",
  Backlog: "outline",
}

export function ProjectStatusShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>In progress</CardTitle>
        <CardAction>
          <Badge variant="outline" className="tabular-nums">
            {tasks.length}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex flex-col gap-0.5">
            {tasks.map((task) => (
              <ListRow
                key={task.title}
                title={task.title}
                description={task.priority}
                trailing={
                  <Badge
                    variant={statusColor[task.status] ?? "outline"}
                    className={`text-xs ${task.priority === "Urgent" ? "border-destructive/30 text-destructive" : ""}`}
                  >
                    {task.status}
                  </Badge>
                }
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Select defaultValue="sprint-12">
              <SelectTrigger className="h-8 flex-1 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sprint-12">Sprint 12</SelectItem>
                <SelectItem value="sprint-13">Sprint 13</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              Add task
            </Button>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
