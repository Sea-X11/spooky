import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { photos } from "@/lib/photos"

export const metadata: Metadata = {
  title: "暗房 · 摄影作品",
  description: "Rust lake 湖畔、雾中墓园与旧宅的哥特胶片摄影集。",
}

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        subtitle="Gallery"
        title="暗房"
        intro="所有照片都在这间暗房里冲洗。点开任意一张，走近看看雾里藏着什么。"
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <GalleryGrid photos={photos} />
      </section>
    </div>
  )
}
