import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

function normalizeHex(value: string): string {
  const raw = value.trim().replace(/^#/, "")
  if (raw.length === 3) {
    return `#${raw
      .split("")
      .map((char) => char + char)
      .join("")}`
  }
  if (/^[0-9a-fA-F]{6}$/.test(raw)) {
    return `#${raw}`
  }
  return "#000000"
}

type ColorFieldProps = {
  label: string
  hint?: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export function ColorField({
  label,
  hint,
  value,
  onChange,
  className,
}: ColorFieldProps) {
  const pickerValue = normalizeHex(value || "#000000")

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label>{label}</Label>
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={pickerValue}
          onChange={(event) => onChange(event.target.value)}
          aria-label={`${label} color picker`}
          className="size-9 shrink-0 cursor-pointer rounded-md border border-border bg-background p-0.5"
        />
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="font-mono text-xs"
          spellCheck={false}
        />
      </div>
    </div>
  )
}
