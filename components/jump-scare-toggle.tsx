"use client"

import { Skull, SkullIcon } from "lucide-react"
import { useJumpScare } from "./jump-scare-context"

/**
 * A tiny control letting visitors turn the jump scare on or off.
 */
export function JumpScareToggle({ className = "" }: { className?: string }) {
  const { enabled, toggle } = useJumpScare()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      title={enabled ? "关闭惊吓" : "开启惊吓"}
      className={`inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-typewriter text-xs transition-colors hover:border-pumpkin hover:text-pumpkin ${
        enabled ? "text-pumpkin" : "text-muted"
      } ${className}`}
    >
      {enabled ? (
        <Skull className="h-4 w-4" />
      ) : (
        <SkullIcon className="h-4 w-4 opacity-50" />
      )}
      <span>{enabled ? "惊吓：开" : "惊吓：关"}</span>
    </button>
  )
}
