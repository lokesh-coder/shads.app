import { BotIcon, FileTextIcon, SendIcon, UserIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { DocumentArtifact } from "./template-visuals"
import {
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.canvas

const messages = [
  {
    role: "user" as const,
    text: "Summarize Q3 enterprise pipeline for the board deck. Focus on win rate and slipped deals.",
  },
  {
    role: "assistant" as const,
    text: "Enterprise pipeline grew 18% QoQ to $4.2M. Win rate improved to 34% after pricing changes. Two deals slipped to Q4 pending security review.",
  },
  {
    role: "user" as const,
    text: "Add a one-line risk callout for the CFO.",
  },
  {
    role: "assistant" as const,
    text: "Risk: elongated security cycles may push $800K ARR into Q4 unless review templates are standardized.",
  },
  {
    role: "user" as const,
    text: "Format this as a board-ready executive summary with bullet points.",
  },
  {
    role: "assistant" as const,
    text: "I've drafted the executive summary in the artifact panel. Review the risk callout and let me know if you'd like a more conservative tone.",
  },
] as const

const suggestedPrompts = [
  "Add YoY comparison",
  "Shorten to 3 bullets",
  "Include regional breakdown",
  "Export as PDF",
] as const

export function CanvasTemplate() {
  return (
    <TemplateSurface className="flex min-h-full flex-col">
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[{ label: narrative.hero, active: true }]}
        trailing={
          <>
            <Button variant="ghost" size="sm">
              Share
            </Button>
            <Button variant="outline" size="sm">
              New chat
            </Button>
          </>
        }
      />

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-6 md:grid-cols-[1fr_260px] md:px-8">
        <div className="flex min-w-0 flex-col">
          <p className="mb-6 text-sm text-muted-foreground">{narrative.subhero}</p>

          <div className="flex flex-1 flex-col gap-5 pb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3",
                  message.role === "user" && "flex-row-reverse",
                )}
              >
                <Avatar className="size-8 shrink-0">
                  <AvatarFallback className="text-xs">
                    {message.role === "user" ? (
                      <UserIcon className="size-3.5" />
                    ) : (
                      <BotIcon className="size-3.5" />
                    )}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/60",
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}

            <DocumentArtifact title="Executive summary · Draft v2">
              <p className="mb-3 font-medium">Q3 Enterprise Pipeline</p>
              <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                <li>Pipeline value: $4.2M (+18% QoQ)</li>
                <li>Win rate: 34% (+6 pts after pricing update)</li>
                <li>Slipped deals: 2 accounts ($800K ARR) pending security review</li>
              </ul>
              <p className="mt-4 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-amber-900 dark:text-amber-200">
                <strong>Risk:</strong> Security review cycles may defer $800K ARR to Q4
                without standardized templates.
              </p>
            </DocumentArtifact>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <Button key={prompt} variant="outline" size="sm" className="h-8 rounded-full">
                {prompt}
              </Button>
            ))}
          </div>
        </div>

        <aside className="hidden md:block">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <FileTextIcon className="size-4" />
                Context
              </CardTitle>
              <CardDescription>Board deck · Q3 2026</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Audience</span>
                <Badge variant="secondary">Board</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Tone</span>
                <span>Executive</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Sources</span>
                <span>3 files</span>
              </div>
              <div className="mt-2 rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
                Q3_pipeline.xlsx · win_loss_report.pdf · security_review_notes.md
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      <div className="sticky bottom-0 border-t border-border/70 bg-background/95 p-4 backdrop-blur-md">
        <TemplateContent width="wide" className="px-0">
          <div className="flex gap-2">
            <Textarea
              placeholder="Refine the summary or ask a follow-up..."
              className="min-h-11 resize-none"
              rows={1}
            />
            <Button size="icon" aria-label="Send">
              <SendIcon />
            </Button>
          </div>
        </TemplateContent>
      </div>
    </TemplateSurface>
  )
}
