/**
 * Role-based brand authoring — what designers configure.
 * Full ramps are derived for CSS export, not edited step-by-step.
 */

export type BrandRampStep =
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

export type BrandRamp = Record<BrandRampStep, string>

export type HexColor = `#${string}`

export type BrandRoles = {
  /** Main CTA / primary actions */
  primary: HexColor
  primaryForeground: HexColor
  /** Optional — charts, tags, KPI highlights only (never shadcn secondary) */
  highlight: HexColor | null
}

export type ChartPalette = [
  HexColor,
  HexColor,
  HexColor,
  HexColor,
  HexColor,
]

export const BRAND_RAMP_STEPS: BrandRampStep[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]

/** Lightness mix toward white (tints) or black (shades) per step */
const RAMP_MIX: Record<BrandRampStep, { toward: "white" | "black"; amount: number }> = {
  50: { toward: "white", amount: 0.92 },
  100: { toward: "white", amount: 0.84 },
  200: { toward: "white", amount: 0.68 },
  300: { toward: "white", amount: 0.5 },
  400: { toward: "white", amount: 0.28 },
  500: { toward: "white", amount: 0.12 },
  600: { toward: "black", amount: 0 },
  700: { toward: "black", amount: 0.18 },
  800: { toward: "black", amount: 0.35 },
  900: { toward: "black", amount: 0.52 },
  950: { toward: "black", amount: 0.68 },
}

function parseHex(hex: HexColor): [number, number, number] {
  const raw = hex.replace("#", "")
  const value =
    raw.length === 3
      ? raw
          .split("")
          .map((c) => c + c)
          .join("")
      : raw
  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ]
}

function toHex(r: number, g: number, b: number): HexColor {
  const clamp = (n: number) => Math.round(Math.min(255, Math.max(0, n)))
  return `#${[clamp(r), clamp(g), clamp(b)]
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("")}` as HexColor
}

function mixHex(base: HexColor, target: HexColor, amount: number): HexColor {
  const [br, bg, bb] = parseHex(base)
  const [tr, tg, tb] = parseHex(target)
  const t = Math.min(1, Math.max(0, amount))
  return toHex(
    br + (tr - br) * t,
    bg + (tg - bg) * t,
    bb + (tb - bb) * t,
  )
}

/** Expand a seed color into an 11-step ramp (implementation detail for export) */
export function expandBrandRamp(seed: HexColor, anchorStep: BrandRampStep = 600): BrandRamp {
  const ramp = {} as BrandRamp
  for (const step of BRAND_RAMP_STEPS) {
    if (step === anchorStep) {
      ramp[step] = seed
      continue
    }
    const mix = RAMP_MIX[step]
    const target = mix.toward === "white" ? "#ffffff" : "#000000"
    const amount =
      step < anchorStep
        ? mix.amount
        : mix.amount
    ramp[step] = mixHex(seed, target as HexColor, amount)
  }
  return ramp
}

export const defaultBrandRoles: BrandRoles = {
  primary: "#6a5d80",
  primaryForeground: "#ffffff",
  highlight: null,
}

/** Restrained product chart palette — harmonized, not ramp-derived */
export const defaultChartPalette: ChartPalette = [
  "#6a5d80",
  "#0891b2",
  "#059669",
  "#d97706",
  "#e11d48",
]

export const chartPalettes = {
  product: defaultChartPalette,
  forest: ["#176b5b", "#34d399", "#065f46", "#6ee7b7", "#064e3b"] as ChartPalette,
  ocean: ["#0c5563", "#22d3ee", "#0e7490", "#67e8f9", "#164e63"] as ChartPalette,
  warm: ["#b84a28", "#f59e0b", "#c2410c", "#fcd34d", "#9a3412"] as ChartPalette,
  indigo: ["#4f46e5", "#818cf8", "#6366f1", "#a5b4fc", "#3730a3"] as ChartPalette,
  monochrome: ["#52525b", "#a1a1aa", "#71717a", "#d4d4d8", "#3f3f46"] as ChartPalette,
  ink: ["#171717", "#52525b", "#3b82f6", "#22c55e", "#a1a1aa"] as ChartPalette,
  signal: ["#f38020", "#3b82f6", "#22c55e", "#fbbf24", "#ef4444"] as ChartPalette,
  stripe: ["#635bff", "#00d4ff", "#22c55e", "#f59e0b", "#ef4444"] as ChartPalette,
  merchant: ["#008060", "#95bf47", "#b84a28", "#f59e0b", "#4f46e5"] as ChartPalette,
  workspace: ["#37352f", "#2383e2", "#9065b0", "#d9730d", "#448361"] as ChartPalette,
  lookbook: ["#111111", "#c8ff00", "#5c5852", "#d9d6d0", "#44403c"] as ChartPalette,
}
