'use client'

import { ArrowUpRight, Sparkles } from 'lucide-react'
import { IntelligenceCore } from './intelligence-core'
import { Eyebrow, GlowButton } from './ui'

const stats = [
  { value: '7', label: 'Flagship events' },
  { value: '55+', label: 'Peak participants' },
  { value: '4', label: 'Core domains' },
]

const floatingPanels = [
  {
    src: '/events/promptops/promptops-2.jpg',
    label: 'PROMPT OPS · 2K26',
    className: 'left-[-2%] top-[8%] w-40 sm:w-48 ab-anim-float',
    delay: '0s',
  },
  {
    src: '/events/gsoc/gsoc-1.jpg',
    label: 'GSOC · LLM Lab',
    className: 'right-[-3%] top-[24%] w-36 sm:w-44 ab-anim-float',
    delay: '1.4s',
  },
  {
    src: '/events/cyber/cyber-2.jpg',
    label: 'SecOps Session',
    className: 'bottom-[4%] left-[6%] w-40 sm:w-48 ab-anim-float',
    delay: '2.6s',
  },
]

export function Hero({ onJoin }: { onJoin: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* background layers */}
      <div className="ab-grid ab-anim-grid absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(77,163,255,0.22), transparent 65%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.22), transparent 65%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-7">
          <Eyebrow>Student Technology Club · SJEC Mangaluru</Eyebrow>

          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
            <span className="ab-text-gradient">The Future</span>
            <br />
            in Formation
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-ab-muted">
            AgentBlazer is a community of builders at St Joseph Engineering College exploring
            artificial intelligence, agentic systems, and cybersecurity — turning curiosity into
            hands-on capability.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <GlowButton onClick={onJoin}>
              <Sparkles className="h-4 w-4" />
              Join the Club
            </GlowButton>
            <GlowButton href="#events" variant="ghost">
              Explore Events
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </GlowButton>
          </div>

          <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-foreground">
                  {s.value}
                </dd>
                <span className="ab-mono mt-1 text-[10px] text-ab-muted">{s.label}</span>
              </div>
            ))}
          </dl>
        </div>

        {/* core + floating panels */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <IntelligenceCore />

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {floatingPanels.map((panel) => (
              <figure
                key={panel.label}
                className={`absolute overflow-hidden rounded-xl ab-glass p-1.5 shadow-2xl ${panel.className}`}
                style={{ animationDelay: panel.delay }}
              >
                <img
                  src={panel.src}
                  alt=""
                  className="h-24 w-full rounded-lg object-cover sm:h-28"
                  loading="lazy"
                />
                <figcaption className="ab-mono px-1 py-1.5 text-[9px] text-ab-muted">
                  {panel.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
