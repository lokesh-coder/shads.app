import type { PreviewEntry } from "@/components/preview/preview-registry"
import { getPreviewCategory } from "@/components/preview/preview-labels"

/** Structured gallery pages — primitives first, then product UI, domain, states. */
export const PREVIEW_PAGE_COUNT = 4

const PRIMITIVE_IDS = new Set([
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

const PRODUCT_SCENARIO_IDS = new Set([
  "auth",
  "signup",
  "forgot-password",
  "otp-verify",
  "magic-link",
  "profile-edit",
  "delete-account",
  "api-key",
  "shipping-address",
  "payment-method",
  "order-summary",
  "cart-item",
  "coupon-code",
  "billing-plan",
  "pricing-card",
  "success-receipt",
  "upgrade-prompt",
  "invite-team",
  "team-member",
  "assignee-picker",
  "permissions",
  "comment",
  "activity-item",
  "project-status",
  "schedule-meeting",
  "notification-settings",
  "cookie-banner",
  "search-filters",
  "export-data",
  "file-upload",
])

const STATE_MARKETING_IDS = new Set([
  "empty-state",
  "error-state",
  "onboarding",
  "report-bug",
  "maintenance",
  "newsletter",
  "waitlist",
  "hero-cta",
  "testimonial",
  "feature-highlight",
  "kpi-stats",
])

function previewPageIndex(id: string): number {
  if (PRIMITIVE_IDS.has(id)) return 0
  if (PRODUCT_SCENARIO_IDS.has(id)) return 1
  if (STATE_MARKETING_IDS.has(id)) return 3
  if (getPreviewCategory(id)) return 2
  return 2
}

export function paginatePreviewEntries(entries: PreviewEntry[]): PreviewEntry[][] {
  const pages: PreviewEntry[][] = Array.from({ length: PREVIEW_PAGE_COUNT }, () => [])

  for (const entry of entries) {
    pages[previewPageIndex(entry.id)]!.push(entry)
  }

  return pages
}
