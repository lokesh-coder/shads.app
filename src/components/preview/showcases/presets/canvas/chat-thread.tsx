import { BotIcon, UserIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const messages = [
  {
    role: "user" as const,
    text: "Summarize the Q3 pipeline changes for the board deck.",
  },
  {
    role: "assistant" as const,
    text: "Pipeline grew 18% QoQ. Enterprise deals are up, SMB churn improved after pricing changes.",
  },
] as const

export function ChatThreadShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      {messages.map((message) => (
        <div
          key={message.text}
          className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
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
            className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
              message.role === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted/60"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}
