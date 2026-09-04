import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  matchSurfacesPresetId,
  surfacesPresets,
} from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function SurfacesControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  return (
    <ControlSection title="Surfaces" defaultOpen={false} embedded={embedded}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="surfaces-toggle">Enable surfaces layer</Label>
        <Switch
          id="surfaces-toggle"
          checked={config.layers.surfaces}
          onCheckedChange={(checked) =>
            onChange({
              ...config,
              layers: { ...config.layers, surfaces: checked },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Elevation style</Label>
        <PresetSelect
          presets={surfacesPresets}
          value={matchSurfacesPresetId(config.surfaces)}
          onChange={(preset) =>
            onChange({
              ...config,
              surfaces: { ...config.surfaces, ...preset.values },
            })
          }
        />
      </div>
    </ControlSection>
  )
}
