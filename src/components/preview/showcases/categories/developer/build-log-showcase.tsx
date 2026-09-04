import { TerminalIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ShowcaseContent,
  showcaseCard,
  TerminalBlock,
} from "@/components/preview/showcases/showcase-ui"

const logLines = [
  { level: "info", text: "▸ Compiling TypeScript…" },
  { level: "info", text: "✓ 142 modules transformed" },
  { level: "warn", text: "⚠ Chunk size exceeds 500 kB" },
  { level: "info", text: "▸ Rendering chunks…" },
  { level: "success", text: "✓ Built in 4.2s" },
]

export function BuildLogShowcase() {
  return (
    <Card className={showcaseCard.terminal}>
      <CardHeader className="border-b border-border/60">
        <CardTitle className="flex items-center gap-2 text-sm">
          <TerminalIcon className="size-4" />
          Build log
        </CardTitle>
        <CardAction>
          <Badge variant="outline" className="font-mono text-xs">
            main · #4821
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="p-0">
        <ShowcaseContent className="gap-0 p-3">
          <TerminalBlock className="max-h-36 bg-foreground">
            {logLines.map((line) => (
              <div
                key={line.text}
                className={
                  line.level === "warn"
                    ? "text-amber-400"
                    : line.level === "success"
                      ? "text-emerald-400"
                      : "text-background/70"
                }
              >
                {line.text}
              </div>
            ))}
          </TerminalBlock>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
