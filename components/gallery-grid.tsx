"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Photo } from "@/lib/photos"

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close, prev, next])

  return (
    <>
      {/* Masonry-ish grid */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg border border-border text-left transition-colors hover:border-pumpkin/60"
          >
            <div className="relative">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={800}
                height={1000}
                className="h-auto w-full opacity-85 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-spooky text-2xl text-foreground text-glow-pumpkin">
                  {photo.title}
                </p>
                <p className="font-typewriter text-xs text-parchment/80">
                  {photo.location} · {photo.year}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={photos[index].title}
          >
            <button
              type="button"
              onClick={close}
              aria-label="关闭"
              className="absolute right-5 top-5 text-muted transition-colors hover:text-pumpkin"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="上一张"
              className="absolute left-3 text-muted transition-colors hover:text-pumpkin sm:left-8"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="下一张"
              className="absolute right-3 text-muted transition-colors hover:text-pumpkin sm:right-8"
            >
              <ChevronRight className="h-9 w-9" />
            </button>

            <motion.figure
              key={photos[index].src}
              className="flex max-h-[85vh] max-w-3xl flex-col items-center gap-4"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[index].src || "/placeholder.svg"}
                alt={photos[index].alt}
                width={1200}
                height={1500}
                className="max-h-[72vh] w-auto rounded-lg border border-border object-contain"
              />
              <figcaption className="text-center">
                <p className="font-spooky text-3xl text-foreground text-glow-pumpkin">
                  {photos[index].title}
                </p>
                <p className="font-typewriter text-xs text-parchment/70">
                  {photos[index].location} · {photos[index].year}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
