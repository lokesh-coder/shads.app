export type FontId =
  | "dm-sans"
  | "figtree"
  | "fira-code"
  | "fraunces"
  | "geist"
  | "geist-mono"
  | "ibm-plex-sans"
  | "instrument-sans"
  | "inter"
  | "jetbrains-mono"
  | "lora"
  | "manrope"
  | "newsreader"
  | "nunito-sans"
  | "outfit"
  | "plus-jakarta"
  | "roboto-mono"
  | "sora"
  | "source-code-pro"
  | "source-sans-3"
  | "space-grotesk"
  | "urbanist"
  | "work-sans"

export type FontRole = "sans" | "heading" | "mono"

export type FontDefinition = {
  id: FontId
  label: string
  packageName: string
  family: string
  roles: FontRole[]
}

export const fontCatalog: FontDefinition[] = [
  {
    id: "dm-sans",
    label: "DM Sans",
    packageName: "@fontsource-variable/dm-sans",
    family: "'DM Sans Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "figtree",
    label: "Figtree",
    packageName: "@fontsource-variable/figtree",
    family: "'Figtree Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "fraunces",
    label: "Fraunces",
    packageName: "@fontsource-variable/fraunces",
    family: "'Fraunces Variable', serif",
    roles: ["heading"],
  },
  {
    id: "geist",
    label: "Geist",
    packageName: "@fontsource-variable/geist",
    family: "'Geist Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "ibm-plex-sans",
    label: "IBM Plex Sans",
    packageName: "@fontsource-variable/ibm-plex-sans",
    family: "'IBM Plex Sans Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "instrument-sans",
    label: "Instrument Sans",
    packageName: "@fontsource-variable/instrument-sans",
    family: "'Instrument Sans Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "inter",
    label: "Inter",
    packageName: "@fontsource-variable/inter",
    family: "'Inter Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "lora",
    label: "Lora",
    packageName: "@fontsource-variable/lora",
    family: "'Lora Variable', serif",
    roles: ["heading"],
  },
  {
    id: "manrope",
    label: "Manrope",
    packageName: "@fontsource-variable/manrope",
    family: "'Manrope Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "newsreader",
    label: "Newsreader",
    packageName: "@fontsource-variable/newsreader",
    family: "'Newsreader Variable', serif",
    roles: ["heading"],
  },
  {
    id: "nunito-sans",
    label: "Nunito Sans",
    packageName: "@fontsource-variable/nunito-sans",
    family: "'Nunito Sans Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "outfit",
    label: "Outfit",
    packageName: "@fontsource-variable/outfit",
    family: "'Outfit Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "plus-jakarta",
    label: "Plus Jakarta Sans",
    packageName: "@fontsource-variable/plus-jakarta-sans",
    family: "'Plus Jakarta Sans Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "sora",
    label: "Sora",
    packageName: "@fontsource-variable/sora",
    family: "'Sora Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "source-sans-3",
    label: "Source Sans 3",
    packageName: "@fontsource-variable/source-sans-3",
    family: "'Source Sans 3 Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "space-grotesk",
    label: "Space Grotesk",
    packageName: "@fontsource-variable/space-grotesk",
    family: "'Space Grotesk Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "urbanist",
    label: "Urbanist",
    packageName: "@fontsource-variable/urbanist",
    family: "'Urbanist Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "work-sans",
    label: "Work Sans",
    packageName: "@fontsource-variable/work-sans",
    family: "'Work Sans Variable', sans-serif",
    roles: ["sans", "heading"],
  },
  {
    id: "fira-code",
    label: "Fira Code",
    packageName: "@fontsource-variable/fira-code",
    family: "'Fira Code Variable', monospace",
    roles: ["mono"],
  },
  {
    id: "geist-mono",
    label: "Geist Mono",
    packageName: "@fontsource-variable/geist-mono",
    family: "'Geist Mono Variable', monospace",
    roles: ["mono"],
  },
  {
    id: "jetbrains-mono",
    label: "JetBrains Mono",
    packageName: "@fontsource-variable/jetbrains-mono",
    family: "'JetBrains Mono Variable', monospace",
    roles: ["mono"],
  },
  {
    id: "roboto-mono",
    label: "Roboto Mono",
    packageName: "@fontsource-variable/roboto-mono",
    family: "'Roboto Mono Variable', monospace",
    roles: ["mono"],
  },
  {
    id: "source-code-pro",
    label: "Source Code Pro",
    packageName: "@fontsource-variable/source-code-pro",
    family: "'Source Code Pro Variable', monospace",
    roles: ["mono"],
  },
]

export const defaultFonts = {
  sans: "figtree",
  heading: "instrument-sans",
  mono: "geist-mono",
} as const satisfies Record<FontRole, FontId>

export function getFontById(id: string): FontDefinition | undefined {
  return fontCatalog.find((font) => font.id === id)
}

export function fontsForRole(role: "sans" | "heading"): FontDefinition[] {
  return fontCatalog.filter((font) => font.roles.includes(role))
}

export const sansFonts = fontsForRole("sans")
export const headingFonts = fontsForRole("heading")
export const monoFonts = fontCatalog.filter((font) => font.roles.includes("mono"))
