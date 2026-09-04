import { Badge } from "@/components/ui/badge"

export function DocSidebarShowcase() {
  const sections = [
    "Getting started",
    "Authentication",
    "Webhooks",
    "Rate limits",
    "Changelog",
  ] as const

  return (
    <div className="flex w-full gap-4">
      <nav className="w-36 shrink-0 flex-col gap-1 border-r border-border pr-3">
        {sections.map((section, index) => (
          <p
            key={section}
            className={`rounded-md px-2 py-1.5 text-xs ${
              index === 1
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {section}
          </p>
        ))}
      </nav>
      <div className="min-w-0 flex-1 flex-col gap-2">
        <Badge variant="secondary" className="w-fit">
          API
        </Badge>
        <p className="font-heading text-lg font-semibold">Authentication</p>
        <p className="text-sm text-muted-foreground">
          Use bearer tokens for server-side requests. Rotate keys every 90 days.
        </p>
      </div>
    </div>
  )
}
