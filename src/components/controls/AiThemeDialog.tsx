import { useMemo, useState } from "react"
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  FileJsonIcon,
  MessageSquareTextIcon,
  SparklesIcon,
} from "lucide-react"

import type { ControlPanelProps } from "@/components/controls/control-panel-types"
import { PresetMiniPreview } from "@/components/controls/ThemeSpecialTiles"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getConfigPickerMeta } from "@/lib/preset-picker-meta"
import {
  applyThemeBrief,
  buildThemeBriefPrompt,
  DEFAULT_AI_THEME_DESCRIPTION,
  parseThemeBriefInput,
  summarizeThemeBrief,
} from "@/lib/theme-brief"
import { createDefaultConfig } from "@/lib/theme-config"
import { cn } from "@/lib/utils"
import { globalPresets } from "@/tokens/global-presets"

async function copyText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text)
}

const STARTER_BRIEFS = [
  {
    title: "SaaS dashboard",
    text:
      "B2B analytics dashboard for finance teams. Trustworthy blue primary, soft elevated cards, compact data density, calm professional tone.",
  },
  {
    title: "Editorial blog",
    text:
      "Long-form reading product for writers. Warm paper neutrals, subtle borders, comfortable spacing, literary not corporate.",
  },
  {
    title: "Commerce storefront",
    text:
      "Modern DTC storefront with bold accent, elevated product cards, friendly rounded corners, high-contrast CTAs.",
  },
] as const

const WORKFLOW_STEPS = [
  {
    icon: MessageSquareTextIcon,
    title: "Describe the vibe",
    body: "Product type, audience, color mood, and density.",
  },
  {
    icon: CopyIcon,
    title: "Copy structured prompt",
    body: "Paste into ChatGPT, Claude, Gemini, or any chat model.",
  },
  {
    icon: FileJsonIcon,
    title: "Import the JSON",
    body: "We validate preset IDs and apply the theme live.",
  },
] as const

type AiThemeDialogProps = Pick<ControlPanelProps, "config" | "onChange"> & {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AiThemeDialog({
  config,
  onChange,
  open,
  onOpenChange,
}: AiThemeDialogProps) {
  const [description, setDescription] = useState(DEFAULT_AI_THEME_DESCRIPTION)
  const [pasteValue, setPasteValue] = useState("")
  const [copiedPrompt, setCopiedPrompt] = useState(false)
  const [applyErrors, setApplyErrors] = useState<string[]>([])

  const parsedResult = useMemo(
    () => (pasteValue.trim() ? parseThemeBriefInput(pasteValue) : null),
    [pasteValue],
  )

  const previewMeta = useMemo(() => {
    if (!parsedResult?.ok) return null
    const previewConfig = applyThemeBrief(
      createDefaultConfig(),
      parsedResult.brief,
    )
    return getConfigPickerMeta(previewConfig)
  }, [parsedResult])

  const handleCopyPrompt = async () => {
    await copyText(buildThemeBriefPrompt(description))
    setCopiedPrompt(true)
    window.setTimeout(() => setCopiedPrompt(false), 2000)
  }

  const handleApply = () => {
    const result = parseThemeBriefInput(pasteValue)
    if (!result.ok) {
      setApplyErrors(result.errors)
      return
    }

    setApplyErrors([])
    onChange(applyThemeBrief(config, result.brief))
    onOpenChange(false)
  }

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setApplyErrors([])
    onOpenChange(nextOpen)
  }

  const briefReady =
    description.trim() !== "" &&
    description.trim() !== DEFAULT_AI_THEME_DESCRIPTION

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton
        className="flex h-[min(88vh,700px)] w-[min(96vw,820px)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none"
      >
        <header className="shrink-0 border-b border-border px-6 py-4 pr-14">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <DialogTitle className="text-lg font-semibold tracking-tight">
                  Create from prompt
                </DialogTitle>
                <Badge variant="secondary" className="font-normal">
                  External model
                </Badge>
              </div>
              <DialogDescription className="max-w-xl text-sm leading-relaxed">
                Compose a brief, copy our schema-aware prompt into any chat
                tool, then import the JSON to preview a complete theme.
              </DialogDescription>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => void handleCopyPrompt()}
            >
              {copiedPrompt ? (
                <>
                  <CheckIcon data-icon="inline-start" />
                  Prompt copied
                </>
              ) : (
                <>
                  <CopyIcon data-icon="inline-start" />
                  Copy prompt
                </>
              )}
            </Button>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <section className="flex min-h-0 flex-col border-b border-border md:border-r md:border-b-0">
            <div className="border-b border-border/80 px-5 py-3">
              <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Compose
              </p>
            </div>

            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-4">
              <div className="space-y-2">
                <Label htmlFor="ai-theme-description" className="text-sm">
                  Theme brief
                </Label>
                <Textarea
                  id="ai-theme-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows={5}
                  className="min-h-[7.5rem] resize-none bg-background text-sm leading-relaxed shadow-sm"
                  placeholder="Describe what you're building — product category, audience, palette direction, surface style, and how dense the UI should feel."
                />
                <p className="text-xs text-muted-foreground">
                  {briefReady
                    ? "This brief is embedded at the top of the copied prompt."
                    : "Add specifics above, or start from a template below."}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground/80">
                  Starter templates
                </p>
                <div className="grid gap-2">
                  {STARTER_BRIEFS.map((starter) => {
                    const active = description === starter.text
                    return (
                      <button
                        key={starter.title}
                        type="button"
                        onClick={() => setDescription(starter.text)}
                        className={cn(
                          "rounded-lg border px-3 py-2.5 text-left transition-colors",
                          active
                            ? "border-primary/40 bg-primary/[0.04] ring-1 ring-primary/20"
                            : "border-border/80 bg-muted/20 hover:border-border hover:bg-muted/40",
                        )}
                      >
                        <p className="text-xs font-medium">{starter.title}</p>
                        <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                          {starter.text}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-muted/15 p-3">
                <p className="mb-3 text-xs font-medium">Workflow</p>
                <ol className="space-y-3">
                  {WORKFLOW_STEPS.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <li key={step.title} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground"
                          >
                            <Icon className="size-3.5" />
                          </span>
                          {index < WORKFLOW_STEPS.length - 1 ? (
                            <span className="mt-1 h-full w-px bg-border" />
                          ) : null}
                        </div>
                        <div className="pb-1">
                          <p className="text-xs font-medium">{step.title}</p>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                            {step.body}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </section>

          <section className="flex min-h-0 flex-col">
            <div className="flex items-center justify-between border-b border-border/80 px-5 py-3">
              <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Import
              </p>
              {parsedResult?.ok ? (
                <Badge variant="outline" className="gap-1 font-normal text-emerald-700 dark:text-emerald-400">
                  <CheckIcon className="size-3" />
                  Valid JSON
                </Badge>
              ) : pasteValue.trim() ? (
                <Badge variant="outline" className="font-normal text-muted-foreground">
                  Waiting for valid JSON
                </Badge>
              ) : null}
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 py-4">
              <div className="min-h-0 flex-1 space-y-2">
                <Label htmlFor="ai-theme-response" className="text-sm">
                  Model response
                </Label>
                <div className="relative min-h-[min(34vh,280px)] flex-1">
                  <Textarea
                    id="ai-theme-response"
                    value={pasteValue}
                    onChange={(event) => {
                      setPasteValue(event.target.value)
                      if (applyErrors.length > 0) setApplyErrors([])
                    }}
                    className="h-full min-h-[min(34vh,280px)] resize-none rounded-lg border-border/80 bg-muted/25 font-mono text-[12px] leading-6 shadow-inner"
                    placeholder={`{\n  "$schema": "shadstyle-theme-brief/v1",\n  "basePreset": "workspace",\n  "brand": {\n    "primary": "#2563eb",\n    "primaryForeground": "#ffffff",\n    "highlight": null\n  },\n  "chartPalette": ["#2563eb", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"]\n}`}
                  />
                </div>
              </div>

              {parsedResult?.ok && previewMeta ? (
                <div className="overflow-hidden rounded-xl border border-border/80 bg-card">
                  <div className="flex items-center justify-between border-b border-border/80 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="size-3.5 text-muted-foreground" />
                      <p className="text-xs font-medium">Preview</p>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      {globalPresets.find(
                        (preset) => preset.id === parsedResult.brief.basePreset,
                      )?.label ?? parsedResult.brief.basePreset}
                    </p>
                  </div>
                  <div className="grid gap-3 p-3 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                    <PresetMiniPreview meta={previewMeta} />
                    <div className="flex min-w-0 flex-col justify-center gap-2">
                      <p className="truncate text-sm font-medium">
                        {parsedResult.brief.name ??
                          summarizeThemeBrief(parsedResult.brief)[0]}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className="inline-flex items-center gap-1 rounded-md border border-border/80 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                        >
                          <span
                            className="size-2 rounded-full"
                            style={{
                              backgroundColor: parsedResult.brief.brand.primary,
                            }}
                          />
                          {parsedResult.brief.brand.primary}
                        </span>
                        {parsedResult.brief.surfaces ? (
                          <Badge variant="secondary" className="text-[10px]">
                            {parsedResult.brief.surfaces}
                          </Badge>
                        ) : null}
                        {parsedResult.brief.personality ? (
                          <Badge variant="secondary" className="text-[10px]">
                            {parsedResult.brief.personality}
                          </Badge>
                        ) : null}
                      </div>
                      <ul className="space-y-0.5 text-[11px] text-muted-foreground">
                        {summarizeThemeBrief(parsedResult.brief)
                          .slice(1, 3)
                          .map((line) => (
                            <li key={line} className="truncate">{line}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}

              {applyErrors.length > 0 ? (
                <Alert variant="destructive">
                  <AlertTitle>Could not apply theme</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc space-y-1 pl-4">
                      {applyErrors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              ) : null}
            </div>
          </section>
        </div>

        <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-border bg-muted/20 px-6 py-3">
          <p className="hidden text-xs text-muted-foreground sm:block">
            Themes remain fully editable in the control panels after import.
          </p>
          <div className="flex w-full justify-end gap-2 sm:w-auto">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              disabled={!parsedResult?.ok}
              onClick={handleApply}
            >
              Apply theme
              <ArrowRightIcon />
            </Button>
          </div>
        </footer>
      </DialogContent>
    </Dialog>
  )
}
