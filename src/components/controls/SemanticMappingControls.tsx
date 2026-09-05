import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type {
  PrimaryForeground,
  SemanticMapping,
  NeutralStep,
} from "@/lib/theme-config"

import { BrandStepSelect } from "./BrandStepSelect"
import { ControlSection } from "./ControlSection"
import { NeutralStepSelect } from "./NeutralStepSelect"
import type { ControlPanelProps } from "./control-panel-types"

type NeutralField = {
  key: keyof Pick<
    SemanticMapping,
    | "foreground"
    | "muted"
    | "mutedForeground"
    | "secondary"
    | "secondaryForeground"
    | "accent"
    | "accentForeground"
    | "border"
    | "input"
    | "sidebar"
    | "sidebarAccent"
    | "sidebarAccentForeground"
    | "sidebarBorder"
  >
  label: string
}

const NEUTRAL_FIELDS: NeutralField[] = [
  { key: "foreground", label: "Foreground" },
  { key: "muted", label: "Muted" },
  { key: "mutedForeground", label: "Muted foreground" },
  { key: "secondary", label: "Secondary" },
  { key: "secondaryForeground", label: "Secondary foreground" },
  { key: "accent", label: "Accent" },
  { key: "accentForeground", label: "Accent foreground" },
  { key: "border", label: "Border" },
  { key: "input", label: "Input" },
  { key: "sidebar", label: "Sidebar" },
  { key: "sidebarAccent", label: "Sidebar accent" },
  { key: "sidebarAccentForeground", label: "Sidebar accent foreground" },
  { key: "sidebarBorder", label: "Sidebar border" },
]

function neutralStepValue(value: "#ffffff" | NeutralStep): NeutralStep {
  return value === "#ffffff" ? 50 : value
}

function MappingFields({
  mapping,
  mode,
  onUpdate,
}: {
  mapping: SemanticMapping
  mode: "light" | "dark"
  onUpdate: (mapping: SemanticMapping) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <Label>Background</Label>
        {mode === "light" ? (
          <Input value="#ffffff" readOnly className="font-mono text-xs" />
        ) : (
          <NeutralStepSelect
            value={neutralStepValue(mapping.background)}
            onChange={(step) => onUpdate({ ...mapping, background: step })}
          />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Card</Label>
        {mode === "light" ? (
          <Input value="#ffffff" readOnly className="font-mono text-xs" />
        ) : (
          <NeutralStepSelect
            value={neutralStepValue(mapping.card)}
            onChange={(step) => onUpdate({ ...mapping, card: step })}
          />
        )}
      </div>

      <p className="text-xs font-medium text-muted-foreground">Neutral stack</p>
      {NEUTRAL_FIELDS.map((field) => (
        <div key={field.key} className="flex flex-col gap-1.5">
          <Label>{field.label}</Label>
          <NeutralStepSelect
            value={mapping[field.key]}
            onChange={(step) =>
              onUpdate({ ...mapping, [field.key]: step })
            }
          />
        </div>
      ))}

      <p className="text-xs font-medium text-muted-foreground">Brand primary</p>
      <div className="flex flex-col gap-1.5">
        <Label>Primary step</Label>
        <BrandStepSelect
          value={mapping.primary}
          onChange={(step) => onUpdate({ ...mapping, primary: step })}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Primary foreground</Label>
        <Input
          value={mapping.primaryForeground}
          onChange={(event) =>
            onUpdate({
              ...mapping,
              primaryForeground: event.target.value as PrimaryForeground,
            })
          }
          className="font-mono text-xs"
          placeholder="#ffffff"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>Ring</Label>
        <BrandStepSelect
          value={mapping.ring}
          onChange={(step) => onUpdate({ ...mapping, ring: step })}
        />
      </div>
    </div>
  )
}

export function SemanticMappingPanel({
  config,
  onChange,
}: Pick<ControlPanelProps, "config" | "onChange">) {
  return (
    <>
      <p className="mb-3 text-xs text-muted-foreground">
        Maps each shadcn token to a step on your neutral or brand ramp. Chart
        colors are edited in Colors → Chart colors.
      </p>
      <Tabs defaultValue="light">
        <TabsList className="w-full">
          <TabsTrigger value="light" className="flex-1">
            Light
          </TabsTrigger>
          <TabsTrigger value="dark" className="flex-1">
            Dark
          </TabsTrigger>
        </TabsList>
        <TabsContent value="light">
          <MappingFields
            mode="light"
            mapping={config.semanticMapping.light}
            onUpdate={(light) =>
              onChange({
                ...config,
                semanticMapping: { ...config.semanticMapping, light },
              })
            }
          />
        </TabsContent>
        <TabsContent value="dark">
          <MappingFields
            mode="dark"
            mapping={config.semanticMapping.dark}
            onUpdate={(dark) =>
              onChange({
                ...config,
                semanticMapping: { ...config.semanticMapping, dark },
              })
            }
          />
        </TabsContent>
      </Tabs>
    </>
  )
}

/** @deprecated Use AdvancedControls — kept for direct import if needed */
export function SemanticMappingControls({
  config,
  onChange,
  embedded,
}: ControlPanelProps) {
  return (
    <ControlSection title="Semantic mapping" defaultOpen={false} embedded={embedded}>
      <SemanticMappingPanel config={config} onChange={onChange} />
    </ControlSection>
  )
}
