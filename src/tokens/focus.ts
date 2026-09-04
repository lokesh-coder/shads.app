/**
 * Focus style tokens — values live in src/styles/focus.css (optional import).
 */
export const focusTokens = {
  border: "--focus-border",
  shadow: "--focus-shadow",
  errorBorder: "--focus-error-border",
  errorShadow: "--focus-error-shadow",
} as const

export const focusTargets = [
  "input",
  "textarea",
  "select-trigger",
  "native-select",
  "combobox-chips",
  "input-group (focus-within)",
  "input-otp-slot (active)",
] as const

export type FocusStyle =
  | "border-lift"
  | "flat"
  | "brand-glow"
  | "inset"
  | "underline"

export const focusDefaults = {
  style: "border-lift" as FocusStyle,
  lightBorderMix: 22,
  darkBorderMix: 38,
  shadowScale: 1,
  errorBorderMix: 70,
  errorShadowScale: 1,
} as const
