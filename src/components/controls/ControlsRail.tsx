import { useState } from "react"

import { AdvancedControls } from "@/components/controls/AdvancedControls"
import { ColorsControls } from "@/components/controls/ColorsControls"
import { GlobalPresetControls } from "@/components/controls/GlobalPresetControls"
import { LayoutFeelControls } from "@/components/controls/LayoutFeelControls"
import { TypographyControls } from "@/components/controls/TypographyControls"
import { ExportPanel } from "@/components/export/ExportPanel"
import { AppSettingsDialog } from "@/components/settings/AppSettingsDialog"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { ThemeConfig } from "@/lib/theme-config"
import { SITE } from "@/lib/site-meta"
import { cn } from "@/lib/utils"
import {
  BoxIcon,
  CodeIcon,
  PaletteIcon,
  Share2Icon,
  SlidersHorizontalIcon,
  SparklesIcon,
  TypeIcon,
  XIcon,
} from "lucide-react"

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.178 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.021C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

type ControlsRailProps = {
  config: ThemeConfig
  onChange: (config: ThemeConfig) => void
  isDark: boolean
  onDarkChange: (value: boolean) => void
  onShare: () => void | Promise<void>
}

type ControlSectionId =
  | "theme"
  | "colors"
  | "layout"
  | "typography"
  | "advanced"

const SECTIONS: {
  id: ControlSectionId
  label: string
  icon: typeof SparklesIcon
}[] = [
  { id: "theme", label: "Theme", icon: SparklesIcon },
  { id: "colors", label: "Colors", icon: PaletteIcon },
  { id: "layout", label: "Layout & feel", icon: BoxIcon },
  { id: "typography", label: "Type", icon: TypeIcon },
  { id: "advanced", label: "Advanced", icon: SlidersHorizontalIcon },
]

export function ControlsRail({
  config,
  onChange,
  isDark,
  onDarkChange,
  onShare,
}: ControlsRailProps) {
  const [active, setActive] = useState<ControlSectionId | null>("theme")

  const renderPanel = () => {
    const embedded = true
    switch (active) {
      case "theme":
        return (
          <GlobalPresetControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "colors":
        return (
          <ColorsControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "layout":
        return (
          <LayoutFeelControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "typography":
        return (
          <TypographyControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "advanced":
        return (
          <AdvancedControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      default:
        return null
    }
  }

  const activeSection = SECTIONS.find((section) => section.id === active)

  return (
    <div className="flex h-full shrink-0">
      <nav className="flex w-[3.25rem] shrink-0 flex-col border-r border-border bg-background py-2">
        <a
          href="/"
          className="mb-2 flex flex-col items-center gap-1 border-b border-border px-1 pb-3"
          aria-label={SITE.name}
        >
          <img src="/favicon.svg" alt="" className="size-7" />
          <span className="text-[9px] font-semibold tracking-tight text-foreground/80">
            shads
          </span>
        </a>

        <div className="flex flex-col items-center gap-1">
          {SECTIONS.map((section) => {
            const Icon = section.icon
            const isActive = active === section.id
            return (
              <Tooltip key={section.id}>
                <TooltipTrigger
                  render={
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      size="icon-sm"
                      className={cn("size-9", isActive && "bg-muted")}
                      onClick={() =>
                        setActive((current) =>
                          current === section.id ? null : section.id,
                        )
                      }
                      aria-label={section.label}
                    />
                  }
                >
                  <Icon />
                </TooltipTrigger>
                <TooltipContent side="right">{section.label}</TooltipContent>
              </Tooltip>
            )
          })}
        </div>

        <div className="mt-auto flex flex-col items-center gap-1 border-t border-border pt-2">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="size-9"
                  aria-label="Share link"
                  onClick={() => void onShare()}
                />
              }
            >
              <Share2Icon />
            </TooltipTrigger>
            <TooltipContent side="right">Share link</TooltipContent>
          </Tooltip>

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
                        aria-label="Export theme"
                      />
                    }
                  />
                }
              >
                <CodeIcon />
              </TooltipTrigger>
              <TooltipContent side="right">Export</TooltipContent>
            </Tooltip>
            <DialogContent
              showCloseButton
              className="flex h-[min(88vh,900px)] w-[min(96vw,1120px)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none"
            >
              <ExportPanel config={config} onReset={onChange} />
            </DialogContent>
          </Dialog>

          <AppSettingsDialog isDark={isDark} onDarkChange={onDarkChange} />

          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                />
              }
            >
              <GitHubMark className="size-4" />
            </TooltipTrigger>
            <TooltipContent side="right">GitHub</TooltipContent>
          </Tooltip>
        </div>
      </nav>

      <aside
        className={cn(
          "flex flex-col border-r border-border bg-background transition-[width] duration-200 ease-out",
          active ? "w-72" : "w-0 overflow-hidden border-r-0",
        )}
      >
        {active && activeSection ? (
          <>
            <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
              <div>
                <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                  {SITE.name}
                </p>
                <h2 className="text-sm font-medium">{activeSection.label}</h2>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setActive(null)}
                aria-label="Close panel"
              >
                <XIcon />
              </Button>
            </div>
            <ScrollArea className="min-h-0 flex-1">
              <div className="p-3">{renderPanel()}</div>
            </ScrollArea>
          </>
        ) : null}
      </aside>
    </div>
  )
}
