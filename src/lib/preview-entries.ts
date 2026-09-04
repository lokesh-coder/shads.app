import type { PreviewEntry } from "@/components/preview/preview-registry"
import { PREVIEW_ENTRIES } from "@/components/preview/preview-registry"
import { getPreviewCategory } from "@/components/preview/preview-labels"
import { PRESET_PREVIEW_ENTRIES } from "@/components/preview/preset-registry"
import { matchGlobalPresetId, type ThemeConfig } from "@/lib/theme-config"
import type { GlobalPresetId } from "@/tokens/global-presets"
import type { PreviewSettings } from "@/tokens/preview-settings"

function orderPreviewEntries(
  entries: PreviewEntry[],
  settings: PreviewSettings,
): PreviewEntry[] {
  const featured = settings.featuredCategories
  if (!featured?.length) return entries

  const priority = new Map(featured.map((category, index) => [category, index]))
  const featuredEntries: PreviewEntry[] = []
  const otherEntries: PreviewEntry[] = []

  for (const entry of entries) {
    const category = getPreviewCategory(entry.id)
    if (category && priority.has(category)) {
      featuredEntries.push(entry)
    } else {
      otherEntries.push(entry)
    }
  }

  featuredEntries.sort((a, b) => {
    const aCat = getPreviewCategory(a.id) ?? ""
    const bCat = getPreviewCategory(b.id) ?? ""
    return (priority.get(aCat) ?? 0) - (priority.get(bCat) ?? 0)
  })

  return [...featuredEntries, ...otherEntries]
}

/**
 * Full shadcn component gallery for every theme. Preset-specific showcases are
 * prepended; nothing is removed from the library.
 */
export function resolvePreviewEntries(config: ThemeConfig): PreviewEntry[] {
  const presetId = matchGlobalPresetId(config) as GlobalPresetId | null
  const highlights =
    presetId && presetId in PRESET_PREVIEW_ENTRIES
      ? PRESET_PREVIEW_ENTRIES[presetId]
      : []

  const highlightIds = new Set(highlights.map((entry) => entry.id))
  const gallery = PREVIEW_ENTRIES.filter((entry) => !highlightIds.has(entry.id))

  return orderPreviewEntries([...highlights, ...gallery], config.preview)
}
