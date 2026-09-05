import type { PrimitiveSpecimenEntry } from "@/components/preview/primitive-specimens"
import { PRIMITIVE_SPECIMEN_ENTRIES } from "@/components/preview/primitive-specimens"
import { isOverlayPrimitive } from "@/lib/preview-gallery-pages"
import { cn } from "@/lib/utils"

function PrimitiveCell({ entry }: { entry: PrimitiveSpecimenEntry }) {
  const Block = entry.component
  const overlay = isOverlayPrimitive(entry.id)

  return (
    <div
      data-share-item={entry.id}
      className={cn(
        "flex min-h-[240px] items-center justify-center border border-dashed border-border/50 p-4",
        "transition-[background-color,border-color] duration-150",
        "hover:border-primary/10 hover:bg-primary/[0.01]",
        overlay ? "overflow-visible" : "overflow-hidden",
      )}
    >
      <Block />
    </div>
  )
}

export function PreviewPrimitivesGrid() {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-7xl",
        "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
      )}
    >
      {PRIMITIVE_SPECIMEN_ENTRIES.map((entry) => (
        <PrimitiveCell key={entry.id} entry={entry} />
      ))}
    </div>
  )
}
