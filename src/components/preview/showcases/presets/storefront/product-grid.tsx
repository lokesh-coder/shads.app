import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

const products = ["Ceramic mug", "Linen throw", "Desk lamp"] as const

export function ProductGridShowcase() {
  return (
    <div className="grid w-full grid-cols-3 gap-3">
      {products.map((name) => (
        <div key={name} className="flex flex-col gap-2">
          <MediaFrame aspect="square" tint="warm" />
          <p className="text-xs font-medium leading-snug">{name}</p>
          <p className="text-xs text-muted-foreground tabular-nums">$24–$68</p>
        </div>
      ))}
    </div>
  )
}
