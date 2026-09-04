import { useState } from "react"

import { BaseControls } from "@/components/controls/BaseControls"
import { BrandControls } from "@/components/controls/BrandControls"
import { FocusControls } from "@/components/controls/FocusControls"
import { GlobalPresetControls } from "@/components/controls/GlobalPresetControls"
import { LayersControls } from "@/components/controls/LayersControls"
import { MenusControls } from "@/components/controls/MenusControls"
import { OverlaysControls } from "@/components/controls/OverlaysControls"
import { RadiusControls } from "@/components/controls/RadiusControls"
import { SemanticMappingControls } from "@/components/controls/SemanticMappingControls"
import { SpacingControls } from "@/components/controls/SpacingControls"
import { SurfacesControls } from "@/components/controls/SurfacesControls"
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
import { cn } from "@/lib/utils"
import {
  BoxIcon,
  CircleIcon,
  CodeIcon,
  FocusIcon,
  GitBranchIcon,
  Layers2Icon,
  MenuIcon,
  PaletteIcon,
  PipetteIcon,
  SparklesIcon,
  SquareIcon,
  TypeIcon,
  WorkflowIcon,
  XIcon,
} from "lucide-react"

type ControlsRailProps = {
  config: ThemeConfig
  onChange: (config: ThemeConfig) => void
  isDark: boolean
  onDarkChange: (value: boolean) => void
}

type ControlSectionId =
  | "theme"
  | "spacing"
  | "radius"
  | "typography"
  | "surfaces"
  | "overlays"
  | "menus"
  | "focus"
  | "brand"
  | "base"
  | "semantic"
  | "layers"

const SECTIONS: {
  id: ControlSectionId
  label: string
  icon: typeof SparklesIcon
}[] = [
  { id: "theme", label: "Theme", icon: SparklesIcon },
  { id: "spacing", label: "Spacing", icon: SquareIcon },
  { id: "radius", label: "Radius", icon: CircleIcon },
  { id: "typography", label: "Typography", icon: TypeIcon },
  { id: "surfaces", label: "Surfaces", icon: BoxIcon },
  { id: "overlays", label: "Overlays", icon: WorkflowIcon },
  { id: "menus", label: "Menus", icon: MenuIcon },
  { id: "focus", label: "Focus", icon: FocusIcon },
  { id: "brand", label: "Brand", icon: PaletteIcon },
  { id: "base", label: "Base", icon: PipetteIcon },
  { id: "semantic", label: "Semantic", icon: GitBranchIcon },
  { id: "layers", label: "Layers", icon: Layers2Icon },
]

export function ControlsRail({
  config,
  onChange,
  isDark,
  onDarkChange,
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
      case "spacing":
        return (
          <SpacingControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "radius":
        return (
          <RadiusControls
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
      case "surfaces":
        return (
          <SurfacesControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "overlays":
        return (
          <OverlaysControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "menus":
        return (
          <MenusControls config={config} onChange={onChange} embedded={embedded} />
        )
      case "focus":
        return (
          <FocusControls config={config} onChange={onChange} embedded={embedded} />
        )
      case "brand":
        return (
          <BrandControls config={config} onChange={onChange} embedded={embedded} />
        )
      case "base":
        return (
          <BaseControls config={config} onChange={onChange} embedded={embedded} />
        )
      case "semantic":
        return (
          <SemanticMappingControls
            config={config}
            onChange={onChange}
            embedded={embedded}
          />
        )
      case "layers":
        return (
          <LayersControls
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
      <aside
        className={cn(
          "flex flex-col border-l border-border bg-background transition-[width] duration-200 ease-out",
          active ? "w-72" : "w-0 overflow-hidden border-l-0",
        )}
      >
        {active && activeSection ? (
          <>
            <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
              <h2 className="text-sm font-medium">{activeSection.label}</h2>
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

      <nav className="flex w-12 shrink-0 flex-col border-l border-border bg-background py-2">
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
                <TooltipContent side="left">{section.label}</TooltipContent>
              </Tooltip>
            )
          })}
        </div>

        <div className="mt-auto flex flex-col items-center gap-1 border-t border-border pt-2">
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
              <TooltipContent side="left">Export</TooltipContent>
            </Tooltip>
            <DialogContent
              showCloseButton
              className="flex h-[min(88vh,900px)] w-[min(96vw,1120px)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none"
            >
              <ExportPanel config={config} onReset={onChange} />
            </DialogContent>
          </Dialog>

          <AppSettingsDialog
            isDark={isDark}
            onDarkChange={onDarkChange}
          />
        </div>
      </nav>
    </div>
  )
}
