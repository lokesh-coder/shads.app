import { useEffect, useMemo, useState } from "react"
import { CheckIcon, CopyIcon, RotateCcwIcon } from "lucide-react"

import { ExportCodeView } from "@/components/export/ExportCodeView"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EXPORT_SECTION_LABELS } from "@/lib/export-plan"
import { generateAll } from "@/lib/theme-codegen"
import type { ThemeConfig } from "@/lib/theme-config"
import { resetConfig } from "@/lib/theme-config"

type ExportPanelProps = {
  config: ThemeConfig
  onReset: (config: ThemeConfig) => void
}

type ExportTab = {
  id: string
  label: string
  content: string
  language: "css" | "markdown"
}

async function copyText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text)
}

export function ExportPanel({ config, onReset }: ExportPanelProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const generated = useMemo(() => generateAll(config), [config])

  const tabs: ExportTab[] = useMemo(() => {
    if (generated.isEmpty) {
      return [
        {
          id: "quickstart",
          label: "Quick Start",
          content: generated.quickStart,
          language: "markdown",
        },
      ]
    }

    const result: ExportTab[] = []
    if (generated.index) {
      result.push({
        id: "index",
        label: "index.css",
        content: generated.index,
        language: "css",
      })
    }
    if (generated.theme) {
      result.push({
        id: "theme",
        label: "styles/theme.css",
        content: generated.theme,
        language: "css",
      })
    }
    result.push({
      id: "quickstart",
      label: "Quick Start",
      content: generated.quickStart,
      language: "markdown",
    })
    return result
  }, [generated])

  const [activeTab, setActiveTab] = useState("index")

  useEffect(() => {
    if (tabs.length > 0 && !tabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(tabs[0]?.id ?? "quickstart")
    }
  }, [activeTab, tabs])

  const copyAllContent = generated.isEmpty
    ? ""
    : tabs
        .filter((tab) => tab.id !== "quickstart")
        .map((tab) => `/* ${tab.label} */\n${tab.content}`)
        .join("\n\n")

  const handleCopy = async (text: string, id: string) => {
    await copyText(text)
    setCopiedId(id)
    window.setTimeout(() => setCopiedId(null), 1500)
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <DialogHeader className="shrink-0 gap-1 border-b border-border px-6 py-4 pr-14 text-left">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <DialogTitle className="text-lg">Export theme</DialogTitle>
            <DialogDescription>
              {generated.isEmpty ? (
                <>
                  Your theme matches stock shadcn — nothing custom to export.
                </>
              ) : (
                <>
                  Merge these snippets into your existing shadcn{" "}
                  {generated.index && generated.theme
                    ? "index.css and theme.css"
                    : generated.index
                      ? "index.css"
                      : "theme.css"}
                  .
                </>
              )}
            </DialogDescription>
            {!generated.isEmpty && generated.sections.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {generated.sections.map((section) => (
                  <Badge key={section} variant="secondary" className="text-xs">
                    {EXPORT_SECTION_LABELS[section]}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex shrink-0 gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={generated.isEmpty}
              onClick={() => handleCopy(copyAllContent, "all")}
            >
              {copiedId === "all" ? (
                <>
                  <CheckIcon data-icon="inline-start" />
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon data-icon="inline-start" />
                  Copy all snippets
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onReset(resetConfig())}
            >
              <RotateCcwIcon data-icon="inline-start" />
              Reset theme
            </Button>
          </div>
        </div>
      </DialogHeader>

      <Tabs
        value={
          generated.isEmpty
            ? "quickstart"
            : tabs.some((tab) => tab.id === activeTab)
              ? activeTab
              : (tabs[0]?.id ?? "quickstart")
        }
        onValueChange={setActiveTab}
        className="flex min-h-0 flex-1 flex-col gap-0"
      >
        <div className="shrink-0 overflow-x-auto border-b border-border px-4">
          <TabsList
            variant="line"
            className="h-auto min-w-max justify-start gap-0 rounded-none bg-transparent p-0"
          >
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-none px-3 py-2.5 text-xs sm:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="mt-0 flex min-h-0 flex-1 flex-col gap-3 p-4 sm:p-5"
          >
            <div className="flex shrink-0 items-center justify-between gap-2">
              <p className="font-mono text-xs text-muted-foreground">
                {tab.label}
              </p>
              <Button
                variant="outline"
                size="sm"
                disabled={generated.isEmpty && tab.id !== "quickstart"}
                onClick={() => handleCopy(tab.content, tab.id)}
              >
                {copiedId === tab.id ? (
                  <>
                    <CheckIcon data-icon="inline-start" />
                    Copied
                  </>
                ) : (
                  <>
                    <CopyIcon data-icon="inline-start" />
                    Copy snippet
                  </>
                )}
              </Button>
            </div>
            {(generated.isEmpty ? "quickstart" : activeTab) === tab.id ? (
              <ExportCodeView
                content={tab.content}
                language={tab.language}
                className="min-h-[min(52vh,560px)] flex-1"
              />
            ) : null}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
