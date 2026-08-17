"use client"

import { useEffect, useState } from "react"

/**
 * A soft candle-glow halo that follows the pointer.
 * Disabled on touch / coarse pointers to avoid getting in the way.
 */
export function CandleCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const fine = window.matchMedia("(pointer: fine)").matches
    setEnabled(fine)
    if (!fine) return

    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-30 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, rgba(255,117,24,0.14) 0%, rgba(252,211,77,0.06) 40%, transparent 70%)",
      }}
    />
  )
}
