import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  matchPaddingPresetId,
  matchSizePresetId,
  paddingPresets,
  sizePresets,
} from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function SpacingControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  return (
    <ControlSection title="Spacing" defaultOpen={false} embedded={embedded}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="spacing-toggle">Enable spacing layer</Label>
        <Switch
          id="spacing-toggle"
          checked={config.layers.density}
          onCheckedChange={(checked) =>
            onChange({
              ...config,
              layers: { ...config.layers, density: checked },
            })
          }
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Padding adjusts card, field, and section spacing. Control size only
        changes button, input, and select heights — not toggles, checkboxes,
        icons, or typography.
      </p>
      <div className="flex flex-col gap-1.5">
        <Label>Padding</Label>
        <PresetSelect
          presets={paddingPresets}
          value={matchPaddingPresetId(config.density)}
          onChange={(preset) =>
            onChange({
              ...config,
              density: { ...config.density, ...preset.values },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Control size</Label>
        <PresetSelect
          presets={sizePresets}
          value={matchSizePresetId(config.density)}
          onChange={(preset) =>
            onChange({
              ...config,
              density: { ...config.density, ...preset.values },
            })
          }
        />
      </div>
    </ControlSection>
  )
}
