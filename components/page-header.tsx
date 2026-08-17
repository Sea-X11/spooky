import { CobwebCorner } from "./cobweb-corner"

export function PageHeader({
  title,
  subtitle,
  intro,
}: {
  title: string
  subtitle: string
  intro: string
}) {
  return (
    <header className="relative border-b border-border/60 px-5 py-16 text-center">
      <CobwebCorner position="top-right" />
      <p className="font-typewriter text-xs uppercase tracking-[0.35em] text-muted">
        {subtitle}
      </p>
      <h1 className="mt-3 font-spooky text-5xl text-foreground text-glow-pumpkin sm:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-pretty font-typewriter text-sm leading-relaxed text-parchment/75 sm:text-base">
        {intro}
      </p>
    </header>
  )
}
