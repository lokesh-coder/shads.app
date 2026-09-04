import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  matchOverlaysPresetId,
  overlaysPresets,
} from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function OverlaysControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  return (
    <ControlSection title="Overlays" defaultOpen={false} embedded={embedded}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="overlays-toggle">Enable overlays layer</Label>
        <Switch
          id="overlays-toggle"
          checked={config.layers.overlays}
          onCheckedChange={(checked) =>
            onChange({
              ...config,
              layers: { ...config.layers, overlays: checked },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Scrim style</Label>
        <PresetSelect
          presets={overlaysPresets}
          value={matchOverlaysPresetId(config.overlays)}
          onChange={(preset) =>
            onChange({
              ...config,
              overlays: { ...config.overlays, ...preset.values },
            })
          }
        />
      </div>
    </ControlSection>
  )
}
