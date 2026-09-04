import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { ControlSection } from "./ControlSection"
import type { ControlPanelProps } from "./control-panel-types"

export function BaseControls({ config, onChange, embedded }: ControlPanelProps) {
  return (
    <ControlSection title="Base" defaultOpen={false} embedded={embedded}>
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="brand-semantic-toggle">Use brand mapping</Label>
        <Switch
          id="brand-semantic-toggle"
          checked={config.layers.brandSemantic}
          onCheckedChange={(checked) =>
            onChange({
              ...config,
              layers: { ...config.layers, brandSemantic: checked },
            })
          }
        />
      </div>
      <p className="text-xs text-muted-foreground">
        When enabled, semantic tokens map to brand ramp steps via
        brand-semantic.css. When disabled, theme.css OKLCH values are used.
      </p>
    </ControlSection>
  )
}
