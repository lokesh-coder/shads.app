import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NEUTRAL_STEPS, type NeutralStep } from "@/lib/theme-config"

type NeutralStepSelectProps = {
  value: NeutralStep
  onChange: (step: NeutralStep) => void
  className?: string
}

export function NeutralStepSelect({
  value,
  onChange,
  className,
}: NeutralStepSelectProps) {
  return (
    <Select
      value={String(value)}
      onValueChange={(next) => {
        if (!next) return
        onChange(Number(next) as NeutralStep)
      }}
    >
      <SelectTrigger className={className ?? "w-full"}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {NEUTRAL_STEPS.map((step) => (
          <SelectItem key={step} value={String(step)}>
            {step}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
