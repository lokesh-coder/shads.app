import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ReservationCardShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-heading text-lg font-semibold">Book a table</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bistro-date">Date</Label>
          <Input id="bistro-date" defaultValue="Sat, Sep 12" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bistro-time">Time</Label>
          <Input id="bistro-time" defaultValue="7:30 PM" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="bistro-guests">Guests</Label>
        <Input id="bistro-guests" defaultValue="2 people" />
      </div>
      <Button className="w-full">Confirm reservation</Button>
    </div>
  )
}
