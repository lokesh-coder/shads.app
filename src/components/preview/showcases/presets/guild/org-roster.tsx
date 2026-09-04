import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const team = [
  { name: "Alex Kim", role: "Engineering" },
  { name: "Sam Rivera", role: "Design" },
  { name: "Jordan Lee", role: "People Ops" },
] as const

export function OrgRosterShowcase() {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="font-heading text-base font-semibold">People directory</p>
      <ul className="flex flex-col gap-2">
        {team.map((member) => (
          <li
            key={member.name}
            className="flex items-center gap-3 rounded-lg border border-border/70 px-3 py-2"
          >
            <Avatar className="size-8">
              <AvatarFallback className="text-xs">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{member.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {member.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
