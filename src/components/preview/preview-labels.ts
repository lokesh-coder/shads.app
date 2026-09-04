import { AUTH_CATEGORY_ENTRIES } from "@/components/preview/showcases/categories/auth"
import { COMMERCE_CATEGORY_ENTRIES } from "@/components/preview/showcases/categories/commerce"
import { DASHBOARD_CATEGORY_ENTRIES } from "@/components/preview/showcases/categories/dashboard"
import { DEVELOPER_CATEGORY_ENTRIES } from "@/components/preview/showcases/categories/developer"
import { EDITORIAL_CATEGORY_ENTRIES } from "@/components/preview/showcases/categories/editorial"
import { MEDIA_CATEGORY_ENTRIES } from "@/components/preview/showcases/categories/media"

const CATEGORY_BY_ID = new Map<string, string>()

for (const entry of AUTH_CATEGORY_ENTRIES) {
  CATEGORY_BY_ID.set(entry.id, "Auth")
}
for (const entry of DASHBOARD_CATEGORY_ENTRIES) {
  CATEGORY_BY_ID.set(entry.id, "Dashboard")
}
for (const entry of EDITORIAL_CATEGORY_ENTRIES) {
  CATEGORY_BY_ID.set(entry.id, "Editorial")
}
for (const entry of MEDIA_CATEGORY_ENTRIES) {
  CATEGORY_BY_ID.set(entry.id, "Media")
}
for (const entry of DEVELOPER_CATEGORY_ENTRIES) {
  CATEGORY_BY_ID.set(entry.id, "Developer")
}
for (const entry of COMMERCE_CATEGORY_ENTRIES) {
  CATEGORY_BY_ID.set(entry.id, "Commerce")
}

export function formatPreviewLabel(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function getPreviewCategory(id: string): string | null {
  return CATEGORY_BY_ID.get(id) ?? null
}
