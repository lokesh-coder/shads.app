import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const options = [
  { id: "a", label: "Bar chart" },
  { id: "b", label: "Scatter plot" },
  { id: "c", label: "Histogram" },
] as const

export function QuizBlockShowcase() {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-heading text-base font-semibold">
        Which chart best compares two continuous variables?
      </p>
      <RadioGroup defaultValue="b" className="gap-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <RadioGroupItem value={option.id} id={`quiz-${option.id}`} />
            <Label htmlFor={`quiz-${option.id}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button size="sm" className="w-fit">
        Check answer
      </Button>
    </div>
  )
}
