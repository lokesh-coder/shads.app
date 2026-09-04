import { FileIcon, FolderIcon, HistoryIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  InsetPanel,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function TabsShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Project brief</CardTitle>
        <CardDescription>Spring launch campaign · Due Mar 15</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <InsetPanel className="mt-3">
                <p className="text-sm text-muted-foreground">
                  Launch landing page with updated pricing and onboarding flow.
                </p>
              </InsetPanel>
            </TabsContent>
            <TabsContent value="files">
              <InsetPanel className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <FolderIcon className="size-4 text-muted-foreground" />
                  <span>12 assets</span>
                  <span className="text-xs text-muted-foreground">
                    · last updated 2h ago
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileIcon className="size-4 text-muted-foreground" />
                  <span>hero-banner.png</span>
                </div>
              </InsetPanel>
            </TabsContent>
            <TabsContent value="activity">
              <InsetPanel className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <HistoryIcon className="size-4 text-muted-foreground" />
                  <span>3 comments</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  1 approval pending from design lead
                </p>
              </InsetPanel>
            </TabsContent>
          </Tabs>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
