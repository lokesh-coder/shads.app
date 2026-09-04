/**
 * Type scale tokens — body rhythm, display sizes, icon weight.
 */
export type TypeScaleValues = {
  /** html font-size — scales rem-based utility classes */
  rootSize: string
  headingTracking: string
  bodyLeading: string
  headingLeading: string
  iconStrokeWidth: number
  /** Hero / editorial display sizes */
  display1: string
  display2: string
  display3: string
}

export const typeScaleDefaults: TypeScaleValues = {
  rootSize: "16px",
  headingTracking: "-0.02em",
  bodyLeading: "1.5",
  headingLeading: "1.2",
  iconStrokeWidth: 2,
  display1: "clamp(1.875rem, 3vw, 2.25rem)",
  display2: "clamp(1.5rem, 2.5vw, 1.875rem)",
  display3: "clamp(1.25rem, 2vw, 1.5rem)",
}

export type TypeScalePreset = {
  id: string
  label: string
  description: string
  values: TypeScaleValues
}

export const typeScalePresets = [
  {
    id: "compact",
    label: "Compact",
    description: "14px base, modest display — dashboards and admin",
    values: {
      rootSize: "14px",
      headingTracking: "-0.03em",
      bodyLeading: "1.45",
      headingLeading: "1.12",
      iconStrokeWidth: 2,
      display1: "clamp(1.5rem, 2.5vw, 1.75rem)",
      display2: "clamp(1.25rem, 2vw, 1.5rem)",
      display3: "clamp(1.125rem, 1.5vw, 1.25rem)",
    },
  },
  {
    id: "default",
    label: "Default",
    description: "16px base — balanced product UI",
    values: { ...typeScaleDefaults },
  },
  {
    id: "relaxed",
    label: "Relaxed",
    description: "16px base, open leading — marketing pages",
    values: {
      rootSize: "16px",
      headingTracking: "-0.025em",
      bodyLeading: "1.6",
      headingLeading: "1.18",
      iconStrokeWidth: 1.75,
      display1: "clamp(2.25rem, 4vw, 3rem)",
      display2: "clamp(1.75rem, 3vw, 2.25rem)",
      display3: "clamp(1.375rem, 2.5vw, 1.75rem)",
    },
  },
  {
    id: "editorial",
    label: "Editorial",
    description: "17px base — magazines and long-form reading",
    values: {
      rootSize: "17px",
      headingTracking: "-0.015em",
      bodyLeading: "1.65",
      headingLeading: "1.14",
      iconStrokeWidth: 1.5,
      display1: "clamp(2.5rem, 5vw, 3.5rem)",
      display2: "clamp(2rem, 4vw, 2.75rem)",
      display3: "clamp(1.5rem, 3vw, 2rem)",
    },
  },
  {
    id: "display",
    label: "Display",
    description: "18px base, large display type — fashion and hero retail",
    values: {
      rootSize: "18px",
      headingTracking: "0.04em",
      bodyLeading: "1.7",
      headingLeading: "1.08",
      iconStrokeWidth: 1.25,
      display1: "clamp(3rem, 7vw, 5.5rem)",
      display2: "clamp(2.25rem, 5vw, 3.75rem)",
      display3: "clamp(1.75rem, 3.5vw, 2.5rem)",
    },
  },
] as const satisfies readonly TypeScalePreset[]

export type TypeScalePresetId = (typeof typeScalePresets)[number]["id"]

export function matchTypeScalePresetId(
  typeScale: TypeScaleValues,
): TypeScalePresetId | null {
  return (
    typeScalePresets.find((preset) =>
      (Object.keys(preset.values) as (keyof TypeScaleValues)[]).every(
        (key) => typeScale[key] === preset.values[key],
      ),
    )?.id ?? null
  )
}
