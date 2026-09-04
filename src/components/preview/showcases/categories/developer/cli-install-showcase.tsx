import { CheckIcon, CopyIcon, TerminalIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
  TerminalBlock,
} from "@/components/preview/showcases/showcase-ui"

export function CliInstallShowcase() {
  return (
    <Card className={showcaseCard.terminal}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle className="flex items-center gap-2 text-sm">
          <TerminalIcon className="size-4" />
          Install CLI
        </CardTitle>
        <CardDescription className="text-xs">
          Get started with the Acme CLI to manage uploads from your terminal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex items-center gap-2">
            <TerminalBlock className="max-h-none flex-1 bg-muted font-mono text-foreground">
              npm install -g @acme/cli
            </TerminalBlock>
            <Button variant="outline" size="icon-sm">
              <CopyIcon />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary" className="gap-1 font-mono text-xs">
              <CheckIcon className="size-3" />
              v3.2.1
            </Badge>
            <span>Requires Node.js 18+</span>
          </div>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
