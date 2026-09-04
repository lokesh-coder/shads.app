import { AUTH_CATEGORY_ENTRIES } from "./auth"
import { COMMERCE_CATEGORY_ENTRIES } from "./commerce"
import { DASHBOARD_CATEGORY_ENTRIES } from "./dashboard"
import { DEVELOPER_CATEGORY_ENTRIES } from "./developer"
import { EDITORIAL_CATEGORY_ENTRIES } from "./editorial"
import { MEDIA_CATEGORY_ENTRIES } from "./media"

export type { CategoryEntry } from "./auth"

export const CATEGORY_ENTRIES = [
  ...AUTH_CATEGORY_ENTRIES,
  ...DASHBOARD_CATEGORY_ENTRIES,
  ...EDITORIAL_CATEGORY_ENTRIES,
  ...MEDIA_CATEGORY_ENTRIES,
  ...DEVELOPER_CATEGORY_ENTRIES,
  ...COMMERCE_CATEGORY_ENTRIES,
]
