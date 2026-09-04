import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CourseCardShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-heading text-lg font-semibold">Intro to data viz</p>
          <p className="text-sm text-muted-foreground">6 lessons · 2h 40m</p>
        </div>
        <Badge>In progress</Badge>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>3 of 6 complete</span>
        </div>
        <Progress value={50} />
      </div>
      <Button className="w-full">Continue lesson</Button>
    </div>
  )
}
