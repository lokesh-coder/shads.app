import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
  type RefObject,
} from "react"

const PreviewPortalContext = createContext<HTMLElement | null>(null)

export function usePreviewPortal(): HTMLElement | null {
  return useContext(PreviewPortalContext)
}

type PortalContainer =
  | HTMLElement
  | ShadowRoot
  | RefObject<HTMLElement | ShadowRoot | null>
  | null
  | undefined

/** Prefer an explicit container, then the preview portal mount, then document.body. */
export function resolvePortalContainer(explicit?: PortalContainer): PortalContainer {
  const previewPortal = usePreviewPortal()
  if (explicit) return explicit
  return previewPortal ?? undefined
}

type PreviewPortalProviderProps = {
  children: ReactNode
}

/**
 * Routes Radix/Base UI portals into the preview root so overlays inherit
 * scoped theme tokens instead of leaking to document.body.
 */
export function PreviewPortalProvider({ children }: PreviewPortalProviderProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)
  const portalRef = useCallback((node: HTMLDivElement | null) => {
    setPortalContainer(node)
  }, [])

  return (
    <PreviewPortalContext.Provider value={portalContainer}>
      {children}
      <div
        ref={portalRef}
        id="theme-preview-portals"
        aria-hidden
        className="contents"
      />
    </PreviewPortalContext.Provider>
  )
}
