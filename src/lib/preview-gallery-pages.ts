import type { PreviewEntry } from "@/components/preview/preview-registry"

/** Component gallery buckets — primitives and composed UI. Template is a separate page. */
export const PREVIEW_PAGE_COUNT = 2

export const PRIMITIVE_IDS = new Set([
  "actions",
  "button-groups",
  "icons",
  "menus",
  "charts",
  "table",
  "inputs",
  "field",
  "toggles",
  "sliders",
  "popovers",
  "tooltip",
  "badges",
  "tabs",
  "accordion",
  "collapsible",
  "alerts",
  "alert-dialog",
  "dialogs",
  "avatars",
  "breadcrumb",
  "toast",
  "sheet",
  "skeleton",
  "progress",
  "separator",
  "scroll-area",
])

const OVERLAY_PRIMITIVE_IDS = new Set([
  "alert-dialog",
  "dialogs",
  "popovers",
  "sheet",
  "toast",
  "menus",
])

export function isPrimitiveId(id: string): boolean {
  return PRIMITIVE_IDS.has(id)
}

export function isOverlayPrimitive(id: string): boolean {
  return OVERLAY_PRIMITIVE_IDS.has(id)
}

function previewPageIndex(id: string): number {
  return PRIMITIVE_IDS.has(id) ? 0 : 1
}

export function paginatePreviewEntries(entries: PreviewEntry[]): PreviewEntry[][] {
  const pages: PreviewEntry[][] = Array.from({ length: PREVIEW_PAGE_COUNT }, () => [])

  for (const entry of entries) {
    pages[previewPageIndex(entry.id)]!.push(entry)
  }

  return pages
}
