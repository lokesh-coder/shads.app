import {
  CalendarIcon,
  HeartPulseIcon,
  MessageSquareIcon,
  PhoneIcon,
  PillIcon,
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
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { ComposedPhoto } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.pulse

const vitals = [
  { label: "Blood pressure", value: "118/76", status: "Normal" },
  { label: "Heart rate", value: "72 bpm", status: "Normal" },
  { label: "Weight", value: "164 lbs", status: "Stable" },
] as const

const medications = [
  { name: "Lisinopril", dose: "10mg · Daily" },
  { name: "Metformin", dose: "500mg · Twice daily" },
  { name: "Atorvastatin", dose: "20mg · Evening" },
] as const

const wellnessResources = [
  {
    title: "Managing stress between visits",
    detail: "5-minute guided breathing exercises",
    variant: "warm" as const,
  },
  {
    title: "Nutrition for heart health",
    detail: "Meal planning guide · 12 min read",
    variant: "interior" as const,
  },
] as const

export function PulseTemplate() {
  return (
    <TemplateSurface>
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Home", active: true },
          { label: "Appointments" },
          { label: "Records" },
          { label: "Messages" },
        ]}
        trailing={<Button>Book visit</Button>}
      />

      <TemplateContent width="wide" className="py-8">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">Good morning, Jordan</p>
          <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            {narrative.hero}
          </h1>
          <p className="mt-2 text-muted-foreground">{narrative.subhero}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <HeartPulseIcon className="size-4" />
              Vitals summary
            </CardTitle>
            <CardDescription>Last updated Mar 8 · Home monitoring</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            {vitals.map((vital) => (
              <div key={vital.label} className="rounded-lg bg-muted/40 p-4">
                <p className="text-xs text-muted-foreground">{vital.label}</p>
                <p className="mt-1 font-heading text-xl font-semibold tabular-nums">
                  {vital.value}
                </p>
                <Badge variant="secondary" className="mt-2">
                  {vital.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <Card className="border-primary/20 bg-primary/[0.03]">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="size-12">
                  <AvatarFallback className="bg-primary/10 text-sm font-medium">
                    SA
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-base">Next appointment</CardTitle>
                      <CardDescription className="mt-2 font-heading text-xl font-semibold text-foreground">
                        Telehealth check-in
                      </CardDescription>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Thu, Mar 12 · 10:00 AM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Dr. Sofia Alvarez · Cardiology
                      </p>
                    </div>
                    <Badge variant="secondary">Confirmed</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button>
                <CalendarIcon data-icon="inline-start" />
                Join visit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Care plan progress</CardTitle>
              <CardDescription>Weekly wellness log · 4 of 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={68}>
                <ProgressLabel>Weekly wellness log</ProgressLabel>
                <ProgressValue />
              </Progress>
              <p className="mt-4 text-sm text-muted-foreground">
                Complete your symptom log before Thursday&apos;s visit.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MessageSquareIcon className="size-4" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
              <Avatar className="size-9">
                <AvatarFallback className="text-xs">SA</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Dr. Sofia Alvarez</p>
                <p className="truncate text-sm text-muted-foreground">
                  Your lab results are ready to review.
                </p>
              </div>
              <Badge>New</Badge>
            </div>
            <div className="flex items-center gap-3 rounded-lg p-3">
              <Avatar className="size-9">
                <AvatarFallback className="text-xs">NC</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Nurse Care Team</p>
                <p className="truncate text-sm text-muted-foreground">
                  Reminder: refill request approved.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <PillIcon className="size-4" />
              Current medications
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {medications.map((med) => (
              <div
                key={med.name}
                className="flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{med.name}</p>
                  <p className="text-xs text-muted-foreground">{med.dose}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <h2 className="mb-4 font-heading text-lg font-semibold">Wellness resources</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {wellnessResources.map((resource) => (
            <Card key={resource.title} className="overflow-hidden py-0">
              <ComposedPhoto
                variant={resource.variant}
                className="aspect-[2/1] rounded-none"
              />
              <CardHeader>
                <CardTitle className="text-base">{resource.title}</CardTitle>
                <CardDescription>{resource.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </TemplateContent>

      <TemplateBand tint="muted" className="py-6">
        <TemplateContent width="wide">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <PhoneIcon className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Need help?</p>
                <p className="text-sm text-muted-foreground">
                  Call (800) 555-0199 · Available 24/7
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Message care team
              </Button>
              <Button variant="outline" size="sm">
                Emergency info
              </Button>
            </div>
          </div>
        </TemplateContent>
      </TemplateBand>
    </TemplateSurface>
  )
}
