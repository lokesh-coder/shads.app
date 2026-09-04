import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BRAND_STEPS, type BrandStep } from "@/lib/theme-config"

type BrandStepSelectProps = {
  value: BrandStep
  onChange: (step: BrandStep) => void
  className?: string
}

export function BrandStepSelect({
  value,
  onChange,
  className,
}: BrandStepSelectProps) {
  return (
    <Select
      value={String(value)}
      onValueChange={(next) => {
        if (!next) return
        onChange(Number(next) as BrandStep)
      }}
    >
      <SelectTrigger className={className ?? "w-full"}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {BRAND_STEPS.map((step) => (
          <SelectItem key={step} value={String(step)}>
            {step}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
