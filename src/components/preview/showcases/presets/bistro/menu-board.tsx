import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const courses = [
  { name: "Heirloom tomato soup", price: "$12", tag: "Starter" },
  { name: "Wood-fired sourdough", price: "$8", tag: "Starter" },
  { name: "Roasted market fish", price: "$28", tag: "Main" },
  { name: "Burnt honey panna cotta", price: "$11", tag: "Dessert" },
] as const

export function MenuBoardShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-heading text-lg font-semibold">Tonight&apos;s menu</p>
        <Badge variant="secondary">Seasonal</Badge>
      </div>
      <ul className="flex flex-col gap-3">
        {courses.map((course) => (
          <li
            key={course.name}
            className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-0"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug">{course.name}</p>
              <p className="text-xs text-muted-foreground">{course.tag}</p>
            </div>
            <span className="shrink-0 text-sm font-medium tabular-nums">
              {course.price}
            </span>
          </li>
        ))}
      </ul>
      <Button className="w-full">Reserve a table</Button>
    </div>
  )
}
