/**
 * Surface elevation tokens — used by Storybook docs.
 * Values live in src/styles/surfaces.css (optional import in index.css).
 */
export const surfaceElevation = [
  {
    level: 1,
    name: "Raised",
    description: "Cards — hairline ring + soft ambient halo",
    slots: ["card"],
    shadowVar: "--surface-shadow-1",
    tailwindClass: undefined,
  },
  {
    level: 2,
    name: "Popover",
    description: "Menus, popovers, selects — shadow-md tier",
    slots: [
      "popover-content",
      "select-content",
      "combobox-content",
      "hover-card-content",
      "dropdown-menu-content",
      "context-menu-content",
      "menubar-content",
    ],
    shadowVar: "--surface-shadow-2",
    tailwindClass: "shadow-md",
  },
  {
    level: 3,
    name: "Floating",
    description: "Submenus, toast — shadow-lg tier",
    slots: [
      "dropdown-menu-sub-content",
      "context-menu-sub-content",
      "menubar-sub-content",
      "toast",
    ],
    shadowVar: "--surface-shadow-3",
    tailwindClass: "shadow-lg",
  },
  {
    level: 4,
    name: "Modal",
    description: "Dialogs and sheets — broad ambient depth",
    slots: ["dialog-content", "alert-dialog-content", "sheet-content"],
    shadowVar: "--surface-shadow-4",
    tailwindClass: "shadow-xl",
  },
] as const

export const surfaceRingVar = "--surface-ring" as const

export const surfaceRingSlots = [
  "card",
  "dialog-content",
  "alert-dialog-content",
  "sheet-content",
  "popover-content",
  "hover-card-content",
  "select-content",
  "combobox-content",
  "dropdown-menu-content",
  "dropdown-menu-sub-content",
  "context-menu-content",
  "context-menu-sub-content",
  "menubar-content",
  "menubar-sub-content",
  "toast",
] as const

export type SurfaceStyle =
  | "flat"
  | "ambient"
  | "lifted"
  | "layered"
  | "dramatic"

export const surfaceDefaults = {
  style: "ambient" as SurfaceStyle,
  ringOpacity: 10,
  darkRingOpacity: 12,
  shadowScale: 1,
} as const
