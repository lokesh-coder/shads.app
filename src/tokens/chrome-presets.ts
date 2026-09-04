/**
 * Curated chrome presets — designer-friendly choices instead of raw sliders.
 */
import type { MenuSpacing } from "@/lib/theme-config"
import { densityDefaults, type DensityValues } from "@/tokens/density"
import type { FocusStyle } from "@/tokens/focus"
import { focusDefaults } from "@/tokens/focus"
import { menuSpacingDefaults } from "@/tokens/menus"
import type { OverlayStyle } from "@/tokens/overlays"
import { overlayDefaults } from "@/tokens/overlays"
import type { SurfaceStyle } from "@/tokens/surfaces"
import { surfaceDefaults } from "@/tokens/surfaces"

import type { PresetOption } from "@/tokens/preset-types"

export type ChromePreset<T> = PresetOption & {
  values: T
}

export type RadiusPresetValues = { radius: string }

export const radiusPresets = [
  {
    id: "none",
    label: "None",
    description: "0px corners — editorial grids and fashion layouts",
    values: { radius: "0px" },
  },
  {
    id: "sharp",
    label: "Sharp",
    description: "Tight corners — dashboards and dense layouts",
    values: { radius: "0.25rem" },
  },
  {
    id: "subtle",
    label: "Subtle",
    description: "Slightly softened — professional tools",
    values: { radius: "0.375rem" },
  },
  {
    id: "default",
    label: "Default",
    description: "Balanced corners — modern product baseline",
    values: { radius: "0.625rem" },
  },
  {
    id: "rounded",
    label: "Rounded",
    description: "Friendly SaaS — cards and inputs feel soft",
    values: { radius: "0.75rem" },
  },
  {
    id: "soft",
    label: "Soft",
    description: "Generous radius — consumer / marketing apps",
    values: { radius: "1rem" },
  },
] satisfies ChromePreset<RadiusPresetValues>[]

export type RadiusPresetId = (typeof radiusPresets)[number]["id"]

export type SurfacesPresetValues = {
  style: SurfaceStyle
  ringOpacity: number
  darkRingOpacity: number
  shadowScale: number
}

export const surfacesPresets = [
  {
    id: "flat",
    label: "Flat",
    description: "Hairline borders only — no shadow depth",
    values: {
      style: "flat",
      ringOpacity: 8,
      darkRingOpacity: 10,
      shadowScale: 0,
    },
  },
  {
    id: "ambient",
    label: "Ambient",
    description: "Soft halo shadows — premium SaaS default",
    values: { ...surfaceDefaults },
  },
  {
    id: "lifted",
    label: "Lifted",
    description: "Cards float forward — commerce and storefronts",
    values: {
      style: "lifted",
      ringOpacity: 11,
      darkRingOpacity: 13,
      shadowScale: 1.2,
    },
  },
  {
    id: "layered",
    label: "Layered",
    description: "Tight stacked shadows — material / platform UI",
    values: {
      style: "layered",
      ringOpacity: 10,
      darkRingOpacity: 12,
      shadowScale: 1,
    },
  },
  {
    id: "dramatic",
    label: "Dramatic",
    description: "Deep wide shadows — marketing and hero sections",
    values: {
      style: "dramatic",
      ringOpacity: 14,
      darkRingOpacity: 16,
      shadowScale: 1.55,
    },
  },
] satisfies ChromePreset<SurfacesPresetValues>[]

export type SurfacesPresetId = (typeof surfacesPresets)[number]["id"]

export type OverlaysPresetValues = {
  style: OverlayStyle
  opacity: number
  blur: number
}

export const overlaysPresets = [
  {
    id: "whisper",
    label: "Whisper",
    description: "Barely dims — keeps surrounding context visible",
    values: { style: "whisper", opacity: 8, blur: 2 },
  },
  {
    id: "balanced",
    label: "Balanced",
    description: "Even dim + soft blur — everyday modals",
    values: {
      style: "balanced",
      opacity: overlayDefaults.opacity,
      blur: overlayDefaults.blur,
    },
  },
  {
    id: "frosted",
    label: "Frosted",
    description: "Heavy blur, light dim — macOS-style glass",
    values: { style: "frosted", opacity: 10, blur: 12 },
  },
  {
    id: "cinematic",
    label: "Cinematic",
    description: "Deeper dim with medium blur — focus on dialog",
    values: { style: "cinematic", opacity: 18, blur: 8 },
  },
  {
    id: "immersive",
    label: "Immersive",
    description: "Strong scrim — full attention on overlay content",
    values: { style: "immersive", opacity: 28, blur: 12 },
  },
] satisfies ChromePreset<OverlaysPresetValues>[]

export type OverlaysPresetId = (typeof overlaysPresets)[number]["id"]

export type DensityPresetValues = DensityValues

export const densityPresets = [
  {
    id: "compact",
    label: "Compact",
    description: "Dense controls — design tools, data-heavy dashboards",
    values: {
      controlHeightXs: "1.25rem",
      controlHeightSm: "1.5rem",
      controlHeight: "1.75rem",
      controlHeightLg: "2rem",
      controlPx: "0.5rem",
      controlPy: "0.25rem",
      controlText: "0.8125rem",
      controlGap: "0.25rem",
      iconSize: "0.875rem",
      cardSpacing: "0.75rem",
      cardSpacingSm: "0.5rem",
      alertPx: "0.5rem",
      alertPy: "0.375rem",
      tableRowHeight: "2rem",
      tableCellPx: "0.375rem",
      textareaMinHeight: "3.5rem",
      fieldGap: "0.375rem",
      fieldGroupGap: "1rem",
      accordionPy: "0.5rem",
    },
  },
  {
    id: "default",
    label: "Default",
    description: "Balanced control sizes — modern product baseline",
    values: { ...densityDefaults },
  },
  {
    id: "comfortable",
    label: "Comfortable",
    description: "Roomier buttons and inputs — touch-friendly SaaS",
    values: {
      controlHeightXs: "1.75rem",
      controlHeightSm: "2rem",
      controlHeight: "2.25rem",
      controlHeightLg: "2.5rem",
      controlPx: "0.75rem",
      controlPy: "0.5rem",
      controlText: "0.9375rem",
      controlGap: "0.5rem",
      iconSize: "1.125rem",
      cardSpacing: "1.25rem",
      cardSpacingSm: "1rem",
      alertPx: "0.75rem",
      alertPy: "0.625rem",
      tableRowHeight: "3rem",
      tableCellPx: "0.625rem",
      textareaMinHeight: "4.5rem",
      fieldGap: "0.625rem",
      fieldGroupGap: "1.5rem",
      accordionPy: "0.75rem",
    },
  },
  {
    id: "spacious",
    label: "Spacious",
    description: "Generous padding — marketing, editorial, hero layouts",
    values: {
      controlHeightXs: "2rem",
      controlHeightSm: "2.25rem",
      controlHeight: "2.5rem",
      controlHeightLg: "2.75rem",
      controlPx: "0.875rem",
      controlPy: "0.625rem",
      controlText: "1rem",
      controlGap: "0.625rem",
      iconSize: "1.25rem",
      cardSpacing: "1.5rem",
      cardSpacingSm: "1.125rem",
      alertPx: "0.875rem",
      alertPy: "0.75rem",
      tableRowHeight: "3.25rem",
      tableCellPx: "0.75rem",
      textareaMinHeight: "5.5rem",
      fieldGap: "0.75rem",
      fieldGroupGap: "1.75rem",
      accordionPy: "0.875rem",
    },
  },
] satisfies ChromePreset<DensityPresetValues>[]

export type DensityPresetId = (typeof densityPresets)[number]["id"]

export type PaddingPresetValues = Pick<
  DensityValues,
  | "cardSpacing"
  | "cardSpacingSm"
  | "alertPx"
  | "alertPy"
  | "tableCellPx"
  | "fieldGap"
  | "fieldGroupGap"
  | "accordionPy"
>

export const paddingPresets = [
  {
    id: "compact",
    label: "Compact",
    description: "Tight padding — dense dashboards and data tables",
    values: {
      cardSpacing: "0.75rem",
      cardSpacingSm: "0.5rem",
      alertPx: "0.5rem",
      alertPy: "0.375rem",
      tableCellPx: "0.375rem",
      fieldGap: "0.375rem",
      fieldGroupGap: "1rem",
      accordionPy: "0.5rem",
    },
  },
  {
    id: "default",
    label: "Default",
    description: "Balanced padding — modern product baseline",
    values: {
      cardSpacing: densityDefaults.cardSpacing,
      cardSpacingSm: densityDefaults.cardSpacingSm,
      alertPx: densityDefaults.alertPx,
      alertPy: densityDefaults.alertPy,
      tableCellPx: densityDefaults.tableCellPx,
      fieldGap: densityDefaults.fieldGap,
      fieldGroupGap: densityDefaults.fieldGroupGap,
      accordionPy: densityDefaults.accordionPy,
    },
  },
  {
    id: "comfortable",
    label: "Comfortable",
    description: "Roomier fields and cards — touch-friendly SaaS",
    values: {
      cardSpacing: "1.25rem",
      cardSpacingSm: "1rem",
      alertPx: "0.75rem",
      alertPy: "0.625rem",
      tableCellPx: "0.625rem",
      fieldGap: "0.625rem",
      fieldGroupGap: "1.5rem",
      accordionPy: "0.75rem",
    },
  },
  {
    id: "spacious",
    label: "Spacious",
    description: "Generous whitespace — marketing and editorial layouts",
    values: {
      cardSpacing: "1.5rem",
      cardSpacingSm: "1.125rem",
      alertPx: "0.875rem",
      alertPy: "0.75rem",
      tableCellPx: "0.75rem",
      fieldGap: "0.75rem",
      fieldGroupGap: "1.75rem",
      accordionPy: "0.875rem",
    },
  },
] satisfies ChromePreset<PaddingPresetValues>[]

export type PaddingPresetId = (typeof paddingPresets)[number]["id"]

export type SizePresetValues = Pick<
  DensityValues,
  | "controlHeightXs"
  | "controlHeightSm"
  | "controlHeight"
  | "controlHeightLg"
  | "textareaMinHeight"
>

export const sizePresets = [
  {
    id: "compact",
    label: "Compact",
    description: "Short controls — design tools and dense UIs",
    values: {
      controlHeightXs: "1.25rem",
      controlHeightSm: "1.5rem",
      controlHeight: "1.75rem",
      controlHeightLg: "2rem",
      textareaMinHeight: "3.5rem",
    },
  },
  {
    id: "default",
    label: "Default",
    description: "Standard button and input heights",
    values: {
      controlHeightXs: densityDefaults.controlHeightXs,
      controlHeightSm: densityDefaults.controlHeightSm,
      controlHeight: densityDefaults.controlHeight,
      controlHeightLg: densityDefaults.controlHeightLg,
      textareaMinHeight: densityDefaults.textareaMinHeight,
    },
  },
  {
    id: "comfortable",
    label: "Comfortable",
    description: "Taller controls — easier tap targets",
    values: {
      controlHeightXs: "1.75rem",
      controlHeightSm: "2rem",
      controlHeight: "2.25rem",
      controlHeightLg: "2.5rem",
      textareaMinHeight: "4.5rem",
    },
  },
  {
    id: "spacious",
    label: "Spacious",
    description: "Large controls — hero forms and marketing CTAs",
    values: {
      controlHeightXs: "2rem",
      controlHeightSm: "2.25rem",
      controlHeight: "2.5rem",
      controlHeightLg: "2.75rem",
      textareaMinHeight: "5.5rem",
    },
  },
] satisfies ChromePreset<SizePresetValues>[]

export type SizePresetId = (typeof sizePresets)[number]["id"]

export type MenusPresetValues = MenuSpacing

export const menusPresets = [
  {
    id: "compact",
    label: "Compact",
    description: "Dense menus — power-user tools",
    values: {
      itemPx: "0.5rem",
      itemPy: "0.25rem",
      itemPrCheck: "1.75rem",
      itemInsetPl: "1.5rem",
      listPadding: "0.25rem",
      itemGap: "0.375rem",
      contentMinWidth: "7rem",
      selectMinWidth: "8rem",
    },
  },
  {
    id: "default",
    label: "Default",
    description: "Comfortable baseline spacing",
    values: { ...menuSpacingDefaults },
  },
  {
    id: "comfortable",
    label: "Comfortable",
    description: "Roomier targets — touch-friendly",
    values: {
      itemPx: "0.75rem",
      itemPy: "0.5rem",
      itemPrCheck: "2.25rem",
      itemInsetPl: "2rem",
      listPadding: "0.5rem",
      itemGap: "0.625rem",
      contentMinWidth: "9rem",
      selectMinWidth: "10rem",
    },
  },
] satisfies ChromePreset<MenusPresetValues>[]

export type MenusPresetId = (typeof menusPresets)[number]["id"]

export type FocusPresetValues = {
  style: FocusStyle
  lightBorderMix: number
  darkBorderMix: number
  shadowScale: number
  errorBorderMix: number
  errorShadowScale: number
}

export const focusPresets = [
  {
    id: "border-lift",
    label: "Border lift",
    description: "Darker border + soft elevation — calm form focus",
    values: { ...focusDefaults },
  },
  {
    id: "flat",
    label: "Flat shift",
    description: "Border color only — zero shadow, dense tools",
    values: {
      style: "flat",
      lightBorderMix: 24,
      darkBorderMix: 40,
      shadowScale: 0,
      errorBorderMix: 70,
      errorShadowScale: 0,
    },
  },
  {
    id: "brand-glow",
    label: "Brand glow",
    description: "Subtle primary halo — consumer and marketing UI",
    values: {
      style: "brand-glow",
      lightBorderMix: 35,
      darkBorderMix: 45,
      shadowScale: 1,
      errorBorderMix: 75,
      errorShadowScale: 1,
    },
  },
  {
    id: "inset",
    label: "Inset",
    description: "Pressed-into-surface feel — finance and data apps",
    values: {
      style: "inset",
      lightBorderMix: 20,
      darkBorderMix: 34,
      shadowScale: 1,
      errorBorderMix: 70,
      errorShadowScale: 1,
    },
  },
  {
    id: "underline",
    label: "Underline",
    description: "Bottom accent line — editorial and content forms",
    values: {
      style: "underline",
      lightBorderMix: 30,
      darkBorderMix: 42,
      shadowScale: 0,
      errorBorderMix: 80,
      errorShadowScale: 0,
    },
  },
] satisfies ChromePreset<FocusPresetValues>[]

export type FocusPresetId = (typeof focusPresets)[number]["id"]

function surfacesMatch(a: SurfacesPresetValues, b: SurfacesPresetValues): boolean {
  return (
    a.style === b.style &&
    a.ringOpacity === b.ringOpacity &&
    a.darkRingOpacity === b.darkRingOpacity &&
    Math.abs(a.shadowScale - b.shadowScale) < 0.01
  )
}

function focusMatch(a: FocusPresetValues, b: FocusPresetValues): boolean {
  return (
    a.style === b.style &&
    a.lightBorderMix === b.lightBorderMix &&
    a.darkBorderMix === b.darkBorderMix &&
    Math.abs(a.shadowScale - b.shadowScale) < 0.01 &&
    a.errorBorderMix === b.errorBorderMix &&
    Math.abs(a.errorShadowScale - b.errorShadowScale) < 0.01
  )
}

function menusMatch(a: MenusPresetValues, b: MenusPresetValues): boolean {
  return (Object.keys(a) as (keyof MenusPresetValues)[]).every(
    (key) => a[key] === b[key],
  )
}

export function matchRadiusPresetId(radius: string): RadiusPresetId {
  return (
    radiusPresets.find((preset) => preset.values.radius === radius)?.id ??
    "default"
  )
}

export function matchSurfacesPresetId(
  surfaces: SurfacesPresetValues,
): SurfacesPresetId {
  return (
    surfacesPresets.find((preset) =>
      surfacesMatch(preset.values, surfaces),
    )?.id ?? "ambient"
  )
}

export function matchOverlaysPresetId(
  overlays: OverlaysPresetValues,
): OverlaysPresetId {
  return (
    overlaysPresets.find((preset) =>
      overlaysMatch(preset.values, overlays),
    )?.id ?? "balanced"
  )
}

function overlaysMatch(
  a: OverlaysPresetValues,
  b: OverlaysPresetValues,
): boolean {
  return (
    a.style === b.style &&
    a.opacity === b.opacity &&
    a.blur === b.blur
  )
}

export function matchDensityPresetId(
  density: DensityPresetValues,
): DensityPresetId {
  return (
    densityPresets.find((preset) => densityMatch(preset.values, density))?.id ??
    "default"
  )
}

function densityMatch(a: DensityPresetValues, b: DensityPresetValues): boolean {
  return (Object.keys(a) as (keyof DensityPresetValues)[]).every(
    (key) => a[key] === b[key],
  )
}

function paddingMatch(
  a: PaddingPresetValues,
  b: PaddingPresetValues,
): boolean {
  return (Object.keys(a) as (keyof PaddingPresetValues)[]).every(
    (key) => a[key] === b[key],
  )
}

export function matchPaddingPresetId(
  density: DensityValues,
): PaddingPresetId | "" {
  const current: PaddingPresetValues = {
    cardSpacing: density.cardSpacing,
    cardSpacingSm: density.cardSpacingSm,
    alertPx: density.alertPx,
    alertPy: density.alertPy,
    tableCellPx: density.tableCellPx,
    fieldGap: density.fieldGap,
    fieldGroupGap: density.fieldGroupGap,
    accordionPy: density.accordionPy,
  }
  return (
    paddingPresets.find((preset) => paddingMatch(preset.values, current))?.id ??
    ""
  )
}

function sizeMatch(a: SizePresetValues, b: SizePresetValues): boolean {
  return (Object.keys(a) as (keyof SizePresetValues)[]).every(
    (key) => a[key] === b[key],
  )
}

export function matchSizePresetId(density: DensityValues): SizePresetId | "" {
  const current: SizePresetValues = {
    controlHeightXs: density.controlHeightXs,
    controlHeightSm: density.controlHeightSm,
    controlHeight: density.controlHeight,
    controlHeightLg: density.controlHeightLg,
    textareaMinHeight: density.textareaMinHeight,
  }
  return (
    sizePresets.find((preset) => sizeMatch(preset.values, current))?.id ?? ""
  )
}

export function matchMenusPresetId(menus: MenusPresetValues): MenusPresetId {
  return (
    menusPresets.find((preset) => menusMatch(preset.values, menus))?.id ??
    "default"
  )
}

export function matchFocusPresetId(focus: FocusPresetValues): FocusPresetId {
  return (
    focusPresets.find((preset) => focusMatch(preset.values, focus))?.id ??
    "border-lift"
  )
}
