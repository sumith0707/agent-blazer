'use client'

/**
 * Pure CSS/SVG "intelligence core": tilted 3D orbital rings around a glowing
 * wireframe sphere. No WebGL — reliable everywhere and honors reduced motion
 * (animations are disabled via the prefers-reduced-motion rule in globals.css).
 */
export function IntelligenceCore() {
  const rings = [
    { size: 100, dur: 26, rev: false, color: 'rgba(77,163,255,0.55)', nodes: 3 },
    { size: 74, dur: 18, rev: true, color: 'rgba(139,92,246,0.55)', nodes: 2 },
    { size: 52, dur: 12, rev: false, color: 'rgba(34,211,238,0.5)', nodes: 2 },
  ]

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      aria-hidden="true"
      style={{ perspective: '1100px' }}
    >
      {/* ambient glow */}
      <div
        className="ab-glow-pulse absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(77,163,255,0.45), rgba(139,92,246,0.22) 45%, transparent 70%)',
        }}
      />

      {/* orbital rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="ab-orbit-scene relative h-full w-full">
          {rings.map((ring, i) => (
            <div
              key={i}
              className={`absolute left-1/2 top-1/2 rounded-full ${
                ring.rev ? 'ab-orbit-rev' : 'ab-orbit'
              }`}
              style={{
                width: `${ring.size}%`,
                height: `${ring.size}%`,
                marginLeft: `-${ring.size / 2}%`,
                marginTop: `-${ring.size / 2}%`,
                border: `1px solid ${ring.color}`,
                boxShadow: `0 0 24px -6px ${ring.color}`,
                animationDuration: `${ring.dur}s`,
              }}
            >
              {Array.from({ length: ring.nodes }).map((_, n) => {
                const angle = (360 / ring.nodes) * n
                return (
                  <div
                    key={n}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <span
                      className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        background: '#eaf3ff',
                        boxShadow: `0 0 14px 3px ${ring.color}`,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* central wireframe sphere */}
      <div className="ab-core-breathe absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <radialGradient id="core-fill" cx="42%" cy="38%" r="70%">
              <stop offset="0%" stopColor="#bcd8ff" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#4da3ff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
            </radialGradient>
            <linearGradient id="core-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7ec2ff" />
              <stop offset="100%" stopColor="#b79bff" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="72" fill="url(#core-fill)" />
          <circle
            cx="100"
            cy="100"
            r="72"
            fill="none"
            stroke="url(#core-line)"
            strokeOpacity="0.8"
            strokeWidth="1"
          />
          {/* meridians */}
          {[18, 36, 54].map((rx) => (
            <ellipse
              key={rx}
              cx="100"
              cy="100"
              rx={rx}
              ry="72"
              fill="none"
              stroke="url(#core-line)"
              strokeOpacity="0.35"
              strokeWidth="0.8"
            />
          ))}
          {/* parallels */}
          {[34, 58].map((ry) => (
            <ellipse
              key={ry}
              cx="100"
              cy="100"
              rx="72"
              ry={ry}
              fill="none"
              stroke="url(#core-line)"
              strokeOpacity="0.3"
              strokeWidth="0.8"
            />
          ))}
          <circle cx="100" cy="100" r="8" fill="#eaf3ff" />
          <circle cx="100" cy="100" r="8" fill="none" stroke="#4da3ff" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  )
}
