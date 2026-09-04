import { FingerprintIcon, ShieldCheckIcon } from "lucide-react"

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
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function PasskeySetupShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle className="flex items-center justify-center gap-2">
          <FingerprintIcon className="size-4 text-primary" />
          Set up a passkey
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <p className="text-center text-xs text-muted-foreground">
            Sign in faster with Face ID, Touch ID, or your device PIN. Passkeys
            can&apos;t be phished or reused.
          </p>
          <ListRow
            leading={<IconTile icon={ShieldCheckIcon} className="border-primary/30" />}
            title="Recommended for your MacBook Pro"
            description="Last used 2 hours ago"
            className="rounded-lg border border-border/70 bg-muted/20 px-3"
          />
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          Create passkey
        </Button>
        <Button variant="ghost" className="w-full">
          Skip for now
        </Button>
      </CardFooter>
    </Card>
  )
}
