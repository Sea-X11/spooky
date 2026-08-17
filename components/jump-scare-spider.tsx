"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Bug } from "lucide-react"
import { useEffect } from "react"
import { useJumpScare } from "./jump-scare-context"

/**
 * The classic dropping-spider jump scare. Only renders while `active`.
 * Auto-dismisses after a short beat; clicking anywhere also dismisses.
 */
export function JumpScareSpider() {
  const { active, dismiss } = useJumpScare()

  useEffect(() => {
    if (!active) return
    const t = setTimeout(dismiss, 1600)
    return () => clearTimeout(t)
  }, [active, dismiss])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center"
          onClick={dismiss}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
        >
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ y: "-100%" }}
            animate={{ y: ["-100%", "60vh", "45vh", "58vh"] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="h-[45vh] w-[2px] bg-parchment/40" />
            <Bug
              aria-hidden="true"
              className="-mt-2 h-24 w-24 text-foreground drop-shadow-[0_0_16px_rgba(255,117,24,0.6)]"
            />
            <span className="mt-4 font-spooky text-3xl text-pumpkin text-glow-pumpkin">
              Boo!
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
