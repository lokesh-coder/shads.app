import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { ThemeConfig } from "@/lib/theme-config"

import { ControlSection } from "./ControlSection"
import { SemanticMappingPanel } from "./SemanticMappingControls"
import type { ControlPanelProps } from "./control-panel-types"

type LayerToggle = {
  key: keyof ThemeConfig["layers"]
  label: string
  description: string
}

const EXPORT_LAYER_TOGGLES: LayerToggle[] = [
  {
    key: "brandSemantic",
    label: "Semantic color mapping",
    description: "Maps shadcn tokens to your color ramps",
  },
  {
    key: "surfaces",
    label: "Surface elevation",
    description: "Card shadows and ring treatments",
  },
  {
    key: "density",
    label: "Spacing & control size",
    description: "Padding, button heights, table density",
  },
  {
    key: "focus",
    label: "Focus rings",
    description: "Keyboard focus interaction style",
  },
  {
    key: "overlays",
    label: "Modal backdrops",
    description: "Dialog and sheet scrim styles",
  },
  {
    key: "menus",
    label: "Menu spacing",
    description: "Dropdown and context menu density",
  },
  {
    key: "typography",
    label: "Type scale overrides",
    description: "Custom heading and body sizes",
  },
  {
    key: "brandPresets",
    label: "Brand preset utilities",
    description: "data-brand runtime preset classes",
  },
]

export function AdvancedControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  const [mappingOpen, setMappingOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)

  return (
    <ControlSection title="Advanced" embedded={embedded}>
      <p className="text-xs text-muted-foreground">
        Token-level control for power users. Most themes only need presets and
        the Colors panel.
      </p>

      <Collapsible open={mappingOpen} onOpenChange={setMappingOpen}>
        <CollapsibleTrigger
          className="flex w-full items-center justify-between rounded-lg border border-border/80 px-3 py-2.5 text-left"
        >
          <div>
            <p className="text-sm font-medium">Token mapping</p>
            <p className="text-[11px] text-muted-foreground">
              Wire shadcn variables to ramp steps
            </p>
          </div>
          <ChevronDownIcon
            className={`size-4 shrink-0 text-muted-foreground transition-transform ${mappingOpen ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <SemanticMappingPanel config={config} onChange={onChange} />
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={exportOpen} onOpenChange={setExportOpen}>
        <CollapsibleTrigger
          className="flex w-full items-center justify-between rounded-lg border border-border/80 px-3 py-2.5 text-left"
        >
          <div>
            <p className="text-sm font-medium">Export includes</p>
            <p className="text-[11px] text-muted-foreground">
              Choose which CSS overrides to export
            </p>
          </div>
          <ChevronDownIcon
            className={`size-4 shrink-0 text-muted-foreground transition-transform ${exportOpen ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-3 pt-3">
          {EXPORT_LAYER_TOGGLES.map((layer) => (
            <div
              key={layer.key}
              className="flex items-start justify-between gap-3 rounded-lg border border-border/60 px-3 py-2"
            >
              <div className="min-w-0">
                <Label htmlFor={`export-layer-${layer.key}`} className="text-sm">
                  {layer.label}
                </Label>
                <p className="text-[11px] text-muted-foreground">
                  {layer.description}
                </p>
              </div>
              <Switch
                id={`export-layer-${layer.key}`}
                checked={config.layers[layer.key]}
                onCheckedChange={(checked) =>
                  onChange({
                    ...config,
                    layers: { ...config.layers, [layer.key]: checked },
                  })
                }
              />
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </ControlSection>
  )
}
