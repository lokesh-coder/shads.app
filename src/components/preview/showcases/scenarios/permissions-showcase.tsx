import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const permissions = [
  { action: "View projects", member: true, admin: true },
  { action: "Edit content", member: true, admin: true },
  { action: "Manage billing", member: false, admin: true },
  { action: "Delete workspace", member: false, admin: true },
]

export function PermissionsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Role permissions</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="p-0">
            <div className="grid grid-cols-[1fr_4rem_4rem] gap-2 border-b border-border/60 px-3 py-2">
              <Eyebrow className="normal-case">Permission</Eyebrow>
              <Eyebrow className="text-center normal-case">Member</Eyebrow>
              <Eyebrow className="text-center normal-case">Admin</Eyebrow>
            </div>
            {permissions.map((row, i) => (
              <div key={row.action}>
                {i > 0 ? <Separator /> : null}
                <div className="grid grid-cols-[1fr_4rem_4rem] items-center gap-2 px-3 py-2 transition-colors hover:bg-muted/45">
                  <span className="text-sm">{row.action}</span>
                  <div className="flex justify-center">
                    <Checkbox checked={row.member} disabled />
                  </div>
                  <div className="flex justify-center">
                    <Checkbox checked={row.admin} disabled />
                  </div>
                </div>
              </div>
            ))}
          </InsetPanel>
          <div className="flex items-center gap-2.5">
            <Checkbox id="sc-perm-inherit" defaultChecked />
            <Label htmlFor="sc-perm-inherit" className="text-xs font-normal">
              Inherit permissions from parent folder
            </Label>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
