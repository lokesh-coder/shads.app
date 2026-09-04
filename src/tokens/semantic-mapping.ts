/**
 * Semantic mapping — neutrals for structure, brand ramp for primary only.
 * Charts use a separate curated palette (not brand steps).
 */
import type { BrandStep } from "@/lib/theme-config"
import type { NeutralStep } from "@/tokens/neutral"

export type PrimaryForeground = BrandStep | `#${string}`

export type SemanticMapping = {
  background: "#ffffff" | NeutralStep
  card: "#ffffff" | NeutralStep
  foreground: NeutralStep
  muted: NeutralStep
  mutedForeground: NeutralStep
  secondary: NeutralStep
  secondaryForeground: NeutralStep
  accent: NeutralStep
  accentForeground: NeutralStep
  border: NeutralStep
  input: NeutralStep
  sidebar: NeutralStep
  sidebarAccent: NeutralStep
  sidebarAccentForeground: NeutralStep
  sidebarBorder: NeutralStep
  primary: BrandStep
  primaryForeground: PrimaryForeground
  ring: BrandStep
}

export const semanticMapping = {
  light: {
    background: "#ffffff" as const,
    card: "#ffffff" as const,
    foreground: 900,
    muted: 100,
    mutedForeground: 500,
    secondary: 100,
    secondaryForeground: 900,
    accent: 100,
    accentForeground: 900,
    border: 200,
    input: 200,
    sidebar: 50,
    sidebarAccent: 100,
    sidebarAccentForeground: 900,
    sidebarBorder: 200,
    primary: 600,
    primaryForeground: "#ffffff" as const,
    ring: 400,
  },
  dark: {
    background: 950,
    card: 900,
    foreground: 50,
    muted: 800,
    mutedForeground: 400,
    secondary: 800,
    secondaryForeground: 50,
    accent: 800,
    accentForeground: 50,
    border: 800,
    input: 800,
    sidebar: 900,
    sidebarAccent: 800,
    sidebarAccentForeground: 50,
    sidebarBorder: 800,
    primary: 400,
    primaryForeground: "#09090b" as const,
    ring: 500,
  },
} satisfies { light: SemanticMapping; dark: SemanticMapping }
