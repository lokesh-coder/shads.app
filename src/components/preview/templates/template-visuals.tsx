import type { ReactNode } from "react"

import {
  stockPhotoUrl,
  type StockPhotoVariant,
} from "@/lib/stock-media"
import { cn } from "@/lib/utils"

type VisualProps = {
  className?: string
  label?: string
  seed?: string
  alt?: string
}

/** Editorial / product photo from Unsplash. */
export function ComposedPhoto({
  className,
  label,
  variant = "editorial",
  seed = "default",
  alt = "",
}: VisualProps & { variant?: StockPhotoVariant | "editorial" | "warm" | "food" | "fashion" | "interior" }) {
  const mappedVariant: StockPhotoVariant =
    variant === "warm"
      ? "warm"
      : variant === "food"
        ? "food"
        : variant === "fashion"
          ? "fashion"
          : variant === "interior"
            ? "interior"
            : "editorial"

  return (
    <div className={cn("relative w-full overflow-hidden bg-muted", className)}>
      <img
        src={stockPhotoUrl(mappedVariant, seed, 1600)}
        alt={alt || label || ""}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {label ? (
        <span className="absolute bottom-4 left-4 rounded bg-background/80 px-2 py-1 text-[10px] tracking-widest text-foreground/70 uppercase backdrop-blur-sm">
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
      <div className="relative flex min-h-[220px]">
        <img
          src={stockPhotoUrl("workspace", "dashboard-mock", 900, 500)}
          alt="Product dashboard preview"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="relative flex w-full">
          <div className="hidden w-14 shrink-0 border-r border-border/50 bg-background/80 p-2 backdrop-blur-sm sm:block">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="mb-2 h-2 w-full rounded bg-muted-foreground/15" />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-3 bg-background/85 p-4 backdrop-blur-sm">
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
export function LocationBlock({
  address,
  hours,
  className,
  seed = "location",
}: VisualProps & { address: string; hours: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      <ComposedPhoto
        variant="interior"
        seed={seed}
        className="min-h-[140px] rounded-lg"
        alt="Restaurant location"
      />
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
