import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const tasks = [
  { id: "1", label: "Finalize Q3 budget report", done: true },
  { id: "2", label: "Review pull request #842", done: true },
  { id: "3", label: "Send onboarding docs to new hire", done: false },
  { id: "4", label: "Update API rate limit docs", done: false },
  { id: "5", label: "Schedule 1:1 with design lead", done: false },
]

export function TaskOverviewShowcase() {
  const remaining = tasks.filter((t) => !t.done).length

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Due today</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/45"
            >
              <Checkbox id={task.id} defaultChecked={task.done} />
              <Label
                htmlFor={task.id}
                className={`flex-1 text-sm font-normal ${
                  task.done ? "text-muted-foreground line-through" : ""
                }`}
              >
                {task.label}
              </Label>
            </div>
          ))}
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <span className="tabular-nums">{remaining} tasks remaining</span>
        <span>·</span>
        <span className="tabular-nums">2 of 5 complete</span>
      </CardFooter>
    </Card>
  )
}
