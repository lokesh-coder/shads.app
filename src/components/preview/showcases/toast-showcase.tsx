import { CheckCircle2Icon, InfoIcon, XCircleIcon } from "lucide-react"
import { toast } from "sonner"

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
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

const toastTypes = [
  {
    label: "Success",
    message: "Theme saved",
    icon: CheckCircle2Icon,
    action: () => toast.success("Theme saved"),
  },
  {
    label: "Error",
    message: "Export failed",
    icon: XCircleIcon,
    action: () => toast.error("Export failed"),
  },
  {
    label: "Message",
    message: "Syncing tokens…",
    icon: InfoIcon,
    action: () => toast.message("Syncing tokens…"),
  },
]

export function ToastShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Theme saved</CardTitle>
        <CardDescription>
          Trigger toast notifications to preview feedback
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="flex flex-col gap-0.5 p-1">
            {toastTypes.map(({ label, message, icon: Icon, action }) => (
              <ListRow
                key={label}
                leading={
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                }
                title={label}
                description={message}
                trailing={
                  <Button variant="outline" size="sm" onClick={action}>
                    Trigger
                  </Button>
                }
              />
            ))}
          </InsetPanel>

          <div className="flex flex-wrap gap-2">
            {toastTypes.map(({ label, action }) => (
              <Button key={label} variant="outline" size="sm" onClick={action}>
                {label}
              </Button>
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <p className="text-xs text-muted-foreground">
          Toasts appear in the bottom-right corner
        </p>
      </CardFooter>
    </Card>
  )
}
