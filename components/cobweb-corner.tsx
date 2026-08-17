/**
 * Decorative cobweb tucked into a page corner.
 * `position` picks which corner and flips the SVG accordingly.
 */
export function CobwebCorner({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  className?: string
}) {
  const rotation = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-x-[-1] scale-y-[-1]",
  }[position]

  const anchor = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  }[position]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={`pointer-events-none absolute ${anchor} ${rotation} h-24 w-24 text-parchment/25 md:h-32 md:w-32 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.7"
    >
      <path d="M0 0 L120 120 M0 0 L90 20 M0 0 L20 90 M0 0 L60 40 M0 0 L40 60" />
      <path d="M22 8 Q30 30 8 22" />
      <path d="M46 16 Q58 58 16 46" />
      <path d="M74 26 Q92 92 26 74" />
      <path d="M100 40 Q116 116 40 100" />
    </svg>
  )
}
