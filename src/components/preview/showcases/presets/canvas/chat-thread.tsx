import { PersonAvatar } from "@/components/media/person-avatar"

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
          <PersonAvatar
            name={message.role === "user" ? "You" : "Assistant"}
            seed={message.role === "user" ? "user" : "assistant"}
            className="size-8 shrink-0"
          />
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
