import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AppointmentCardShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-heading text-lg font-semibold">Annual check-up</p>
          <p className="text-sm text-muted-foreground">Dr. Patel · Sep 18, 10:30 AM</p>
        </div>
        <Badge variant="secondary">Confirmed</Badge>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
        <li>Bring current medication list</li>
        <li>Arrive 10 minutes early for intake</li>
      </ul>
      <div className="flex gap-2">
        <Button size="sm" className="flex-1">
          Reschedule
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          Directions
        </Button>
      </div>
    </div>
  )
}
