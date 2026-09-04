import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { showcaseCard } from "@/components/preview/showcases/showcase-ui"

export function WorkspaceHubShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader>
        <CardTitle>Good afternoon, Alex</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">3 tasks due</Badge>
          <Badge variant="secondary">1 approval waiting</Badge>
        </div>
        <Button size="sm" className="w-fit">
          Open workspace
        </Button>
      </CardContent>
    </Card>
  )
}
