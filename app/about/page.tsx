import type { Metadata } from "next"
import Image from "next/image"
import { Camera, Feather, MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "唐泽影 · 关于",
  description: "关于唐泽影：摄影与诗。",
}

const facts = [
  { icon: MapPin, label: "所在地", value: "上海，普陀" },
  { icon: Camera, label: "暗房", value: "锈湖的照片" },
  { icon: Feather, label: "阁楼手记", value: "夜里的诗" },
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        subtitle="About"
        title="唐泽影"
        intro="这里放着照片和诗。"
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[2fr_3fr] md:items-start">
        <div className="relative overflow-hidden rounded-lg border border-border">
          <Image
            src="/ying_photo/darkroom-04.jpg"
            alt="唐泽影个人摄影作品"
            width={600}
            height={800}
            className="h-auto w-full object-cover opacity-85"
          />
        </div>

        <div className="font-typewriter text-[15px] leading-loose text-parchment/85">
          <p>
            我是唐泽影，在上海普陀。这里是一间小小的暗室，墙上挂着照片，抽屉里放着夜里写下的句子。
          </p>
          <p className="mt-4">
            暗房里是锈湖的照片，阁楼手记里是诗。请慢慢看，不必急着开灯。
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3"
              >
                <f.icon className="h-5 w-5 shrink-0 text-pumpkin" />
                <span className="w-24 shrink-0 text-xs text-muted">
                  {f.label}
                </span>
                <span className="text-sm text-foreground">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
