import { Label } from "@/components/ui/label"
import {
  matchRadiusPresetId,
  radiusPresets,
} from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function RadiusControls({ config, onChange, embedded }: ControlPanelProps) {
  return (
    <ControlSection title="Radius" defaultOpen={false} embedded={embedded}>
      <div className="flex flex-col gap-1.5">
        <Label>Corner style</Label>
        <PresetSelect
          presets={radiusPresets}
          value={matchRadiusPresetId(config.radius)}
          onChange={(preset) =>
            onChange({ ...config, radius: preset.values.radius })
          }
        />
      </div>
    </ControlSection>
  )
}
