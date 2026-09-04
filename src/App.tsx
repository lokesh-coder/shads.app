import { useCallback, useEffect, useRef, useState } from "react"

import { ControlsRail } from "@/components/controls/ControlsRail"
import { PreviewGallery } from "@/components/preview/PreviewGallery"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { loadFonts, collectPresetFontIds } from "@/lib/fonts"
import type { ThemeConfig } from "@/lib/theme-config"
import { applyThemePreview } from "@/lib/theme-preview"
import { parseThemeUrl, syncThemeUrl } from "@/lib/theme-url"
import { globalPresets } from "@/tokens/global-presets"

export function App() {
  const [config, setConfig] = useState<ThemeConfig>(() => parseThemeUrl())
  const [isDark, setIsDark] = useState(false)
  const urlTimerRef = useRef<number | null>(null)

  const updateConfig = useCallback((next: ThemeConfig) => {
    setConfig(next)
  }, [])

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
    applyThemePreview(config, isDark)
  }, [config, isDark])

  useEffect(() => {
    if (urlTimerRef.current) {
      window.clearTimeout(urlTimerRef.current)
    }
    urlTimerRef.current = window.setTimeout(() => {
      syncThemeUrl(config)
    }, 300)
    return () => {
      if (urlTimerRef.current) {
        window.clearTimeout(urlTimerRef.current)
      }
    }
  }, [config])

  return (
    <TooltipProvider>
      <div className="flex h-svh bg-background text-foreground">
        <main className="relative min-w-0 flex-1 overflow-hidden">
          <PreviewGallery config={config} />
        </main>
        <ControlsRail
          config={config}
          onChange={updateConfig}
          isDark={isDark}
          onDarkChange={setIsDark}
        />
      </div>
      <Toaster theme={isDark ? "dark" : "light"} position="bottom-right" />
    </TooltipProvider>
  )
}

export default App
