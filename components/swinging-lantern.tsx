"use client"

import { motion } from "framer-motion"
import { Flame } from "lucide-react"

/**
 * A lantern hanging from a thin cord, gently swinging.
 * Used as a decorative hanging accent in hero areas.
 */
export function SwingingLantern({ delay = 0 }: { delay?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex flex-col items-center"
    >
      <div className="h-16 w-[2px] origin-top bg-border" />
      <motion.div
        className="-mt-1 flex origin-top flex-col items-center"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "easeInOut",
          delay,
        }}
      >
        <div className="h-2 w-4 rounded-t-sm border-2 border-b-0 border-witch/70" />
        <div className="flex h-12 w-10 items-center justify-center rounded-sm border-2 border-witch/70 bg-black/40 backdrop-blur-sm">
          <Flame className="h-5 w-5 text-pumpkin text-glow-pumpkin animate-flicker" />
        </div>
        <div className="h-1 w-6 rounded-b-sm bg-witch/70" />
      </motion.div>
    </div>
  )
}
