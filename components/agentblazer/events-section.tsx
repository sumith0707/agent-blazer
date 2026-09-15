'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import { events, FILTERS, featuredEvent, type AgentEvent, type EventCategory } from '@/lib/events'
import { Reveal } from './reveal'
import { SectionHeading, Chip } from './ui'
import { CategoryTag, EventCard, EventVisual } from './event-card'
import { EventDetail } from './event-detail'
import { cn } from '@/lib/utils'

export function EventsSection() {
  const [filter, setFilter] = useState<'All' | EventCategory>('All')
  const [selected, setSelected] = useState<AgentEvent | null>(null)
  const [open, setOpen] = useState(false)

  const openEvent = (event: AgentEvent) => {
    setSelected(event)
    setOpen(true)
  }

  const visible = useMemo(
    () => (filter === 'All' ? events : events.filter((e) => e.category === filter)),
    [filter],
  )

  return (
    <section id="events" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we've built"
            title={
              <>
                Events &amp; <span className="ab-text-gradient">experiments</span>
              </>
            }
            intro="A growing archive of workshops, competitions, and industry sessions — each one a step deeper into the technologies we care about."
          />
        </Reveal>

        {/* Featured */}
        <Reveal delay={80}>
          <button
            type="button"
            onClick={() => openEvent(featuredEvent)}
            className="group mt-12 grid w-full overflow-hidden rounded-3xl ab-gradient-border bg-white/[0.02] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ab-blue/70 lg:grid-cols-2"
            aria-label={`View details for ${featuredEvent.title}`}
          >
            <EventVisual event={featuredEvent} className="h-64 w-full lg:h-full" />
            <div className="flex flex-col gap-4 p-6 sm:p-8">
              <span className="ab-mono inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400/20 to-ab-violet/20 px-3 py-1 text-[10px] text-amber-300 ring-1 ring-white/10">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </span>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {featuredEvent.title}
              </h3>
              <p className="text-pretty leading-relaxed text-ab-muted">{featuredEvent.summary}</p>
              <div className="flex flex-wrap gap-2">
                {featuredEvent.topics.slice(0, 5).map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                <span className="ab-mono text-[10px] text-ab-muted">{featuredEvent.dateLabel}</span>
                <span className="inline-flex items-center gap-1 text-sm text-ab-blue">
                  View event
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </button>
        </Reveal>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'ab-mono rounded-full px-4 py-2 text-[10px] transition-all duration-300',
                filter === f
                  ? 'bg-gradient-to-r from-ab-blue to-ab-violet text-ink'
                  : 'border border-white/12 bg-white/[0.02] text-ab-muted hover:border-white/25 hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((event, i) => (
            <Reveal key={event.id} delay={(i % 3) * 80}>
              <EventCard event={event} onOpen={openEvent} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ab-muted">No events in this category yet.</p>
        ) : null}
      </div>

      <EventDetail key={selected?.id ?? 'none'} event={selected} open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
