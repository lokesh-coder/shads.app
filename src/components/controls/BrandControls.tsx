import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  applyBrandPreset,
  setBrandPrimaryStep,
  syncBrandRamp,
  type BrandPresetName,
  type BrandRoles,
  type ChartPalette,
} from "@/lib/theme-config"
import { brandPresetCatalog } from "@/tokens/brand"

import { BrandStepSelect } from "./BrandStepSelect"
import { ControlSection } from "./ControlSection"
import type { ControlPanelProps } from "./control-panel-types"

function ColorField({
  label,
  hint,
  value,
  onChange,
}: {
  label: string
  hint?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      <div className="flex items-center gap-2">
        <div
          className="size-9 shrink-0 rounded-md border border-border"
          style={{ backgroundColor: value }}
        />
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="font-mono text-xs"
        />
      </div>
    </div>
  )
}

export function BrandControls({ config, onChange, embedded }: ControlPanelProps) {
  const updateRoles = (roles: Partial<BrandRoles>) => {
    onChange(
      syncBrandRamp({
        ...config,
        brandRoles: { ...config.brandRoles, ...roles },
      }),
    )
  }

  const updateChartColor = (index: number, color: string) => {
    const chartPalette = [...config.chartPalette] as ChartPalette
    chartPalette[index] = color as ChartPalette[number]
    onChange({ ...config, chartPalette })
  }

  return (
    <ControlSection title="Brand" defaultOpen={false} embedded={embedded}>
      <p className="text-xs text-muted-foreground">
        Color roles for this theme. For a full reset, use a global Style preset
        above.
      </p>

      <div className="flex flex-wrap gap-2">
        {brandPresetCatalog.map((preset) => (
          <Tooltip key={preset.id}>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    onChange(applyBrandPreset(config, preset.id as BrandPresetName))
                  }
                />
              }
            >
              {preset.label}
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-56">
              <p>{preset.description}</p>
              {preset.runtimeId ? (
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  data-brand=&quot;{preset.runtimeId}&quot;
                </p>
              ) : null}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      <ColorField
        label="Primary"
        hint="Main CTA and sidebar active state"
        value={config.brandRoles.primary}
        onChange={(primary) =>
          updateRoles({ primary: primary as BrandRoles["primary"] })
        }
      />

      <ColorField
        label="On primary"
        value={config.brandRoles.primaryForeground}
        onChange={(primaryForeground) =>
          updateRoles({
            primaryForeground: primaryForeground as BrandRoles["primaryForeground"],
          })
        }
      />

      <ColorField
        label="Highlight (optional)"
        hint="Tags, KPI accents — not secondary buttons"
        value={config.brandRoles.highlight ?? ""}
        onChange={(highlight) =>
          updateRoles({
            highlight: highlight ? (highlight as BrandRoles["highlight"]) : null,
          })
        }
      />

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label>Primary step (light)</Label>
          <BrandStepSelect
            value={config.semanticMapping.light.primary}
            onChange={(step) =>
              onChange(setBrandPrimaryStep(config, "light", step))
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Primary step (dark)</Label>
          <BrandStepSelect
            value={config.semanticMapping.dark.primary}
            onChange={(step) =>
              onChange(setBrandPrimaryStep(config, "dark", step))
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Chart palette</Label>
        <p className="text-xs text-muted-foreground">
          Curated series colors — independent from brand ramp
        </p>
        {config.chartPalette.map((color, index) => (
          <div key={index} className="flex items-center gap-2">
            <Label className="w-14 shrink-0 text-xs">Series {index + 1}</Label>
            <div
              className="size-7 shrink-0 rounded border border-border"
              style={{ backgroundColor: color }}
            />
            <Input
              value={color}
              onChange={(event) => updateChartColor(index, event.target.value)}
              className="font-mono text-xs"
            />
          </div>
        ))}
      </div>
    </ControlSection>
  )
}
