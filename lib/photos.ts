export type Photo = {
  src: string
  alt: string
  title: string
  location: string
  year: string
}

/**
 * Photography collection. Replace `src` with your own images
 * (drop files into /public/photos) and edit the captions.
 */
export const photos: Photo[] = [
  {
    src: "/photos/photo-1.png",
    alt: "夜色中的破败维多利亚宅邸，一扇窗透出暖橙烛光",
    title: "还亮着灯的房子",
    location: "Rust Lake · 北岸",
    year: "2024",
  },
  {
    src: "/photos/photo-2.png",
    alt: "黎明薄雾中的墓园，倾斜的墓碑与铁栅栏上的乌鸦",
    title: "黎明前的访客",
    location: "旧镇墓园",
    year: "2023",
  },
  {
    src: "/photos/photo-4.png",
    alt: "雾中山丘上一棵孤零零的枯树，紫色夜空下的满月",
    title: "只剩下它在等",
    location: "西岭",
    year: "2024",
  },
  {
    src: "/photos/photo-5.png",
    alt: "雾中静湖里半沉的旧木船，枯萎的芦苇",
    title: "没人再划它了",
    location: "Rust Lake · 浅湾",
    year: "2022",
  },
  {
    src: "/photos/photo-3.png",
    alt: "古旧木桌上融化的蜡烛与干枯玫瑰，布满蛛网",
    title: "谁的晚餐",
    location: "阁楼",
    year: "2023",
  },
  {
    src: "/photos/photo-6.png",
    alt: "废弃房间里盖着白布的古董椅，月光透过破窗",
    title: "请勿入座",
    location: "东厢房",
    year: "2024",
  },
]
