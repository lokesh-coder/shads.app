import { MoreHorizontalIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function TeamMemberShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Team members</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          <ListRow
            leading={
              <Avatar>
                <AvatarImage src="" alt="Maya" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            }
            title="Maya Chen"
            description="maya@studio.io"
            trailing={
              <div className="flex items-center gap-1">
                <Select defaultValue="admin">
                  <SelectTrigger className="h-7 w-24 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" />}>
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Resend invite</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            }
          />
          <Separator className="my-1" />
          <ListRow
            leading={
              <Avatar size="sm">
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
            }
            title="Jordan Rivera"
            description="Joined 2 days ago"
            trailing={<Badge variant="outline">Pending</Badge>}
          />
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
