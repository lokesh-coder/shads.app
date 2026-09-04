import { CopyIcon, DownloadIcon, ShieldIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const codes = ["8xk2-m4p9", "7wn3-q8r1", "5jt6-h2v4", "9pl1-c7m8"]

export function RecoveryCodesShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle className="flex items-center gap-2">
          <IconTile icon={ShieldIcon} className="border-primary/30" />
          Backup recovery codes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <p className="text-xs text-muted-foreground">
            Save these codes somewhere safe. Each can be used once if you lose
            access to your authenticator.
          </p>
          <InsetPanel className="grid grid-cols-2 gap-2 bg-background/60 font-mono text-xs">
            {codes.map((code) => (
              <span key={code} className="tabular-nums">
                {code}
              </span>
            ))}
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <CopyIcon data-icon="inline-start" />
          Copy
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <DownloadIcon data-icon="inline-start" />
          Download
        </Button>
      </CardFooter>
    </Card>
  )
}
