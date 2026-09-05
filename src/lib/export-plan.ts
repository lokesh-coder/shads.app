import { NEUTRAL_STEPS, type ThemeConfig } from "@/lib/theme-config"
import { createDefaultShadcnConfig } from "@/lib/theme-config"

export type ExportSection =
  | "fonts"
  | "radius"
  | "neutral"
  | "brand"
  | "semantic"
  | "surfaces"
  | "personality"
  | "typography"
  | "density"
  | "focus"
  | "overlays"
  | "menus"
  | "brandPresets"

export const EXPORT_SECTION_ORDER: ExportSection[] = [
  "fonts",
  "radius",
  "neutral",
  "brand",
  "semantic",
  "surfaces",
  "personality",
  "typography",
  "density",
  "focus",
  "overlays",
  "menus",
  "brandPresets",
]

export const EXPORT_SECTION_LABELS: Record<ExportSection, string> = {
  fonts: "Fonts",
  radius: "Radius",
  neutral: "Neutral ramp",
  brand: "Brand ramp",
  semantic: "Semantic tokens",
  surfaces: "Surfaces",
  personality: "Personality",
  typography: "Typography",
  density: "Density",
  focus: "Focus",
  overlays: "Overlays",
  menus: "Menus",
  brandPresets: "Brand presets",
}

function recordsEqual<T extends Record<string, unknown>>(a: T, b: T): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

function arraysEqual<T>(a: readonly T[], b: readonly T[]): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

function neutralEqual(
  a: ThemeConfig["neutral"],
  b: ThemeConfig["neutral"],
): boolean {
  return NEUTRAL_STEPS.every((step) => a[step] === b[step])
}

export function getExportBaseline(): ThemeConfig {
  return createDefaultShadcnConfig()
}

export function getChangedExportSections(
  config: ThemeConfig,
  baseline: ThemeConfig = getExportBaseline(),
): ExportSection[] {
  const changed: ExportSection[] = []

  if (!recordsEqual(config.fonts, baseline.fonts)) {
    changed.push("fonts")
  }

  if (config.radius !== baseline.radius) {
    changed.push("radius")
  }

  if (!neutralEqual(config.neutral, baseline.neutral)) {
    changed.push("neutral")
  }

  if (
    !recordsEqual(config.brandRoles, baseline.brandRoles) ||
    !arraysEqual(config.chartPalette, baseline.chartPalette) ||
    !recordsEqual(config.brand, baseline.brand)
  ) {
    changed.push("brand")
  }

  if (
    config.layers.brandSemantic !== baseline.layers.brandSemantic ||
    !recordsEqual(config.semanticMapping.light, baseline.semanticMapping.light) ||
    !recordsEqual(config.semanticMapping.dark, baseline.semanticMapping.dark)
  ) {
    changed.push("semantic")
  }

  if (
    !recordsEqual(config.surfaces, baseline.surfaces) ||
    config.personality.cardMode !== baseline.personality.cardMode
  ) {
    changed.push("surfaces")
  }

  if (!recordsEqual(config.personality, baseline.personality)) {
    changed.push("personality")
  }

  if (!recordsEqual(config.typeScale, baseline.typeScale)) {
    changed.push("typography")
  }

  if (!recordsEqual(config.density, baseline.density)) {
    changed.push("density")
  }

  if (!recordsEqual(config.focus, baseline.focus)) {
    changed.push("focus")
  }

  if (!recordsEqual(config.overlays, baseline.overlays)) {
    changed.push("overlays")
  }

  if (!recordsEqual(config.menus, baseline.menus)) {
    changed.push("menus")
  }

  if (config.layers.brandPresets && !baseline.layers.brandPresets) {
    changed.push("brandPresets")
  }

  return EXPORT_SECTION_ORDER.filter((section) => changed.includes(section))
}
