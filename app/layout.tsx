import type { Metadata, Viewport } from "next"
import {
  Inter,
  Creepster,
  Special_Elite,
  Ma_Shan_Zheng,
  Noto_Serif_SC,
} from "next/font/google"
import "./globals.css"
import { Layout } from "@/components/layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
  display: "swap",
})

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap",
})

// Chinese display font (brush calligraphy) — carries the gothic mood for CJK.
const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ma-shan-zheng",
  display: "swap",
})

// Chinese serif for readable body / typewriter text.
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  display: "swap",
})

export const metadata: Metadata = {
  title: "唐泽影 · 摄影与诗",
  description:
    "推开这扇门，走进薄雾里的旧宅。墙上是锈湖的照片，抽屉里锁着夜里的诗。",
  keywords: ["唐泽影", "摄影", "诗歌", "暗房", "阁楼手记"],
}

export const viewport: Viewport = {
  themeColor: "#0b0b0e",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh"
      className={`${inter.variable} ${creepster.variable} ${specialElite.variable} ${maShanZheng.variable} ${notoSerifSC.variable} bg-background`}
    >
      <body className="fog-vignette">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
