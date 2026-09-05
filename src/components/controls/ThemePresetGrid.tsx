import { useState } from "react"
import { CheckIcon } from "lucide-react"

import { AiThemeDialog } from "@/components/controls/AiThemeDialog"
import {
  AiThemeTile,
  CustomThemeTile,
  DefaultThemeTile,
  PresetMiniPreview,
} from "@/components/controls/ThemeSpecialTiles"
import type { ControlPanelProps } from "@/components/controls/control-panel-types"
import {
  applyDefaultShadcn,
  applyGlobalPreset,
  resolveThemePickerSelection,
  type GlobalPresetId,
  type ThemePickerSelection,
} from "@/lib/theme-config"
import { getPresetPickerMeta } from "@/lib/preset-picker-meta"
import { cn } from "@/lib/utils"
import {
  globalPresetCategories,
  globalPresets,
  type GlobalPreset,
} from "@/tokens/global-presets"

function groupPresetsByCategory(): { category: string; items: GlobalPreset[] }[] {
  const buckets = new Map<string, GlobalPreset[]>()

  for (const preset of globalPresets) {
    const list = buckets.get(preset.category) ?? []
    list.push(preset)
    buckets.set(preset.category, list)
  }

  return globalPresetCategories
    .map((category) => ({
      category,
      items: buckets.get(category) ?? [],
    }))
    .filter((group) => group.items.length > 0)
}

function PresetTile({
  preset,
  selected,
  onSelect,
}: {
  preset: GlobalPreset
  selected: boolean
  onSelect: () => void
}) {
  const meta = getPresetPickerMeta(preset)

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-full flex-col gap-1.5 rounded-lg border p-2 text-left transition-colors",
        selected
          ? "border-primary ring-1 ring-primary/30"
          : "border-border/70 hover:border-border hover:bg-muted/40",
      )}
    >
      <div className="relative">
        <PresetMiniPreview meta={meta} />
        {selected ? (
          <span
            className="absolute top-1 right-1 z-10 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
          >
            <CheckIcon className="size-2.5" />
          </span>
        ) : null}
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium">{preset.label}</p>
      </div>
    </button>
  )
}

function selectionDescription(selection: ThemePickerSelection): string {
  if (selection === "default") {
    return "Stock shadcn tokens with no premium chrome layers — a clean baseline."
  }
  if (selection === "custom") {
    return "You've customized this theme — pick a preset or Default to reset, or keep tuning below."
  }
  const preset = globalPresets.find((item) => item.id === selection)
  return preset?.description ?? ""
}

type ThemePresetGridProps = Pick<ControlPanelProps, "config" | "onChange">

export function ThemePresetGrid({ config, onChange }: ThemePresetGridProps) {
  const [aiDialogOpen, setAiDialogOpen] = useState(false)
  const selection = resolveThemePickerSelection(config)
  const groups = groupPresetsByCategory()

  const selectPreset = (presetId: GlobalPresetId) => {
    onChange(applyGlobalPreset(config, presetId))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        <DefaultThemeTile
          selected={selection === "default"}
          onSelect={() => onChange(applyDefaultShadcn(config))}
        />
        <CustomThemeTile selected={selection === "custom"} config={config} />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <AiThemeTile onClick={() => setAiDialogOpen(true)} />
      </div>

      <AiThemeDialog
        config={config}
        onChange={onChange}
        open={aiDialogOpen}
        onOpenChange={setAiDialogOpen}
      />

      {groups.map((group) => (
        <div key={group.category} className="flex flex-col gap-2">
          <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
            {group.category}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {group.items.map((preset) => (
              <PresetTile
                key={preset.id}
                preset={preset}
                selected={selection === preset.id}
                onSelect={() => selectPreset(preset.id as GlobalPresetId)}
              />
            ))}
          </div>
        </div>
      ))}

      <p className="text-xs text-muted-foreground">{selectionDescription(selection)}</p>
    </div>
  )
}
