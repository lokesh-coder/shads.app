import { ExternalLinkIcon, GitBranchIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { TerminalMock } from "./template-visuals"
import {
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.workbench

const pipeline = [
  { step: "Build", status: "Passed", duration: "2m 14s" },
  { step: "Test", status: "Passed", duration: "4m 02s" },
  { step: "Staging", status: "Running", duration: "1m 38s" },
  { step: "Production", status: "Pending", duration: "—" },
] as const

const recentDeploys = [
  { id: "#1847", branch: "main", status: "Live", time: "2h ago" },
  { id: "#1846", branch: "feat/checkout", status: "Rolled back", time: "Yesterday" },
  { id: "#1845", branch: "main", status: "Live", time: "3 days ago" },
] as const

const buildLog = [
  "[14:02:11] Cloning repository acme/web...",
  "[14:02:14] Checking out main @ a3f9c2d",
  "[14:02:18] Installing dependencies (pnpm)...",
  "[14:04:18] Running tests — 847 passed, 0 failed",
  "[14:04:22] Build succeeded · 2m 14s",
  "[14:04:25] Deploying to staging...",
  "[14:06:03] Staging health check passed",
] as const

export function WorkbenchTemplate() {
  return (
    <TemplateSurface>
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "acme/web", active: true },
          { label: "api-service" },
          { label: "design-system" },
        ]}
        trailing={
          <>
            <Badge variant="secondary" className="gap-1.5 font-mono text-xs">
              <GitBranchIcon className="size-3" />
              main · a3f9c2
            </Badge>
            <Button>Deploy</Button>
          </>
        }
      />

      <TemplateContent width="wide" className="py-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-heading text-xl font-semibold">{narrative.hero}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{narrative.subhero}</p>
          </div>
          <Card size="sm" className="w-full sm:w-auto">
            <CardContent className="flex items-center gap-3 py-3">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Deploy status</p>
                <p className="font-medium">Staging in progress</p>
              </div>
              <Badge>Running</Badge>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pipeline">
          <TabsList>
            <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
            <TabsTrigger value="env">Environment</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Card>
                <CardHeader>
                  <CardTitle>Deploy pipeline</CardTitle>
                  <CardDescription>Triggered by push to main · 6 min ago</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {pipeline.map((step, index) => (
                    <div
                      key={step.step}
                      className="flex items-center justify-between gap-4 border-b border-border/50 pb-3 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="font-medium">{step.step}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Badge
                          variant={
                            step.status === "Passed"
                              ? "secondary"
                              : step.status === "Running"
                                ? "default"
                                : "outline"
                          }
                        >
                          {step.status}
                        </Badge>
                        <span className="tabular-nums text-muted-foreground">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Preview URL</CardTitle>
                    <CardDescription>Staging environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="truncate font-mono text-sm">staging.acme.io/a3f9c2</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <ExternalLinkIcon data-icon="inline-start" />
                      Open preview
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Recent deploys</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    {recentDeploys.map((deploy) => (
                      <div
                        key={deploy.id}
                        className="flex items-center justify-between gap-2 border-b border-border/50 pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium">{deploy.id}</p>
                          <p className="text-xs text-muted-foreground">
                            {deploy.branch} · {deploy.time}
                          </p>
                        </div>
                        <Badge
                          variant={deploy.status === "Live" ? "secondary" : "outline"}
                        >
                          {deploy.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="env" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Environment variables</CardTitle>
                <CardDescription>Staging · Encrypted at rest</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 font-mono text-xs leading-relaxed">
                <p>NODE_ENV=production</p>
                <p>API_URL=https://api-staging.acme.io</p>
                <p>DATABASE_URL=••••••••••••••••</p>
                <p>REDIS_URL=••••••••••••••••</p>
                <p>SENTRY_DSN=https://••••@sentry.io/••••</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Build log</CardTitle>
                <CardDescription>Live output from deploy #1847</CardDescription>
              </CardHeader>
              <CardContent>
                <TerminalMock lines={[...buildLog]} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </TemplateContent>
    </TemplateSurface>
  )
}
