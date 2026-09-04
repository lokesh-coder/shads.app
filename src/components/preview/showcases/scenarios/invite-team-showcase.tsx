import { MailIcon, PlusIcon } from "lucide-react"

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Eyebrow,
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function InviteTeamShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Invite teammates</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="colleague@company.com"
              className="flex-1"
            />
            <Select defaultValue="editor">
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <InsetPanel className="border-dashed">
            <Eyebrow>Pending invites</Eyebrow>
            <ListRow
              className="-mx-2 mt-1"
              title="maya@studio.io"
              trailing={<Badge variant="outline">Editor</Badge>}
            />
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          <MailIcon data-icon="inline-start" />
          Send invite
        </Button>
        <Button variant="outline" className="w-full">
          <PlusIcon data-icon="inline-start" />
          Copy invite link
        </Button>
      </CardFooter>
    </Card>
  )
}
