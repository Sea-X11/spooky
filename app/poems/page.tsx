import type { Metadata } from "next"
import { Feather } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { poems } from "@/lib/poems"

export const metadata: Metadata = {
  title: "阁楼手记 · Poems",
  description: "唐泽影的个人诗集。",
}

export default function PoemsPage() {
  return (
    <div>
      <PageHeader
        subtitle="Poems"
        title="阁楼手记"
        intro="夜里的诗。"
      />

      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="flex flex-col gap-12">
          {poems.map((poem) => (
            <article
              key={poem.title}
              className="relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-witch/60"
            >
              <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-border/60 pb-4">
                <h2 className="flex items-center gap-2 font-spooky text-3xl text-foreground">
                  <Feather className="h-5 w-5 text-pumpkin" />
                  {poem.title}
                </h2>
                {poem.date && (
                  <span className="shrink-0 font-typewriter text-xs text-muted">
                    {poem.date}
                  </span>
                )}
              </div>
              <div className="font-typewriter text-[15px] leading-loose text-parchment/85">
                {poem.lines.map((line, i) =>
                  line === "" ? (
                    <div key={i} className="h-4" aria-hidden="true" />
                  ) : (
                    <p key={i} className="text-pretty">
                      {line}
                    </p>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
