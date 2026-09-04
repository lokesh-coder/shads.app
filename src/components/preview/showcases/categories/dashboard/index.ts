import type { CategoryEntry } from "@/components/preview/showcases/categories/auth"

import { CalendarAgendaShowcase } from "./calendar-agenda-showcase"
import { ConversionWidgetShowcase } from "./conversion-widget-showcase"
import { GeoTrafficShowcase } from "./geo-traffic-showcase"
import { PipelineFunnelShowcase } from "./pipeline-funnel-showcase"
import { RecentOrdersShowcase } from "./recent-orders-showcase"
import { RevenueTrendShowcase } from "./revenue-trend-showcase"
import { ServerHealthShowcase } from "./server-health-showcase"
import { SprintVelocityShowcase } from "./sprint-velocity-showcase"
import { StorageBreakdownShowcase } from "./storage-breakdown-showcase"
import { SupportQueueShowcase } from "./support-queue-showcase"
import { TaskOverviewShowcase } from "./task-overview-showcase"
import { UptimeMonitorShowcase } from "./uptime-monitor-showcase"

export const DASHBOARD_CATEGORY_ENTRIES: CategoryEntry[] = [
  { id: "server-health", component: ServerHealthShowcase },
  { id: "revenue-trend", component: RevenueTrendShowcase },
  { id: "pipeline-funnel", component: PipelineFunnelShowcase },
  { id: "recent-orders", component: RecentOrdersShowcase },
  { id: "calendar-agenda", component: CalendarAgendaShowcase },
  { id: "task-overview", component: TaskOverviewShowcase },
  { id: "uptime-monitor", component: UptimeMonitorShowcase },
  { id: "geo-traffic", component: GeoTrafficShowcase },
  { id: "conversion-widget", component: ConversionWidgetShowcase },
  { id: "support-queue", component: SupportQueueShowcase },
  { id: "storage-breakdown", component: StorageBreakdownShowcase },
  { id: "sprint-velocity", component: SprintVelocityShowcase },
]
