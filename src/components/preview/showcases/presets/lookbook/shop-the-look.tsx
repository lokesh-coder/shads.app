import { MediaFrame } from "@/components/preview/showcases/showcase-ui"

const items = ["Coat", "Trousers", "Boot"] as const

export function ShopTheLookShowcase() {
  return (
    <div className="flex w-full flex-col gap-3">
      <MediaFrame aspect="wide" tint="editorial" />
      <p className="font-heading text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        Shop the look
      </p>
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <div key={item} className="flex flex-col gap-2">
            <MediaFrame aspect="square" tint="default" />
            <p className="text-center text-xs font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
