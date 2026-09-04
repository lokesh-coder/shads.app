/**
 * Component personality — how surfaces and controls behave beyond color tokens.
 */
export type CardSurfaceMode =
  | "frameless"
  | "bordered"
  | "elevated"
  | "floating"

export type ButtonPersonality = "utility" | "product" | "editorial"

export type PersonalityValues = {
  cardMode: CardSurfaceMode
  buttonPersonality: ButtonPersonality
}

export const personalityDefaults: PersonalityValues = {
  cardMode: "elevated",
  buttonPersonality: "product",
}

export type PersonalityPreset = {
  id: string
  label: string
  description: string
  values: PersonalityValues
}

export const personalityPresets = [
  {
    id: "operator",
    label: "Operator",
    description: "Bordered panels — dense admin and data tools",
    values: { cardMode: "bordered", buttonPersonality: "utility" },
  },
  {
    id: "product",
    label: "Product",
    description: "Soft elevation on cards — everyday SaaS UI",
    values: { cardMode: "elevated", buttonPersonality: "product" },
  },
  {
    id: "launch",
    label: "Launch",
    description: "Floating cards on heroes — marketing and landing pages",
    values: { cardMode: "floating", buttonPersonality: "product" },
  },
  {
    id: "reading",
    label: "Reading",
    description: "Hairline borders, calm buttons — editorial content",
    values: { cardMode: "bordered", buttonPersonality: "product" },
  },
  {
    id: "lookbook",
    label: "Lookbook",
    description: "Frameless tiles, editorial CTAs — fashion and image-led retail",
    values: { cardMode: "frameless", buttonPersonality: "editorial" },
  },
  {
    id: "storefront",
    label: "Storefront",
    description: "Elevated product cards, clear commerce CTAs",
    values: { cardMode: "elevated", buttonPersonality: "product" },
  },
  {
    id: "workbench",
    label: "Workbench",
    description: "Bordered flat panels — developer and technical UIs",
    values: { cardMode: "bordered", buttonPersonality: "utility" },
  },
  {
    id: "canvas",
    label: "Canvas",
    description: "Frameless content areas — AI chat and assistant products",
    values: { cardMode: "frameless", buttonPersonality: "product" },
  },
] as const satisfies readonly PersonalityPreset[]

export type PersonalityPresetId = (typeof personalityPresets)[number]["id"]

export function matchPersonalityPresetId(
  personality: PersonalityValues,
): PersonalityPresetId | null {
  return (
    personalityPresets.find((preset) =>
      preset.values.cardMode === personality.cardMode &&
      preset.values.buttonPersonality === personality.buttonPersonality,
    )?.id ?? null
  )
}
