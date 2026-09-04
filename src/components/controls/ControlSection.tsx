import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react"

type ControlSectionProps = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  embedded?: boolean
}

export function ControlSection({
  title,
  children,
  defaultOpen = true,
  embedded = false,
}: ControlSectionProps) {
  if (embedded) {
    return <div className="flex flex-col gap-3">{children}</div>
  }

  return (
    <Collapsible defaultOpen={defaultOpen} className="border-b border-border">
      <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-medium hover:bg-muted/50">
        {title}
        <ChevronDownIcon className="size-4 shrink-0 transition-transform group-data-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-3 px-3 pb-3">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}
