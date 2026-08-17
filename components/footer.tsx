import Link from "next/link"
import { Ghost, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/80 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <Ghost className="h-5 w-5 text-parchment/70" />
          <span className="font-spooky text-xl text-foreground">
            小影的暗室
          </span>
        </div>

        <p className="font-typewriter text-xs leading-relaxed text-muted">
          于薄雾与烛光之间冲洗。
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="text-muted transition-colors hover:text-pumpkin"
            aria-label="联系信息"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center font-typewriter text-[11px] text-muted/50">
        © 2026
      </p>
    </footer>
  )
}
