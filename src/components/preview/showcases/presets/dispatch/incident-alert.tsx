import { Badge } from "@/components/ui/badge"
import { StatusDot } from "@/components/preview/showcases/showcase-ui"

export function IncidentAlertShowcase() {
  return (
    <div className="flex w-full flex-col gap-3 border-l-4 border-amber-500 bg-amber-500/5 p-4">
      <div className="flex items-center gap-2">
        <StatusDot status="warning" />
        <p className="text-sm font-semibold">Elevated API latency</p>
        <Badge variant="secondary">P2</Badge>
      </div>
      <p className="text-sm text-muted-foreground">
        us-east-1 p95 above 400ms for 8 minutes. On-call notified.
      </p>
      <p className="font-mono text-xs text-muted-foreground">
        incident-2841 · opened 4m ago
      </p>
    </div>
  )
}
