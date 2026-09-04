import type {
  BrandStep,
  NeutralStep,
  PrimaryForeground,
  SemanticMapping,
  ThemeConfig,
} from "@/lib/theme-config"
import { getFontById } from "@/tokens/fonts"
import { overlayDataSlots } from "@/tokens/overlays"
import { surfaceRingSlots } from "@/tokens/surfaces"
import { themeCssSeed } from "@/tokens/theme-seed"
import { formatCommentedPresets, formatRuntimePresetsCss } from "@/tokens/brand"

function brandVar(step: BrandStep): string {
  return `var(--brand-${step})`
}

function neutralVar(step: NeutralStep): string {
  return `var(--neutral-${step})`
}

function canvasCss(value: "#ffffff" | NeutralStep): string {
  if (value === "#ffffff") return "#ffffff"
  return neutralVar(value)
}

function primaryForegroundCss(value: PrimaryForeground): string {
  if (typeof value === "string") {
    return value
  }
  return brandVar(value)
}

function mappingBlock(
  selector: string,
  mapping: SemanticMapping,
  config: ThemeConfig,
): string {
  const chartLines = config.chartPalette.map(
    (color, index) => `  --chart-${index + 1}: ${color};`,
  )

  const highlightLine = config.brandRoles.highlight
    ? `  --brand-highlight: ${config.brandRoles.highlight};`
    : null

  const lines = [
    "  /* Canvas */",
    `  --background: ${canvasCss(mapping.background)};`,
    `  --card: ${canvasCss(mapping.card)};`,
    `  --popover: ${canvasCss(mapping.card)};`,
    "",
    "  /* Structure & type — always neutral */",
    `  --foreground: ${neutralVar(mapping.foreground)};`,
    `  --card-foreground: ${neutralVar(mapping.foreground)};`,
    `  --popover-foreground: ${neutralVar(mapping.foreground)};`,
    `  --muted: ${neutralVar(mapping.muted)};`,
    `  --muted-foreground: ${neutralVar(mapping.mutedForeground)};`,
    `  --secondary: ${neutralVar(mapping.secondary)};`,
    `  --secondary-foreground: ${neutralVar(mapping.secondaryForeground)};`,
    `  --accent: ${neutralVar(mapping.accent)};`,
    `  --accent-foreground: ${neutralVar(mapping.accentForeground)};`,
    `  --border: ${neutralVar(mapping.border)};`,
    `  --input: ${neutralVar(mapping.input)};`,
    "",
    "  /* Brand — primary actions only */",
    `  --primary: ${brandVar(mapping.primary)};`,
    `  --primary-foreground: ${primaryForegroundCss(mapping.primaryForeground)};`,
    `  --ring: ${brandVar(mapping.ring)};`,
    ...(highlightLine ? [highlightLine] : []),
    ...chartLines,
    "",
    "  /* Sidebar */",
    `  --sidebar: ${neutralVar(mapping.sidebar)};`,
    `  --sidebar-foreground: ${neutralVar(mapping.foreground)};`,
    `  --sidebar-primary: ${brandVar(mapping.primary)};`,
    `  --sidebar-primary-foreground: ${primaryForegroundCss(mapping.primaryForeground)};`,
    `  --sidebar-accent: ${neutralVar(mapping.sidebarAccent)};`,
    `  --sidebar-accent-foreground: ${neutralVar(mapping.sidebarAccentForeground)};`,
    `  --sidebar-border: ${neutralVar(mapping.sidebarBorder)};`,
    `  --sidebar-ring: ${brandVar(mapping.ring)};`,
  ]

  return `${selector} {\n${lines.join("\n")}\n}`
}

export function generateNeutralCss(config: ThemeConfig): string {
  const lines = Object.entries(config.neutral).map(
    ([step, color]) => `  --neutral-${step}: ${color};`,
  )
  return `/**
 * UI neutral ramp — surfaces, typography, borders.
 * Edit when experimenting; keep src/tokens/neutral.ts in sync.
 */
:root {
${lines.join("\n")}
}
`
}

export function generateBrandCss(config: ThemeConfig): string {
  const lines = Object.entries(config.brand).map(
    ([step, color]) => `  --brand-${step}: ${color};`,
  )
  const highlight = config.brandRoles.highlight
    ? `\n  --brand-highlight: ${config.brandRoles.highlight};`
    : ""
  return `/**
 * Brand ramp — generated from brandRoles.primary for utilities (bg-brand-*).
 * Designers edit roles in the theme builder, not individual steps.
 *
 * Neutrals: neutral.css · Semantics: brand-semantic.css
 */
:root {
${lines.join("\n")}${highlight}
}
${formatCommentedPresets("product")}
`
}

export function generateBrandPresetsCss(): string {
  return `/**
 * OPTIONAL: Runtime brand presets — swaps neutral + brand accent ramps on <html>
 * via data-brand. Default (product) uses neutral.css + brand.css with no attribute.
 */
${formatRuntimePresetsCss()}
`
}

export function generateBrandSemanticCss(config: ThemeConfig): string {
  return [
    "/**",
    " * Role-based semantic wiring — neutrals for structure, brand for primary only.",
    " * Charts use curated chartPalette hex values (not brand ramp steps).",
    " * Secondary/accent tokens stay neutral gray (premium product pattern).",
    " *",
    " * Comment out `@import \"./styles/brand-semantic.css\"` in index.css to revert",
    " * to the shadcn OKLCH preset in theme.css.",
    " */",
    mappingBlock(":root", config.semanticMapping.light, config),
    "",
    mappingBlock(".dark", config.semanticMapping.dark, config),
    "",
  ].join("\n")
}

function mixPct(base: number, scale: number): string {
  const value = Math.round(base * scale * 10) / 10
  return `${value}%`
}

function surfaceShadowRoot(
  style: ThemeConfig["surfaces"]["style"],
  _ringOpacity: number,
  shadowScale: number,
): string {
  const s = shadowScale
  switch (style) {
    case "flat":
      return `  --surface-shadow-1: none;
  --surface-shadow-2: none;
  --surface-shadow-3: none;
  --surface-shadow-4: none;`
    case "lifted":
      return `  --surface-shadow-1:
    inset 0 1px 0 rgb(255 255 255 / 0.75),
    0 2px 4px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent),
    0 8px 20px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 20px 48px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent);
  --surface-shadow-2:
    0 2px 6px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 8px 20px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent),
    0 24px 56px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent);
  --surface-shadow-3:
    0 4px 10px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent),
    0 12px 28px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 28px 64px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent);
  --surface-shadow-4:
    inset 0 1px 0 rgb(255 255 255 / 0.55),
    0 4px 12px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent),
    0 16px 40px color-mix(in srgb, var(--foreground) ${mixPct(8, s)}, transparent),
    0 32px 80px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent);`
    case "layered":
      return `  --surface-shadow-1:
    0 1px 2px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 2px 4px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent);
  --surface-shadow-2:
    0 2px 4px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent),
    0 4px 8px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent);
  --surface-shadow-3:
    0 4px 8px color-mix(in srgb, var(--foreground) ${mixPct(8, s)}, transparent),
    0 8px 16px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent);
  --surface-shadow-4:
    0 6px 12px color-mix(in srgb, var(--foreground) ${mixPct(9, s)}, transparent),
    0 12px 28px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent);`
    case "dramatic":
      return `  --surface-shadow-1:
    inset 0 1px 0 rgb(255 255 255 / 0.65),
    0 2px 6px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent),
    0 8px 24px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent),
    0 20px 56px color-mix(in srgb, var(--foreground) ${mixPct(5.5, s)}, transparent),
    0 36px 96px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent);
  --surface-shadow-2:
    0 2px 8px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 8px 24px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 24px 64px color-mix(in srgb, var(--foreground) ${mixPct(4.5, s)}, transparent);
  --surface-shadow-3:
    0 4px 12px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent),
    0 12px 32px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent),
    0 32px 80px color-mix(in srgb, var(--foreground) ${mixPct(5.5, s)}, transparent);
  --surface-shadow-4:
    inset 0 1px 0 rgb(255 255 255 / 0.45),
    0 4px 16px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent),
    0 16px 48px color-mix(in srgb, var(--foreground) ${mixPct(8, s)}, transparent),
    0 40px 96px color-mix(in srgb, var(--foreground) ${mixPct(7, s)}, transparent);`
    case "ambient":
    default:
      return `  --surface-shadow-1:
    inset 0 1px 0 rgb(255 255 255 / 0.7),
    0 1px 1px color-mix(in srgb, var(--foreground) ${mixPct(2.5, s)}, transparent),
    0 2px 6px color-mix(in srgb, var(--foreground) ${mixPct(2.5, s)}, transparent),
    0 12px 32px color-mix(in srgb, var(--foreground) ${mixPct(3.5, s)}, transparent),
    0 24px 64px color-mix(in srgb, var(--foreground) ${mixPct(2.5, s)}, transparent);
  --surface-shadow-2:
    0 1px 2px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent),
    0 4px 12px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent),
    0 16px 40px color-mix(in srgb, var(--foreground) ${mixPct(2.5, s)}, transparent);
  --surface-shadow-3:
    0 1px 2px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent),
    0 6px 16px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent),
    0 20px 48px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent);
  --surface-shadow-4:
    inset 0 1px 0 rgb(255 255 255 / 0.5),
    0 1px 2px color-mix(in srgb, var(--foreground) ${mixPct(4, s)}, transparent),
    0 8px 24px color-mix(in srgb, var(--foreground) ${mixPct(6, s)}, transparent),
    0 24px 64px color-mix(in srgb, var(--foreground) ${mixPct(5, s)}, transparent);`
  }
}

function surfaceShadowDark(style: ThemeConfig["surfaces"]["style"]): string {
  if (style === "flat") {
    return `  --surface-shadow-1: none;
  --surface-shadow-2: none;
  --surface-shadow-3: none;
  --surface-shadow-4: none;`
  }
  if (style === "layered") {
    return `  --surface-shadow-1:
    0 1px 2px rgb(0 0 0 / 0.24),
    0 2px 4px rgb(0 0 0 / 0.18);
  --surface-shadow-2:
    0 2px 4px rgb(0 0 0 / 0.26),
    0 4px 8px rgb(0 0 0 / 0.2);
  --surface-shadow-3:
    0 4px 8px rgb(0 0 0 / 0.28),
    0 8px 16px rgb(0 0 0 / 0.22);
  --surface-shadow-4:
    0 6px 12px rgb(0 0 0 / 0.3),
    0 12px 28px rgb(0 0 0 / 0.24);`
  }
  const intense = style === "dramatic" || style === "lifted"
  return `  --surface-shadow-1:
    0 1px 2px rgb(0 0 0 / ${intense ? 0.24 : 0.2}),
    0 4px 12px rgb(0 0 0 / ${intense ? 0.2 : 0.16}),
    0 16px 40px rgb(0 0 0 / ${intense ? 0.16 : 0.12});
  --surface-shadow-2:
    0 1px 2px rgb(0 0 0 / ${intense ? 0.26 : 0.22}),
    0 4px 12px rgb(0 0 0 / ${intense ? 0.22 : 0.18}),
    0 16px 40px rgb(0 0 0 / ${intense ? 0.18 : 0.14});
  --surface-shadow-3:
    0 1px 2px rgb(0 0 0 / ${intense ? 0.28 : 0.24}),
    0 6px 16px rgb(0 0 0 / ${intense ? 0.24 : 0.2}),
    0 20px 48px rgb(0 0 0 / ${intense ? 0.2 : 0.16});
  --surface-shadow-4:
    0 1px 2px rgb(0 0 0 / ${intense ? 0.3 : 0.26}),
    0 8px 24px rgb(0 0 0 / ${intense ? 0.26 : 0.22}),
    0 24px 64px rgb(0 0 0 / ${intense ? 0.22 : 0.18});`
}

function surfaceCardCss(config: ThemeConfig): string {
  const mode = config.personality.cardMode
  const style = config.surfaces.style

  switch (mode) {
    case "frameless":
      return `  box-shadow: none !important;
  border: none !important;
  background: transparent !important;`
    case "bordered":
      return "  box-shadow: 0 0 0 1px var(--surface-border) !important;"
    case "floating":
      return "  box-shadow: 0 0 0 1px var(--surface-border), var(--surface-shadow-2) !important;"
    case "elevated":
    default:
      return surfaceCardBoxShadow(style)
  }
}

function surfaceCardBoxShadow(style: ThemeConfig["surfaces"]["style"]): string {
  if (style === "flat") {
    return "  box-shadow: 0 0 0 1px var(--surface-border);"
  }
  return "  box-shadow: 0 0 0 1px var(--surface-border), var(--surface-shadow-1);"
}

export function generateSurfacesCss(config: ThemeConfig): string {
  const { style, ringOpacity, darkRingOpacity, shadowScale } = config.surfaces
  const ringSlots = surfaceRingSlots
    .map((slot) => `[data-slot="${slot}"]`)
    .join(",\n")

  return `/**
 * OPTIONAL: Premium elevation system (${style}).
 *
 * Comment out \`@import "./styles/surfaces.css"\` in index.css to revert to
 * default Tailwind shadows and shadcn ring-only cards.
 */
:root {
  --surface-border: color-mix(in srgb, var(--foreground) ${ringOpacity}%, transparent);
  --surface-ring: var(--surface-border);

${surfaceShadowRoot(style, ringOpacity, shadowScale)}
}

.dark {
  --surface-border: color-mix(in srgb, var(--foreground) ${darkRingOpacity}%, transparent);
  --surface-ring: var(--surface-border);

${surfaceShadowDark(style)}
}

@theme inline {
  --shadow-sm: var(--surface-shadow-2);
  --shadow-md: var(--surface-shadow-2);
  --shadow-lg: var(--surface-shadow-3);
  --shadow-xl: var(--surface-shadow-4);
}

[data-slot="card"] {
${surfaceCardCss(config)}
}

[data-slot="dialog-content"],
[data-slot="alert-dialog-content"] {
  box-shadow: 0 0 0 1px var(--surface-border), var(--surface-shadow-4);
}

${ringSlots} {
  --tw-ring-color: var(--surface-ring);
}
`
}

export function generateOverlaysCss(config: ThemeConfig): string {
  const { style, opacity, blur } = config.overlays
  const darkOpacity = Math.min(100, opacity + 10)
  const slots = overlayDataSlots.map((slot) => `  [data-slot="${slot}"]`).join(",\n")

  return `/**
 * OPTIONAL: Themed modal overlays — ${style} (${opacity}% / ${blur}px blur).
 *
 * Comment out \`@import "./styles/overlays.css"\` in index.css to revert to
 * shadcn default \`bg-black/10\` overlays in components.
 */
:root {
  --overlay-background: color-mix(in srgb, var(--foreground) ${opacity}%, transparent);
  --overlay-blur: ${blur}px;
}

.dark {
  --overlay-background: color-mix(in srgb, var(--foreground) ${darkOpacity}%, transparent);
}

@layer utilities {
${slots} {
    background-color: var(--overlay-background) !important;
    -webkit-backdrop-filter: blur(var(--overlay-blur));
    backdrop-filter: blur(var(--overlay-blur));
  }

  /* Nested settings confirms: stronger dim above parent dialog (z-50) */
  [data-slot="settings-nested-alert-overlay"] {
    background-color: color-mix(
      in srgb,
      var(--foreground) 38%,
      transparent
    ) !important;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
}
`
}

export function generateMenusCss(config: ThemeConfig): string {
  const m = config.menus
  return `/**
 * OPTIONAL: Comfortable spacing for menu, command, and list items.
 *
 * Comment out \`@import "./styles/menus.css"\` in index.css to revert to
 * shadcn defaults (px-1.5 py-1).
 *
 * ─── Knobs — edit for tighter or looser menus ───
 */
:root {
  --menu-item-px: ${m.itemPx};
  --menu-item-py: ${m.itemPy};
  --menu-item-pr-check: ${m.itemPrCheck};
  --menu-item-inset-pl: ${m.itemInsetPl};
  --menu-list-padding: ${m.listPadding};
  --menu-item-gap: ${m.itemGap};
  --menu-content-min-width: ${m.contentMinWidth};
  --menu-select-min-width: ${m.selectMinWidth};
}

@layer utilities {
  [data-slot="dropdown-menu-item"],
  [data-slot="dropdown-menu-sub-trigger"],
  [data-slot="context-menu-item"],
  [data-slot="context-menu-sub-trigger"],
  [data-slot="menubar-item"],
  [data-slot="menubar-sub-trigger"],
  [data-slot="command-item"] {
    padding-block: var(--menu-item-py) !important;
    padding-inline: var(--menu-item-px) !important;
    gap: var(--menu-item-gap) !important;
    white-space: nowrap !important;
  }

  [data-slot="dropdown-menu-item"][data-inset],
  [data-slot="dropdown-menu-sub-trigger"][data-inset],
  [data-slot="context-menu-item"][data-inset],
  [data-slot="context-menu-sub-trigger"][data-inset],
  [data-slot="menubar-item"][data-inset],
  [data-slot="menubar-sub-trigger"][data-inset] {
    padding-left: var(--menu-item-inset-pl) !important;
  }

  [data-slot="dropdown-menu-checkbox-item"],
  [data-slot="dropdown-menu-radio-item"],
  [data-slot="context-menu-checkbox-item"],
  [data-slot="context-menu-radio-item"],
  [data-slot="menubar-checkbox-item"],
  [data-slot="menubar-radio-item"],
  [data-slot="combobox-item"],
  [data-slot="select-item"] {
    padding-block: var(--menu-item-py) !important;
    padding-left: var(--menu-item-px) !important;
    padding-right: var(--menu-item-pr-check) !important;
    gap: var(--menu-item-gap) !important;
    white-space: nowrap !important;
  }

  [data-slot="dropdown-menu-checkbox-item"][data-inset],
  [data-slot="dropdown-menu-radio-item"][data-inset],
  [data-slot="context-menu-checkbox-item"][data-inset],
  [data-slot="context-menu-radio-item"][data-inset],
  [data-slot="menubar-checkbox-item"][data-inset],
  [data-slot="menubar-radio-item"][data-inset],
  [data-slot="select-item"][data-inset] {
    padding-left: var(--menu-item-inset-pl) !important;
  }

  [data-slot="dropdown-menu-content"],
  [data-slot="dropdown-menu-sub-content"],
  [data-slot="context-menu-content"],
  [data-slot="context-menu-sub-content"],
  [data-slot="menubar-content"],
  [data-slot="menubar-sub-content"],
  [data-slot="command"],
  [data-slot="command-group"],
  [data-slot="combobox-list"],
  [data-slot="select-group"] {
    padding: var(--menu-list-padding) !important;
  }

  /* Grow to fit labels — at least as wide as trigger (anchor) */
  [data-slot="dropdown-menu-content"] {
    width: auto !important;
    min-width: max(var(--anchor-width), var(--menu-content-min-width)) !important;
  }

  [data-slot="select-content"],
  [data-slot="combobox-content"] {
    width: auto !important;
    min-width: max(var(--anchor-width), var(--menu-select-min-width)) !important;
  }
}
`
}

export function generateDensityCss(config: ThemeConfig): string {
  const d = config.density
  return `/**
 * OPTIONAL: Control density — layout padding and primary control heights.
 *
 * Comment out \`@import "./styles/density.css"\` in index.css to revert to
 * shadcn default component sizes.
 */
:root {
  --density-control-height-xs: ${d.controlHeightXs};
  --density-control-height-sm: ${d.controlHeightSm};
  --density-control-height: ${d.controlHeight};
  --density-control-height-lg: ${d.controlHeightLg};
  --density-control-px: ${d.controlPx};
  --density-control-py: ${d.controlPy};
  --density-control-text: ${d.controlText};
  --density-control-gap: ${d.controlGap};
  --density-icon-size: ${d.iconSize};
  --density-card-spacing: ${d.cardSpacing};
  --density-card-spacing-sm: ${d.cardSpacingSm};
  --density-alert-px: ${d.alertPx};
  --density-alert-py: ${d.alertPy};
  --density-table-row: ${d.tableRowHeight};
  --density-table-cell-px: ${d.tableCellPx};
  --density-textarea-min: ${d.textareaMinHeight};
  --density-field-gap: ${d.fieldGap};
  --density-field-group-gap: ${d.fieldGroupGap};
  --density-accordion-py: ${d.accordionPy};
}

@layer utilities {
  [data-slot="button"][data-size="default"],
  [data-slot="button"]:not([data-size]) {
    height: var(--density-control-height) !important;
    min-height: var(--density-control-height) !important;
  }

  [data-slot="button"][data-size="xs"] {
    height: var(--density-control-height-xs) !important;
    min-height: var(--density-control-height-xs) !important;
  }

  [data-slot="button"][data-size="sm"] {
    height: var(--density-control-height-sm) !important;
    min-height: var(--density-control-height-sm) !important;
  }

  [data-slot="button"][data-size="lg"] {
    height: var(--density-control-height-lg) !important;
    min-height: var(--density-control-height-lg) !important;
  }

  [data-slot="button"][data-size="icon"] {
    width: var(--density-control-height) !important;
    height: var(--density-control-height) !important;
    min-width: var(--density-control-height) !important;
    min-height: var(--density-control-height) !important;
  }

  [data-slot="button"][data-size="icon-xs"] {
    width: var(--density-control-height-xs) !important;
    height: var(--density-control-height-xs) !important;
    min-width: var(--density-control-height-xs) !important;
    min-height: var(--density-control-height-xs) !important;
  }

  [data-slot="button"][data-size="icon-sm"] {
    width: var(--density-control-height-sm) !important;
    height: var(--density-control-height-sm) !important;
    min-width: var(--density-control-height-sm) !important;
    min-height: var(--density-control-height-sm) !important;
  }

  [data-slot="button"][data-size="icon-lg"] {
    width: var(--density-control-height-lg) !important;
    height: var(--density-control-height-lg) !important;
    min-width: var(--density-control-height-lg) !important;
    min-height: var(--density-control-height-lg) !important;
  }

  [data-slot="input"] {
    height: var(--density-control-height) !important;
  }

  [data-slot="textarea"] {
    min-height: var(--density-textarea-min) !important;
  }

  [data-slot="select-trigger"][data-size="default"],
  [data-slot="select-trigger"]:not([data-size]) {
    height: var(--density-control-height) !important;
  }

  [data-slot="select-trigger"][data-size="sm"] {
    height: var(--density-control-height-sm) !important;
  }

  [data-slot="card"] {
    --card-spacing: var(--density-card-spacing) !important;
  }

  [data-slot="card"][data-size="sm"] {
    --card-spacing: var(--density-card-spacing-sm) !important;
  }

  [data-slot="alert"] {
    padding: var(--density-alert-py) var(--density-alert-px) !important;
  }

  [data-slot="table-head"] {
    height: var(--density-table-row) !important;
    padding-inline: var(--density-table-cell-px) !important;
  }

  [data-slot="table-cell"] {
    padding: var(--density-table-cell-px) !important;
  }

  [data-slot="field-group"] {
    gap: var(--density-field-group-gap) !important;
  }

  [data-slot="field"] {
    gap: var(--density-field-gap) !important;
  }

  [data-slot="accordion-trigger"] {
    padding-block: var(--density-accordion-py) !important;
  }

  [data-slot="accordion-content"] {
    padding-bottom: var(--density-field-gap) !important;
  }

  [data-slot="dialog-content"],
  [data-slot="alert-dialog-content"] {
    padding: var(--density-card-spacing) !important;
    gap: var(--density-field-group-gap) !important;
  }

  [data-slot="sheet-content"] {
    padding: var(--density-card-spacing) !important;
    gap: var(--density-field-group-gap) !important;
  }

  [data-slot="popover-content"] {
    padding: var(--density-card-spacing-sm) !important;
    gap: var(--density-field-gap) !important;
  }

  [data-slot="tabs-list"] {
    height: var(--density-control-height) !important;
  }

  [data-slot="tabs-trigger"] {
    height: calc(var(--density-control-height) - 0.5rem) !important;
  }

  [data-slot="tabs-content"] {
    padding-top: var(--density-field-gap) !important;
  }

  [data-slot="field-set"] {
    gap: var(--density-field-group-gap) !important;
  }

  [data-slot="breadcrumb-list"] {
    gap: var(--density-field-gap) !important;
  }

  [data-slot="native-select"],
  [data-slot="combobox-input"],
  [data-slot="input-group"] {
    height: var(--density-control-height) !important;
  }

  [data-slot="input-group"] [data-slot="input"],
  [data-slot="input-group"] [data-slot="button"] {
    height: 100% !important;
  }
}
`
}

export function generateTypographyCss(config: ThemeConfig): string {
  const t = config.typeScale
  return `/**
 * OPTIONAL: Typography — heading font, type scale, icon stroke.
 *
 * Comment out \`@import "./styles/typography.css"\` and type-scale in index.css to revert.
 */
:root {
  --type-root-size: ${t.rootSize};
  --type-heading-tracking: ${t.headingTracking};
  --type-body-leading: ${t.bodyLeading};
  --type-heading-leading: ${t.headingLeading};
  --type-icon-stroke: ${t.iconStrokeWidth};
  --type-display-1: ${t.display1};
  --type-display-2: ${t.display2};
  --type-display-3: ${t.display3};
}

@layer base {
  html {
    font-size: var(--type-root-size);
  }

  body {
    line-height: var(--type-body-leading);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .font-heading {
    @apply font-heading;
    letter-spacing: var(--type-heading-tracking);
    line-height: var(--type-heading-leading);
  }
}

@layer utilities {
  [data-slot] svg:not([class*="size-"]) {
    stroke-width: var(--type-icon-stroke);
  }

  .font-heading.text-2xl {
    font-size: var(--type-display-1) !important;
    line-height: var(--type-heading-leading);
  }

  .font-heading.text-xl {
    font-size: var(--type-display-2) !important;
    line-height: var(--type-heading-leading);
  }

  .font-heading.text-lg {
    font-size: var(--type-display-3) !important;
    line-height: var(--type-heading-leading);
  }
}
`
}

export function generatePersonalityCss(config: ThemeConfig): string {
  const { buttonPersonality } = config.personality
  const buttonRules: string[] = []

  if (buttonPersonality === "editorial") {
    buttonRules.push(`
  [data-slot="button"][data-size="default"],
  [data-slot="button"]:not([data-size]) {
    border-radius: 0 !important;
    min-height: 3rem !important;
    height: auto !important;
    padding-inline: 1.5rem !important;
    font-size: 0.6875rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    gap: 0.5rem !important;
  }

  [data-slot="button"][data-size="default"]:hover,
  [data-slot="button"]:not([data-size]):hover {
    background: var(--foreground) !important;
    color: var(--background) !important;
  }

  [data-slot="button"][data-size="lg"] {
    min-height: 3.5rem !important;
    padding-inline: 1.75rem !important;
  }`)
  }

  if (buttonPersonality === "utility") {
    buttonRules.push(`
  [data-slot="button"][data-size="default"],
  [data-slot="button"]:not([data-size]) {
    font-size: 0.8125rem !important;
    font-weight: 500 !important;
  }`)
  }

  return `/**
 * OPTIONAL: Component personality — card surface mode and button character.
 */
@layer utilities {
  html[data-card-mode="frameless"] [data-slot="card"] {
    box-shadow: none !important;
    border: none !important;
    background: transparent !important;
    --tw-ring-shadow: 0 0 #0000 !important;
  }

  html[data-card-mode="bordered"] [data-slot="card"] {
    box-shadow: 0 0 0 1px var(--surface-border) !important;
  }

  html[data-card-mode="floating"] [data-slot="card"] {
    box-shadow: 0 0 0 1px var(--surface-border), var(--surface-shadow-2) !important;
  }
${buttonRules.join("\n")}
}
`
}

function scaledShadowPercent(base: number, scale: number): number {
  return Math.round(Math.min(100, Math.max(0, base * scale)))
}

const FOCUS_TARGETS = `[data-slot="input"]:focus-visible:not(:disabled),
  [data-slot="textarea"]:focus-visible:not(:disabled),
  [data-slot="select-trigger"]:focus-visible,
  [data-slot="native-select"]:focus-visible,
  [data-slot="combobox-chips"]:focus-within,
  [data-slot="input-group"]:has([data-slot="input-group-control"]:focus-visible),
  [data-slot="input-otp-slot"][data-active="true"]`

const FOCUS_ERROR_TARGETS = `[data-slot="input"][aria-invalid="true"]:focus-visible:not(:disabled),
  [data-slot="textarea"][aria-invalid="true"]:focus-visible:not(:disabled),
  [data-slot="select-trigger"][aria-invalid="true"]:focus-visible,
  [data-slot="native-select"][aria-invalid="true"]:focus-visible,
  [data-slot="combobox-chips"][aria-invalid="true"]:focus-within,
  [data-slot="input-group"][aria-invalid="true"]:has(
      [data-slot="input-group-control"]:focus-visible
    ),
  [data-slot="input-otp"][aria-invalid="true"]
    [data-slot="input-otp-slot"][data-active="true"]`

const FOCUS_INVALID_IDLE = `[data-slot="input"][aria-invalid="true"]:not(:focus-visible):not(:disabled),
  [data-slot="textarea"][aria-invalid="true"]:not(:focus-visible):not(:disabled),
  [data-slot="select-trigger"][aria-invalid="true"]:not(:focus-visible),
  [data-slot="native-select"][aria-invalid="true"]:not(:focus-visible),
  [data-slot="combobox-chips"][aria-invalid="true"]:not(:focus-within),
  [data-slot="input-group"][aria-invalid="true"]:not(
      :has([data-slot="input-group-control"]:focus-visible)
    )`

function focusRootVars(config: ThemeConfig): string {
  const {
    style,
    lightBorderMix,
    darkBorderMix,
    shadowScale,
    errorBorderMix,
    errorShadowScale,
  } = config.focus

  const s1 = scaledShadowPercent(3, shadowScale)
  const s2 = scaledShadowPercent(4, shadowScale)
  const s3 = scaledShadowPercent(3, shadowScale)
  const es1 = scaledShadowPercent(8, errorShadowScale)
  const es2 = scaledShadowPercent(10, errorShadowScale)
  const des1 = scaledShadowPercent(15, errorShadowScale)
  const des2 = scaledShadowPercent(12, errorShadowScale)

  switch (style) {
    case "flat":
      return `:root {
  --focus-border: color-mix(in srgb, var(--foreground) ${lightBorderMix}%, var(--border));
  --focus-shadow: none;
  --focus-error-border: color-mix(in srgb, var(--destructive) ${errorBorderMix}%, var(--border));
  --focus-error-shadow: none;
}

.dark {
  --focus-border: color-mix(in srgb, var(--foreground) ${darkBorderMix}%, var(--border));
}`
    case "brand-glow":
      return `:root {
  --focus-border: color-mix(in srgb, var(--primary) 55%, var(--border));
  --focus-shadow:
    0 0 0 3px color-mix(in srgb, var(--primary) 16%, transparent),
    0 2px 10px color-mix(in srgb, var(--primary) 14%, transparent);
  --focus-error-border: color-mix(in srgb, var(--destructive) ${errorBorderMix}%, var(--border));
  --focus-error-shadow:
    0 0 0 3px color-mix(in srgb, var(--destructive) 14%, transparent),
    0 2px 10px color-mix(in srgb, var(--destructive) 12%, transparent);
}

.dark {
  --focus-border: color-mix(in srgb, var(--primary) 65%, var(--border));
  --focus-shadow:
    0 0 0 3px color-mix(in srgb, var(--primary) 22%, transparent),
    0 2px 12px color-mix(in srgb, var(--primary) 18%, transparent);
}`
    case "inset":
      return `:root {
  --focus-border: color-mix(in srgb, var(--foreground) ${lightBorderMix}%, var(--border));
  --focus-shadow:
    inset 0 1px 3px color-mix(in srgb, var(--foreground) 10%, transparent),
    inset 0 0 0 1px color-mix(in srgb, var(--foreground) 6%, transparent);
  --focus-error-border: color-mix(in srgb, var(--destructive) ${errorBorderMix}%, var(--border));
  --focus-error-shadow:
    inset 0 1px 3px color-mix(in srgb, var(--destructive) 12%, transparent),
    inset 0 0 0 1px color-mix(in srgb, var(--destructive) 8%, transparent);
}

.dark {
  --focus-border: color-mix(in srgb, var(--foreground) ${darkBorderMix}%, var(--border));
  --focus-shadow:
    inset 0 2px 4px rgb(0 0 0 / 0.22),
    inset 0 0 0 1px color-mix(in srgb, var(--foreground) 10%, transparent);
  --focus-error-shadow:
    inset 0 2px 4px color-mix(in srgb, var(--destructive) 18%, transparent),
    inset 0 0 0 1px color-mix(in srgb, var(--destructive) 12%, transparent);
}`
    case "underline":
      return `:root {
  --focus-border: color-mix(in srgb, var(--foreground) ${lightBorderMix}%, var(--primary));
  --focus-shadow: none;
  --focus-error-border: var(--destructive);
  --focus-error-shadow: none;
}

.dark {
  --focus-border: color-mix(in srgb, var(--foreground) ${darkBorderMix}%, var(--primary));
}`
    case "border-lift":
    default:
      return `:root {
  --focus-border: color-mix(in srgb, var(--foreground) ${lightBorderMix}%, var(--border));
  --focus-shadow:
    0 1px 1px color-mix(in srgb, var(--foreground) ${s1}%, transparent),
    0 2px 8px color-mix(in srgb, var(--foreground) ${s2}%, transparent),
    0 8px 20px color-mix(in srgb, var(--foreground) ${s3}%, transparent);
  --focus-error-border: color-mix(in srgb, var(--destructive) ${errorBorderMix}%, var(--border));
  --focus-error-shadow:
    0 1px 1px color-mix(in srgb, var(--destructive) ${es1}%, transparent),
    0 2px 8px color-mix(in srgb, var(--destructive) ${es2}%, transparent);
}

.dark {
  --focus-border: color-mix(in srgb, var(--foreground) ${darkBorderMix}%, var(--border));
  --focus-shadow:
    0 1px 2px rgb(0 0 0 / 0.18),
    0 2px 8px rgb(0 0 0 / 0.14),
    0 8px 20px rgb(0 0 0 / 0.1);
  --focus-error-shadow:
    0 1px 2px color-mix(in srgb, var(--destructive) ${des1}%, transparent),
    0 2px 8px color-mix(in srgb, var(--destructive) ${des2}%, transparent);
}`
  }
}

function focusUtilityRules(style: ThemeConfig["focus"]["style"]): string {
  if (style === "underline") {
    return `  ${FOCUS_TARGETS} {
    border-color: var(--border) !important;
    border-bottom-color: var(--focus-border) !important;
    border-bottom-width: 2px !important;
    box-shadow: none !important;
    --tw-ring-shadow: 0 0 #0000 !important;
    --tw-ring-width: 0px !important;
  }

  ${FOCUS_ERROR_TARGETS} {
    border-color: var(--border) !important;
    border-bottom-color: var(--focus-error-border) !important;
    border-bottom-width: 2px !important;
    box-shadow: none !important;
  }`
  }

  return `  ${FOCUS_TARGETS} {
    border-color: var(--focus-border) !important;
    box-shadow: var(--focus-shadow) !important;
    --tw-ring-shadow: 0 0 #0000 !important;
    --tw-ring-width: 0px !important;
  }

  ${FOCUS_ERROR_TARGETS} {
    border-color: var(--focus-error-border) !important;
    box-shadow: var(--focus-error-shadow) !important;
  }`
}

export function generateFocusCss(config: ThemeConfig): string {
  const { style } = config.focus

  return `/**
 * OPTIONAL: Custom focus for form controls — ${style}.
 *
 * Comment out \`@import "./styles/focus.css"\` in index.css to revert to
 * shadcn ring-3 focus rings.
 */
${focusRootVars(config)}

@layer utilities {
${focusUtilityRules(style)}

  ${FOCUS_INVALID_IDLE} {
    border-color: var(--destructive) !important;
    box-shadow: none !important;
    --tw-ring-shadow: 0 0 #0000 !important;
    --tw-ring-width: 0px !important;
  }
}
`
}

function fontFamily(config: ThemeConfig, role: "sans" | "heading" | "mono"): string {
  const font = getFontById(config.fonts[role])
  return font?.family ?? "'Figtree Variable', sans-serif"
}

export function generateFontRuntimeCss(config: ThemeConfig): string {
  const sans = fontFamily(config, "sans")
  const heading = fontFamily(config, "heading")
  const mono = fontFamily(config, "mono")

  return `/**
 * Live font wiring — body, headings, and mono elements.
 */
@layer base {
  html {
    font-family: ${sans};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .font-heading {
    font-family: ${heading};
  }

  code,
  kbd,
  pre,
  samp,
  .font-mono {
    font-family: ${mono};
  }
}
`
}

function fontImports(config: ThemeConfig): string[] {
  const packages = new Set<string>()
  for (const role of ["sans", "heading", "mono"] as const) {
    const font = getFontById(config.fonts[role])
    if (font) packages.add(font.packageName)
  }
  return [...packages].map((pkg) => `@import "${pkg}";`)
}

export function generateThemeCss(config: ThemeConfig): string {
  const body = themeCssSeed.replace(
    /--radius:\s*[^;]+;/,
    `--radius: ${config.radius};`,
  )
  return `/**
 * shadcn preset theme — default semantic tokens (OKLCH).
 * Used when brand-semantic.css is commented out in index.css.
 */
${body}`
}

export function generateIndexCss(config: ThemeConfig): string {
  const imports = [
    '@import "tailwindcss";',
    '@import "tw-animate-css";',
    '@import "shadcn/tailwind.css";',
    '@import "./styles/theme.css";',
    ...fontImports(config),
  ]

  const sans = fontFamily(config, "sans")
  const heading = fontFamily(config, "heading")
  const mono = fontFamily(config, "mono")

  return `${imports.join("\n")}

@custom-variant dark (&:is(.dark *));

:root {
  --font-family-sans: ${sans};
  --font-family-heading: ${heading};
  --font-family-mono: ${mono};
}

@theme inline {
    --font-sans: var(--font-family-sans);
    --font-heading: var(--font-family-heading);
    --font-mono: var(--font-family-mono);
    --color-sidebar-ring: var(--sidebar-ring);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar: var(--sidebar);
    --color-chart-5: var(--chart-5);
    --color-chart-4: var(--chart-4);
    --color-chart-3: var(--chart-3);
    --color-chart-2: var(--chart-2);
    --color-chart-1: var(--chart-1);
    --color-ring: var(--ring);
    --color-input: var(--input);
    --color-border: var(--border);
    --color-destructive: var(--destructive);
    --color-accent-foreground: var(--accent-foreground);
    --color-accent: var(--accent);
    --color-muted-foreground: var(--muted-foreground);
    --color-muted: var(--muted);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-secondary: var(--secondary);
    --color-primary-foreground: var(--primary-foreground);
    --color-primary: var(--primary);
    --color-popover-foreground: var(--popover-foreground);
    --color-popover: var(--popover);
    --color-card-foreground: var(--card-foreground);
    --color-card: var(--card);
    --color-foreground: var(--foreground);
    --color-background: var(--background);
    --color-neutral-50: var(--neutral-50);
    --color-neutral-100: var(--neutral-100);
    --color-neutral-200: var(--neutral-200);
    --color-neutral-300: var(--neutral-300);
    --color-neutral-400: var(--neutral-400);
    --color-neutral-500: var(--neutral-500);
    --color-neutral-600: var(--neutral-600);
    --color-neutral-700: var(--neutral-700);
    --color-neutral-800: var(--neutral-800);
    --color-neutral-900: var(--neutral-900);
    --color-neutral-950: var(--neutral-950);
    --color-brand-50: var(--brand-50);
    --color-brand-100: var(--brand-100);
    --color-brand-200: var(--brand-200);
    --color-brand-300: var(--brand-300);
    --color-brand-400: var(--brand-400);
    --color-brand-500: var(--brand-500);
    --color-brand-600: var(--brand-600);
    --color-brand-700: var(--brand-700);
    --color-brand-800: var(--brand-800);
    --color-brand-900: var(--brand-900);
    --color-brand-950: var(--brand-950);
    --color-brand-highlight: var(--brand-highlight, var(--brand-500));
    --radius-sm: calc(var(--radius) * 0.6);
    --radius-md: calc(var(--radius) * 0.8);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) * 1.4);
    --radius-2xl: calc(var(--radius) * 1.8);
    --radius-3xl: calc(var(--radius) * 2.2);
    --radius-4xl: calc(var(--radius) * 2.6);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
  html { @apply font-sans; }
  code, kbd, pre, samp { @apply font-mono; }
}
`
}

export function generateQuickStartMd(config: ThemeConfig): string {
  const fontPackages = new Set<string>()
  for (const role of ["sans", "heading", "mono"] as const) {
    const font = getFontById(config.fonts[role])
    if (font) fontPackages.add(font.packageName)
  }

  const fontInstall =
    fontPackages.size > 0
      ? `\nnpm i ${[...fontPackages].join(" ")}\n`
      : ""

  return `# Theme Quick Start

## 1. Install font packages (if needed)
${fontInstall}
## 2. Copy generated files

Create these two files in your Vite + shadcn project:

- \`src/index.css\` — Tailwind entry + \`@theme\` wiring
- \`src/styles/theme.css\` — neutrals, brand, semantics, and optional override layers

## 3. Verify imports

\`src/index.css\` should import your theme bundle:

\`@import "./styles/theme.css";\`

## 4. Brand presets (optional)

If your export includes runtime presets, set \`data-brand\` on \`<html>\` to swap themes:

\`forest\` · \`ocean\` · \`warm\` · \`indigo\` · \`monochrome\`

Default product theme needs no attribute.

## 5. No component edits required

All customization is via CSS variables in \`theme.css\`. Do not modify \`components/ui/*\`.
`
}

function bundleSection(title: string, css: string): string {
  return `/* ─── ${title} ─── */\n${css.trim()}`
}

export function generateThemeBundleCss(config: ThemeConfig): string {
  const sections = [
    bundleSection("Neutral ramp", generateNeutralCss(config)),
    bundleSection("Brand ramp", generateBrandCss(config)),
  ]

  if (config.layers.brandSemantic) {
    sections.push(bundleSection("Semantic tokens", generateBrandSemanticCss(config)))
  } else {
    sections.push(bundleSection("Preset semantics", generateThemeCss(config)))
  }

  if (config.layers.surfaces) {
    sections.push(bundleSection("Surfaces", generateSurfacesCss(config)))
    sections.push(bundleSection("Personality", generatePersonalityCss(config)))
  }
  if (config.layers.menus) {
    sections.push(bundleSection("Menus", generateMenusCss(config)))
  }
  if (config.layers.focus) {
    sections.push(bundleSection("Focus", generateFocusCss(config)))
  }
  if (config.layers.density) {
    sections.push(bundleSection("Density", generateDensityCss(config)))
  }
  if (config.layers.overlays) {
    sections.push(bundleSection("Overlays", generateOverlaysCss(config)))
  }
  if (config.layers.typography) {
    sections.push(bundleSection("Typography", generateTypographyCss(config)))
  }
  if (config.layers.brandPresets) {
    sections.push(bundleSection("Brand presets", generateBrandPresetsCss()))
  }

  return `/**
 * Theme bundle — neutrals, brand, semantics, and optional layers.
 * Imported from src/index.css. Edit sections below to tune your design system.
 */
${sections.join("\n\n")}
`
}

export type GeneratedThemeFiles = {
  index: string
  theme: string
  quickStart: string
}

export function generateAll(config: ThemeConfig): GeneratedThemeFiles {
  return {
    index: generateIndexCss(config),
    theme: generateThemeBundleCss(config),
    quickStart: generateQuickStartMd(config),
  }
}
