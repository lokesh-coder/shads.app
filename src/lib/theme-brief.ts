import {
  applyGlobalPreset,
  syncBrandRamp,
  type ThemeConfig,
} from "@/lib/theme-config"
import type { ChartPalette, HexColor } from "@/tokens/brand-roles"
import {
  densityPresets,
  focusPresets,
  overlaysPresets,
  radiusPresets,
  surfacesPresets,
  type DensityPresetId,
  type FocusPresetId,
  type OverlaysPresetId,
  type RadiusPresetId,
  type SurfacesPresetId,
} from "@/tokens/chrome-presets"
import { fontCatalog, type FontId } from "@/tokens/fonts"
import { globalPresets, type GlobalPresetId } from "@/tokens/global-presets"
import {
  personalityPresets,
  type PersonalityPresetId,
} from "@/tokens/personality"

export const THEME_BRIEF_SCHEMA_VERSION = "shadstyle-theme-brief/v1"

export const DEFAULT_AI_THEME_DESCRIPTION =
  "Describe your app, audience, and visual vibe here."

export type ThemeBriefBrand = {
  primary: HexColor
  primaryForeground: HexColor
  highlight: HexColor | null
}

export type ThemeBriefFonts = {
  sans: FontId
  heading: FontId
  mono: FontId
}

export type ThemeBrief = {
  $schema?: string
  name?: string
  basePreset: GlobalPresetId
  brand: ThemeBriefBrand
  chartPalette: ChartPalette
  radius?: RadiusPresetId
  surfaces?: SurfacesPresetId
  overlays?: OverlaysPresetId
  focus?: FocusPresetId
  density?: DensityPresetId
  personality?: PersonalityPresetId
  fonts?: Partial<ThemeBriefFonts>
}

export type ThemeBriefValidationResult =
  | { ok: true; brief: ThemeBrief }
  | { ok: false; errors: string[] }

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/

const GLOBAL_PRESET_IDS = globalPresets.map((preset) => preset.id)
const RADIUS_IDS = radiusPresets.map((preset) => preset.id)
const SURFACES_IDS = surfacesPresets.map((preset) => preset.id)
const OVERLAYS_IDS = overlaysPresets.map((preset) => preset.id)
const FOCUS_IDS = focusPresets.map((preset) => preset.id)
const DENSITY_IDS = densityPresets.map((preset) => preset.id)
const PERSONALITY_IDS = personalityPresets.map((preset) => preset.id)
const FONT_IDS = fontCatalog.map((font) => font.id)

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isHexColor(value: unknown): value is HexColor {
  return typeof value === "string" && HEX_COLOR.test(value)
}

function readEnum<T extends string>(
  value: unknown,
  allowed: readonly T[],
  field: string,
  errors: string[],
): T | undefined {
  if (value === undefined || value === null) return undefined
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    errors.push(
      `\`${field}\` must be one of: ${allowed.join(", ")}`,
    )
    return undefined
  }
  return value as T
}

function readRequiredEnum<T extends string>(
  value: unknown,
  allowed: readonly T[],
  field: string,
  errors: string[],
): T | undefined {
  if (value === undefined || value === null) {
    errors.push(`\`${field}\` is required`)
    return undefined
  }
  return readEnum(value, allowed, field, errors)
}

export function extractJsonFromAiResponse(text: string): string | null {
  const trimmed = text.trim()
  const codeBlockMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (codeBlockMatch?.[1]) return codeBlockMatch[1].trim()
  if (trimmed.startsWith("{")) return trimmed
  return null
}

export function validateThemeBrief(raw: unknown): ThemeBriefValidationResult {
  const errors: string[] = []

  if (!isRecord(raw)) {
    return { ok: false, errors: ["Response must be a JSON object"] }
  }

  const basePreset = readRequiredEnum(
    raw.basePreset,
    GLOBAL_PRESET_IDS,
    "basePreset",
    errors,
  )

  let brand: ThemeBriefBrand | undefined
  if (!isRecord(raw.brand)) {
    errors.push("`brand` is required and must be an object")
  } else {
    const primary = raw.brand.primary
    const primaryForeground = raw.brand.primaryForeground
    const highlight = raw.brand.highlight

    if (!isHexColor(primary)) {
      errors.push("`brand.primary` must be a hex color like #2563eb")
    }
    if (!isHexColor(primaryForeground)) {
      errors.push(
        "`brand.primaryForeground` must be a hex color like #ffffff",
      )
    }
    if (
      highlight !== null &&
      highlight !== undefined &&
      !isHexColor(highlight)
    ) {
      errors.push("`brand.highlight` must be a hex color or null")
    }

    if (
      isHexColor(primary) &&
      isHexColor(primaryForeground) &&
      (highlight === null ||
        highlight === undefined ||
        isHexColor(highlight))
    ) {
      brand = {
        primary,
        primaryForeground,
        highlight:
          highlight === undefined || highlight === null
            ? null
            : highlight,
      }
    }
  }

  let chartPalette: ChartPalette | undefined
  if (!Array.isArray(raw.chartPalette)) {
    errors.push("`chartPalette` must be an array of 5 hex colors")
  } else if (raw.chartPalette.length !== 5) {
    errors.push("`chartPalette` must contain exactly 5 hex colors")
  } else if (!raw.chartPalette.every(isHexColor)) {
    errors.push("Every `chartPalette` entry must be a hex color like #2563eb")
  } else {
    chartPalette = raw.chartPalette as ChartPalette
  }

  const radius = readEnum(raw.radius, RADIUS_IDS, "radius", errors)
  const surfaces = readEnum(raw.surfaces, SURFACES_IDS, "surfaces", errors)
  const overlays = readEnum(raw.overlays, OVERLAYS_IDS, "overlays", errors)
  const focus = readEnum(raw.focus, FOCUS_IDS, "focus", errors)
  const density = readEnum(raw.density, DENSITY_IDS, "density", errors)
  const personality = readEnum(
    raw.personality,
    PERSONALITY_IDS,
    "personality",
    errors,
  )

  let fonts: Partial<ThemeBriefFonts> | undefined
  if (raw.fonts !== undefined) {
    if (!isRecord(raw.fonts)) {
      errors.push("`fonts` must be an object")
    } else {
      fonts = {}
      const sans = readEnum(raw.fonts.sans, FONT_IDS, "fonts.sans", errors)
      const heading = readEnum(
        raw.fonts.heading,
        FONT_IDS,
        "fonts.heading",
        errors,
      )
      const mono = readEnum(raw.fonts.mono, FONT_IDS, "fonts.mono", errors)
      if (sans) fonts.sans = sans
      if (heading) fonts.heading = heading
      if (mono) fonts.mono = mono
    }
  }

  if (errors.length > 0 || !basePreset || !brand || !chartPalette) {
    return { ok: false, errors }
  }

  const brief: ThemeBrief = {
    basePreset,
    brand,
    chartPalette,
  }

  if (typeof raw.name === "string" && raw.name.trim()) {
    brief.name = raw.name.trim()
  }
  if (typeof raw.$schema === "string") {
    brief.$schema = raw.$schema
  }
  if (radius) brief.radius = radius
  if (surfaces) brief.surfaces = surfaces
  if (overlays) brief.overlays = overlays
  if (focus) brief.focus = focus
  if (density) brief.density = density
  if (personality) brief.personality = personality
  if (fonts && Object.keys(fonts).length > 0) brief.fonts = fonts

  return { ok: true, brief }
}

export function parseThemeBriefInput(text: string): ThemeBriefValidationResult {
  const jsonText = extractJsonFromAiResponse(text)
  if (!jsonText) {
    return {
      ok: false,
      errors: [
        "Could not find JSON in the pasted text. Paste the full ```json code block from your AI chat.",
      ],
    }
  }

  try {
    const parsed = JSON.parse(jsonText) as unknown
    return validateThemeBrief(parsed)
  } catch {
    return { ok: false, errors: ["Invalid JSON — check for trailing commas or missing quotes"] }
  }
}

export function applyThemeBrief(
  config: ThemeConfig,
  brief: ThemeBrief,
): ThemeConfig {
  let next = applyGlobalPreset(config, brief.basePreset)

  if (brief.radius) {
    const preset = radiusPresets.find((item) => item.id === brief.radius)
    if (preset) next = { ...next, radius: preset.values.radius }
  }

  if (brief.surfaces) {
    const preset = surfacesPresets.find((item) => item.id === brief.surfaces)
    if (preset) next = { ...next, surfaces: { ...preset.values } }
  }

  if (brief.overlays) {
    const preset = overlaysPresets.find((item) => item.id === brief.overlays)
    if (preset) next = { ...next, overlays: { ...preset.values } }
  }

  if (brief.focus) {
    const preset = focusPresets.find((item) => item.id === brief.focus)
    if (preset) next = { ...next, focus: { ...preset.values } }
  }

  if (brief.density) {
    const preset = densityPresets.find((item) => item.id === brief.density)
    if (preset) next = { ...next, density: { ...preset.values } }
  }

  if (brief.personality) {
    const preset = personalityPresets.find(
      (item) => item.id === brief.personality,
    )
    if (preset) next = { ...next, personality: { ...preset.values } }
  }

  if (brief.fonts) {
    next = {
      ...next,
      fonts: {
        sans: brief.fonts.sans ?? next.fonts.sans,
        heading: brief.fonts.heading ?? next.fonts.heading,
        mono: brief.fonts.mono ?? next.fonts.mono,
      },
    }
  }

  next = {
    ...next,
    brandRoles: {
      primary: brief.brand.primary,
      primaryForeground: brief.brand.primaryForeground,
      highlight: brief.brand.highlight,
    },
    chartPalette: [...brief.chartPalette],
  }

  return syncBrandRamp(next)
}

function labelForPreset<T extends { id: string; label: string }>(
  presets: readonly T[],
  id: string | undefined,
): string | undefined {
  if (!id) return undefined
  return presets.find((preset) => preset.id === id)?.label ?? id
}

export function summarizeThemeBrief(brief: ThemeBrief): string[] {
  const base = globalPresets.find((preset) => preset.id === brief.basePreset)
  const lines = [
    brief.name ? brief.name : (base?.label ?? brief.basePreset),
    `Base: ${base?.label ?? brief.basePreset}`,
    `Primary ${brief.brand.primary}`,
  ]

  const chrome = [
    labelForPreset(radiusPresets, brief.radius),
    labelForPreset(surfacesPresets, brief.surfaces),
    labelForPreset(overlaysPresets, brief.overlays),
    labelForPreset(focusPresets, brief.focus),
    labelForPreset(densityPresets, brief.density),
    labelForPreset(personalityPresets, brief.personality),
  ].filter(Boolean)

  if (chrome.length > 0) {
    lines.push(chrome.join(" · "))
  }

  return lines
}

export function buildThemeBriefPrompt(userDescription: string): string {
  const description =
    userDescription.trim() || DEFAULT_AI_THEME_DESCRIPTION

  const presetLines = globalPresets
    .map((preset) => `  - ${preset.id}: ${preset.description}`)
    .join("\n")

  const fontLines = fontCatalog.map((font) => font.id).join(", ")

  return `I need a shadcn/ui theme for a theme builder. Here is what I want:

${description}

---

You are generating a theme config for ShadStyle (a shadcn/ui theme builder).

Return ONLY a single JSON object inside a \`\`\`json code block. No explanation before or after.

## How this system works
- Themes are built from preset IDs plus a few custom colors — not raw CSS variables.
- Pick a \`basePreset\` as the starting archetype, then override only what matters for the brief.
- Brand colors must be hex (#rrggbb). The builder derives the full color ramp automatically.
- Do not invent preset IDs — use only values from the lists below.

## Output schema
{
  "$schema": "${THEME_BRIEF_SCHEMA_VERSION}",
  "name": "Short theme name",
  "basePreset": "<global preset id>",
  "brand": {
    "primary": "#rrggbb",
    "primaryForeground": "#rrggbb",
    "highlight": "#rrggbb or null"
  },
  "chartPalette": ["#...", "#...", "#...", "#...", "#..."],
  "radius": "<radius id>",
  "surfaces": "<surfaces id>",
  "overlays": "<overlays id>",
  "focus": "<focus id>",
  "density": "<density id>",
  "personality": "<personality id>",
  "fonts": {
    "sans": "<font id>",
    "heading": "<font id>",
    "mono": "<font id>"
  }
}

Only \`basePreset\`, \`brand\`, and \`chartPalette\` are required. Omit optional fields when the base preset already fits.

## Allowed values

basePreset:
${presetLines}

radius: ${RADIUS_IDS.join(" | ")}
surfaces: ${SURFACES_IDS.join(" | ")}
overlays: ${OVERLAYS_IDS.join(" | ")}
focus: ${FOCUS_IDS.join(" | ")}
density: ${DENSITY_IDS.join(" | ")}
personality: ${PERSONALITY_IDS.join(" | ")}

fonts (sans / heading / mono): ${fontLines}

## Example

User brief: "Calm B2B SaaS dashboard, trustworthy blue, soft elevated cards"

\`\`\`json
{
  "$schema": "${THEME_BRIEF_SCHEMA_VERSION}",
  "name": "Calm workspace",
  "basePreset": "workspace",
  "brand": {
    "primary": "#2563eb",
    "primaryForeground": "#ffffff",
    "highlight": "#f59e0b"
  },
  "chartPalette": ["#2563eb", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"],
  "surfaces": "ambient",
  "personality": "product"
}
\`\`\``
}
