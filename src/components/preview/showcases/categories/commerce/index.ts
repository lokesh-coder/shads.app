import type { CategoryEntry } from "@/components/preview/showcases/categories/auth"

import { GiftCardRedeemShowcase } from "./gift-card-redeem-showcase"
import { InventoryAlertShowcase } from "./inventory-alert-showcase"
import { LoyaltyRewardsShowcase } from "./loyalty-rewards-showcase"
import { ProductSpotlightShowcase } from "./product-spotlight-showcase"
import { RefundTrackingShowcase } from "./refund-tracking-showcase"
import { RenewalReminderShowcase } from "./renewal-reminder-showcase"

export const COMMERCE_CATEGORY_ENTRIES: CategoryEntry[] = [
  { id: "product-spotlight", component: ProductSpotlightShowcase },
  { id: "renewal-reminder", component: RenewalReminderShowcase },
  { id: "refund-tracking", component: RefundTrackingShowcase },
  { id: "inventory-alert", component: InventoryAlertShowcase },
  { id: "loyalty-rewards", component: LoyaltyRewardsShowcase },
  { id: "gift-card-redeem", component: GiftCardRedeemShowcase },
]
