import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SettingsIcon } from "lucide-react"

type AppSettingsDialogProps = {
  isDark: boolean
  onDarkChange: (value: boolean) => void
}

export function AppSettingsDialog({
  isDark,
  onDarkChange,
}: AppSettingsDialogProps) {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger
          render={
            <DialogTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="size-9"
                  aria-label="Settings"
                />
              }
            />
          }
        >
          <SettingsIcon />
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
      <DialogContent className="max-w-sm gap-0 p-0 sm:max-w-sm">
        <DialogHeader className="border-b border-border px-5 py-4 text-left">
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Preview appearance. Gallery layout follows the active style preset.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-5 px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-0.5">
              <Label htmlFor="dark-mode-toggle">Dark mode</Label>
              <p className="text-xs text-muted-foreground">
                Preview the theme in dark or light mode.
              </p>
            </div>
            <Switch
              id="dark-mode-toggle"
              checked={isDark}
              onCheckedChange={onDarkChange}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
