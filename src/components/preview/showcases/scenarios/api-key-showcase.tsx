import { CopyIcon, EyeIcon, EyeOffIcon, KeyIcon } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Eyebrow,
  IconTile,
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function ApiKeyShowcase() {
  const [visible, setVisible] = useState(false)
  const key = "sk_live_demo_preview_only_not_a_real_key"

  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <div className="flex items-center gap-3">
          <IconTile icon={KeyIcon} status="success" />
          <CardTitle>Production key</CardTitle>
        </div>
        <CardAction>
          <Badge variant="secondary">Active</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <InsetPanel className="p-2">
            <div className="flex gap-2">
              <Input
                readOnly
                value={visible ? key : "sk_live_••••••••••••••••••••"}
                className="border-0 bg-transparent font-mono text-xs shadow-none"
              />
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => setVisible((v) => !v)}
              >
                {visible ? <EyeOffIcon /> : <EyeIcon />}
              </Button>
              <Button variant="outline" size="icon-sm">
                <CopyIcon />
              </Button>
            </div>
          </InsetPanel>
          <Eyebrow className="normal-case">
            Created Mar 1, 2026 · Last used 2 hours ago
          </Eyebrow>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <Button variant="outline" className="w-full">
          Generate new key
        </Button>
      </CardFooter>
    </Card>
  )
}
