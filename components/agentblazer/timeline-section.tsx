'use client'

import { timelineEvents } from '@/lib/events'
import { Reveal } from './reveal'
import { SectionHeading } from './ui'
import { CategoryTag } from './event-card'
import { cn } from '@/lib/utils'

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The journey"
            title={
              <>
                Our <span className="ab-text-gradient">trajectory</span> so far
              </>
            }
            intro="From inauguration to industry workshops — the milestones that shaped AgentBlazer."
          />
        </Reveal>

        <ol className="relative mt-14">
          {/* vertical rail */}
          <span
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-ab-blue/50 via-ab-violet/40 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          {timelineEvents.map((event, i) => {
            const left = i % 2 === 0
            return (
              <li key={event.id} className="relative mb-8 md:mb-12">
                <Reveal>
                  <div
                    className={cn(
                      'relative flex md:w-1/2',
                      left ? 'md:pr-12' : 'md:ml-auto md:pl-12',
                    )}
                  >
                    {/* node */}
                    <span
                      className={cn(
                        'ab-anim-node absolute top-6 z-10 grid h-3 w-3 place-items-center rounded-full bg-ab-blue ring-4 ring-ink',
                        'left-[9px] md:left-auto',
                        left ? 'md:-right-[6px]' : 'md:-left-[6px]',
                      )}
                      aria-hidden
                    />
                    <div className="ml-10 flex-1 rounded-2xl ab-gradient-border bg-white/[0.02] p-5 md:ml-0">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="ab-mono text-[10px] text-ab-blue">{event.dateLabel}</span>
                        <CategoryTag category={event.category} />
                      </div>
                      <h3 className="text-pretty text-base font-semibold leading-snug tracking-tight">
                        {event.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ab-muted">
                        {event.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
