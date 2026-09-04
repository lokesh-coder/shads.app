import { ServerIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const servers = [
  { name: "api-prod-01", region: "us-east-1", status: "success" as const, latency: "12ms", label: "Healthy" },
  { name: "api-prod-02", region: "eu-west-1", status: "success" as const, latency: "18ms", label: "Healthy" },
  { name: "worker-03", region: "us-west-2", status: "warning" as const, latency: "142ms", label: "Degraded" },
  { name: "cache-01", region: "ap-south-1", status: "error" as const, latency: "—", label: "Down" },
]

const badgeVariant = {
  success: "secondary" as const,
  warning: "outline" as const,
  error: "destructive" as const,
}

export function ServerHealthShowcase() {
  const healthyCount = servers.filter((s) => s.status === "success").length

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Infrastructure</CardTitle>
        <CardDescription>4 nodes across 3 regions</CardDescription>
        <CardAction>
          <Badge variant="secondary" className="tabular-nums">
            {healthyCount}/4 online
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-2">
          <div className="grid grid-cols-2 gap-2">
            {servers.map((server) => (
              <div
                key={server.name}
                className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-muted/20 p-2.5"
              >
                <IconTile icon={ServerIcon} status={server.status} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{server.name}</p>
                  <p className="text-xs text-muted-foreground">{server.region}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <Badge variant={badgeVariant[server.status]} className="text-xs">
                      {server.label}
                    </Badge>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {server.latency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
