import { MetricValue } from "@/components/preview/showcases/showcase-ui"

export function BalanceOverviewShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <MetricValue label="Available balance" value="$248,920.14" />
      <div className="grid grid-cols-2 gap-3">
        <MetricValue label="Inflow (30d)" value="$82,400" change="+6.1%" trend="up" />
        <MetricValue label="Outflow (30d)" value="$61,280" change="-2.4%" trend="up" />
      </div>
    </div>
  )
}
