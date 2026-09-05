import type { GlobalPreset } from "@/tokens/global-presets"
import type { ThemeConfig } from "@/lib/theme-config"
import { brandPresets, neutralPresets } from "@/tokens/brand"
import { radiusPresets, surfacesPresets } from "@/tokens/chrome-presets"
import { getFontById } from "@/tokens/fonts"

export type PresetPickerMeta = {
  primary: string
  canvas: string
  border: string
  radius: string
  elevated: boolean
  headingFont: string
}

export function getPresetPickerMeta(preset: GlobalPreset): PresetPickerMeta {
  const brand = brandPresets[preset.brand]
  const neutral = neutralPresets[preset.brand]
  const radius =
    radiusPresets.find((item) => item.id === preset.radius)?.values.radius ??
    "0.625rem"
  const surfaces = surfacesPresets.find((item) => item.id === preset.surfaces)
  const heading = getFontById(preset.fonts.heading)

  return {
    primary: brand[preset.semantic.lightPrimary],
    canvas: neutral[50],
    border: neutral[200],
    radius,
    elevated: (surfaces?.values.shadowScale ?? 0) > 0.25,
    headingFont: heading?.family ?? "inherit",
  }
}

export function getConfigPickerMeta(config: ThemeConfig): PresetPickerMeta {
  const heading = getFontById(config.fonts.heading)

  return {
    primary: config.brand[600] ?? config.brandRoles.primary,
    canvas: config.neutral[50],
    border: config.neutral[200],
    radius: config.radius,
    elevated: config.surfaces.shadowScale > 0.25,
    headingFont: heading?.family ?? "inherit",
  }
}

export const DEFAULT_PICKER_META: PresetPickerMeta = {
  primary: "#18181b",
  canvas: "#fafafa",
  border: "#e4e4e7",
  radius: "0.625rem",
  elevated: false,
  headingFont: "inherit",
}
