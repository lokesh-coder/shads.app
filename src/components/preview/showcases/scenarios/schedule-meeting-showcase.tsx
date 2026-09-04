import { CalendarIcon, ClockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ScheduleMeetingShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Schedule a call</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sc-meet-title">Meeting title</FieldLabel>
              <Input id="sc-meet-title" defaultValue="Product demo" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="sc-meet-date">
                  <CalendarIcon className="mr-1 inline size-3.5" />
                  Date
                </FieldLabel>
                <Input id="sc-meet-date" type="date" defaultValue="2026-03-10" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sc-meet-time">
                  <ClockIcon className="mr-1 inline size-3.5" />
                  Time
                </FieldLabel>
                <Input id="sc-meet-time" type="time" defaultValue="14:00" />
              </Field>
            </div>
            <Field>
              <FieldLabel>Duration</FieldLabel>
              <Select defaultValue="30">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Send calendar invite
        </Button>
      </CardFooter>
    </Card>
  )
}
