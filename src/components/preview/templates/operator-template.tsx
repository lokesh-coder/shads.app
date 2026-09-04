import {
  ActivityIcon,
  AlertTriangleIcon,
  BookOpenIcon,
  RadioIcon,
  ServerIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { TemplateSectionHeading } from "./template-sections"
import { TerminalMock } from "./template-visuals"
import {
  TemplateContent,
  TemplateLogo,
  TemplateMetricGrid,
  TemplateSurface,
  TemplateTableCard,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.operator

const alerts = [
  {
    severity: "critical" as const,
    title: "payments-api p95 above SLO",
    detail: "420ms · threshold 200ms · 14:32 UTC",
  },
  {
    severity: "warning" as const,
    title: "checkout-ui error rate elevated",
    detail: "1.8% · us-east-1 · monitoring",
  },
  {
    severity: "warning" as const,
    title: "webhooks delivery backlog",
    detail: "2,400 pending · eu-west-1",
  },
  {
    severity: "info" as const,
    title: "Scheduled deploy — billing-worker",
    detail: "v3.2.0 · 18:00 UTC window",
  },
  {
    severity: "info" as const,
    title: "Certificate renewal complete",
    detail: "api.acme.io · valid until 2027-03",
  },
]

const regions = [
  { name: "us-east-1", status: "degraded", services: 4, incidents: 1 },
  { name: "us-west-2", status: "operational", services: 3, incidents: 0 },
  { name: "eu-west-1", status: "monitoring", services: 3, incidents: 0 },
  { name: "ap-south-1", status: "operational", services: 2, incidents: 0 },
] as const

const runbooks = [
  {
    title: "Checkout latency",
    description: "Diagnose and mitigate payment pipeline slowdowns.",
    icon: ActivityIcon,
    eta: "12 min read",
  },
  {
    title: "Database failover",
    description: "Promote replica and verify replication lag.",
    icon: ServerIcon,
    eta: "8 min read",
  },
  {
    title: "Incident comms",
    description: "Status page updates and stakeholder notifications.",
    icon: BookOpenIcon,
    eta: "5 min read",
  },
] as const

const activityLog = [
  { time: "14:41:08", event: "Rollback initiated on payments-api v2.14.1" },
  { time: "14:38:22", event: "Incident #842 acknowledged by Jordan Lee" },
  { time: "14:34:01", event: "PagerDuty notified Platform on-call" },
  { time: "14:32:17", event: "Alert triggered — checkout 503 rate above threshold" },
  { time: "14:28:44", event: "Auto-scaling added 2 replicas to payments-api" },
  { time: "14:15:00", event: "Health check passed — all regions nominal" },
] as const

export function OperatorTemplate() {
  return (
    <TemplateSurface>
      {/* 1. Command header with live badge */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Fleet", active: true },
          { label: "Alerts" },
          { label: "Runbooks" },
          { label: "Reports" },
        ]}
        trailing={
          <>
            <Badge variant="outline" className="gap-1.5 tabular-nums">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
              Live
            </Badge>
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button size="sm">Acknowledge all</Button>
          </>
        }
      />

      {/* 2. Status banner Alert */}
      <Alert variant="destructive" className="rounded-none border-x-0">
        <AlertTriangleIcon />
        <AlertTitle>Elevated checkout latency</AlertTitle>
        <AlertDescription>
          payments-api p95 at 420ms · us-east-1 · 4.2% error rate since 14:32 UTC
        </AlertDescription>
      </Alert>

      <TemplateContent width="wide" className="flex flex-col gap-8 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{narrative.tagline}</p>
            <h1 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              {narrative.hero}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{narrative.subhero}</p>
          </div>
          <Badge variant="secondary" className="gap-1.5">
            <RadioIcon className="size-3" />
            Auto-refresh 30s
          </Badge>
        </div>

        {/* 3. KPI metric grid */}
        <TemplateMetricGrid
          columns={4}
          stats={[
            { label: "Services healthy", value: "11/12", change: "1 degraded", trend: "down" },
            { label: "Active alerts", value: "5", change: "+2 since 14:00", trend: "down" },
            { label: "p95 latency", value: "142ms", change: "+38ms vs baseline", trend: "down" },
            { label: "Error rate", value: "0.8%", change: "SLO: 1.0%", trend: "up" },
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* 4. Service health table */}
          <div className="lg:col-span-3">
            <TemplateTableCard
              title="Service health"
              description="Sorted by error rate · refreshed every 30s"
              action={
                <Badge variant="secondary" className="tabular-nums">
                  12 services
                </Badge>
              }
              columns={["Service", "Region", "Status", "p95", "Owner"]}
              rows={[
                [
                  "payments-api",
                  "us-east-1",
                  <Badge key="p" variant="destructive">
                    Degraded
                  </Badge>,
                  "420ms",
                  "Platform",
                ],
                [
                  "checkout-ui",
                  "Global",
                  <Badge key="c" variant="secondary">
                    Monitoring
                  </Badge>,
                  "180ms",
                  "Web",
                ],
                [
                  "auth-service",
                  "us-east-1",
                  <Badge key="a" variant="outline">
                    Operational
                  </Badge>,
                  "42ms",
                  "Identity",
                ],
                [
                  "webhooks",
                  "eu-west-1",
                  <Badge key="w" variant="outline">
                    Operational
                  </Badge>,
                  "88ms",
                  "Integrations",
                ],
                [
                  "billing-worker",
                  "us-east-1",
                  <Badge key="b" variant="outline">
                    Operational
                  </Badge>,
                  "120ms",
                  "Revenue",
                ],
              ]}
            />
          </div>

          {/* 5. Alerts panel */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Active alerts</CardTitle>
              <CardDescription>5 open · 2 require action</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {alerts.map((alert) => (
                <div
                  key={alert.title}
                  className="flex items-start gap-3 rounded-lg border border-border/50 p-3"
                >
                  <Badge
                    variant={
                      alert.severity === "critical"
                        ? "destructive"
                        : alert.severity === "warning"
                          ? "secondary"
                          : "outline"
                    }
                    className="mt-0.5 shrink-0 text-[10px] uppercase"
                  >
                    {alert.severity}
                  </Badge>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug">{alert.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{alert.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 6. Region breakdown */}
        <section>
          <TemplateSectionHeading
            title="Region breakdown"
            description="Fleet health by deployment region"
            className="mb-4"
          />
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <Badge
                key={region.name}
                variant={
                  region.status === "degraded"
                    ? "destructive"
                    : region.status === "monitoring"
                      ? "secondary"
                      : "outline"
                }
                className="gap-2 px-3 py-1.5 text-xs"
              >
                <span className="font-mono">{region.name}</span>
                <span className="text-muted-foreground">·</span>
                <span>{region.services} svc</span>
                {region.incidents > 0 ? (
                  <>
                    <span className="text-muted-foreground">·</span>
                    <span>{region.incidents} incident</span>
                  </>
                ) : null}
              </Badge>
            ))}
          </div>
        </section>

        {/* 7. Runbook quick links */}
        <section>
          <TemplateSectionHeading
            title="Runbooks"
            description="Quick access to operational playbooks"
            className="mb-4"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {runbooks.map((runbook) => (
              <Card key={runbook.title} size="sm" className="transition-colors hover:bg-muted/30">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <runbook.icon className="size-4 text-primary" />
                    <CardTitle className="text-sm">{runbook.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {runbook.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Open runbook · {runbook.eta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 8. Activity log */}
          <Card>
            <CardHeader>
              <CardTitle>Activity log</CardTitle>
              <CardDescription>Recent fleet events · UTC</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {activityLog.map((entry) => (
                <div
                  key={entry.time}
                  className="flex gap-4 border-b border-border/40 pb-3 last:border-0 last:pb-0"
                >
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {entry.time}
                  </span>
                  <span className="text-sm">{entry.event}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <TerminalMock
            lines={[
              "$ kubectl rollout status deploy/payments-api",
              "Waiting for deployment spec update...",
              "deployment \"payments-api\" successfully rolled out",
              "$ curl -s https://status.acme.io/api/v1/health",
              '{"status":"degraded","region":"us-east-1"}',
            ]}
            className="h-full"
          />
        </div>
      </TemplateContent>
    </TemplateSurface>
  )
}
