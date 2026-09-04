import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { ThemeConfig } from "@/lib/theme-config"

import { ControlSection } from "./ControlSection"
import type { ControlPanelProps } from "./control-panel-types"

type LayerToggle = {
  key: keyof ThemeConfig["layers"]
  label: string
}

const LAYER_TOGGLES: LayerToggle[] = [
  { key: "brandSemantic", label: "brand-semantic.css" },
  { key: "surfaces", label: "surfaces.css" },
  { key: "menus", label: "menus.css" },
  { key: "focus", label: "focus.css" },
  { key: "density", label: "density.css" },
  { key: "overlays", label: "overlays.css" },
  { key: "typography", label: "typography.css" },
  { key: "brandPresets", label: "brand-presets.css" },
]

export function LayersControls({ config, onChange, embedded }: ControlPanelProps) {
  return (
    <ControlSection title="Layers" defaultOpen={false} embedded={embedded}>
      <div className="flex flex-col gap-3">
        {LAYER_TOGGLES.map((layer) => (
          <div key={layer.key} className="flex items-center justify-between gap-3">
            <Label htmlFor={`layer-${layer.key}`}>{layer.label}</Label>
            <Switch
              id={`layer-${layer.key}`}
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
      </div>
    </ControlSection>
  )
}
