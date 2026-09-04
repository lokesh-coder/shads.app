import { TerminalBlock } from "@/components/preview/showcases/showcase-ui"

export function ToolOutputShowcase() {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-xs font-medium text-muted-foreground">Tool result</p>
      <TerminalBlock>
        {`{
  "mrr": 128400,
  "delta": "+12.4%",
  "top_segment": "enterprise"
}`}
      </TerminalBlock>
    </div>
  )
}
