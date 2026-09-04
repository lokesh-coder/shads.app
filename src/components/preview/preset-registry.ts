import type { ComponentType } from "react"

import type { PreviewEntry } from "@/components/preview/preview-registry"
import type { GlobalPresetId } from "@/tokens/global-presets"

// Dedicated preset showcases
import { DocSidebarShowcase } from "@/components/preview/showcases/presets/brief/doc-sidebar"
import { ChefSpecialShowcase } from "@/components/preview/showcases/presets/bistro/chef-special"
import { MenuBoardShowcase } from "@/components/preview/showcases/presets/bistro/menu-board"
import { ReservationCardShowcase } from "@/components/preview/showcases/presets/bistro/reservation-card"
import { ChatThreadShowcase } from "@/components/preview/showcases/presets/canvas/chat-thread"
import { PromptComposerShowcase } from "@/components/preview/showcases/presets/canvas/prompt-composer"
import { ToolOutputShowcase } from "@/components/preview/showcases/presets/canvas/tool-output"
import { CourseCardShowcase } from "@/components/preview/showcases/presets/campus/course-card"
import { QuizBlockShowcase } from "@/components/preview/showcases/presets/campus/quiz-block"
import { IncidentAlertShowcase } from "@/components/preview/showcases/presets/dispatch/incident-alert"
import { OrgRosterShowcase } from "@/components/preview/showcases/presets/guild/org-roster"
import { BalanceOverviewShowcase } from "@/components/preview/showcases/presets/ledger/balance-overview"
import { MarketingHeroShowcase } from "@/components/preview/showcases/presets/launch/marketing-hero"
import { LookbookProductTileShowcase } from "@/components/preview/showcases/presets/lookbook/lookbook-product-tile"
import { ShopTheLookShowcase } from "@/components/preview/showcases/presets/lookbook/shop-the-look"
import { SizeGuideBlockShowcase } from "@/components/preview/showcases/presets/lookbook/size-guide-block"
import { FunnelSnapshotShowcase } from "@/components/preview/showcases/presets/metrics/funnel-snapshot"
import { DenseKpiStripShowcase } from "@/components/preview/showcases/presets/operator/dense-kpi-strip"
import { PortfolioCaseStudyShowcase } from "@/components/preview/showcases/presets/atelier/portfolio-case-study"
import { AppointmentCardShowcase } from "@/components/preview/showcases/presets/pulse/appointment-card"
import { CareSummaryShowcase } from "@/components/preview/showcases/presets/pulse/care-summary"
import { MagazineSpreadShowcase } from "@/components/preview/showcases/presets/reading/magazine-spread"
import { ProductGridShowcase } from "@/components/preview/showcases/presets/storefront/product-grid"
import { WorkspaceHubShowcase } from "@/components/preview/showcases/presets/workspace/workspace-hub"

// Curated category + scenario showcases
import { ArticlePreviewShowcase } from "@/components/preview/showcases/categories/editorial/article-preview-showcase"
import { AuthorBioShowcase } from "@/components/preview/showcases/categories/editorial/author-bio-showcase"
import { ChapterNavShowcase } from "@/components/preview/showcases/categories/editorial/chapter-nav-showcase"
import { PullQuoteShowcase } from "@/components/preview/showcases/categories/editorial/pull-quote-showcase"
import { RelatedStoriesShowcase } from "@/components/preview/showcases/categories/editorial/related-stories-showcase"
import { TableOfContentsShowcase } from "@/components/preview/showcases/categories/editorial/table-of-contents-showcase"
import { ConversionWidgetShowcase } from "@/components/preview/showcases/categories/dashboard/conversion-widget-showcase"
import { GeoTrafficShowcase } from "@/components/preview/showcases/categories/dashboard/geo-traffic-showcase"
import { PipelineFunnelShowcase } from "@/components/preview/showcases/categories/dashboard/pipeline-funnel-showcase"
import { RecentOrdersShowcase } from "@/components/preview/showcases/categories/dashboard/recent-orders-showcase"
import { ServerHealthShowcase } from "@/components/preview/showcases/categories/dashboard/server-health-showcase"
import { SprintVelocityShowcase } from "@/components/preview/showcases/categories/dashboard/sprint-velocity-showcase"
import { SupportQueueShowcase } from "@/components/preview/showcases/categories/dashboard/support-queue-showcase"
import { TaskOverviewShowcase } from "@/components/preview/showcases/categories/dashboard/task-overview-showcase"
import { UptimeMonitorShowcase } from "@/components/preview/showcases/categories/dashboard/uptime-monitor-showcase"
import { ApiRateLimitShowcase } from "@/components/preview/showcases/categories/developer/api-rate-limit-showcase"
import { BuildLogShowcase } from "@/components/preview/showcases/categories/developer/build-log-showcase"
import { DeployPipelineShowcase } from "@/components/preview/showcases/categories/developer/deploy-pipeline-showcase"
import { EnvVariablesShowcase } from "@/components/preview/showcases/categories/developer/env-variables-showcase"
import { ErrorIncidentShowcase } from "@/components/preview/showcases/categories/developer/error-incident-showcase"
import { GitRepoShowcase } from "@/components/preview/showcases/categories/developer/git-repo-showcase"
import { WebhookEndpointShowcase } from "@/components/preview/showcases/categories/developer/webhook-endpoint-showcase"
import { GiftCardRedeemShowcase } from "@/components/preview/showcases/categories/commerce/gift-card-redeem-showcase"
import { LoyaltyRewardsShowcase } from "@/components/preview/showcases/categories/commerce/loyalty-rewards-showcase"
import { ProductSpotlightShowcase } from "@/components/preview/showcases/categories/commerce/product-spotlight-showcase"
import { BillingPlanShowcase } from "@/components/preview/showcases/scenarios/billing-plan-showcase"
import { CartItemShowcase } from "@/components/preview/showcases/scenarios/cart-item-showcase"
import { CommentShowcase } from "@/components/preview/showcases/scenarios/comment-showcase"
import { CouponCodeShowcase } from "@/components/preview/showcases/scenarios/coupon-code-showcase"
import { FeatureHighlightShowcase } from "@/components/preview/showcases/scenarios/feature-highlight-showcase"
import { HeroCtaShowcase } from "@/components/preview/showcases/scenarios/hero-cta-showcase"
import { InviteTeamShowcase } from "@/components/preview/showcases/scenarios/invite-team-showcase"
import { KpiStatsShowcase } from "@/components/preview/showcases/scenarios/kpi-stats-showcase"
import { NewsletterShowcase } from "@/components/preview/showcases/scenarios/newsletter-showcase"
import { NotificationSettingsShowcase } from "@/components/preview/showcases/scenarios/notification-settings-showcase"
import { OnboardingShowcase } from "@/components/preview/showcases/scenarios/onboarding-showcase"
import { OrderSummaryShowcase } from "@/components/preview/showcases/scenarios/order-summary-showcase"
import { PaymentMethodShowcase } from "@/components/preview/showcases/scenarios/payment-method-showcase"
import { PermissionsShowcase } from "@/components/preview/showcases/scenarios/permissions-showcase"
import { PricingCardShowcase } from "@/components/preview/showcases/scenarios/pricing-card-showcase"
import { ProfileEditShowcase } from "@/components/preview/showcases/scenarios/profile-edit-showcase"
import { ProjectStatusShowcase } from "@/components/preview/showcases/scenarios/project-status-showcase"
import { ScheduleMeetingShowcase } from "@/components/preview/showcases/scenarios/schedule-meeting-showcase"
import { SearchFiltersShowcase } from "@/components/preview/showcases/scenarios/search-filters-showcase"
import { ShippingAddressShowcase } from "@/components/preview/showcases/scenarios/shipping-address-showcase"
import { TableShowcase } from "@/components/preview/showcases/table-showcase"
import { TeamMemberShowcase } from "@/components/preview/showcases/scenarios/team-member-showcase"
import { TestimonialShowcase } from "@/components/preview/showcases/scenarios/testimonial-showcase"
import { WaitlistShowcase } from "@/components/preview/showcases/scenarios/waitlist-showcase"
import { ApiKeyShowcase } from "@/components/preview/showcases/scenarios/api-key-showcase"
import { ChartsShowcase } from "@/components/preview/showcases/charts-showcase"
import { InputsShowcase } from "@/components/preview/showcases/inputs-showcase"

function entry(id: string, component: ComponentType): PreviewEntry {
  return { id, component }
}

export const PRESET_PREVIEW_ENTRIES = {
  workspace: [
    entry("workspace-hub", WorkspaceHubShowcase),
    entry("project-status", ProjectStatusShowcase),
    entry("invite-team", InviteTeamShowcase),
    entry("billing-plan", BillingPlanShowcase),
    entry("notification-settings", NotificationSettingsShowcase),
    entry("search-filters", SearchFiltersShowcase),
    entry("team-member", TeamMemberShowcase),
    entry("onboarding", OnboardingShowcase),
  ],
  brief: [
    entry("brief-doc-sidebar", DocSidebarShowcase),
    entry("article-preview", ArticlePreviewShowcase),
    entry("table-of-contents", TableOfContentsShowcase),
    entry("chapter-nav", ChapterNavShowcase),
    entry("pull-quote", PullQuoteShowcase),
    entry("author-bio", AuthorBioShowcase),
    entry("related-stories", RelatedStoriesShowcase),
  ],
  guild: [
    entry("guild-org-roster", OrgRosterShowcase),
    entry("team-member", TeamMemberShowcase),
    entry("invite-team", InviteTeamShowcase),
    entry("permissions", PermissionsShowcase),
    entry("schedule-meeting", ScheduleMeetingShowcase),
    entry("profile-edit", ProfileEditShowcase),
    entry("onboarding", OnboardingShowcase),
  ],
  operator: [
    entry("operator-kpi-strip", DenseKpiStripShowcase),
    entry("task-overview", TaskOverviewShowcase),
    entry("server-health", ServerHealthShowcase),
    entry("recent-orders", RecentOrdersShowcase),
    entry("kpi-stats", KpiStatsShowcase),
    entry("table", TableShowcase),
    entry("search-filters", SearchFiltersShowcase),
    entry("support-queue", SupportQueueShowcase),
  ],
  metrics: [
    entry("metrics-funnel", FunnelSnapshotShowcase),
    entry("conversion-widget", ConversionWidgetShowcase),
    entry("pipeline-funnel", PipelineFunnelShowcase),
    entry("geo-traffic", GeoTrafficShowcase),
    entry("charts", ChartsShowcase),
    entry("sprint-velocity", SprintVelocityShowcase),
    entry("kpi-stats", KpiStatsShowcase),
    entry("recent-orders", RecentOrdersShowcase),
  ],
  dispatch: [
    entry("dispatch-incident", IncidentAlertShowcase),
    entry("uptime-monitor", UptimeMonitorShowcase),
    entry("error-incident", ErrorIncidentShowcase),
    entry("server-health", ServerHealthShowcase),
    entry("api-rate-limit", ApiRateLimitShowcase),
    entry("deploy-pipeline", DeployPipelineShowcase),
    entry("support-queue", SupportQueueShowcase),
    entry("build-log", BuildLogShowcase),
  ],
  ledger: [
    entry("ledger-balance", BalanceOverviewShowcase),
    entry("recent-orders", RecentOrdersShowcase),
    entry("billing-plan", BillingPlanShowcase),
    entry("payment-method", PaymentMethodShowcase),
    entry("order-summary", OrderSummaryShowcase),
    entry("conversion-widget", ConversionWidgetShowcase),
    entry("kpi-stats", KpiStatsShowcase),
    entry("coupon-code", CouponCodeShowcase),
  ],
  canvas: [
    entry("canvas-chat", ChatThreadShowcase),
    entry("canvas-prompt", PromptComposerShowcase),
    entry("canvas-tool", ToolOutputShowcase),
    entry("comment", CommentShowcase),
    entry("api-key", ApiKeyShowcase),
    entry("search-filters", SearchFiltersShowcase),
    entry("inputs", InputsShowcase),
  ],
  workbench: [
    entry("build-log", BuildLogShowcase),
    entry("env-variables", EnvVariablesShowcase),
    entry("webhook-endpoint", WebhookEndpointShowcase),
    entry("git-repo", GitRepoShowcase),
    entry("deploy-pipeline", DeployPipelineShowcase),
    entry("api-rate-limit", ApiRateLimitShowcase),
    entry("error-incident", ErrorIncidentShowcase),
    entry("table", TableShowcase),
  ],
  launch: [
    entry("launch-hero", MarketingHeroShowcase),
    entry("hero-cta", HeroCtaShowcase),
    entry("feature-highlight", FeatureHighlightShowcase),
    entry("testimonial", TestimonialShowcase),
    entry("pricing-card", PricingCardShowcase),
    entry("newsletter", NewsletterShowcase),
    entry("waitlist", WaitlistShowcase),
  ],
  reading: [
    entry("reading-spread", MagazineSpreadShowcase),
    entry("article-preview", ArticlePreviewShowcase),
    entry("pull-quote", PullQuoteShowcase),
    entry("author-bio", AuthorBioShowcase),
    entry("related-stories", RelatedStoriesShowcase),
    entry("chapter-nav", ChapterNavShowcase),
    entry("table-of-contents", TableOfContentsShowcase),
  ],
  atelier: [
    entry("atelier-case-study", PortfolioCaseStudyShowcase),
    entry("lookbook-product-tile", LookbookProductTileShowcase),
    entry("shop-the-look", ShopTheLookShowcase),
    entry("pull-quote", PullQuoteShowcase),
    entry("related-stories", RelatedStoriesShowcase),
    entry("testimonial", TestimonialShowcase),
  ],
  storefront: [
    entry("storefront-grid", ProductGridShowcase),
    entry("product-spotlight", ProductSpotlightShowcase),
    entry("cart-item", CartItemShowcase),
    entry("order-summary", OrderSummaryShowcase),
    entry("loyalty-rewards", LoyaltyRewardsShowcase),
    entry("shipping-address", ShippingAddressShowcase),
    entry("coupon-code", CouponCodeShowcase),
    entry("gift-card-redeem", GiftCardRedeemShowcase),
  ],
  lookbook: [
    entry("lookbook-product-tile", LookbookProductTileShowcase),
    entry("lookbook-size-guide", SizeGuideBlockShowcase),
    entry("shop-the-look", ShopTheLookShowcase),
    entry("product-spotlight", ProductSpotlightShowcase),
    entry("pull-quote", PullQuoteShowcase),
    entry("related-stories", RelatedStoriesShowcase),
  ],
  bistro: [
    entry("bistro-menu", MenuBoardShowcase),
    entry("bistro-reservation", ReservationCardShowcase),
    entry("bistro-special", ChefSpecialShowcase),
    entry("loyalty-rewards", LoyaltyRewardsShowcase),
    entry("gift-card-redeem", GiftCardRedeemShowcase),
    entry("order-summary", OrderSummaryShowcase),
  ],
  pulse: [
    entry("pulse-appointment", AppointmentCardShowcase),
    entry("pulse-care-summary", CareSummaryShowcase),
    entry("profile-edit", ProfileEditShowcase),
    entry("notification-settings", NotificationSettingsShowcase),
    entry("schedule-meeting", ScheduleMeetingShowcase),
    entry("onboarding", OnboardingShowcase),
  ],
  campus: [
    entry("campus-course", CourseCardShowcase),
    entry("campus-quiz", QuizBlockShowcase),
    entry("schedule-meeting", ScheduleMeetingShowcase),
    entry("onboarding", OnboardingShowcase),
    entry("team-member", TeamMemberShowcase),
    entry("project-status", ProjectStatusShowcase),
  ],
} as const satisfies Record<GlobalPresetId, PreviewEntry[]>

export type PresetPreviewId = keyof typeof PRESET_PREVIEW_ENTRIES
