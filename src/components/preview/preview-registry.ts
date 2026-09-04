import type { ComponentType } from "react"

import { AccordionShowcase } from "@/components/preview/showcases/accordion-showcase"
import { ActionsShowcase } from "@/components/preview/showcases/actions-showcase"
import { AlertDialogShowcase } from "@/components/preview/showcases/alert-dialog-showcase"
import { AlertsShowcase } from "@/components/preview/showcases/alerts-showcase"
import { AuthShowcase } from "@/components/preview/showcases/auth-showcase"
import { AvatarsShowcase } from "@/components/preview/showcases/avatars-showcase"
import { BadgesShowcase } from "@/components/preview/showcases/badges-showcase"
import { BreadcrumbShowcase } from "@/components/preview/showcases/breadcrumb-showcase"
import { ButtonGroupsShowcase } from "@/components/preview/showcases/button-groups-showcase"
import { ChartsShowcase } from "@/components/preview/showcases/charts-showcase"
import { CollapsibleShowcase } from "@/components/preview/showcases/collapsible-showcase"
import { DialogsShowcase } from "@/components/preview/showcases/dialogs-showcase"
import { FieldShowcase } from "@/components/preview/showcases/field-showcase"
import { IconsShowcase } from "@/components/preview/showcases/icons-showcase"
import { InputsShowcase } from "@/components/preview/showcases/inputs-showcase"
import { MenusShowcase } from "@/components/preview/showcases/menus-showcase"
import { PopoversShowcase } from "@/components/preview/showcases/popovers-showcase"
import { ProgressShowcase } from "@/components/preview/showcases/progress-showcase"
import { ScrollAreaShowcase } from "@/components/preview/showcases/scroll-area-showcase"
import { SeparatorShowcase } from "@/components/preview/showcases/separator-showcase"
import { ActivityItemShowcase } from "@/components/preview/showcases/scenarios/activity-item-showcase"
import { ApiKeyShowcase } from "@/components/preview/showcases/scenarios/api-key-showcase"
import { AssigneePickerShowcase } from "@/components/preview/showcases/scenarios/assignee-picker-showcase"
import { BillingPlanShowcase } from "@/components/preview/showcases/scenarios/billing-plan-showcase"
import { CartItemShowcase } from "@/components/preview/showcases/scenarios/cart-item-showcase"
import { CommentShowcase } from "@/components/preview/showcases/scenarios/comment-showcase"
import { CookieBannerShowcase } from "@/components/preview/showcases/scenarios/cookie-banner-showcase"
import { CouponCodeShowcase } from "@/components/preview/showcases/scenarios/coupon-code-showcase"
import { DeleteAccountShowcase } from "@/components/preview/showcases/scenarios/delete-account-showcase"
import { EmptyStateShowcase } from "@/components/preview/showcases/scenarios/empty-state-showcase"
import { ErrorStateShowcase } from "@/components/preview/showcases/scenarios/error-state-showcase"
import { ExportDataShowcase } from "@/components/preview/showcases/scenarios/export-data-showcase"
import { FeatureHighlightShowcase } from "@/components/preview/showcases/scenarios/feature-highlight-showcase"
import { FileUploadShowcase } from "@/components/preview/showcases/scenarios/file-upload-showcase"
import { ForgotPasswordShowcase } from "@/components/preview/showcases/scenarios/forgot-password-showcase"
import { HeroCtaShowcase } from "@/components/preview/showcases/scenarios/hero-cta-showcase"
import { InviteTeamShowcase } from "@/components/preview/showcases/scenarios/invite-team-showcase"
import { KpiStatsShowcase } from "@/components/preview/showcases/scenarios/kpi-stats-showcase"
import { MagicLinkShowcase } from "@/components/preview/showcases/scenarios/magic-link-showcase"
import { MaintenanceShowcase } from "@/components/preview/showcases/scenarios/maintenance-showcase"
import { NewsletterShowcase } from "@/components/preview/showcases/scenarios/newsletter-showcase"
import { NotificationSettingsShowcase } from "@/components/preview/showcases/scenarios/notification-settings-showcase"
import { OnboardingShowcase } from "@/components/preview/showcases/scenarios/onboarding-showcase"
import { OrderSummaryShowcase } from "@/components/preview/showcases/scenarios/order-summary-showcase"
import { OtpVerifyShowcase } from "@/components/preview/showcases/scenarios/otp-verify-showcase"
import { PaymentMethodShowcase } from "@/components/preview/showcases/scenarios/payment-method-showcase"
import { PermissionsShowcase } from "@/components/preview/showcases/scenarios/permissions-showcase"
import { PricingCardShowcase } from "@/components/preview/showcases/scenarios/pricing-card-showcase"
import { ProfileEditShowcase } from "@/components/preview/showcases/scenarios/profile-edit-showcase"
import { ProjectStatusShowcase } from "@/components/preview/showcases/scenarios/project-status-showcase"
import { ReportBugShowcase } from "@/components/preview/showcases/scenarios/report-bug-showcase"
import { ScheduleMeetingShowcase } from "@/components/preview/showcases/scenarios/schedule-meeting-showcase"
import { SearchFiltersShowcase } from "@/components/preview/showcases/scenarios/search-filters-showcase"
import { ShippingAddressShowcase } from "@/components/preview/showcases/scenarios/shipping-address-showcase"
import { SignupShowcase } from "@/components/preview/showcases/scenarios/signup-showcase"
import { SuccessReceiptShowcase } from "@/components/preview/showcases/scenarios/success-receipt-showcase"
import { TeamMemberShowcase } from "@/components/preview/showcases/scenarios/team-member-showcase"
import { TestimonialShowcase } from "@/components/preview/showcases/scenarios/testimonial-showcase"
import { UpgradePromptShowcase } from "@/components/preview/showcases/scenarios/upgrade-prompt-showcase"
import { WaitlistShowcase } from "@/components/preview/showcases/scenarios/waitlist-showcase"
import { SheetShowcase } from "@/components/preview/showcases/sheet-showcase"
import { SkeletonShowcase } from "@/components/preview/showcases/skeleton-showcase"
import { SlidersShowcase } from "@/components/preview/showcases/sliders-showcase"
import { TableShowcase } from "@/components/preview/showcases/table-showcase"
import { TabsShowcase } from "@/components/preview/showcases/tabs-showcase"
import { ToastShowcase } from "@/components/preview/showcases/toast-showcase"
import { TooltipShowcase } from "@/components/preview/showcases/tooltip-showcase"
import { TogglesShowcase } from "@/components/preview/showcases/toggles-showcase"
import { CATEGORY_ENTRIES } from "@/components/preview/showcases/categories"

export type PreviewEntry = {
  id: string
  component: ComponentType
}

export const PREVIEW_ENTRIES: PreviewEntry[] = [
  // Component primitives
  { id: "actions", component: ActionsShowcase },
  { id: "button-groups", component: ButtonGroupsShowcase },
  { id: "icons", component: IconsShowcase },
  { id: "menus", component: MenusShowcase },
  { id: "charts", component: ChartsShowcase },
  { id: "table", component: TableShowcase },
  { id: "inputs", component: InputsShowcase },
  { id: "field", component: FieldShowcase },
  { id: "toggles", component: TogglesShowcase },
  { id: "sliders", component: SlidersShowcase },
  { id: "popovers", component: PopoversShowcase },
  { id: "tooltip", component: TooltipShowcase },
  { id: "badges", component: BadgesShowcase },
  { id: "tabs", component: TabsShowcase },
  { id: "accordion", component: AccordionShowcase },
  { id: "collapsible", component: CollapsibleShowcase },
  { id: "alerts", component: AlertsShowcase },
  { id: "alert-dialog", component: AlertDialogShowcase },
  { id: "dialogs", component: DialogsShowcase },
  { id: "avatars", component: AvatarsShowcase },
  { id: "breadcrumb", component: BreadcrumbShowcase },
  { id: "toast", component: ToastShowcase },
  { id: "sheet", component: SheetShowcase },
  { id: "skeleton", component: SkeletonShowcase },
  { id: "progress", component: ProgressShowcase },
  { id: "separator", component: SeparatorShowcase },
  { id: "scroll-area", component: ScrollAreaShowcase },
  // Auth & account
  { id: "auth", component: AuthShowcase },
  { id: "signup", component: SignupShowcase },
  { id: "forgot-password", component: ForgotPasswordShowcase },
  { id: "otp-verify", component: OtpVerifyShowcase },
  { id: "magic-link", component: MagicLinkShowcase },
  { id: "profile-edit", component: ProfileEditShowcase },
  { id: "delete-account", component: DeleteAccountShowcase },
  { id: "api-key", component: ApiKeyShowcase },
  // Commerce & billing
  { id: "shipping-address", component: ShippingAddressShowcase },
  { id: "payment-method", component: PaymentMethodShowcase },
  { id: "order-summary", component: OrderSummaryShowcase },
  { id: "cart-item", component: CartItemShowcase },
  { id: "coupon-code", component: CouponCodeShowcase },
  { id: "billing-plan", component: BillingPlanShowcase },
  { id: "pricing-card", component: PricingCardShowcase },
  { id: "success-receipt", component: SuccessReceiptShowcase },
  { id: "upgrade-prompt", component: UpgradePromptShowcase },
  // Team & collaboration
  { id: "invite-team", component: InviteTeamShowcase },
  { id: "team-member", component: TeamMemberShowcase },
  { id: "assignee-picker", component: AssigneePickerShowcase },
  { id: "permissions", component: PermissionsShowcase },
  { id: "comment", component: CommentShowcase },
  { id: "activity-item", component: ActivityItemShowcase },
  { id: "project-status", component: ProjectStatusShowcase },
  { id: "schedule-meeting", component: ScheduleMeetingShowcase },
  // Settings & preferences
  { id: "notification-settings", component: NotificationSettingsShowcase },
  { id: "cookie-banner", component: CookieBannerShowcase },
  { id: "search-filters", component: SearchFiltersShowcase },
  { id: "export-data", component: ExportDataShowcase },
  { id: "file-upload", component: FileUploadShowcase },
  // Feedback & states
  { id: "empty-state", component: EmptyStateShowcase },
  { id: "error-state", component: ErrorStateShowcase },
  { id: "onboarding", component: OnboardingShowcase },
  { id: "report-bug", component: ReportBugShowcase },
  { id: "maintenance", component: MaintenanceShowcase },
  // Marketing & growth
  { id: "newsletter", component: NewsletterShowcase },
  { id: "waitlist", component: WaitlistShowcase },
  { id: "hero-cta", component: HeroCtaShowcase },
  { id: "testimonial", component: TestimonialShowcase },
  { id: "feature-highlight", component: FeatureHighlightShowcase },
  { id: "kpi-stats", component: KpiStatsShowcase },
  // Category showcases — auth, dashboard, editorial, media, developer, commerce
  ...CATEGORY_ENTRIES,
]
