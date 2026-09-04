/**
 * UI neutral ramps — surfaces, typography, borders.
 * Low chroma; temperature-matched per preset (zinc, stone, cool).
 */

export type NeutralStep =
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

export type NeutralRamp = Record<NeutralStep, string>

export const NEUTRAL_STEPS: NeutralStep[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]

/** Balanced zinc — default product UI */
export const neutralZinc: NeutralRamp = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b",
}

/** Fashion / editorial canvas — warm paper */
export const neutralPaper: NeutralRamp = {
  50: "#f5f3ef",
  100: "#ebe8e2",
  200: "#d9d6d0",
  300: "#c8c4bc",
  400: "#a39e95",
  500: "#7a756d",
  600: "#5c5852",
  700: "#44403c",
  800: "#2a2826",
  900: "#111111",
  950: "#0a0a0a",
}

/** Warm stone — terracotta, parchment presets */
export const neutralStone: NeutralRamp = {
  50: "#fafaf9",
  100: "#f5f5f4",
  200: "#e7e5e4",
  300: "#d6d3d1",
  400: "#a8a29e",
  500: "#78716c",
  600: "#57534e",
  700: "#44403c",
  800: "#292524",
  900: "#1c1917",
  950: "#0c0a09",
}

/** Cool slate — blue, ocean presets */
export const neutralCool: NeutralRamp = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
  950: "#020617",
}

export function formatNeutralRampBlock(
  ramp: NeutralRamp,
  indent = "  ",
): string {
  return NEUTRAL_STEPS.map(
    (step) => `${indent}--neutral-${step}: ${ramp[step]};`,
  ).join("\n")
}
