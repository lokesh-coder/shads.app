import { ExternalLinkIcon, GitBranchIcon, CodeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function GitRepoShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Connected repository</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <ListRow
            leading={<IconTile icon={CodeIcon} status="success" />}
            title="acme/image-pipeline"
            description="Private · Last push 2h ago"
            trailing={
              <Badge variant="secondary" className="gap-1 font-mono text-xs">
                <GitBranchIcon className="size-3" />
                main
              </Badge>
            }
            className="rounded-lg border border-border/70 bg-muted/20 px-3"
          />
          <p className="text-xs text-muted-foreground">
            Auto-deploys on push to main. Preview builds run on pull requests.
          </p>
        </ShowcaseContent>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <ExternalLinkIcon data-icon="inline-start" />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  )
}
