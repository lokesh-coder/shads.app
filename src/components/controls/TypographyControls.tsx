import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getFontById, headingFonts, monoFonts, sansFonts } from "@/tokens/fonts"
import {
  matchTypographyPresetId,
  typographyPresets,
} from "@/tokens/typography-presets"
import {
  matchTypeScalePresetId,
  typeScalePresets,
} from "@/tokens/type-scale"

import { ControlSection } from "./ControlSection"
import { PresetSelect } from "./PresetSelect"
import type { ControlPanelProps } from "./control-panel-types"

function FontSelectItem({
  fontId,
  label,
}: {
  fontId: string
  label: string
}) {
  const font = getFontById(fontId)
  return (
    <SelectItem value={fontId}>
      <span style={{ fontFamily: font?.family }}>{label}</span>
    </SelectItem>
  )
}

export function TypographyControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  const activeSans = getFontById(config.fonts.sans)
  const activeHeading = getFontById(config.fonts.heading)
  const activeMono = getFontById(config.fonts.mono)

  return (
    <ControlSection title="Typography" defaultOpen={false} embedded={embedded}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label>Type scale</Label>
          <PresetSelect
            presets={typeScalePresets}
            value={matchTypeScalePresetId(config.typeScale) ?? ""}
            onChange={(preset) =>
              onChange({
                ...config,
                typeScale: { ...config.typeScale, ...preset.values },
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Font pairing</Label>
          <PresetSelect
            presets={typographyPresets}
            value={matchTypographyPresetId(config.fonts) ?? ""}
            onChange={(preset) =>
              onChange({
                ...config,
                fonts: { ...config.fonts, ...preset.fonts },
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Sans / body</Label>
          <Select
            value={config.fonts.sans}
            onValueChange={(sans) => {
              if (!sans) return
              onChange({ ...config, fonts: { ...config.fonts, sans } })
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                <span style={{ fontFamily: activeSans?.family }}>
                  {activeSans?.label ?? config.fonts.sans}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {sansFonts.map((font) => (
                <FontSelectItem key={font.id} fontId={font.id} label={font.label} />
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Heading / display</Label>
          <Select
            value={config.fonts.heading}
            onValueChange={(heading) => {
              if (!heading) return
              onChange({ ...config, fonts: { ...config.fonts, heading } })
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                <span style={{ fontFamily: activeHeading?.family }}>
                  {activeHeading?.label ?? config.fonts.heading}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {headingFonts.map((font) => (
                <FontSelectItem key={font.id} fontId={font.id} label={font.label} />
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Mono</Label>
          <Select
            value={config.fonts.mono}
            onValueChange={(mono) => {
              if (!mono) return
              onChange({ ...config, fonts: { ...config.fonts, mono } })
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                <span style={{ fontFamily: activeMono?.family }}>
                  {activeMono?.label ?? config.fonts.mono}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {monoFonts.map((font) => (
                <FontSelectItem key={font.id} fontId={font.id} label={font.label} />
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </ControlSection>
  )
}
