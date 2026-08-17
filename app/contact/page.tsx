import type { Metadata } from "next"
import { Mail, Instagram, MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "留一张便条 · 联系",
  description: "给夜行者的暗室留言，或找到我出没的其他角落。",
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        subtitle="Contact"
        title="留一张便条"
        intro="门是虚掩的。想说什么，写下来塞进门缝就好；我总会在某个雾夜读到。"
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[3fr_2fr] md:items-start">
        <ContactForm />

        <aside className="flex flex-col gap-4">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-pumpkin/60"
          >
            <Mail className="h-5 w-5 shrink-0 text-pumpkin" />
            <span className="flex flex-col">
              <span className="font-typewriter text-xs text-muted">邮件</span>
              <span className="font-typewriter text-sm text-foreground">
                hello@example.com
              </span>
            </span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-pumpkin/60"
          >
            <Instagram className="h-5 w-5 shrink-0 text-pumpkin" />
            <span className="flex flex-col">
              <span className="font-typewriter text-xs text-muted">
                Instagram
              </span>
              <span className="font-typewriter text-sm text-foreground">
                @night_darkroom
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4">
            <MapPin className="h-5 w-5 shrink-0 text-pumpkin" />
            <span className="flex flex-col">
              <span className="font-typewriter text-xs text-muted">出没地</span>
              <span className="font-typewriter text-sm text-foreground">
                Rust Lake 湖畔 · 那座亮着灯的旧宅
              </span>
            </span>
          </div>
        </aside>
      </section>
    </div>
  )
}
