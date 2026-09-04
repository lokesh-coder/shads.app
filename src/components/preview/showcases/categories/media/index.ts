import type { CategoryEntry } from "@/components/preview/showcases/categories/auth"

import { AiTagsShowcase } from "./ai-tags-showcase"
import { AlbumMetadataShowcase } from "./album-metadata-showcase"
import { CdnBandwidthShowcase } from "./cdn-bandwidth-showcase"
import { ColorExtractShowcase } from "./color-extract-showcase"
import { CompressionSettingsShowcase } from "./compression-settings-showcase"
import { CropControlsShowcase } from "./crop-controls-showcase"
import { ExportFormatsShowcase } from "./export-formats-showcase"
import { FaceDetectionShowcase } from "./face-detection-showcase"
import { ImageGalleryShowcase } from "./image-gallery-showcase"
import { StorageTierShowcase } from "./storage-tier-showcase"
import { UploadQueueShowcase } from "./upload-queue-showcase"
import { WatermarkSettingsShowcase } from "./watermark-settings-showcase"

export const MEDIA_CATEGORY_ENTRIES: CategoryEntry[] = [
  { id: "image-gallery", component: ImageGalleryShowcase },
  { id: "upload-queue", component: UploadQueueShowcase },
  { id: "compression-settings", component: CompressionSettingsShowcase },
  { id: "cdn-bandwidth", component: CdnBandwidthShowcase },
  { id: "album-metadata", component: AlbumMetadataShowcase },
  { id: "crop-controls", component: CropControlsShowcase },
  { id: "watermark-settings", component: WatermarkSettingsShowcase },
  { id: "ai-tags", component: AiTagsShowcase },
  { id: "storage-tier", component: StorageTierShowcase },
  { id: "face-detection", component: FaceDetectionShowcase },
  { id: "export-formats", component: ExportFormatsShowcase },
  { id: "color-extract", component: ColorExtractShowcase },
]
