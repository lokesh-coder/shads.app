import { SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function InputsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Contact us</CardTitle>
        <CardDescription>We'll get back to you within 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sc-name">Name</Label>
              <Input id="sc-name" placeholder="Jordan Lee" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sc-email">Email</Label>
              <Input
                id="sc-email"
                type="email"
                placeholder="jordan@studio.io"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Role</Label>
            <Select defaultValue="designer">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="pm">Product manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sc-note">Note</Label>
            <Textarea
              id="sc-note"
              placeholder="Anything we should know?"
              className="min-h-16 resize-none"
            />
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          <SendIcon data-icon="inline-start" />
          Send message
        </Button>
      </CardFooter>
    </Card>
  )
}
