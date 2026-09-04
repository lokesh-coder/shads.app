import { Trash2Icon } from "lucide-react"

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
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function AlertDialogShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={Trash2Icon} className="border-destructive/30" />
          <div>
            <CardTitle>Destructive action</CardTitle>
            <CardDescription>Confirm before irreversible changes</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-3 border-destructive/20 bg-destructive/[0.03]">
            <p className="text-sm text-muted-foreground">
              Removing this project deletes files, comments, and history for all
              members.
            </p>
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="destructive" />}>
                Delete project
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Acme Design?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. All data will be permanently
                    removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete project</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
