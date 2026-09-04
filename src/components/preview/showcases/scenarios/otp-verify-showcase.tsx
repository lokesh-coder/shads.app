import { ShieldCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function OtpVerifyShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={`${showcaseHeader.form} text-center`}>
        <IconTile icon={ShieldCheckIcon} className="mx-auto" />
        <CardTitle>Verify code</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <p className="text-center text-sm text-muted-foreground">
            We sent a code to <span className="font-medium text-foreground">••••82</span>
            . Enter it below.
          </p>
          <div className="flex justify-center gap-2">
            {["4", "8", "2", "", "", ""].map((digit, i) => (
              <Input
                key={i}
                className="h-10 w-10 text-center font-mono text-lg tabular-nums"
                maxLength={1}
                defaultValue={digit}
                aria-label={`Digit ${i + 1}`}
              />
            ))}
          </div>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-2 border-t border-border/60 bg-muted/20">
        <Button className="w-full">
          Verify
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Didn't receive it?{" "}
          <button type="button" className="text-primary underline-offset-4 hover:underline">
            Resend code
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
