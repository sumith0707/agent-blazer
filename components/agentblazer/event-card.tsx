'use client'

import { ArrowUpRight, Bot, FlaskConical, ShieldCheck, Trophy, Radio, Users } from 'lucide-react'
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

type CatConfig = {
  icon: typeof Bot
  gradient: string
  glow: string
  glowLight: string
  glowMid: string
  pattern: 'circuit' | 'nodes' | 'waves' | 'grid' | 'hex' | 'orbit'
}

const categoryConfig: Record<EventCategory, CatConfig> = {
  'AI & ML': {
    icon: Bot,
    gradient: 'from-ab-blue/25 via-ab-cyan/15 to-surface',
    glow: 'rgba(77,163,255,0.35)',
    glowLight: 'rgba(77,163,255,0.2)',
    glowMid: 'rgba(77,163,255,0.8)',
    pattern: 'nodes',
  },
  Workshops: {
    icon: FlaskConical,
    gradient: 'from-ab-violet/25 via-ab-blue/12 to-surface',
    glow: 'rgba(139,92,246,0.35)',
    glowLight: 'rgba(139,92,246,0.2)',
    glowMid: 'rgba(139,92,246,0.8)',
    pattern: 'circuit',
  },
  Competitions: {
    icon: Trophy,
    gradient: 'from-amber-400/20 via-ab-violet/15 to-surface',
    glow: 'rgba(251,191,36,0.3)',
    glowLight: 'rgba(251,191,36,0.2)',
    glowMid: 'rgba(251,191,36,0.8)',
    pattern: 'hex',
  },
  Cybersecurity: {
    icon: ShieldCheck,
    gradient: 'from-emerald-400/20 via-ab-cyan/15 to-surface',
    glow: 'rgba(52,211,153,0.3)',
    glowLight: 'rgba(52,211,153,0.2)',
    glowMid: 'rgba(52,211,153,0.8)',
    pattern: 'grid',
  },
  'Industry Sessions': {
    icon: Radio,
    gradient: 'from-ab-blue/25 via-ab-violet/12 to-surface',
    glow: 'rgba(77,163,255,0.3)',
    glowLight: 'rgba(77,163,255,0.2)',
    glowMid: 'rgba(77,163,255,0.8)',
    pattern: 'waves',
  },
  'Club Events': {
    icon: Users,
    gradient: 'from-fuchsia-400/20 via-ab-violet/15 to-surface',
    glow: 'rgba(217,70,239,0.3)',
    glowLight: 'rgba(217,70,239,0.2)',
    glowMid: 'rgba(217,70,239,0.8)',
    pattern: 'orbit',
  },
}

const patternColor: Record<CatConfig['pattern'], string> = {
  circuit: 'rgba(139,92,246,1)',
  nodes: 'rgba(77,163,255,1)',
  waves: 'rgba(77,163,255,1)',
  grid: 'rgba(52,211,153,1)',
  hex: 'rgba(251,191,36,1)',
  orbit: 'rgba(217,70,239,1)',
}

function PatternSVG({ pattern }: { pattern: CatConfig['pattern'] }) {
  const color = patternColor[pattern]
  const opacity = '0.15'
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id={`pat-${pattern}`} width="40" height="40" patternUnits="userSpaceOnUse">
          {pattern === 'circuit' && (
            <>
              <path d="M0 20 L20 20 L20 0 M20 20 L40 20 M20 20 L20 40" stroke={color} strokeWidth="0.5" fill="none" opacity={opacity} />
              <circle cx="20" cy="20" r="2" fill={color} opacity={opacity} />
            </>
          )}
          {pattern === 'nodes' && (
            <>
              <circle cx="10" cy="10" r="1.5" fill={color} opacity={opacity} />
              <circle cx="30" cy="10" r="1.5" fill={color} opacity={opacity} />
              <circle cx="10" cy="30" r="1.5" fill={color} opacity={opacity} />
              <circle cx="30" cy="30" r="1.5" fill={color} opacity={opacity} />
              <line x1="10" y1="10" x2="30" y2="10" stroke={color} strokeWidth="0.4" opacity={opacity} />
              <line x1="10" y1="10" x2="10" y2="30" stroke={color} strokeWidth="0.4" opacity={opacity} />
              <line x1="30" y1="10" x2="30" y2="30" stroke={color} strokeWidth="0.4" opacity={opacity} />
              <line x1="10" y1="30" x2="30" y2="30" stroke={color} strokeWidth="0.4" opacity={opacity} />
            </>
          )}
          {pattern === 'waves' && (
            <path d="M0 20 Q10 10 20 20 T40 20" stroke={color} strokeWidth="0.6" fill="none" opacity={opacity} />
          )}
          {pattern === 'grid' && (
            <>
              <line x1="0" y1="0" x2="40" y2="0" stroke={color} strokeWidth="0.4" opacity={opacity} />
              <line x1="0" y1="0" x2="0" y2="40" stroke={color} strokeWidth="0.4" opacity={opacity} />
              <line x1="20" y1="0" x2="20" y2="40" stroke={color} strokeWidth="0.3" opacity="0.09" />
              <line x1="0" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.3" opacity="0.09" />
            </>
          )}
          {pattern === 'hex' && (
            <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" stroke={color} strokeWidth="0.5" fill="none" opacity={opacity} />
          )}
          {pattern === 'orbit' && (
            <>
              <circle cx="20" cy="20" r="8" stroke={color} strokeWidth="0.4" fill="none" opacity={opacity} />
              <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="0.3" fill="none" opacity="0.09" />
            </>
          )}
        </pattern>
      </defs>
      <rect width="200" height="200" fill={`url(#pat-${pattern})`} />
    </svg>
  )
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
          src={event.photos[0]}
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

  // Category-based fallback visual — no broken images, no generic placeholders
  const config = categoryConfig[event.category]
  const Icon = config.icon
  const initials = event.code.replace('EVENT_', '')

  return (
    <div
      className={cn(
        'ab-grid relative grid place-items-center overflow-hidden bg-gradient-to-br',
        config.gradient,
        className,
      )}
    >
      <PatternSVG pattern={config.pattern} />
      <div
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${config.glow}, transparent 70%)` }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl ring-1 ring-white/10"
          style={{ background: `linear-gradient(135deg, ${config.glowLight}, transparent)` }}
        >
          <Icon className="h-6 w-6" style={{ color: config.glowMid }} />
        </span>
        <span
          className="ab-mono text-[11px] font-semibold tracking-widest"
          style={{ color: config.glowMid }}
        >
          {initials}
        </span>
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
