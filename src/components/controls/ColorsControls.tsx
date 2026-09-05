import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { ColorField } from "@/components/controls/ColorField"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { setLayerEnabled } from "@/lib/chrome-layer-controls"
import {
  applyBrandPreset,
  syncBrandRamp,
  type BrandPresetName,
  type BrandRoles,
  type ChartPalette,
} from "@/lib/theme-config"
import { brandPresetCatalog } from "@/tokens/brand"

import { ControlSection } from "./ControlSection"
import type { ControlPanelProps } from "./control-panel-types"

export function ColorsControls({ config, onChange, embedded }: ControlPanelProps) {
  const [chartsOpen, setChartsOpen] = useState(false)

  const updateRoles = (roles: Partial<BrandRoles>) => {
    onChange(
      syncBrandRamp({
        ...config,
        brandRoles: { ...config.brandRoles, ...roles },
      }),
    )
  }

  const updateChartColor = (index: number, color: string) => {
    const chartPalette = [...config.chartPalette] as ChartPalette
    chartPalette[index] = color as ChartPalette[number]
    onChange({ ...config, chartPalette })
  }

  return (
    <ControlSection title="Colors" embedded={embedded}>
      <p className="text-xs text-muted-foreground">
        Button colors and chart accents. Pick a palette below or set your own.
      </p>

      <div className="flex flex-col gap-1.5">
        <Label>Color system</Label>
        <Select
          value={config.layers.brandSemantic ? "ramps" : "shadcn"}
          onValueChange={(value) => {
            if (!value) return
            onChange(
              setLayerEnabled(
                config,
                "brandSemantic",
                value === "ramps",
              ),
            )
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ramps">Custom color ramps</SelectItem>
            <SelectItem value="shadcn">Stock shadcn (OKLCH)</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          {config.layers.brandSemantic
            ? "Your brand and neutral ramps drive buttons, borders, and backgrounds."
            : "Uses vanilla shadcn OKLCH tokens — switch to ramps for full customization."}
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Palette shortcuts</Label>
        <div className="flex flex-wrap gap-2">
          {brandPresetCatalog.map((preset) => (
            <Tooltip key={preset.id}>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      onChange(
                        applyBrandPreset(config, preset.id as BrandPresetName),
                      )
                    }
                  />
                }
              >
                {preset.label}
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-56">
                <p>{preset.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <ColorField
        label="Button color"
        hint="Primary actions, links, and active states"
        value={config.brandRoles.primary}
        onChange={(primary) =>
          updateRoles({ primary: primary as BrandRoles["primary"] })
        }
      />

      <ColorField
        label="Button text"
        hint="Text and icons on primary buttons"
        value={config.brandRoles.primaryForeground}
        onChange={(primaryForeground) =>
          updateRoles({
            primaryForeground:
              primaryForeground as BrandRoles["primaryForeground"],
          })
        }
      />

      <ColorField
        label="Accent"
        hint="Charts, tags, and KPI highlights — leave empty to skip"
        value={config.brandRoles.highlight ?? ""}
        onChange={(highlight) =>
          updateRoles({
            highlight: highlight
              ? (highlight as BrandRoles["highlight"])
              : null,
          })
        }
      />

      <Collapsible open={chartsOpen} onOpenChange={setChartsOpen}>
        <CollapsibleTrigger
          className="flex w-full items-center justify-between rounded-lg border border-border/80 px-3 py-2 text-left text-sm font-medium hover:bg-muted/40"
        >
          Chart colors
          <ChevronDownIcon
            className={`size-4 text-muted-foreground transition-transform ${chartsOpen ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-2 pt-2">
          <p className="text-xs text-muted-foreground">
            Five series colors for charts — independent from your button color.
          </p>
          {config.chartPalette.map((color, index) => (
            <ColorField
              key={index}
              label={`Series ${index + 1}`}
              value={color}
              onChange={(next) => updateChartColor(index, next)}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </ControlSection>
  )
}
