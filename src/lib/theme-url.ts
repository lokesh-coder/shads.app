import type { ThemeConfig } from "@/lib/theme-config"
import {
  clearShareUrl,
  deserializeThemeConfig,
  parseShareUrl,
  serializeThemeConfig,
  syncShareUrl,
  type ShareState,
} from "@/lib/share-url"

/** @deprecated Use parseShareUrl from share-url */
export function parseThemeUrl(): ThemeConfig {
  return parseShareUrl().config
}

/** @deprecated Use syncShareUrl from share-url */
export function syncThemeUrl(config: ThemeConfig): void {
  const state: ShareState = { ...parseShareUrl(), config }
  syncShareUrl(state)
}

export { serializeThemeConfig, deserializeThemeConfig, clearShareUrl as clearThemeUrl }
