import type { CategoryEntry } from "@/components/preview/showcases/categories/auth"

import { ArticlePreviewShowcase } from "./article-preview-showcase"
import { AuthorBioShowcase } from "./author-bio-showcase"
import { ChapterNavShowcase } from "./chapter-nav-showcase"
import { DraftReviewShowcase } from "./draft-review-showcase"
import { EditorialMetricsShowcase } from "./editorial-metrics-showcase"
import { NewsletterEditionShowcase } from "./newsletter-edition-showcase"
import { PodcastEpisodeShowcase } from "./podcast-episode-showcase"
import { PublishScheduleShowcase } from "./publish-schedule-showcase"
import { PullQuoteShowcase } from "./pull-quote-showcase"
import { ReadingListShowcase } from "./reading-list-showcase"
import { RelatedStoriesShowcase } from "./related-stories-showcase"
import { TableOfContentsShowcase } from "./table-of-contents-showcase"

export const EDITORIAL_CATEGORY_ENTRIES: CategoryEntry[] = [
  { id: "article-preview", component: ArticlePreviewShowcase },
  { id: "reading-list", component: ReadingListShowcase },
  { id: "author-bio", component: AuthorBioShowcase },
  { id: "publish-schedule", component: PublishScheduleShowcase },
  { id: "newsletter-edition", component: NewsletterEditionShowcase },
  { id: "table-of-contents", component: TableOfContentsShowcase },
  { id: "pull-quote", component: PullQuoteShowcase },
  { id: "related-stories", component: RelatedStoriesShowcase },
  { id: "podcast-episode", component: PodcastEpisodeShowcase },
  { id: "chapter-nav", component: ChapterNavShowcase },
  { id: "editorial-metrics", component: EditorialMetricsShowcase },
  { id: "draft-review", component: DraftReviewShowcase },
]
