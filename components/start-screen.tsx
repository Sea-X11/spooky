"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

const STORAGE_KEY = "xiaoying-start-screen-seen"

function buildGoldenSpiral() {
  const phi = (1 + Math.sqrt(5)) / 2
  const points: string[] = []

  for (let i = 0; i <= 220; i += 1) {
    const theta = -0.7 + (i / 220) * Math.PI * 5.4
    const radius = 4.8 * Math.pow(phi, theta / (Math.PI / 2))
    const x = 58 + Math.cos(theta) * radius
    const y = 50 + Math.sin(theta) * radius
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }

  return points.join(" ")
}

export function StartScreen() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const spiralPath = useMemo(() => buildGoldenSpiral(), [])
  const gridLines = useMemo(
    () => Array.from({ length: 15 }, (_, i) => i * 7),
    [],
  )

  useEffect(() => {
    if (shouldReduceMotion) return
    if (window.sessionStorage.getItem(STORAGE_KEY) === "true") return

    setVisible(true)
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "true")
      setVisible(false)
    }, 3900)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.sessionStorage.setItem(STORAGE_KEY, "true")
        setVisible(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [shouldReduceMotion])

  function dismiss() {
    window.sessionStorage.setItem(STORAGE_KEY, "true")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="关闭开始动画"
          className="fixed inset-0 z-[80] cursor-crosshair overflow-hidden bg-[#03101d] text-left"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={dismiss}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.16 }}
            animate={{ scale: [1.16, 0.94, 1.04] }}
            transition={{
              duration: 3.7,
              times: [0, 0.62, 1],
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,rgba(152,211,255,0.18),transparent_24%),linear-gradient(135deg,#061d32_0%,#020711_48%,#01040a_100%)]" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(190,225,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(190,225,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(0deg,transparent_0,transparent_5px,rgba(255,255,255,0.08)_6px),repeating-linear-gradient(90deg,transparent_0,transparent_11px,rgba(255,255,255,0.04)_12px)]" />
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(178,224,255,0.18),transparent)] blur-sm"
              initial={{ x: "-60%", opacity: 0 }}
              animate={{
                x: ["-60%", "65%", "12%"],
                opacity: [0, 0.75, 0.2],
              }}
              transition={{ duration: 3.4, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            initial={{ scale: 0.9, rotate: -1 }}
            animate={{ scale: [0.9, 1.08, 0.98], rotate: [-1, 0.6, 0] }}
            transition={{ duration: 3.7, ease: "easeInOut" }}
          >
            <defs>
              <filter id="blueprint-glow">
                <feGaussianBlur stdDeviation="0.45" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="line-glow" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#f1fbff" />
                <stop offset="55%" stopColor="#a8d9ff" />
                <stop offset="100%" stopColor="#d6a7b5" />
              </radialGradient>
            </defs>

            <g stroke="rgba(194,226,255,0.14)" strokeWidth="0.06">
              {gridLines.map((line) => (
                <path key={`h-${line}`} d={`M 8 ${line} H 92`} />
              ))}
              {gridLines.map((line) => (
                <path key={`v-${line}`} d={`M ${line} 8 V 92`} />
              ))}
            </g>

            <motion.g
              fill="none"
              strokeLinecap="round"
              filter="url(#blueprint-glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.92, 0] }}
              transition={{ duration: 3.9, times: [0, 0.16, 0.78, 1] }}
            >
              <motion.path
                d="M 12 77 C 22 22, 51 11, 82 15"
                stroke="rgba(235,248,255,0.62)"
                strokeWidth="0.26"
                pathLength={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.6, ease: "easeInOut" }}
              />
              <motion.path
                d={spiralPath}
                stroke="url(#line-glow)"
                strokeWidth="0.32"
                pathLength={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.1, ease: "easeInOut" }}
              />
              <circle
                cx="36"
                cy="33"
                r="25"
                stroke="rgba(221,154,170,0.34)"
                strokeWidth="0.18"
              />
              <circle
                cx="68"
                cy="25"
                r="15"
                stroke="rgba(236,245,255,0.5)"
                strokeWidth="0.16"
              />
              <circle
                cx="70"
                cy="55"
                r="29"
                stroke="rgba(245,238,214,0.28)"
                strokeWidth="0.17"
              />
              <circle
                cx="63"
                cy="46"
                r="7.5"
                stroke="rgba(235,248,255,0.54)"
                strokeWidth="0.2"
              />
              <circle
                cx="67"
                cy="43"
                r="4.3"
                stroke="rgba(221,154,170,0.42)"
                strokeWidth="0.15"
              />
              <circle
                cx="70"
                cy="41"
                r="2.4"
                stroke="rgba(245,238,214,0.45)"
                strokeWidth="0.14"
              />
              <path
                d="M 50 8 V 92 M 8 50 H 92"
                stroke="rgba(194,226,255,0.18)"
                strokeWidth="0.08"
              />
            </motion.g>
          </motion.svg>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.56)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(235,248,255,0.42)_0.7px,transparent_0.7px)] [background-size:5px_5px]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
