import { Label } from "@/components/ui/label"
import { setLayerEnabled } from "@/lib/chrome-layer-controls"
import {
  densityPresets,
  focusPresets,
  matchDensityPresetId,
  matchFocusPresetId,
  matchMenusPresetId,
  matchOverlaysPresetId,
  matchRadiusPresetId,
  matchSurfacesPresetId,
  menusPresets,
  overlaysPresets,
  radiusPresets,
  surfacesPresets,
} from "@/tokens/chrome-presets"

import { ControlSection } from "./ControlSection"
import { LayerPresetSelect } from "./LayerPresetSelect"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

export function LayoutFeelControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  return (
    <ControlSection title="Layout & feel" embedded={embedded}>
      <p className="text-xs text-muted-foreground">
        Shape, spacing, and interaction chrome. Choose Default to use stock
        shadcn for any category.
      </p>

      <div className="flex flex-col gap-1.5">
        <Label>Corners</Label>
        <PresetSelect
          presets={radiusPresets}
          value={matchRadiusPresetId(config.radius)}
          onChange={(preset) =>
            onChange({ ...config, radius: preset.values.radius })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Spacing</Label>
        <LayerPresetSelect
          layerEnabled={config.layers.density}
          presets={densityPresets}
          matchedPresetId={matchDensityPresetId(config.density)}
          onSelectDefault={() =>
            onChange(setLayerEnabled(config, "density", false))
          }
          onSelectPreset={(preset) =>
            onChange({
              ...config,
              layers: { ...config.layers, density: true },
              density: { ...config.density, ...preset.values },
            })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Card elevation</Label>
        <LayerPresetSelect
          layerEnabled={config.layers.surfaces}
          presets={surfacesPresets}
          matchedPresetId={matchSurfacesPresetId(config.surfaces)}
          onSelectDefault={() =>
            onChange(setLayerEnabled(config, "surfaces", false))
          }
          onSelectPreset={(preset) =>
            onChange({
              ...config,
              layers: { ...config.layers, surfaces: true },
              surfaces: { ...config.surfaces, ...preset.values },
            })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Modal backdrop</Label>
        <LayerPresetSelect
          layerEnabled={config.layers.overlays}
          presets={overlaysPresets}
          matchedPresetId={matchOverlaysPresetId(config.overlays)}
          onSelectDefault={() =>
            onChange(setLayerEnabled(config, "overlays", false))
          }
          onSelectPreset={(preset) =>
            onChange({
              ...config,
              layers: { ...config.layers, overlays: true },
              overlays: { ...config.overlays, ...preset.values },
            })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Menus</Label>
        <LayerPresetSelect
          layerEnabled={config.layers.menus}
          presets={menusPresets}
          matchedPresetId={matchMenusPresetId(config.menus)}
          onSelectDefault={() =>
            onChange(setLayerEnabled(config, "menus", false))
          }
          onSelectPreset={(preset) =>
            onChange({
              ...config,
              layers: { ...config.layers, menus: true },
              menus: { ...config.menus, ...preset.values },
            })
          }
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Focus style</Label>
        <LayerPresetSelect
          layerEnabled={config.layers.focus}
          presets={focusPresets}
          matchedPresetId={matchFocusPresetId(config.focus)}
          onSelectDefault={() =>
            onChange(setLayerEnabled(config, "focus", false))
          }
          onSelectPreset={(preset) =>
            onChange({
              ...config,
              layers: { ...config.layers, focus: true },
              focus: { ...config.focus, ...preset.values },
            })
          }
        />
      </div>
    </ControlSection>
  )
}
