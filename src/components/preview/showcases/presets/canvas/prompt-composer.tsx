import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function PromptComposerShowcase() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Textarea
        placeholder="Ask anything about your product data…"
        className="min-h-24 resize-none"
        defaultValue="Draft a release note for the billing API changes."
      />
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">Model · Geist 1.2</p>
        <Button size="sm" className="gap-1.5">
          Send
          <ArrowUpIcon className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
