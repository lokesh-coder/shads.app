import { ThemePresetGrid } from "@/components/controls/ThemePresetGrid"

import { ControlSection } from "./ControlSection"
import type { ControlPanelProps } from "./control-panel-types"

export function GlobalPresetControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  return (
    <ControlSection title="Theme" embedded={embedded}>
      <p className="text-xs text-muted-foreground">
        Designed systems for real product types — type scale, card surfaces,
        button character, canvas, spacing, and elevation bundled together.
      </p>
      <ThemePresetGrid config={config} onChange={onChange} />
    </ControlSection>
  )
}
