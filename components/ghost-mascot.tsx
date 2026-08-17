"use client"

import { motion } from "framer-motion"
import { Ghost } from "lucide-react"

/**
 * A friendly floating ghost that drifts up and down.
 * A small speech line appears on hover.
 */
export function GhostMascot({
  message = "别怕……只是路过。",
}: {
  message?: string
}) {
  return (
    <motion.div
      className="group pointer-events-auto fixed bottom-6 right-6 z-30 hidden select-none flex-col items-end gap-2 md:flex"
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap rounded-lg border border-border bg-card px-0 py-1 font-typewriter text-xs text-parchment opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:px-3 group-hover:opacity-100">
        {message}
      </span>
      <Ghost
        aria-hidden="true"
        className="h-10 w-10 text-parchment/80 drop-shadow-[0_0_12px_rgba(245,245,245,0.35)] transition-colors group-hover:text-pumpkin"
      />
    </motion.div>
  )
}
