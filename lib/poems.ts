export type Poem = {
  title: string
  date: string
  lines: string[]
}

export const poems: Poem[] = [
  {
    title: "签名",
    date: "",
    lines: [
      "我想写诗，可张开嘴只有河水的声音",
    ],
  },
  {
    title: "我的生态缸",
    date: "2026年08月03日",
    lines: [
      "我的生态缸",
      "目前只存活了一只螺 一条虾",
      "之前是两条鱼 四只螺 六条虾 8根草",
      "也可能是太久没喂",
      "反正被螺吃了",
      "螺也会死 死于壳的慢性腐蚀",
      "",
      "其实我蛮不理解的 在无人注视的情况下 螺会在底部排水槽大量繁殖",
      "放在“观察室”则会一个个化掉",
    ],
  },
]
