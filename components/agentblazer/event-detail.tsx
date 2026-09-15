'use client'

import { useState } from 'react'
import { CalendarDays, Users, Tag } from 'lucide-react'
import type { AgentEvent } from '@/lib/events'
import { Modal } from './modal'
import { CategoryTag, EventVisual } from './event-card'
import { Chip } from './ui'

export function EventDetail({
  event,
  open,
  onClose,
}: {
  event: AgentEvent | null
  open: boolean
  onClose: () => void
}) {
  const [active, setActive] = useState(0)

  if (!event) return null
  const hasPhotos = event.photos.length > 0
  const cover = hasPhotos ? event.photos[Math.min(active, event.photos.length - 1)] : null

  return (
    <Modal open={open} onClose={onClose} labelledBy="event-detail-title">
      <div className="relative h-56 w-full sm:h-64">
        {cover ? (
          <img
            src={cover}
            alt={`${event.title} — event photo ${active + 1}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <EventVisual event={event} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center gap-2">
          <CategoryTag category={event.category} />
          <span className="ab-mono text-[9px] text-ab-muted">{event.code}</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-5 sm:p-7">
        <div className="flex flex-col gap-3">
          <h2
            id="event-detail-title"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {event.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-ab-muted">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-ab-blue" />
              {event.dateLabel}
            </span>
          </div>
        </div>

        <p className="text-pretty leading-relaxed text-foreground/85">{event.description}</p>

        {hasPhotos && event.photos.length > 1 ? (
          <div className="flex gap-2 overflow-x-auto pb-2 ab-scrollbar-hide">
            {event.photos.map((photo, i) => (
              <button
                key={photo}
                type="button"
                onClick={() => setActive(i)}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg ring-1 transition-all ${
                  i === active
                    ? 'ring-ab-blue ring-2'
                    : 'opacity-60 ring-white/10 hover:opacity-100'
                }`}
                aria-label={`View photo ${i + 1}`}
                aria-pressed={i === active}
              >
                <img src={photo} alt="" className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        ) : null}

        <div>
          <h3 className="ab-mono mb-3 flex items-center gap-2 text-[10px] text-ab-muted">
            <Tag className="h-3.5 w-3.5" />
            Topics covered
          </h3>
          <div className="flex flex-wrap gap-2">
            {event.topics.map((topic) => (
              <Chip key={topic}>{topic}</Chip>
            ))}
          </div>
        </div>

        {event.people.length > 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h3 className="ab-mono mb-3 flex items-center gap-2 text-[10px] text-ab-muted">
              <Users className="h-3.5 w-3.5" />
              People
            </h3>
            <ul className="flex flex-col gap-2.5">
              {event.people.map((person) => (
                <li key={person.role + person.name} className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="ab-mono w-40 flex-shrink-0 text-[10px] text-ab-blue">
                    {person.role}
                  </span>
                  <span className="text-sm text-foreground/85">{person.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Modal>
  )
}
