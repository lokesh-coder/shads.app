import {
  AlertTriangleIcon,
  MessageSquareIcon,
  PhoneIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
import {
  TemplateContent,
  TemplateLogo,
  TemplateMetricGrid,
  TemplateSurface,
  TemplateTableCard,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.dispatch

const timeline = [
  { time: "14:32", event: "Alert triggered — checkout 503 rate above threshold" },
  { time: "14:34", event: "PagerDuty notified Platform on-call" },
  { time: "14:38", event: "Incident #842 acknowledged by Jordan Lee" },
  { time: "14:41", event: "Rollback initiated on payments-api v2.14.1" },
  { time: "14:45", event: "Customer comms draft prepared — pending approval" },
  { time: "14:48", event: "War room bridge opened · 6 responders joined" },
] as const

const responders = [
  { name: "Jordan Lee", role: "Incident commander", initials: "JL", status: "active" },
  { name: "Sam Patel", role: "Platform engineer", initials: "SP", status: "active" },
  { name: "Riley Chen", role: "SRE lead", initials: "RC", status: "active" },
  { name: "Alex Kim", role: "Comms lead", initials: "AK", status: "standby" },
  { name: "Morgan Davis", role: "Product owner", initials: "MD", status: "standby" },
] as const

export function DispatchTemplate() {
  return (
    <TemplateSurface>
      {/* 1. Incident header with SEV badge */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Incidents", active: true },
          { label: "Services" },
          { label: "On-call" },
          { label: "Postmortems" },
        ]}
        trailing={
          <>
            <Badge variant="destructive" className="gap-1">
              <ShieldIcon className="size-3" />
              SEV-2
            </Badge>
            <Button variant="outline" size="sm">
              <PhoneIcon data-icon="inline-start" />
              Join bridge
            </Button>
            <Button size="sm">Post update</Button>
          </>
        }
      />

      {/* 2. Full-width destructive Alert */}
      <Alert variant="destructive" className="rounded-none border-x-0">
        <AlertTriangleIcon />
        <AlertTitle>{narrative.hero}</AlertTitle>
        <AlertDescription>{narrative.subhero}</AlertDescription>
      </Alert>

      <TemplateContent width="wide" className="flex flex-col gap-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{narrative.tagline}</p>
            <h1 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Incident #842
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Started 14:32 UTC · Duration 16m · Commander: Jordan Lee
            </p>
          </div>
          <Badge variant="outline" className="tabular-nums">
            War room active
          </Badge>
        </div>

        {/* 3. Impact summary — 4 metrics */}
        <TemplateMetricGrid
          columns={4}
          stats={[
            { label: "Affected users", value: "~12.4K", change: "4.2% of traffic", trend: "down" },
            { label: "Checkout failures", value: "503", change: "+340% vs baseline", trend: "down" },
            { label: "Revenue at risk", value: "$18.2K", change: "Est. hourly", trend: "down" },
            { label: "MTTR target", value: "28m", change: "12m remaining", trend: "up" },
          ]}
        />

        {/* 4. War room grid: services + timeline */}
        <section>
          <TemplateSectionHeading
            title="War room"
            description="Live service status and incident timeline"
            className="mb-4"
          />
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <TemplateTableCard
                title="Affected services"
                description="Real-time health across impacted stack"
                columns={["Service", "Region", "Status", "Latency", "Owner"]}
                rows={[
                  [
                    "payments-api",
                    "us-east-1",
                    <Badge key="1" variant="destructive">
                      Degraded
                    </Badge>,
                    "420ms",
                    "Platform",
                  ],
                  [
                    "checkout-ui",
                    "Global",
                    <Badge key="2" variant="secondary">
                      Monitoring
                    </Badge>,
                    "180ms",
                    "Web",
                  ],
                  [
                    "auth-service",
                    "us-east-1",
                    <Badge key="3" variant="outline">
                      OK
                    </Badge>,
                    "42ms",
                    "Identity",
                  ],
                  [
                    "webhooks",
                    "eu-west-1",
                    <Badge key="4" variant="outline">
                      OK
                    </Badge>,
                    "88ms",
                    "Integrations",
                  ],
                ]}
              />
            </div>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
                <CardDescription>Chronological incident events</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {timeline.map((item) => (
                  <div key={item.time} className="border-l-2 border-destructive/40 pl-4">
                    <p className="font-mono text-xs text-muted-foreground">{item.time}</p>
                    <p className="mt-0.5 text-sm">{item.event}</p>
                  </div>
                ))}
                <Button variant="outline" className="mt-2 w-fit">
                  View full log
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 5. Responders with avatars */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersIcon className="size-4" />
                Responders
              </CardTitle>
              <CardDescription>5 assigned · 3 actively engaged</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {responders.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border/50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="text-xs">{person.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.role}</p>
                    </div>
                  </div>
                  <Badge variant={person.status === "active" ? "default" : "outline"}>
                    {person.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 6. Customer comms draft */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquareIcon className="size-4" />
                Customer comms draft
              </CardTitle>
              <CardDescription>Status page update · pending approval</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4 text-sm leading-relaxed">
                <p className="font-medium">Investigating checkout issues</p>
                <p className="mt-2 text-muted-foreground">
                  We are aware of elevated error rates affecting checkout for a subset of users
                  in the US region. Our engineering team is actively investigating and has
                  initiated a rollback. We will provide an update within 15 minutes.
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Last edited by Alex Kim · 14:45 UTC
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Edit draft
                </Button>
                <Button size="sm">Publish to status page</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 7. Action buttons row */}
        <section className="flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-muted/20 p-4">
          <p className="mr-auto text-sm font-medium">Incident actions</p>
          <Button variant="outline" size="sm">
            Escalate to SEV-1
          </Button>
          <Button variant="outline" size="sm">
            Page additional on-call
          </Button>
          <Button variant="outline" size="sm">
            Create postmortem
          </Button>
          <Button variant="destructive" size="sm">
            Resolve incident
          </Button>
        </section>
      </TemplateContent>
    </TemplateSurface>
  )
}
