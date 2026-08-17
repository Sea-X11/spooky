import type { Metadata } from "next"
import { MapPin, User } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Contact · 唐泽影",
  description: "唐泽影的联系信息。",
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        subtitle="Contact"
        title="唐泽影"
        intro="上海，普陀。"
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4">
            <User className="h-5 w-5 shrink-0 text-pumpkin" />
            <span className="flex flex-col">
              <span className="font-typewriter text-xs text-muted">姓名</span>
              <span className="font-typewriter text-sm text-foreground">
                唐泽影
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4">
            <MapPin className="h-5 w-5 shrink-0 text-pumpkin" />
            <span className="flex flex-col">
              <span className="font-typewriter text-xs text-muted">出没地</span>
              <span className="font-typewriter text-sm text-foreground">
                上海，普陀
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
