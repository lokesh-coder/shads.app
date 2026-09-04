import {
  CakeIcon,
  MapPinIcon,
  SearchIcon,
  UserPlusIcon,
} from "lucide-react"

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
import { Input } from "@/components/ui/input"
import { TemplateSectionHeading } from "./template-sections"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { SparkBars } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateMetricGrid,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.guild

const filters = ["All", "Design", "Engineering", "Operations", "Remote", "New hires"] as const

const people = [
  { name: "Jordan Lee", role: "Design lead", dept: "Product Design", location: "SF", status: "Active" },
  { name: "Sam Patel", role: "Staff engineer", dept: "Platform", location: "NYC", status: "On leave" },
  { name: "Riley Chen", role: "People partner", dept: "HR", location: "Remote", status: "Active" },
  { name: "Morgan Blake", role: "Senior designer", dept: "Product Design", location: "London", status: "Active" },
  { name: "Alex Kim", role: "Finance ops", dept: "Finance", location: "SF", status: "Active" },
  { name: "Taylor Brooks", role: "Support lead", dept: "Success", location: "Austin", status: "Active" },
  { name: "Casey Nguyen", role: "Product manager", dept: "Product", location: "Remote", status: "Active" },
  { name: "Drew Martinez", role: "Engineering manager", dept: "Engineering", location: "NYC", status: "Active" },
  { name: "Jamie Park", role: "Brand designer", dept: "Product Design", location: "SF", status: "Active" },
] as const

const openRoles = [
  {
    title: "Senior Product Designer",
    team: "Product Design",
    location: "SF · Hybrid",
    applicants: 24,
  },
  {
    title: "Staff Frontend Engineer",
    team: "Platform",
    location: "Remote · US",
    applicants: 18,
  },
] as const

const recentActivity = [
  { type: "hire", who: "Jamie Park", detail: "Joined as Brand designer", when: "Mon" },
  { type: "birthday", who: "Alex Kim", detail: "Birthday today 🎂", when: "Today" },
  { type: "hire", who: "Casey Nguyen", detail: "Joined as Product manager", when: "Last week" },
  { type: "birthday", who: "Taylor Brooks", detail: "Birthday Mar 12", when: "Thu" },
] as const

export function GuildTemplate() {
  return (
    <TemplateSurface>
      {/* 1 — Header */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Directory", active: true },
          { label: "Org chart" },
          { label: "Time off" },
          { label: "Benefits" },
          { label: "Reviews" },
        ]}
        trailing={
          <>
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button size="sm">
              <UserPlusIcon data-icon="inline-start" />
              Invite people
            </Button>
          </>
        }
      />

      {/* 2 — Search hero band */}
      <TemplateBand tint="muted" className="py-8 md:py-10">
        <TemplateContent width="wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{narrative.tagline}</p>
              <h1 className="mt-1 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                {narrative.hero}
              </h1>
              <p className="mt-2 max-w-lg text-muted-foreground">{narrative.subhero}</p>
            </div>
            <div className="relative max-w-md flex-1">
              <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, role, or department..."
                className="h-10 pl-9"
              />
            </div>
          </div>

          {/* 3 — Filter chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter, i) => (
              <Badge
                key={filter}
                variant={i === 0 ? "default" : "outline"}
                className="cursor-default px-3 py-1"
              >
                {filter}
              </Badge>
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>

      <TemplateContent width="wide" className="flex flex-col gap-8 py-8">
        {/* 4 — Profile cards grid */}
        <section>
          <TemplateSectionHeading
            title="People"
            description="Browse the full company directory."
            className="mb-4"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <Card key={person.name} size="sm" className="transition-colors hover:bg-muted/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="size-11">
                    <AvatarFallback>
                      {person.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="truncate text-base">{person.name}</CardTitle>
                    <CardDescription className="truncate">{person.role}</CardDescription>
                  </div>
                  <Badge variant={person.status === "Active" ? "secondary" : "outline"}>
                    {person.status}
                  </Badge>
                </CardHeader>
                <CardContent className="flex items-center justify-between pt-0">
                  <p className="text-xs text-muted-foreground">{person.dept}</p>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPinIcon className="size-3" />
                    {person.location}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 5 — Org context */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Design team</CardTitle>
            <CardDescription>Org context · Product Design · 18 people</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <TemplateMetricGrid
              columns={3}
              stats={[
                { label: "Headcount", value: "18", change: "+2 this quarter", trend: "up" },
                { label: "Open roles", value: "2", change: "1 offer out", trend: "up" },
                { label: "Retention", value: "96%", change: "12-mo rolling", trend: "up" },
              ]}
            />
            <div>
              <p className="mb-2 text-xs text-muted-foreground">Hiring velocity (last 6 mo)</p>
              <SparkBars values={[30, 45, 38, 55, 62, 70]} className="h-10" />
            </div>
          </CardContent>
        </Card>

        {/* 6 — Open roles strip */}
        <section>
          <TemplateSectionHeading
            title="Open roles"
            description="Active requisitions across the org."
            className="mb-4"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {openRoles.map((role) => (
              <Card key={role.title}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-base">{role.title}</CardTitle>
                      <CardDescription>
                        {role.team} · {role.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="tabular-nums">
                      {role.applicants} applicants
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    View pipeline
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 7 — Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent activity</CardTitle>
            <CardDescription>New hires and upcoming birthdays</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {recentActivity.map((item) => (
              <div
                key={`${item.who}-${item.detail}`}
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3"
              >
                <Avatar className="size-9">
                  <AvatarFallback className="text-xs">
                    {item.who
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{item.who}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
                <div className="flex items-center gap-2">
                  {item.type === "birthday" ? (
                    <CakeIcon className="size-4 text-amber-500" />
                  ) : (
                    <UserPlusIcon className="size-4 text-primary" />
                  )}
                  <Badge variant="outline" className="text-[10px] tabular-nums">
                    {item.when}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TemplateContent>
    </TemplateSurface>
  )
}
