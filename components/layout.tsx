"use client"

import { Navigation } from "./navigation"
import { FlickeringLights } from "./flickering-lights"
import { GhostMascot } from "./ghost-mascot"
import { CandleCursor } from "./candle-cursor"
import { JumpScareProvider } from "./jump-scare-context"
import { JumpScareSpider } from "./jump-scare-spider"
import { Footer } from "./footer"

/**
 * Global chrome shared by every page: ambient effects, nav, footer,
 * and the jump-scare provider (scares themselves are only triggered
 * from the home page).
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <JumpScareProvider>
      <FlickeringLights />
      <CandleCursor />
      <JumpScareSpider />
      <GhostMascot />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </JumpScareProvider>
  )
}
