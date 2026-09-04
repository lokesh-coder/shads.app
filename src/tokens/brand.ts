/**
 * Designed theme presets — complete role snapshots, not ramp permutations.
 */
import {
  chartPalettes,
  defaultBrandRoles,
  defaultChartPalette,
  expandBrandRamp,
  type BrandRamp,
  type BrandRampStep,
  type BrandRoles,
  type ChartPalette,
} from "@/tokens/brand-roles"
import {
  formatNeutralRampBlock,
  neutralCool,
  neutralPaper,
  neutralStone,
  neutralZinc,
  type NeutralRamp,
} from "@/tokens/neutral"

export type { BrandRampStep, BrandRamp }

/** Default primary ramp (product / violet) */
export const brandColors = expandBrandRamp(defaultBrandRoles.primary)

export type ThemePreset = {
  id: string
  label: string
  runtimeId: string | null
  description: string
  neutral: NeutralRamp
  roles: BrandRoles
  chartPalette: ChartPalette
}

export const brandPresetCatalog = [
  {
    id: "product",
    label: "Product",
    runtimeId: null,
    description: "Neutral UI + single violet accent — default SaaS",
    neutral: neutralZinc,
    roles: defaultBrandRoles,
    chartPalette: chartPalettes.product,
  },
  {
    id: "forest",
    label: "Forest",
    runtimeId: "forest",
    description: "Teal primary, restrained greens in charts",
    neutral: neutralZinc,
    roles: {
      primary: "#176b5b",
      primaryForeground: "#ffffff",
      highlight: "#34d399",
    },
    chartPalette: chartPalettes.forest,
  },
  {
    id: "ocean",
    label: "Ocean",
    runtimeId: "ocean",
    description: "Deep teal primary, cool slate neutrals",
    neutral: neutralCool,
    roles: {
      primary: "#0c5563",
      primaryForeground: "#ffffff",
      highlight: "#22d3ee",
    },
    chartPalette: chartPalettes.ocean,
  },
  {
    id: "warm",
    label: "Warm",
    runtimeId: "warm",
    description: "Rust primary, warm stone neutrals",
    neutral: neutralStone,
    roles: {
      primary: "#b84a28",
      primaryForeground: "#ffffff",
      highlight: "#f59e0b",
    },
    chartPalette: chartPalettes.warm,
  },
  {
    id: "indigo",
    label: "Indigo",
    runtimeId: "indigo",
    description: "Indigo primary, cool slate neutrals",
    neutral: neutralCool,
    roles: {
      primary: "#4f46e5",
      primaryForeground: "#ffffff",
      highlight: "#818cf8",
    },
    chartPalette: chartPalettes.indigo,
  },
  {
    id: "monochrome",
    label: "Monochrome",
    runtimeId: "monochrome",
    description: "Zinc primary — minimal chroma product UI",
    neutral: neutralZinc,
    roles: {
      primary: "#52525b",
      primaryForeground: "#ffffff",
      highlight: null,
    },
    chartPalette: chartPalettes.monochrome,
  },
  {
    id: "ink",
    label: "Ink",
    runtimeId: "ink",
    description: "Near-black primary — dev consoles and precision tools",
    neutral: neutralZinc,
    roles: {
      primary: "#171717",
      primaryForeground: "#fafafa",
      highlight: null,
    },
    chartPalette: chartPalettes.ink,
  },
  {
    id: "signal",
    label: "Signal",
    runtimeId: "signal",
    description: "Functional orange — infra, security, and ops dashboards",
    neutral: neutralCool,
    roles: {
      primary: "#f38020",
      primaryForeground: "#ffffff",
      highlight: "#fbbf24",
    },
    chartPalette: chartPalettes.signal,
  },
  {
    id: "stripe",
    label: "Stripe",
    runtimeId: "stripe",
    description: "Blurple primary — payments and trust-heavy fintech",
    neutral: neutralCool,
    roles: {
      primary: "#635bff",
      primaryForeground: "#ffffff",
      highlight: "#00d4ff",
    },
    chartPalette: chartPalettes.stripe,
  },
  {
    id: "merchant",
    label: "Merchant",
    runtimeId: "merchant",
    description: "Commerce green — storefront admin and catalog tools",
    neutral: neutralStone,
    roles: {
      primary: "#008060",
      primaryForeground: "#ffffff",
      highlight: "#95bf47",
    },
    chartPalette: chartPalettes.merchant,
  },
  {
    id: "workspace",
    label: "Workspace",
    runtimeId: "workspace",
    description: "Warm gray primary — docs, wikis, and collaboration",
    neutral: neutralStone,
    roles: {
      primary: "#37352f",
      primaryForeground: "#ffffff",
      highlight: "#2383e2",
    },
    chartPalette: chartPalettes.workspace,
  },
  {
    id: "lookbook",
    label: "Lookbook",
    runtimeId: "lookbook",
    description: "Ink on warm paper with acid accent — editorial commerce",
    neutral: neutralPaper,
    roles: {
      primary: "#111111",
      primaryForeground: "#f5f3ef",
      highlight: "#c8ff00",
    },
    chartPalette: chartPalettes.lookbook,
  },
] as const satisfies readonly ThemePreset[]

export type BrandPresetName = (typeof brandPresetCatalog)[number]["id"]

/** @deprecated use brandPresetCatalog */
export type BrandPreset = ThemePreset

export function presetToBrandRamp(preset: ThemePreset): BrandRamp {
  return expandBrandRamp(preset.roles.primary)
}

export const brandPresets = Object.fromEntries(
  brandPresetCatalog.map((preset) => [preset.id, presetToBrandRamp(preset)]),
) as Record<BrandPresetName, BrandRamp>

export const neutralPresets = Object.fromEntries(
  brandPresetCatalog.map((preset) => [preset.id, preset.neutral]),
) as Record<BrandPresetName, NeutralRamp>

export const rolesPresets = Object.fromEntries(
  brandPresetCatalog.map((preset) => [preset.id, preset.roles]),
) as Record<BrandPresetName, BrandRoles>

export const chartPalettePresets = Object.fromEntries(
  brandPresetCatalog.map((preset) => [preset.id, preset.chartPalette]),
) as Record<BrandPresetName, ChartPalette>

const BRAND_RAMP_STEPS: BrandRampStep[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]

export function formatBrandRampBlock(
  ramp: BrandRamp,
  indent = "  ",
): string {
  return BRAND_RAMP_STEPS.map(
    (step) => `${indent}--brand-${step}: ${ramp[step]};`,
  ).join("\n")
}

export function formatCommentedPresets(
  excludeId: BrandPresetName = "product",
): string {
  return brandPresetCatalog
    .filter((preset) => preset.id !== excludeId)
    .map((preset) => {
      const neutralLines = formatNeutralRampBlock(preset.neutral, "")
      const brandLines = BRAND_RAMP_STEPS.map(
        (step) => `--brand-${step}: ${expandBrandRamp(preset.roles.primary)[step]};`,
      ).join("\n")
      const highlight = preset.roles.highlight
        ? `--brand-highlight: ${preset.roles.highlight};`
        : ""
      return `/* // ${preset.id}\n${neutralLines}\n${brandLines}\n${highlight} */`
    })
    .join("\n\n")
}

export function formatRuntimePresetsCss(): string {
  return brandPresetCatalog
    .filter((preset) => preset.runtimeId !== null)
    .map((preset) => {
      const lines = [
        formatNeutralRampBlock(preset.neutral),
        formatBrandRampBlock(expandBrandRamp(preset.roles.primary)),
        ...(preset.roles.highlight
          ? [`  --brand-highlight: ${preset.roles.highlight};`]
          : []),
      ].join("\n")
      return `:root[data-brand="${preset.runtimeId}"] {\n${lines}\n}`
    })
    .join("\n\n")
}

export { defaultChartPalette }
