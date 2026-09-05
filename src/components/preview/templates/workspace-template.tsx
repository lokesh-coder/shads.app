import {
  AlertTriangleIcon,
  BellIcon,
  CalendarIcon,
  CheckCircle2Icon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PersonAvatar } from "@/components/media/person-avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { TemplateSectionHeading } from "./template-sections"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { DashboardMock, SparkBars } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateMetricGrid,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.workspace

const approvals = [
  {
    title: "Approve brand refresh assets",
    requester: "Jordan Lee",
    due: "Due 11:00 AM",
    type: "Design",
  },
  {
    title: "Review launch checklist",
    requester: "Sam Patel",
    due: "Due 2:00 PM",
    type: "Product",
  },
  {
    title: "Sign off Q1 budget",
    requester: "Riley Chen",
    due: "Due today",
    type: "Finance",
  },
] as const

const projects = [
  {
    name: "Brand refresh",
    meta: "Design · Due Friday",
    progress: 72,
    spark: [40, 55, 48, 62, 72],
  },
  {
    name: "Mobile checkout",
    meta: "Engineering · In QA",
    progress: 91,
    spark: [60, 70, 78, 85, 91],
  },
] as const

const meetings = [
  { title: "Launch review", time: "Tue 10:00", attendees: 6 },
  { title: "Design critique", time: "Wed 14:00", attendees: 4 },
  { title: "Stakeholder sync", time: "Thu 09:30", attendees: 8 },
  { title: "All-hands", time: "Fri 11:00", attendees: 124 },
] as const

const team = [
  { name: "Jordan Lee", initials: "JL", status: "online" },
  { name: "Sam Patel", initials: "SP", status: "online" },
  { name: "Riley Chen", initials: "RC", status: "away" },
  { name: "Alex Kim", initials: "AK", status: "online" },
  { name: "Morgan Blake", initials: "MB", status: "offline" },
] as const

const activity = [
  { who: "Jordan", action: "commented on Homepage v3", when: "12m ago" },
  { who: "Sam", action: "approved Q1 budget", when: "1h ago" },
  { who: "Riley", action: "deployed staging build", when: "3h ago" },
  { who: "Alex", action: "shared roadmap draft", when: "5h ago" },
] as const

const quickCreate = [
  "Project",
  "Task",
  "Doc",
  "Meeting",
  "Approval",
  "Report",
] as const

export function WorkspaceTemplate() {
  return (
    <TemplateSurface>
      {/* 1 — App header */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Home", active: true },
          { label: "Projects" },
          { label: "Team" },
          { label: "Calendar" },
          { label: "Roadmap" },
        ]}
        trailing={
          <>
            <div className="relative hidden sm:block">
              <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="h-8 w-44 pl-8 text-sm" />
            </div>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <BellIcon />
            </Button>
            <PersonAvatar name="Alex Kim" seed="Alex Kim" className="size-8" />
            <Button size="sm">
              <PlusIcon data-icon="inline-start" />
              New
            </Button>
          </>
        }
      />

      <TemplateContent width="wide" className="flex flex-col gap-8 py-8">
        {/* 2 — Context greeting */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{narrative.tagline}</p>
            <h1 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              {narrative.hero}
            </h1>
            <p className="mt-2 max-w-xl text-muted-foreground">{narrative.subhero}</p>
          </div>
          <Badge variant="secondary" className="gap-1.5">
            <SparklesIcon className="size-3" />
            3 items need you
          </Badge>
        </div>

        {/* 3 — Key metrics */}
        <TemplateMetricGrid
          columns={4}
          stats={[
            { label: "Open approvals", value: "3", change: "Due today", trend: "up" },
            { label: "Active projects", value: "12", change: "+2 this week", trend: "up" },
            { label: "Team online", value: "6/14", change: "Peak at 2 PM", trend: "up" },
            { label: "Sprint velocity", value: "84", change: "+6 pts", trend: "up" },
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* 4 — Action queue */}
          <Card className="lg:col-span-5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2Icon className="size-4" />
                Action queue
              </CardTitle>
              <CardDescription>3 approvals waiting on you</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {approvals.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-3 rounded-lg border border-border/50 p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.requester} · {item.due}
                    </p>
                    <Badge variant="outline" className="mt-2 text-[10px]">
                      {item.type}
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Approve
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 5 — Calendar strip */}
          <Card className="lg:col-span-7">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarIcon className="size-4" />
                This week
              </CardTitle>
              <CardDescription>4 meetings on your calendar</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 sm:grid-cols-2">
              {meetings.map((meeting) => (
                <div
                  key={meeting.title}
                  className="flex items-center justify-between rounded-lg border border-border/50 px-3 py-2.5 text-sm"
                >
                  <div>
                    <p className="font-medium">{meeting.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {meeting.attendees} attendees
                    </p>
                  </div>
                  <Badge variant="secondary" className="tabular-nums">
                    {meeting.time}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 6 — Project momentum */}
        <section>
          <TemplateSectionHeading
            title="Project momentum"
            description="Active workstreams and velocity this sprint."
            className="mb-4"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <CardDescription>{project.meta}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="tabular-nums">
                      {project.progress}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Progress value={project.progress}>
                    <ProgressLabel className="sr-only">{project.name}</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                  <SparkBars values={project.spark} className="h-6" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* 7 — Team pulse + activity */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle className="text-base">Team pulse</CardTitle>
              <CardDescription>6 of 14 active right now</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex -space-x-2">
                {team.map((member) => (
                  <PersonAvatar
                    key={member.name}
                    name={member.name}
                    seed={member.name}
                    className="size-10 border-2 border-background"
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {team.slice(0, 3).map((member) => (
                  <Badge key={member.name} variant="outline" className="text-[10px]">
                    <span
                      className={`mr-1.5 size-1.5 rounded-full ${
                        member.status === "online"
                          ? "bg-emerald-500"
                          : member.status === "away"
                            ? "bg-amber-500"
                            : "bg-muted-foreground/40"
                      }`}
                    />
                    {member.name.split(" ")[0]}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle className="text-base">Recent activity</CardTitle>
              <CardDescription>Updates from your workspace</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm">
              {activity.map((item) => (
                <div
                  key={item.action}
                  className="flex items-start justify-between gap-3 border-b border-border/40 pb-3 last:border-0 last:pb-0"
                >
                  <p>
                    <span className="font-medium">{item.who}</span> {item.action}
                  </p>
                  <span className="shrink-0 text-xs text-muted-foreground">{item.when}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 8 — Quick create */}
        <section>
          <p className="mb-3 text-sm font-medium">Quick create</p>
          <div className="flex flex-wrap gap-2">
            {quickCreate.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="cursor-default px-3 py-1.5 text-sm hover:bg-muted/60"
              >
                <PlusIcon className="mr-1 size-3" />
                {item}
              </Badge>
            ))}
          </div>
        </section>
      </TemplateContent>

      {/* 9 — Roadmap alert band */}
      <TemplateBand tint="muted" className="py-6">
        <TemplateContent width="wide">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <Alert variant="destructive" className="border-destructive/30 bg-destructive/5">
              <AlertTriangleIcon />
              <AlertTitle>Roadmap blocked</AlertTitle>
              <AlertDescription>
                Mobile checkout is waiting on legal review for in-app payments. ETA slipped
                to next Tuesday — 2 downstream milestones affected.
              </AlertDescription>
            </Alert>
            <DashboardMock className="hidden lg:block" />
          </div>
        </TemplateContent>
      </TemplateBand>
    </TemplateSurface>
  )
}
