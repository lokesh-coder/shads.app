import { EyeOffIcon, KeyIcon, PlusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
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

const variables = [
  { key: "DATABASE_URL", value: "postgres://••••••••", secret: true },
  { key: "REDIS_HOST", value: "cache.internal.acme.dev", secret: false },
  { key: "API_SECRET_KEY", value: "sk_••••••••••••", secret: true },
]

export function EnvVariablesShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Environment variables</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm">
            <PlusIcon data-icon="inline-start" />
            Add
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-1">
          {variables.map((v) => (
            <ListRow
              key={v.key}
              leading={<IconTile icon={KeyIcon} />}
              title={v.key}
              description={v.value}
              trailing={
                v.secret ? (
                  <Badge variant="outline" className="gap-1 text-xs">
                    <EyeOffIcon className="size-3" />
                    Secret
                  </Badge>
                ) : null
              }
              className="rounded-lg border border-border/70 bg-muted/20 px-3 font-mono"
            />
          ))}
          <p className="flex items-center gap-1.5 pt-1 text-xs text-muted-foreground">
            <KeyIcon className="size-3" />
            Production environment · 3 variables
          </p>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
