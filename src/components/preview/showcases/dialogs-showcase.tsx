import { PencilIcon, Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function DialogsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={PencilIcon} />
          <div>
            <CardTitle>Project settings</CardTitle>
            <CardDescription>Rename or delete this workspace</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              Workspace: <span className="font-medium text-foreground">Acme Design</span>
            </p>
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                <PencilIcon data-icon="inline-start" />
                Rename project
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename project</DialogTitle>
                  <DialogDescription>
                    This updates the name across your workspace.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="sc-rename">Project name</Label>
                  <Input id="sc-rename" defaultValue="Acme Design" />
                </div>
                <Button className="w-fit">Save</Button>
              </DialogContent>
            </Dialog>
          </InsetPanel>

          <InsetPanel className="flex flex-col gap-3 border-destructive/20 bg-destructive/[0.03]">
            <div className="flex items-center gap-2">
              <IconTile icon={Trash2Icon} className="border-destructive/30" />
              <p className="text-xs text-muted-foreground">
                Permanently delete all projects and data
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="destructive" />}>
                Delete workspace
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete workspace?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <p className="text-xs text-muted-foreground">
          Last modified 3 days ago
        </p>
      </CardFooter>
    </Card>
  )
}
