export type Poem = {
  title: string
  date: string
  lines: string[]
}

/**
 * Poetry collection. Add or edit entries freely — each poem is just
 * a title, a date, and an array of lines.
 */
export const poems: Poem[] = [
  {
    title: "锈湖夜话",
    date: "十月十三日 · 子夜",
    lines: [
      "湖水生了锈，像一封没寄出的信，",
      "在岸边慢慢氧化成褐色的沉默。",
      "我把相机对准雾，",
      "雾却对准了我。",
      "",
      "有人在水下点了盏灯，",
      "我假装没看见，",
      "按下快门，",
      "把整座夜晚收进暗盒。",
    ],
  },
  {
    title: "给阁楼里的那位",
    date: "十月三日 · 雨",
    lines: [
      "你住在我头顶的木板之上，",
      "每逢下雨就来回踱步。",
      "我们从未见面，",
      "却共享同一盏摇晃的灯。",
      "",
      "今晚我留了一杯温牛奶在楼梯口，",
      "如果你愿意——",
      "就当它是一句晚安。",
    ],
  },
  {
    title: "枯树的自白",
    date: "九月廿七日 · 起雾",
    lines: [
      "我不是死了，",
      "只是把所有叶子还给了风。",
      "月亮把我拓在山坡上，",
      "像一道旧伤，",
      "又像一句没写完的诗。",
    ],
  },
  {
    title: "请勿入座",
    date: "八月三十一日 · 无月",
    lines: [
      "那把椅子盖着白布，",
      "已经空了很多年。",
      "可每次我经过，",
      "布面都微微凹陷，",
      "仿佛有人刚刚起身，",
      "又仿佛，正等我坐下。",
    ],
  },
]
