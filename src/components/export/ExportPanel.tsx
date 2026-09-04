import { useMemo, useState } from "react"
import { CheckIcon, CopyIcon, RotateCcwIcon } from "lucide-react"

import { ExportCodeView } from "@/components/export/ExportCodeView"
import { Button } from "@/components/ui/button"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  const [activeTab, setActiveTab] = useState("index")
  const generated = useMemo(() => generateAll(config), [config])

  const tabs: ExportTab[] = [
    { id: "index", label: "index.css", content: generated.index, language: "css" },
    {
      id: "theme",
      label: "styles/theme.css",
      content: generated.theme,
      language: "css",
    },
    {
      id: "quickstart",
      label: "Quick Start",
      content: generated.quickStart,
      language: "markdown",
    },
  ]

  const copyAllContent = tabs
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
              Copy two files into your project:{" "}
              <span className="font-mono text-foreground">index.css</span> and{" "}
              <span className="font-mono text-foreground">styles/theme.css</span>.
            </DialogDescription>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button
              variant="outline"
              size="sm"
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
                  Copy all CSS
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
        value={activeTab}
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
                    Copy file
                  </>
                )}
              </Button>
            </div>
            {activeTab === tab.id ? (
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
