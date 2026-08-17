"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Camera, Feather, DoorOpen, ArrowRight } from "lucide-react"
import { SwingingLantern } from "@/components/swinging-lantern"
import { CobwebCorner } from "@/components/cobweb-corner"
import { useJumpScare } from "@/components/jump-scare-context"

export default function HomePage() {
  const { trigger, enabled } = useJumpScare()

  return (
    <div className="relative overflow-hidden">
      <CobwebCorner position="top-left" />
      <CobwebCorner position="top-right" />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center">
        {/* Background photograph */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/photos/hero-lake.png"
            alt="薄雾笼罩的锈色湖面，枯树与孤独的木栈道没入雾中"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>

        <div className="mb-6 flex justify-center gap-16">
          <SwingingLantern />
          <SwingingLantern delay={1.2} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-spooky text-5xl leading-tight text-foreground text-glow-pumpkin sm:text-6xl md:text-7xl"
        >
          欢迎来到夜行者的暗室
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-pretty font-typewriter text-base leading-relaxed text-parchment/80 sm:text-lg"
        >
          推开这扇门，你会走进一座常年薄雾的旧宅。墙上挂着我在 rust
          lake 湖畔拍下的照片，抽屉里塞满深夜写下的诗。请慢慢看，别惊动了住在这里的东西。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-pumpkin px-6 py-3 font-typewriter text-sm text-background transition-transform hover:scale-105"
          >
            <Camera className="h-4 w-4" />
            走进暗房看照片
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/poems"
            className="inline-flex items-center gap-2 rounded-full border border-witch px-6 py-3 font-typewriter text-sm text-parchment transition-colors hover:bg-witch/20"
          >
            <Feather className="h-4 w-4" />
            读一首阁楼里的诗
          </Link>
        </motion.div>

        {/* The forbidden door — the only jump scare on the site */}
        <motion.button
          type="button"
          onClick={trigger}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 inline-flex items-center gap-2 font-typewriter text-xs text-muted underline decoration-dotted underline-offset-4 transition-colors hover:text-blood"
        >
          <DoorOpen className="h-4 w-4" />
          {enabled ? "千万别推这扇门……" : "这扇门已经被封住了"}
        </motion.button>
      </section>

      {/* Two rooms */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <RoomCard
            href="/gallery"
            img="/photos/photo-1.png"
            alt="夜色中的破败维多利亚宅邸，一扇窗透出暖橙烛光"
            title="暗房"
            subtitle="Gallery"
            desc="锈湖、墓园、雾中的旧宅——我用胶片留下的每一帧夜晚。"
            icon={<Camera className="h-5 w-5" />}
          />
          <RoomCard
            href="/poems"
            img="/photos/photo-3.png"
            alt="古旧木桌上融化的蜡烛与干枯玫瑰"
            title="阁楼手记"
            subtitle="Poems"
            desc="那些不敢在白天说出口的句子，都锁在阁楼的抽屉里。"
            icon={<Feather className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}

function RoomCard({
  href,
  img,
  alt,
  title,
  subtitle,
  desc,
  icon,
}: {
  href: string
  img: string
  alt: string
  title: string
  subtitle: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-pumpkin/60"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={img || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>
      <div className="relative p-6">
        <div className="flex items-center gap-3">
          <span className="text-pumpkin">{icon}</span>
          <h2 className="font-spooky text-3xl text-foreground group-hover:text-glow-pumpkin">
            {title}
          </h2>
          <span className="font-typewriter text-xs text-muted">{subtitle}</span>
        </div>
        <p className="mt-3 font-typewriter text-sm leading-relaxed text-parchment/70">
          {desc}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 font-typewriter text-xs text-pumpkin">
          进入
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
