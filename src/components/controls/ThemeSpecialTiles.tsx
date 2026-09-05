import { CheckIcon, MessageSquareTextIcon, PencilIcon } from "lucide-react"
import type { ReactNode } from "react"

import type { ThemeConfig } from "@/lib/theme-config"
import {
  DEFAULT_PICKER_META,
  getConfigPickerMeta,
  type PresetPickerMeta,
} from "@/lib/preset-picker-meta"
import { cn } from "@/lib/utils"

const PREVIEW_HEIGHT = "h-14"

export function PresetMiniPreview({ meta }: { meta: PresetPickerMeta }) {
  return (
    <div
      className={cn("relative flex w-full flex-col justify-end overflow-hidden rounded-md border p-1.5", PREVIEW_HEIGHT)}
      style={{
        backgroundColor: meta.canvas,
        borderColor: meta.border,
        borderRadius: meta.radius,
      }}
    >
      <div className="flex gap-0.5">
        <div
          className="h-2 flex-1 rounded-sm"
          style={{ backgroundColor: meta.primary }}
        />
        <div
          className="h-2 w-5 rounded-sm opacity-40"
          style={{ backgroundColor: meta.border }}
        />
      </div>
      <div
        className={cn(
          "mt-1 flex h-5 items-center rounded-sm border px-1",
          meta.elevated && "shadow-sm",
        )}
        style={{
          backgroundColor: "#ffffff",
          borderColor: meta.border,
          borderRadius: `max(2px, calc(${meta.radius} * 0.5))`,
        }}
      >
        <div
          className="h-2 w-6 rounded-sm"
          style={{ backgroundColor: meta.primary }}
        />
      </div>
    </div>
  )
}

function ThemeTile({
  label,
  selected,
  onClick,
  disabled,
  preview,
  subtitle,
}: {
  label: string
  selected: boolean
  onClick?: () => void
  disabled?: boolean
  preview: ReactNode
  subtitle?: string
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group flex w-full flex-col gap-1.5 rounded-lg border p-2 text-left transition-colors",
        selected
          ? "border-primary ring-1 ring-primary/30"
          : "border-border/70 hover:border-border hover:bg-muted/40",
        disabled && "cursor-default opacity-60 hover:bg-transparent",
      )}
    >
      <div className="relative">
        {preview}
        {selected ? (
          <span
            className="absolute top-1 right-1 z-10 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
          >
            <CheckIcon className="size-2.5" />
          </span>
        ) : null}
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium">{label}</p>
        {subtitle ? (
          <p className="truncate text-[10px] text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
    </button>
  )
}

export function DefaultThemeTile({
  selected,
  onSelect,
}: {
  selected: boolean
  onSelect: () => void
}) {
  return (
    <ThemeTile
      label="Default"
      subtitle="Vanilla shadcn"
      selected={selected}
      onClick={onSelect}
      preview={<PresetMiniPreview meta={DEFAULT_PICKER_META} />}
    />
  )
}

function CustomPreview({
  selected,
  config,
}: {
  selected: boolean
  config: ThemeConfig
}) {
  if (selected) {
    return <PresetMiniPreview meta={getConfigPickerMeta(config)} />
  }

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-md border border-dashed border-border/80 bg-muted/25",
        PREVIEW_HEIGHT,
      )}
    >
      <PencilIcon className="size-4 text-muted-foreground/70" />
    </div>
  )
}

export function CustomThemeTile({
  selected,
  config,
}: {
  selected: boolean
  config: ThemeConfig
}) {
  return (
    <ThemeTile
      label="Custom"
      subtitle={selected ? "Your tweaks" : "Edit controls below"}
      selected={selected}
      disabled={!selected}
      preview={<CustomPreview selected={selected} config={config} />}
    />
  )
}

function AiPreview() {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 overflow-hidden rounded-md border border-border/80 bg-muted/30 p-2",
        PREVIEW_HEIGHT,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="h-1 w-full rounded-full bg-foreground/10" />
        <div className="h-1 w-4/5 rounded-full bg-foreground/8" />
        <div className="h-1 w-3/5 rounded-full bg-foreground/6" />
        <div className="mt-0.5 h-3 w-8 rounded-sm bg-foreground/15" />
      </div>
      <div className="flex shrink-0 flex-col items-center gap-1 border-l border-border/60 pl-2">
        <div className="flex gap-0.5">
          <div className="size-2 rounded-full bg-foreground/25" />
          <div className="size-2 rounded-full bg-foreground/18" />
          <div className="size-2 rounded-full bg-foreground/12" />
        </div>
        <MessageSquareTextIcon className="size-3 text-muted-foreground" />
      </div>
    </div>
  )
}

export function AiThemeTile({ onClick }: { onClick: () => void }) {
  return (
    <ThemeTile
      label="From prompt"
      subtitle="Paste AI JSON"
      selected={false}
      onClick={onClick}
      preview={<AiPreview />}
    />
  )
}
