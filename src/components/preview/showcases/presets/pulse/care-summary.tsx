import { MetricValue } from "@/components/preview/showcases/showcase-ui"

export function CareSummaryShowcase() {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <MetricValue label="Resting heart rate" value="62 bpm" change="Stable" />
      <MetricValue label="Sleep avg" value="7h 12m" change="+18m" trend="up" />
      <MetricValue label="Steps" value="8,420" change="On track" />
      <MetricValue label="Hydration" value="6 / 8" change="2 glasses left" />
    </div>
  )
}
