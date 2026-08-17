"use client"

/**
 * A string of faint flickering bulbs across the top of the viewport.
 * Purely decorative atmosphere — hidden from screen readers.
 */
export function FlickeringLights() {
  const bulbs = Array.from({ length: 24 })

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-between px-2"
    >
      {bulbs.map((_, i) => (
        <span
          key={i}
          className="animate-flicker mt-0 h-2 w-2 rounded-full"
          style={{
            backgroundColor: i % 3 === 0 ? "#ff7518" : "#fcd34d",
            boxShadow:
              i % 3 === 0
                ? "0 0 8px 2px rgba(255,117,24,0.6)"
                : "0 0 8px 2px rgba(252,211,77,0.5)",
            animationDelay: `${(i % 6) * 0.4}s`,
          }}
        />
      ))}
    </div>
  )
}
