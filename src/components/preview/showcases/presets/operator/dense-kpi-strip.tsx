import { MetricValue } from "@/components/preview/showcases/showcase-ui"

export function DenseKpiStripShowcase() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
      <MetricValue label="Active users" value="12.4k" change="+4.2%" trend="up" />
      <MetricValue label="Error rate" value="0.08%" change="-0.02%" trend="up" />
      <MetricValue label="P95 latency" value="182ms" change="+6ms" trend="down" />
      <MetricValue label="MRR" value="$84k" change="+$3.1k" trend="up" />
    </div>
  )
}
