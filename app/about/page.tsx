import type { Metadata } from "next"
import Image from "next/image"
import { Camera, Feather, Moon } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "宅中人 · 关于",
  description: "关于这座旧宅的居住者：一个用胶片和诗记录夜晚的人。",
}

const facts = [
  { icon: Camera, label: "偏爱器材", value: "老式胶片机 · 长曝光" },
  { icon: Moon, label: "出没时间", value: "日落之后至黎明" },
  { icon: Feather, label: "写作习惯", value: "只在停电和起雾的夜里" },
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        subtitle="About"
        title="宅中人"
        intro="有人问，是谁住在这座常年薄雾的宅子里。那就趁灯还亮着，简单说几句。"
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-[2fr_3fr] md:items-start">
        <div className="relative overflow-hidden rounded-lg border border-border">
          <Image
            src="/photos/portrait.png"
            alt="雾夜中手持老式相机的人影，被暖橙灯光从背后照亮，看不清面容"
            width={600}
            height={800}
            className="h-auto w-full object-cover opacity-85"
          />
        </div>

        <div className="font-typewriter text-[15px] leading-loose text-parchment/85">
          <p>
            我是这座宅子里少数还会呼吸的住客。白天睡觉，夜里出门，靠一台旧胶片机和一支快没水的钢笔过活。
          </p>
          <p className="mt-4">
            Rust
            lake 是我拍得最多的地方——那片锈色的湖水，雾起时像会把人轻轻吞掉。我喜欢在别人都回家之后，独自守着它，等一束不该出现的光。
          </p>
          <p className="mt-4">
            照片拍完，情绪没处放，就写成诗，锁进阁楼的抽屉。这个网站，就是我把暗房和阁楼一起搬到了你面前。慢慢看，别开灯。
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
