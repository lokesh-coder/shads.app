import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { avatarUrl, initialsFromName } from "@/lib/stock-media"
import { cn } from "@/lib/utils"

type PersonAvatarProps = {
  name: string
  seed?: string
  className?: string
  size?: "default" | "sm" | "lg"
  imageSize?: number
}

export function PersonAvatar({
  name,
  seed,
  className,
  size = "default",
  imageSize = 150,
}: PersonAvatarProps) {
  const src = avatarUrl(seed ?? name, imageSize)
  const initials = initialsFromName(name)

  return (
    <Avatar className={cn(className)} size={size}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="text-xs">{initials}</AvatarFallback>
    </Avatar>
  )
}
