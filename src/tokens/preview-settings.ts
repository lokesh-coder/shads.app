/**
 * Gallery preview layout — preset-controlled; cards or single-column only.
 */
export type PreviewGalleryMode = "cards" | "single"

export type PreviewSettings = {
  mode: PreviewGalleryMode
  /** Full Tailwind column classes — must be static strings for JIT. */
  columnsClass: string
  gap: "tight" | "default" | "airy"
  canvas: "muted" | "paper" | "flat"
  showTileLabels: boolean
  /** When set, matching category showcases are sorted to the front. */
  featuredCategories?: string[]
}

export const defaultPreviewSettings: PreviewSettings = {
  mode: "cards",
  columnsClass: "columns-2 md:columns-3 xl:columns-4",
  gap: "default",
  canvas: "muted",
  showTileLabels: false,
}

const cols = {
  balanced: "columns-2 md:columns-3 xl:columns-4",
  dense: "columns-2 md:columns-2 xl:columns-3",
  narrow: "columns-1 md:columns-2 xl:columns-2",
  wide: "columns-1 md:columns-2 xl:columns-2",
  single: "columns-1",
  catalog: "columns-2 md:columns-3 xl:columns-3",
} as const

/** Default gallery layout per global style preset. */
export const previewByPreset = {
  workspace: {
    mode: "cards",
    columnsClass: cols.balanced,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
  },
  brief: {
    mode: "cards",
    columnsClass: cols.wide,
    gap: "default",
    canvas: "flat",
    showTileLabels: false,
    featuredCategories: ["Editorial"],
  },
  guild: {
    mode: "cards",
    columnsClass: cols.balanced,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
  },
  operator: {
    mode: "cards",
    columnsClass: cols.dense,
    gap: "tight",
    canvas: "flat",
    showTileLabels: true,
    featuredCategories: ["Dashboard"],
  },
  metrics: {
    mode: "cards",
    columnsClass: cols.dense,
    gap: "tight",
    canvas: "flat",
    showTileLabels: true,
    featuredCategories: ["Dashboard"],
  },
  dispatch: {
    mode: "cards",
    columnsClass: cols.dense,
    gap: "tight",
    canvas: "flat",
    showTileLabels: true,
    featuredCategories: ["Dashboard", "Developer"],
  },
  ledger: {
    mode: "cards",
    columnsClass: cols.dense,
    gap: "tight",
    canvas: "flat",
    showTileLabels: true,
    featuredCategories: ["Dashboard", "Commerce"],
  },
  canvas: {
    mode: "cards",
    columnsClass: cols.balanced,
    gap: "default",
    canvas: "flat",
    showTileLabels: false,
    featuredCategories: ["Developer", "Auth"],
  },
  workbench: {
    mode: "cards",
    columnsClass: cols.narrow,
    gap: "tight",
    canvas: "flat",
    showTileLabels: true,
    featuredCategories: ["Developer"],
  },
  launch: {
    mode: "cards",
    columnsClass: cols.wide,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
  },
  reading: {
    mode: "cards",
    columnsClass: cols.wide,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
    featuredCategories: ["Editorial"],
  },
  atelier: {
    mode: "cards",
    columnsClass: cols.catalog,
    gap: "airy",
    canvas: "paper",
    showTileLabels: false,
    featuredCategories: ["Editorial", "Commerce"],
  },
  storefront: {
    mode: "cards",
    columnsClass: cols.catalog,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
    featuredCategories: ["Commerce"],
  },
  lookbook: {
    mode: "cards",
    columnsClass: cols.catalog,
    gap: "airy",
    canvas: "paper",
    showTileLabels: false,
    featuredCategories: ["Commerce"],
  },
  bistro: {
    mode: "cards",
    columnsClass: cols.catalog,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
    featuredCategories: ["Commerce"],
  },
  pulse: {
    mode: "cards",
    columnsClass: cols.balanced,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
  },
  campus: {
    mode: "cards",
    columnsClass: cols.catalog,
    gap: "default",
    canvas: "muted",
    showTileLabels: false,
  },
} as const satisfies Record<string, PreviewSettings>

/** Gallery gutter — independent from control density; tight still has a readable floor. */
const gapClass: Record<PreviewSettings["gap"], string> = {
  tight: "gap-4 [column-gap:1rem]",
  default: "gap-5 [column-gap:1.25rem]",
  airy: "gap-6 [column-gap:1.5rem]",
}

const tileSpacingClass: Record<PreviewSettings["gap"], string> = {
  tight: "mb-6",
  default: "mb-7",
  airy: "mb-8",
}

export function previewMasonryGapClass(gap: PreviewSettings["gap"]): string {
  return gapClass[gap]
}

export function previewMasonryTileSpacing(gap: PreviewSettings["gap"]): string {
  return tileSpacingClass[gap]
}

export function previewCanvasClass(canvas: PreviewSettings["canvas"]): string {
  switch (canvas) {
    case "paper":
      return "bg-[#f5f3ef] dark:bg-muted/20"
    case "flat":
      return "bg-background"
    case "muted":
    default:
      return "bg-zinc-100/90 dark:bg-muted/30"
  }
}

export function previewPagePadding(): string {
  return "p-5 md:p-6"
}

/** Coerce legacy URL/config values (grid, catalog) to cards. */
export function normalizePreviewSettings(
  preview: Partial<PreviewSettings> & { mode?: string },
): PreviewSettings {
  const mode: PreviewGalleryMode =
    preview.mode === "single" ? "single" : "cards"

  return {
    ...defaultPreviewSettings,
    ...preview,
    mode,
  }
}
