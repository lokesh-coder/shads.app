import {
  brandColors,
  brandPresets,
  chartPalettePresets,
  neutralPresets,
  rolesPresets,
  type BrandPresetName,
} from "@/tokens/brand"
import {
  defaultBrandRoles,
  defaultChartPalette,
  expandBrandRamp,
  type BrandRoles,
  type ChartPalette,
} from "@/tokens/brand-roles"
import { defaultFonts } from "@/tokens/fonts"
import { focusDefaults, type FocusStyle } from "@/tokens/focus"
import { menuSpacingDefaults } from "@/tokens/menus"
import { neutralZinc, NEUTRAL_STEPS, type NeutralStep } from "@/tokens/neutral"
import { overlayDefaults, type OverlayStyle } from "@/tokens/overlays"
import {
  semanticMapping as defaultSemanticMapping,
  type PrimaryForeground,
  type SemanticMapping,
} from "@/tokens/semantic-mapping"
import { surfaceDefaults, type SurfaceStyle } from "@/tokens/surfaces"
import { densityDefaults } from "@/tokens/density"
import {
  globalPresets,
  resolveGlobalPreset,
  type GlobalPreset,
  type GlobalPresetId,
} from "@/tokens/global-presets"
import {
  densityPresets,
  focusPresets,
  menusPresets,
  overlaysPresets,
  radiusPresets,
  surfacesPresets,
} from "@/tokens/chrome-presets"
import {
  personalityDefaults,
  type PersonalityValues,
} from "@/tokens/personality"
import {
  typeScaleDefaults,
  typeScalePresets,
  type TypeScaleValues,
} from "@/tokens/type-scale"
import {
  defaultPreviewSettings,
  normalizePreviewSettings,
  previewByPreset,
  type PreviewSettings,
} from "@/tokens/preview-settings"

export type BrandStep =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950

export const BRAND_STEPS: BrandStep[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]

export type { NeutralStep, PrimaryForeground, SemanticMapping }
export type { BrandRoles, ChartPalette, HexColor } from "@/tokens/brand-roles"
export { NEUTRAL_STEPS } from "@/tokens/neutral"
export type { FocusStyle } from "@/tokens/focus"
export type { OverlayStyle } from "@/tokens/overlays"
export type { DensityValues } from "@/tokens/density"
export type { TypeScaleValues } from "@/tokens/type-scale"
export type { PersonalityValues } from "@/tokens/personality"
export type { PreviewSettings, PreviewGalleryMode } from "@/tokens/preview-settings"
export type { BrandPresetName } from "@/tokens/brand"
export type { GlobalPresetId } from "@/tokens/global-presets"

export type FocusConfig = {
  style: FocusStyle
  lightBorderMix: number
  darkBorderMix: number
  shadowScale: number
  errorBorderMix: number
  errorShadowScale: number
}

export type SurfacesConfig = {
  style: SurfaceStyle
  ringOpacity: number
  darkRingOpacity: number
  shadowScale: number
}

export type OverlaysConfig = {
  style: OverlayStyle
  opacity: number
  blur: number
}

export type { SurfaceStyle } from "@/tokens/surfaces"

export type DensityConfig = {
  [K in keyof typeof densityDefaults]: string
}

export type MenuSpacing = {
  [K in keyof typeof menuSpacingDefaults]: string
}

export type ThemeConfig = {
  layers: {
    brandSemantic: boolean
    surfaces: boolean
    overlays: boolean
    menus: boolean
    focus: boolean
    density: boolean
    typography: boolean
    brandPresets: boolean
  }
  /** Designer-facing brand roles */
  brandRoles: BrandRoles
  /** Curated chart series colors (not derived from brand ramp) */
  chartPalette: ChartPalette
  neutral: Record<NeutralStep, string>
  /** Generated brand ramp — kept for CSS export / utilities */
  brand: Record<BrandStep, string>
  semanticMapping: {
    light: SemanticMapping
    dark: SemanticMapping
  }
  radius: string
  fonts: { sans: string; heading: string; mono: string }
  surfaces: SurfacesConfig
  overlays: OverlaysConfig
  menus: MenuSpacing
  density: DensityConfig
  focus: FocusConfig
  typeScale: TypeScaleValues
  personality: PersonalityValues
  preview: PreviewSettings
}

type LegacyThemePartial = Partial<ThemeConfig> & {
  brandMapping?: ThemeConfig["semanticMapping"]
  brandSecondary?: Record<BrandStep, string>
  coloredSecondary?: boolean
}

function createSemanticMapping(mode: "light" | "dark"): SemanticMapping {
  return { ...defaultSemanticMapping[mode] }
}

export function syncBrandRamp(config: ThemeConfig): ThemeConfig {
  return {
    ...config,
    brand: { ...expandBrandRamp(config.brandRoles.primary) },
  }
}

function migrateLegacyPartial(
  base: ThemeConfig,
  partial: LegacyThemePartial,
): Partial<ThemeConfig> {
  const next = { ...partial }

  if (!next.brandRoles && partial.brand) {
    next.brandRoles = {
      primary: (partial.brand[600] ?? base.brandRoles.primary) as BrandRoles["primary"],
      primaryForeground: base.brandRoles.primaryForeground,
      highlight:
        (partial.brandSecondary?.[500] as BrandRoles["highlight"] | undefined) ??
        base.brandRoles.highlight,
    }
  }

  if (!next.chartPalette) {
    next.chartPalette = base.chartPalette
  }

  return next
}

export function createDefaultConfig(): ThemeConfig {
  const config: ThemeConfig = {
    layers: {
      brandSemantic: true,
      surfaces: true,
      overlays: true,
      menus: true,
      focus: true,
      density: true,
      typography: true,
      brandPresets: false,
    },
    brandRoles: { ...defaultBrandRoles },
    chartPalette: [...defaultChartPalette],
    neutral: { ...neutralZinc },
    brand: { ...brandColors },
    semanticMapping: {
      light: createSemanticMapping("light"),
      dark: createSemanticMapping("dark"),
    },
    radius: "0.625rem",
    fonts: { ...defaultFonts },
    surfaces: { ...surfaceDefaults },
    overlays: {
      style: overlayDefaults.style,
      opacity: overlayDefaults.opacity,
      blur: overlayDefaults.blur,
    },
    menus: { ...menuSpacingDefaults },
    density: { ...densityDefaults },
    focus: { ...focusDefaults },
    typeScale: { ...typeScaleDefaults },
    personality: { ...personalityDefaults },
    preview: { ...defaultPreviewSettings },
  }
  return syncBrandRamp(config)
}

export function resetConfig(): ThemeConfig {
  return createDefaultConfig()
}

export function mergeConfig(
  base: ThemeConfig,
  partial: LegacyThemePartial,
): ThemeConfig {
  const migrated = migrateLegacyPartial(base, partial)
  const semanticPartial = migrated.semanticMapping ?? partial.brandMapping

  const merged: ThemeConfig = {
    ...base,
    ...migrated,
    layers: { ...base.layers, ...migrated.layers },
    brandRoles: { ...base.brandRoles, ...migrated.brandRoles },
    chartPalette: migrated.chartPalette
      ? [...migrated.chartPalette]
      : base.chartPalette,
    neutral: { ...base.neutral, ...migrated.neutral },
    brand: { ...base.brand, ...migrated.brand },
    semanticMapping: semanticPartial
      ? {
          light: {
            ...base.semanticMapping.light,
            ...semanticPartial.light,
          },
          dark: {
            ...base.semanticMapping.dark,
            ...semanticPartial.dark,
          },
        }
      : base.semanticMapping,
    fonts: { ...base.fonts, ...migrated.fonts },
    surfaces: { ...base.surfaces, ...migrated.surfaces },
    overlays: { ...base.overlays, ...migrated.overlays },
    menus: { ...base.menus, ...migrated.menus },
    density: { ...base.density, ...migrated.density },
    focus: { ...base.focus, ...migrated.focus },
    typeScale: { ...base.typeScale, ...migrated.typeScale },
    personality: { ...base.personality, ...migrated.personality },
    preview: normalizePreviewSettings({
      ...base.preview,
      ...migrated.preview,
    }),
  }

  if (!merged.focus.style) {
    merged.focus.style = "border-lift"
  }
  if (!merged.surfaces.style) {
    merged.surfaces.style = "ambient"
  }
  if (!merged.overlays.style) {
    merged.overlays.style = "balanced"
  }
  if (!merged.density) {
    merged.density = { ...densityDefaults }
  }
  if (!merged.typeScale) {
    merged.typeScale = { ...typeScaleDefaults }
  }
  if (!merged.personality) {
    merged.personality = { ...personalityDefaults }
  }
  if (!merged.preview) {
    merged.preview = { ...defaultPreviewSettings }
  } else {
    merged.preview = normalizePreviewSettings(merged.preview)
  }
  if (merged.layers.density === undefined) {
    merged.layers.density = true
  }

  return syncBrandRamp(merged)
}

export function applyBrandPreset(
  config: ThemeConfig,
  preset: BrandPresetName,
): ThemeConfig {
  return syncBrandRamp({
    ...config,
    neutral: { ...neutralPresets[preset] },
    brandRoles: { ...rolesPresets[preset] },
    chartPalette: [...chartPalettePresets[preset]],
    brand: { ...brandPresets[preset] },
  })
}

export function applyGlobalPreset(
  config: ThemeConfig,
  presetId: GlobalPresetId,
): ThemeConfig {
  const resolved = resolveGlobalPreset(presetId)
  const branded = applyBrandPreset(config, resolved.brand)

  return syncBrandRamp({
    ...branded,
    radius: resolved.radius,
    fonts: { ...resolved.fonts },
    surfaces: { ...resolved.surfaces },
    overlays: { ...resolved.overlays },
    menus: { ...resolved.menus },
    density: { ...resolved.density },
    focus: { ...resolved.focus },
    typeScale: { ...resolved.typeScale },
    personality: { ...resolved.personality },
    preview: { ...previewByPreset[presetId] },
    semanticMapping: {
      light: {
        ...branded.semanticMapping.light,
        primary: resolved.semantic.lightPrimary,
      },
      dark: {
        ...branded.semanticMapping.dark,
        primary: resolved.semantic.darkPrimary,
      },
    },
    layers: {
      ...config.layers,
      brandSemantic: true,
      surfaces: true,
      overlays: true,
      menus: true,
      focus: true,
      density: true,
      typography: true,
    },
  })
}

function matchesBrandPreset(
  config: ThemeConfig,
  brandId: BrandPresetName,
): boolean {
  const roles = rolesPresets[brandId]
  const neutral = neutralPresets[brandId]
  const charts = chartPalettePresets[brandId]

  if (
    config.brandRoles.primary !== roles.primary ||
    config.brandRoles.primaryForeground !== roles.primaryForeground ||
    config.brandRoles.highlight !== roles.highlight
  ) {
    return false
  }

  if (!charts.every((color, index) => config.chartPalette[index] === color)) {
    return false
  }

  return NEUTRAL_STEPS.every((step) => config.neutral[step] === neutral[step])
}

function globalPresetMatchesConfig(
  config: ThemeConfig,
  preset: GlobalPreset,
): boolean {
  if (!matchesBrandPreset(config, preset.brand)) return false

  const radius = radiusPresets.find((item) => item.id === preset.radius)
  if (!radius || config.radius !== radius.values.radius) return false

  const surfaces = surfacesPresets.find((item) => item.id === preset.surfaces)
  if (
    !surfaces ||
    config.surfaces.style !== surfaces.values.style ||
    config.surfaces.ringOpacity !== surfaces.values.ringOpacity ||
    config.surfaces.darkRingOpacity !== surfaces.values.darkRingOpacity ||
    Math.abs(config.surfaces.shadowScale - surfaces.values.shadowScale) >= 0.01
  ) {
    return false
  }

  const overlays = overlaysPresets.find((item) => item.id === preset.overlays)
  if (
    !overlays ||
    config.overlays.style !== overlays.values.style ||
    config.overlays.opacity !== overlays.values.opacity ||
    config.overlays.blur !== overlays.values.blur
  ) {
    return false
  }

  const menus = menusPresets.find((item) => item.id === preset.menus)
  if (
    !menus ||
    (Object.keys(menus.values) as (keyof typeof menus.values)[]).some(
      (key) => config.menus[key] !== menus.values[key],
    )
  ) {
    return false
  }

  const density = densityPresets.find((item) => item.id === preset.density)
  if (
    !density ||
    (Object.keys(density.values) as (keyof typeof density.values)[]).some(
      (key) => config.density[key] !== density.values[key],
    )
  ) {
    return false
  }

  const focus = focusPresets.find((item) => item.id === preset.focus)
  if (
    !focus ||
    config.focus.style !== focus.values.style ||
    config.focus.lightBorderMix !== focus.values.lightBorderMix ||
    config.focus.darkBorderMix !== focus.values.darkBorderMix ||
    Math.abs(config.focus.shadowScale - focus.values.shadowScale) >= 0.01 ||
    config.focus.errorBorderMix !== focus.values.errorBorderMix ||
    Math.abs(config.focus.errorShadowScale - focus.values.errorShadowScale) >=
      0.01
  ) {
    return false
  }

  const typeScale = typeScalePresets.find((item) => item.id === preset.typeScale)
  if (
    !typeScale ||
    (Object.keys(typeScale.values) as (keyof TypeScaleValues)[]).some(
      (key) => config.typeScale[key] !== typeScale.values[key],
    )
  ) {
    return false
  }

  if (
    config.personality.cardMode !== preset.personality.cardMode ||
    config.personality.buttonPersonality !== preset.personality.buttonPersonality
  ) {
    return false
  }

  return (
    config.fonts.sans === preset.fonts.sans &&
    config.fonts.heading === preset.fonts.heading &&
    config.fonts.mono === preset.fonts.mono &&
    config.semanticMapping.light.primary === preset.semantic.lightPrimary &&
    config.semanticMapping.dark.primary === preset.semantic.darkPrimary
  )
}

export function matchGlobalPresetId(config: ThemeConfig): GlobalPresetId | null {
  return (
    globalPresets.find((preset) => globalPresetMatchesConfig(config, preset))
      ?.id ?? null
  )
}

const DEFAULT_SHADCN_PERSONALITY: PersonalityValues = {
  cardMode: "bordered",
  buttonPersonality: "utility",
}

const DEFAULT_SHADCN_LAYERS: ThemeConfig["layers"] = {
  brandSemantic: false,
  surfaces: false,
  overlays: false,
  menus: false,
  focus: false,
  density: false,
  typography: false,
  brandPresets: false,
}

/** Vanilla shadcn — OKLCH theme.css tokens, no premium chrome layers. */
export function createDefaultShadcnConfig(): ThemeConfig {
  const base = createDefaultConfig()
  return {
    ...base,
    layers: { ...DEFAULT_SHADCN_LAYERS },
    personality: { ...DEFAULT_SHADCN_PERSONALITY },
    radius: "0.625rem",
    preview: { ...defaultPreviewSettings },
  }
}

export function applyDefaultShadcn(_config: ThemeConfig): ThemeConfig {
  return createDefaultShadcnConfig()
}

function previewSettingsMatch(
  a: PreviewSettings,
  b: PreviewSettings,
): boolean {
  return (
    a.mode === b.mode &&
    a.columnsClass === b.columnsClass &&
    a.gap === b.gap &&
    a.canvas === b.canvas &&
    a.showTileLabels === b.showTileLabels &&
    JSON.stringify(a.featuredCategories ?? null) ===
      JSON.stringify(b.featuredCategories ?? null)
  )
}

export function isDefaultShadcnConfig(config: ThemeConfig): boolean {
  if (matchGlobalPresetId(config)) return false

  const ref = createDefaultShadcnConfig()
  return (
    (Object.keys(ref.layers) as (keyof ThemeConfig["layers"])[]).every(
      (key) => config.layers[key] === ref.layers[key],
    ) &&
    config.radius === ref.radius &&
    config.fonts.sans === ref.fonts.sans &&
    config.fonts.heading === ref.fonts.heading &&
    config.fonts.mono === ref.fonts.mono &&
    config.personality.cardMode === ref.personality.cardMode &&
    config.personality.buttonPersonality === ref.personality.buttonPersonality &&
    previewSettingsMatch(config.preview, ref.preview) &&
    config.surfaces.style === ref.surfaces.style &&
    config.overlays.style === ref.overlays.style &&
    config.focus.style === ref.focus.style
  )
}

export type ThemePickerSelection = "default" | "custom" | GlobalPresetId

export function resolveThemePickerSelection(
  config: ThemeConfig,
): ThemePickerSelection {
  const presetId = matchGlobalPresetId(config)
  if (presetId) return presetId
  if (isDefaultShadcnConfig(config)) return "default"
  return "custom"
}

export function setBrandPrimary(
  config: ThemeConfig,
  primary: BrandRoles["primary"],
): ThemeConfig {
  return syncBrandRamp({
    ...config,
    brandRoles: { ...config.brandRoles, primary },
  })
}

export function setBrandPrimaryStep(
  config: ThemeConfig,
  mode: "light" | "dark",
  step: BrandStep,
): ThemeConfig {
  return {
    ...config,
    semanticMapping: {
      ...config.semanticMapping,
      [mode]: {
        ...config.semanticMapping[mode],
        primary: step,
      },
    },
  }
}
