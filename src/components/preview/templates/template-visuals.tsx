import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type VisualProps = {
  className?: string
  label?: string
}

/** Composed editorial photo — layered shapes, not a flat gradient slab. */
export function ComposedPhoto({
  className,
  label,
  variant = "editorial",
}: VisualProps & { variant?: "editorial" | "warm" | "food" | "fashion" | "interior" }) {
  const palette = {
    editorial: "from-primary/20 via-muted to-muted/40",
    warm: "from-amber-600/25 via-stone-400/20 to-muted/30",
    food: "from-orange-900/30 via-amber-800/20 to-stone-700/25",
    fashion: "from-stone-800/40 via-neutral-600/20 to-muted/20",
    interior: "from-emerald-900/15 via-stone-500/15 to-muted/30",
  }[variant]

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-br",
        palette,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 h-1/2 w-2/3 rounded-tr-[40%] bg-foreground/8" />
      <div className="absolute top-1/4 right-1/4 size-24 rounded-full bg-foreground/6 blur-sm" />
      <div className="absolute bottom-1/4 right-1/3 h-32 w-24 rotate-6 rounded-lg bg-foreground/10" />
      {label ? (
        <span className="absolute bottom-4 left-4 text-[10px] tracking-widest text-foreground/50 uppercase">
          {label}
        </span>
      ) : null}
    </div>
  )
}

/** Mini product dashboard mock for marketing heroes. */
export function DashboardMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/70 bg-background shadow-xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/60 px-3 py-2">
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-destructive/60" />
          <span className="size-2 rounded-full bg-amber-500/60" />
          <span className="size-2 rounded-full bg-emerald-500/60" />
        </div>
        <div className="mx-auto h-4 w-32 rounded bg-muted/80" />
      </div>
      <div className="flex min-h-[220px]">
        <div className="hidden w-14 shrink-0 border-r border-border/50 bg-muted/30 p-2 sm:block">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="mb-2 h-2 w-full rounded bg-muted-foreground/15" />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            {[68, 42, 91].map((w, i) => (
              <div key={i} className="rounded-lg border border-border/50 p-2">
                <div className="mb-2 h-1.5 w-8 rounded bg-muted-foreground/20" />
                <div
                  className="h-4 rounded bg-primary/30"
                  style={{ width: `${w}%`, maxWidth: "100%" }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1 rounded-lg border border-border/50 p-3">
            {[40, 65, 45, 80, 55, 70, 48, 85, 60, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-primary/40"
                style={{ height: `${h}%`, minHeight: 8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Terminal log mock for dev tools. */
export function TerminalMock({
  lines,
  className,
}: {
  lines: string[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border/70 bg-foreground font-mono text-[11px] leading-relaxed text-background",
        className,
      )}
    >
      <div className="border-b border-background/20 px-3 py-1.5 text-background/60">
        build.log
      </div>
      <div className="max-h-40 space-y-0.5 overflow-auto p-3">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

/** Inline chart spark bars. */
export function SparkBars({
  values,
  className,
}: {
  values: readonly number[]
  className?: string
}) {
  return (
    <div className={cn("flex h-8 items-end gap-0.5", className)}>
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-primary/50"
          style={{ height: `${v}%`, minHeight: 2 }}
        />
      ))}
    </div>
  )
}

/** Star rating row. */
export function StarRating({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-amber-500", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-sm">
          ★
        </span>
      ))}
    </div>
  )
}

/** Map/location placeholder block. */
export function LocationBlock({ address, hours, className }: VisualProps & { address: string; hours: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      <ComposedPhoto variant="interior" className="min-h-[140px] rounded-lg" label="Map" />
      <div className="flex flex-col justify-center gap-2 text-sm">
        <p className="font-medium">{address}</p>
        <p className="text-muted-foreground">{hours}</p>
      </div>
    </div>
  )
}

/** Artifact document preview for AI chat. */
export function DocumentArtifact({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("rounded-xl border border-border/70 bg-background p-4 shadow-sm", className)}>
      <p className="mb-3 text-xs font-medium text-muted-foreground">{title}</p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}
