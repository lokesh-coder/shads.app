import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { PresetOption } from "@/tokens/preset-types"

export type { PresetOption } from "@/tokens/preset-types"

type PresetWithCategory = PresetOption & { category?: string }

type PresetSelectProps<T extends PresetWithCategory> = {
  presets: readonly T[]
  value: string
  onChange: (preset: T) => void
  placeholder?: string
  className?: string
  /** When set, presets are grouped under these headings (in order). */
  categoryOrder?: readonly string[]
}

function groupPresets<T extends PresetWithCategory>(
  presets: readonly T[],
  categoryOrder?: readonly string[],
): { category: string; items: T[] }[] {
  const hasCategories = presets.some((preset) => preset.category)
  if (!hasCategories) {
    return [{ category: "", items: [...presets] }]
  }

  const buckets = new Map<string, T[]>()
  for (const preset of presets) {
    const category = preset.category ?? "Other"
    const list = buckets.get(category) ?? []
    list.push(preset)
    buckets.set(category, list)
  }

  const order = categoryOrder ?? [...buckets.keys()]
  const seen = new Set<string>()

  const groups: { category: string; items: T[] }[] = []
  for (const category of order) {
    const items = buckets.get(category)
    if (items?.length) {
      groups.push({ category, items })
      seen.add(category)
    }
  }
  for (const [category, items] of buckets) {
    if (!seen.has(category) && items.length) {
      groups.push({ category, items })
    }
  }

  return groups
}

export function PresetSelect<T extends PresetWithCategory>({
  presets,
  value,
  onChange,
  placeholder = "Custom",
  className,
  categoryOrder,
}: PresetSelectProps<T>) {
  const active = presets.find((preset) => preset.id === value)
  const groups = groupPresets(presets, categoryOrder)

  return (
    <div className="flex flex-col gap-1.5">
      <Select
        value={value || undefined}
        onValueChange={(next) => {
          if (!next) return
          const preset = presets.find((item) => item.id === next)
          if (preset) onChange(preset)
        }}
      >
        <SelectTrigger className={className ?? "w-full"}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-80">
          {groups.map((group) =>
            group.category ? (
              <SelectGroup key={group.category}>
                <SelectLabel className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {group.category}
                </SelectLabel>
                {group.items.map((preset) => (
                  <SelectItem key={preset.id} value={preset.id}>
                    {preset.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ) : (
              group.items.map((preset) => (
                <SelectItem key={preset.id} value={preset.id}>
                  {preset.label}
                </SelectItem>
              ))
            ),
          )}
        </SelectContent>
      </Select>
      {active ? (
        <div className="flex flex-col gap-0.5">
          {active.category ? (
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground/80">
              {active.category}
            </p>
          ) : null}
          <p className="text-xs text-muted-foreground">{active.description}</p>
        </div>
      ) : !value ? (
        <p className="text-xs text-muted-foreground">
          You&apos;ve customized this theme — pick a preset to reset, or keep
          tuning below.
        </p>
      ) : null}
    </div>
  )
}
