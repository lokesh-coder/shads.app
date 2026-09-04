import type { FontId } from "@/tokens/fonts"
import type { PresetOption } from "@/tokens/preset-types"

export type TypographyPreset = PresetOption & {
  fonts: { sans: FontId; heading: FontId; mono: FontId }
}

export const typographyPresets = [
  {
    id: "product",
    label: "Product",
    description: "Figtree body + Instrument headings — default SaaS pairing",
    fonts: { sans: "figtree", heading: "instrument-sans", mono: "geist-mono" },
  },
  {
    id: "modern",
    label: "Modern",
    description: "Plus Jakarta throughout — friendly consumer apps",
    fonts: {
      sans: "plus-jakarta",
      heading: "plus-jakarta",
      mono: "geist-mono",
    },
  },
  {
    id: "technical",
    label: "Technical",
    description: "Geist + JetBrains Mono — dev tools and dashboards",
    fonts: { sans: "geist", heading: "geist", mono: "jetbrains-mono" },
  },
  {
    id: "editorial",
    label: "Editorial",
    description: "DM Sans body + Newsreader headings — magazines and publishing",
    fonts: { sans: "dm-sans", heading: "newsreader", mono: "geist-mono" },
  },
  {
    id: "fashion",
    label: "Fashion",
    description: "DM Sans body + Instrument display — image-led retail",
    fonts: { sans: "dm-sans", heading: "instrument-sans", mono: "geist-mono" },
  },
  {
    id: "launch",
    label: "Launch",
    description: "Outfit body + Fraunces display — marketing hero pages",
    fonts: { sans: "outfit", heading: "fraunces", mono: "geist-mono" },
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Inter everywhere — neutral, system-like UI",
    fonts: { sans: "inter", heading: "inter", mono: "jetbrains-mono" },
  },
  {
    id: "contrast",
    label: "Contrast",
    description: "Source Sans body + Space Grotesk headings — clear hierarchy",
    fonts: {
      sans: "source-sans-3",
      heading: "space-grotesk",
      mono: "geist-mono",
    },
  },
  {
    id: "enterprise",
    label: "Enterprise",
    description: "IBM Plex Sans + Manrope — calm B2B interfaces",
    fonts: {
      sans: "ibm-plex-sans",
      heading: "manrope",
      mono: "source-code-pro",
    },
  },
] as const satisfies readonly TypographyPreset[]

export type TypographyPresetId = (typeof typographyPresets)[number]["id"]

export function matchTypographyPresetId(fonts: {
  sans: string
  heading: string
  mono: string
}): TypographyPresetId | null {
  return (
    typographyPresets.find(
      (preset) =>
        preset.fonts.sans === fonts.sans &&
        preset.fonts.heading === fonts.heading &&
        preset.fonts.mono === fonts.mono,
    )?.id ?? null
  )
}
