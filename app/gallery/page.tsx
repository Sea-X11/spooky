import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { photos } from "@/lib/photos"

export const metadata: Metadata = {
  title: "暗房 · Gallery",
  description: "唐泽影的个人摄影集。",
}

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        subtitle="Gallery"
        title="暗房"
        intro="锈湖的照片。"
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <GalleryGrid photos={photos} />
      </section>
    </div>
  )
}
