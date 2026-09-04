import { useEffect, useMemo, useState } from "react"

import {
  PreviewSettingsProvider,
  usePreviewSettings,
} from "@/components/preview/preview-layout-context"
import {
  formatPreviewLabel,
  getPreviewCategory,
} from "@/components/preview/preview-labels"
import type { PreviewEntry } from "@/components/preview/preview-registry"
import { resolvePreviewEntries } from "@/lib/preview-entries"
import { paginatePreviewEntries } from "@/lib/preview-gallery-pages"
import { TemplatePreviewPage } from "@/components/preview/templates/TemplatePreviewPage"
import {
  APP_TEMPLATE_PAGE_INDEX,
  GALLERY_PAGE_COUNT,
} from "@/components/preview/templates/template-registry"
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
        <div key={entry.id} className={cn("break-inside-avoid", tileSpacingClass)}>
          <ShowcaseTile entry={entry} />
        </div>
      ))}
    </div>
  )
}

type PreviewGalleryProps = {
  config: ThemeConfig
}

export function PreviewGallery({ config }: PreviewGalleryProps) {
  const [page, setPage] = useState(0)
  const preview = config.preview
  const presetId = matchGlobalPresetId(config)

  useEffect(() => {
    setPage(0)
  }, [presetId, preview.mode, preview.columnsClass, preview.canvas])

  const entries = useMemo(() => resolvePreviewEntries(config), [config])

  const componentPages = useMemo(() => paginatePreviewEntries(entries), [entries])

  const isTemplatePage = page === APP_TEMPLATE_PAGE_INDEX

  return (
    <PreviewSettingsProvider settings={preview}>
      <div
        className={cn(
          "relative h-full",
          isTemplatePage ? "bg-background" : previewCanvasClass(preview.canvas),
        )}
      >
        <div className="h-full overflow-auto pb-16">
          {isTemplatePage ? (
            <TemplatePreviewPage config={config} />
          ) : (
            <div className={previewPagePadding()}>
              <PreviewMasonryPage
                entries={componentPages[page] ?? componentPages[0]!}
                columnsClass={preview.columnsClass}
                gapClass={previewMasonryGapClass(preview.gap)}
                tileSpacingClass={previewMasonryTileSpacing(preview.gap)}
                mode={preview.mode}
              />
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <div className="pointer-events-auto flex gap-1 rounded-lg border border-border/60 bg-background/90 p-1 shadow-sm backdrop-blur-sm">
            {Array.from({ length: GALLERY_PAGE_COUNT }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`h-7 min-w-9 rounded-md px-2 font-mono text-xs tabular-nums transition-colors ${
                  page === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={() => setPage(index)}
                title={
                  index === APP_TEMPLATE_PAGE_INDEX
                    ? "Full app template"
                    : `Components page ${index + 1}`
                }
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PreviewSettingsProvider>
  )
}
