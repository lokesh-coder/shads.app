import { MetricValue } from "@/components/preview/showcases/showcase-ui"

export function FunnelSnapshotShowcase() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <MetricValue label="Visitors" value="48.2k" change="+9%" trend="up" />
      <MetricValue label="Signups" value="3,840" change="+4%" trend="up" />
      <MetricValue label="Activated" value="1,120" change="+2%" trend="up" />
      <MetricValue label="Paid" value="286" change="-1%" trend="down" />
    </div>
  )
}
