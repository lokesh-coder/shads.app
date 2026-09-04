/**
 * Menu spacing tokens — values live in src/styles/menus.css (optional import).
 */
export const menuSpacing = {
  itemPx: "--menu-item-px",
  itemPy: "--menu-item-py",
  itemPrCheck: "--menu-item-pr-check",
  itemInsetPl: "--menu-item-inset-pl",
  listPadding: "--menu-list-padding",
  itemGap: "--menu-item-gap",
  contentMinWidth: "--menu-content-min-width",
  selectMinWidth: "--menu-select-min-width",
} as const

export const menuSpacingDefaults = {
  itemPx: "0.625rem",
  itemPy: "0.375rem",
  itemPrCheck: "2rem",
  itemInsetPl: "1.75rem",
  listPadding: "0.375rem",
  itemGap: "0.5rem",
  contentMinWidth: "8rem",
  selectMinWidth: "9rem",
} as const
