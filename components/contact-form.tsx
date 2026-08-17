"use client"

import { useState } from "react"
import { Send, Check } from "lucide-react"

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    // No backend yet — this simply acknowledges the note locally.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-witch/60 bg-card px-6 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pumpkin text-pumpkin">
          <Check className="h-7 w-7" />
        </div>
        <h2 className="font-spooky text-3xl text-foreground text-glow-pumpkin">
          便条已收下
        </h2>
        <p className="max-w-sm font-typewriter text-sm leading-relaxed text-parchment/75">
          我已经把你的字条塞进门缝。等雾散一点，我会回你。
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false)
            setName("")
            setMessage("")
          }}
          className="mt-2 font-typewriter text-xs text-muted underline decoration-dotted underline-offset-4 hover:text-pumpkin"
        >
          再留一张
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-typewriter text-xs uppercase tracking-widest text-muted"
        >
          你的名字（或化名）
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="夜里路过的人"
          className="rounded border border-border bg-background px-4 py-3 font-typewriter text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-pumpkin"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-typewriter text-xs uppercase tracking-widest text-muted"
        >
          想说的话
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="把你想说的，轻轻写在这里……"
          className="resize-none rounded border border-border bg-background px-4 py-3 font-typewriter text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-pumpkin"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-pumpkin px-6 py-3 font-typewriter text-sm text-background transition-transform hover:scale-[1.02]"
      >
        <Send className="h-4 w-4" />
        塞进门缝
      </button>
    </form>
  )
}
