import type { ThemeConfig } from "@/lib/theme-config"

export const LAYER_DEFAULT_PRESET_ID = "shadcn-default"

export const LAYER_DEFAULT_PRESET = {
  id: LAYER_DEFAULT_PRESET_ID,
  label: "Default",
  description: "Stock shadcn — no custom override in your export",
} as const

export type LayerKey = keyof ThemeConfig["layers"]

export function layerPresetValue(
  layerEnabled: boolean,
  matchedPresetId: string,
): string {
  return layerEnabled ? matchedPresetId : LAYER_DEFAULT_PRESET_ID
}

export function withLayerDefaultOption<
  T extends { id: string; label: string; description: string },
>(presets: readonly T[]): readonly [typeof LAYER_DEFAULT_PRESET, ...T[]] {
  return [LAYER_DEFAULT_PRESET, ...presets]
}

export function setLayerEnabled(
  config: ThemeConfig,
  layerKey: LayerKey,
  enabled: boolean,
): ThemeConfig {
  return {
    ...config,
    layers: { ...config.layers, [layerKey]: enabled },
  }
}
