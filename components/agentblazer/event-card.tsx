'use client'

import { ArrowUpRight, ImageOff } from 'lucide-react'
import type { AgentEvent, EventCategory } from '@/lib/events'
import { cn } from '@/lib/utils'

export const categoryAccent: Record<EventCategory, string> = {
  'AI & ML': 'from-ab-blue/30 to-ab-cyan/20 text-ab-cyan',
  Workshops: 'from-ab-violet/30 to-ab-blue/20 text-ab-violet',
  Competitions: 'from-amber-400/25 to-ab-violet/20 text-amber-300',
  Cybersecurity: 'from-emerald-400/25 to-ab-cyan/20 text-emerald-300',
  'Industry Sessions': 'from-ab-blue/30 to-ab-violet/20 text-ab-blue',
  'Club Events': 'from-fuchsia-400/25 to-ab-violet/20 text-fuchsia-300',
}

export function EventVisual({
  event,
  className,
  imgClassName,
}: {
  event: AgentEvent
  className?: string
  imgClassName?: string
}) {
  if (event.photos.length > 0) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <img
          src={event.photos[0] || '/placeholder.svg'}
          alt={`${event.title} — event photo`}
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105',
            imgClassName,
          )}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      </div>
    )
  }

  // Editable placeholder — no fabricated photography.
  return (
    <div
      className={cn(
        'ab-grid relative grid place-items-center overflow-hidden bg-gradient-to-br from-ab-violet/15 via-ab-blue/10 to-surface',
        className,
      )}
    >
      <div
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(77,163,255,0.35), transparent 70%)' }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <ImageOff className="h-5 w-5 text-ab-muted/70" />
        <span className="ab-mono text-[9px] text-ab-muted/70">Photos coming soon</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
    </div>
  )
}

export function CategoryTag({ category }: { category: EventCategory }) {
  return (
    <span
      className={cn(
        'ab-mono rounded-full bg-gradient-to-r px-2.5 py-1 text-[9px] ring-1 ring-white/10',
        categoryAccent[category],
      )}
    >
      {category}
    </span>
  )
}

export function EventCard({
  event,
  onOpen,
}: {
  event: AgentEvent
  onOpen: (event: AgentEvent) => void
}) {
  return (
    <article className="ab-gradient-border group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.02]">
      <button
        type="button"
        onClick={() => onOpen(event)}
        className="flex h-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ab-blue/70"
        aria-label={`View details for ${event.title}`}
      >
        <EventVisual event={event} className="h-44 w-full" />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-2">
            <CategoryTag category={event.category} />
            <span className="ab-mono text-[9px] text-ab-muted">{event.code}</span>
          </div>
          <h3 className="text-pretty text-lg font-semibold leading-snug tracking-tight">
            {event.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-ab-muted">{event.summary}</p>
          <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4">
            <span className="ab-mono text-[10px] text-ab-muted">{event.dateLabel}</span>
            <span className="inline-flex items-center gap-1 text-sm text-ab-blue">
              Details
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </button>
    </article>
  )
}
