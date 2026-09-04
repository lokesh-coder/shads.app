import type { FontId } from "@/tokens/fonts"

const loadedFonts = new Set<string>()

const fontImportMap: Record<FontId, () => Promise<unknown>> = {
  "dm-sans": () => import("@fontsource-variable/dm-sans"),
  figtree: () => import("@fontsource-variable/figtree"),
  "fira-code": () => import("@fontsource-variable/fira-code"),
  fraunces: () => import("@fontsource-variable/fraunces"),
  geist: () => import("@fontsource-variable/geist"),
  "geist-mono": () => import("@fontsource-variable/geist-mono"),
  "ibm-plex-sans": () => import("@fontsource-variable/ibm-plex-sans"),
  "instrument-sans": () => import("@fontsource-variable/instrument-sans"),
  inter: () => import("@fontsource-variable/inter"),
  "jetbrains-mono": () => import("@fontsource-variable/jetbrains-mono"),
  lora: () => import("@fontsource-variable/lora"),
  manrope: () => import("@fontsource-variable/manrope"),
  newsreader: () => import("@fontsource-variable/newsreader"),
  "nunito-sans": () => import("@fontsource-variable/nunito-sans"),
  outfit: () => import("@fontsource-variable/outfit"),
  "plus-jakarta": () => import("@fontsource-variable/plus-jakarta-sans"),
  "roboto-mono": () => import("@fontsource-variable/roboto-mono"),
  sora: () => import("@fontsource-variable/sora"),
  "source-code-pro": () => import("@fontsource-variable/source-code-pro"),
  "source-sans-3": () => import("@fontsource-variable/source-sans-3"),
  "space-grotesk": () => import("@fontsource-variable/space-grotesk"),
  urbanist: () => import("@fontsource-variable/urbanist"),
  "work-sans": () => import("@fontsource-variable/work-sans"),
}

export async function loadFont(fontId: string): Promise<void> {
  if (loadedFonts.has(fontId)) return
  const loader = fontImportMap[fontId as FontId]
  if (!loader) return
  await loader()
  loadedFonts.add(fontId)
}

export async function loadFonts(fontIds: string[]): Promise<void> {
  await Promise.all(fontIds.map(loadFont))
}

export function collectPresetFontIds(
  presets: readonly { fonts: { sans: string; heading: string; mono: string } }[],
): string[] {
  const ids = new Set<string>()
  for (const preset of presets) {
    ids.add(preset.fonts.sans)
    ids.add(preset.fonts.heading)
    ids.add(preset.fonts.mono)
  }
  return [...ids]
}
