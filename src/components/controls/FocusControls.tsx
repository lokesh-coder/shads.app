import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { matchFocusPresetId, focusPresets } from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function FocusControls({ config, onChange, embedded }: ControlPanelProps) {
  return (
    <ControlSection title="Focus" defaultOpen={false} embedded={embedded}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="focus-toggle">Enable focus layer</Label>
        <Switch
          id="focus-toggle"
          checked={config.layers.focus}
          onCheckedChange={(checked) =>
            onChange({
              ...config,
              layers: { ...config.layers, focus: checked },
            })
          }
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Replace the default ring-3 focus with a designed interaction style. Tab
        into a field in the preview to compare philosophies.
      </p>

      <div className="flex flex-col gap-1.5">
        <Label>Focus philosophy</Label>
        <PresetSelect
          presets={focusPresets}
          value={matchFocusPresetId(config.focus)}
          onChange={(preset) =>
            onChange({
              ...config,
              focus: { ...config.focus, ...preset.values },
            })
          }
        />
      </div>
    </ControlSection>
  )
}
