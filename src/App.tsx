import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { toast } from "sonner"

import { ControlsRail } from "@/components/controls/ControlsRail"
import { PreviewGallery } from "@/components/preview/PreviewGallery"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PREVIEW_ROOT_ID } from "@/lib/css-scope"
import { loadFonts, collectPresetFontIds } from "@/lib/fonts"
import { PreviewPortalProvider } from "@/lib/preview-portal"
import type { ThemeConfig } from "@/lib/theme-config"
import { applyThemePreview } from "@/lib/theme-preview"
import {
  copyShareUrl,
  parseShareUrl,
  syncShareUrl,
  type GalleryTab,
  type ShareState,
} from "@/lib/share-url"
import { globalPresets } from "@/tokens/global-presets"

export function App() {
  const [config, setConfig] = useState<ThemeConfig>(() => parseShareUrl().config)
  const [galleryTab, setGalleryTab] = useState<GalleryTab>(
    () => parseShareUrl().tab,
  )
  const [shareItem, setShareItem] = useState<string | undefined>(
    () => parseShareUrl().item,
  )
  const [isDark, setIsDark] = useState(() => parseShareUrl().isDark)
  const previewRootRef = useRef<HTMLDivElement>(null)
  const urlTimerRef = useRef<number | null>(null)

  const shareState = useMemo<ShareState>(
    () => ({
      config,
      tab: galleryTab,
      item: shareItem,
      isDark,
    }),
    [config, galleryTab, shareItem, isDark],
  )

  const updateConfig = useCallback((next: ThemeConfig) => {
    setConfig(next)
  }, [])

  const handleShare = useCallback(async () => {
    try {
      await copyShareUrl(shareState)
      toast.success("Share link copied")
    } catch {
      toast.error("Could not copy link")
    }
  }, [shareState])

  useEffect(() => {
    void loadFonts(collectPresetFontIds(globalPresets))
  }, [])

  useEffect(() => {
    void loadFonts([
      config.fonts.sans,
      config.fonts.heading,
      config.fonts.mono,
    ])
  }, [config.fonts.sans, config.fonts.heading, config.fonts.mono])

  useEffect(() => {
    const root = previewRootRef.current
    if (!root) return
    applyThemePreview(root, config, isDark)
  }, [config, isDark])

  useEffect(() => {
    if (urlTimerRef.current) {
      window.clearTimeout(urlTimerRef.current)
    }
    urlTimerRef.current = window.setTimeout(() => {
      syncShareUrl(shareState)
    }, 300)
    return () => {
      if (urlTimerRef.current) {
        window.clearTimeout(urlTimerRef.current)
      }
    }
  }, [shareState])

  return (
    <TooltipProvider>
      <div className="flex h-svh bg-background text-foreground">
        <ControlsRail
          config={config}
          onChange={updateConfig}
          isDark={isDark}
          onDarkChange={setIsDark}
          onShare={handleShare}
        />
        <main className="relative min-w-0 flex-1 overflow-hidden">
          <div
            ref={previewRootRef}
            id={PREVIEW_ROOT_ID}
            data-theme-preview
            className="h-full"
          >
            <PreviewPortalProvider>
              <PreviewGallery
                config={config}
                tab={galleryTab}
                shareItem={shareItem}
                onTabChange={setGalleryTab}
                onShareItemChange={setShareItem}
              />
            </PreviewPortalProvider>
          </div>
        </main>
      </div>
      <Toaster theme={isDark ? "dark" : "light"} position="bottom-right" />
    </TooltipProvider>
  )
}

export default App
