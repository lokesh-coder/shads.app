import {
  AwardIcon,
  BookOpenIcon,
  ClockIcon,
  PlayIcon,
  UsersIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { ComposedPhoto } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.campus

const courses = [
  { title: "Design systems fundamentals", module: "Module 6 of 8", progress: 45 },
  { title: "User research methods", module: "Module 5 of 8", progress: 100 },
  { title: "Prototyping in Figma", module: "Module 4 of 8", progress: 100 },
] as const

const quizOptions = [
  "User interviews and contextual inquiry",
  "A/B testing only",
  "Analytics dashboards alone",
  "Competitive benchmarking exclusively",
] as const

const achievements = [
  { label: "First module", icon: AwardIcon },
  { label: "Research pro", icon: BookOpenIcon },
  { label: "Peer reviewer", icon: UsersIcon },
  { label: "5-day streak", icon: ClockIcon },
] as const

export function CampusTemplate() {
  return (
    <TemplateSurface>
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "My courses", active: true },
          { label: "Catalog" },
          { label: "Schedule" },
          { label: "Community" },
        ]}
        trailing={
          <Button variant="outline">
            <BookOpenIcon data-icon="inline-start" />
            Browse catalog
          </Button>
        }
      />

      <TemplateBand tint="accent">
        <TemplateContent width="wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="secondary" className="mb-3">
                {narrative.hero}
              </Badge>
              <h1 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                You&apos;re 62% through your certificate
              </h1>
              <p className="mt-2 text-muted-foreground">{narrative.subhero}</p>
            </div>
            <div className="w-full max-w-xs">
              <Progress value={62}>
                <ProgressLabel>Overall progress</ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
          </div>
        </TemplateContent>
      </TemplateBand>

      <TemplateContent width="wide" className="py-8">
        <h2 className="mb-6 font-heading text-lg font-semibold">Continue learning</h2>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title}>
              <CardHeader>
                <CardDescription>{course.module}</CardDescription>
                <CardTitle className="text-base">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress}>
                  <ProgressLabel className="sr-only">{course.title}</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {course.progress === 100 ? "Review" : "Continue"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mb-8 border-primary/20 bg-primary/[0.04]">
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge className="mb-2 w-fit">Live in 23 min</Badge>
                <CardTitle className="font-heading text-xl">
                  Design critique workshop
                </CardTitle>
                <CardDescription>
                  10:00 AM · with instructor Maya Chen · 45 min
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 font-heading text-3xl font-semibold tabular-nums">
                <ClockIcon className="size-5 text-muted-foreground" />
                00:23:14
              </div>
            </div>
          </CardHeader>
          <CardFooter>
            <Button>
              <PlayIcon data-icon="inline-start" />
              Join session
            </Button>
          </CardFooter>
        </Card>

        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                Quick quiz
              </Badge>
              <CardTitle className="text-base">
                Which method best captures qualitative insights early?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue={quizOptions[0]} className="flex flex-col gap-3">
                {quizOptions.map((option) => (
                  <div key={option} className="flex items-start gap-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="text-sm leading-snug font-normal">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button>Submit answer</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                Community
              </Badge>
              <CardTitle className="text-base">
                Cohort #12 study group forming
              </CardTitle>
              <CardDescription>
                14 learners interested in a weekly critique circle. First session
                Thursday at 6 PM.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline">Join group</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 font-heading text-lg font-semibold">Achievements</h2>
          <div className="flex flex-wrap gap-3">
            {achievements.map(({ label, icon: Icon }) => (
              <Badge
                key={label}
                variant="secondary"
                className="gap-1.5 px-3 py-1.5 text-sm"
              >
                <Icon className="size-3.5" />
                {label}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <ComposedPhoto variant="editorial" className="min-h-[180px] rounded-none md:min-h-full" />
            <div>
              <CardHeader>
                <CardDescription>Recommended for you</CardDescription>
                <CardTitle>Accessibility in product design</CardTitle>
                <CardDescription className="mt-2">
                  Module 7 · 4 lessons · Est. 2 hours · Unlocks after current module
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline">Preview module</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </TemplateContent>

      <footer className="border-t border-border/70 bg-muted/20 px-4 py-8 md:px-8">
        <TemplateContent width="wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <TemplateLogo name={narrative.brand} />
            <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span>Help center</span>
              <span>Contact support</span>
              <span>Community guidelines</span>
              <span>Accessibility</span>
            </nav>
          </div>
          <Separator className="my-6" />
          <p className="text-xs text-muted-foreground">
            © 2026 Campus Learning · Product Design Certificate
          </p>
        </TemplateContent>
      </footer>
    </TemplateSurface>
  )
}
