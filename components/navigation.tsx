"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Moon } from "lucide-react"
import { JumpScareToggle } from "./jump-scare-toggle"

const links = [
  { href: "/", label: "门廊", en: "The Porch" },
  { href: "/gallery", label: "暗房", en: "Gallery" },
  { href: "/poems", label: "阁楼手记", en: "Poems" },
  { href: "/about", label: "宅中人", en: "About" },
  { href: "/contact", label: "留一张便条", en: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Moon className="h-5 w-5 text-pumpkin transition-transform group-hover:rotate-12" />
          <span className="font-spooky text-2xl tracking-wide text-foreground group-hover:text-glow-pumpkin">
            夜行者的暗室
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const activeLink =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-typewriter text-sm transition-colors hover:text-pumpkin ${
                  activeLink
                    ? "text-pumpkin text-glow-pumpkin"
                    : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
          <JumpScareToggle />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map((l) => {
              const activeLink =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded px-2 py-2 font-typewriter text-sm transition-all hover:bg-white/5 hover:pl-4 ${
                    activeLink ? "text-pumpkin" : "text-muted"
                  }`}
                >
                  {l.label}
                  <span className="ml-2 text-xs text-muted/50">{l.en}</span>
                </Link>
              )
            })}
            <div className="px-2 py-2">
              <JumpScareToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
