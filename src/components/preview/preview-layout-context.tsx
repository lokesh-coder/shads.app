import { createContext, useContext, type ReactNode } from "react"

import {
  defaultPreviewSettings,
  type PreviewGalleryMode,
  type PreviewSettings,
} from "@/tokens/preview-settings"

/** @deprecated Use PreviewGalleryMode */
export type PreviewLayout = PreviewGalleryMode

const PreviewSettingsContext = createContext<PreviewSettings>(
  defaultPreviewSettings,
)

export function PreviewSettingsProvider({
  settings,
  children,
}: {
  settings: PreviewSettings
  children: ReactNode
}) {
  return (
    <PreviewSettingsContext.Provider value={settings}>
      {children}
    </PreviewSettingsContext.Provider>
  )
}

export function usePreviewSettings(): PreviewSettings {
  return useContext(PreviewSettingsContext)
}

export function usePreviewLayout(): PreviewGalleryMode {
  return useContext(PreviewSettingsContext).mode
}

/** @deprecated Use PreviewSettingsProvider */
export const PreviewLayoutProvider = PreviewSettingsProvider
