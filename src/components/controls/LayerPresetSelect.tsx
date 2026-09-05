import {
  LAYER_DEFAULT_PRESET_ID,
  withLayerDefaultOption,
} from "@/lib/chrome-layer-controls"

import { PresetSelect } from "./PresetSelect"

type LayerPresetSelectProps<T extends { id: string; label: string; description: string }> =
  {
    layerEnabled: boolean
    presets: readonly T[]
    matchedPresetId: string
    onSelectDefault: () => void
    onSelectPreset: (preset: T) => void
    label?: string
  }

export function LayerPresetSelect<T extends { id: string; label: string; description: string }>({
  layerEnabled,
  presets,
  matchedPresetId,
  onSelectDefault,
  onSelectPreset,
}: LayerPresetSelectProps<T>) {
  const options = withLayerDefaultOption(presets)
  const value = layerEnabled ? matchedPresetId : LAYER_DEFAULT_PRESET_ID

  return (
    <PresetSelect
      presets={options}
      value={value}
      placeholder="Default"
      onChange={(preset) => {
        if (preset.id === LAYER_DEFAULT_PRESET_ID) {
          onSelectDefault()
          return
        }
        const match = presets.find((item) => item.id === preset.id)
        if (match) onSelectPreset(match)
      }}
    />
  )
}
