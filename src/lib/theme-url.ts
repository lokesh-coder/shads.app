import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string"

import {
  createDefaultConfig,
  mergeConfig,
  type ThemeConfig,
} from "@/lib/theme-config"

const URL_PARAM = "config"

export function serializeThemeConfig(config: ThemeConfig): string {
  return compressToEncodedURIComponent(JSON.stringify(config))
}

export function deserializeThemeConfig(encoded: string): ThemeConfig | null {
  try {
    const json = decompressFromEncodedURIComponent(encoded)
    if (!json) return null
    const parsed = JSON.parse(json) as ThemeConfig
    return mergeConfig(createDefaultConfig(), parsed)
  } catch {
    return null
  }
}

export function parseThemeUrl(): ThemeConfig {
  const hash = window.location.hash.replace(/^#/, "")
  const params = new URLSearchParams(hash)
  const encoded = params.get(URL_PARAM)
  if (!encoded) return createDefaultConfig()
  return deserializeThemeConfig(encoded) ?? createDefaultConfig()
}

export function syncThemeUrl(config: ThemeConfig): void {
  const encoded = serializeThemeConfig(config)
  const nextHash = `${URL_PARAM}=${encoded}`
  if (window.location.hash.replace(/^#/, "") !== nextHash) {
    window.history.replaceState(null, "", `#${nextHash}`)
  }
}

export function clearThemeUrl(): void {
  window.history.replaceState(null, "", window.location.pathname)
}
