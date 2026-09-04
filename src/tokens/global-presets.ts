/**
 * Premium style archetypes — multi-dimensional personality contracts.
 * Each bundles canvas, type, shape, surfaces, controls, and interaction.
 */
import type { BrandStep } from "@/lib/theme-config"
import type { BrandPresetName } from "@/tokens/brand"
import {
  densityPresets,
  focusPresets,
  menusPresets,
  overlaysPresets,
  radiusPresets,
  surfacesPresets,
  type DensityPresetId,
  type FocusPresetId,
  type MenusPresetId,
  type OverlaysPresetId,
  type RadiusPresetId,
  type SurfacesPresetId,
} from "@/tokens/chrome-presets"
import type { FontId } from "@/tokens/fonts"
import type { PersonalityValues } from "@/tokens/personality"
import { personalityPresets } from "@/tokens/personality"
import type { TypeScalePresetId, TypeScaleValues } from "@/tokens/type-scale"
import { typeScalePresets } from "@/tokens/type-scale"

export type GlobalPreset = {
  id: string
  label: string
  category: string
  description: string
  brand: BrandPresetName
  radius: RadiusPresetId
  density: DensityPresetId
  surfaces: SurfacesPresetId
  overlays: OverlaysPresetId
  menus: MenusPresetId
  focus: FocusPresetId
  typeScale: TypeScalePresetId
  personality: PersonalityValues
  fonts: { sans: FontId; heading: FontId; mono: FontId }
  semantic: { lightPrimary: BrandStep; darkPrimary: BrandStep }
}

function personality(id: (typeof personalityPresets)[number]["id"]): PersonalityValues {
  return personalityPresets.find((p) => p.id === id)!.values
}

export const globalPresets = [
  // ── SaaS & productivity ──────────────────────────────────────────────
  {
    id: "workspace",
    label: "Workspace",
    category: "SaaS & productivity",
    description:
      "Balanced 16px rhythm, soft card elevation, calm brand accent — everyday product flows",
    brand: "product",
    radius: "default",
    density: "default",
    surfaces: "ambient",
    overlays: "balanced",
    menus: "default",
    focus: "border-lift",
    typeScale: "default",
    personality: personality("product"),
    fonts: { sans: "figtree", heading: "instrument-sans", mono: "geist-mono" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  {
    id: "brief",
    label: "Brief",
    category: "SaaS & productivity",
    description:
      "Structured docs and wikis — readable body type, bordered panels, warm gray canvas",
    brand: "workspace",
    radius: "subtle",
    density: "default",
    surfaces: "flat",
    overlays: "whisper",
    menus: "default",
    focus: "border-lift",
    typeScale: "default",
    personality: personality("reading"),
    fonts: {
      sans: "source-sans-3",
      heading: "geist",
      mono: "jetbrains-mono",
    },
    semantic: { lightPrimary: 800, darkPrimary: 500 },
  },
  {
    id: "guild",
    label: "Guild",
    category: "SaaS & productivity",
    description:
      "HR and people ops — warm stone canvas, comfortable controls, human-centered B2B",
    brand: "warm",
    radius: "default",
    density: "comfortable",
    surfaces: "ambient",
    overlays: "balanced",
    menus: "comfortable",
    focus: "border-lift",
    typeScale: "default",
    personality: personality("product"),
    fonts: { sans: "figtree", heading: "instrument-sans", mono: "geist-mono" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  // ── Dashboard & data ─────────────────────────────────────────────────
  {
    id: "operator",
    label: "Operator",
    category: "Dashboard & data",
    description:
      "14px utility type, bordered panels, flat chrome, compact controls — data-dense operator UI",
    brand: "monochrome",
    radius: "sharp",
    density: "compact",
    surfaces: "flat",
    overlays: "balanced",
    menus: "compact",
    focus: "flat",
    typeScale: "compact",
    personality: personality("operator"),
    fonts: { sans: "ibm-plex-sans", heading: "geist", mono: "jetbrains-mono" },
    semantic: { lightPrimary: 700, darkPrimary: 500 },
  },
  {
    id: "metrics",
    label: "Metrics",
    category: "Dashboard & data",
    description:
      "Analytics and BI — cool indigo accent, compact tables, chart-forward dashboards",
    brand: "indigo",
    radius: "subtle",
    density: "compact",
    surfaces: "flat",
    overlays: "balanced",
    menus: "compact",
    focus: "flat",
    typeScale: "compact",
    personality: personality("operator"),
    fonts: {
      sans: "ibm-plex-sans",
      heading: "space-grotesk",
      mono: "jetbrains-mono",
    },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  {
    id: "dispatch",
    label: "Dispatch",
    category: "Dashboard & data",
    description:
      "Ops and infrastructure — alert orange accent, bordered panels, incident-ready density",
    brand: "signal",
    radius: "sharp",
    density: "compact",
    surfaces: "flat",
    overlays: "balanced",
    menus: "compact",
    focus: "flat",
    typeScale: "compact",
    personality: personality("workbench"),
    fonts: { sans: "geist", heading: "geist", mono: "fira-code" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  // ── Finance ──────────────────────────────────────────────────────────
  {
    id: "ledger",
    label: "Ledger",
    category: "Finance",
    description:
      "Banking and fintech — cool ocean palette, compact KPI layouts, utility controls",
    brand: "ocean",
    radius: "subtle",
    density: "compact",
    surfaces: "flat",
    overlays: "balanced",
    menus: "compact",
    focus: "flat",
    typeScale: "compact",
    personality: personality("operator"),
    fonts: { sans: "inter", heading: "manrope", mono: "source-code-pro" },
    semantic: { lightPrimary: 700, darkPrimary: 500 },
  },
  // ── AI & developer ───────────────────────────────────────────────────
  {
    id: "canvas",
    label: "Canvas",
    category: "AI & developer",
    description:
      "AI assistants and chat — minimal chrome, frameless content, ink neutrals",
    brand: "ink",
    radius: "default",
    density: "default",
    surfaces: "ambient",
    overlays: "whisper",
    menus: "default",
    focus: "border-lift",
    typeScale: "default",
    personality: personality("canvas"),
    fonts: { sans: "geist", heading: "inter", mono: "geist-mono" },
    semantic: { lightPrimary: 900, darkPrimary: 500 },
  },
  {
    id: "workbench",
    label: "Workbench",
    category: "AI & developer",
    description:
      "Developer tools — compact mono-friendly type, bordered flat panels, utility buttons",
    brand: "monochrome",
    radius: "subtle",
    density: "compact",
    surfaces: "flat",
    overlays: "whisper",
    menus: "compact",
    focus: "flat",
    typeScale: "compact",
    personality: personality("workbench"),
    fonts: { sans: "geist", heading: "space-grotesk", mono: "jetbrains-mono" },
    semantic: { lightPrimary: 800, darkPrimary: 500 },
  },
  // ── Marketing & editorial ────────────────────────────────────────────
  {
    id: "launch",
    label: "Launch",
    category: "Marketing & editorial",
    description:
      "Large display type, dramatic lift, floating cards, immersive overlays — hero-led growth pages",
    brand: "product",
    radius: "soft",
    density: "spacious",
    surfaces: "dramatic",
    overlays: "immersive",
    menus: "comfortable",
    focus: "brand-glow",
    typeScale: "relaxed",
    personality: personality("launch"),
    fonts: {
      sans: "outfit",
      heading: "fraunces",
      mono: "geist-mono",
    },
    semantic: { lightPrimary: 500, darkPrimary: 400 },
  },
  {
    id: "reading",
    label: "Reading",
    category: "Marketing & editorial",
    description:
      "17px body, editorial display scale, hairline borders, underline focus — magazines and news",
    brand: "warm",
    radius: "subtle",
    density: "spacious",
    surfaces: "flat",
    overlays: "whisper",
    menus: "default",
    focus: "underline",
    typeScale: "editorial",
    personality: personality("reading"),
    fonts: { sans: "dm-sans", heading: "newsreader", mono: "geist-mono" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  {
    id: "atelier",
    label: "Atelier",
    category: "Marketing & editorial",
    description:
      "Creator portfolios and agencies — display headlines, frameless tiles, monochrome canvas",
    brand: "monochrome",
    radius: "none",
    density: "spacious",
    surfaces: "flat",
    overlays: "cinematic",
    menus: "comfortable",
    focus: "underline",
    typeScale: "display",
    personality: personality("lookbook"),
    fonts: { sans: "urbanist", heading: "fraunces", mono: "geist-mono" },
    semantic: { lightPrimary: 900, darkPrimary: 500 },
  },
  // ── Commerce ─────────────────────────────────────────────────────────
  {
    id: "storefront",
    label: "Storefront",
    category: "Commerce",
    description:
      "Comfortable controls, lifted product cards, warm accent — catalogs, cart, and checkout",
    brand: "warm",
    radius: "rounded",
    density: "comfortable",
    surfaces: "lifted",
    overlays: "frosted",
    menus: "comfortable",
    focus: "border-lift",
    typeScale: "relaxed",
    personality: personality("storefront"),
    fonts: { sans: "figtree", heading: "instrument-sans", mono: "geist-mono" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  {
    id: "lookbook",
    label: "Lookbook",
    category: "Commerce",
    description:
      "Warm paper canvas, 0px radius, frameless tiles, display headlines, invert CTAs — image-first retail",
    brand: "lookbook",
    radius: "none",
    density: "spacious",
    surfaces: "flat",
    overlays: "cinematic",
    menus: "comfortable",
    focus: "underline",
    typeScale: "display",
    personality: personality("lookbook"),
    fonts: { sans: "dm-sans", heading: "instrument-sans", mono: "geist-mono" },
    semantic: { lightPrimary: 900, darkPrimary: 500 },
  },
  {
    id: "bistro",
    label: "Bistro",
    category: "Commerce",
    description:
      "Food and hospitality — rounded friendly controls, merchant green, relaxed menus",
    brand: "merchant",
    radius: "rounded",
    density: "comfortable",
    surfaces: "lifted",
    overlays: "frosted",
    menus: "comfortable",
    focus: "border-lift",
    typeScale: "relaxed",
    personality: personality("storefront"),
    fonts: { sans: "sora", heading: "lora", mono: "geist-mono" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
  // ── Health & education ───────────────────────────────────────────────
  {
    id: "pulse",
    label: "Pulse",
    category: "Health & education",
    description:
      "Healthcare and wellness — calm forest green, soft radius, spacious patient-facing UI",
    brand: "forest",
    radius: "rounded",
    density: "comfortable",
    surfaces: "ambient",
    overlays: "balanced",
    menus: "comfortable",
    focus: "border-lift",
    typeScale: "relaxed",
    personality: personality("product"),
    fonts: { sans: "nunito-sans", heading: "lora", mono: "geist-mono" },
    semantic: { lightPrimary: 700, darkPrimary: 500 },
  },
  {
    id: "campus",
    label: "Campus",
    category: "Health & education",
    description:
      "Education and learning — friendly rounded UI, approachable type, course-card rhythm",
    brand: "indigo",
    radius: "rounded",
    density: "comfortable",
    surfaces: "lifted",
    overlays: "balanced",
    menus: "comfortable",
    focus: "brand-glow",
    typeScale: "relaxed",
    personality: personality("product"),
    fonts: { sans: "plus-jakarta", heading: "sora", mono: "geist-mono" },
    semantic: { lightPrimary: 600, darkPrimary: 500 },
  },
] as const satisfies readonly GlobalPreset[]

export type GlobalPresetId = (typeof globalPresets)[number]["id"]

/** Preset categories in display order for grouped pickers. */
export const globalPresetCategories = [
  "SaaS & productivity",
  "Dashboard & data",
  "Finance",
  "AI & developer",
  "Marketing & editorial",
  "Commerce",
  "Health & education",
] as const

export function resolveGlobalPreset(presetId: GlobalPresetId): {
  brand: BrandPresetName
  radius: string
  density: (typeof densityPresets)[number]["values"]
  surfaces: (typeof surfacesPresets)[number]["values"]
  overlays: (typeof overlaysPresets)[number]["values"]
  menus: (typeof menusPresets)[number]["values"]
  focus: (typeof focusPresets)[number]["values"]
  typeScale: TypeScaleValues
  personality: PersonalityValues
  fonts: GlobalPreset["fonts"]
  semantic: GlobalPreset["semantic"]
} {
  const preset = globalPresets.find((item) => item.id === presetId)!
  return {
    brand: preset.brand,
    radius: radiusPresets.find((item) => item.id === preset.radius)!.values
      .radius,
    density: densityPresets.find((item) => item.id === preset.density)!.values,
    surfaces: surfacesPresets.find((item) => item.id === preset.surfaces)!
      .values,
    overlays: overlaysPresets.find((item) => item.id === preset.overlays)!
      .values,
    menus: menusPresets.find((item) => item.id === preset.menus)!.values,
    focus: focusPresets.find((item) => item.id === preset.focus)!.values,
    typeScale: typeScalePresets.find((item) => item.id === preset.typeScale)!
      .values,
    personality: preset.personality,
    fonts: preset.fonts,
    semantic: preset.semantic,
  }
}
