export const overlayDataSlots = [
  "dialog-overlay",
  "alert-dialog-overlay",
  "sheet-overlay",
  "drawer-overlay",
] as const

export type OverlayStyle =
  | "whisper"
  | "balanced"
  | "frosted"
  | "cinematic"
  | "immersive"

export const overlayDefaults = {
  style: "balanced" as OverlayStyle,
  opacity: 12,
  darkOpacity: 22,
  blur: 4,
} as const
