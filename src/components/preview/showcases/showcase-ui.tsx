import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/** Card surface presets — personality layer overrides chrome when active. */
export const showcaseCard = {
  base: "w-full",
  editorial: "w-full overflow-hidden",
  accent: "w-full bg-primary/[0.03]",
  warning: "w-full ring-1 ring-amber-500/20 bg-amber-500/[0.04]",
  danger: "w-full ring-1 ring-destructive/20 bg-destructive/[0.03]",
  terminal: "w-full overflow-hidden ring-1 ring-foreground/10",
} as const

export const showcaseHeader = {
  form: "border-b border-border/60",
  data: "pb-3",
} as const

export function ShowcaseContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-4", className)} {...props} />
}

type MediaFrameProps = {
  aspect?: "video" | "square" | "wide" | "portrait"
  tint?: "default" | "editorial" | "media" | "warm"
  className?: string
}

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  portrait: "aspect-[4/5]",
} as const

const tintClass = {
  default: "from-muted via-muted/70 to-background",
  editorial: "from-primary/12 via-muted/80 to-muted/30",
  media: "from-muted via-primary/8 to-muted/40",
  warm: "from-amber-500/10 via-muted to-muted/50",
} as const

export function MediaFrame({
  aspect = "video",
  tint = "default",
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-br",
        aspectClass[aspect],
        tintClass[tint],
        className,
      )}
    />
  )
}

export function InsetPanel({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/70 bg-muted/35 p-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-wide text-muted-foreground uppercase",
        className,
      )}
    >
      {children}
    </p>
  )
}

type MetricProps = {
  label: string
  value: string
  change?: string
  trend?: "up" | "down" | "neutral"
  className?: string
}

export function MetricValue({
  label,
  value,
  change,
  trend = "neutral",
  className,
}: MetricProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Eyebrow>{label}</Eyebrow>
      <p className="font-heading text-2xl font-semibold tracking-tight tabular-nums">
        {value}
      </p>
      {change ? (
        <Badge
          variant="secondary"
          className={cn(
            "w-fit text-xs",
            trend === "up" && "text-primary",
            trend === "down" && "text-destructive",
          )}
        >
          {change}
        </Badge>
      ) : null}
    </div>
  )
}

type ListRowProps = {
  leading?: ReactNode
  title: string
  description?: string
  trailing?: ReactNode
  className?: string
}

export function ListRow({
  leading,
  title,
  description,
  trailing,
  className,
}: ListRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/45",
        className,
      )}
    >
      {leading}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium leading-snug">{title}</p>
        {description ? (
          <p className="truncate text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {trailing}
    </div>
  )
}

type StatusDotProps = {
  status: "success" | "warning" | "error" | "neutral"
  className?: string
}

const dotClass = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-destructive",
  neutral: "bg-muted-foreground",
} as const

export function StatusDot({ status, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "size-2 shrink-0 rounded-full ring-2 ring-card",
        dotClass[status],
        className,
      )}
    />
  )
}

type IconTileProps = {
  icon: LucideIcon
  status?: StatusDotProps["status"]
  className?: string
}

export function IconTile({ icon: Icon, status, className }: IconTileProps) {
  return (
    <div
      className={cn(
        "relative flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background",
        className,
      )}
    >
      <Icon className="size-4 text-muted-foreground" />
      {status ? (
        <StatusDot
          status={status}
          className="absolute -top-0.5 -right-0.5"
        />
      ) : null}
    </div>
  )
}

export function TerminalBlock({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "max-h-32 overflow-auto rounded-lg bg-foreground p-3 font-mono text-xs leading-relaxed text-background",
        className,
      )}
    >
      {children}
    </div>
  )
}
