import Link from "next/link"
import { Ghost, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/80 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <Ghost className="h-5 w-5 text-parchment/70" />
          <span className="font-spooky text-xl text-foreground">
            夜行者的暗室
          </span>
        </div>

        <p className="font-typewriter text-xs leading-relaxed text-muted">
          于薄雾与烛光之间冲洗。摄影与诗，皆为夜里的私语。
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="text-muted transition-colors hover:text-pumpkin"
            aria-label="邮件联系"
          >
            <Mail className="h-5 w-5" />
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-pumpkin"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-typewriter text-[11px] text-muted/50">
        © {new Date().getFullYear()} · 一切幽灵均属虚构，如有雷同纯属巧合。
      </p>
    </footer>
  )
}
