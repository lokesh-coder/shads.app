import { Button } from "@/components/ui/button"

const sizes = ["XS", "S", "M", "L", "XL"] as const

export function SizeGuideBlockShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-end justify-between gap-2">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.14em]">
          Select size
        </p>
        <button
          type="button"
          className="text-xs text-muted-foreground underline underline-offset-4"
        >
          Size guide
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size, index) => (
          <Button
            key={size}
            variant={index === 2 ? "default" : "outline"}
            size="sm"
            className="h-10 rounded-none font-mono text-xs"
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  )
}
