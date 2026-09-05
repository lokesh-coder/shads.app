import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string"

import {
  createDefaultConfig,
  mergeConfig,
  type ThemeConfig,
} from "@/lib/theme-config"
import { isPrimitiveId } from "@/lib/preview-gallery-pages"

export type GalleryTab = "primitives" | "components" | "template"

export type ShareState = {
  config: ThemeConfig
  tab: GalleryTab
  item?: string
  isDark: boolean
}

const TAB_PARAM = "p"
const CONFIG_PARAM = "c"
const LEGACY_CONFIG_PARAM = "config"
const ITEM_PARAM = "item"
const DARK_PARAM = "d"

export const GALLERY_TABS: GalleryTab[] = ["primitives", "components", "template"]

const LEGACY_TAB_BY_INDEX: Record<string, GalleryTab> = {
  "0": "primitives",
  "1": "components",
  "2": "components",
  "3": "components",
  "4": "template",
}

export function galleryTabToIndex(tab: GalleryTab): number {
  switch (tab) {
    case "components":
      return 1
    case "template":
      return 2
    default:
      return 0
  }
}

export function indexToGalleryTab(index: number): GalleryTab {
  if (index === 1) return "components"
  if (index === 2) return "template"
  return "primitives"
}

export function tabFromShowcaseId(id: string): GalleryTab {
  return isPrimitiveId(id) ? "primitives" : "components"
}

export function isGalleryTab(value: string): value is GalleryTab {
  return (GALLERY_TABS as string[]).includes(value)
}

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

function parseGalleryTab(raw: string | null): GalleryTab {
  if (!raw) return "primitives"
  if (isGalleryTab(raw)) return raw
  return LEGACY_TAB_BY_INDEX[raw] ?? "primitives"
}

function readHashParams(): URLSearchParams {
  const hash = window.location.hash.replace(/^#/, "")
  return new URLSearchParams(hash)
}

export function parseShareUrl(): ShareState {
  const params = readHashParams()
  const encoded =
    params.get(CONFIG_PARAM) ?? params.get(LEGACY_CONFIG_PARAM)
  const config = encoded
    ? (deserializeThemeConfig(encoded) ?? createDefaultConfig())
    : createDefaultConfig()

  const item = params.get(ITEM_PARAM) ?? undefined
  let tab = parseGalleryTab(params.get(TAB_PARAM))

  if (item) {
    tab = tabFromShowcaseId(item)
  }

  const isDark = params.get(DARK_PARAM) === "1"

  return { config, tab, item, isDark }
}

function buildHashFromState(state: ShareState): string {
  const params = new URLSearchParams()
  params.set(TAB_PARAM, state.tab)
  params.set(CONFIG_PARAM, serializeThemeConfig(state.config))
  if (state.isDark) params.set(DARK_PARAM, "1")
  if (state.item) params.set(ITEM_PARAM, state.item)
  return params.toString()
}

export function syncShareUrl(state: ShareState): void {
  const nextHash = buildHashFromState(state)
  if (window.location.hash.replace(/^#/, "") !== nextHash) {
    window.history.replaceState(null, "", `#${nextHash}`)
  }
}

export function buildShareUrl(state: ShareState): string {
  const hash = buildHashFromState(state)
  return `${window.location.origin}${window.location.pathname}#${hash}`
}

export async function copyShareUrl(state: ShareState): Promise<void> {
  syncShareUrl(state)
  const url = buildShareUrl(state)
  await navigator.clipboard.writeText(url)
}

export function clearShareUrl(): void {
  window.history.replaceState(null, "", window.location.pathname)
}
