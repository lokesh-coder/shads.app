import { CheckCircle2Icon, CircleDashedIcon, LoaderIcon, RocketIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ListRow,
  ShowcaseContent,
  StatusDot,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const stages = [
  { name: "Build", status: "complete" as const, duration: "1m 24s", detail: "Compiled successfully" },
  { name: "Test", status: "running" as const, duration: "0m 38s", detail: "Running unit tests…" },
  { name: "Deploy", status: "pending" as const, duration: "—", detail: "Waiting for tests" },
]

function stageStatus(status: (typeof stages)[number]["status"]) {
  if (status === "complete") return "success" as const
  if (status === "running") return "warning" as const
  return "neutral" as const
}

function StageIcon({ status }: { status: (typeof stages)[number]["status"] }) {
  if (status === "complete") return <CheckCircle2Icon className="size-4 text-primary" />
  if (status === "running") return <LoaderIcon className="size-4 animate-spin text-primary" />
  return <CircleDashedIcon className="size-4 text-muted-foreground" />
}

export function DeployPipelineShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Deploy pipeline</CardTitle>
        <CardAction>
          <Badge variant="outline" className="gap-1 text-xs">
            <RocketIcon className="size-3" />
            v2.14.0
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          {stages.map((stage) => (
            <ListRow
              key={stage.name}
              leading={
                <div className="relative flex size-9 items-center justify-center">
                  <StageIcon status={stage.status} />
                  <StatusDot
                    status={stageStatus(stage.status)}
                    className="absolute -top-0.5 -right-0.5"
                  />
                </div>
              }
              title={stage.name}
              description={stage.status === "running" ? stage.detail : stage.duration}
              trailing={
                stage.status === "running" ? (
                  <Badge variant="secondary" className="text-xs">In progress</Badge>
                ) : stage.status === "complete" ? (
                  <Badge variant="secondary" className="text-xs text-primary">Passed</Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">Pending</Badge>
                )
              }
            />
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
