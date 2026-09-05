import { useEffect, useMemo, useRef } from "react"

import {
  PreviewSettingsProvider,
  usePreviewSettings,
} from "@/components/preview/preview-layout-context"
import {
  formatPreviewLabel,
  getPreviewCategory,
} from "@/components/preview/preview-labels"
import type { PreviewEntry } from "@/components/preview/preview-registry"
import { PreviewPrimitivesGrid } from "@/components/preview/PreviewPrimitivesGrid"
import { TemplatePreviewPage } from "@/components/preview/templates/TemplatePreviewPage"
import {
  APP_TEMPLATE_PAGE_INDEX,
  GALLERY_PAGE_COUNT,
  GALLERY_PAGE_LABELS,
} from "@/components/preview/templates/template-registry"
import { resolvePreviewEntries } from "@/lib/preview-entries"
import { paginatePreviewEntries } from "@/lib/preview-gallery-pages"
import {
  galleryTabToIndex,
  indexToGalleryTab,
  type GalleryTab,
} from "@/lib/share-url"
import type { ThemeConfig } from "@/lib/theme-config"
import { matchGlobalPresetId } from "@/lib/theme-config"
import { cn } from "@/lib/utils"
import {
  previewCanvasClass,
  previewMasonryGapClass,
  previewMasonryTileSpacing,
  previewPagePadding,
  type PreviewGalleryMode,
} from "@/tokens/preview-settings"

function ShowcaseScanLabel({ entry }: { entry: PreviewEntry }) {
  const label = formatPreviewLabel(entry.id)
  const category = getPreviewCategory(entry.id)

  return (
    <div className="mb-2 flex items-center justify-between gap-2">
      <span className="truncate font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      {category ? (
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-muted-foreground/70">
          {category}
        </span>
      ) : null}
    </div>
  )
}

function ShowcaseTile({ entry }: { entry: PreviewEntry }) {
  const Block = entry.component
  const { showTileLabels } = usePreviewSettings()

  return (
    <div className="break-inside-avoid">
      {showTileLabels ? <ShowcaseScanLabel entry={entry} /> : null}
      <Block />
    </div>
  )
}

function PreviewMasonryPage({
  entries,
  columnsClass,
  gapClass,
  tileSpacingClass,
  mode,
}: {
  entries: PreviewEntry[]
  columnsClass: string
  gapClass: string
  tileSpacingClass: string
  mode: PreviewGalleryMode
}) {
  return (
    <div
      className={cn(
        mode === "single"
          ? "mx-auto w-full max-w-5xl min-w-0"
          : "min-w-0 w-full md:min-w-[640px]",
        columnsClass,
        gapClass,
      )}
    >
      {entries.map((entry) => (
        <div
          key={entry.id}
          data-share-item={entry.id}
          className={cn("break-inside-avoid", tileSpacingClass)}
        >
          <ShowcaseTile entry={entry} />
        </div>
      ))}
    </div>
  )
}

type PreviewGalleryProps = {
  config: ThemeConfig
  tab: GalleryTab
  shareItem?: string
  onTabChange: (tab: GalleryTab) => void
  onShareItemChange: (item: string | undefined) => void
}

export function PreviewGallery({
  config,
  tab,
  shareItem,
  onTabChange,
  onShareItemChange,
}: PreviewGalleryProps) {
  const page = galleryTabToIndex(tab)
  const preview = config.preview
  const presetId = matchGlobalPresetId(config)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const resetKey = `${presetId}:${preview.mode}:${preview.columnsClass}:${preview.canvas}`
  const prevResetKeyRef = useRef(resetKey)

  const entries = useMemo(() => resolvePreviewEntries(config), [config])

  const componentEntries = useMemo(
    () => paginatePreviewEntries(entries)[1] ?? [],
    [entries],
  )

  useEffect(() => {
    if (prevResetKeyRef.current === resetKey) return
    prevResetKeyRef.current = resetKey
    onTabChange("primitives")
    onShareItemChange(undefined)
  }, [resetKey, onTabChange, onShareItemChange])

  useEffect(() => {
    if (!shareItem) return

    const frame = window.requestAnimationFrame(() => {
      const root = scrollContainerRef.current
      const target = root?.querySelector<HTMLElement>(
        `[data-share-item="${shareItem}"]`,
      )
      target?.scrollIntoView({ behavior: "smooth", block: "center" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [shareItem, tab, componentEntries])

  const isTemplatePage = page === APP_TEMPLATE_PAGE_INDEX
  const isPrimitivesPage = page === 0

  return (
    <PreviewSettingsProvider settings={preview}>
      <div
        className={cn(
          "relative h-full",
          isTemplatePage ? "bg-background" : previewCanvasClass(preview.canvas),
        )}
      >
        <div ref={scrollContainerRef} className="h-full overflow-auto pb-16">
          {isTemplatePage ? (
            <TemplatePreviewPage config={config} />
          ) : (
            <div className={previewPagePadding()}>
              {isPrimitivesPage ? (
                <PreviewPrimitivesGrid />
              ) : (
                <PreviewMasonryPage
                  entries={componentEntries}
                  columnsClass={preview.columnsClass}
                  gapClass={previewMasonryGapClass(preview.gap)}
                  tileSpacingClass={previewMasonryTileSpacing(preview.gap)}
                  mode={preview.mode}
                />
              )}
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <div className="pointer-events-auto flex gap-1 rounded-lg border border-border/60 bg-background/90 p-1 shadow-sm backdrop-blur-sm">
            {Array.from({ length: GALLERY_PAGE_COUNT }, (_, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "h-7 rounded-md px-2.5 font-mono text-xs transition-colors",
                  page === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted",
                )}
                onClick={() => {
                  onTabChange(indexToGalleryTab(index))
                  onShareItemChange(undefined)
                }}
                title={GALLERY_PAGE_LABELS[index]}
              >
                {GALLERY_PAGE_LABELS[index]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PreviewSettingsProvider>
  )
}
