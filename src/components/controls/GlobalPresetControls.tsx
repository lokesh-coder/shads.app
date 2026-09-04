import { Label } from "@/components/ui/label"
import {
  applyGlobalPreset,
  matchGlobalPresetId,
  type GlobalPresetId,
} from "@/lib/theme-config"
import { globalPresets, globalPresetCategories } from "@/tokens/global-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function GlobalPresetControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  const activeId = matchGlobalPresetId(config)

  return (
    <ControlSection title="Theme" embedded={embedded}>
      <p className="text-xs text-muted-foreground">
        Designed systems for real product types — type scale, card surfaces,
        button character, canvas, spacing, and elevation bundled together.
      </p>
      <div className="flex flex-col gap-1.5">
        <Label>Style</Label>
        <PresetSelect
          presets={globalPresets}
          categoryOrder={globalPresetCategories}
          value={activeId ?? ""}
          placeholder="Custom theme"
          onChange={(preset) =>
            onChange(applyGlobalPreset(config, preset.id as GlobalPresetId))
          }
        />
      </div>
    </ControlSection>
  )
}
