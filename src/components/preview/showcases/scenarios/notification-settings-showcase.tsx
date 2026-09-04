import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const channels = [
  { id: "email", label: "Email", desc: "Digests and account updates", on: true },
  { id: "push", label: "Push", desc: "Real-time on mobile", on: true },
  { id: "slack", label: "Slack", desc: "Channel notifications", on: false },
  { id: "sms", label: "SMS", desc: "Critical alerts only", on: false },
]

export function NotificationSettingsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose how you want to be notified</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          {channels.map((channel, i) => (
            <div key={channel.id}>
              {i > 0 ? <Separator className="my-1" /> : null}
              <ListRow
                title={channel.label}
                description={channel.desc}
                trailing={
                  <Switch id={`sc-notif-${channel.id}`} defaultChecked={channel.on} />
                }
                className="px-0"
              />
            </div>
          ))}
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
