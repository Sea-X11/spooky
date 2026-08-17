"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type JumpScareContextValue = {
  /** Whether the jump scare feature is enabled (user preference). */
  enabled: boolean
  toggle: () => void
  /** Whether a scare is currently being shown. */
  active: boolean
  /** Trigger a scare (respects `enabled`). */
  trigger: () => void
  dismiss: () => void
}

const JumpScareContext = createContext<JumpScareContextValue | null>(null)

const STORAGE_KEY = "haunted:jumpscare"

export function JumpScareProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true)
  const [active, setActive] = useState(false)

  // Restore the user's preference.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved !== null) setEnabled(saved === "on")
  }, [])

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off")
      if (!next) setActive(false)
      return next
    })
  }, [])

  const trigger = useCallback(() => {
    setEnabled((cur) => {
      if (cur) setActive(true)
      return cur
    })
  }, [])

  const dismiss = useCallback(() => setActive(false), [])

  const value = useMemo(
    () => ({ enabled, toggle, active, trigger, dismiss }),
    [enabled, toggle, active, trigger, dismiss],
  )

  return (
    <JumpScareContext.Provider value={value}>
      {children}
    </JumpScareContext.Provider>
  )
}

export function useJumpScare() {
  const ctx = useContext(JumpScareContext)
  if (!ctx) {
    throw new Error("useJumpScare must be used within a JumpScareProvider")
  }
  return ctx
}
