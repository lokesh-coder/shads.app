import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { matchMenusPresetId, menusPresets } from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function MenusControls({ config, onChange, embedded }: ControlPanelProps) {
  return (
    <ControlSection title="Menus" defaultOpen={false} embedded={embedded}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="menus-toggle">Enable menus layer</Label>
        <Switch
          id="menus-toggle"
          checked={config.layers.menus}
          onCheckedChange={(checked) =>
            onChange({
              ...config,
              layers: { ...config.layers, menus: checked },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Menu density</Label>
        <PresetSelect
          presets={menusPresets}
          value={matchMenusPresetId(config.menus)}
          onChange={(preset) =>
            onChange({
              ...config,
              menus: { ...config.menus, ...preset.values },
            })
          }
        />
      </div>
    </ControlSection>
  )
}
